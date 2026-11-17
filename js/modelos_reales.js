// Maquetas construidas con datos científicos reales (ver herramientas/convertir_modelos.py):
//   ADN: estructura atómica 1BNA · Virus: cápside del rinovirus humano 14 (4RHV)
//   Neurona: reconstrucción de una piramidal humana (NeuroMorpho) · Sistema solar: texturas de Solar System Scope
// Sustituyen o completan a las maquetas esquemáticas definidas en models.js.
(function () {
  const byId = (id) => MODELS.find((m) => m.id === id);
  const mat = (c, o) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.45, metalness: 0.05 }, o));
  const PI = Math.PI;
  // Crea una malla instanciada (muchas copias de una geometría) a partir de una lista de matrices.
  function instanced(g, geo, material, mats, part) {
    if (!mats.length) return null;
    const m = new THREE.InstancedMesh(geo, material, mats.length);
    mats.forEach((x, i) => m.setMatrixAt(i, x)); m.instanceMatrix.needsUpdate = true;
    m.userData.part = part; g.add(m); return m;
  }
  const Y = () => new THREE.Vector3(0, 1, 0);
  const ballM = (p, r) => new THREE.Matrix4().compose(p, new THREE.Quaternion(), new THREE.Vector3(r, r, r));
  function stickM(a, b, r) { const d = b.clone().sub(a), len = d.length() || 1e-4; return new THREE.Matrix4().compose(a.clone().addScaledVector(d, 0.5), new THREE.Quaternion().setFromUnitVectors(Y(), d.normalize()), new THREE.Vector3(r, len, r)); }

  // ───────────── ADN: estructura atómica real ─────────────
  (function () {
    const m = byId('adn'), D = window.MOL && MOL.adn; if (!m || !D) return;
    m.name = 'ADN (estructura atómica real)'; m.cam = [0, 0, 26];
    m.credit = 'Estructura 1BNA del Protein Data Bank (Drew et al., 1981): dodecámero de ADN-B. Datos de dominio público.';
    m.controls = [
      { id: 'estilo', label: 'Representación', type: 'select', value: 'bolas', options: [['bolas', 'Bolas y varillas'], ['compacto', 'Modelo compacto (tamaño real de los átomos)']] },
      { id: 'color', label: 'Colores', type: 'select', value: 'partes', options: [['partes', 'Por bases (A, T, G, C)'], ['elementos', 'Por elemento químico']] }];
    m.info[0] = 'Esto no es un dibujo: es un fragmento real de ADN de 12 «peldaños», con cada átomo en la posición medida en el laboratorio. Las dos barandillas grises sostienen la estructura y los peldaños de colores son las cuatro letras: A, T, G y C.';
    m.info[1] += ' Aquí se ven los 486 átomos del fragmento y los puentes de hidrógeno (en blanco) que unen cada par de bases.';
    m.info[2] += ' La estructura es el dodecámero de Dickerson (CGCGAATTCGCG), primer cristal de ADN-B resuelto a resolución atómica; el modelo compacto muestra los radios de van der Waals.';
    m.parts.puentes = { n: 'Puentes de hidrógeno', d: ['Uniones débiles que mantienen juntas las dos hebras, como una cremallera.', 'Enlaces entre un hidrógeno de una base y un N u O de la complementaria: dos en A–T y tres en G–C.', 'Con energías de 5–30 kJ/mol cada uno, permiten separar las hebras en la replicación y la transcripción sin romper enlaces covalentes.'] };
    m.build = function ({ g, p, hud }) {
      const S = 0.36, n = D.a.length / 5, pos = [], KEY = ['esqueleto', 'A', 'T', 'G', 'C'];
      const ELC = [0x6b7280, 0x3b82f6, 0xef4444, 0xf59e0b], VDW = [1.7, 1.55, 1.52, 1.8], PC = [0x94a3b8, 0x4ade80, 0xf87171, 0x60a5fa, 0xfbbf24];
      const compact = p.estilo === 'compacto', byEl = p.color === 'elementos', balls = {}, sticks = {};
      for (let i = 0; i < n; i++) {
        const v = new THREE.Vector3(D.a[i * 5] * S, D.a[i * 5 + 1] * S, D.a[i * 5 + 2] * S), el = D.a[i * 5 + 3], part = D.a[i * 5 + 4];
        pos.push(v);
        const k = part + '|' + (byEl ? el : 0);
        (balls[k] = balls[k] || { part, c: byEl ? ELC[el] : PC[part], m: [] }).m.push(ballM(v, (compact ? VDW[el] : 0.42) * S));
      }
      const sph = new THREE.SphereGeometry(1, compact ? 20 : 14, compact ? 14 : 10), cyl = new THREE.CylinderGeometry(1, 1, 1, 8);
      Object.keys(balls).forEach((k) => instanced(g, sph, mat(balls[k].c), balls[k].m, KEY[balls[k].part]));
      if (!compact) {
        for (let i = 0; i < D.b.length; i += 2) { const part = D.a[D.b[i] * 5 + 4]; (sticks[part] = sticks[part] || []).push(stickM(pos[D.b[i]], pos[D.b[i + 1]], 0.16 * S)); }
        Object.keys(sticks).forEach((k) => instanced(g, cyl, mat(byEl ? 0x9ca3af : PC[k], { roughness: 0.6 }), sticks[k], KEY[k]));
        const hb = []; for (let i = 0; i < D.h.length; i += 2) hb.push(stickM(pos[D.h[i]], pos[D.h[i + 1]], 0.07 * S));
        instanced(g, cyl, mat(0xffffff, { emissive: 0x333333 }), hb, 'puentes');
      }
      hud('Secuencia CGCGAATTCGCG · 12 pares de bases · 486 átomos · ' + (D.h.length / 2) + ' puentes de hidrógeno');
      return { update(t, dt) { g.rotation.y += dt * 0.25; } };
    };
  })();

  // ───────────── Virus: cápside real del rinovirus ─────────────
  (function () {
    const m = byId('virus'), V = window.MOL && MOL.virus; if (!m || !V) return;
    m.name = 'Virus del resfriado (cápside real)'; m.cam = [0, 2, 13];
    m.credit = 'Estructura 4RHV del Protein Data Bank (Arnold y Rossmann, 1988): rinovirus humano 14. Datos de dominio público. El ARN interior es un esquema.';
    m.controls = [{ id: 'vista', label: 'Vista', type: 'select', value: 'entera', options: [['entera', 'Cápside entera'], ['corte', 'Cortada por la mitad (ver el interior)']] }];
    m.info = [
      'Este es el virus del resfriado común, reconstruido a partir de su estructura real. Cada bolita es una pieza de proteína. Su cubierta está hecha con cuatro proteínas distintas, de colores, repetidas 60 veces como las piezas de un balón. Córtalo para ver qué lleva dentro.',
      'El rinovirus es un virus sin envoltura: su cápside icosaédrica está formada por 60 copias de cuatro proteínas (VP1 a VP4) y protege una molécula de ARN. VP1, VP2 y VP3 forman la superficie; VP4 queda por dentro, en contacto con el ARN.',
      'Picornavirus de unos 30 nm con simetría pseudo T=3. Alrededor de cada eje quíntuple hay una depresión, el «cañón», donde se une el receptor celular ICAM-1; su estrechez dificulta el acceso de los anticuerpos. Se muestran los carbonos alfa (uno de cada dos residuos) de las 240 cadenas.'];
    m.parts = {
      vp1: { n: 'Proteína VP1', d: ['La proteína más externa (azul). Forma las puntas de la cubierta.', 'Se agrupa de cinco en cinco alrededor de los vértices del icosaedro y contiene los principales puntos que reconocen los anticuerpos.', 'Su barril β de ocho hebras («jelly roll») alberga el bolsillo hidrófobo donde se unen antivirales como el pleconaril, que estabilizan la cápside e impiden la liberación del ARN.'] },
      vp2: { n: 'Proteína VP2', d: ['Otra de las piezas de la cubierta (verde).', 'Alterna con VP3 alrededor de los ejes de simetría triple de la cápside.', 'Procede, junto con VP4, del corte autocatalítico del precursor VP0 durante la maduración del virión.'] },
      vp3: { n: 'Proteína VP3', d: ['Otra de las piezas de la cubierta (roja).', 'Junto con VP1 y VP2 forma la superficie exterior.', 'Sus extremos N-terminales se entrelazan en un cilindro β bajo los ejes quíntuples, lo que estabiliza los pentámeros.'] },
      vp4: { n: 'Proteína VP4', d: ['Una proteína pequeña (amarilla) que queda por dentro. Solo se ve al cortar el virus.', 'Está en la cara interna de la cápside, en contacto con el ARN.', 'Miristoilada en su extremo N-terminal; se expulsa al unirse el receptor y forma un poro en la membrana por el que sale el genoma.'] },
      genoma: { n: 'ARN (esquema)', d: ['Las instrucciones para fabricar más virus. Aquí está dibujado de forma simplificada.', 'Una sola hebra de ARN de unos 7200 nucleótidos, que la célula lee directamente como si fuera un ARN mensajero.', 'ARN monocatenario de polaridad positiva; se traduce en una única poliproteína que proteasas víricas cortan en las proteínas maduras. No se resuelve en el cristal, por eso es un esquema.'] },
    };
    m.build = function ({ g, p, hud }) {
      const S = 0.024, cut = p.vista === 'corte', n = V.ca.length / 4, buckets = [[], [], [], []], v = new THREE.Vector3();
      V.m.forEach((mm) => {
        for (let i = 0; i < n; i += 2) {
          const x = V.ca[i * 4], y = V.ca[i * 4 + 1], z = V.ca[i * 4 + 2];
          v.set(mm[0] * x + mm[1] * y + mm[2] * z + mm[3], mm[4] * x + mm[5] * y + mm[6] * z + mm[7], mm[8] * x + mm[9] * y + mm[10] * z + mm[11]).multiplyScalar(S);
          if (cut && v.z > 0) continue;
          buckets[V.ca[i * 4 + 3]].push(ballM(v.clone(), 4.6 * S));
        }
      });
      const geo = new THREE.IcosahedronGeometry(1, 1);
      [0x3b82f6, 0x22c55e, 0xef4444, 0xfacc15].forEach((c, i) => instanced(g, geo, mat(c, { flatShading: false }), buckets[i], 'vp' + (i + 1)));
      const rna = new THREE.Mesh(new THREE.TorusKnotGeometry(1.25, 0.2, 220, 10, 3, 7), mat(0xf59e0b)); rna.userData.part = 'genoma'; g.add(rna);
      hud('Rinovirus humano 14 · 30 nm de diámetro · 60 copias de 4 proteínas · ' + buckets.reduce((a, b) => a + b.length, 0) + ' residuos mostrados');
      return { update(t, dt) { g.rotation.y += dt * 0.2; } };
    };
  })();

  // ───────────── Neurona piramidal humana real ─────────────
  (function () {
    const N = window.MOL && MOL.neurona, old = byId('neurona'); if (!N) return;
    if (old) old.name = 'Neurona (impulso nervioso)';
    const model = { id: 'piramidal', name: 'Neurona piramidal real', area: 'Cuerpo humano', subj: 'biologia', cam: [0, 1, 20],
      credit: 'Reconstrucción 02a_pyramidal2aFI de NeuroMorpho.org (archivo Allman; Watson, Jones y Allman, 2006): neurona piramidal de la capa 5 de la corteza frontoinsular humana.',
      info: [
        'La forma real de una neurona de la corteza cerebral humana, trazada al microscopio. El punto central es el cuerpo de la célula y todo lo demás son sus ramas, las dendritas, con las que recibe mensajes de miles de otras neuronas.',
        'Es una neurona piramidal: de su soma sale hacia la superficie del cerebro una gran dendrita apical (naranja) y, desde la base, varias dendritas basales (rosas). Esta forma le permite recoger señales de distintas capas de la corteza a la vez.',
        'Neurona piramidal de la capa 5 de la corteza frontoinsular. El árbol dendrítico abarca unos 415 × 355 µm. La reconstrucción no incluye el axón, que en estas células desciende hacia la sustancia blanca; las dendritas están engrosadas ligeramente para que sean visibles (su diámetro real ronda 1 µm).'],
      parts: {
        soma: { n: 'Soma', d: ['El cuerpo de la neurona, donde está el núcleo.', 'Integra las señales que llegan por las dendritas; tiene forma de pirámide, de ahí el nombre de la célula.', 'De unos 20 µm; en su base nace el axón, en cuyo segmento inicial se dispara el potencial de acción.'] },
        apical: { n: 'Dendrita apical', d: ['La rama principal, que sube hacia la superficie del cerebro.', 'Atraviesa varias capas de la corteza y se ramifica en un penacho terminal que recibe señales de zonas lejanas.', 'Puede generar espigas dendríticas de calcio que amplifican la coincidencia entre entradas distales y actividad del soma.'] },
        basal: { n: 'Dendritas basales', d: ['Ramas que salen de la base del cuerpo celular.', 'Reciben sobre todo señales de neuronas cercanas de la misma capa.', 'Concentran la mayor parte de las espinas dendríticas y de las sinapsis excitadoras locales.'] },
      },
      build({ g, hud }) {
        const n = N.p.length / 6, P = [], sph = new THREE.SphereGeometry(1, 10, 8), cyl = new THREE.CylinderGeometry(1, 1, 1, 7);
        const B = { 3: { c: 0xf9a8d4, k: 'basal', s: [], j: [] }, 4: { c: 0xfb923c, k: 'apical', s: [], j: [] }, 2: { c: 0xfcd34d, k: 'apical', s: [], j: [] } };
        for (let i = 0; i < n; i++) P.push(new THREE.Vector3(N.p[i * 6], N.p[i * 6 + 1], N.p[i * 6 + 2]));
        let rs = 0.4;
        for (let i = 0; i < n; i++) {
          const t = N.p[i * 6 + 3], r = N.p[i * 6 + 4], par = N.p[i * 6 + 5];
          if (t === 1) { rs = Math.max(rs, r); continue; }
          const b = B[t] || B[3]; b.j.push(ballM(P[i], r));
          if (par >= 0) b.s.push(stickM(P[par], P[i], r));
        }
        Object.keys(B).forEach((t) => { instanced(g, cyl, mat(B[t].c), B[t].s, B[t].k); instanced(g, sph, mat(B[t].c), B[t].j, B[t].k); });
        const soma = new THREE.Mesh(new THREE.SphereGeometry(rs * 1.15, 28, 20), mat(0xa78bfa)); soma.scale.set(1, 1.25, 1); soma.userData.part = 'soma'; g.add(soma);
        hud('Neurona piramidal humana · ' + n + ' puntos medidos · 1 unidad ≈ ' + N.um + ' µm');
        return { update(t, dt) { g.rotation.y += dt * 0.15; } };
      } };
    const at = MODELS.indexOf(old); MODELS.splice(at < 0 ? MODELS.length : at, 0, model);
  })();

  // ───────────── Sistema solar con texturas reales ─────────────
  (function () {
    const m = byId('solar'); if (!m) return;
    m.lights = false; m.cam = [0, 14, 26];
    m.credit = 'Texturas de planetas: Solar System Scope (solarsystemscope.com/textures), basadas en imágenes de la NASA, licencia CC BY 4.0.';
    m.parts.luna = { n: 'Luna', d: 'Único satélite natural de la Tierra. Periodo: 27,3 días · Distancia: 384 400 km. Muestra siempre la misma cara porque su rotación está acoplada a su órbita.' };
    m.build = function ({ g, p, hud }) {
      const tl = new THREE.TextureLoader(); let alive = true; g.userData.dispose = () => { alive = false; };
      const pending = [];
      const skin = (material, key) => pending.push(() => { material.map = tl.load(TEX[key]); material.color.setHex(0xffffff); material.needsUpdate = true; });
      g.add(new THREE.PointLight(0xffffff, 1.7, 0, 0));
      const sunM = new THREE.MeshBasicMaterial({ color: 0xffc83d }), sun = new THREE.Mesh(new THREE.SphereGeometry(1.6, 48, 32), sunM); sun.userData.part = 'sol'; g.add(sun); skin(sunM, 'sun');
      const skyM = new THREE.MeshBasicMaterial({ color: 0x05070f, side: THREE.BackSide }), sky = new THREE.Mesh(new THREE.SphereGeometry(180, 32, 20), skyM); g.add(sky); pending.push(() => { skyM.map = tl.load(TEX.stars_milky_way); skyM.color.setHex(0x999999); skyM.needsUpdate = true; });
      const orbit = (r) => { const pts = []; for (let i = 0; i <= 128; i++) { const a = i / 128 * 2 * PI; pts.push(new THREE.Vector3(r * Math.cos(a), 0, r * Math.sin(a))); } g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x3b4a66, transparent: true, opacity: 0.6 }))); };
      // clave, radio, color provisional, distancia, periodo (años), textura, inclinación del eje (°), periodo de rotación relativo
      const PL = [['mercurio', 0.28, 0x9ca3af, 3, 0.24, 'mercury', 0, 0.3], ['venus', 0.45, 0xfbbf24, 4.3, 0.62, 'venus_surface', 177, -0.2], ['tierra', 0.48, 0x3b82f6, 5.8, 1, 'earth_daymap', 23.4, 3],
        ['marte', 0.36, 0xef4444, 7.2, 1.88, 'mars', 25.2, 2.9], ['jupiter', 1.1, 0xd6a36c, 10, 11.86, 'jupiter', 3.1, 7], ['saturno', 0.95, 0xeab676, 13, 29.46, 'saturn', 26.7, 6.5], ['urano', 0.7, 0x67e8f9, 16, 84, 'uranus', 97.8, -4], ['neptuno', 0.68, 0x6366f1, 19, 164.8, 'neptune', 28.3, 4.2]];
      let acc = 0, moon = null;
      const bodies = PL.map(([k, r, c, d, T, tex, tilt, spin], i) => {
        orbit(d);
        const holder = new THREE.Group(), mm = new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, metalness: 0 }), mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), mm);
        mesh.userData.part = k; holder.rotation.z = tilt * PI / 180; holder.add(mesh); g.add(holder); skin(mm, tex);
        if (k === 'saturno') {
          const rg = new THREE.RingGeometry(r * 1.25, r * 2.3, 128, 1), pa = rg.attributes.position, uv = rg.attributes.uv;
          for (let j = 0; j < pa.count; j++) { const len = Math.hypot(pa.getX(j), pa.getY(j)); uv.setXY(j, (len - r * 1.25) / (r * 1.05), 0.5); }
          const rm = new THREE.MeshBasicMaterial({ color: 0xc9b28a, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }), ring = new THREE.Mesh(rg, rm);
          ring.rotation.x = PI / 2; ring.userData.part = k; holder.add(ring); skin(rm, 'saturn_ring_alpha');
        }
        if (k === 'tierra') { const lm = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 1 }); moon = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 16), lm); moon.userData.part = 'luna'; g.add(moon); skin(lm, 'moon'); }
        return { holder, mesh, d, T, spin, ph: i * 1.7 };
      });
      function apply() { if (alive) { pending.forEach((f) => f()); loaded = true; } }
      let loaded = false;
      if (window.TEX) apply();
      else { const s = document.createElement('script'); s.src = 'data/modelos/planetas.js'; s.onload = apply; s.onerror = () => { loaded = 'err'; }; document.head.appendChild(s); }
      return { set() {}, update(t, dt) {
        acc += dt * p.vel;
        bodies.forEach((b) => { const a = b.ph + acc * 2 * PI / b.T; b.holder.position.set(b.d * Math.cos(a), 0, -b.d * Math.sin(a)); b.mesh.rotation.y += dt * b.spin * 0.15; });
        if (moon) { const e = bodies[2].holder.position, a = acc * 2 * PI * 13.4; moon.position.set(e.x + 0.85 * Math.cos(a), 0.05, e.z - 0.85 * Math.sin(a)); }
        sun.rotation.y += dt * 0.03;
        hud((loaded === true ? '' : loaded === 'err' ? 'No se pudieron cargar las texturas · ' : 'Cargando texturas… · ') + 'Tiempo transcurrido: ' + acc.toFixed(1) + ' años terrestres');
      } };
    };
  })();

  // ───────────── Célula animal detallada (generada por código, no a partir de datos reales) ─────────────
  (function () {
    const m = byId('celula'); if (!m) return;
    m.cam = [-8.5, 5.5, -8.5];
    m.credit = 'Maqueta generada por código: es una representación estilizada, no un modelo obtenido de datos reales.';
    m.controls = [{ id: 'memb', label: 'Membrana', type: 'select', value: 'corte', options: [['corte', 'Cortada (ver el interior)'], ['entera', 'Completa'], ['oculta', 'Oculta']] }];
    m.parts.re.n = 'Retículo endoplasmático rugoso';
    m.parts.re.d = ['Láminas plegadas cubiertas de ribosomas, donde se fabrican proteínas.', 'Red de sacos aplanados unida al núcleo. Los ribosomas de su superficie sintetizan las proteínas que la célula exporta o envía a sus membranas.', 'Las proteínas con péptido señal se translocan al lumen, donde se pliegan con ayuda de chaperonas y se glicosilan antes de viajar en vesículas al Golgi.'];
    Object.assign(m.parts, {
      cromatina: { n: 'Cromatina', d: ['El ADN de la célula, enrollado como un ovillo dentro del núcleo.', 'ADN asociado a proteínas llamadas histonas. Se compacta en cromosomas cuando la célula va a dividirse.', 'El nucleosoma (147 pb alrededor de un octámero de histonas) es su unidad; la eucromatina es accesible a la transcripción y la heterocromatina está silenciada.'] },
      rel: { n: 'Retículo endoplasmático liso', d: ['Red de tubos sin ribosomas donde se fabrican grasas.', 'Sintetiza lípidos y hormonas esteroideas, almacena calcio y detoxifica sustancias.', 'Muy desarrollado en hepatocitos (citocromo P450) y en el músculo, donde forma el retículo sarcoplásmico que libera Ca²⁺ para la contracción.'] },
      vesicula: { n: 'Vesículas', d: ['Pequeñas burbujas que transportan materiales de un sitio a otro de la célula.', 'Brotan del retículo y del Golgi, y se fusionan con la membrana para liberar su contenido (exocitosis).', 'Su destino lo determinan las cubiertas (COPI, COPII, clatrina) y el reconocimiento entre proteínas SNARE de la vesícula y de la membrana diana.'] },
      peroxisoma: { n: 'Peroxisoma', d: ['Pequeño orgánulo que elimina sustancias tóxicas.', 'Degrada ácidos grasos y descompone el agua oxigenada con la enzima catalasa.', 'Realiza la β-oxidación de ácidos grasos de cadena muy larga; importa sus enzimas ya plegadas mediante las señales PTS1 y PTS2.'] },
      citoesqueleto: { n: 'Citoesqueleto (microtúbulos)', d: ['El «esqueleto» de la célula: finos tubos que le dan forma y sirven de carriles.', 'Los microtúbulos parten del centrosoma hacia la periferia. Por ellos se desplazan vesículas y orgánulos.', 'Polímeros de tubulina α/β con inestabilidad dinámica; las proteínas motoras quinesina y dineína caminan sobre ellos hacia los extremos (+) y (−).'] },
    });
    const rng = (s) => () => (s = (s * 16807) % 2147483647) / 2147483647;
    const n3 = (x, y, z) => Math.sin(x * 1.7 + y * 2.3 + 1.3) * Math.sin(y * 1.9 + z * 2.1 + 0.7) * Math.sin(z * 1.5 + x * 2.7 + 2.1);
    // Deforma una geometría a lo largo de su radio para que no parezca una figura geométrica perfecta.
    function wobble(geo, amp, f) {
      const pa = geo.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < pa.count; i++) { v.fromBufferAttribute(pa, i); const l = v.length(); if (l < 1e-6) continue; v.multiplyScalar((l + n3(v.x / l * f, v.y / l * f, v.z / l * f) * amp) / l); pa.setXYZ(i, v.x, v.y, v.z); }
      geo.computeVertexNormals(); return geo;
    }
    function fib(n) { const out = []; for (let i = 0; i < n; i++) { const y = 1 - 2 * (i + 0.5) / n, rr = Math.sqrt(1 - y * y), a = i * 2.39996; out.push(new THREE.Vector3(Math.cos(a) * rr, y, Math.sin(a) * rr)); } return out; }
    let bump = null;
    function bumpTex() { // textura de relieve granulado, compartida por todos los orgánulos
      if (bump) return bump;
      const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d'), r = rng(5);
      x.fillStyle = '#808080'; x.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 900; i++) { const t = Math.floor(80 + r() * 100); x.fillStyle = 'rgba(' + t + ',' + t + ',' + t + ',0.5)'; x.beginPath(); x.arc(r() * 256, r() * 256, 2 + r() * 7, 0, 6.3); x.fill(); }
      bump = new THREE.CanvasTexture(c); bump.wrapS = bump.wrapT = THREE.RepeatWrapping; bump.repeat.set(3, 3); return bump;
    }
    const wet = (c, o) => new THREE.MeshPhysicalMaterial(Object.assign({ color: c, roughness: 0.38, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.35, bumpMap: bumpTex(), bumpScale: 0.025 }, o));
    function capsule(rad, L, phi) {
      const pts = [];
      for (let i = 0; i <= 12; i++) { const a = -PI / 2 + i / 12 * PI / 2; pts.push(new THREE.Vector2(Math.cos(a) * rad, Math.sin(a) * rad - L)); }
      for (let i = 0; i <= 12; i++) { const a = i / 12 * PI / 2; pts.push(new THREE.Vector2(Math.cos(a) * rad, Math.sin(a) * rad + L)); }
      return new THREE.LatheGeometry(pts, 36, 0, phi);
    }

    m.build = function ({ g, p }) {
      const r = rng(11), cut = PI * 1.5, mode = p.memb, V = (x, y, z) => new THREE.Vector3(x, y, z);
      const add = (o, k) => { o.userData.part = k; g.add(o); return o; }, rv = (s) => V(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(s);
      const wedge = (d) => d.x < 0 && d.z < 0; // cuña retirada para ver el interior

      // Membrana plasmática con proteínas incrustadas
      if (mode !== 'oculta') {
        const mem = add(new THREE.Mesh(wobble(new THREE.SphereGeometry(5, 96, 64, 0, mode === 'corte' ? cut : PI * 2), 0.12, 2.2),
          new THREE.MeshPhysicalMaterial({ color: 0x8fd6cf, roughness: 0.3, clearcoat: 0.4, transparent: true, opacity: mode === 'entera' ? 0.4 : 0.3, side: THREE.DoubleSide, depthWrite: false })), 'membrana');
        mem.userData.shell = true; mem.renderOrder = 3;
        const pm = [[], []];
        fib(280).forEach((d, i) => { if (mode === 'corte' && wedge(d)) return; pm[i % 2].push(ballM(d.clone().multiplyScalar(5 + n3(d.x * 2.2, d.y * 2.2, d.z * 2.2) * 0.12), 0.07 + r() * 0.05)); });
        [0x5eead4, 0xc4b5fd].forEach((c, i) => { const im = instanced(g, new THREE.SphereGeometry(1, 10, 8), wet(c), pm[i], 'membrana'); if (im) im.userData.shell = true; });
      }

      // Núcleo: envoltura con poros, cromatina y nucléolo
      add(new THREE.Mesh(wobble(new THREE.SphereGeometry(1.7, 72, 48, 0, cut), 0.04, 3), wet(0x7c5cff, { side: THREE.DoubleSide })), 'nucleo');
      const pores = [];
      fib(120).forEach((d) => { if (!wedge(d)) pores.push(new THREE.Matrix4().compose(d.clone().multiplyScalar(1.71), new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), d), V(1, 1, 1))); });
      instanced(g, new THREE.TorusGeometry(0.075, 0.028, 8, 16), wet(0xc4b5fd), pores, 'nucleo');
      for (let k = 0; k < 4; k++) { const pts = []; for (let i = 0; i < 14; i++) pts.push(rv(0.4 + r() * 0.9)); add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 160, 0.055, 8, true), wet(0x4c1d95, { bumpScale: 0.01 })), 'cromatina'); }
      add(new THREE.Mesh(wobble(new THREE.SphereGeometry(0.5, 32, 24), 0.05, 4), wet(0xff7ad9)), 'nucleolo');

      // Retículo rugoso: láminas onduladas alrededor del núcleo, tachonadas de ribosomas
      const ribo = [], v = V(0, 0, 0);
      for (let i = 0; i < 5; i++) {
        const geo = wobble(new THREE.SphereGeometry(2.1 + i * 0.3, 56, 20, 0.7 + i * 0.22, 2.3 - i * 0.12, 0.95, 1.25), 0.09, 3 + i);
        add(new THREE.Mesh(geo, wet(0x4aa3ff, { side: THREE.DoubleSide, roughness: 0.5 })), 're');
        const pa = geo.attributes.position;
        for (let j = 0; j < pa.count; j += 4) { v.fromBufferAttribute(pa, j); const l = v.length(); ribo.push(ballM(v.clone().multiplyScalar((l + (j % 8 ? 0.05 : -0.05)) / l), 0.045)); }
      }
      for (let i = 0; i < 320; i++) ribo.push(ballM(rv(2.4 + r() * 2.2), 0.045)); // ribosomas libres
      instanced(g, new THREE.SphereGeometry(1, 8, 6), mat(0xf1f5f9), ribo, 'ribosoma');

      // Retículo liso: red de túbulos
      const c0 = V(1.6, -2.3, -2.2);
      for (let k = 0; k < 7; k++) { const pts = []; for (let i = 0; i < 6; i++) pts.push(c0.clone().add(rv(0.3 + r() * 0.9))); add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.085, 8, false), wet(0x7dd3fc)), 'rel'); }

      // Aparato de Golgi: pila de cisternas curvadas con vesículas
      const gol = new THREE.Group(); gol.position.set(-1.0, -2.2, 2.2); gol.rotation.set(0.5, 0.6, -0.5); g.add(gol);
      for (let i = 0; i < 6; i++) {
        const w = 1.15 - i * 0.08, geo = new THREE.SphereGeometry(1, 36, 14); geo.scale(w, 0.075, w * 0.62);
        const pa = geo.attributes.position; for (let j = 0; j < pa.count; j++) pa.setY(j, pa.getY(j) + 0.22 * pa.getX(j) * pa.getX(j)); geo.computeVertexNormals();
        const ms = new THREE.Mesh(geo, wet(new THREE.Color(0xffd166).lerp(new THREE.Color(0xf59e0b), i / 5).getHex())); ms.position.y = i * 0.21; ms.userData.part = 'golgi'; gol.add(ms);
      }
      for (let i = 0; i < 16; i++) { const a = r() * 6.28, rad = 0.95 + r() * 0.6, s = new THREE.Mesh(new THREE.SphereGeometry(0.07 + r() * 0.07, 14, 10), wet(0xffe29a)); s.position.set(Math.cos(a) * rad, r() * 1.4, Math.sin(a) * rad * 0.65); s.userData.part = 'vesicula'; gol.add(s); }

      // Mitocondrias: dos abiertas mostrando las crestas y cinco cerradas
      [[3.1, 1.2, 1.6, 0], [-1.6, 2.7, 2.6, 0], [2.2, -2.6, -1.4, 0], [-3.3, -1.3, 1.2, 0], [1.1, 3.2, -2.4, 0], [-3.6, -0.2, -1.1, 1], [-1.2, -2.5, -2.7, 1]].forEach(([x, y, z, open]) => {
        const grp = new THREE.Group(); grp.position.set(x, y, z);
        if (open) {
          const arc = PI * 1.25; grp.rotation.set(0.45, -1.2, 0);
          grp.add(new THREE.Mesh(capsule(0.46, 0.62, arc), wet(0xff8a3d, { side: THREE.DoubleSide })));
          grp.add(new THREE.Mesh(capsule(0.4, 0.6, arc), wet(0xc2410c, { side: THREE.DoubleSide })));
          for (let k = 0; k < 8; k++) { const cr = new THREE.Mesh(new THREE.CylinderGeometry(0.385, 0.385, 0.045, 24, 1, false, 0, arc), wet(0xffc58f, { side: THREE.DoubleSide })); cr.position.y = -0.62 + k * 0.177; grp.add(cr); }
        } else { grp.rotation.set(r() * 3, r() * 3, r() * 3); grp.add(new THREE.Mesh(capsule(0.44, 0.6, PI * 2), wet(0xff8a3d, { bumpScale: 0.05 }))); }
        grp.traverse((o) => { if (o.isMesh) o.userData.part = 'mitocondria'; }); g.add(grp);
      });

      // Lisosomas y peroxisomas
      [[0.6, -3.3, 1.4], [-2.1, 3.1, -0.4], [3.5, -0.7, -1.7], [-0.9, -2.2, -3.1], [1.6, 1.6, 3.3], [-3.4, 0.9, -0.9]].forEach((q) => add(new THREE.Mesh(wobble(new THREE.SphereGeometry(0.3, 24, 18), 0.02, 5), wet(0xef476f, { bumpScale: 0.06 })), 'lisosoma').position.set(q[0], q[1], q[2]));
      [[2.9, 2.4, -0.6], [-0.4, 3.6, 1.5], [3.3, -2.0, 1.2], [-2.9, -2.6, -0.6], [0.4, -1.2, -3.9]].forEach((q) => add(new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 14), wet(0x84cc16)), 'peroxisoma').position.set(q[0], q[1], q[2]));

      // Centrosoma (dos centriolos de 9 tripletes) y microtúbulos que parten de él
      const cc = V(-2.5, -0.9, 2.7), trip = [];
      [0, 1].forEach((k) => {
        const base = new THREE.Matrix4().compose(cc.clone().add(k ? V(0.36, 0, 0.1) : V(0, 0, 0)), new THREE.Quaternion().setFromEuler(new THREE.Euler(k ? PI / 2 : 0, 0, k ? 0.3 : 0)), V(1, 1, 1));
        for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) { const a = i / 9 * 2 * PI + j * 0.22, rad = 0.15 + j * 0.045; trip.push(base.clone().multiply(new THREE.Matrix4().compose(V(Math.cos(a) * rad, 0, Math.sin(a) * rad), new THREE.Quaternion(), V(0.026, 0.5, 0.026)))); }
      });
      instanced(g, new THREE.CylinderGeometry(1, 1, 1, 8), wet(0x9be564), trip, 'centriolo');
      fib(30).forEach((d) => {
        const end = d.clone().multiplyScalar(4.5), dir = end.clone().sub(cc), t = Math.max(0, Math.min(1, -cc.dot(dir) / dir.lengthSq()));
        if (cc.clone().addScaledVector(dir, t).length() < 2.2) return; // no atravesar el núcleo
        add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([cc.clone(), cc.clone().lerp(end, 0.5).add(rv(0.35)), end]), 24, 0.016, 6, false), mat(0xa7f3d0)), 'citoesqueleto');
      });
    };
  })();
  // ───────────── Corazón con aspecto real (malla con texturas, cargada bajo demanda) ─────────────
  (function () {
    const old = byId('corazon'); if (!old) return;
    const b64 = (s, T) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new T(u.buffer); };
    let geo = null, parts = null; const SC = 7.5; // geometría y reparto por zonas: se calculan una sola vez y se reutilizan entre visitas
    const model = { id: 'corazon3d', name: 'Corazón (aspecto real)', area: 'Cuerpo humano', subj: 'biologia', cam: [0, 0.4, 11], target: [0, 0, 0],
      credit: 'Modelo 3DPX-022787 de NIH 3D (3d.nih.gov). Según los metadatos del archivo, la malla se generó con una herramienta automática (Tripo): es una ilustración tridimensional, no una reconstrucción a partir de imágenes médicas de un paciente.',
      controls: [{ id: 'giro', label: 'Giro automático', type: 'check', value: true }, { id: 'bpm', label: 'Latido (latidos/min; 0 = parado)', type: 'range', min: 0, max: 150, step: 5, value: 60 }],
      info: [
        'Así se ve un corazón por fuera. Tiene el tamaño de un puño y está hecho casi todo de músculo. Los tubos gruesos de arriba son los grandes vasos por los que entra y sale la sangre. Gíralo con el ratón para verlo por todos lados.',
        'Por fuera no se ven las cuatro cavidades, pero sí sus límites: los surcos por los que corren las arterias coronarias, que alimentan al propio músculo cardíaco. En rojo, los vasos con sangre oxigenada; en azul, los que llevan sangre pobre en oxígeno; en amarillo, la grasa que rodea los vasos. Pasa el ratón por cada zona para identificarla; el reparto se hace a partir de los colores del modelo y es aproximado en los bordes.',
        'La superficie visible es el epicardio, la hoja visceral del pericardio seroso. Bajo él, el miocardio, y tapizando las cavidades, el endocardio. Las coronarias nacen de los senos aórticos y discurren por los surcos auriculoventricular e interventriculares, rodeadas de grasa epicárdica. Para ver las cavidades y el ciclo cardíaco, abre la maqueta «Corazón (esquema)».'],
      parts: {
        ventriculos: { n: 'Ventrículos', d: ['La parte más grande y musculosa: la que empuja la sangre en cada latido.', 'Los dos ventrículos forman la masa principal del corazón. El derecho envía la sangre a los pulmones y el izquierdo, de pared más gruesa, al resto del cuerpo.', 'El miocardio ventricular izquierdo mide 8–12 mm de grosor y el derecho 3–5 mm, porque trabajan contra presiones muy distintas (unos 120 frente a 25 mmHg). La punta del corazón (ápex) pertenece al ventrículo izquierdo.'] },
        auriculas: { n: 'Aurículas', d: ['Las cavidades de arriba, donde llega la sangre antes de pasar a los ventrículos.', 'Por fuera se ven sobre todo sus orejuelas, unas prolongaciones en forma de bolsa. La aurícula derecha recibe la sangre del cuerpo y la izquierda, la de los pulmones.', 'Las orejuelas son restos de la aurícula embrionaria y tienen músculos pectíneos. En la fibrilación auricular, la orejuela izquierda es el lugar donde se forman con más frecuencia los trombos.'] },
        arterias: { n: 'Aorta y vasos con sangre oxigenada', d: ['Los tubos rojos: llevan sangre cargada de oxígeno.', 'La aorta sale del ventrículo izquierdo, forma un arco del que nacen las arterias de la cabeza y los brazos, y reparte la sangre por todo el cuerpo. Las venas pulmonares traen la sangre oxigenada de los pulmones a la aurícula izquierda.', 'El cayado aórtico da tres ramas: tronco braquiocefálico, carótida común izquierda y subclavia izquierda. Las venas pulmonares, normalmente cuatro, son las únicas venas que transportan sangre oxigenada.'] },
        venas: { n: 'Venas cavas y arteria pulmonar', d: ['Los tubos azules: llevan sangre con poco oxígeno.', 'Las venas cavas superior e inferior devuelven a la aurícula derecha la sangre usada por el cuerpo. La arteria pulmonar sale del ventrículo derecho y la lleva a los pulmones para que se oxigene.', 'El tronco pulmonar se divide en dos arterias, una por pulmón. Es la única arteria que transporta sangre desoxigenada, a una presión unas cinco veces menor que la de la aorta.'] },
        grasa: { n: 'Grasa y vasos coronarios', d: ['La capa amarilla: grasa que protege los vasos que alimentan al corazón.', 'La grasa epicárdica rellena los surcos de la superficie. Por ellos discurren las arterias y venas coronarias, que riegan el propio músculo cardíaco.', 'Las coronarias derecha e izquierda nacen de los senos aórticos y se llenan sobre todo en diástole. Su obstrucción causa el infarto de miocardio. La sangre venosa vuelve por el seno coronario a la aurícula derecha.'] },
      },
      build({ g, p, hud }) {
        let alive = true, state = 'Cargando el modelo (10 MB)…'; const mats = [], holder = new THREE.Group(); g.add(holder);
        g.userData.dispose = () => { alive = false; mats.forEach((m) => { ['map', 'normalMap', 'roughnessMap'].forEach((k) => m[k] && m[k].dispose()); m.dispose(); }); };
        // Reparte los triángulos entre las partes según el color de la textura en su centro y, para los rojos, la altura
        function split(D, img) {
          const pos = geo.attributes.position.array, uv = geo.attributes.uv.array, idx = geo.index.array;
          const cv = document.createElement('canvas'), W = cv.width = img.naturalWidth, H = cv.height = img.naturalHeight, cx = cv.getContext('2d');
          cx.drawImage(img, 0, 0); const px = cx.getImageData(0, 0, W, H).data, out = { ventriculos: [], auriculas: [], arterias: [], venas: [], grasa: [] };
          const yCut = (D.min[1] + 0.52 * (D.max[1] - D.min[1])) * SC;
          for (let t = 0; t < idx.length; t += 3) {
            const a = idx[t], b = idx[t + 1], c = idx[t + 2];
            const u = (uv[2 * a] + uv[2 * b] + uv[2 * c]) / 3 / 65535, v = (uv[2 * a + 1] + uv[2 * b + 1] + uv[2 * c + 1]) / 3 / 65535;
            const o = 4 * (Math.min(H - 1, Math.floor(v * H)) * W + Math.min(W - 1, Math.floor(u * W))), R = px[o], G = px[o + 1], B = px[o + 2];
            const y = (pos[3 * a + 1] + pos[3 * b + 1] + pos[3 * c + 1]) / 3;
            const k = B > 100 && B > R * 1.2 ? 'venas' : R > 170 && G > R * 0.5 && B < G ? 'grasa' : R > 120 && B > 70 && B > G * 1.35 ? 'auriculas' : y > yCut ? 'arterias' : 'ventriculos';
            out[k].push(a, b, c);
          }
          parts = out;
        }
        function show() {
          if (!alive) return; const D = MOL.corazon;
          const tl = new THREE.TextureLoader(), tex = (u) => { const t = tl.load(u); t.flipY = false; t.anisotropy = 4; return t; };
          const tm = tex(D.map), tn = tex(D.normal), tr = tex(D.mr);
          Object.keys(parts).forEach((k) => {
            if (!parts[k].length) return;
            const ge = new THREE.BufferGeometry(); ['position', 'normal', 'uv'].forEach((n) => ge.setAttribute(n, geo.attributes[n]));
            ge.setIndex(new THREE.BufferAttribute(new Uint32Array(parts[k]), 1)); ge.boundingSphere = geo.boundingSphere;
            const m = new THREE.MeshStandardMaterial({ map: tm, normalMap: tn, roughnessMap: tr, roughness: 1, metalness: 0 }); m.normalScale.set(1, -1); mats.push(m);
            const mesh = new THREE.Mesh(ge, m); mesh.userData.part = k; holder.add(mesh);
          });
          state = '';
        }
        function make() {
          if (!alive) return; const D = MOL.corazon;
          if (!geo) {
            const q = b64(D.p, Uint16Array), pos = new Float32Array(q.length);
            for (let i = 0; i < q.length; i++) { const a = i % 3; pos[i] = (D.min[a] + q[i] / 65535 * (D.max[a] - D.min[a])) * SC; }
            geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geo.setAttribute('normal', new THREE.BufferAttribute(b64(D.n, Int8Array), 3, true));
            geo.setAttribute('uv', new THREE.BufferAttribute(b64(D.u, Uint16Array), 2, true));
            geo.setIndex(new THREE.BufferAttribute(b64(D.i, Uint32Array), 1));
            geo.computeBoundingSphere();
          }
          if (parts) return show();
          state = 'Preparando las zonas…';
          const img = new Image(); img.onload = () => { try { split(D, img); } catch (e) { parts = { ventriculos: Array.from(geo.index.array) }; } show(); };
          img.onerror = () => { state = 'No se pudo leer la textura.'; }; img.src = D.map;
        }
        if (window.MOL && MOL.corazon) make();
        else { const s = document.createElement('script'); s.src = 'data/modelos/corazon.js'; s.onload = make; s.onerror = () => { state = 'No se pudo cargar el modelo.'; }; document.head.appendChild(s); }
        return { set() {}, update(t, dt) {
          if (p.giro) g.rotation.y += dt * 0.25;
          let k = 1, fase = '';
          if (p.bpm > 0) { const ph = (t % (60 / p.bpm)) / (60 / p.bpm), v = ph < 0.35 ? Math.sin(ph / 0.35 * PI) : 0; k = 1 - 0.045 * v; fase = ' · ' + (v ? 'sístole' : 'diástole'); }
          holder.scale.set(k, 1 - (1 - k) * 0.5, k);
          hud(state || (p.bpm > 0 ? p.bpm + ' lat/min' + fase : 'Latido parado'));
        } };
      } };
    const at = MODELS.indexOf(old); MODELS.splice(at, 0, model);
  })();
})();
