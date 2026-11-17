// Maquetas 3D. Cada maqueta define:
//   info:  [básico, intermedio, avanzado]  explicación general por nivel
//   parts: { clave: { n: nombre, d: texto | [básico, intermedio, avanzado] } }
//   controls: parámetros que el usuario puede cambiar
//   build({ g, p, hud }): construye la escena en el grupo g con los parámetros p; devuelve { update(t, dt), set() }
//     (si devuelve `set`, los cambios de parámetros se aplican en vivo sin reconstruir la maqueta)
(function () {
  const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const mat = (c, o) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.55, metalness: 0.05 }, o));
  const tag = (m, g, part) => { if (part) m.userData.part = part; g.add(m); return m; };
  function ball(g, r, c, pos, part, o) { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 20), mat(c, o)); m.position.set(pos[0], pos[1], pos[2]); return tag(m, g, part); }
  function stick(g, a, b, r, c, part) {
    const A = V(a), d = V(b).sub(A), len = d.length() || 0.001;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 12), mat(c));
    m.position.copy(A).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    return tag(m, g, part);
  }
  function ring(g, r, c) {
    const pts = []; for (let i = 0; i <= 96; i++) { const a = i / 96 * Math.PI * 2; pts.push(new THREE.Vector3(r * Math.cos(a), 0, r * Math.sin(a))); }
    const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: c })); g.add(l); return l;
  }
  function tube(g, pts, r, c, part) { return tag(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(V)), 40, r, 12, false), mat(c)), g, part); }
  const rng = (s) => () => (s = (s * 16807) % 2147483647) / 2147483647;
  const PI = Math.PI;

  const EL = [['H', 'Hidrógeno', 0], ['He', 'Helio', 2], ['Li', 'Litio', 4], ['Be', 'Berilio', 5], ['B', 'Boro', 6], ['C', 'Carbono', 6], ['N', 'Nitrógeno', 7], ['O', 'Oxígeno', 8], ['F', 'Flúor', 10], ['Ne', 'Neón', 10], ['Na', 'Sodio', 12], ['Mg', 'Magnesio', 12], ['Al', 'Aluminio', 14], ['Si', 'Silicio', 14], ['P', 'Fósforo', 16], ['S', 'Azufre', 16], ['Cl', 'Cloro', 18], ['Ar', 'Argón', 22]];
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function config(Z) { let left = Z; return [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6]].map(([o, c]) => { const k = Math.min(left, c); left -= k; return k ? o + SUP[k] : ''; }).filter(Boolean).join(' '); }

  window.MODELS = [
    // ───────────────────────── BIOLOGÍA ─────────────────────────
    { id: 'celula', name: 'Célula animal', area: 'Biología', subj: 'biologia', cam: [-9, 6, -9],
      info: [
        'La célula es la unidad más pequeña con vida. Imagínala como una pequeña fábrica: una pared flexible la rodea, un centro de mando guarda las instrucciones y varios talleres producen energía y materiales.',
        'Es una célula eucariota: su ADN está dentro de un núcleo y el citoplasma contiene orgánulos especializados. El sistema de endomembranas (retículo, Golgi, lisosomas) fabrica, modifica y recicla moléculas, y las mitocondrias producen el ATP.',
        'La compartimentación permite mantener condiciones químicas distintas en cada orgánulo: pH ácido en los lisosomas o un gradiente de protones en la membrana mitocondrial interna. Mitocondrias y núcleo están delimitados por doble membrana; las primeras proceden de una endosimbiosis bacteriana.'],
      parts: {
        membrana: { n: 'Membrana plasmática', d: ['La «piel» de la célula: decide qué entra y qué sale.', 'Bicapa de fosfolípidos con proteínas que actúan como canales, bombas y receptores.', 'Modelo del mosaico fluido: permeabilidad selectiva, transporte activo y pasivo, y transducción de señales mediante receptores.'] },
        nucleo: { n: 'Núcleo', d: ['El centro de mando: guarda el ADN con las instrucciones de la célula.', 'Rodeado por una doble membrana con poros. En él se replica el ADN y se transcribe a ARN.', 'La envoltura nuclear se continúa con el retículo; los poros regulan el tráfico de ARNm y proteínas. La cromatina alterna zonas activas (eucromatina) y compactas (heterocromatina).'] },
        nucleolo: { n: 'Nucléolo', d: ['Una zona densa dentro del núcleo donde se fabrican piezas de los ribosomas.', 'Aquí se sintetiza el ARN ribosómico y se ensamblan las subunidades de los ribosomas.', 'No tiene membrana: es un condensado organizado alrededor de los genes de ARNr transcritos por la ARN polimerasa I.'] },
        mitocondria: { n: 'Mitocondria', d: ['La central de energía: convierte los nutrientes en energía utilizable.', 'Realiza la respiración celular y produce ATP. Tiene doble membrana y su propio ADN.', 'En la matriz ocurre el ciclo de Krebs; en la membrana interna, la cadena de electrones crea un gradiente de H⁺ que la ATP sintasa aprovecha (quimiósmosis).'] },
        re: { n: 'Retículo endoplasmático', d: ['Una red de canales donde se fabrican y transportan materiales.', 'El rugoso, con ribosomas, sintetiza proteínas; el liso fabrica lípidos y detoxifica.', 'Las proteínas con péptido señal se translocan al lumen del RER, donde se pliegan y glicosilan antes de viajar en vesículas al Golgi.'] },
        golgi: { n: 'Aparato de Golgi', d: ['La oficina de correos: empaqueta y envía las proteínas a su destino.', 'Pila de sacos aplanados que modifica, clasifica y distribuye proteínas y lípidos.', 'Polarizado en caras cis y trans; completa la glicosilación y reparte la carga hacia lisosomas, membrana o secreción.'] },
        lisosoma: { n: 'Lisosoma', d: ['El servicio de reciclaje: digiere lo que la célula ya no necesita.', 'Vesícula con enzimas digestivas que degradan macromoléculas y orgánulos dañados.', 'Contiene hidrolasas ácidas activas a pH ≈ 5, mantenido por bombas de protones. Participa en autofagia y fagocitosis.'] },
        ribosoma: { n: 'Ribosomas', d: ['Diminutas máquinas que fabrican proteínas.', 'Formados por ARN y proteínas; traducen el ARN mensajero en cadenas de aminoácidos.', 'Los eucariotas son 80S (subunidades 60S y 40S). El centro peptidil transferasa es ARN: el ribosoma es una ribozima.'] },
        centriolo: { n: 'Centriolos', d: ['Dos pequeños cilindros que ayudan a la célula a dividirse.', 'Organizan los microtúbulos que separan los cromosomas durante la división.', 'Cada uno consta de 9 tripletes de microtúbulos; el par, perpendicular, forma el centrosoma.'] },
      },
      build({ g }) {
        const r = rng(7), cut = PI * 1.5;
        const mem = new THREE.Mesh(new THREE.SphereGeometry(5, 48, 32, 0, cut), mat(0x7fd1c8, { transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false }));
        mem.userData.shell = true; tag(mem, g, 'membrana');
        tag(new THREE.Mesh(new THREE.SphereGeometry(1.6, 40, 28, 0, cut), mat(0x7c5cff, { side: THREE.DoubleSide })), g, 'nucleo');
        ball(g, 0.6, 0xff7ad9, [0, 0, 0], 'nucleolo');
        for (let i = 0; i < 4; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(2.0 + i * 0.3, 0.1, 8, 48, PI * 1.1), mat(0x4aa3ff)); t.rotation.set(PI / 2, 0, 0.3 + i * 0.4); t.position.y = (i - 1.5) * 0.3; tag(t, g, 're'); }
        [[3, 1, 1.5], [-1.5, 2.5, 2.5], [2, -2.5, -1.5], [-3, -1.5, 1], [1, 3, -2.5], [-2.2, 0.8, -2.4]].forEach((p) => { const m = ball(g, 0.5, 0xff8a3d, p, 'mitocondria'); m.scale.set(1.9, 1, 1); m.rotation.set(r() * 3, r() * 3, r() * 3); });
        for (let i = 0; i < 5; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.8 + i * 0.06, 0.1, 8, 32, PI), mat(0xffd166)); t.rotation.set(PI / 2, 0, 2); t.position.set(2.2, -1.9 + i * 0.26, 1.4); tag(t, g, 'golgi'); }
        [[0.5, -3.2, 1.5], [-2, 3, -0.5], [3.4, -0.8, -1.8], [-1, -2.5, -2.8], [1.5, 1.5, 3.3]].forEach((p) => ball(g, 0.32, 0xef476f, p, 'lisosoma'));
        for (let i = 0; i < 70; i++) { const v = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(2 + r() * 2.5); ball(g, 0.07, 0xffffff, v.toArray(), 'ribosoma'); }
        stick(g, [-2.9, -2.4, 2.2], [-2.3, -2.4, 2.2], 0.13, 0x9be564, 'centriolo');
        stick(g, [-2.6, -2.75, 2.5], [-2.6, -2.15, 2.5], 0.13, 0x9be564, 'centriolo');
      } },

    { id: 'adn', name: 'Doble hélice de ADN', area: 'Biología', subj: 'biologia', cam: [0, 0, 20],
      info: [
        'El ADN es el manual de instrucciones de los seres vivos. Tiene forma de escalera de caracol: los pasamanos sostienen la estructura y los peldaños, hechos con cuatro «letras» (A, T, G y C), guardan la información.',
        'Cada hebra es una cadena de nucleótidos (fosfato, desoxirribosa y base). Las bases se emparejan de forma complementaria, A con T y G con C, de modo que cada hebra sirve de molde para copiar la otra.',
        'En la forma B, la hélice es dextrógira, con unas 10,5 pares de bases por vuelta y surcos mayor y menor por donde las proteínas leen la secuencia. Las hebras son antiparalelas (5′→3′ y 3′→5′); A–T se une con dos puentes de hidrógeno y G–C con tres.'],
      parts: {
        esqueleto: { n: 'Esqueleto azúcar-fosfato', d: ['Los «pasamanos» de la escalera: dan forma y resistencia.', 'Alterna desoxirribosa y grupos fosfato unidos por enlaces fosfodiéster.', 'Los enlaces fosfodiéster 3′–5′ confieren polaridad a la hebra; los fosfatos, con carga negativa, quedan hacia el exterior.'] },
        A: { n: 'Adenina (A)', d: ['Una de las cuatro letras. Siempre se une a la T.', 'Base púrica (dos anillos) complementaria de la timina.', 'Purina que forma dos puentes de hidrógeno con la timina.'] },
        T: { n: 'Timina (T)', d: ['Una de las cuatro letras. Siempre se une a la A.', 'Base pirimidínica (un anillo) complementaria de la adenina.', 'Pirimidina exclusiva del ADN; en el ARN la sustituye el uracilo.'] },
        G: { n: 'Guanina (G)', d: ['Una de las cuatro letras. Siempre se une a la C.', 'Base púrica complementaria de la citosina.', 'Purina que forma tres puentes de hidrógeno con la citosina: las regiones ricas en G–C son más estables térmicamente.'] },
        C: { n: 'Citosina (C)', d: ['Una de las cuatro letras. Siempre se une a la G.', 'Base pirimidínica complementaria de la guanina.', 'Pirimidina cuya metilación (5-metilcitosina) es una marca epigenética clave.'] },
      },
      build({ g }) {
        const r = rng(3), N = 36, R = 1.6, col = { A: 0x4ade80, T: 0xf87171, G: 0x60a5fa, C: 0xfbbf24 }, pair = { A: 'T', T: 'A', G: 'C', C: 'G' };
        let p1 = null, p2 = null;
        for (let i = 0; i < N; i++) {
          const a = i * 0.6, y = (i - N / 2) * 0.42;
          const q1 = [R * Math.cos(a), y, R * Math.sin(a)], q2 = [R * Math.cos(a + 2.4), y, R * Math.sin(a + 2.4)];
          ball(g, 0.27, 0x94a3b8, q1, 'esqueleto'); ball(g, 0.27, 0x94a3b8, q2, 'esqueleto');
          if (p1) { stick(g, p1, q1, 0.1, 0x64748b, 'esqueleto'); stick(g, p2, q2, 0.1, 0x64748b, 'esqueleto'); }
          const b = 'ATGC'[Math.floor(r() * 4)], mid = [(q1[0] + q2[0]) / 2, y, (q1[2] + q2[2]) / 2];
          stick(g, q1, mid, 0.13, col[b], b); stick(g, mid, q2, 0.13, col[pair[b]], pair[b]);
          p1 = q1; p2 = q2;
        }
        return { update(t, dt) { g.rotation.y += dt * 0.3; } };
      } },

    { id: 'virus', name: 'Virus', area: 'Biología', subj: 'biologia', cam: [0, 2, 10],
      controls: [{ id: 'vista', label: 'Cápside', type: 'select', value: 'cerrado', options: [['cerrado', 'Cerrada'], ['abierto', 'Transparente (ver el interior)']] }],
      info: [
        'Un virus es un paquete diminuto con instrucciones genéticas dentro de una cubierta. Por sí solo no puede hacer nada: necesita entrar en una célula y usar su maquinaria para fabricar copias de sí mismo.',
        'Consta de un genoma (ADN o ARN) protegido por una cápside de proteínas, a menudo con simetría icosaédrica. Las espículas reconocen receptores concretos de la célula, lo que determina a quién puede infectar.',
        'Parásito intracelular obligado. La cápside se autoensambla a partir de capsómeros repetidos (economía genética). El ciclo incluye adsorción, entrada, replicación, ensamblaje y liberación; los retrovirus integran su genoma mediante transcriptasa inversa e integrasa.'],
      parts: {
        capside: { n: 'Cápside', d: ['La cubierta que protege el contenido del virus.', 'Envoltura de proteínas (capsómeros) con simetría icosaédrica: 20 caras triangulares.', 'El icosaedro maximiza el volumen interno con el mínimo de proteínas distintas; el número de triangulación T describe su arquitectura.'] },
        espicula: { n: 'Espículas', d: ['Las «llaves» con las que el virus se engancha a la célula.', 'Glicoproteínas que se unen a receptores específicos de la célula huésped.', 'Determinan el tropismo y son la diana principal de los anticuerpos neutralizantes; sus mutaciones permiten el escape inmunitario.'] },
        genoma: { n: 'Material genético', d: ['Las instrucciones para fabricar más virus.', 'Puede ser ADN o ARN, de cadena simple o doble, según el tipo de virus.', 'La clasificación de Baltimore agrupa los virus en siete clases según su genoma y cómo generan el ARNm.'] },
      },
      build({ g, p }) {
        const open = p.vista === 'abierto', geo = new THREE.IcosahedronGeometry(2.2, 1);
        const cap = new THREE.Mesh(geo, mat(0x38bdf8, { flatShading: true, transparent: open, opacity: open ? 0.28 : 1, depthWrite: !open }));
        cap.userData.shell = open; tag(cap, g, 'capside');
        const pa = geo.attributes.position, seen = {};
        for (let i = 0; i < pa.count; i++) {
          const v = new THREE.Vector3().fromBufferAttribute(pa, i), k = v.toArray().map((n) => Math.round(n * 50)).join();
          if (seen[k]) continue; seen[k] = 1;
          const n = v.clone().normalize();
          stick(g, v.toArray(), n.clone().multiplyScalar(3).toArray(), 0.06, 0xf472b6, 'espicula');
          ball(g, 0.17, 0xf472b6, n.multiplyScalar(3.05).toArray(), 'espicula');
        }
        tag(new THREE.Mesh(new THREE.TorusKnotGeometry(0.85, 0.12, 120, 10, 2, 5), mat(0xfbbf24)), g, 'genoma');
        return { update(t, dt) { g.rotation.y += dt * 0.25; } };
      } },

    // ───────────────────────── CUERPO HUMANO ─────────────────────────
    { id: 'neurona', name: 'Neurona', area: 'Cuerpo humano', subj: 'biologia', cam: [0, 3, 15],
      controls: [{ id: 'mielina', label: 'Axón', type: 'select', value: 'si', options: [['si', 'Con mielina'], ['no', 'Sin mielina']] }],
      info: [
        'Las neuronas son las células que transmiten mensajes por el cuerpo. Reciben señales por sus ramas, las envían por un cable largo y las pasan a la siguiente célula. Observa el punto luminoso: es el mensaje viajando.',
        'Las dendritas recogen señales, el soma las integra y, si se supera el umbral, se genera un potencial de acción que recorre el axón. La mielina lo aísla y hace que el impulso salte de nodo en nodo, mucho más rápido.',
        'El potencial de acción es un fenómeno de todo o nada: se abren canales de Na⁺ dependientes de voltaje (despolarización) y después de K⁺ (repolarización). En axones mielinizados los canales se concentran en los nodos de Ranvier, y la conducción saltatoria alcanza más de 100 m/s.'],
      parts: {
        soma: { n: 'Soma (cuerpo celular)', d: ['El cuerpo de la neurona, donde está el núcleo.', 'Integra las señales recibidas y mantiene el metabolismo de la célula.', 'Suma espacial y temporalmente los potenciales postsinápticos; el potencial de acción se dispara en el cono axónico.'] },
        nucleo: { n: 'Núcleo', d: ['Guarda el ADN de la neurona.', 'Dirige la síntesis de proteínas, como los neurotransmisores y sus receptores.', 'Su actividad transcripcional cambia con la experiencia, base molecular de la memoria a largo plazo.'] },
        dendrita: { n: 'Dendritas', d: ['Ramas que reciben mensajes de otras neuronas.', 'Prolongaciones ramificadas cubiertas de sinapsis que captan neurotransmisores.', 'Sus espinas dendríticas son plásticas: cambian de forma y número con el aprendizaje (potenciación a largo plazo).'] },
        axon: { n: 'Axón', d: ['El cable por el que viaja el mensaje.', 'Prolongación única que conduce el impulso nervioso desde el soma hasta los terminales.', 'Su velocidad de conducción aumenta con el diámetro y con la mielinización; puede medir más de un metro.'] },
        mielina: { n: 'Vaina de mielina', d: ['Un aislante que hace que el mensaje viaje más rápido.', 'Capas de membrana enrolladas alrededor del axón, formadas por células de Schwann u oligodendrocitos.', 'Aumenta la resistencia y reduce la capacitancia de la membrana; su pérdida causa enfermedades como la esclerosis múltiple.'] },
        nodo: { n: 'Nodo de Ranvier', d: ['Pequeños huecos entre tramos de mielina por donde «salta» el impulso.', 'Zonas sin mielina donde se regenera el potencial de acción.', 'Alta densidad de canales de Na⁺ dependientes de voltaje: aquí se regenera la señal en la conducción saltatoria.'] },
        terminal: { n: 'Terminales sinápticos', d: ['Los extremos que pasan el mensaje a la siguiente célula.', 'Liberan neurotransmisores a la hendidura sináptica.', 'La entrada de Ca²⁺ provoca la fusión de las vesículas con la membrana (exocitosis mediada por proteínas SNARE).'] },
      },
      build({ g, p, hud }) {
        const r = rng(5), mie = p.mielina === 'si', pink = 0xf9a8d4;
        const soma = ball(g, 1, pink, [-5, 0, 0], 'soma', { transparent: true, opacity: 0.8 }); soma.userData.shell = true;
        ball(g, 0.42, 0x7c5cff, [-5, 0, 0], 'nucleo');
        const branch = (from, dir, len, rad, depth) => {
          const end = from.clone().addScaledVector(dir, len);
          stick(g, from.toArray(), end.toArray(), rad, pink, 'dendrita');
          if (depth > 0) for (let k = 0; k < 2; k++) branch(end, dir.clone().add(new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).multiplyScalar(1.3)).normalize(), len * 0.72, rad * 0.7, depth - 1);
        };
        for (let i = 0; i < 6; i++) { const d = new THREE.Vector3(-0.3 - r(), r() * 2 - 1, r() * 2 - 1).normalize(); branch(new THREE.Vector3(-5, 0, 0).addScaledVector(d, 0.9), d, 1.3, 0.11, 2); }
        stick(g, [-4.1, 0, 0], [5, 0, 0], 0.1, 0xfcd34d, 'axon');
        const nodes = [-4];
        if (mie) for (let i = 0; i < 6; i++) { const x0 = -3.6 + i * 1.42; stick(g, [x0, 0, 0], [x0 + 1.2, 0, 0], 0.3, 0xe2e8f0, 'mielina'); ball(g, 0.15, 0xfb923c, [x0 + 1.31, 0, 0], 'nodo'); nodes.push(x0 + 1.31); }
        nodes.push(5);
        [[1, 0.8], [-0.9, 0.5], [0.3, -1], [-0.4, -0.3]].forEach(([y, z]) => { stick(g, [5, 0, 0], [6.1, y, z], 0.06, 0xfcd34d, 'terminal'); ball(g, 0.2, 0x34d399, [6.1, y, z], 'terminal'); });
        const imp = new THREE.Mesh(new THREE.SphereGeometry(0.26, 20, 14), new THREE.MeshBasicMaterial({ color: 0xfff27a })); g.add(imp);
        hud(mie ? 'Conducción saltatoria: el impulso salta de nodo en nodo (hasta ~100 m/s)' : 'Conducción continua: el impulso avanza por toda la membrana (~1 m/s)');
        return { update(t) {
          if (mie) { const i = Math.floor(t * 6) % (nodes.length + 4); imp.visible = i < nodes.length; if (imp.visible) imp.position.set(nodes[i], 0, 0); }
          else { const x = -4 + (t * 1.3) % 11; imp.visible = x <= 5; imp.position.set(x, 0, 0); }
        } };
      } },

    { id: 'corazon', name: 'Corazón (esquema)', area: 'Cuerpo humano', subj: 'biologia', cam: [0, 1, 12], target: [0, 0.6, 0],
      controls: [{ id: 'bpm', label: 'Frecuencia (latidos/min)', type: 'range', min: 40, max: 180, step: 5, value: 70 }],
      info: [
        'El corazón es una bomba con cuatro cavidades. El lado derecho (azul) recibe sangre sin oxígeno y la manda a los pulmones; el izquierdo (rojo) recibe sangre oxigenada y la envía a todo el cuerpo. Es un modelo esquemático: sube la frecuencia y observa el ritmo.',
        'En cada latido, primero se contraen las aurículas y llenan los ventrículos; después se contraen los ventrículos e impulsan la sangre hacia las arterias pulmonar y aorta. Las válvulas impiden que la sangre retroceda.',
        'El ciclo cardíaco alterna sístole y diástole. El impulso nace en el nódulo sinoauricular, se retrasa en el auriculoventricular y se distribuye por el haz de His y las fibras de Purkinje. Gasto cardíaco = frecuencia × volumen sistólico (unos 5 L/min en reposo).'],
      parts: {
        ad: { n: 'Aurícula derecha', d: ['Recibe la sangre sin oxígeno que vuelve del cuerpo.', 'Recibe sangre de las venas cavas y la pasa al ventrículo derecho por la válvula tricúspide.', 'Aloja el nódulo sinoauricular, marcapasos natural del corazón.'] },
        ai: { n: 'Aurícula izquierda', d: ['Recibe la sangre con oxígeno que llega de los pulmones.', 'Recibe sangre de las venas pulmonares y la pasa al ventrículo izquierdo por la válvula mitral.', 'Su dilatación favorece la fibrilación auricular, la arritmia sostenida más frecuente.'] },
        vd: { n: 'Ventrículo derecho', d: ['Bombea la sangre hacia los pulmones.', 'Impulsa sangre desoxigenada a la arteria pulmonar a baja presión.', 'Trabaja contra unos 25 mmHg de presión sistólica; su pared es más fina que la del izquierdo.'] },
        vi: { n: 'Ventrículo izquierdo', d: ['Bombea la sangre a todo el cuerpo. Es la cavidad más fuerte.', 'Impulsa sangre oxigenada a la aorta; tiene la pared muscular más gruesa.', 'Genera unos 120 mmHg en sístole; su fracción de eyección normal ronda el 55–70 %.'] },
        aorta: { n: 'Aorta', d: ['La arteria más grande: reparte la sangre con oxígeno.', 'Sale del ventrículo izquierdo y se ramifica hacia todos los órganos.', 'Su elasticidad amortigua el pulso y mantiene el flujo durante la diástole (efecto Windkessel).'] },
        pulmonar: { n: 'Arteria pulmonar', d: ['Lleva la sangre a los pulmones para cargar oxígeno.', 'Única arteria que transporta sangre desoxigenada; sale del ventrículo derecho.', 'El circuito pulmonar es de baja resistencia y baja presión.'] },
        cava: { n: 'Venas cavas', d: ['Devuelven al corazón la sangre usada por el cuerpo.', 'La cava superior y la inferior desembocan en la aurícula derecha.', 'El retorno venoso determina la precarga y, por la ley de Frank-Starling, el volumen sistólico.'] },
        vpulm: { n: 'Venas pulmonares', d: ['Traen la sangre recién oxigenada desde los pulmones.', 'Desembocan en la aurícula izquierda; son las únicas venas con sangre oxigenada.', 'Son cuatro, dos por pulmón (aquí se muestran dos).'] },
      },
      build({ g, p, hud }) {
        const mk = (r, c, pos, sc, part) => { const m = ball(g, r, c, pos, part); m.scale.set(sc[0], sc[1], sc[2]); m.userData.b = sc; return m; };
        const AT = [mk(0.9, 0x60a5fa, [-1.1, 1.3, 0], [1, 1, 0.9], 'ad'), mk(0.85, 0xf87171, [1.1, 1.4, -0.2], [1, 1, 0.9], 'ai')];
        const VE = [mk(1.3, 0x3b82f6, [-0.8, -0.6, 0.3], [1, 1.5, 1], 'vd'), mk(1.4, 0xdc2626, [0.9, -0.7, 0], [1, 1.6, 1], 'vi')];
        tube(g, [[0.6, 1, 0.3], [0.5, 3, 0.2], [1.2, 3.8, -0.3], [2.2, 3.2, -0.8], [2.4, 1, -1]], 0.32, 0xdc2626, 'aorta');
        tube(g, [[-0.4, 0.8, 0.8], [-0.2, 2.4, 0.9], [-1.2, 3, 0.6], [-2.6, 3, 0.4]], 0.28, 0x3b82f6, 'pulmonar');
        tube(g, [[-1.5, 3.9, -0.2], [-1.4, 3, -0.1], [-1.3, 2, 0]], 0.26, 0x60a5fa, 'cava');
        tube(g, [[-1.5, -3.2, -0.3], [-1.4, -1.5, -0.5], [-1.3, 0.6, -0.2]], 0.26, 0x60a5fa, 'cava');
        tube(g, [[3, 1.9, -0.6], [2.3, 1.7, -0.4], [1.7, 1.6, -0.3]], 0.16, 0xf87171, 'vpulm');
        tube(g, [[3, 1.1, -0.6], [2.4, 1.1, -0.4], [1.8, 1.2, -0.3]], 0.16, 0xf87171, 'vpulm');
        const sq = (m, k) => m.scale.set(m.userData.b[0] * k, m.userData.b[1] * k, m.userData.b[2] * k);
        return { set() {}, update(t) {
          const ph = (t % (60 / p.bpm)) / (60 / p.bpm);
          const a = ph < 0.15 ? Math.sin(ph / 0.15 * PI) : 0, v = ph >= 0.15 && ph < 0.5 ? Math.sin((ph - 0.15) / 0.35 * PI) : 0;
          AT.forEach((m) => sq(m, 1 - 0.16 * a)); VE.forEach((m) => sq(m, 1 - 0.14 * v));
          hud(p.bpm + ' lat/min · ' + (a ? 'Sístole auricular: las aurículas llenan los ventrículos' : v ? 'Sístole ventricular: la sangre sale hacia las arterias' : 'Diástole: el corazón se relaja y se llena'));
        } };
      } },

    // ───────────────────────── FÍSICA Y ASTRONOMÍA ─────────────────────────
    { id: 'solar', name: 'Sistema solar', area: 'Física y astronomía', subj: 'fisica', cam: [0, 16, 26],
      controls: [{ id: 'vel', label: 'Velocidad (años terrestres por segundo)', type: 'range', min: 0, max: 3, step: 0.05, value: 0.3 }],
      info: [
        'Ocho planetas giran alrededor del Sol, que los atrae con su gravedad. Los más cercanos dan la vuelta más deprisa: fíjate en Mercurio frente a Neptuno. (Los tamaños y las distancias no están a escala.)',
        'Las órbitas siguen las leyes de Kepler: son elipses casi circulares, y el periodo crece con la distancia según T² ∝ a³. Por eso Júpiter tarda casi 12 años y Neptuno unos 165.',
        'La ley de Kepler se deduce de la gravitación de Newton: igualando fuerza gravitatoria y centrípeta, T² = 4π²a³/(GM). La velocidad orbital decrece como 1/√r, y el momento angular de cada planeta se conserva (ley de las áreas).'],
      parts: {
        sol: { n: 'Sol', d: 'Estrella que concentra el 99,8 % de la masa del sistema. Produce energía fusionando hidrógeno en helio.' },
        mercurio: { n: 'Mercurio', d: 'Periodo: 88 días · Distancia: 0,39 UA. El más pequeño y rápido; apenas tiene atmósfera.' },
        venus: { n: 'Venus', d: 'Periodo: 225 días · Distancia: 0,72 UA. Efecto invernadero extremo: unos 465 °C en superficie.' },
        tierra: { n: 'Tierra', d: 'Periodo: 1 año · Distancia: 1 UA (150 millones de km). Único planeta conocido con vida.' },
        marte: { n: 'Marte', d: 'Periodo: 1,88 años · Distancia: 1,52 UA. Planeta rocoso y frío con una atmósfera tenue de CO₂.' },
        jupiter: { n: 'Júpiter', d: 'Periodo: 11,9 años · Distancia: 5,2 UA. Gigante gaseoso con más masa que todos los demás planetas juntos.' },
        saturno: { n: 'Saturno', d: 'Periodo: 29,5 años · Distancia: 9,5 UA. Sus anillos son fragmentos de hielo y roca.' },
        urano: { n: 'Urano', d: 'Periodo: 84 años · Distancia: 19,2 UA. Gigante helado que gira «tumbado», con el eje inclinado 98°.' },
        neptuno: { n: 'Neptuno', d: 'Periodo: 165 años · Distancia: 30 UA. Tiene los vientos más rápidos del sistema solar.' },
      },
      build({ g, p, hud }) {
        const sun = new THREE.Mesh(new THREE.SphereGeometry(1.6, 32, 24), new THREE.MeshBasicMaterial({ color: 0xffc83d })); tag(sun, g, 'sol');
        const P = [['mercurio', 0.28, 0x9ca3af, 3, 0.24], ['venus', 0.45, 0xfbbf24, 4.3, 0.62], ['tierra', 0.48, 0x3b82f6, 5.8, 1], ['marte', 0.36, 0xef4444, 7.2, 1.88], ['jupiter', 1.1, 0xd6a36c, 10, 11.86], ['saturno', 0.95, 0xeab676, 13, 29.46], ['urano', 0.7, 0x67e8f9, 16, 84], ['neptuno', 0.68, 0x6366f1, 19, 164.8]];
        let acc = 0;
        const bodies = P.map(([k, r, c, d, T], i) => {
          ring(g, d, 0x334155); const m = ball(g, r, c, [d, 0, 0], k);
          if (k === 'saturno') { const rg = new THREE.Mesh(new THREE.RingGeometry(r * 1.3, r * 2.1, 48), new THREE.MeshBasicMaterial({ color: 0xc9b28a, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })); rg.rotation.x = PI / 2.3; rg.userData.part = k; m.add(rg); }
          return { m, d, T, ph: i * 1.7 };
        });
        return { set() {}, update(t, dt) {
          acc += dt * p.vel;
          bodies.forEach((b) => { const a = b.ph + acc * 2 * PI / b.T; b.m.position.set(b.d * Math.cos(a), 0, -b.d * Math.sin(a)); });
          hud('Tiempo transcurrido: ' + acc.toFixed(1) + ' años terrestres');
        } };
      } },

    { id: 'pendulo', name: 'Péndulo simple', area: 'Física y astronomía', subj: 'fisica', cam: [0, 0.5, 13], target: [0, 0.3, 0],
      controls: [
        { id: 'L', label: 'Longitud (m)', type: 'range', min: 0.5, max: 4, step: 0.1, value: 2 },
        { id: 'ang', label: 'Ángulo inicial (°)', type: 'range', min: 5, max: 80, step: 5, value: 25 },
        { id: 'g', label: 'Gravedad', type: 'select', value: 9.81, options: [[9.81, 'Tierra (9,81 m/s²)'], [1.62, 'Luna (1,62 m/s²)'], [3.71, 'Marte (3,71 m/s²)'], [24.79, 'Júpiter (24,79 m/s²)']] }],
      info: [
        'Un peso colgado de un hilo que oscila. Cambia la longitud y verás que un péndulo largo va más despacio. Curiosamente, lo que pese la bola no influye. Prueba también en la Luna.',
        'Para oscilaciones pequeñas, el periodo es T = 2π·√(L/g): depende solo de la longitud y de la gravedad. La energía se transforma continuamente entre potencial (en los extremos) y cinética (en el punto más bajo).',
        'La ecuación exacta es θ″ = −(g/L)·sen θ. Solo si sen θ ≈ θ el movimiento es armónico simple; con amplitudes grandes el periodo real supera al de la fórmula (compáralo con 80°). Aquí se integra numéricamente la ecuación completa.'],
      parts: {
        masa: { n: 'Masa', d: ['La bola que oscila. Su peso no cambia el ritmo.', 'La masa no aparece en la fórmula del periodo: inercia y peso crecen a la vez y se compensan.', 'Masa inercial y gravitatoria coinciden (principio de equivalencia), por lo que m se cancela en la ecuación del movimiento.'] },
        hilo: { n: 'Hilo', d: ['Sujeta la bola. Cuanto más largo, más lenta la oscilación.', 'Su longitud L determina el periodo: T ∝ √L. Se supone inextensible y sin masa.', 'La tensión no realiza trabajo (es perpendicular a la trayectoria): T = m·g·cos θ + m·L·θ′².'] },
        pivote: { n: 'Punto de suspensión', d: ['El punto fijo del que cuelga el péndulo.', 'Centro del arco de circunferencia que describe la masa.', 'En el modelo ideal no hay rozamiento en el pivote ni con el aire: la energía mecánica se conserva.'] },
      },
      build({ g, p, hud }) {
        const L = p.L, G = p.g, s = 1.6, top = 3.6; let th = p.ang * PI / 180, w = 0;
        const bar = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 0.7), mat(0x64748b)); bar.position.set(0, top + 0.12, 0); g.add(bar);
        ball(g, 0.1, 0xe2e8f0, [0, top, 0], 'pivote');
        const arm = new THREE.Group(); arm.position.set(0, top, 0); g.add(arm);
        stick(arm, [0, 0, 0], [0, -L * s, 0], 0.03, 0xe2e8f0, 'hilo'); ball(arm, 0.32, 0xf59e0b, [0, -L * s, 0], 'masa');
        const T0 = 2 * PI * Math.sqrt(L / G);
        return { update(t, dt) {
          const n = 10, h = dt / n; for (let i = 0; i < n; i++) { w += -(G / L) * Math.sin(th) * h; th += w * h; }
          arm.rotation.z = th;
          hud('T = 2π·√(L/g) = ' + T0.toFixed(2) + ' s  ·  θ = ' + (th * 180 / PI).toFixed(0) + '°');
        } };
      } },

    { id: 'onda', name: 'Onda electromagnética', area: 'Física y astronomía', subj: 'fisica', cam: [8, 5, 12],
      controls: [{ id: 'lambda', label: 'Longitud de onda', type: 'range', min: 2, max: 9, step: 0.5, value: 5 }],
      info: [
        'La luz, las ondas de radio y los rayos X son ondas electromagnéticas. Están hechas de dos vibraciones que viajan juntas: una eléctrica (roja) y otra magnética (azul). Acorta la longitud de onda y verás que vibra más rápido.',
        'El campo eléctrico E y el magnético B oscilan en fase, perpendiculares entre sí y a la dirección de avance: es una onda transversal. En el vacío todas viajan a c = 3·10⁸ m/s, de modo que c = λ·f.',
        'Solución de las ecuaciones de Maxwell en el vacío: un campo E variable genera B y viceversa, con c = 1/√(μ₀ε₀) y |E| = c·|B|. La energía fluye según el vector de Poynting S = E × B/μ₀, y cada fotón transporta E = h·f.'],
      parts: {
        E: { n: 'Campo eléctrico (E)', d: ['La vibración eléctrica, dibujada en rojo (vertical).', 'Oscila perpendicular a la dirección de propagación; su dirección define la polarización.', 'Su variación temporal genera el campo magnético (ley de Ampère-Maxwell).'] },
        B: { n: 'Campo magnético (B)', d: ['La vibración magnética, dibujada en azul (horizontal).', 'Oscila en fase con E y perpendicular a él.', 'Su variación temporal induce el campo eléctrico (ley de Faraday). En el vacío, |B| = |E|/c.'] },
        k: { n: 'Dirección de propagación', d: ['Hacia dónde avanza la onda (la flecha gris).', 'Perpendicular a E y a B; la onda avanza a la velocidad de la luz.', 'Dada por el vector de onda k, paralelo a E × B; |k| = 2π/λ.'] },
      },
      build({ g, p, hud }) {
        const N = 140, X = 9, A = 1.8, c = 2.2;
        const geo = (n) => { const b = new THREE.BufferGeometry(); b.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); return b; };
        const eS = new THREE.LineSegments(geo(N * 2), new THREE.LineBasicMaterial({ color: 0xf87171 })), bS = new THREE.LineSegments(geo(N * 2), new THREE.LineBasicMaterial({ color: 0x60a5fa }));
        const eC = new THREE.Line(geo(N), new THREE.LineBasicMaterial({ color: 0xfca5a5 })), bC = new THREE.Line(geo(N), new THREE.LineBasicMaterial({ color: 0x93c5fd }));
        [eS, bS, eC, bC].forEach((o) => { o.frustumCulled = false; g.add(o); });
        stick(g, [-X, 0, 0], [X + 0.6, 0, 0], 0.03, 0x94a3b8, 'k');
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.5, 16), mat(0x94a3b8)); cone.position.set(X + 0.8, 0, 0); cone.rotation.z = -PI / 2; tag(cone, g, 'k');
        return { set() {}, update(t) {
          const k = 2 * PI / p.lambda, w = c * k, es = eS.geometry.attributes.position.array, bs = bS.geometry.attributes.position.array, ec = eC.geometry.attributes.position.array, bc = bC.geometry.attributes.position.array;
          for (let i = 0; i < N; i++) {
            const x = -X + 2 * X * i / (N - 1), v = A * Math.sin(k * x - w * t), j = i * 6, m = i * 3;
            es[j] = x; es[j + 1] = 0; es[j + 2] = 0; es[j + 3] = x; es[j + 4] = v; es[j + 5] = 0;
            bs[j] = x; bs[j + 1] = 0; bs[j + 2] = 0; bs[j + 3] = x; bs[j + 4] = 0; bs[j + 5] = v;
            ec[m] = x; ec[m + 1] = v; ec[m + 2] = 0; bc[m] = x; bc[m + 1] = 0; bc[m + 2] = v;
          }
          [eS, bS, eC, bC].forEach((o) => { o.geometry.attributes.position.needsUpdate = true; });
          hud('λ = ' + p.lambda.toFixed(1) + '  ·  f = c/λ = ' + (c / p.lambda).toFixed(2) + ' (unidades relativas)  ·  E rojo, B azul');
        } };
      } },

    { id: 'estados', name: 'Estados de la materia', area: 'Física y astronomía', subj: 'fisica', cam: [8, 4, 10],
      controls: [{ id: 'temp', label: 'Temperatura del agua (°C)', type: 'range', min: -50, max: 150, step: 1, value: 20 }],
      info: [
        'Todo está hecho de partículas en movimiento. En el hielo vibran sin moverse del sitio; en el agua líquida resbalan unas sobre otras; en el vapor vuelan libres. Mueve la temperatura y cruza los 0 °C y los 100 °C.',
        'La temperatura mide la energía cinética media de las partículas. Al calentar, vencen las fuerzas que las mantienen unidas: primero las que fijan sus posiciones (fusión) y después las que las mantienen juntas (ebullición).',
        'Durante un cambio de estado la temperatura no varía: la energía aportada (calor latente) rompe interacciones en lugar de aumentar la agitación. En el agua, los puentes de hidrógeno explican sus elevados puntos de fusión y ebullición y que el hielo sea menos denso que el líquido.'],
      parts: {
        particula: { n: 'Partícula (molécula de agua)', d: ['Cada bolita representa una molécula de agua.', 'Su velocidad media aumenta con la temperatura.', 'La energía cinética media de traslación es (3/2)·k·T; las velocidades siguen la distribución de Maxwell-Boltzmann.'] },
        solido: { n: 'Sólido', d: ['Partículas ordenadas que solo vibran: forma y volumen fijos.', 'Red cristalina: las partículas oscilan en torno a posiciones fijas.', 'En el hielo Ih cada molécula forma cuatro puentes de hidrógeno en una red hexagonal abierta.'] },
        liquido: { n: 'Líquido', d: ['Partículas juntas pero desordenadas: fluye y toma la forma del recipiente.', 'Las fuerzas intermoleculares mantienen el volumen, pero no las posiciones.', 'Orden de corto alcance; los puentes de hidrógeno se rompen y reforman en picosegundos.'] },
        gas: { n: 'Gas', d: ['Partículas muy separadas y rápidas: ocupa todo el espacio disponible.', 'Las interacciones son despreciables; la presión se debe a los choques contra las paredes.', 'Para un gas ideal, P·V = n·R·T; las desviaciones reales se corrigen con la ecuación de Van der Waals.'] },
      },
      build({ g, p, hud }) {
        const r = rng(11), ps = [], geo = new THREE.SphereGeometry(0.2, 14, 10), mt = mat(0x38bdf8);
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(6, 6, 6)), new THREE.LineBasicMaterial({ color: 0x64748b })));
        for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) for (let k = 0; k < 5; k++) {
          const m = new THREE.Mesh(geo, mt), home = new THREE.Vector3((i - 2) * 0.55, -2.75 + j * 0.55, (k - 2) * 0.55);
          m.position.copy(home); m.userData.part = 'particula'; g.add(m);
          ps.push({ m, home, v: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(), ph: r() * 6.28 });
        }
        const tmp = new THREE.Vector3();
        return { set() {}, update(t, dt) {
          const T = p.temp, state = T < 0 ? 0 : T < 100 ? 1 : 2;
          hud(T + ' °C · ' + ['Sólido (hielo): las partículas vibran en posiciones fijas', 'Líquido: las partículas se deslizan unas sobre otras', 'Gas (vapor): las partículas se mueven libremente'][state]);
          ps.forEach((o) => {
            const q = o.m.position;
            if (state === 0) {
              const a = 0.015 + (T + 50) * 0.0012;
              tmp.set(o.home.x + a * Math.sin(t * 18 + o.ph), o.home.y + a * Math.sin(t * 21 + o.ph * 2), o.home.z + a * Math.cos(t * 19 + o.ph));
              q.lerp(tmp, Math.min(1, dt * 5)); return;
            }
            const sp = state === 1 ? 0.6 + T * 0.012 : 3 + (T - 100) * 0.05, lim = state === 1 ? 2.1 : 2.78, topY = state === 1 ? -1.4 : 2.78;
            o.v.x += (r() - 0.5) * 0.6; o.v.y += (r() - 0.5) * 0.6; o.v.z += (r() - 0.5) * 0.6; o.v.normalize();
            q.addScaledVector(o.v, sp * dt);
            [['x', -lim, lim], ['y', -2.78, topY], ['z', -lim, lim]].forEach(([ax, lo, hi]) => {
              if (q[ax] > hi) { o.v[ax] = -Math.abs(o.v[ax]); q[ax] = hi + (q[ax] - hi) * 0.9; }
              if (q[ax] < lo) { o.v[ax] = Math.abs(o.v[ax]); q[ax] = lo + (q[ax] - lo) * 0.9; }
            });
          });
        } };
      } },

    { id: 'atomo', name: 'Átomo (modelo de capas)', area: 'Física y astronomía', subj: 'quimica', cam: [0, 6, 13],
      controls: [{ id: 'Z', label: 'Elemento', type: 'select', value: 6, options: EL.map((e, i) => [i + 1, (i + 1) + ' · ' + e[1] + ' (' + e[0] + ')']) }],
      info: [
        'Un átomo tiene un núcleo diminuto en el centro, con protones (rojos) y neutrones (grises), y electrones (azules) que se mueven a su alrededor en capas. Cambia de elemento: cada uno tiene un protón más que el anterior.',
        'El número de protones (Z) define el elemento, y en un átomo neutro coincide con el de electrones. Estos se reparten en capas de capacidad 2, 8, 8…; los de la última capa (electrones de valencia) determinan el comportamiento químico.',
        'Este es el modelo de Bohr, útil pero superado: los electrones no describen órbitas, sino que ocupan orbitales, regiones de probabilidad definidas por los números cuánticos n, l y m. La configuración electrónica se indica arriba. El núcleo real es unas 100 000 veces menor que el átomo.'],
      parts: {
        proton: { n: 'Protón', d: ['Partícula del núcleo con carga positiva.', 'Su número (Z) identifica al elemento. Masa ≈ 1 u, carga +1.', 'Barión formado por dos quarks up y uno down (uud), ligados por la interacción fuerte.'] },
        neutron: { n: 'Neutrón', d: ['Partícula del núcleo sin carga.', 'Aporta masa y estabilidad al núcleo. Su número distingue a los isótopos.', 'Barión udd; fuera del núcleo se desintegra (β⁻) con una vida media de unos 15 minutos.'] },
        electron: { n: 'Electrón', d: ['Partícula muy ligera con carga negativa que rodea el núcleo.', 'Su masa es unas 1836 veces menor que la del protón. Los de la capa externa forman los enlaces.', 'Leptón de espín ½; el principio de exclusión de Pauli limita a dos electrones (de espines opuestos) cada orbital.'] },
      },
      build({ g, p, hud }) {
        const Z = +p.Z, el = EL[Z - 1], n = el[2], r = rng(Z + 3), tot = Z + n, Rn = 0.28 * Math.cbrt(tot) + 0.08;
        let pl = Z;
        for (let i = 0; i < tot; i++) {
          const v = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(Rn * Math.cbrt(r()));
          const isP = r() < pl / (tot - i); if (isP) pl--;
          ball(g, 0.2, isP ? 0xef4444 : 0x9ca3af, v.toArray(), isP ? 'proton' : 'neutron');
        }
        const es = []; let left = Z;
        [[2, 2.3], [8, 3.8], [8, 5.3]].forEach(([cap, rad], s) => {
          const k = Math.min(left, cap); left -= k; if (!k) return;
          const sg = new THREE.Group(); sg.rotation.set(s * 0.45, 0, s * 0.3); g.add(sg); ring(sg, rad, 0x475569);
          for (let j = 0; j < k; j++) es.push({ e: ball(sg, 0.16, 0x38bdf8, [rad, 0, 0], 'electron'), rad, ph: j / k * 2 * PI, sp: 1.4 / (s + 1) });
        });
        hud(el[1] + ' (' + el[0] + ') · Z = ' + Z + ' · ' + Z + ' p⁺, ' + n + ' n⁰, ' + Z + ' e⁻ · ' + config(Z));
        return { update(t) { es.forEach((o) => { const a = o.ph + t * o.sp; o.e.position.set(o.rad * Math.cos(a), 0, o.rad * Math.sin(a)); }); } };
      } },
  ];
})();
