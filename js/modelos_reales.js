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

  // ───────────── Sistema solar con texturas reales, ampliado hasta la Vía Láctea ─────────────
  // Escalas (control «Escala»): sistema solar con el cinturón de asteroides · hasta el cinturón de Kuiper · nube de Oort ·
  // estrellas cercanas · Vía Láctea. Cada escala es una capa propia; al cambiar, la cámara viaja a su encuadre.
  // Ninguna escala es continua con la anterior: entre una y otra el tamaño se multiplica por miles.
  (function () {
    const m = byId('solar'); if (!m) return;
    m.lights = false; m.cam = [0, 14, 26];
    m.name = 'Sistema solar y galaxia';
    m.credit = 'Texturas de planetas: Solar System Scope (solarsystemscope.com/textures), basadas en imágenes de la NASA, licencia CC BY 4.0. Las estrellas cercanas se sitúan con sus coordenadas y distancias reales; la galaxia es una reconstrucción simplificada de su forma.';
    m.info = [
      'Ocho planetas giran alrededor del Sol. Entre Marte y Júpiter hay un anillo de rocas, el cinturón de asteroides, y más allá de Neptuno otro de hielo, el cinturón de Kuiper. Con el control «Escala» puedes alejarte hasta ver la nube de cometas que envuelve el sistema solar, las estrellas vecinas y la galaxia entera. (Cada escala usa su propio tamaño: si no, el sistema solar sería un punto invisible.)',
      'Las órbitas siguen las leyes de Kepler: cuanto más lejos, más lento. Un asteroide tarda unos 4 años en dar la vuelta; un objeto del cinturón de Kuiper, unos 250. La nube de Oort llega hasta 1,6 años luz, casi a medio camino de Próxima Centauri, la estrella más cercana (4,24 años luz). Y la Vía Láctea mide unos 100 000 años luz: el Sol tarda 230 millones de años en dar una vuelta a su centro.',
      'El cinturón principal está esculpido por las resonancias con Júpiter (huecos de Kirkwood); el de Kuiper, por las de Neptuno (Plutón está en resonancia 3:2). La nube de Oort es hipotética: se deduce de las órbitas de los cometas de largo periodo. La Vía Láctea es una espiral barrada con cuatro brazos principales; en su centro hay un agujero negro de unos 4 millones de masas solares, Sagitario A*.'];
    m.parts.luna = { n: 'Luna', d: 'Único satélite natural de la Tierra. Periodo: 27,3 días · Distancia: 384 400 km. Muestra siempre la misma cara porque su rotación está acoplada a su órbita.' };
    ['sol', 'mercurio', 'venus', 'tierra', 'luna', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'].forEach((k) => { m.parts[k].grp = 'Sistema solar'; });
    const P2 = {
      asteroides: ['Cinturones', 'Cinturón de asteroides', 'Entre Marte y Júpiter (2,2–3,3 UA). Millones de rocas, pero con poca masa en total: todas juntas pesan un 3 % de la Luna. La gravedad de Júpiter impidió que formaran un planeta.'],
      ceres: ['Cinturones', 'Ceres', 'El mayor objeto del cinturón de asteroides (940 km) y un planeta enano. Periodo: 4,6 años · 2,77 UA. Tiene hielo bajo la superficie.'],
      vesta: ['Cinturones', 'Vesta', 'El segundo más grande del cinturón (525 km). Periodo: 3,6 años · 2,36 UA. Algunos meteoritos que caen en la Tierra vienen de él.'],
      kuiper: ['Cinturones', 'Cinturón de Kuiper', 'Anillo de cuerpos helados más allá de Neptuno (30–50 UA). Es como el cinturón de asteroides, pero unas 20 veces más ancho y con mucha más masa. De él vienen los cometas de periodo corto.'],
      pluton: ['Cinturones', 'Plutón', 'Planeta enano del cinturón de Kuiper (2377 km). Periodo: 248 años · 39,5 UA de media. Su órbita es tan alargada que a veces está más cerca del Sol que Neptuno.'],
      eris: ['Cinturones', 'Eris', 'Planeta enano casi del tamaño de Plutón y algo más masivo. Su descubrimiento en 2005 llevó a redefinir qué es un planeta. Periodo: 559 años · órbita muy inclinada (44°).'],
      haumea: ['Cinturones', 'Haumea', 'Planeta enano con forma de balón de rugby: gira sobre sí mismo cada 4 horas. Tiene anillo y dos lunas. Periodo: 284 años.'],
      makemake: ['Cinturones', 'Makemake', 'Planeta enano helado, de color rojizo por los compuestos orgánicos de su superficie. Periodo: 306 años.'],
      oort_nube: ['Nube de Oort', 'Nube de Oort exterior', 'Esfera de billones de cuerpos helados que rodea el sistema solar entre unas 20 000 y 100 000 UA (hasta 1,6 años luz). Cuando una estrella pasa cerca, empuja alguno hacia el Sol y aparece un cometa de largo periodo.'],
      oort_interior: ['Nube de Oort', 'Nube de Oort interior', 'Parte más cercana y aplanada (unas 2000–20 000 UA), también llamada nube de Hills.'],
      oort_centro: ['Nube de Oort', 'El sistema solar', 'A esta escala, todo lo que hay hasta el cinturón de Kuiper cabe en el pequeño anillo del centro. La luz del Sol tarda casi un año y medio en llegar al borde de la nube.'],
      v_sol: ['Estrellas cercanas', 'Sol', 'Nuestra estrella, una enana amarilla (tipo G2). Las demás distancias de esta escala se miden desde aquí.'],
      v_proxima: ['Estrellas cercanas', 'Próxima Centauri', 'La estrella más cercana: 4,24 años luz. Enana roja, tan débil que no se ve a simple vista. Tiene al menos un planeta en su zona habitable.'],
      v_alfacen: ['Estrellas cercanas', 'Alfa Centauri A y B', '4,37 años luz. Dos estrellas parecidas al Sol que giran una alrededor de la otra; junto con Próxima forman un sistema triple.'],
      v_barnard: ['Estrellas cercanas', 'Estrella de Barnard', '5,96 años luz. Enana roja muy vieja; es la estrella que más deprisa se mueve en el cielo visto desde la Tierra.'],
      v_wolf: ['Estrellas cercanas', 'Wolf 359', '7,86 años luz. Una de las estrellas más débiles conocidas: si estuviera donde el Sol, nuestro cielo sería de un rojo apagado.'],
      v_lalande: ['Estrellas cercanas', 'Lalande 21185', '8,31 años luz. Enana roja, la más brillante de su tipo en el cielo del norte, aunque hace falta un prismático para verla.'],
      v_sirio: ['Estrellas cercanas', 'Sirio A y B', '8,6 años luz. Sirio A es la estrella más brillante del cielo nocturno; Sirio B, su compañera, es una enana blanca del tamaño de la Tierra.'],
      v_uvceti: ['Estrellas cercanas', 'Luyten 726-8', '8,7 años luz. Pareja de enanas rojas; una de ellas, UV Ceti, da fulguraciones que multiplican su brillo en minutos.'],
      v_ross154: ['Estrellas cercanas', 'Ross 154', '9,7 años luz. Enana roja con fulguraciones, en la constelación de Sagitario.'],
      v_epseri: ['Estrellas cercanas', 'Épsilon Eridani', '10,5 años luz. Estrella joven algo menor que el Sol, rodeada de un disco de polvo y con un planeta gigante.'],
      v_procyon: ['Estrellas cercanas', 'Proción', '11,5 años luz. Una de las estrellas más brillantes del cielo, con una enana blanca como compañera.'],
      v_61cyg: ['Estrellas cercanas', '61 Cygni', '11,4 años luz. Pareja de enanas naranjas; fue la primera estrella cuya distancia se midió, en 1838.'],
      v_epsind: ['Estrellas cercanas', 'Épsilon Indi', '11,9 años luz. Enana naranja acompañada por dos enanas marrones, «estrellas fallidas».'],
      v_tauceti: ['Estrellas cercanas', 'Tau Ceti', '11,9 años luz. Muy parecida al Sol y estable: una de las favoritas en la búsqueda de vida.'],
      v_altair: ['Estrellas cercanas', 'Altair', '16,7 años luz. Estrella blanca muy brillante que gira tan deprisa que está achatada.'],
      gal_nucleo: ['Vía Láctea', 'Bulbo y barra central', 'Región central abultada, llena de estrellas viejas y amarillentas. La atraviesa una barra de unos 25 000 años luz.'],
      gal_brazos: ['Vía Láctea', 'Brazos espirales', 'Cuatro brazos principales (Perseo, Escudo-Centauro, Sagitario y Norma). Brillan porque en ellos nacen estrellas jóvenes y azuladas.'],
      gal_orion: ['Vía Láctea', 'Brazo de Orión', 'Brazo menor, entre los de Sagitario y Perseo. En él está el Sol, junto con las estrellas de las constelaciones que vemos de noche.'],
      gal_sol: ['Vía Láctea', 'Estás aquí', 'El Sol, a unos 26 000 años luz del centro. Da una vuelta a la galaxia cada 230 millones de años: la última vez que estuvo en este punto, aún no existían los dinosaurios.'],
      sgr_a: ['Vía Láctea', 'Sagitario A*', 'Agujero negro supermasivo del centro de la galaxia: unos 4 millones de veces la masa del Sol. Su primera imagen se publicó en 2022.'] };
    Object.keys(P2).forEach((k) => { m.parts[k] = { grp: P2[k][0], n: P2[k][1], d: P2[k][2] }; });
    const ESC = {
      interior: { capa: 'cerca', cam: [0, 14, 26], txt: 'Planetas y cinturón de asteroides · tamaños y distancias no están a escala' },
      exterior: { capa: 'cerca', cam: [0, 42, 64], txt: 'Más allá de Neptuno: cinturón de Kuiper (30–50 UA) y planetas enanos' },
      oort: { capa: 'oort', cam: [0, 120, 260], txt: 'Nube de Oort: de 2000 a 100 000 UA (hasta 1,6 años luz) · el sistema solar es el anillo del centro' },
      vecindario: { capa: 'vec', cam: [0, 48, 100], txt: 'Estrellas a menos de 17 años luz · un anillo cada 5 años luz' },
      galaxia: { capa: 'gal', cam: [0, 170, 210], txt: 'Vía Láctea: unos 100 000 años luz de diámetro · el Sol está a 26 000 del centro' } };
    const ESC_DE = (k) => (/^v_/.test(k) ? 'vecindario' : /^(gal_|sgr_a)/.test(k) ? 'galaxia' : /^oort_/.test(k) ? 'oort' : /^(kuiper|pluton|eris|haumea|makemake)$/.test(k) ? 'exterior' : 'interior');
    m.controls = [{ id: 'escala', label: 'Escala', type: 'select', value: 'interior', options: [['interior', 'Sistema solar'], ['exterior', 'Hasta el cinturón de Kuiper'], ['oort', 'Nube de Oort'], ['vecindario', 'Estrellas cercanas'], ['galaxia', 'Vía Láctea']] }].concat(m.controls.filter((c) => c.id !== 'escala'));

    // Generador pseudoaleatorio con semilla: la galaxia y los cinturones salen siempre iguales
    const azar = (s) => () => ((s = Math.imul(s ^ (s >>> 15), 1 | s) + 0x6d2b79f5 | 0) >>> 0) / 4294967296;
    const gauss = (r) => { let u = 0; for (let i = 0; i < 4; i++) u += r(); return (u - 2) / 1.15; };
    function nube(n, f, color, size, part, opacidad) {
      const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), c = new THREE.Color();
      for (let i = 0; i < n; i++) { const p = f(i); pos.set([p[0], p[1], p[2]], i * 3); c.set(p[3] !== undefined ? p[3] : color); col.set([c.r, c.g, c.b], i * 3); }
      const ge = new THREE.BufferGeometry(); ge.setAttribute('position', new THREE.BufferAttribute(pos, 3)); ge.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const pts = new THREE.Points(ge, new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, opacity: opacidad || 0.9, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
      if (part) pts.userData.part = part; return pts;
    }
    const linea = (pts, color, op) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color, transparent: true, opacity: op === undefined ? 0.6 : op }));
    const EJE_X = new THREE.Vector3(1, 0, 0);
    const circulo = (r, n) => { const pts = []; for (let i = 0; i <= (n || 128); i++) { const a = i / (n || 128) * 2 * PI; pts.push(new THREE.Vector3(r * Math.cos(a), 0, r * Math.sin(a))); } return pts; };

    m.build = function ({ g, p, hud, api }) {
      const tl = new THREE.TextureLoader(); let alive = true; g.userData.dispose = () => { alive = false; };
      const pending = [];
      const skin = (material, key) => pending.push(() => { material.map = tl.load(TEX[key]); material.color.setHex(0xffffff); material.needsUpdate = true; });
      if (api && api.camera) { api.camera.far = 4000; api.camera.updateProjectionMatrix(); }
      const capas = { cerca: new THREE.Group(), oort: new THREE.Group(), vec: new THREE.Group(), gal: new THREE.Group(), fondo: new THREE.Group() };
      Object.values(capas).forEach((c) => g.add(c));
      const C = capas.cerca;

      // ── Capa cercana: planetas (como antes) ──
      C.add(new THREE.PointLight(0xffffff, 1.7, 0, 0));
      const sunM = new THREE.MeshBasicMaterial({ color: 0xffc83d }), sun = new THREE.Mesh(new THREE.SphereGeometry(1.6, 48, 32), sunM); sun.userData.part = 'sol'; C.add(sun); skin(sunM, 'sun');
      const skyM = new THREE.MeshBasicMaterial({ color: 0x05070f, side: THREE.BackSide }), sky = new THREE.Mesh(new THREE.SphereGeometry(180, 32, 20), skyM); C.add(sky); pending.push(() => { skyM.map = tl.load(TEX.stars_milky_way); skyM.color.setHex(0x999999); skyM.needsUpdate = true; });
      const orbit = (r) => C.add(linea(circulo(r), 0x3b4a66));
      // clave, radio, color provisional, distancia, periodo (años), textura, inclinación del eje (°), periodo de rotación relativo
      const PL = [['mercurio', 0.28, 0x9ca3af, 3, 0.24, 'mercury', 0, 0.3], ['venus', 0.45, 0xfbbf24, 4.3, 0.62, 'venus_surface', 177, -0.2], ['tierra', 0.48, 0x3b82f6, 5.8, 1, 'earth_daymap', 23.4, 3],
        ['marte', 0.36, 0xef4444, 7.2, 1.88, 'mars', 25.2, 2.9], ['jupiter', 1.1, 0xd6a36c, 10, 11.86, 'jupiter', 3.1, 7], ['saturno', 0.95, 0xeab676, 13, 29.46, 'saturn', 26.7, 6.5], ['urano', 0.7, 0x67e8f9, 16, 84, 'uranus', 97.8, -4], ['neptuno', 0.68, 0x6366f1, 19, 164.8, 'neptune', 28.3, 4.2]];
      let acc = 0, moon = null;
      const bodies = PL.map(([k, r, c, d, T, tex, tilt, spin], i) => {
        orbit(d);
        const holder = new THREE.Group(), mm = new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, metalness: 0 }), mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), mm);
        mesh.userData.part = k; holder.rotation.z = tilt * PI / 180; holder.add(mesh); C.add(holder); skin(mm, tex);
        if (k === 'saturno') {
          const rg = new THREE.RingGeometry(r * 1.25, r * 2.3, 128, 1), pa = rg.attributes.position, uv = rg.attributes.uv;
          for (let j = 0; j < pa.count; j++) { const len = Math.hypot(pa.getX(j), pa.getY(j)); uv.setXY(j, (len - r * 1.25) / (r * 1.05), 0.5); }
          const rm = new THREE.MeshBasicMaterial({ color: 0xc9b28a, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }), ring = new THREE.Mesh(rg, rm);
          ring.rotation.x = PI / 2; ring.userData.part = k; holder.add(ring); skin(rm, 'saturn_ring_alpha');
        }
        if (k === 'tierra') { const lm = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 1 }); moon = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 16), lm); moon.userData.part = 'luna'; C.add(moon); skin(lm, 'moon'); }
        return { holder, mesh, d, T, spin, ph: i * 1.7 };
      });

      // ── Cinturón de asteroides (entre Marte y Júpiter): rocas instanciadas que giran en bloque ──
      const ra = azar(7), cinturon = new THREE.Group(), N_AST = 1800;
      const ast = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0x8c8178, roughness: 1, flatShading: true }), N_AST);
      const mt = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e3 = new THREE.Euler(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
      for (let i = 0; i < N_AST; i++) {
        const a = ra() * 2 * PI, r = 8.5 + gauss(ra) * 0.38, s = 0.022 + ra() * ra() * 0.06;
        ps.set(r * Math.cos(a), gauss(ra) * 0.18, r * Math.sin(a)); e3.set(ra() * 6, ra() * 6, ra() * 6); q4.setFromEuler(e3); sc.set(s, s * (0.6 + ra() * 0.5), s);
        ast.setMatrixAt(i, mt.compose(ps, q4, sc));
      }
      ast.userData.part = 'asteroides'; cinturon.add(ast); C.add(cinturon);
      const enano = (k, r, color) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), new THREE.MeshStandardMaterial({ color, roughness: 1 })); s.userData.part = k; C.add(s); return s; };
      // [mesh, semieje (unidades), excentricidad, inclinación (°), periodo (años), fase inicial]
      const enanos = [[enano('ceres', 0.13, 0xa59e94), 8.6, 0.08, 10.6, 4.6, 0.4], [enano('vesta', 0.1, 0xb8ab98), 8.0, 0.09, 7.1, 3.63, 2.6]];

      // ── Cinturón de Kuiper (más allá de Neptuno) y planetas enanos ──
      const rk = azar(11), kuiper = nube(3600, () => { const clasico = rk() < 0.7, a = rk() * 2 * PI, r = clasico ? 26.6 + rk() * 3.8 : 19.8 + rk() * 12.5; return [r * Math.cos(a), gauss(rk) * (clasico ? 0.7 : 1.6), r * Math.sin(a)]; }, 0x9fb3c8, 0.16, 'kuiper', 0.8);
      C.add(kuiper);
      const elipse = (a, e, inc) => { const pts = []; for (let i = 0; i <= 160; i++) { const t = i / 160 * 2 * PI, r = a * (1 - e * e) / (1 + e * Math.cos(t)); pts.push(new THREE.Vector3(r * Math.cos(t), 0, -r * Math.sin(t))); } const l = linea(pts, 0x6b7a93, 0.45); l.rotation.x = inc * PI / 180; C.add(l); };
      [['pluton', 0.2, 0xd8c3a5, 25, 0.25, 17.2, 248, 1.0], ['eris', 0.19, 0xe6e6e6, 42.9, 0.44, 44, 559, 4.0], ['haumea', 0.14, 0xdfe7ee, 27.2, 0.19, 28.2, 284, 2.2], ['makemake', 0.15, 0xc9876a, 29, 0.16, 29, 306, 5.3]]
        .forEach(([k, r, c, a, e, inc, T, f]) => { elipse(a, e, inc); enanos.push([enano(k, r, c), a, e, inc, T, f]); });

      // ── Nube de Oort ──
      const ro = azar(23), O = capas.oort;
      O.add(nube(5000, () => { const u = ro() * 2 - 1, a = ro() * 2 * PI, r = 62 + Math.pow(ro(), 0.6) * 40, s = Math.sqrt(1 - u * u); return [r * s * Math.cos(a), r * u, r * s * Math.sin(a)]; }, 0x9fc2e8, 0.9, 'oort_nube', 0.7));
      O.add(nube(1800, () => { const a = ro() * 2 * PI, r = 8 + ro() * 45; return [r * Math.cos(a), gauss(ro) * r * 0.22, r * Math.sin(a)]; }, 0xbcd3ef, 0.7, 'oort_interior', 0.6));
      const centro = new THREE.Group(); centro.userData.part = 'oort_centro';
      const solOort = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffd76a })); centro.add(solOort);
      centro.add(linea(circulo(2.6, 64), 0x9fb3c8, 0.8)); O.add(centro);

      // ── Estrellas cercanas: coordenadas ecuatoriales reales (AR en horas, Dec en grados) y distancia en años luz ──
      const V = capas.vec, LY = 5; // unidades por año luz
      const ESTR = [['v_proxima', 14.495, -62.68, 4.24, 0xff7a5c, 0.5], ['v_alfacen', 14.66, -60.83, 4.37, 0xffe7a0, 0.95], ['v_barnard', 17.963, 4.69, 5.96, 0xff8a65, 0.5],
        ['v_wolf', 10.94, 7.02, 7.86, 0xff6e5a, 0.42], ['v_lalande', 11.055, 35.97, 8.31, 0xff9b73, 0.52], ['v_sirio', 6.752, -16.72, 8.6, 0xcfe3ff, 1.35], ['v_uvceti', 1.65, -17.95, 8.7, 0xff7a64, 0.45],
        ['v_ross154', 18.83, -23.84, 9.7, 0xff8466, 0.45], ['v_epseri', 3.549, -9.46, 10.5, 0xffc27a, 0.75], ['v_procyon', 7.655, 5.22, 11.46, 0xf4f1e2, 1.1], ['v_61cyg', 21.115, 38.75, 11.4, 0xffb36b, 0.7],
        ['v_epsind', 22.057, -56.79, 11.9, 0xffb06a, 0.7], ['v_tauceti', 1.735, -15.94, 11.9, 0xffe0a3, 0.8], ['v_altair', 19.846, 8.87, 16.7, 0xf2f5ff, 1.2]];
      const estrella = (k, color, r, pos) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), new THREE.MeshBasicMaterial({ color })); s.position.copy(pos); s.userData.part = k; V.add(s);
        const halo = nube(1, () => [pos.x, pos.y, pos.z], color, r * 5, null, 0.35); V.add(halo); };
      estrella('v_sol', 0xffd76a, 0.9, new THREE.Vector3());
      ESTR.forEach(([k, ar, dec, d, color, r]) => {
        const A = ar / 24 * 2 * PI, D = dec * PI / 180, pos = new THREE.Vector3(d * LY * Math.cos(D) * Math.cos(A), d * LY * Math.sin(D), d * LY * Math.cos(D) * Math.sin(A));
        estrella(k, color, r, pos);
        V.add(linea([new THREE.Vector3(), pos], 0x5b6b8a, 0.35));
        V.add(linea([pos, new THREE.Vector3(pos.x, 0, pos.z)], 0x3b4a66, 0.35)); // caída al plano: ayuda a ver la profundidad
      });
      [5, 10, 15].forEach((ly) => V.add(linea(circulo(ly * LY, 160), 0x2f3d57, 0.7)));

      // ── Vía Láctea: espiral barrada con cuatro brazos y el brazo de Orión (1 unidad = 500 años luz) ──
      const rg = azar(31), GL = capas.gal, BAR = 25 * PI / 180, PASO = Math.tan(12.5 * PI / 180);
      GL.add(nube(9000, () => { const enBarra = rg() < 0.45, r = enBarra ? Math.abs(gauss(rg)) * 9 : Math.abs(gauss(rg)) * 13; if (enBarra) { const x = gauss(rg) * 22, y = gauss(rg) * 2, z = gauss(rg) * 4.5; return [x * Math.cos(BAR) - z * Math.sin(BAR), y, x * Math.sin(BAR) + z * Math.cos(BAR)]; } const u = rg() * 2 - 1, a = rg() * 2 * PI, s = Math.sqrt(1 - u * u); return [r * s * Math.cos(a), r * u * 0.6, r * s * Math.sin(a)]; }, 0xffd9a0, 0.9, 'gal_nucleo', 0.75));
      const brazo = (desfase, r0, r1, ancho) => () => { const t = rg(), r = r0 * Math.pow(r1 / r0, t), th = desfase + Math.log(r / r0) / PASO, w = gauss(rg) * (ancho + r * 0.05), joven = rg() < 0.06;
        return [r * Math.cos(th) + w * Math.cos(th + PI / 2), gauss(rg) * 0.9, r * Math.sin(th) + w * Math.sin(th + PI / 2), joven ? 0xff8fb8 : rg() < 0.5 ? 0xb9cdff : 0xeef2ff]; };
      const brazos = [0, PI / 2, PI, 3 * PI / 2].map((d) => brazo(d + BAR, 22, 98, 2.4)); // Perseo, Norma, Escudo-Centauro y Sagitario
      GL.add(nube(26000, (i) => brazos[i % 4](), 0xb9cdff, 0.75, 'gal_brazos', 0.75));
      // El Sol, a 26 000 años luz (52 unidades), en un tramo de brazo menor entre dos brazos principales
      const thSol = BAR + PI / 4 + Math.log(52 / 22) / PASO, sol = new THREE.Vector3(52 * Math.cos(thSol), 0, 52 * Math.sin(thSol));
      GL.add(nube(2200, () => { const t = rg() * 2 - 1, r = 52 + t * 7, th = thSol + t * 0.42 + gauss(rg) * 0.03, w = gauss(rg) * 1.4; return [r * Math.cos(th) + w * Math.cos(th + PI / 2), gauss(rg) * 0.7, r * Math.sin(th) + w * Math.sin(th + PI / 2)]; }, 0xd6e2ff, 0.7, 'gal_orion', 0.85));
      const aqui = new THREE.Group(); aqui.position.copy(sol); aqui.userData.part = 'gal_sol';
      aqui.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffe066 })));
      const aro = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.25, 8, 48), new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.8 })); aro.rotation.x = PI / 2; aqui.add(aro);
      aqui.add(linea([new THREE.Vector3(), new THREE.Vector3(0, 14, 0)], 0xffe066, 0.9)); GL.add(aqui);
      const sgr = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 14), new THREE.MeshBasicMaterial({ color: 0x000000 })); sgr.userData.part = 'sgr_a'; GL.add(sgr);
      GL.add(nube(1, () => [0, 0, 0], 0xffb35c, 9, null, 0.5));

      // ── Fondo de estrellas lejanas para las escalas grandes ──
      const rf = azar(41);
      capas.fondo.add(nube(3500, () => { const u = rf() * 2 - 1, a = rf() * 2 * PI, s = Math.sqrt(1 - u * u), r = 1400 + rf() * 400; return [r * s * Math.cos(a), r * u, r * s * Math.sin(a), rf() < 0.15 ? 0xffd2a8 : 0xe8eeff]; }, 0xffffff, 3.2, null, 0.8));

      // ── Cambio de escala con viaje de cámara ──
      let actual = null, viaje = null;
      const mostrar = (k) => { const capa = ESC[k].capa; ['cerca', 'oort', 'vec', 'gal'].forEach((c) => { capas[c].visible = c === capa; }); capas.fondo.visible = capa !== 'cerca'; };
      function irA(k, sinViaje) {
        if (!ESC[k] || k === actual) return; actual = k; p.escala = k; mostrar(k);
        const sel = api && api.ctrls && api.ctrls.querySelector('[data-id="escala"]'); if (sel && sel.value !== k) sel.value = k;
        if (!api || !api.camera) return;
        const destino = new THREE.Vector3().fromArray(ESC[k].cam);
        if (sinViaje) { api.camera.position.copy(destino); api.controls.target.set(0, 0, 0); return; }
        viaje = { t: 0, desde: api.camera.position.clone(), objDesde: api.controls.target.clone(), destino };
      }
      irA(p.escala || 'interior', true);
      // Al elegir una parte de otra escala (en la lista), se viaja a esa escala
      const partInfo = (k) => { if (k && m.parts[k]) { const e = ESC_DE(k); if (ESC[e].capa !== ESC[actual].capa || (e === 'exterior' && actual === 'interior')) irA(e); } };

      function apply() { if (alive) { pending.forEach((f) => f()); loaded = true; } }
      let loaded = false;
      if (window.TEX) apply();
      else { const s = document.createElement('script'); s.src = 'data/modelos/planetas.js'; s.onload = apply; s.onerror = () => { loaded = 'err'; }; document.head.appendChild(s); }
      return { set(np) { irA(np.escala); }, partInfo, update(t, dt) {
        acc += dt * p.vel;
        if (viaje && api) {
          viaje.t = Math.min(1, viaje.t + dt / 1.6); const s = viaje.t * viaje.t * (3 - 2 * viaje.t);
          api.camera.position.lerpVectors(viaje.desde, viaje.destino, s); api.controls.target.lerpVectors(viaje.objDesde, new THREE.Vector3(), s);
          if (viaje.t >= 1) viaje = null;
        }
        const capa = ESC[actual].capa;
        if (capa === 'cerca') {
          bodies.forEach((b) => { const a = b.ph + acc * 2 * PI / b.T; b.holder.position.set(b.d * Math.cos(a), 0, -b.d * Math.sin(a)); b.mesh.rotation.y += dt * b.spin * 0.15; });
          if (moon) { const e = bodies[2].holder.position, a = acc * 2 * PI * 13.4; moon.position.set(e.x + 0.85 * Math.cos(a), 0.05, e.z - 0.85 * Math.sin(a)); }
          cinturon.rotation.y = acc * 2 * PI / 4.6; kuiper.rotation.y = acc * 2 * PI / 280;
          // Órbitas elípticas con el Sol en un foco, inclinadas igual que las líneas dibujadas
          enanos.forEach(([s, a, e, inc, T, f]) => { const th = f + acc * 2 * PI / T, r = a * (1 - e * e) / (1 + e * Math.cos(th)); s.position.set(r * Math.cos(th), 0, -r * Math.sin(th)).applyAxisAngle(EJE_X, inc * PI / 180); });
          sun.rotation.y += dt * 0.03;
          hud((loaded === true ? '' : loaded === 'err' ? 'No se pudieron cargar las texturas · ' : 'Cargando texturas… · ') + ESC[actual].txt + ' · ' + acc.toFixed(1) + ' años');
        } else {
          if (capa === 'gal') { GL.rotation.y += dt * 0.01 * Math.max(p.vel, 0.05); aro.scale.setScalar(1 + 0.25 * Math.sin(t * 3)); }
          if (capa === 'oort') O.rotation.y += dt * 0.004;
          hud(ESC[actual].txt);
        }
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
