// Atlas del cuerpo humano. Cada pieza del atlas BodyParts3D (ver herramientas/convertir_cuerpo.py) es una malla
// independiente que se puede seleccionar, aislar u ocultar. Las piezas se reparten en 15 sistemas, cada uno en su
// archivo data/atlas/<sistema>.js, que se carga la primera vez que se activa. El índice (data/atlas/indice.js) trae
// el nombre de todas las piezas para poder buscarlas sin cargar la geometría.
// Los nervios periféricos se trazan de forma esquemática a partir de las posiciones de los huesos, porque el atlas
// solo incluye el sistema nervioso central.
(function () {
  const A = window.ATLAS; if (!A) return;
  // [id, nombre, color base, ¿visible al abrir?]. El orden coincide con ATLAS.sys.
  const SYS = [['esqueleto', 'Esqueleto', 0xe8dfca, 1], ['musculos', 'Músculos', 0xa53c33, 0], ['corazon', 'Corazón', 0xb5352f, 1], ['sentidos', 'Órganos sensoriales', 0xf2f2f2, 1],
    ['arterias', 'Arterias', 0xd23a34, 0], ['venas', 'Venas', 0x3a62c9, 0], ['nervioso', 'Sistema nervioso', 0xf2d24b, 1], ['respiratorio', 'Sistema respiratorio', 0xe8d5cf, 1],
    ['digestivo', 'Sistema digestivo', 0xd9a38f, 1], ['urinario', 'Sistema urinario', 0x9c4a3a, 1], ['linfatico', 'Sistema linfático', 0x7a2f45, 1], ['endocrino', 'Sistema endocrino', 0xd9b08c, 1],
    ['reproductor', 'Sistema reproductor', 0xd9a38f, 1], ['superficie', 'Superficie corporal', 0xe2b79a, 1], ['conjuntivo', 'Tejido conjuntivo', 0xcfd8dc, 0]];
  const ORGANOS = ['corazon', 'sentidos', 'nervioso', 'respiratorio', 'digestivo', 'urinario', 'linfatico', 'endocrino', 'reproductor'];
  // Color propio de algunos grupos (el resto toma el de su sistema)
  const COLOR = { dientes: 0xf6f3ec, cerebro: 0xe3b5ad, cerebro_int: 0xcf9489, cerebelo: 0xd8a79c, tronco_enc: 0xe0c9a0,
    estomago: 0xe0a696, higado: 0x8a3b2b, vesicula: 0x5f8f3a, pancreas: 0xe6c27a, delgado: 0xe3a99b, grueso: 0xc98a7b,
    vejiga: 0xe6cf8a, laringe: 0xdfd3c3, lengua: 0xd4706f, glandulas: 0xd9b08c, a_pulm: 0x3a62c9, v_pulm: 0xd23a34, porta: 0x6a4fc0, coronarias: 0xe0683a };
  const CENTRO = [0, 8.7, 0];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const llano = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const P = (grp, n, b, i, a) => ({ grp, n, d: [b, i, a] });
  const H = 'Huesos', M = 'Músculos', N = 'Sistema nervioso', O = 'Órganos', C = 'Circulatorio';
  const FICHAS = {
    piel: P('Piel', 'Piel', 'La cubierta del cuerpo: protege, regula la temperatura y nos permite sentir.', 'El órgano más extenso (unos 2 m²). Tiene tres capas: epidermis, dermis e hipodermis.', 'La epidermis es un epitelio estratificado queratinizado que se renueva cada 4 semanas; la dermis aloja vasos, glándulas, folículos y mecanorreceptores.'),
    // Huesos
    craneo: P(H, 'Cráneo', 'La caja ósea que protege el cerebro y da forma a la cara.', 'Formado por 8 huesos del neurocráneo y 14 de la cara, unidos por articulaciones inmóviles llamadas suturas.', 'El foramen magno comunica la cavidad craneal con el conducto vertebral; la base tiene tres fosas (anterior, media y posterior).'),
    dientes: P(H, 'Dientes y encías', 'Cortan y trituran los alimentos.', 'Un adulto tiene 32: incisivos, caninos, premolares y molares. El esmalte es el tejido más duro del cuerpo.', 'Cada diente se ancla al alvéolo por el ligamento periodontal (gonfosis); el esmalte es hidroxiapatita en un 96 %.'),
    mandibula: P(H, 'Mandíbula', 'El único hueso de la cabeza que se mueve: permite masticar y hablar.', 'Se articula con el hueso temporal en la articulación temporomandibular.', 'En ella se insertan los músculos masticadores (masetero, temporal, pterigoideos); el nervio alveolar inferior recorre el conducto mandibular.'),
    cervical: P(H, 'Columna cervical', 'Las siete vértebras del cuello. Sostienen y mueven la cabeza.', 'C1 (atlas) permite decir «sí» y C2 (axis) decir «no». Entre vértebras hay discos que amortiguan.', 'Presentan agujeros transversos por donde ascienden las arterias vertebrales; su curvatura es una lordosis.'),
    toracica: P(H, 'Columna torácica', 'Doce vértebras en la espalda, donde se unen las costillas.', 'Cada una se articula con un par de costillas. Forman una curva hacia atrás (cifosis).', 'Sus apófisis espinosas, largas e inclinadas, limitan la extensión; las carillas costales articulan con cabeza y tubérculo de la costilla.'),
    lumbar: P(H, 'Columna lumbar', 'Cinco vértebras grandes en la zona baja de la espalda. Soportan el peso del tronco.', 'Son las más robustas. Su curvatura (lordosis) reparte la carga al estar de pie.', 'La médula termina a la altura de L1–L2; por debajo queda la cola de caballo, y por eso la punción lumbar se hace entre L3 y L5.'),
    sacro: P(H, 'Sacro', 'Hueso triangular al final de la columna que une la espalda con la pelvis.', 'Formado por cinco vértebras fusionadas. Se articula con los huesos coxales.', 'Las articulaciones sacroilíacas transmiten el peso del tronco a los miembros inferiores; por los agujeros sacros emergen las raíces del plexo sacro.'),
    costillas: P(H, 'Costillas', 'Doce pares de huesos curvos que protegen el corazón y los pulmones.', 'Siete pares verdaderos se unen al esternón, tres falsos lo hacen a través de otro cartílago y dos son flotantes.', 'Su movimiento «en asa de cubo» y «en brazo de bomba» aumenta los diámetros del tórax durante la inspiración.'),
    esternon: P(H, 'Esternón', 'Hueso plano en el centro del pecho.', 'Tiene tres partes: manubrio, cuerpo y apófisis xifoides. A él se unen las clavículas y las costillas.', 'El ángulo de Louis (unión manubrio-cuerpo) marca la segunda costilla y es referencia clínica para contar espacios intercostales.'),
    clavicula: P(H, 'Clavícula', 'Hueso alargado que une el hombro con el pecho.', 'Mantiene el brazo separado del tronco. Es uno de los huesos que más se fracturan.', 'Único puntal óseo entre miembro superior y esqueleto axial; se osifica por vía intramembranosa y es el primero en comenzar a osificarse.'),
    escapula: P(H, 'Escápula (omóplato)', 'Hueso plano y triangular en la espalda, detrás del hombro.', 'Su cavidad glenoidea recibe la cabeza del húmero. Se desliza sobre las costillas.', 'El ritmo escapulohumeral aporta 1° de rotación escapular por cada 2° glenohumerales en la abducción del brazo.'),
    humero: P(H, 'Húmero', 'El hueso del brazo, entre el hombro y el codo.', 'Su cabeza se articula con la escápula; abajo, con el radio y el cúbito.', 'El nervio radial recorre su surco espiral: las fracturas de la diáfisis pueden lesionarlo y causar «mano caída».'),
    radio: P(H, 'Radio', 'Hueso del antebrazo, del lado del pulgar.', 'Gira sobre el cúbito para voltear la palma de la mano (pronación y supinación).', 'Su extremo distal soporta el 80 % de la carga de la muñeca; la fractura de Colles es la más común tras una caída sobre la mano.'),
    cubito: P(H, 'Cúbito (ulna)', 'Hueso del antebrazo, del lado del meñique.', 'Su extremo superior, el olécranon, forma la punta del codo.', 'La escotadura troclear encaja en la tróclea humeral formando una articulación en bisagra muy estable.'),
    mano_h: P(H, 'Huesos de la mano', 'Veintisiete huesos pequeños que dan a la mano su precisión.', 'Ocho carpianos en la muñeca, cinco metacarpianos en la palma y catorce falanges en los dedos.', 'El escafoides, irrigado de distal a proximal, tiene riesgo de necrosis avascular tras una fractura.'),
    pelvis: P(H, 'Pelvis (huesos coxales)', 'El anillo óseo de la cadera: sostiene el tronco y protege órganos.', 'Cada coxal resulta de la fusión de ilion, isquion y pubis. Su cavidad, el acetábulo, aloja la cabeza del fémur.', 'La pelvis femenina es más ancha y con mayor ángulo subpúbico; ambos coxales se unen por delante en la sínfisis del pubis.'),
    femur: P(H, 'Fémur', 'El hueso del muslo: el más largo y fuerte del cuerpo.', 'Su cabeza encaja en la cadera; abajo forma la rodilla con la tibia y la rótula.', 'El cuello forma un ángulo de unos 125° con la diáfisis; su fractura es frecuente en la osteoporosis y compromete la irrigación de la cabeza.'),
    rotula: P(H, 'Rótula', 'Hueso pequeño y redondeado delante de la rodilla.', 'Protege la articulación y mejora la palanca del cuádriceps.', 'Es el mayor hueso sesamoideo; aumenta el brazo de momento del tendón cuadricipital hasta un 30 %.'),
    tibia: P(H, 'Tibia', 'El hueso grande de la pierna: la espinilla.', 'Soporta casi todo el peso del cuerpo entre la rodilla y el tobillo.', 'Su meseta se articula con los cóndilos femorales a través de los meniscos; el maléolo medial forma parte de la mortaja del tobillo.'),
    perone: P(H, 'Peroné (fíbula)', 'Hueso fino en el lado externo de la pierna.', 'Apenas soporta peso; sirve de anclaje muscular y estabiliza el tobillo.', 'Su maléolo lateral desciende más que el medial; el nervio peroneo común rodea su cuello y es vulnerable ahí.'),
    pie_h: P(H, 'Huesos del pie', 'Veintiséis huesos que soportan el peso y permiten caminar.', 'Siete tarsianos (entre ellos el calcáneo, el talón), cinco metatarsianos y catorce falanges.', 'Forman arcos longitudinal y transverso sostenidos por ligamentos y por la fascia plantar, que amortiguan y devuelven energía.'),
    // Músculos
    m_cabeza: P(M, 'Músculos de la cabeza', 'Mueven los ojos, la lengua, la garganta y la cara.', 'Incluyen los seis músculos que mueven cada ojo, los de la lengua y los de la faringe.', 'Los extraoculares están inervados por los pares III, IV y VI; los faríngeos, sobre todo por el vago.'),
    m_cuello: P(M, 'Músculos del cuello', 'Sostienen y giran la cabeza y ayudan a tragar.', 'El esternocleidomastoideo gira la cabeza al lado contrario; los escalenos elevan las primeras costillas.', 'Los músculos supra e infrahioideos fijan el hioides durante la deglución; los suboccipitales afinan la postura de la cabeza.'),
    trapecio: P(M, 'Trapecio', 'Músculo grande de la parte alta de la espalda. Sube y mueve los hombros.', 'Tiene tres partes: descendente (eleva la escápula), transversa (la retrae) y ascendente (la desciende).', 'Inervado por el nervio accesorio (XI par). Junto al serrato anterior rota la escápula para elevar el brazo por encima de 90°.'),
    deltoides: P(M, 'Deltoides', 'El músculo redondeado del hombro. Levanta el brazo.', 'Sus tres porciones flexionan, separan y extienden el brazo.', 'Inervado por el nervio axilar; inicia la abducción ayudado por el supraespinoso durante los primeros 15°.'),
    pectoral: P(M, 'Pectorales y serrato', 'Los músculos del pecho. Empujan y acercan el brazo al cuerpo.', 'El pectoral mayor aproxima y rota el brazo; el serrato anterior sujeta la escápula contra las costillas.', 'La parálisis del serrato (nervio torácico largo) produce «escápula alada». En el atlas faltan algunas porciones superficiales.'),
    dorsal: P(M, 'Músculos de la escápula', 'Músculos de la espalda que mueven el omóplato.', 'Romboides y elevador de la escápula la acercan a la columna y la elevan; el redondo mayor aproxima el brazo.', 'Los romboides están inervados por el nervio dorsal de la escápula (C5).'),
    manguito: P(M, 'Manguito rotador', 'Cuatro músculos que mantienen el hombro en su sitio.', 'Supraespinoso, infraespinoso, redondo menor y subescapular rodean la cabeza del húmero y la estabilizan.', 'El tendón del supraespinoso, con una zona poco vascularizada bajo el acromion, es el que se rompe con más frecuencia.'),
    biceps: P(M, 'Bíceps y braquial', 'Los músculos de la parte delantera del brazo. Doblan el codo.', 'El bíceps flexiona el codo y gira la palma hacia arriba; el braquial es el flexor más potente.', 'Compartimento anterior del brazo, inervado por el nervio musculocutáneo (C5–C7).'),
    triceps: P(M, 'Tríceps', 'El músculo de la parte posterior del brazo. Estira el codo.', 'Sus tres cabezas se unen en un tendón que se inserta en el olécranon.', 'Inervado por el nervio radial; la cabeza larga, al cruzar el hombro, colabora en la extensión del brazo.'),
    antebrazo: P(M, 'Músculos del antebrazo', 'Mueven la muñeca y los dedos.', 'Delante están los flexores y los pronadores; detrás, los extensores y el supinador.', 'Los flexores nacen del epicóndilo medial (nervios mediano y cubital) y los extensores del lateral (nervio radial).'),
    m_mano: P(M, 'Músculos de la mano', 'Pequeños músculos que permiten los movimientos finos de los dedos.', 'Forman las eminencias tenar (pulgar) e hipotenar (meñique), más los interóseos y lumbricales.', 'La oposición del pulgar depende del nervio mediano; el resto de la musculatura intrínseca, casi toda, del cubital.'),
    abdominales: P(M, 'Pared abdominal', 'Músculos que protegen el vientre y permiten doblar el tronco.', 'El oblicuo externo gira e inclina el tronco. La línea alba une ambos lados por el centro.', 'El atlas no incluye el recto del abdomen ni los músculos profundos: aquí solo se ven el oblicuo externo y la línea alba.'),
    diafragma: P(M, 'Diafragma', 'El músculo principal de la respiración, bajo los pulmones.', 'Al contraerse desciende y hace entrar aire; al relajarse, sube y el aire sale.', 'Inervado por el nervio frénico (C3–C5). Tiene tres hiatos: de la cava (T8), esofágico (T10) y aórtico (T12).'),
    intercostales: P(M, 'Músculos intercostales', 'Están entre las costillas y ayudan a respirar.', 'Los externos elevan las costillas al inspirar; los internos las bajan en la espiración forzada.', 'El paquete vasculonervioso intercostal discurre por el borde inferior de cada costilla.'),
    espalda: P(M, 'Erectores de la columna', 'Músculos largos a ambos lados de la columna. Mantienen la espalda recta.', 'Iliocostal, longísimo y espinoso extienden el tronco; los profundos estabilizan cada vértebra.', 'Inervados por los ramos posteriores de los nervios espinales; actúan de forma excéntrica al inclinarse hacia delante.'),
    gluteos: P(M, 'Glúteos', 'Los músculos de las nalgas. Sirven para levantarse, subir escaleras y caminar.', 'El glúteo mayor extiende la cadera; el medio y el menor la separan y estabilizan la pelvis al andar.', 'La debilidad del glúteo medio (nervio glúteo superior) produce el signo de Trendelenburg.'),
    cadera: P(M, 'Músculos de la cadera y suelo pélvico', 'Músculos profundos que doblan y giran la cadera y sostienen los órganos de la pelvis.', 'El psoas ilíaco es el principal flexor de la cadera; el piriforme y los obturadores la rotan hacia fuera.', 'El elevador del ano forma el diafragma pélvico. El nervio ciático suele pasar bajo el piriforme.'),
    cuadriceps: P(M, 'Cuádriceps y sartorio', 'Los músculos de la parte delantera del muslo. Estiran la rodilla.', 'Cuatro cabezas (recto femoral y tres vastos) convergen en la rótula. El sartorio es el músculo más largo.', 'Inervados por el nervio femoral (L2–L4); el recto femoral, biarticular, también flexiona la cadera.'),
    isquio: P(M, 'Isquiotibiales', 'Los músculos de la parte posterior del muslo. Doblan la rodilla.', 'Bíceps femoral, semitendinoso y semimembranoso flexionan la rodilla y extienden la cadera.', 'Biarticulares e inervados por el ciático; sus desgarros son típicos de la carrera de velocidad.'),
    aductores: P(M, 'Aductores', 'Los músculos de la cara interna del muslo. Juntan las piernas.', 'Aductor largo, corto y mayor, pectíneo y grácil aproximan el muslo a la línea media.', 'Inervados principalmente por el nervio obturador (L2–L4).'),
    pantorrilla: P(M, 'Pantorrilla', 'Los músculos de la parte posterior de la pierna. Permiten ponerse de puntillas.', 'Gemelos y sóleo se unen en el tendón de Aquiles, el más fuerte del cuerpo.', 'El sóleo actúa como «bomba venosa» que impulsa la sangre hacia el corazón; todo el compartimento depende del nervio tibial.'),
    tibial: P(M, 'Tibial anterior y peroneos', 'Músculos de la parte delantera y externa de la pierna. Levantan la punta del pie.', 'El tibial anterior flexiona dorsalmente el tobillo; los peroneos giran el pie hacia fuera.', 'La lesión del nervio peroneo común produce «pie caído» y marcha en estepaje.'),
    m_pie: P(M, 'Músculos del pie', 'Pequeños músculos que sostienen el arco del pie y mueven los dedos.', 'Se disponen en cuatro capas en la planta, más los extensores cortos en el dorso.', 'Inervados por los nervios plantares medial y lateral, ramas del tibial.'),
    // Sistema nervioso
    cerebro: P(N, 'Corteza cerebral', 'La parte más grande del encéfalo: pensamos, sentimos y decidimos con ella.', 'Dividida en lóbulos frontal, parietal, temporal y occipital. Sus pliegues (giros) aumentan la superficie.', 'El giro precentral aloja la corteza motora primaria y el poscentral la somatosensorial, ambas con organización somatotópica.'),
    cerebro_int: P(N, 'Estructuras internas del cerebro', 'Zonas profundas que regulan emociones, memoria y funciones automáticas.', 'Tálamo (estación de relevo), hipotálamo (control hormonal), hipocampo (memoria) y ganglios basales (movimiento).', 'El cuerpo calloso conecta los hemisferios con unos 200 millones de axones; los ventrículos contienen líquido cefalorraquídeo.'),
    cerebelo: P(N, 'Cerebelo', 'Coordina el movimiento y el equilibrio.', 'Ajusta la precisión y la fuerza de los movimientos comparando la orden con lo que realmente ocurre.', 'Contiene más de la mitad de las neuronas del encéfalo; sus lesiones producen ataxia ipsilateral.'),
    tronco_enc: P(N, 'Tronco del encéfalo', 'Une el cerebro con la médula y controla la respiración y el latido.', 'Formado por mesencéfalo, protuberancia y bulbo raquídeo. De él salen casi todos los nervios craneales.', 'Alberga la formación reticular, que regula el nivel de conciencia, y los centros cardiorrespiratorios bulbares.'),
    craneales: P(N, 'Nervios craneales (ojo)', 'Nervios que salen directamente del encéfalo. Aquí se ven los del ojo.', 'El nervio óptico (II par) lleva la visión; el oculomotor (III) mueve el ojo; la rama oftálmica del trigémino (V) da sensibilidad.', 'En el quiasma óptico se cruzan las fibras nasales de cada retina. El atlas solo incluye los nervios de la órbita.'),
    medula: P(N, 'Médula espinal', 'El cable principal que comunica el cerebro con el resto del cuerpo.', 'Recorre el interior de la columna hasta L1–L2. De ella salen 31 pares de nervios espinales.', 'Sustancia gris central en «H» con astas anteriores motoras y posteriores sensitivas. Trazado esquemático: el atlas no la incluye.'),
    n_brazo: P(N, 'Plexo braquial y nervios del brazo', 'Los nervios que llevan órdenes y sensibilidad al brazo y la mano.', 'Nacen de las raíces C5–T1. Sus ramas principales son los nervios mediano, cubital y radial.', 'El mediano atraviesa el túnel carpiano; el cubital pasa tras el epicóndilo medial; el radial rodea el húmero. Trazado esquemático.'),
    n_femoral: P(N, 'Nervio femoral', 'Nervio de la parte delantera del muslo.', 'Procede del plexo lumbar (L2–L4) e inerva el cuádriceps, que estira la rodilla.', 'Su rama safena da sensibilidad a la cara medial de la pierna. Trazado esquemático.'),
    n_ciatico: P(N, 'Nervio ciático', 'El nervio más largo y grueso del cuerpo: baja por detrás del muslo.', 'Nace del plexo sacro (L4–S3). Tras la rodilla se divide en nervio tibial y peroneo común.', 'La compresión de sus raíces por una hernia discal L4–L5 o L5–S1 causa la ciática. Trazado esquemático.'),
    // Órganos
    corazon: P(O, 'Corazón', 'La bomba que impulsa la sangre.', 'Cuatro cavidades y cuatro válvulas que obligan a la sangre a circular en un solo sentido.', 'El atlas representa las cavidades, las válvulas y los músculos papilares, no la pared muscular: por eso se ve su «molde» interior.'),
    bronquios: P(O, 'Tráquea y árbol bronquial', 'Los tubos por los que el aire llega a los pulmones.', 'La tráquea se divide en dos bronquios principales, que se ramifican en lobulares y segmentarios.', 'Hay unas 23 generaciones de ramificación hasta los alvéolos. El atlas no incluye el tejido pulmonar; el árbol dibuja su forma.'),
    esofago: P(O, 'Esófago', 'El tubo que lleva la comida de la boca al estómago.', 'Mide unos 25 cm y empuja el alimento con ondas de contracción (peristaltismo).', 'Su tercio superior es músculo estriado y el inferior liso; el esfínter inferior evita el reflujo gástrico.'),
    estomago: P(O, 'Estómago', 'Bolsa muscular donde empieza la digestión.', 'Mezcla el alimento con jugo gástrico, muy ácido, que contiene pepsina para digerir proteínas.', 'Las células parietales secretan HCl y factor intrínseco; las principales, pepsinógeno; el moco protege la mucosa.'),
    higado: P(O, 'Hígado', 'El laboratorio del cuerpo: limpia la sangre y fabrica bilis.', 'El órgano interno más grande. Almacena glucógeno, sintetiza proteínas y elimina toxinas.', 'Se divide en ocho segmentos funcionales (Couinaud), cada uno con su rama portal, arterial y biliar: son los que se ven aquí.'),
    vesicula: P(O, 'Vesícula y vías biliares', 'Almacenan la bilis y la llevan al intestino.', 'La bilis emulsiona las grasas para que puedan digerirse.', 'El conducto cístico se une al hepático común para formar el colédoco, que desemboca en el duodeno por la ampolla de Vater.'),
    pancreas: P(O, 'Páncreas', 'Glándula que fabrica jugos digestivos e insulina.', 'Su parte exocrina secreta enzimas al intestino; la endocrina, insulina y glucagón a la sangre.', 'Los islotes de Langerhans son solo el 1–2 % de su masa; las células β secretan insulina y las α, glucagón.'),
    bazo: P(O, 'Bazo', 'Filtra la sangre y ayuda a defendernos de infecciones.', 'Elimina glóbulos rojos viejos y almacena células de defensa.', 'La pulpa roja filtra eritrocitos; la blanca es tejido linfoide organizado alrededor de las arteriolas.'),
    delgado: P(O, 'Intestino delgado', 'Tubo largo y plegado donde se absorben los nutrientes.', 'Mide unos 6 m y tiene tres tramos: duodeno, yeyuno e íleon.', 'Pliegues, vellosidades y microvellosidades multiplican su superficie hasta unos 30 m² o más.'),
    grueso: P(O, 'Intestino grueso', 'Absorbe agua y forma las heces.', 'Comprende ciego, colon (ascendente, transverso, descendente y sigmoide) y recto.', 'Alberga la mayor parte de la microbiota, que fermenta la fibra y produce ácidos grasos de cadena corta.'),
    rinones: P(O, 'Riñones y uréteres', 'Filtran la sangre y fabrican la orina.', 'Cada riñón tiene alrededor de un millón de nefronas. Los uréteres llevan la orina a la vejiga.', 'Filtran unos 180 L de plasma al día y reabsorben el 99 %; las glándulas suprarrenales, encima, secretan cortisol y adrenalina.'),
    vejiga: P(O, 'Vejiga y uretra', 'Almacena la orina hasta que se expulsa.', 'Puede contener unos 400–500 mL. Su pared es un músculo llamado detrusor.', 'La micción coordina la contracción parasimpática del detrusor con la relajación de los esfínteres.'),
    reproductor: P(O, 'Aparato reproductor masculino', 'Los órganos que producen y transportan los espermatozoides.', 'Testículos, epidídimo, conductos deferentes, vesículas seminales, próstata y pene. El atlas es de un varón.', 'La espermatogénesis dura unos 64 días y requiere una temperatura 2 °C inferior a la corporal.'),
    laringe: P(O, 'Laringe e hioides', 'El órgano de la voz, en la parte delantera del cuello.', 'Sus cartílagos sostienen las cuerdas vocales; la epiglotis cierra la vía aérea al tragar.', 'El cartílago cricoides es el único anillo completo de la vía aérea; el hioides no se articula con ningún otro hueso.'),
    lengua: P(O, 'Lengua', 'Músculo que saborea, mueve la comida y articula las palabras.', 'Su superficie tiene papilas con botones gustativos.', 'Motricidad por el hipogloso (XII); gusto de los dos tercios anteriores por el facial (VII) y del posterior por el glosofaríngeo (IX).'),
    glandulas: P(O, 'Timo y glándulas salivales', 'Glándulas del cuello y del pecho.', 'El timo madura los linfocitos T en la infancia; las glándulas salivales producen saliva.', 'El timo involuciona tras la pubertad y se sustituye por tejido adiposo.'),
    ojo: P(O, 'Ojo y aparato lagrimal', 'El órgano de la vista.', 'La córnea y el cristalino enfocan la luz sobre la retina; el iris regula cuánta entra.', 'Los conos (visión en color, fóvea) y los bastones (visión nocturna) transducen la luz; las lágrimas drenan por el conducto nasolagrimal.'),
    // Circulatorio
    aorta: P(C, 'Aorta', 'La arteria más grande: sale del corazón y reparte la sangre oxigenada.', 'Tiene porción ascendente, cayado y descendente (torácica y abdominal).', 'Del cayado nacen el tronco braquiocefálico, la carótida común izquierda y la subclavia izquierda.'),
    cavas: P(C, 'Venas cavas', 'Las dos grandes venas que devuelven la sangre al corazón.', 'La cava superior recoge la sangre de cabeza y brazos; la inferior, la del resto del cuerpo.', 'Desembocan en la aurícula derecha; la presión venosa central refleja la precarga del ventrículo derecho.'),
    coronarias: P(C, 'Vasos coronarios', 'Las arterias y venas que alimentan al propio corazón.', 'Las arterias coronarias derecha e izquierda nacen de la aorta. Su obstrucción causa el infarto.', 'El miocardio se perfunde sobre todo en diástole; las venas drenan al seno coronario.'),
    a_pulm: P(C, 'Arterias pulmonares', 'Llevan la sangre sin oxígeno del corazón a los pulmones.', 'Son las únicas arterias con sangre desoxigenada. Se ramifican junto a los bronquios.', 'Circuito de baja presión (unos 25/10 mmHg) y baja resistencia.'),
    v_pulm: P(C, 'Venas pulmonares', 'Traen la sangre recién oxigenada de los pulmones al corazón.', 'Cuatro venas principales desembocan en la aurícula izquierda.', 'Sus desembocaduras son el origen habitual de los focos de la fibrilación auricular.'),
    porta: P(C, 'Sistema porta y venas hepáticas', 'Llevan al hígado la sangre que viene del intestino.', 'La vena porta recoge la sangre rica en nutrientes del tubo digestivo para que el hígado la procese.', 'Es un sistema entre dos lechos capilares; la hipertensión portal abre derivaciones portosistémicas (varices esofágicas).'),
    a_cabeza: P(C, 'Arterias de la cabeza y el cuello', 'Llevan sangre al cerebro y a la cara.', 'Las carótidas y las arterias vertebrales irrigan el encéfalo.', 'Ambos sistemas se comunican en el polígono de Willis, que ofrece circulación colateral.'),
    a_brazo: P(C, 'Arterias del brazo', 'Llevan sangre al brazo y a la mano.', 'La subclavia se continúa como axilar y braquial, que se divide en radial y cubital.', 'El pulso se toma sobre la arteria radial; los arcos palmares conectan radial y cubital.'),
    a_tronco: P(C, 'Arterias del tronco', 'Ramas de la aorta que irrigan los órganos del tórax y el abdomen.', 'Tronco celíaco, mesentéricas y renales, entre otras.', 'Los riñones reciben alrededor del 20–25 % del gasto cardíaco por las arterias renales.'),
    a_pierna: P(C, 'Arterias de la pierna', 'Llevan sangre a la pierna y al pie.', 'La ilíaca externa se continúa como femoral y poplítea, que se divide en tibiales.', 'El pulso pedio (arteria dorsal del pie) sirve para valorar la perfusión distal.'),
    v_cabeza: P(C, 'Venas de la cabeza y el cuello', 'Devuelven la sangre de la cabeza al corazón.', 'Las yugulares internas son las venas principales del cuello.', 'Los senos venosos durales drenan el encéfalo hacia las yugulares internas.'),
    v_brazo: P(C, 'Venas del brazo', 'Devuelven la sangre del brazo.', 'Las superficiales (cefálica, basílica, mediana del codo) son las que se usan para extraer sangre.', 'Las venas profundas acompañan a las arterias, normalmente en pares.'),
    v_tronco: P(C, 'Venas del tronco', 'Recogen la sangre de la pared y los órganos del tronco.', 'El sistema ácigos drena la pared torácica; las ilíacas se unen para formar la cava inferior.', 'El sistema ácigos constituye una vía colateral entre ambas cavas.'),
    v_pierna: P(C, 'Venas de la pierna', 'Devuelven la sangre de la pierna contra la gravedad.', 'Sus válvulas impiden que la sangre retroceda. La safena mayor es la vena más larga del cuerpo.', 'El fallo valvular causa varices; la trombosis venosa profunda puede originar una embolia pulmonar.'),
  };

  // Cada pieza toma el nombre del atlas y la explicación del grupo al que pertenece.
  const parts = {}, cuenta = SYS.map(() => 0);
  A.p.forEach((p, i) => { const f = FICHAS[p[3]]; parts['p' + i] = { n: p[0], d: f ? f.d : ['', '', ''] }; cuenta[p[2]]++; });
  ['medula', 'n_brazo', 'n_femoral', 'n_ciatico'].forEach((k) => { parts[k] = FICHAS[k]; });
  const busca = A.p.map((p) => llano(p[0] + ' ' + p[1] + ' ' + (FICHAS[p[3]] ? FICHAS[p[3]].n : ''))); // nombre, nombre original y grupo

  function decode(sid) {
    const d = window.ATLAS_GEO[sid]; if (d.cache) return d.cache; // ya descodificado en una visita anterior
    const bin = atob(d.b64), buf = new Uint8Array(bin.length), out = [];
    for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    d.b64 = '';
    let off = 0;
    d.parts.forEach(([id, nv, ni, w]) => {
      const q = new Uint16Array(buf.buffer.slice(off, off + nv * 6)); off += nv * 6;
      const idx = w === 2 ? new Uint16Array(buf.buffer.slice(off, off + ni * 2)) : new Uint32Array(buf.buffer.slice(off, off + ni * 4)); off += ni * w;
      const pos = new Float32Array(nv * 3);
      for (let j = 0; j < pos.length; j++) { const a = j % 3; pos[j] = d.lo[a] + q[j] / 65535 * (d.hi[a] - d.lo[a]); }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setIndex(new THREE.BufferAttribute(idx, 1)); geo.computeVertexNormals(); geo.computeBoundingSphere();
      out.push({ id, geo });
    });
    d.cache = out; return out;
  }
  function material(sid, base, k) {
    if (sid === 'superficie') return new THREE.MeshStandardMaterial({ color: base, roughness: 0.7, transparent: true, opacity: 0.2, depthWrite: false });
    const c = sid === 'conjuntivo' ? base : COLOR[k] || base;
    return new THREE.MeshStandardMaterial({ color: c, roughness: sid === 'esqueleto' ? 0.75 : 0.5, metalness: 0.02 });
  }

  // Nervios periféricos y médula: tubos trazados a partir de las posiciones reales de los huesos del atlas.
  function nerves(g) {
    const R = window.BODY_REF; if (!R) return;
    const mat = () => new THREE.MeshStandardMaterial({ color: 0xf2d24b, roughness: 0.5 });
    const tube = (pts, r, part) => { const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]))), Math.max(12, pts.length * 10), r, 8, false), mat()); m.userData.part = part; g.add(m); };
    const both = (pts, r, part) => { tube(pts, r, part); tube(pts.map((p) => [-p[0], p[1], p[2]]), r, part); };
    const mid = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t], add = (a, d) => [a[0] + d[0], a[1] + d[1], a[2] + d[2]];
    // Conducto vertebral: por detrás del cuerpo de cada vértebra.
    const canal = R.vertebras.map((v, i) => [0, (v[1] + v[4]) / 2, v[5] - (i < 7 ? 0.25 : i < 19 ? 0.36 : 0.45)]);
    canal[0][2] = (R.medula[2] + R.medula[5]) / 2;
    const top = [0, R.medula[4], (R.medula[2] + R.medula[5]) / 2];
    tube([top].concat(canal.slice(0, 20)), 0.055, 'medula');
    canal.forEach((c, i) => { if (i > 1) both([c, [0.22, c[1] - 0.05, c[2] + 0.02], [0.42, c[1] - 0.14, c[2] + 0.05]], 0.016, 'medula'); });
    [-0.05, 0, 0.05].forEach((dx) => tube([canal[19], [dx, canal[22][1], canal[22][2]], [dx * 2, R.sacro[4] - 0.3, R.sacro[2] + 0.45], [dx * 3, R.sacro[1] + 0.5, R.sacro[2] + 0.3]], 0.018, 'medula')); // cola de caballo
    // Plexo braquial y nervios del brazo
    const hu = R.humero, cl = R.clavicula, S = [hu[0] + 0.3, hu[4] - 0.35, (hu[2] + hu[5]) / 2], E = [hu[3] - 0.3, hu[1] + 0.12, (hu[2] + hu[5]) / 2 - 0.05];
    const W = [(R.radio[0] + R.cubito[3]) / 2, R.radio[1] + 0.05, R.radio[5] - 0.18], Hn = [(R.mano[0] + R.mano[3]) / 2, (R.mano[1] + R.mano[4]) / 2 + 0.2, (R.mano[2] + R.mano[5]) / 2];
    const A = [(cl[0] + cl[3]) / 2, cl[1] - 0.12, (cl[2] + cl[5]) / 2 - 0.3], B = [S[0] - 0.12, S[1] - 0.25, S[2] + 0.02];
    [4, 5, 6, 7, 8].forEach((i) => both([canal[i], [0.3, canal[i][1] - 0.1, canal[i][2] + 0.05], A, B], 0.022, 'n_brazo'));
    both([B, add(mid(S, E, 0.5), [-0.2, 0, 0.1]), add(E, [-0.08, 0, 0.2]), add(mid(E, W, 0.5), [0, 0, 0.1]), add(W, [0, 0, 0.08]), Hn], 0.035, 'n_brazo');           // mediano
    both([B, add(mid(S, E, 0.6), [-0.25, 0, -0.05]), add(E, [-0.26, 0, -0.16]), add(mid(E, W, 0.5), [-0.22, 0, -0.05]), add(W, [-0.22, 0, 0]), add(Hn, [-0.2, -0.15, 0])], 0.03, 'n_brazo'); // cubital
    both([B, add(mid(S, E, 0.45), [0, 0, -0.3]), add(mid(S, E, 0.8), [0.24, 0, -0.1]), add(E, [0.2, 0, 0.1]), add(mid(E, W, 0.6), [0.22, 0, 0.12]), add(W, [0.2, 0, 0.1])], 0.03, 'n_brazo');   // radial
    // Nervio femoral y nervio ciático
    const fe = R.femur, ti = R.tibia, knee = [(ti[0] + ti[3]) / 2, ti[4] + 0.3, (ti[2] + ti[5]) / 2], hip = [fe[3] - 0.5, fe[4] - 0.3, (fe[2] + fe[5]) / 2];
    both([canal[21], [0.35, canal[23][1], canal[23][2] + 0.3], [hip[0] - 0.25, hip[1] + 0.2, hip[2] + 0.45], add(mid(hip, knee, 0.4), [-0.05, 0, 0.5]), add(mid(hip, knee, 0.8), [-0.05, 0, 0.45])], 0.035, 'n_femoral');
    const pop = add(knee, [0, 0.1, -0.5]);
    both([[0.15, R.sacro[4] - 0.5, R.sacro[2] + 0.5], [0.5, R.sacro[1] + 0.5, R.sacro[2] + 0.25], [hip[0] - 0.1, hip[1] - 0.5, hip[2] - 0.45], add(mid(hip, knee, 0.5), [0, 0, -0.5]), pop], 0.055, 'n_ciatico');
    both([pop, [knee[0] - 0.05, ti[1] + 2.6, knee[2] - 0.5], [knee[0] - 0.15, ti[1] + 0.9, knee[2] - 0.45], [R.calcaneo[0] + 0.2, R.calcaneo[4] + 0.1, R.calcaneo[5] + 0.1]], 0.035, 'n_ciatico'); // tibial
    both([pop, [R.perone[3] + 0.02, R.perone[4] - 0.25, (R.perone[2] + R.perone[5]) / 2], [R.perone[3] - 0.1, ti[1] + 2.2, knee[2] + 0.2], [knee[0] + 0.1, ti[1] + 0.3, knee[2] + 0.4], [(R.pie[0] + R.pie[3]) / 2, R.pie[4] + 0.05, (R.pie[2] + R.pie[5]) / 2]], 0.03, 'n_ciatico'); // peroneo
  }

  const model = {
    id: 'cuerpo', name: 'Atlas del cuerpo humano', area: 'Cuerpo humano', subj: 'biologia', cam: [14, 10.2, 19], target: CENTRO, noChips: true,
    credit: 'Modelos 3D: BodyParts3D, © The Database Center for Life Science, licencia CC BY-SA 2.1 Japan. Simplificados para esta app; los nombres en español se han traducido automáticamente del original. Nervios periféricos y médula: trazado esquemático propio.',
    info: [
      'El cuerpo humano completo, pieza a pieza, a partir de un atlas anatómico real. Activa o quita sistemas, gira el modelo y pasa el ratón por cualquier zona: al tocarla verás cómo se llama y para qué sirve. Con «Separar» puedes despiezarlo.',
      'Cada sistema agrupa las estructuras que colaboran en una función: el esqueleto sostiene, los músculos mueven, el sistema nervioso coordina, y arterias y venas reparten la sangre. Usa «solo» para ver un sistema aislado y el buscador para encontrar cualquier estructura por su nombre.',
      'Modelo de un varón adulto del atlas BodyParts3D, con ' + A.p.length + ' estructuras independientes. Faltan en el atlas la pared del corazón, el tejido pulmonar, el recto del abdomen y los nervios periféricos (estos últimos se dibujan de forma esquemática). Cada pieza muestra la explicación de su región o grupo funcional.'],
    parts,
    build({ g, hud, repaint, api }) {
      const on = {}, state = {}, grupos = {}, mesh = {}, esquema = [], ocultas = new Set();
      let alive = true, aislada = null, sep = 0, pendiente = null;
      g.userData.dispose = () => { alive = false; };
      SYS.forEach(([sid, , , def]) => { on[sid] = !!def; const lg = new THREE.Group(); lg.visible = false; g.add(lg); grupos[sid] = lg; });

      function fill(sid) {
        const base = SYS.find((s) => s[0] === sid)[2];
        decode(sid).forEach(({ id, geo }) => {
          const m = new THREE.Mesh(geo, material(sid, base, A.p[id][3])); m.userData.part = 'p' + id; m.userData.id = id;
          if (sid === 'superficie') { m.userData.shell = true; m.renderOrder = 5; }
          grupos[sid].add(m); mesh[id] = m;
        });
        if (sid === 'nervioso') { const n0 = grupos[sid].children.length; nerves(grupos[sid]); grupos[sid].children.slice(n0).forEach((m) => esquema.push(m)); }
        state[sid] = 'ok'; aplicar(); repaint();
        if (pendiente !== null && mesh[pendiente]) { const id = pendiente; pendiente = null; centrar(id); }
      }
      function load(sid) {
        if (state[sid]) return; state[sid] = 'load'; status();
        if (window.ATLAS_GEO && window.ATLAS_GEO[sid]) { setTimeout(() => alive && fill(sid), 30); return; }
        (function attempt(n) { // reintenta: los archivos son grandes y una descarga puede cortarse
          const s = document.createElement('script'); s.src = 'data/atlas/' + sid + '.js' + (n ? '?r=' + n : '');
          s.onload = () => { if (alive) fill(sid); };
          s.onerror = () => { s.remove(); if (n < 3) setTimeout(() => attempt(n + 1), 600); else { state[sid] = 'err'; status(); } };
          document.head.appendChild(s);
        })(0);
      }
      function status() {
        const de = (st) => SYS.filter(([sid]) => state[sid] === st).map((s) => s[1].toLowerCase());
        const ld = de('load'), er = de('err');
        hud(er.length ? 'No se pudo cargar: ' + er.join(', ') : ld.length ? 'Cargando ' + ld.join(', ') + '…' : '');
      }
      // Aplica visibilidad (sistemas, piezas ocultas, pieza aislada) y la separación del despiece
      function aplicar() {
        SYS.forEach(([sid]) => { grupos[sid].visible = on[sid]; if (on[sid]) load(sid); });
        if (sep > 0.01 && SYS.some(([sid]) => on[sid] && sid !== 'superficie')) grupos.superficie.visible = false; // la piel no se despieza: se retira al separar
        Object.keys(mesh).forEach((k) => {
          const m = mesh[k], id = +k; m.visible = !ocultas.has(id) && (aislada === null || aislada === id);
          const c = m.geometry.boundingSphere.center, f = sep * 1.7;
          m.position.set((c.x - CENTRO[0]) * f, (c.y - CENTRO[1]) * f, (c.z - CENTRO[2]) * f);
        });
        esquema.forEach((m) => { m.visible = sep < 0.01 && aislada === null; });
        status(); pinta();
      }
      function centrar(id) {
        const m = mesh[id]; if (!m) { pendiente = id; return; }
        const bs = m.geometry.boundingSphere, t = bs.center.clone().add(m.position), dir = api.camera.position.clone().sub(api.controls.target).normalize();
        api.controls.target.copy(t); api.camera.position.copy(t).addScaledVector(dir, Math.min(16, Math.max(2.2, bs.radius * 6)));
      }
      function vista(v) {
        const P = { tc: [14, 10.2, 19], f: [0, 8.7, 25], s: [25, 8.7, 0], b: [0, 8.7, -25] }[v];
        api.controls.target.set(CENTRO[0], CENTRO[1], CENTRO[2]); api.camera.position.set(P[0], P[1], P[2]);
      }
      function elegir(id) { // desde el buscador: activa su sistema, la selecciona y la enfoca
        const sid = SYS[A.p[id][2]][0];
        if (aislada !== null && aislada !== id) aislada = null;
        ocultas.delete(id); on[sid] = true; aplicar(); api.select('p' + id); centrar(id);
      }

      // ----- Panel de controles -----
      let ui = null;
      function pinta() {
        if (!ui) return;
        SYS.forEach(([sid]) => { ui.querySelector('input[data-s="' + sid + '"]').checked = on[sid]; });
        let n = 0; SYS.forEach(([sid], i) => { if (on[sid]) n += cuenta[i]; });
        ocultas.forEach((id) => { if (on[SYS[A.p[id][2]][0]]) n--; });
        ui.querySelector('#an').textContent = aislada !== null ? 'Pieza aislada: ' + A.p[aislada][0] : n + ' piezas visibles' + (ocultas.size ? ' · ' + ocultas.size + ' ocultas' : '');
        ui.querySelector('#amostrar').hidden = aislada === null && !ocultas.size;
      }
      function mount() {
        ui = document.createElement('div'); ui.className = 'atl';
        ui.innerHTML = `<div class="atl-row"><b>Vista</b><button class="btn ghost small" data-v="tc">¾</button><button class="btn ghost small" data-v="f">Frontal</button>
            <button class="btn ghost small" data-v="s">Lateral</button><button class="btn ghost small" data-v="b">Posterior</button>
            <label class="atl-exp">Separar <input type="range" id="asep" min="0" max="100" value="0" aria-label="Separar la anatomía"><output id="asepo">0 %</output></label></div>
          <div class="atl-row"><b>Sistemas</b><button class="btn ghost small" data-p="todos">Todos</button><button class="btn ghost small" data-p="esqueleto">Esqueleto</button>
            <button class="btn ghost small" data-p="organos">Órganos</button><button class="btn ghost small" data-p="nada">Ninguno</button>
            <span class="muted" id="an" style="font-size:.85rem;margin-left:6px"></span><button class="btn ghost small" id="amostrar" hidden>Mostrar todo</button></div>
          <div class="atl-sys">${SYS.map(([sid, name, col], i) => `<div><label><input type="checkbox" data-s="${sid}"><i style="background:#${col.toString(16).padStart(6, '0')}"></i>${name}<small>${cuenta[i]}</small></label>
            <button data-solo="${sid}" title="Mostrar solo ${name}">solo</button></div>`).join('')}</div>`;
        api.ctrls.appendChild(ui);
        ui.querySelectorAll('[data-v]').forEach((b) => { b.onclick = () => vista(b.dataset.v); });
        ui.querySelectorAll('input[data-s]').forEach((c) => { c.onchange = () => { on[c.dataset.s] = c.checked; aplicar(); repaint(); }; });
        ui.querySelectorAll('[data-solo]').forEach((b) => { b.onclick = () => { SYS.forEach(([sid]) => { on[sid] = sid === b.dataset.solo; }); aplicar(); repaint(); }; });
        ui.querySelectorAll('[data-p]').forEach((b) => { b.onclick = () => {
          const p = b.dataset.p; SYS.forEach(([sid]) => { on[sid] = p === 'todos' || (p === 'esqueleto' && sid === 'esqueleto') || (p === 'organos' && ORGANOS.indexOf(sid) >= 0); });
          aplicar(); repaint();
        }; });
        ui.querySelector('#asep').oninput = (e) => { sep = e.target.value / 100; ui.querySelector('#asepo').textContent = e.target.value + ' %'; aplicar(); };
        ui.querySelector('#amostrar').onclick = () => { aislada = null; ocultas.clear(); aplicar(); api.select(api.sel()); };
        // Buscador
        const side = api.side;
        side.innerHTML = '<h4>Buscar una estructura</h4><input type="search" id="aq" placeholder="Fémur, aorta, bíceps…" aria-label="Buscar una estructura"><div class="atl-res" id="ares"></div>';
        const res = side.querySelector('#ares');
        side.querySelector('#aq').oninput = (e) => {
          const q = llano(e.target.value.trim()).split(/\s+/).filter(Boolean); let h = '', n = 0;
          if (q.length && q.join('').length > 1) for (let i = 0; i < busca.length && n < 40; i++) if (q.every((w) => busca[i].indexOf(w) >= 0)) { h += `<button data-i="${i}">${esc(A.p[i][0])} <small>· ${SYS[A.p[i][2]][1]}</small></button>`; n++; }
          res.innerHTML = q.length && !n && q.join('').length > 1 ? '<span class="muted" style="font-size:.86rem;padding:4px 8px">Sin resultados.</span>' : h;
          res.querySelectorAll('button').forEach((b) => { b.onclick = () => elegir(+b.dataset.i); });
        };
        pinta();
      }
      // Datos y acciones de la pieza seleccionada, bajo su explicación
      function partInfo(sel, box) {
        if (!sel || sel[0] !== 'p' || !A.p[+sel.slice(1)]) return;
        const id = +sel.slice(1), p = A.p[id], f = FICHAS[p[3]];
        const d = document.createElement('div');
        d.innerHTML = `<span class="atl-meta">${SYS[p[2]][1]}${f ? ' · ' + esc(f.n) : ''}<br>Nombre en el atlas: ${esc(p[1])}</span>
          <div class="atl-row"><button class="btn ghost small" data-a="centrar">Centrar</button><button class="btn ghost small" data-a="aislar">${aislada === id ? 'Mostrar todo' : 'Aislar'}</button>
          <button class="btn ghost small" data-a="ocultar">Ocultar</button></div>`;
        box.appendChild(d);
        d.querySelector('[data-a="centrar"]').onclick = () => centrar(id);
        d.querySelector('[data-a="aislar"]').onclick = () => { aislada = aislada === id ? null : id; aplicar(); api.select(sel); if (aislada !== null) centrar(id); };
        d.querySelector('[data-a="ocultar"]').onclick = () => { ocultas.add(id); if (aislada === id) aislada = null; aplicar(); api.select(null); };
      }
      aplicar();
      const pz = window.Buscar && Buscar.destino('pieza:'); // se llega desde el buscador con una pieza concreta
      if (pz !== null && pz !== undefined && A.p[+pz]) setTimeout(() => alive && elegir(+pz), 300);
      return { mount, partInfo, pickables: () => SYS.map(([sid]) => grupos[sid]).filter((x) => x.visible) };
    },
  };
  const at = MODELS.findIndex((m) => m.area === 'Cuerpo humano');
  MODELS.splice(at < 0 ? MODELS.length : at, 0, model);
})();
