// Laboratorio de química: tabla periódica interactiva (cada elemento abre su átomo, sus datos y sus usos)
// y visor de moléculas y tipos de enlace. Datos escritos a mano: masas atómicas redondeadas, electronegatividad
// de Pauling y una frase de usos y otra de dónde se encuentra cada elemento.
(function () {
  const PI = Math.PI;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // [símbolo, nombre, masa atómica, categoría, electronegatividad, usos, dónde se encuentra]
  const E = [
    ['H', 'Hidrógeno', 1.008, 'nm', 2.20, 'Combustible de cohetes y pilas de hidrógeno; fabricación de amoníaco para fertilizantes.', 'Es el elemento más abundante del universo: forma las estrellas. En la Tierra, sobre todo en el agua.'],
    ['He', 'Helio', 4.003, 'gn', null, 'Globos y dirigibles; refrigerar los imanes de las resonancias magnéticas.', 'En las estrellas; en la Tierra se extrae de yacimientos de gas natural.'],
    ['Li', 'Litio', 6.94, 'am', 0.98, 'Baterías de móviles y coches eléctricos; medicamentos psiquiátricos.', 'Salares de Sudamérica y minerales como la espodumena.'],
    ['Be', 'Berilio', 9.012, 'at', 1.57, 'Aleaciones ligeras para aviones y satélites; ventanas de aparatos de rayos X.', 'En el mineral berilo, del que son variedades la esmeralda y la aguamarina.'],
    ['B', 'Boro', 10.81, 'sm', 2.04, 'Vidrio resistente al calor (borosilicato); detergentes.', 'En el bórax de lagos salados secos.'],
    ['C', 'Carbono', 12.011, 'nm', 2.55, 'Base de todas las moléculas de la vida; acero, plásticos, grafito y diamante.', 'En los seres vivos, el carbón, el petróleo y el CO₂ del aire.'],
    ['N', 'Nitrógeno', 14.007, 'nm', 3.04, 'Fertilizantes; nitrógeno líquido para congelar; atmósferas inertes.', 'Forma el 78 % del aire.'],
    ['O', 'Oxígeno', 15.999, 'nm', 3.44, 'Respiración; medicina; soldadura y fabricación de acero.', 'El 21 % del aire, el agua y casi la mitad de la corteza terrestre.'],
    ['F', 'Flúor', 18.998, 'ha', 3.98, 'Pasta de dientes; teflón de las sartenes.', 'En el mineral fluorita.'],
    ['Ne', 'Neón', 20.180, 'gn', null, 'Letreros luminosos rojos; láseres.', 'En trazas en el aire.'],
    ['Na', 'Sodio', 22.990, 'am', 0.93, 'Sal de mesa (unido al cloro); alumbrado público amarillo.', 'En el agua del mar y en la sal gema.'],
    ['Mg', 'Magnesio', 24.305, 'at', 1.31, 'Aleaciones ligeras; bengalas. Es el átomo central de la clorofila.', 'En el agua del mar y en la dolomita.'],
    ['Al', 'Aluminio', 26.982, 'pm', 1.61, 'Latas, papel de aluminio, aviones y ventanas.', 'En la bauxita. Es el metal más abundante de la corteza.'],
    ['Si', 'Silicio', 28.085, 'sm', 1.90, 'Chips y paneles solares; vidrio y cemento.', 'En la arena y el cuarzo.'],
    ['P', 'Fósforo', 30.974, 'nm', 2.19, 'Fertilizantes; cerillas. Forma parte del ADN y de los huesos.', 'En rocas fosfatadas.'],
    ['S', 'Azufre', 32.06, 'nm', 2.58, 'Ácido sulfúrico; vulcanizado del caucho; pólvora.', 'En zonas volcánicas, el yeso y la pirita.'],
    ['Cl', 'Cloro', 35.45, 'ha', 3.16, 'Desinfección del agua; lejía; plástico PVC.', 'En la sal del mar.'],
    ['Ar', 'Argón', 39.95, 'gn', null, 'Relleno de bombillas; atmósfera protectora para soldar.', 'Casi el 1 % del aire.'],
    ['K', 'Potasio', 39.098, 'am', 0.82, 'Fertilizantes. Esencial para nervios y músculos.', 'En minerales de potasa y en alimentos como el plátano.'],
    ['Ca', 'Calcio', 40.078, 'at', 1.00, 'Huesos y dientes; cemento y yeso.', 'En la caliza y el mármol; en la leche.'],
    ['Sc', 'Escandio', 44.956, 'mt', 1.36, 'Aleaciones ligeras para bicicletas y aviones.', 'Escaso; en minerales raros de Escandinavia.'],
    ['Ti', 'Titanio', 47.867, 'mt', 1.54, 'Prótesis e implantes; aviones; pigmento blanco de pinturas.', 'En los minerales rutilo e ilmenita.'],
    ['V', 'Vanadio', 50.942, 'mt', 1.63, 'Aceros para herramientas; baterías de gran tamaño.', 'En minerales como la vanadinita.'],
    ['Cr', 'Cromo', 51.996, 'mt', 1.66, 'Acero inoxidable; cromados brillantes.', 'En el mineral cromita.'],
    ['Mn', 'Manganeso', 54.938, 'mt', 1.55, 'Aceros; pilas alcalinas.', 'En la pirolusita y en nódulos del fondo marino.'],
    ['Fe', 'Hierro', 55.845, 'mt', 1.83, 'Acero para construcción y máquinas. Está en la hemoglobina de la sangre.', 'En la hematites y la magnetita; forma el núcleo de la Tierra.'],
    ['Co', 'Cobalto', 58.933, 'mt', 1.88, 'Baterías de litio; imanes; pigmento azul.', 'En minas del Congo, junto al cobre y el níquel.'],
    ['Ni', 'Níquel', 58.693, 'mt', 1.91, 'Acero inoxidable; monedas; baterías.', 'En la pentlandita y en meteoritos.'],
    ['Cu', 'Cobre', 63.546, 'mt', 1.90, 'Cables eléctricos; tuberías; bronce y latón.', 'En la calcopirita; a veces en estado nativo.'],
    ['Zn', 'Cinc', 65.38, 'mt', 1.65, 'Galvanizado del acero; latón; pilas.', 'En la esfalerita (blenda).'],
    ['Ga', 'Galio', 69.723, 'pm', 1.81, 'LED y chips. Se funde en la mano, a 30 °C.', 'Subproducto de la bauxita.'],
    ['Ge', 'Germanio', 72.630, 'sm', 2.01, 'Fibra óptica; lentes de infrarrojos.', 'Subproducto de las minas de cinc.'],
    ['As', 'Arsénico', 74.922, 'sm', 2.18, 'Semiconductores. Antiguamente, veneno y pesticidas.', 'En la arsenopirita.'],
    ['Se', 'Selenio', 78.971, 'nm', 2.55, 'Vidrio; células fotoeléctricas. Nutriente en cantidades mínimas.', 'Subproducto del refinado del cobre.'],
    ['Br', 'Bromo', 79.904, 'ha', 2.96, 'Retardantes de llama; fotografía antigua.', 'En salmueras y en el agua del mar.'],
    ['Kr', 'Kriptón', 83.798, 'gn', 3.00, 'Flashes y lámparas de alta potencia.', 'En trazas en el aire.'],
    ['Rb', 'Rubidio', 85.468, 'am', 0.82, 'Relojes atómicos; investigación.', 'En el mineral lepidolita.'],
    ['Sr', 'Estroncio', 87.62, 'at', 0.95, 'Color rojo de los fuegos artificiales.', 'En la celestina y la estroncianita.'],
    ['Y', 'Itrio', 88.906, 'mt', 1.22, 'LED blancos; láseres; superconductores.', 'En minerales de tierras raras.'],
    ['Zr', 'Circonio', 91.224, 'mt', 1.33, 'Vainas del combustible nuclear; circonitas de joyería.', 'En el mineral circón.'],
    ['Nb', 'Niobio', 92.906, 'mt', 1.6, 'Imanes superconductores; aceros especiales.', 'En el pirocloro, sobre todo en Brasil.'],
    ['Mo', 'Molibdeno', 95.95, 'mt', 2.16, 'Aceros muy resistentes; lubricantes.', 'En la molibdenita.'],
    ['Tc', 'Tecnecio', 98, 'mt', 1.9, 'Trazador en pruebas de medicina nuclear.', 'Artificial: se obtiene en reactores. Fue el primer elemento fabricado.'],
    ['Ru', 'Rutenio', 101.07, 'mt', 2.2, 'Contactos eléctricos; catalizadores.', 'Junto al platino.'],
    ['Rh', 'Rodio', 102.906, 'mt', 2.28, 'Catalizadores de coches; baño de joyas.', 'Junto al platino; muy escaso.'],
    ['Pd', 'Paladio', 106.42, 'mt', 2.20, 'Catalizadores de coches; oro blanco.', 'En minas de platino y níquel.'],
    ['Ag', 'Plata', 107.868, 'mt', 1.93, 'Joyas; electrónica; espejos.', 'En la argentita; a veces nativa.'],
    ['Cd', 'Cadmio', 112.414, 'mt', 1.69, 'Baterías recargables de níquel-cadmio; pigmentos.', 'Subproducto del cinc. Es tóxico.'],
    ['In', 'Indio', 114.818, 'pm', 1.78, 'Pantallas táctiles (óxido de indio y estaño).', 'Subproducto del cinc.'],
    ['Sn', 'Estaño', 118.710, 'pm', 1.96, 'Soldadura; hojalata; bronce.', 'En la casiterita.'],
    ['Sb', 'Antimonio', 121.760, 'sm', 2.05, 'Retardantes de llama; baterías de plomo.', 'En la estibina.'],
    ['Te', 'Telurio', 127.60, 'sm', 2.1, 'Paneles solares; discos regrabables.', 'Subproducto del cobre.'],
    ['I', 'Yodo', 126.904, 'ha', 2.66, 'Desinfectante; sal yodada. Necesario para las hormonas tiroideas.', 'En algas y salmueras.'],
    ['Xe', 'Xenón', 131.293, 'gn', 2.6, 'Faros de coche; motores iónicos de satélites.', 'En trazas en el aire.'],
    ['Cs', 'Cesio', 132.905, 'am', 0.79, 'Relojes atómicos: define la duración del segundo.', 'En el mineral polucita.'],
    ['Ba', 'Bario', 137.327, 'at', 0.89, 'Contraste para radiografías; fuegos artificiales verdes.', 'En la baritina.'],
    ['La', 'Lantano', 138.905, 'la', 1.10, 'Lentes de cámaras; baterías de coches híbridos.', 'En la monacita y la bastnasita.'],
    ['Ce', 'Cerio', 140.116, 'la', 1.12, 'Piedras de mechero; catalizadores; pulido de vidrio.', 'Es la más abundante de las tierras raras.'],
    ['Pr', 'Praseodimio', 140.908, 'la', 1.13, 'Imanes; vidrios de gafas de soldador.', 'En minerales de tierras raras.'],
    ['Nd', 'Neodimio', 144.242, 'la', 1.14, 'Imanes muy potentes de auriculares y aerogeneradores.', 'En minerales de tierras raras.'],
    ['Pm', 'Prometio', 145, 'la', 1.13, 'Pinturas luminosas; baterías nucleares.', 'Artificial y radiactivo.'],
    ['Sm', 'Samario', 150.36, 'la', 1.17, 'Imanes resistentes al calor.', 'En minerales de tierras raras.'],
    ['Eu', 'Europio', 151.964, 'la', 1.2, 'Color rojo de las pantallas; tinta de seguridad de los billetes de euro.', 'En minerales de tierras raras.'],
    ['Gd', 'Gadolinio', 157.25, 'la', 1.2, 'Contraste para resonancia magnética.', 'En minerales de tierras raras.'],
    ['Tb', 'Terbio', 158.925, 'la', 1.1, 'Fósforos verdes de pantallas y lámparas.', 'En minerales de tierras raras.'],
    ['Dy', 'Disprosio', 162.500, 'la', 1.22, 'Imanes de motores eléctricos.', 'En minerales de tierras raras.'],
    ['Ho', 'Holmio', 164.930, 'la', 1.23, 'Láseres médicos; imanes.', 'En minerales de tierras raras.'],
    ['Er', 'Erbio', 167.259, 'la', 1.24, 'Amplificadores de la fibra óptica.', 'En minerales de tierras raras.'],
    ['Tm', 'Tulio', 168.934, 'la', 1.25, 'Equipos portátiles de rayos X.', 'En minerales de tierras raras; muy escaso.'],
    ['Yb', 'Iterbio', 173.045, 'la', 1.1, 'Relojes atómicos; láseres.', 'En minerales de tierras raras.'],
    ['Lu', 'Lutecio', 174.967, 'la', 1.27, 'Detectores de los escáneres PET.', 'En minerales de tierras raras; muy escaso.'],
    ['Hf', 'Hafnio', 178.49, 'mt', 1.3, 'Barras de control de reactores nucleares; chips.', 'Junto al circonio.'],
    ['Ta', 'Tántalo', 180.948, 'mt', 1.5, 'Condensadores de móviles; implantes.', 'En el coltán.'],
    ['W', 'Wolframio', 183.84, 'mt', 2.36, 'Filamentos de bombillas; herramientas de corte. Lo aislaron en España los hermanos Elhuyar.', 'En la wolframita y la scheelita.'],
    ['Re', 'Renio', 186.207, 'mt', 1.9, 'Turbinas de aviones.', 'Subproducto del molibdeno; rarísimo.'],
    ['Os', 'Osmio', 190.23, 'mt', 2.2, 'Puntas de plumas; contactos eléctricos. Es el elemento más denso.', 'Junto al platino.'],
    ['Ir', 'Iridio', 192.217, 'mt', 2.20, 'Bujías; con él se hizo el antiguo metro patrón.', 'Junto al platino y en meteoritos.'],
    ['Pt', 'Platino', 195.084, 'mt', 2.28, 'Catalizadores; joyería; medicamentos de quimioterapia.', 'Nativo, sobre todo en Sudáfrica y Rusia.'],
    ['Au', 'Oro', 196.967, 'mt', 2.54, 'Joyas; reserva de valor; contactos electrónicos.', 'Nativo, en vetas y pepitas.'],
    ['Hg', 'Mercurio', 200.592, 'mt', 2.00, 'Termómetros antiguos; lámparas fluorescentes. Es líquido a temperatura ambiente.', 'En el cinabrio (minas de Almadén). Es tóxico.'],
    ['Tl', 'Talio', 204.38, 'pm', 1.62, 'Electrónica. Antiguamente, raticida.', 'Subproducto del cinc y el plomo. Muy tóxico.'],
    ['Pb', 'Plomo', 207.2, 'pm', 2.33, 'Baterías de coche; protección contra la radiación.', 'En la galena. Es tóxico.'],
    ['Bi', 'Bismuto', 208.980, 'pm', 2.02, 'Medicamentos para el estómago; aleaciones que funden con facilidad.', 'En la bismutina; a veces nativo.'],
    ['Po', 'Polonio', 209, 'sm', 2.0, 'Fuentes de calor en sondas espaciales.', 'En trazas en minerales de uranio. Muy radiactivo.'],
    ['At', 'Astato', 210, 'ha', 2.2, 'Investigación en radioterapia.', 'Es el elemento natural más escaso.'],
    ['Rn', 'Radón', 222, 'gn', 2.2, 'Antiguamente, radioterapia.', 'Gas radiactivo que emana de suelos graníticos.'],
    ['Fr', 'Francio', 223, 'am', 0.7, 'Solo investigación.', 'En trazas en minerales de uranio; dura minutos.'],
    ['Ra', 'Radio', 226, 'at', 0.9, 'Antiguas pinturas luminosas de relojes.', 'En minerales de uranio. Lo descubrió Marie Curie.'],
    ['Ac', 'Actinio', 227, 'ac', 1.1, 'Radioterapia experimental.', 'En trazas en minerales de uranio.'],
    ['Th', 'Torio', 232.038, 'ac', 1.3, 'Posible combustible nuclear; camisas de las lámparas de gas.', 'En la monacita.'],
    ['Pa', 'Protactinio', 231.036, 'ac', 1.5, 'Solo investigación.', 'En trazas en minerales de uranio.'],
    ['U', 'Uranio', 238.029, 'ac', 1.38, 'Combustible de las centrales nucleares.', 'En la uraninita (pechblenda).'],
    ['Np', 'Neptunio', 237, 'ac', 1.36, 'Detectores de neutrones.', 'Se produce en reactores nucleares.'],
    ['Pu', 'Plutonio', 244, 'ac', 1.28, 'Armas y reactores; generadores eléctricos de sondas espaciales.', 'Se produce en reactores nucleares.'],
    ['Am', 'Americio', 243, 'ac', 1.3, 'Detectores de humo.', 'Artificial.'],
    ['Cm', 'Curio', 247, 'ac', 1.3, 'Fuente de energía en sondas espaciales.', 'Artificial.'],
    ['Bk', 'Berkelio', 247, 'ac', 1.3, 'Solo investigación.', 'Artificial.'],
    ['Cf', 'Californio', 251, 'ac', 1.3, 'Fuente de neutrones para arrancar reactores.', 'Artificial.'],
  ].concat([['Es', 'Einstenio', 252, 'ac'], ['Fm', 'Fermio', 257, 'ac'], ['Md', 'Mendelevio', 258, 'ac'], ['No', 'Nobelio', 259, 'ac'], ['Lr', 'Lawrencio', 266, 'ac'], ['Rf', 'Rutherfordio', 267, 'mt'],
    ['Db', 'Dubnio', 268, 'mt'], ['Sg', 'Seaborgio', 269, 'mt'], ['Bh', 'Bohrio', 270, 'mt'], ['Hs', 'Hasio', 277, 'mt'], ['Mt', 'Meitnerio', 278, 'mt'], ['Ds', 'Darmstatio', 281, 'mt'], ['Rg', 'Roentgenio', 282, 'mt'],
    ['Cn', 'Copernicio', 285, 'mt'], ['Nh', 'Nihonio', 286, 'pm'], ['Fl', 'Flerovio', 289, 'pm'], ['Mc', 'Moscovio', 290, 'pm'], ['Lv', 'Livermorio', 293, 'pm'], ['Ts', 'Teneso', 294, 'ha'], ['Og', 'Oganesón', 294, 'gn']]
    .map((e) => e.concat([null, 'Solo investigación científica.', 'Artificial: se fabrica átomo a átomo en aceleradores de partículas y se desintegra en muy poco tiempo.'])));
  window.ELEMENTOS = E;
  const CAT = { am: ['Metal alcalino', '#f87171'], at: ['Alcalinotérreo', '#fb923c'], mt: ['Metal de transición', '#facc15'], pm: ['Otro metal', '#a3a3a3'], sm: ['Semimetal', '#34d399'],
    nm: ['No metal', '#60a5fa'], ha: ['Halógeno', '#22d3ee'], gn: ['Gas noble', '#c084fc'], la: ['Lantánido', '#f9a8d4'], ac: ['Actínido', '#fda4af'] };
  const GASES = 'H He N O F Ne Cl Ar Kr Xe Rn', LIQ = 'Br Hg';

  // Configuración electrónica: orden de llenado de Madelung con las excepciones conocidas
  const ORD = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'], CAP = { s: 2, p: 6, d: 10, f: 14 };
  const EXC = { 24: [['4s', -1], ['3d', 1]], 29: [['4s', -1], ['3d', 1]], 41: [['5s', -1], ['4d', 1]], 42: [['5s', -1], ['4d', 1]], 44: [['5s', -1], ['4d', 1]], 45: [['5s', -1], ['4d', 1]], 46: [['5s', -2], ['4d', 2]],
    47: [['5s', -1], ['4d', 1]], 57: [['4f', -1], ['5d', 1]], 58: [['4f', -1], ['5d', 1]], 64: [['4f', -1], ['5d', 1]], 78: [['6s', -1], ['5d', 1]], 79: [['6s', -1], ['5d', 1]], 89: [['5f', -1], ['6d', 1]],
    90: [['5f', -2], ['6d', 2]], 91: [['5f', -1], ['6d', 1]], 92: [['5f', -1], ['6d', 1]], 93: [['5f', -1], ['6d', 1]], 96: [['5f', -1], ['6d', 1]], 103: [['6d', -1], ['7p', 1]] };
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹', sup = (n) => String(n).split('').map((d) => SUP[+d]).join('');
  function config(Z) {
    const c = {}; let left = Z;
    ORD.forEach((o) => { const k = Math.min(left, CAP[o[1]]); if (k) c[o] = k; left -= k; });
    (EXC[Z] || []).forEach(([o, d]) => { c[o] = (c[o] || 0) + d; if (!c[o]) delete c[o]; });
    const capas = [0, 0, 0, 0, 0, 0, 0]; Object.keys(c).forEach((o) => { capas[+o[0] - 1] += c[o]; });
    while (capas.length && !capas[capas.length - 1]) capas.pop();
    const noble = [[86, 'Rn'], [54, 'Xe'], [36, 'Kr'], [18, 'Ar'], [10, 'Ne'], [2, 'He']].find((n) => n[0] < Z), base = noble ? config(noble[0]).c : {};
    const orden = (a, b) => (+a[0] - +b[0]) || ('spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1]));
    const txt = (noble ? '[' + noble[1] + '] ' : '') + Object.keys(c).filter((o) => c[o] !== base[o]).sort(orden).map((o) => o + sup(c[o])).join(' ');
    return { c, capas, txt };
  }
  // Posición en la tabla: [fila, columna, grupo, periodo]. Lantánidos y actínidos van en dos filas aparte.
  function pos(Z) {
    const fin = [2, 10, 18, 36, 54, 86, 118]; let p = 0; while (Z > fin[p]) p++;
    const o = Z - (p ? fin[p - 1] : 0) - 1;
    if (p === 0) return [1, o ? 18 : 1, o ? 18 : 1, 1];
    if (p < 3) return [p + 1, o < 2 ? o + 1 : o + 11, o < 2 ? o + 1 : o + 11, p + 1];
    if (p < 5) return [p + 1, o + 1, o + 1, p + 1];
    if (o < 2) return [p + 1, o + 1, o + 1, p + 1];
    if (o < 17) return [p + 4, o + 1, 0, p + 1]; // bloque f
    return [p + 1, o - 13, o - 13, p + 1];
  }

  const P3 = (n, a, b, c) => ({ n, d: [a, b, c] });
  MODELS.push({ id: 'tabla', name: 'Tabla periódica', area: 'Química', subj: 'quimica', cam: [0, 9, 17], target: [0, 0, 0], noChips: true,
    credit: 'Maqueta generada por código. El átomo se dibuja con el modelo de capas de Bohr, que es una simplificación: los electrones reales no giran en órbitas. Las configuraciones de los elementos más pesados son las previstas por la teoría.',
    info: [
      'Todos los materiales del universo están hechos con estos 118 elementos. Pulsa cualquier casilla: arriba verás su átomo, con los electrones repartidos en capas, y al lado sus datos, para qué se usa y dónde se encuentra.',
      'Los elementos se ordenan por su número atómico (protones). Los de una misma columna (grupo) tienen los mismos electrones en la última capa, y por eso se comportan de forma parecida; los de una misma fila (periodo) tienen el mismo número de capas. Los electrones de la última capa, en naranja, son los de valencia.',
      'La estructura de la tabla refleja el llenado de los orbitales: bloques s (grupos 1–2), p (13–18), d (metales de transición) y f (lantánidos y actínidos). El orden sigue la regla de Madelung, con excepciones como el cromo y el cobre, que ganan estabilidad con subniveles d semillenos o llenos.'],
    parts: {
      nucleo: P3('Núcleo', 'El centro del átomo. Contiene los protones y los neutrones, y casi toda la masa.', 'El número de protones (Z) identifica al elemento. Los neutrones añaden masa y estabilidad; su número distingue a los isótopos.', 'Aquí se muestra muy ampliado: el núcleo real es unas 100 000 veces más pequeño que el átomo. Se mantiene unido por la interacción nuclear fuerte.'),
      electron: P3('Electrones internos', 'Los electrones de las capas interiores. No participan en los enlaces.', 'Apantallan la carga del núcleo: por eso los electrones externos notan una atracción menor.', 'La carga nuclear efectiva que sienten los electrones de valencia es aproximadamente Z menos el número de electrones internos.'),
      valencia: P3('Electrones de valencia', 'Los de la última capa, en naranja. Son los que el átomo usa para unirse a otros.', 'Determinan el comportamiento químico: los metales los pierden con facilidad y los no metales tienden a ganarlos o compartirlos.', 'En los elementos representativos su número coincide con la cifra de las unidades del grupo. En los metales de transición también intervienen los electrones d.'),
    },
    build({ g, hud, api }) {
      let Z = 6, electrones = null, nucleo = null, anillos = [], capas = [], side = null, ui = null;
      const matE = new THREE.MeshStandardMaterial({ color: 0x60a5fa, roughness: 0.4 }), matV = new THREE.MeshStandardMaterial({ color: 0xfb923c, roughness: 0.4 });
      const grupoAtomo = new THREE.Group(); g.add(grupoAtomo);
      function dibujar() {
        while (grupoAtomo.children.length) { const o = grupoAtomo.children[0]; grupoAtomo.remove(o); if (o.geometry) o.geometry.dispose(); }
        const e = E[Z - 1], cf = config(Z); capas = cf.capas; anillos = [];
        nucleo = new THREE.Mesh(new THREE.SphereGeometry(0.45 + 0.09 * Math.cbrt(e[2]), 32, 24), new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5, emissive: 0x3b0a0a }));
        nucleo.userData.part = 'nucleo'; grupoAtomo.add(nucleo);
        capas.forEach((n, i) => {
          const r = 1.5 + i * 0.95, pts = [];
          for (let k = 0; k <= 96; k++) pts.push(new THREE.Vector3(r * Math.cos(k / 96 * 2 * PI), 0, r * Math.sin(k / 96 * 2 * PI)));
          grupoAtomo.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x475569 })));
          const ult = i === capas.length - 1, im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.15, 14, 10), ult ? matV : matE, n);
          im.userData.part = ult ? 'valencia' : 'electron'; im.frustumCulled = false; grupoAtomo.add(im); anillos.push({ im, r, n, w: 0.9 / (1 + i * 0.55) * (i % 2 ? -1 : 1) });
        });
        ficha();
      }
      function ficha() {
        if (!side) return;
        const e = E[Z - 1], cf = config(Z), ps = pos(Z), neu = Math.round(e[2]) - Z, col = CAT[e[3]][1];
        const estado = GASES.split(' ').indexOf(e[0]) >= 0 ? 'Gas' : LIQ.split(' ').indexOf(e[0]) >= 0 ? 'Líquido' : Z > 103 ? 'Desconocido' : 'Sólido';
        side.innerHTML = `<div class="elficha"><div class="elcas" style="border-color:${col}"><small>${Z}</small><b>${e[0]}</b><span>${esc(e[1])}</span><small>${String(e[2]).replace('.', ',')}</small></div>
          <dl><dt>Tipo</dt><dd><i style="background:${col}"></i>${CAT[e[3]][0]}</dd><dt>Grupo y periodo</dt><dd>${ps[2] ? 'Grupo ' + ps[2] : 'Bloque f'} · periodo ${ps[3]}</dd>
          <dt>Partículas</dt><dd>${Z} protones · ${neu} neutrones · ${Z} electrones</dd><dt>Electrones por capa</dt><dd>${cf.capas.join(' · ')}</dd>
          <dt>Configuración</dt><dd>${cf.txt}</dd><dt>Electrones de valencia</dt><dd>${cf.capas[cf.capas.length - 1]} en la última capa</dd>
          <dt>Masa atómica</dt><dd>${String(e[2]).replace('.', ',')} u</dd><dt>Electronegatividad</dt><dd>${e[4] === null ? 'No se le asigna' : String(e[4]).replace('.', ',') + ' (Pauling)'}</dd>
          <dt>Estado a 20 °C</dt><dd>${estado}</dd></dl></div>
          <h4>Para qué se usa</h4><p>${esc(e[5])}</p><h4>Dónde se encuentra</h4><p>${esc(e[6])}</p>`;
        if (ui) ui.querySelectorAll('.el').forEach((b) => b.classList.toggle('on', +b.dataset.z === Z));
      }
      function mount() {
        side = api.side;
        ui = document.createElement('div'); ui.className = 'ptabla-wrap';
        let h = '<div class="ptabla">';
        E.forEach((e, i) => { const p = pos(i + 1); h += `<button class="el" data-z="${i + 1}" style="grid-row:${p[0]};grid-column:${p[1]};--c:${CAT[e[3]][1]}" title="${esc(e[1])}"><small>${i + 1}</small>${e[0]}</button>`; });
        h += '<span class="hueco" style="grid-row:6;grid-column:3">57–71</span><span class="hueco" style="grid-row:7;grid-column:3">89–103</span></div>';
        h += '<div class="pleyenda">' + Object.keys(CAT).map((k) => `<span><i style="background:${CAT[k][1]}"></i>${CAT[k][0]}</span>`).join('') + '</div>';
        ui.innerHTML = h; api.ctrls.appendChild(ui);
        ui.querySelectorAll('.el').forEach((b) => { b.onclick = () => { Z = +b.dataset.z; dibujar(); }; });
        const ir = window.Buscar && Buscar.destino('elemento:'); if (ir) { const k = E.findIndex((e) => e[0] === ir); if (k >= 0) Z = k + 1; }
        dibujar();
      }
      dibujar();
      const M = new THREE.Matrix4();
      return { mount, update(t) {
        anillos.forEach((a, i) => { for (let k = 0; k < a.n; k++) { const ang = k / a.n * 2 * PI + t * a.w + i; M.makeTranslation(a.r * Math.cos(ang), 0, a.r * Math.sin(ang)); a.im.setMatrixAt(k, M); } a.im.instanceMatrix.needsUpdate = true; });
        const e = E[Z - 1]; hud(e[1] + ' (' + e[0] + ') · Z = ' + Z + ' · capas: ' + capas.join(', '));
      } };
    } });

  // ───────────── Moléculas y enlaces ─────────────
  const COL = { H: 0xf1f5f9, C: 0x374151, O: 0xef4444, N: 0x3b82f6, Cl: 0x22c55e, Na: 0xa855f7, Cu: 0xd97706 }, RAD = { H: 0.32, C: 0.5, O: 0.48, N: 0.48, Cl: 0.62, Na: 0.6, Cu: 0.62 };
  const hex = (r, a0) => [0, 1, 2, 3, 4, 5].map((i) => [r * Math.cos(a0 + i * PI / 3), r * Math.sin(a0 + i * PI / 3), 0]);
  // nombre, descripción corta, átomos [elemento, x, y, z], enlaces [i, j, orden], pares solitarios [átomo, dirección]
  const MOL = {
    h2o: ['Agua (H₂O)', 'Angular, 104,5° · dos enlaces covalentes polares · molécula polar', [['O', 0, 0.2, 0], ['H', 1.21, -0.74, 0], ['H', -1.21, -0.74, 0]], [[0, 1, 1], [0, 2, 1]], [[0, [0, 0.75, 0.66]], [0, [0, 0.75, -0.66]]]],
    co2: ['Dióxido de carbono (CO₂)', 'Lineal, 180° · dos enlaces dobles polares · molécula apolar', [['C', 0, 0, 0], ['O', 1.86, 0, 0], ['O', -1.86, 0, 0]], [[0, 1, 2], [0, 2, 2]], []],
    ch4: ['Metano (CH₄)', 'Tetraédrica, 109,5° · cuatro enlaces covalentes simples · molécula apolar', [['C', 0, 0, 0], ['H', 1.01, 1.01, 1.01], ['H', 1.01, -1.01, -1.01], ['H', -1.01, 1.01, -1.01], ['H', -1.01, -1.01, 1.01]], [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], []],
    nh3: ['Amoníaco (NH₃)', 'Piramidal, 107° · tres enlaces covalentes polares y un par solitario', [['N', 0, 0.25, 0], ['H', 1.5, -0.36, 0], ['H', -0.75, -0.36, 1.3], ['H', -0.75, -0.36, -1.3]], [[0, 1, 1], [0, 2, 1], [0, 3, 1]], [[0, [0, 1, 0]]]],
    o2: ['Oxígeno (O₂)', 'Enlace covalente doble apolar: comparten dos pares de electrones', [['O', 0.97, 0, 0], ['O', -0.97, 0, 0]], [[0, 1, 2]], []],
    n2: ['Nitrógeno (N₂)', 'Enlace covalente triple apolar: muy fuerte, por eso el nitrógeno es poco reactivo', [['N', 0.88, 0, 0], ['N', -0.88, 0, 0]], [[0, 1, 3]], []],
    hcl: ['Cloruro de hidrógeno (HCl)', 'Enlace covalente simple polar: el cloro atrae más los electrones', [['Cl', 0.6, 0, 0], ['H', -1.45, 0, 0]], [[0, 1, 1]], []],
    c2h4: ['Eteno (C₂H₄)', 'Plana, 120° · enlace doble C=C (hibridación sp²)', [['C', 1.07, 0, 0], ['C', -1.07, 0, 0], ['H', 1.98, 1.49, 0], ['H', 1.98, -1.49, 0], ['H', -1.98, 1.49, 0], ['H', -1.98, -1.49, 0]], [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]], []],
    c2h2: ['Etino (C₂H₂)', 'Lineal, 180° · enlace triple C≡C (hibridación sp)', [['C', 0.96, 0, 0], ['C', -0.96, 0, 0], ['H', 2.66, 0, 0], ['H', -2.66, 0, 0]], [[0, 1, 3], [0, 2, 1], [1, 3, 1]], []],
    c6h6: ['Benceno (C₆H₆)', 'Anillo plano, 120° · los seis enlaces C–C son iguales: electrones deslocalizados', hex(2.22, 0).map((p) => ['C'].concat(p)).concat(hex(3.95, 0).map((p) => ['H'].concat(p))), [0, 1, 2, 3, 4, 5].map((i) => [i, (i + 1) % 6, i % 2 ? 1 : 2]).concat([0, 1, 2, 3, 4, 5].map((i) => [i, i + 6, 1])), []],
    nacl: ['Sal común (NaCl)', 'Enlace iónico: red cristalina de iones Na⁺ y Cl⁻ que se atraen en todas direcciones', 'red', 'ionico', []],
    cu: ['Cobre (Cu)', 'Enlace metálico: cationes ordenados en un «mar» de electrones libres, que conducen la electricidad', 'red', 'metalico', []],
  };
  MODELS.push({ id: 'moleculas', name: 'Moléculas y enlaces', area: 'Química', subj: 'quimica', cam: [0, 3, 13], target: [0, 0, 0],
    credit: 'Maqueta generada por código, con el modelo de bolas y varillas. Las distancias y los ángulos de enlace son los reales (ampliados); el tamaño de los átomos es orientativo.',
    controls: [{ id: 'mol', label: 'Sustancia', type: 'select', value: 'h2o', options: Object.keys(MOL).map((k) => [k, MOL[k][0]]) },
      { id: 'pares', label: 'Pares de electrones solitarios', type: 'check', value: true }, { id: 'giro', label: 'Giro automático', type: 'check', value: true }],
    info: [
      'Los átomos casi nunca van sueltos: se unen formando moléculas o redes. Cada bola es un átomo y cada varilla, un enlace. Elige una sustancia en el desplegable y fíjate en la forma que adopta: no es casual.',
      'Hay tres tipos de enlace. En el covalente, dos no metales comparten electrones: una varilla es un enlace simple, dos uno doble y tres uno triple. En el iónico, un metal cede electrones a un no metal y los iones forman una red. En el metálico, los electrones se mueven libremente entre los átomos del metal.',
      'La geometría la explica la teoría RPECV: los pares de electrones, enlazantes o solitarios, se repelen y se sitúan lo más lejos posible. Por eso el agua es angular y no lineal. Que una molécula sea polar depende de la polaridad de sus enlaces y de su simetría: en el CO₂ los dos dipolos se anulan.'],
    parts: {
      H: P3('Hidrógeno', 'El átomo más pequeño. Forma un solo enlace.', 'Tiene un electrón y le basta con dos para completar su capa.', 'Unido a N, O o F queda con carga parcial positiva y puede formar puentes de hidrógeno.'),
      C: P3('Carbono', 'Forma cuatro enlaces: por eso puede construir cadenas y anillos.', 'Tiene cuatro electrones de valencia y los comparte para completar el octeto.', 'Según el tipo de enlaces adopta hibridación sp³ (tetraédrica), sp² (plana) o sp (lineal).'),
      O: P3('Oxígeno', 'Forma dos enlaces y le quedan dos pares de electrones sin compartir.', 'Es muy electronegativo: atrae hacia sí los electrones del enlace.', 'Sus dos pares solitarios cierran el ángulo del agua hasta 104,5° y la hacen polar.'),
      N: P3('Nitrógeno', 'Forma tres enlaces y le queda un par de electrones sin compartir.', 'Con otro nitrógeno forma un enlace triple, uno de los más fuertes que existen.', 'Su par solitario explica la forma piramidal del amoníaco y su carácter básico.'),
      Cl: P3('Cloro', 'En las moléculas forma un solo enlace; en la sal es el ion Cl⁻.', 'Le falta un electrón para completar su capa: lo comparte o lo arranca de un metal.', 'En el NaCl cada Cl⁻ está rodeado por seis Na⁺ (número de coordinación 6).'),
      Na: P3('Sodio', 'En la sal es el ion Na⁺: ha cedido un electrón al cloro.', 'Metal alcalino con un solo electrón de valencia, que pierde con facilidad.', 'La energía reticular del cristal compensa con creces la energía de ionización del sodio.'),
      Cu: P3('Cobre', 'Los átomos de cobre forman una red ordenada y comparten sus electrones externos.', 'Cada átomo cede electrones a una nube común: es el enlace metálico.', 'Cristaliza en una red cúbica centrada en las caras. La movilidad de sus electrones lo hace un conductor excelente.'),
      enlace: P3('Enlace covalente', 'Cada varilla es un par de electrones compartido entre dos átomos.', 'Simple (un par), doble (dos pares) o triple (tres pares). Cuantos más pares, más corto y más fuerte es el enlace.', 'Un enlace simple es de tipo σ; los dobles y triples añaden uno o dos enlaces π por solapamiento lateral de orbitales p.'),
      par: P3('Par solitario', 'Dos electrones del átomo que no forman enlace, pero ocupan espacio.', 'Repelen a los enlaces y determinan la forma de la molécula.', 'Repelen algo más que los pares enlazantes; por eso los ángulos pasan de 109,5° (metano) a 107° (amoníaco) y 104,5° (agua).'),
      mar: P3('Electrones libres', 'Electrones que no pertenecen a ningún átomo concreto y se mueven por todo el metal.', 'Explican que los metales conduzcan la electricidad y el calor y que se puedan deformar sin romperse.', 'En el modelo de bandas ocupan una banda de conducción parcialmente llena.'),
    },
    build({ g, p, hud }) {
      const m = MOL[p.mol], V = (a) => new THREE.Vector3(a[0], a[1], a[2]), std = (c, o) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.35, metalness: 0.05 }, o));
      const bola = (el, pos, r) => { const b = new THREE.Mesh(new THREE.SphereGeometry(r || RAD[el], 32, 24), std(COL[el])); b.position.copy(pos); b.userData.part = el; g.add(b); return b; };
      const libres = [];
      if (m[2] === 'red') {
        const n = 3, d = 1.75;
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) for (let k = 0; k < n; k++) {
          const pos = new THREE.Vector3((i - 1) * d, (j - 1) * d, (k - 1) * d);
          bola(m[3] === 'ionico' ? ((i + j + k) % 2 ? 'Cl' : 'Na') : 'Cu', pos, m[3] === 'ionico' ? ((i + j + k) % 2 ? 0.62 : 0.42) : 0.6);
        }
        if (m[3] === 'metalico') for (let i = 0; i < 46; i++) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), std(0xfde047, { emissive: 0x665500 })); e.userData.part = 'mar'; e.userData.f = [Math.random() * 6.3, Math.random() * 6.3, Math.random() * 6.3, 0.5 + Math.random()]; g.add(e); libres.push(e); }
      } else {
        const A = m[2].map((a) => bola(a[0], V(a.slice(1))));
        m[3].forEach(([i, j, orden]) => {
          const a = A[i].position, b = A[j].position, dir = b.clone().sub(a), len = dir.length(), mid = a.clone().add(b).multiplyScalar(0.5);
          const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
          let lado = new THREE.Vector3(0, 0, 1).cross(dir).normalize(); if (lado.lengthSq() < 0.01) lado = new THREE.Vector3(0, 1, 0);
          for (let k = 0; k < orden; k++) {
            const c = new THREE.Mesh(new THREE.CylinderGeometry(orden === 1 ? 0.11 : 0.075, orden === 1 ? 0.11 : 0.075, len, 14), std(0xcbd5e1));
            c.position.copy(mid).addScaledVector(lado, (k - (orden - 1) / 2) * 0.24); c.quaternion.copy(q); c.userData.part = 'enlace'; g.add(c);
          }
        });
        if (p.pares) m[4].forEach(([i, d]) => {
          const lob = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 14), std(0xfde047, { transparent: true, opacity: 0.55 })), v = V(d).normalize();
          lob.scale.set(0.8, 1.35, 0.8); lob.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v); lob.position.copy(A[i].position).addScaledVector(v, 0.78); lob.userData.part = 'par'; g.add(lob);
        });
      }
      return { update(t, dt) {
        if (p.giro) g.rotation.y += dt * 0.35;
        libres.forEach((e) => { const f = e.userData.f, s = t * f[3]; e.position.set(2.6 * Math.sin(s * 0.7 + f[0]), 2.6 * Math.sin(s * 0.9 + f[1]), 2.6 * Math.sin(s * 0.8 + f[2])); });
        hud(m[0] + ' · ' + m[1]);
      } };
    } });
})();
