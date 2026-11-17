// Maquetas añadidas en la reorganización del laboratorio: células animal y vegetal (mallas con texturas),
// agujero negro (trazado de rayos en la tarjeta gráfica) y ondas. Al final se fija qué maquetas aparecen
// en cada sección y en qué orden.
(function () {
  const PI = Math.PI, byId = (id) => MODELS.find((m) => m.id === id);
  const b64 = (s, T) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new T(u.buffer); };
  const VERZONAS = /[?&]zonas\b/.test(location.search); // ayuda de desarrollo: pinta cada zona de un color plano
  const TINTES = [0xffffff, 0xff00ff, 0x00ffff, 0x00ff00, 0xffff00, 0xff8800, 0x3366ff, 0x333333];

  // ───────────── Malla con texturas dividida en zonas seleccionables ─────────────
  // El modelo llega en una sola pieza (data/modelos/<clave>.js, ver herramientas/convertir_mallas.py). Cada triángulo
  // se asigna a una parte con cfg.zona(R, G, B, x, y, z): color de la textura en su centro y posición (0–1 en la caja).
  function mallaTexturizada(cfg) {
    let geo = null, zonas = null; // se calculan una sola vez y se reutilizan entre visitas
    return { id: cfg.id, name: cfg.name, area: cfg.area, subj: cfg.subj, cam: cfg.cam, target: [0, 0, 0], credit: cfg.credit, info: cfg.info, parts: cfg.parts,
      luz: 0.6, resalte: [0x151515, 0x241800], // texturas claras: menos luz y un resaltado más discreto
      controls: [{ id: 'giro', label: 'Giro automático', type: 'check', value: true }, { id: 'luz', label: 'Brillo', type: 'range', min: 0.3, max: 1.2, step: 0.05, value: 0.6 }],
      build({ g, p, hud, api }) {
        let alive = true, state = 'Cargando el modelo (11 MB)…'; const mats = [];
        api.luz(p.luz);
        g.userData.dispose = () => { alive = false; mats.forEach((m) => { ['map', 'roughnessMap'].forEach((k) => m[k] && m[k].dispose()); m.dispose(); }); };
        function split(D, img) {
          const pos = geo.attributes.position.array, uv = geo.attributes.uv.array, idx = geo.index.array, bb = geo.boundingBox, sz = bb.max.clone().sub(bb.min);
          const cv = document.createElement('canvas'), W = cv.width = img.naturalWidth, H = cv.height = img.naturalHeight, cx = cv.getContext('2d');
          cx.drawImage(img, 0, 0); const px = cx.getImageData(0, 0, W, H).data, out = {};
          Object.keys(cfg.parts).forEach((k) => { out[k] = []; });
          for (let t = 0; t < idx.length; t += 3) {
            const a = idx[t], b = idx[t + 1], c = idx[t + 2];
            const u = (uv[2 * a] + uv[2 * b] + uv[2 * c]) / 3 / 65535, v = (uv[2 * a + 1] + uv[2 * b + 1] + uv[2 * c + 1]) / 3 / 65535;
            const o = 4 * (Math.min(H - 1, Math.floor(v * H)) * W + Math.min(W - 1, Math.floor(u * W)));
            const k = cfg.zona(px[o], px[o + 1], px[o + 2], ((pos[3 * a] + pos[3 * b] + pos[3 * c]) / 3 - bb.min.x) / sz.x, ((pos[3 * a + 1] + pos[3 * b + 1] + pos[3 * c + 1]) / 3 - bb.min.y) / sz.y, ((pos[3 * a + 2] + pos[3 * b + 2] + pos[3 * c + 2]) / 3 - bb.min.z) / sz.z);
            out[k].push(a, b, c);
          }
          zonas = out;
        }
        function show() {
          if (!alive) return; const D = MOL[cfg.key];
          const tl = new THREE.TextureLoader(), tex = (u) => { const t = tl.load(u); t.flipY = false; t.anisotropy = 4; return t; };
          const tm = tex(D.map), tr = D.mr ? tex(D.mr) : null;
          Object.keys(zonas).forEach((k, i) => {
            if (!zonas[k].length) return;
            const ge = new THREE.BufferGeometry(); ['position', 'normal', 'uv'].forEach((n) => ge.setAttribute(n, geo.attributes[n]));
            ge.setIndex(new THREE.BufferAttribute(new Uint32Array(zonas[k]), 1)); ge.boundingSphere = geo.boundingSphere;
            const m = VERZONAS ? new THREE.MeshStandardMaterial({ color: TINTES[i % TINTES.length], side: THREE.DoubleSide })
              : new THREE.MeshStandardMaterial({ map: tm, roughnessMap: tr, roughness: 1, metalness: 0, side: THREE.DoubleSide });
            mats.push(m);
            const mesh = new THREE.Mesh(ge, m); mesh.userData.part = k; g.add(mesh);
          });
          state = '';
        }
        function make() {
          if (!alive) return; const D = MOL[cfg.key];
          if (!geo) {
            const q = b64(D.p, Uint16Array), pos = new Float32Array(q.length), sc = cfg.tam / Math.max(D.max[0] - D.min[0], D.max[1] - D.min[1], D.max[2] - D.min[2]);
            for (let i = 0; i < q.length; i++) { const a = i % 3; pos[i] = ((q[i] / 65535 - 0.5) * (D.max[a] - D.min[a])) * sc; }
            geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geo.setAttribute('normal', new THREE.BufferAttribute(b64(D.n, Int8Array), 3, true));
            geo.setAttribute('uv', new THREE.BufferAttribute(b64(D.u, Uint16Array), 2, true));
            geo.setIndex(new THREE.BufferAttribute(b64(D.i, Uint32Array), 1));
            geo.computeBoundingSphere(); geo.computeBoundingBox();
          }
          if (zonas) return show();
          state = 'Preparando las zonas…';
          const img = new Image();
          img.onload = () => { try { split(D, img); } catch (e) { const k = Object.keys(cfg.parts)[0]; zonas = {}; zonas[k] = Array.from(geo.index.array); } show(); };
          img.onerror = () => { state = 'No se pudo leer la textura.'; }; img.src = D.map;
        }
        if (window.MOL && MOL[cfg.key]) make();
        else { const s = document.createElement('script'); s.src = 'data/modelos/' + cfg.key + '.js'; s.onload = make; s.onerror = () => { state = 'No se pudo cargar el modelo.'; }; document.head.appendChild(s); }
        return { set(q) { api.luz(q.luz); }, update(t, dt) { if (p.giro) g.rotation.y += dt * 0.2; hud(state); } };
      } };
  }
  const CREDITO = 'Modelo de Grab3D (grab3d.com), licencia CC0. Según su ficha, la malla y las texturas se generaron con una herramienta de IA y se retocaron a mano: es una ilustración didáctica, no una reconstrucción a partir de microscopía. Las zonas seleccionables se separan por el color de la textura y son aproximadas en los bordes.';

  // ───────────── Célula animal ─────────────
  (function () {
    const old = byId('celula'); if (!old) return;
    const P = old.parts;
    const model = mallaTexturizada({ id: 'celula', name: 'Célula animal', area: 'Biología', subj: 'biologia', key: 'celula_animal', tam: 9, cam: [-7, 5, 11], credit: CREDITO,
      info: [
        'La célula es la unidad más pequeña con vida. Imagínala como una pequeña fábrica: una envoltura flexible la rodea, un centro de mando guarda las instrucciones y varios talleres producen energía y materiales. A esta le falta una cuña para que puedas ver el interior.',
        'Es una célula eucariota: su ADN está dentro de un núcleo y el citoplasma contiene orgánulos especializados. El sistema de endomembranas (retículo, Golgi, lisosomas) fabrica, modifica y recicla moléculas, y las mitocondrias producen el ATP.',
        'La compartimentación permite mantener condiciones químicas distintas en cada orgánulo: pH ácido en los lisosomas o un gradiente de protones en la membrana mitocondrial interna. Mitocondrias y núcleo están delimitados por doble membrana; las primeras proceden de una endosimbiosis bacteriana.'],
      parts: {
        membrana: { n: 'Membrana y citoplasma', d: [P.membrana.d[0] + ' El interior grisáceo es el citoplasma, el «gel» donde flotan los orgánulos.', P.membrana.d[1] + ' El citoplasma es el medio acuoso donde ocurren muchas reacciones del metabolismo.', P.membrana.d[2]] },
        nucleo: { n: 'Núcleo y nucléolo', d: [P.nucleo.d[0] + ' La zona más oscura del centro es el nucléolo.', P.nucleo.d[1] + ' En el nucléolo se fabrican los ribosomas.', P.nucleo.d[2]] },
        re: P.re, golgi: P.golgi,
        mitocondria: { n: 'Mitocondrias y ribosomas', d: [P.mitocondria.d[0] + ' Los puntitos naranjas sueltos son ribosomas, que fabrican proteínas.', P.mitocondria.d[1] + ' Los ribosomas, mucho más pequeños, traducen el ARN mensajero en proteínas.', P.mitocondria.d[2]] },
        lisosoma: { n: 'Lisosomas y vesículas', d: P.lisosoma.d },
      },
      zona(R, G, B, x, y, z) {
        const mx = Math.max(R, G, B), mn = Math.min(R, G, B);
        if (R > 190 && G > 90 && B < 140 && R > B * 1.5) return 'mitocondria';
        if (mx - mn < 55 || Math.hypot(x - 0.5, y - 0.5, z - 0.5) > 0.44) return 'membrana'; // lo que está en la superficie exterior es membrana
        if (B >= G && R > G * 1.08 && B > R * 0.95) return Math.hypot(x - 0.5, y - 0.5, z - 0.5) < 0.3 ? 'nucleo' : 'lisosoma';
        if (G >= B && G > R * 1.15) return 'golgi';
        if (B > G && B > R * 1.25) return 're';
        return 'membrana';
      } });
    MODELS.splice(MODELS.indexOf(old), 1, model);
  })();

  // ───────────── Célula vegetal ─────────────
  MODELS.push(mallaTexturizada({ id: 'celula_vegetal', name: 'Célula vegetal', area: 'Biología', subj: 'biologia', key: 'celula_vegetal', tam: 10, cam: [-6, 8, 10], credit: CREDITO,
    info: [
      'Una célula de planta, sin la tapa para que veas el interior. Se parece a la animal, pero tiene tres cosas propias: una pared rígida por fuera, una gran bolsa de agua en el centro y unos orgánulos verdes, los cloroplastos, con los que fabrica su alimento usando la luz.',
      'La pared de celulosa da forma y sostén; la vacuola central almacena agua y mantiene la célula tensa; los cloroplastos realizan la fotosíntesis. Como la célula animal, tiene núcleo, mitocondrias, retículo y Golgi, pero no tiene centriolos.',
      'La presión de turgencia, que la vacuola ejerce contra la pared, sostiene los tejidos no leñosos. Los cloroplastos, como las mitocondrias, tienen doble membrana, ADN propio y origen endosimbiótico. Las células vecinas se comunican por plasmodesmos, canales que atraviesan la pared (las pequeñas punteaduras de la superficie).'],
    parts: {
      pared: { n: 'Pared celular', d: ['La «caja» rígida que rodea la célula y le da forma. Las células animales no la tienen.', 'Formada sobre todo por celulosa. Protege la célula y evita que estalle cuando absorbe agua. Las punteaduras son plasmodesmos, canales que la comunican con las células vecinas.', 'Microfibrillas de celulosa embebidas en una matriz de hemicelulosas y pectinas. La pared primaria es extensible; en tejidos de sostén se añade una pared secundaria con lignina. La lámina media, rica en pectina, pega las células entre sí.'] },
      citoplasma: { n: 'Membrana y citoplasma', d: ['La capa clara bajo la pared: la membrana, que controla lo que entra y sale, y el citoplasma donde flotan los orgánulos.', 'La membrana plasmática es una bicapa de fosfolípidos con proteínas, pegada a la cara interna de la pared. En el citoplasma ocurren muchas reacciones del metabolismo.', 'En las células vegetales el citoplasma queda reducido a una fina capa entre la vacuola y la pared, y se mueve en corrientes (ciclosis) impulsadas por actina y miosina.'] },
      vacuola: { n: 'Vacuola central', d: ['Una gran bolsa llena de agua que ocupa casi toda la célula. Si se vacía, la planta se marchita.', 'Almacena agua, sales, azúcares, pigmentos y desechos. Al llenarse empuja contra la pared y mantiene la célula tersa (turgencia).', 'Delimitada por el tonoplasto, que tiene bombas de protones y acuaporinas. Puede ocupar hasta el 90 % del volumen celular; su pH ácido y sus hidrolasas le dan además una función parecida a la de los lisosomas.'] },
      cloroplasto: { n: 'Cloroplastos', d: ['Los orgánulos verdes: captan la luz del sol y fabrican el alimento de la planta.', 'Realizan la fotosíntesis: con luz, agua y CO₂ producen glucosa y liberan oxígeno. Su color se debe a la clorofila.', 'Doble membrana y un sistema interno de tilacoides apilados en granas (las estrías que se ven en la superficie). La fase luminosa ocurre en los tilacoides y el ciclo de Calvin en el estroma. Tienen ADN y ribosomas propios.'] },
      nucleo: { n: 'Núcleo', d: ['El centro de mando: guarda el ADN con las instrucciones de la célula.', 'Rodeado por una doble membrana con poros. En él se replica el ADN y se transcribe a ARN. La zona más oscura es el nucléolo, donde se fabrican los ribosomas.', 'En las células vegetales maduras el núcleo queda desplazado hacia un lado por la vacuola. La envoltura nuclear se continúa con el retículo endoplasmático.'] },
      re: { n: 'Retículo y aparato de Golgi', d: ['Redes de sacos y canales donde se fabrican, empaquetan y reparten materiales.', 'El retículo rugoso sintetiza proteínas y el liso, lípidos. El Golgi las modifica y las envía a su destino en vesículas.', 'En las plantas el Golgi está repartido en muchas pilas pequeñas (dictiosomas) y fabrica además los polisacáridos de la pared, como pectinas y hemicelulosas.'] },
      mitocondria: { n: 'Mitocondrias', d: ['Las centrales de energía. Las plantas también las tienen, además de los cloroplastos.', 'Realizan la respiración celular: obtienen ATP a partir de los azúcares que fabricaron los cloroplastos.', 'Fotosíntesis y respiración son complementarias: la primera almacena energía en glucosa y la segunda la libera como ATP. De noche, la planta depende solo de sus mitocondrias.'] },
    },
    zona(R, G, B, x, y, z) {
      const mx = Math.max(R, G, B), mn = Math.min(R, G, B), rad = Math.hypot(x - 0.5, z - 0.5); // rad: distancia al eje vertical
      if (B > 205 && G > 165 && R < 170 && G > R * 1.15) return 'vacuola';
      if (B > 170 && B > G * 1.15) return R > G + 22 ? 'nucleo' : 're';
      if (R > 215 && G > 130 && G < 205 && B < 140 && R > G * 1.12) return 'mitocondria';
      // Verdes: la pared es clara y está en el contorno; los cloroplastos son oscuros y están dentro
      if (G > R * 1.35 && G > B * 1.5) return rad > 0.44 || y < 0.25 || (G > 175 && rad > 0.36) ? 'pared' : 'cloroplasto';
      if (G > 175 && G >= R && B < 150) return R > G * 0.74 && rad < 0.44 ? 'citoplasma' : 'pared';
      if (mx - mn < 40) return 'citoplasma';
      return 'citoplasma';
    } }));

  // ───────────── Agujero negro ─────────────
  // Cada píxel lanza un rayo de luz y lo integra paso a paso en el campo de un agujero negro de Schwarzschild
  // (unidades: radio del horizonte = 1). Así aparecen solos la sombra, el anillo de fotones y la imagen del disco
  // curvada por encima y por debajo. Sin rotación del agujero ni corrimiento al rojo: es una aproximación.
  MODELS.push({ id: 'agujero', name: 'Agujero negro', area: 'Física y astronomía', subj: 'fisica', cam: [0, 2.6, 21], target: [0, 0, 0],
    credit: 'Maqueta generada por código: trazado de rayos de luz alrededor de un agujero negro sin rotación (métrica de Schwarzschild). Los colores y la textura del disco son una recreación artística.',
    controls: [{ id: 'lente', label: 'Curvar la luz (lente gravitatoria)', type: 'check', value: true }, { id: 'disco', label: 'Disco de acreción', type: 'check', value: true },
      { id: 'brillo', label: 'Brillo del disco', type: 'range', min: 0.4, max: 2.5, step: 0.1, value: 1.2 }, { id: 'vel', label: 'Velocidad de giro del disco', type: 'range', min: 0, max: 3, step: 0.1, value: 1 }],
    info: [
      'Un agujero negro es un lugar donde hay tanta masa apretada que nada puede escapar de él, ni siquiera la luz. Por eso se ve como una esfera negra. A su alrededor gira un disco de gas muy caliente que brilla. Desactiva «Curvar la luz» para ver cómo sería sin gravedad: la diferencia es lo que hace el agujero con la luz.',
      'La gravedad del agujero curva la trayectoria de la luz. Por eso ves la parte de atrás del disco doblada por encima y por debajo de la sombra, y un anillo fino pegado a ella: luz que ha dado casi una vuelta completa antes de llegar a ti. Un lado del disco brilla más porque el gas se acerca a nosotros a gran velocidad (efecto Doppler).',
      'Agujero de Schwarzschild, con radio del horizonte rₛ = 2GM/c². La esfera de fotones está en 1,5 rₛ y la sombra aparente tiene un radio de √27/2 ≈ 2,6 rₛ. El disco empieza en la última órbita circular estable (ISCO), a 3 rₛ. Cada rayo se integra con d²x/dλ² = −(3/2)·h²·x/r⁵, donde h es su momento angular. No se incluyen la rotación del agujero (métrica de Kerr) ni el corrimiento al rojo gravitatorio.'],
    parts: {
      horizonte: { n: 'Horizonte de sucesos', d: ['La frontera sin retorno: lo que la cruza ya no puede salir. Es el borde de la esfera negra.', 'Superficie donde la velocidad de escape iguala a la de la luz. No es una superficie material: quien la cruzase no notaría nada especial en ese instante.', 'En r = rₛ = 2GM/c². Para un agujero de 10 masas solares mide unos 30 km; para Sagitario A*, en el centro de la Vía Láctea, unos 12 millones de km. Visto desde lejos, el tiempo de un objeto que cae parece detenerse en el horizonte.'] },
      disco: { n: 'Disco de acreción', d: ['Gas y polvo que giran alrededor del agujero antes de caer. El rozamiento lo calienta tanto que brilla.', 'La materia no cae en línea recta: gira en espiral y pierde energía por fricción. Alcanza millones de grados y emite sobre todo rayos X. Es lo que permite «ver» un agujero negro.', 'La acreción convierte en radiación hasta un 6 % de la masa en reposo en Schwarzschild (hasta un 42 % en Kerr), mucho más que la fusión nuclear (0,7 %). El lado que se acerca se ve más brillante por el haz relativista (beaming Doppler).'] },
      isco: { n: 'Borde interior del disco (ISCO)', d: ['El disco no llega hasta el agujero: tiene un hueco. Por dentro de ese borde ya no hay órbitas estables.', 'Es la última órbita circular estable. Más cerca, la materia cae en espiral rápidamente hacia el horizonte sin poder orbitar.', 'En Schwarzschild está en 3 rₛ (6GM/c²). En un agujero en rotación se acerca al horizonte para órbitas que giran en el mismo sentido, lo que permite estimar el espín a partir del espectro del disco.'] },
      fotones: { n: 'Esfera y anillo de fotones', d: ['El anillo fino y brillante pegado a la sombra: luz que ha dado vueltas alrededor del agujero.', 'A 1,5 veces el radio del horizonte la luz puede describir órbitas circulares. Los rayos que pasan rozando esa distancia dan una o más vueltas y forman el anillo.', 'Las órbitas de fotones en 1,5 rₛ son inestables. El parámetro de impacto crítico, b = (3√3/2)·rₛ, fija el tamaño de la sombra: lo que midió el Telescopio del Horizonte de Sucesos en M87* (2019) y Sagitario A* (2022).'] },
      lente: { n: 'Lente gravitatoria', d: ['La gravedad dobla la luz como una lupa. Por eso las estrellas del fondo se deforman cerca del agujero.', 'La masa curva el espacio-tiempo y la luz sigue esa curvatura. Vemos la parte trasera del disco por encima y por debajo, y las estrellas de detrás desplazadas formando arcos.', 'Para rayos lejanos, el ángulo de desviación es α = 4GM/(c²·b) = 2rₛ/b, el doble de la predicción newtoniana; lo confirmó el eclipse de 1919. Cuando fuente, lente y observador se alinean se forma un anillo de Einstein.'] },
      singularidad: { n: 'Singularidad', d: ['El centro del agujero, donde toda la masa estaría concentrada en un punto. No se puede ver.', 'Según la relatividad general, la densidad y la curvatura se hacen infinitas en el centro. Queda oculta tras el horizonte.', 'Las ecuaciones de Einstein dejan de ser válidas ahí; se espera que una teoría cuántica de la gravedad la sustituya por algo finito. En Schwarzschild es un punto; en Kerr, un anillo.'] },
    },
    build({ g, p, hud, api }) {
      const uni = { uT: { value: 0 }, uLens: { value: 1 }, uDisk: { value: 1 }, uBright: { value: 1.2 } };
      const sky = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), new THREE.ShaderMaterial({ uniforms: uni, side: THREE.BackSide, depthWrite: false, depthTest: false,
        vertexShader: 'varying vec3 vDir; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vDir = wp.xyz - cameraPosition; gl_Position = projectionMatrix * viewMatrix * wp; }',
        fragmentShader: `precision highp float;
          varying vec3 vDir; uniform float uT, uLens, uDisk, uBright;
          const float RIN = 3.0, ROUT = 9.5;
          float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
          float noise(vec2 x){ vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(vec3(i, 1.0)), hash(vec3(i + vec2(1.0, 0.0), 1.0)), f.x), mix(hash(vec3(i + vec2(0.0, 1.0), 1.0)), hash(vec3(i + vec2(1.0, 1.0), 1.0)), f.x), f.y); }
          vec3 stars(vec3 d){
            vec3 col = vec3(0.0);
            for (int k = 0; k < 2; k++) { float s = k == 0 ? 70.0 : 150.0; vec3 q = d * s, c = floor(q), f = fract(q) - 0.5; float h = hash(c + float(k) * 13.0);
              col += mix(vec3(1.0, 0.82, 0.65), vec3(0.72, 0.84, 1.0), hash(c + 7.0)) * step(0.993, h) * smoothstep(0.32, 0.0, length(f)) * (k == 0 ? 1.6 : 0.8); }
            float band = exp(-abs(d.y * 0.9 + d.x * 0.35) * 5.0);
            return col + vec3(0.05, 0.06, 0.1) * band * (0.4 + 0.6 * noise(d.xz * 9.0 + d.y * 4.0));
          }
          vec4 disk(vec3 c, vec3 v){
            float r = length(c.xz), x = (r - RIN) / (ROUT - RIN), fade = smoothstep(0.0, 0.06, x) * smoothstep(1.0, 0.5, x);
            float ang = atan(c.z, c.x) + uT * 2.2 / pow(r, 1.5);
            vec2 q = vec2(cos(ang), sin(ang)) * r;
            float n = 0.55 * noise(q * 1.4) + 0.3 * noise(q * 3.3 + 5.0) + 0.15 * noise(q * 7.0 + 11.0), rings = 0.55 + 0.45 * noise(vec2(r * 4.5, 1.0));
            float temp = pow(RIN / r, 1.3);
            vec3 col = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.92, 0.75), temp);
            float dop = 1.0 + 0.62 * dot(normalize(vec3(c.z, 0.0, -c.x)), -normalize(v)) * sqrt(RIN / r);
            return vec4(col * (0.35 + 1.4 * n) * rings * temp * pow(max(dop, 0.15), 3.0) * 2.4, fade * 0.94);
          }
          void main(){
            vec3 p = cameraPosition, v = normalize(vDir), col = vec3(0.0);
            float h2 = dot(cross(p, v), cross(p, v)), T = 1.0, lim = max(45.0, length(p) + 2.0); bool caido = false;
            for (int i = 0; i < 230; i++) {
              float r = length(p);
              if (r < 1.0) { caido = true; break; }
              if (r > lim && dot(p, v) > 0.0) break;
              float dt = clamp(0.07 * (r - 0.55), 0.02, 3.0);
              v += -1.5 * h2 * p / pow(r, 5.0) * uLens * dt;
              vec3 np = p + v * dt;
              if (uDisk > 0.5 && p.y * np.y < 0.0) {
                vec3 c = mix(p, np, p.y / (p.y - np.y)); float rr = length(c.xz);
                if (rr > RIN && rr < ROUT) { vec4 d = disk(c, v); col += T * d.rgb * d.a * uBright; T *= 1.0 - d.a; }
              }
              p = np;
            }
            if (!caido) col += T * stars(normalize(v));
            gl_FragColor = vec4(1.0 - exp(-col), 1.0);
          }` }));
      sky.frustumCulled = false; sky.renderOrder = -10; g.add(sky);
      // Volúmenes invisibles para poder seleccionar las partes con el puntero
      const oculto = () => { const m = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }); m.visible = false; return m; };
      const hz = new THREE.Mesh(new THREE.SphereGeometry(1.25, 24, 16), oculto()); hz.userData.part = 'horizonte'; g.add(hz);
      const dk = new THREE.Mesh(new THREE.RingGeometry(3, 9.5, 48), oculto()); dk.rotation.x = -PI / 2; dk.userData.part = 'disco'; g.add(dk);
      return { set() {}, pickables: () => (p.disco ? [hz, dk] : [hz]), update(t) {
        uni.uT.value = t * p.vel; uni.uLens.value = p.lente ? 1 : 0; uni.uDisk.value = p.disco ? 1 : 0; uni.uBright.value = p.brillo;
        sky.position.copy(api.camera.position);
        hud('Radio del horizonte = 1 · disco de 3 a 9,5 radios · ' + (p.lente ? 'la gravedad curva la luz' : 'luz en línea recta (sin lente)'));
      } };
    } });

  // ───────────── Ondas ─────────────
  (function () {
    const em = byId('onda');
    const txt = (a, b, c) => [a, b, c];
    MODELS.push({ id: 'ondas', name: 'Ondas', area: 'Física y astronomía', subj: 'fisica', cam: [0, 7, 17], target: [0, 0, 0],
      controls: [{ id: 'tipo', label: 'Tipo de onda', type: 'select', value: 'cuerda', options: [['cuerda', 'Transversal (cuerda)'], ['sonido', 'Longitudinal (sonido)'], ['agua', 'Circular e interferencia'], ['em', 'Electromagnética']] },
        { id: 'lambda', label: 'Longitud de onda', type: 'range', min: 2, max: 9, step: 0.5, value: 5 }, { id: 'amp', label: 'Amplitud', type: 'range', min: 0.3, max: 1.6, step: 0.1, value: 1 },
        { id: 'dos', label: 'Dos fuentes (en la onda circular)', type: 'check', value: true }],
      info: [
        'Una onda es una vibración que viaja. Lleva energía de un sitio a otro, pero no materia: fíjate en la bolita roja, que sube y baja o va y viene sin avanzar con la onda. Cambia el tipo de onda con el desplegable y prueba a variar la longitud de onda.',
        'En una onda transversal las partículas vibran perpendicularmente al avance (cuerda, luz); en una longitudinal, en la misma dirección, formando zonas apretadas y separadas (sonido). En todas se cumple v = λ·f: si la velocidad no cambia, acortar la longitud de onda aumenta la frecuencia. Con dos fuentes, las ondas se suman: interferencia.',
        'Una onda armónica se describe con y(x, t) = A·sen(kx − ωt), con k = 2π/λ y ω = 2πf, de modo que v = ω/k. La energía transportada es proporcional a A². En la onda circular la amplitud decae con la distancia. Dos fuentes coherentes dan interferencia constructiva donde la diferencia de caminos es nλ y destructiva donde es (n + ½)λ.'],
      parts: {
        particula: { n: 'Partícula del medio', d: txt('Cada bolita es un trocito del medio. Vibra en torno a su sitio, pero no viaja con la onda.', 'En la onda transversal oscila perpendicular al avance; en la longitudinal, a lo largo de él. La roja te ayuda a seguir una sola.', 'Cada partícula describe un movimiento armónico simple con la frecuencia de la onda y un desfase kx respecto a la fuente.') },
        lambda: { n: 'Longitud de onda (λ)', d: txt('La distancia entre dos crestas seguidas (o entre dos zonas apretadas).', 'Distancia que avanza la onda en un periodo. Junto con la frecuencia determina la velocidad: v = λ·f.', 'λ = 2π/k. En el espectro visible va de unos 400 nm (violeta) a 700 nm (rojo); en el sonido audible, de 17 mm a 17 m.') },
        amplitud: { n: 'Amplitud (A)', d: txt('Lo «alta» que es la onda: cuánto se aparta cada partícula de su posición de reposo.', 'Desplazamiento máximo respecto al equilibrio. En el sonido determina el volumen y en la luz, el brillo.', 'La energía y la intensidad son proporcionales a A². En ondas circulares A decae como 1/√r y en esféricas como 1/r.') },
        compresion: { n: 'Compresión y rarefacción', d: txt('En el sonido, zonas donde las partículas se aprietan y zonas donde se separan.', 'Una compresión es una zona de mayor presión; una rarefacción, de menor. Se alternan y avanzan con la onda.', 'La onda de presión va desfasada 90° respecto al desplazamiento. En el aire a 20 °C viaja a 343 m/s.') },
        fuente: { n: 'Fuente', d: txt('El punto que vibra y origina la onda, como una piedra que cae al agua.', 'Cada fuente emite frentes de onda circulares. La frecuencia de la onda es la de la fuente y no cambia al pasar de un medio a otro.', 'Dos fuentes son coherentes si mantienen una diferencia de fase constante; solo entonces el patrón de interferencia es estable.') },
        frente: { n: 'Frentes de onda e interferencia', d: txt('Los anillos que se alejan de la fuente. Con dos fuentes aparecen zonas donde el agua se mueve mucho y otras donde queda quieta.', 'Donde coinciden cresta con cresta la onda se refuerza (constructiva); donde coinciden cresta con valle se anula (destructiva).', 'Las líneas nodales son hipérbolas con focos en las fuentes. Es el fundamento del experimento de la doble rendija de Young.') },
        E: em.parts.E, B: em.parts.B, k: em.parts.k,
      },
      build(ctx) {
        const { g, p, hud } = ctx, c = 2.2, k = 2 * PI / p.lambda, w = c * k, A = p.amp;
        const datos = () => 'λ = ' + p.lambda.toFixed(1) + ' · f = v/λ = ' + (c / p.lambda).toFixed(2) + ' · A = ' + A.toFixed(1) + ' (unidades relativas)';
        const std = (col, o) => new THREE.MeshStandardMaterial(Object.assign({ color: col, roughness: 0.45, metalness: 0.05 }, o));
        if (p.tipo === 'em') { const h = em.build({ g, p, hud }); return { update: h.update }; }
        if (p.tipo === 'agua') {
          const S = p.dos ? [[-3, 0], [3, 0]] : [[0, 0]], N = 110, L = 20;
          const geo = new THREE.PlaneGeometry(L, L, N, N); geo.rotateX(-PI / 2);
          const mesh = new THREE.Mesh(geo, std(0x3b82f6, { roughness: 0.25, metalness: 0.35, side: THREE.DoubleSide })); mesh.userData.part = 'frente'; g.add(mesh);
          S.forEach((s) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 14), std(0xfbbf24)); b.position.set(s[0], 0.5, s[1]); b.userData.part = 'fuente'; g.add(b); });
          const pa = geo.attributes.position, R = S.map((s) => { const a = new Float32Array(pa.count); for (let i = 0; i < pa.count; i++) a[i] = Math.hypot(pa.getX(i) - s[0], pa.getZ(i) - s[1]); return a; });
          let n = 0;
          return { update(t) {
            const arr = pa.array;
            for (let i = 0; i < pa.count; i++) { let y = 0; for (let j = 0; j < R.length; j++) { const r = R[j][i]; y += A * 0.55 / Math.sqrt(1 + r * 0.6) * Math.sin(k * r - w * t); } arr[i * 3 + 1] = y; }
            pa.needsUpdate = true; if (n++ % 2 === 0) geo.computeVertexNormals();
            hud((p.dos ? 'Dos fuentes: interferencia' : 'Una fuente: onda circular') + ' · ' + datos());
          } };
        }
        // Cuerda (transversal) y sonido (longitudinal): bolitas que oscilan en torno a su posición de reposo
        const son = p.tipo === 'sonido', X = 9.5, pts = [];
        if (son) { for (let i = 0; i < 70; i++) for (let j = 0; j < 5; j++) for (let l = 0; l < 3; l++) pts.push([-X + 2 * X * i / 69, (j - 2) * 0.55, (l - 1) * 0.55]); }
        else for (let i = 0; i < 80; i++) pts.push([-X + 2 * X * i / 79, 0, 0]);
        const im = new THREE.InstancedMesh(new THREE.SphereGeometry(son ? 0.1 : 0.14, 12, 8), std(son ? 0x93c5fd : 0x60a5fa), pts.length); im.userData.part = 'particula'; im.frustumCulled = false; g.add(im);
        const roja = new THREE.Mesh(new THREE.SphereGeometry(son ? 0.2 : 0.24, 20, 14), std(0xef4444)); roja.userData.part = 'particula'; g.add(roja);
        const eje = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-X, 0, 0), new THREE.Vector3(X, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x475569 })); g.add(eje);
        const M = new THREE.Matrix4(), iR = son ? 35 * 15 + 7 : 40;
        return { update(t) {
          for (let i = 0; i < pts.length; i++) {
            const q = pts[i], d = Math.sin(k * q[0] - w * t);
            if (son) M.makeTranslation(q[0] + d * A * 0.55, q[1], q[2]); else M.makeTranslation(q[0], d * A * 1.5, 0);
            im.setMatrixAt(i, M); if (i === iR) roja.position.setFromMatrixPosition(M);
          }
          im.instanceMatrix.needsUpdate = true;
          hud((son ? 'Onda longitudinal: las partículas van y vienen en la dirección de avance' : 'Onda transversal: las partículas suben y bajan') + ' · ' + datos());
        } };
      } });
  })();

  // ───────────── Secciones del laboratorio ─────────────
  // Solo aparecen estas maquetas y en este orden. El código de las demás (virus, neuronas, corazón, péndulo, átomo)
  // sigue en models.js y modelos_reales.js: para recuperar una basta con añadir aquí su id. Los datos de las que los
  // necesitan (virus.js, neurona.js y corazon.js) se guardaron en Lumen/archivo/datos_modelos_ocultos: habría que
  // devolverlos a data/modelos y, para virus y neurona, volver a enlazarlos en index.html.
  const SECCIONES = [['Biología', ['celula', 'celula_vegetal', 'adn', 'cuerpo']], ['Química', ['tabla', 'moleculas']], ['Física y astronomía', ['solar', 'agujero', 'ondas', 'estados']]];
  const NOMBRES = { adn: 'ADN' };
  const todas = MODELS.slice(); MODELS.length = 0;
  SECCIONES.forEach(([area, ids]) => ids.forEach((id) => { const m = todas.find((x) => x.id === id); if (m) { m.area = area; if (NOMBRES[id]) m.name = NOMBRES[id]; MODELS.push(m); } }));
})();
