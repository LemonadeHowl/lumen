// Índice de temas de Biología. Cada tema: apuntes (notes), conceptos clave que pasan a flashcards (k),
// maqueta 3D relacionada (m) y una expresión (match) que reparte las preguntas del banco entre los temas
// (pr = prioridad de reparto: los temas con pr se comprueban antes; el último tema recoge el resto).
// Formato de los apuntes: "## " título · "- " lista · "$ " fórmula · "> " nota o ejemplo · "| " línea de código · **negrita**
window.TOPICS = window.TOPICS || {};
TOPICS.biologia = [
  { id: 'celula', name: 'La célula', sum: 'Estructura, orgánulos, membrana y tipos de célula.', m: 'celula',
    match: /célula|orgánulo|seres vivos|procariota|membrana plasmática|ósmosis/i,
    k: [['Teoría celular', 'Todo ser vivo está formado por células; la célula es la unidad de vida; toda célula procede de otra.'], ['Procariota', 'Célula sin núcleo: el ADN está libre en el citoplasma (bacterias y arqueas).'], ['Eucariota', 'Célula con núcleo y orgánulos membranosos (animales, plantas, hongos, protistas).'], ['Mosaico fluido', 'Modelo de la membrana: bicapa de fosfolípidos en la que se desplazan proteínas.'], ['Difusión', 'Paso de moléculas de donde hay más a donde hay menos, sin gasto de energía.'], ['Ósmosis', 'Difusión del agua a través de una membrana semipermeable hacia donde hay más soluto.'], ['Transporte activo', 'Paso de sustancias contra su gradiente, con gasto de ATP (p. ej., la bomba de sodio-potasio).'], ['Ribosoma', 'Orgánulo que fabrica proteínas leyendo el ARN mensajero.'], ['Aparato de Golgi', 'Modifica, empaqueta y distribuye proteínas y lípidos.'], ['Lisosoma', 'Vesícula con enzimas digestivas que recicla materiales.'], ['Citoesqueleto', 'Red de filamentos (microtúbulos, actina, intermedios) que da forma y permite el movimiento.'], ['Endosimbiosis', 'Origen de mitocondrias y cloroplastos a partir de bacterias engullidas por una célula ancestral.']],
    notes: `
## Qué es una célula
La célula es la estructura más pequeña capaz de realizar por sí misma las tres funciones vitales: **nutrición** (obtener materia y energía), **relación** (responder a estímulos) y **reproducción**. Por debajo de ella hay moléculas y orgánulos, pero ninguno está vivo por separado.

Robert Hooke observó en 1665 las celdillas del corcho y les dio nombre. Dos siglos después, Schleiden, Schwann y Virchow formularon la **teoría celular**, uno de los pilares de la biología:
- Todos los seres vivos están formados por una o más células.
- La célula es la unidad estructural y funcional de la vida.
- Toda célula procede de otra célula preexistente.
- La información hereditaria se transmite de la célula madre a las hijas.

## Por qué las células son pequeñas
Casi todas las células miden entre 1 y 100 micrómetros. La razón es geométrica: al crecer, el volumen aumenta con el cubo del tamaño, pero la superficie solo con el cuadrado. Una célula demasiado grande no tendría membrana suficiente para alimentar todo su interior.
> Ejemplo: un cubo de 1 µm de lado tiene 6 µm² de superficie por cada µm³ de volumen. Uno de 10 µm de lado solo tiene 0,6 µm² por cada µm³: diez veces menos superficie de intercambio para la misma cantidad de citoplasma.
Por eso los organismos grandes no tienen células más grandes, sino más células.

## Procariotas y eucariotas
Las células **procariotas** (bacterias y arqueas) son las más sencillas y antiguas, con unos 3500 millones de años:
- Miden de 1 a 10 µm.
- No tienen núcleo: su ADN, una molécula circular, se concentra en una zona llamada **nucleoide**.
- Carecen de orgánulos con membrana.
- Tienen ribosomas pequeños (70S) y casi siempre una **pared celular**.
- Muchas poseen plásmidos (pequeños anillos de ADN extra), flagelos o cápsula.

Las células **eucariotas** aparecieron hace unos 2000 millones de años y son mucho más complejas:
- Miden de 10 a 100 µm.
- Su ADN está dentro de un **núcleo** rodeado por doble membrana, organizado en cromosomas lineales.
- El citoplasma está dividido en **orgánulos**, cada uno con su función. Esta compartimentación permite que ocurran a la vez procesos químicos incompatibles.
- Sus ribosomas son mayores (80S).

## La membrana plasmática
Toda célula está rodeada por una membrana de apenas 7 nanómetros de grosor. Según el **modelo del mosaico fluido** (Singer y Nicolson, 1972) está formada por:
- Una **bicapa de fosfolípidos**: cada molécula tiene una cabeza que atrae el agua y dos colas que la rechazan, de modo que se colocan en dos capas con las colas hacia dentro.
- **Proteínas** que flotan en la bicapa y actúan como canales, bombas, receptores o enzimas.
- **Colesterol**, que regula su fluidez, y glúcidos en la cara exterior que sirven para que las células se reconozcan.

La membrana es **selectivamente permeable**: deja pasar unas sustancias y frena otras.

## El transporte a través de la membrana
**Transporte pasivo**: no gasta energía; las sustancias van de donde hay más a donde hay menos.
- **Difusión simple**: moléculas pequeñas y sin carga, como O₂ y CO₂, atraviesan directamente la bicapa.
- **Difusión facilitada**: iones y moléculas como la glucosa pasan por proteínas canal o transportadoras.
- **Ósmosis**: el agua se desplaza hacia el lado con más soluto.

**Transporte activo**: mueve sustancias contra su gradiente y consume ATP. El ejemplo clásico es la **bomba de sodio-potasio**, que expulsa tres Na⁺ e introduce dos K⁺ en cada ciclo.

**Transporte en vesículas**: para partículas grandes. En la **endocitosis** la membrana engloba material del exterior; en la **exocitosis**, una vesícula se fusiona con la membrana y libera su contenido.
> Ejemplo de ósmosis: un glóbulo rojo en agua pura se hincha hasta reventar, porque el agua entra hacia su interior, más concentrado. En agua muy salada ocurre lo contrario y se arruga.

## El núcleo
Es el centro de control de la célula eucariota. Está delimitado por la **envoltura nuclear**, una doble membrana atravesada por **poros** que regulan el paso de moléculas. En su interior:
- La **cromatina**: el ADN unido a proteínas llamadas histonas. Cuando la célula va a dividirse se compacta en cromosomas visibles.
- El **nucléolo**: zona densa donde se fabrican los ribosomas.

## El sistema de endomembranas
Varios orgánulos trabajan en cadena, como una línea de producción:
- **Retículo endoplasmático rugoso**: sacos aplanados cubiertos de ribosomas. Fabrica las proteínas que se van a exportar o a insertar en membranas.
- **Retículo endoplasmático liso**: túbulos sin ribosomas. Sintetiza lípidos, almacena calcio y elimina tóxicos.
- **Aparato de Golgi**: pila de cisternas que recibe las proteínas del retículo, las modifica, las clasifica y las envía a su destino en vesículas.
- **Lisosomas**: vesículas con enzimas digestivas y pH ácido. Digieren partículas y orgánulos viejos.
- **Peroxisomas**: degradan ácidos grasos y eliminan el agua oxigenada.
> La ruta de una proteína de secreción: ribosoma → retículo rugoso → vesícula → Golgi → vesícula → membrana plasmática → exterior.

## Orgánulos de la energía
- **Mitocondrias**: realizan la respiración celular y producen la mayor parte del ATP. Tienen doble membrana; la interna se pliega en **crestas** para aumentar su superficie.
- **Cloroplastos** (solo en plantas y algas): realizan la fotosíntesis. Contienen clorofila en unos sacos apilados llamados tilacoides.

## Citoesqueleto y centrosoma
El **citoesqueleto** es una red de filamentos de proteína que da forma a la célula, sujeta los orgánulos y permite el movimiento:
- **Microtúbulos**: tubos huecos de tubulina. Sirven de carriles para el transporte y forman el huso que separa los cromosomas.
- **Filamentos de actina**: finos y flexibles; intervienen en la contracción y en el desplazamiento de la célula.
- **Filamentos intermedios**: dan resistencia mecánica.

El **centrosoma**, con sus dos **centriolos**, organiza los microtúbulos en las células animales.

## Célula animal y célula vegetal
- La **vegetal** tiene pared celular de celulosa, cloroplastos y una gran vacuola central que mantiene su turgencia. No tiene centriolos.
- La **animal** carece de pared y de cloroplastos, tiene vacuolas pequeñas y posee centriolos.

## El origen de la célula eucariota
La **teoría endosimbiótica** de Lynn Margulis explica que mitocondrias y cloroplastos fueron en origen bacterias que una célula ancestral engulló sin digerir. Con el tiempo se volvieron inseparables. Las pruebas son sólidas:
- Tienen doble membrana, como cabría esperar tras ser englobadas.
- Conservan ADN propio, circular como el bacteriano.
- Sus ribosomas son de tipo bacteriano (70S).
- Se dividen por su cuenta, de forma parecida a las bacterias.
` },
  { id: 'metabolismo', pr: 2, name: 'Metabolismo y energía', sum: 'Enzimas, ATP, respiración celular, fermentación y fotosíntesis.', m: 'celula',
    match: /ATP|glucólisis|cadena de transporte|glucosa|plantas|energía de activación|fermentación|Krebs|clorofila/i,
    k: [['Metabolismo', 'Conjunto de reacciones químicas de la célula: catabolismo (degrada y libera energía) y anabolismo (construye y la consume).'], ['Enzima', 'Proteína que acelera una reacción concreta rebajando su energía de activación, sin consumirse.'], ['Centro activo', 'Zona de la enzima donde encaja el sustrato.'], ['ATP', 'Adenosín trifosfato: molécula que transporta la energía utilizable de la célula.'], ['Respiración celular', 'Glucosa + O₂ → CO₂ + H₂O + energía (ATP). Ocurre sobre todo en la mitocondria.'], ['Glucólisis', 'Ruta del citosol que parte la glucosa en dos piruvatos: rinde 2 ATP netos y 2 NADH.'], ['Ciclo de Krebs', 'Ruta de la matriz mitocondrial que oxida el acetil-CoA a CO₂ y produce NADH y FADH₂.'], ['Quimiósmosis', 'Síntesis de ATP impulsada por un gradiente de protones a través de una membrana.'], ['Fermentación', 'Obtención de energía sin oxígeno; solo rinde los 2 ATP de la glucólisis.'], ['Fotosíntesis', '6 CO₂ + 6 H₂O + luz → glucosa + 6 O₂. Ocurre en los cloroplastos.'], ['Autótrofo y heterótrofo', 'El autótrofo fabrica su materia orgánica; el heterótrofo la obtiene de otros seres vivos.']],
    notes: `
## Qué es el metabolismo
El **metabolismo** es el conjunto de todas las reacciones químicas que ocurren en una célula. Se divide en dos grandes bloques que funcionan acoplados:
- **Catabolismo**: degrada moléculas complejas en otras más sencillas y **libera energía**. Ejemplos: la respiración celular y la fermentación.
- **Anabolismo**: construye moléculas complejas a partir de otras sencillas y **consume energía**. Ejemplos: la síntesis de proteínas y la fotosíntesis.

La energía que libera el catabolismo no se usa directamente: se guarda en una molécula intermediaria, el ATP, que luego la cede al anabolismo y al resto de trabajos celulares.

Según cómo consiguen su materia orgánica, los seres vivos son **autótrofos** (la fabrican a partir de sustancias inorgánicas, como las plantas) o **heterótrofos** (la toman de otros organismos, como los animales y los hongos).

## Las enzimas
Casi ninguna reacción del metabolismo ocurriría a la velocidad necesaria por sí sola. Las **enzimas** son proteínas que actúan como catalizadores biológicos:
- Aceleran la reacción millones de veces al rebajar su **energía de activación**.
- No se consumen: al terminar quedan libres para actuar de nuevo.
- Son **específicas**: cada enzima actúa sobre un sustrato concreto, que encaja en su **centro activo**.
$ Enzima + sustrato → complejo enzima-sustrato → enzima + producto
El modelo de la **llave y la cerradura** explica la especificidad; el del **ajuste inducido** añade que la enzima se amolda ligeramente al sustrato al unirse.

Su actividad depende de las condiciones:
- **Temperatura**: aumenta con el calor hasta un valor óptimo (unos 37 °C en humanos). Por encima, la proteína se **desnaturaliza** y pierde su forma.
- **pH**: cada enzima tiene el suyo. La pepsina del estómago trabaja a pH 2; las del intestino, a pH 8.
- **Inhibidores**: sustancias que bloquean la enzima. Muchos medicamentos y venenos actúan así.

Los nombres de las enzimas suelen acabar en **-asa**: lactasa, ADN polimerasa, ATP sintasa.

## El ATP, la moneda energética
El **ATP** (adenosín trifosfato) está formado por adenina, ribosa y tres grupos fosfato. Los enlaces entre fosfatos almacenan mucha energía, que se libera al romper el último:
$ ATP + H₂O → ADP + Pᵢ + energía (unos 30 kJ/mol)
La reacción es reversible: con energía, el ADP vuelve a convertirse en ATP. La célula recicla el ATP sin parar. Un adulto en reposo consume cada día una cantidad de ATP parecida a su propio peso, aunque en cada momento solo tiene unos pocos gramos.

Otras moléculas transportan electrones de alta energía: el **NADH** y el **FADH₂** en la respiración, y el **NADPH** en la fotosíntesis.

## La respiración celular: visión general
Es el proceso por el que la célula extrae la energía de la glucosa usando oxígeno:
$ C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energía (unos 30–32 ATP)
No ocurre de golpe, como una combustión, sino en muchos pasos pequeños que permiten aprovechar la energía. Tiene tres etapas.

## Etapa 1: la glucólisis
- **Dónde**: en el citosol.
- **Qué ocurre**: una molécula de glucosa (6 carbonos) se parte en dos de **piruvato** (3 carbonos).
- **Balance**: se gastan 2 ATP al principio y se producen 4, así que quedan **2 ATP netos** y **2 NADH**.
- **No necesita oxígeno**. Es la ruta más antigua y la comparten casi todos los seres vivos.

## Etapa 2: el ciclo de Krebs
- **Dónde**: en la matriz de la mitocondria.
- **Antes de entrar**, cada piruvato pierde un carbono en forma de CO₂ y se convierte en **acetil-CoA**.
- **Qué ocurre**: el acetil-CoA se oxida por completo. Sus carbonos salen como CO₂, el mismo que expulsamos al respirar.
- **Balance por glucosa**: 2 ATP, 6 NADH y 2 FADH₂. La mayor parte de la energía sigue guardada en esos transportadores.

## Etapa 3: la cadena de transporte de electrones
- **Dónde**: en la membrana interna de la mitocondria, en las crestas.
- **Qué ocurre**: el NADH y el FADH₂ ceden sus electrones a una serie de complejos proteicos. Al pasar de uno a otro, los electrones liberan energía, que se usa para **bombear protones** (H⁺) al espacio entre las dos membranas.
- El **oxígeno** es el aceptor final de los electrones: se une a ellos y a protones para formar agua. Por eso necesitamos respirar.
- Los protones acumulados solo pueden volver a la matriz atravesando la **ATP sintasa**, una enzima que gira como una turbina y fabrica ATP. Este mecanismo se llama **quimiósmosis** (Peter Mitchell, 1961).
- **Balance**: unos 26–28 ATP, la gran mayoría del total.
> Venenos como el cianuro bloquean el último complejo de la cadena. Los electrones dejan de fluir, no se fabrica ATP y la célula muere en minutos aunque haya oxígeno de sobra.

## Sin oxígeno: la fermentación
Si falta oxígeno, la cadena de electrones se detiene. La célula puede seguir obteniendo algo de energía con la glucólisis, pero necesita regenerar el NAD⁺ que esta consume. Eso hace la **fermentación**:
- **Fermentación láctica**: el piruvato se convierte en ácido láctico. La realizan las bacterias del yogur y nuestros músculos en un esfuerzo intenso.
- **Fermentación alcohólica**: el piruvato se convierte en etanol y CO₂. La realizan las levaduras; es la base del pan, el vino y la cerveza.
El rendimiento es muy bajo: solo **2 ATP** por glucosa, frente a unos 30 de la respiración.

## La fotosíntesis
Es el proceso inverso a la respiración: usa la energía de la luz para fabricar materia orgánica.
$ 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂
Ocurre en los **cloroplastos**, que contienen **clorofila**, un pigmento que absorbe la luz roja y azul y refleja la verde. Tiene dos fases.

**Fase luminosa** (en las membranas de los tilacoides):
- La clorofila capta la luz y sus electrones se excitan.
- Para reponerlos se rompe el agua (**fotólisis**), y se libera el O₂ que respiramos.
- Los electrones recorren una cadena de transporte que bombea protones y permite fabricar **ATP** por quimiósmosis, igual que en la mitocondria.
- Al final se forma **NADPH**.

**Ciclo de Calvin** o fase oscura (en el estroma):
- No necesita luz directamente, pero sí el ATP y el NADPH de la fase anterior.
- La enzima **rubisco**, la proteína más abundante del planeta, fija el CO₂ del aire a una molécula orgánica.
- Tras varias vueltas del ciclo se obtiene glucosa.

## Dos procesos complementarios
Respiración y fotosíntesis forman un ciclo a escala planetaria: los productos de una son los reactivos de la otra.
- La fotosíntesis **almacena** energía en la glucosa y libera oxígeno.
- La respiración **libera** esa energía y devuelve CO₂ y agua.
> Las plantas también respiran, de día y de noche. De día, la fotosíntesis es más intensa que la respiración, y por eso el balance es que liberan oxígeno.
` },
  { id: 'genetica', name: 'Genética y ADN', sum: 'Estructura del ADN, replicación, expresión génica, división celular y herencia.', m: 'adn',
    match: /ADN|ARN|adenina|mitosis|heterocigot|codón|G–C|replicación|dogma|antiparalel|hebra|meiosis|mutación|alelo/i,
    k: [['Nucleótido', 'Unidad del ADN: fosfato + desoxirribosa + base nitrogenada (A, T, G o C).'], ['Complementariedad de bases', 'A se empareja con T (2 puentes de H) y G con C (3 puentes de H).'], ['Gen', 'Fragmento de ADN con la información para fabricar una proteína o un ARN.'], ['Replicación semiconservativa', 'Cada molécula de ADN hija conserva una hebra original y una nueva.'], ['Transcripción', 'Copia de un gen de ADN a ARN mensajero. Ocurre en el núcleo.'], ['Traducción', 'Síntesis de una proteína en el ribosoma a partir del ARN mensajero.'], ['Codón', 'Triplete de bases del ARNm que codifica un aminoácido.'], ['Mitosis', 'División que produce dos células hijas genéticamente idénticas.'], ['Meiosis', 'División que produce cuatro gametos haploides y genéticamente distintos.'], ['Alelo', 'Cada una de las variantes de un mismo gen.'], ['Genotipo y fenotipo', 'El genotipo es la combinación de alelos; el fenotipo, el carácter que se manifiesta.'], ['Mutación', 'Cambio en la secuencia del ADN; fuente de variabilidad genética.']],
    notes: `
## El ADN, la molécula de la herencia
El **ADN** (ácido desoxirribonucleico) guarda las instrucciones para construir y hacer funcionar a un ser vivo. Es un polímero formado por la repetición de unidades llamadas **nucleótidos**, cada uno con tres partes:
- Un **grupo fosfato**.
- Un azúcar de cinco carbonos, la **desoxirribosa**.
- Una **base nitrogenada**: adenina (A), guanina (G), citosina (C) o timina (T).
A y G son **purinas** (dos anillos); C y T son **pirimidinas** (un anillo).

Los nucleótidos se unen por enlaces entre el fosfato de uno y el azúcar del siguiente, formando una hebra con dos extremos distintos, llamados 5′ y 3′.

## La doble hélice
En 1953, James Watson y Francis Crick propusieron la estructura del ADN, apoyándose en las imágenes de difracción de rayos X de Rosalind Franklin y en las reglas de Chargaff (en cualquier ADN hay tanta A como T y tanta G como C):
- Dos hebras enrolladas en espiral alrededor de un eje común.
- El **esqueleto** de azúcar y fosfato queda por fuera; las bases, hacia dentro.
- Las bases de una hebra se unen a las de la otra por **puentes de hidrógeno**, siguiendo la regla de complementariedad: **A con T** (dos puentes) y **G con C** (tres puentes).
- Las hebras son **antiparalelas**: una va en sentido 5′→3′ y la otra en 3′→5′.
- Cada vuelta de la hélice tiene unos 10 pares de bases y mide 3,4 nm.
> En la maqueta del laboratorio 3D puedes ver un fragmento real de 12 pares de bases, con cada átomo en su posición y los puentes de hidrógeno entre las dos hebras.

Que las bases sean complementarias tiene una consecuencia decisiva: conociendo una hebra se puede reconstruir la otra. Ahí está el secreto de la herencia.

## Genes, cromosomas y genoma
- Un **gen** es un fragmento de ADN con la información para fabricar una proteína o un ARN.
- El ADN se enrolla alrededor de unas proteínas, las **histonas**, formando la **cromatina**. Al dividirse la célula, se compacta en **cromosomas**.
- El **genoma** es todo el ADN de un organismo. El humano tiene unos 3200 millones de pares de bases y alrededor de 20 000 genes, repartidos en **46 cromosomas** (23 pares).
- Las células del cuerpo son **diploides** (2n): tienen dos juegos de cromosomas, uno de cada progenitor. Los gametos son **haploides** (n).

## La replicación del ADN
Antes de dividirse, la célula copia todo su ADN. Intervienen varias enzimas:
- La **helicasa** separa las dos hebras rompiendo los puentes de hidrógeno.
- La **primasa** coloca un pequeño cebador de ARN que sirve de punto de partida.
- La **ADN polimerasa** añade nucleótidos complementarios, siempre en sentido 5′→3′, y corrige sus propios errores.
- La **ligasa** une los fragmentos sueltos.

Como la polimerasa solo avanza en un sentido, una hebra se copia de forma continua y la otra a trozos, los **fragmentos de Okazaki**.

La replicación es **semiconservativa**: cada molécula hija tiene una hebra antigua y una nueva. Lo demostraron Meselson y Stahl en 1958.

## Del gen a la proteína
La información fluye en un sentido, lo que se conoce como el **dogma central** de la biología molecular:
$ ADN → (transcripción) → ARN → (traducción) → proteína
El **ARN** se diferencia del ADN en tres cosas: su azúcar es la ribosa, tiene **uracilo** (U) en lugar de timina y suele ser de una sola hebra.

**Transcripción** (en el núcleo): la **ARN polimerasa** se une al inicio de un gen, separa las hebras y fabrica una copia en forma de **ARN mensajero** (ARNm). En eucariotas, ese ARN se procesa antes de salir del núcleo: se eliminan los **intrones** (fragmentos que no codifican) y se unen los **exones**.

**Traducción** (en los ribosomas): el ARNm se lee de tres en tres bases. Cada triplete o **codón** corresponde a un aminoácido. Los **ARN de transferencia** traen el aminoácido adecuado, reconociendo el codón mediante su anticodón. El ribosoma va uniendo los aminoácidos hasta encontrar un codón de parada.

## El código genético
Es la correspondencia entre codones y aminoácidos. Sus propiedades:
- Hay 64 codones posibles (4³) para solo 20 aminoácidos, así que es **redundante**: varios codones significan lo mismo.
- No es ambiguo: cada codón indica un único aminoácido.
- **AUG** es el codón de inicio; hay tres de parada.
- Es casi **universal**: el mismo en bacterias, plantas y humanos. Es una prueba del origen común de la vida y la razón de que una bacteria pueda fabricar insulina humana.

## El ciclo celular y la mitosis
Entre división y división, la célula está en **interfase**: crece, duplica su ADN y se prepara. Después llega la **mitosis**, que reparte el material genético en cuatro fases:
- **Profase**: los cromosomas se condensan y la envoltura nuclear desaparece.
- **Metafase**: los cromosomas se alinean en el centro de la célula.
- **Anafase**: las dos copias de cada cromosoma (cromátidas) se separan hacia polos opuestos.
- **Telofase**: se forman dos núcleos nuevos.
Tras ella, la **citocinesis** divide el citoplasma. Resultado: **dos células idénticas** a la original. Sirve para crecer, reparar tejidos y, en organismos unicelulares, para reproducirse.

## La meiosis
Es la división que produce los gametos. Consta de dos divisiones seguidas tras una sola duplicación del ADN:
- En la **meiosis I** se separan los cromosomas homólogos. Antes, se aparean e intercambian fragmentos: es el **entrecruzamiento**.
- En la **meiosis II** se separan las cromátidas, como en una mitosis.
Resultado: **cuatro células haploides**, todas distintas entre sí. La meiosis genera variabilidad por dos vías: el entrecruzamiento y el reparto al azar de los cromosomas.

## Las leyes de Mendel
Gregor Mendel, cruzando plantas de guisante, descubrió en 1865 cómo se heredan los caracteres. Vocabulario básico:
- **Alelo**: cada variante de un gen. Tenemos dos de cada gen.
- **Homocigoto**: los dos alelos son iguales (AA o aa). **Heterocigoto**: son distintos (Aa).
- **Dominante**: el alelo que se manifiesta siempre. **Recesivo**: solo se manifiesta en homocigosis.
- **Genotipo**: la combinación de alelos. **Fenotipo**: lo que se observa.

Sus leyes:
- **Uniformidad**: al cruzar dos razas puras (AA × aa), todos los descendientes son iguales (Aa).
- **Segregación**: los dos alelos de un individuo se separan al formar los gametos.
- **Independencia**: los genes de caracteres distintos se heredan por separado, si están en cromosomas diferentes.
> Ejemplo: al cruzar dos heterocigotos (Aa × Aa), los gametos de cada uno llevan A o a al 50 %. Los descendientes serán 1 AA : 2 Aa : 1 aa. El 75 % mostrará el carácter dominante y el 25 % el recesivo.

## Más allá de Mendel
- **Herencia intermedia y codominancia**: ningún alelo domina del todo. En los grupos sanguíneos, A y B son codominantes y ambos dominan sobre 0.
- **Herencia ligada al sexo**: genes situados en el cromosoma X, como los del daltonismo y la hemofilia. Los varones (XY) los manifiestan con una sola copia.
- **Herencia poligénica**: caracteres como la estatura dependen de muchos genes y del ambiente.

## Las mutaciones
Una **mutación** es un cambio en la secuencia del ADN. Puede deberse a errores de copia o a agentes mutágenos, como la radiación ultravioleta o ciertas sustancias químicas.
- **Génicas**: afectan a una o pocas bases (sustitución, inserción o deleción).
- **Cromosómicas**: afectan a fragmentos de cromosomas o a su número, como la trisomía 21.
La mayoría son neutras o perjudiciales, pero algunas resultan ventajosas. Son la fuente última de la variabilidad sobre la que actúa la **selección natural**.
` },
  { id: 'virus', pr: 1, name: 'Virus y microorganismos', sum: 'Virus, bacterias, enfermedades infecciosas y sistema inmunitario.', m: 'virus',
    match: /virus|NO está formado|vacuna|antibiótico|anticuerpo|bacteria/i,
    k: [['Virus', 'Partícula no celular con material genético (ADN o ARN) dentro de una cápside proteica; parásito obligado.'], ['Cápside', 'Cubierta de proteínas que protege el genoma del virus.'], ['Ciclo lítico', 'El virus se multiplica y destruye la célula al salir.'], ['Ciclo lisogénico', 'El genoma del virus se integra en el de la célula y permanece latente.'], ['Retrovirus', 'Virus de ARN que copia su genoma a ADN con la transcriptasa inversa (p. ej., el VIH).'], ['Bacteria', 'Organismo unicelular procariota; se reproduce por bipartición.'], ['Antibiótico', 'Fármaco que actúa contra bacterias; no sirve contra virus.'], ['Antígeno', 'Molécula que el sistema inmunitario reconoce como extraña.'], ['Anticuerpo', 'Proteína producida por los linfocitos B que se une a un antígeno concreto.'], ['Vacuna', 'Preparado que entrena al sistema inmunitario frente a un patógeno sin causar la enfermedad.'], ['Memoria inmunológica', 'Capacidad de responder más rápido y mejor en un segundo contacto con el mismo patógeno.']],
    notes: `
## Los microorganismos
Son seres vivos demasiado pequeños para verse a simple vista. Incluyen grupos muy distintos:
- **Bacterias y arqueas**: células procariotas.
- **Protozoos y algas microscópicas**: eucariotas unicelulares.
- **Hongos microscópicos**: levaduras y mohos.
- **Virus**: no son células, y por eso se discute si están vivos.

La inmensa mayoría son inofensivos o beneficiosos. Solo una pequeña parte causa enfermedades: son los **patógenos**.

## Qué es un virus
Un virus es una partícula mucho más pequeña que una célula (entre 20 y 300 nanómetros). No tiene citoplasma, ni ribosomas, ni metabolismo propio. Es un **parásito intracelular obligado**: solo puede multiplicarse dentro de una célula, usando su maquinaria.

Fuera de la célula es una partícula inerte, el **virión**. Dentro, toma el control y la convierte en una fábrica de virus. Por eso suele decirse que está en la frontera entre lo vivo y lo inerte.

## Estructura de un virus
- **Genoma**: una o varias moléculas de ADN o de ARN, de cadena simple o doble. Nunca los dos tipos a la vez.
- **Cápside**: cubierta de proteínas que protege el genoma. Está formada por la repetición de pocas piezas, lo que ahorra información genética. Puede ser **icosaédrica** (con forma de balón, como la del virus del resfriado), **helicoidal** (un cilindro, como la del virus del mosaico del tabaco) o **compleja** (como la de los bacteriófagos).
- **Envoltura** (solo en algunos): una membrana de lípidos que el virus roba a la célula al salir, con **espículas** de proteína. La tienen el virus de la gripe, el VIH y los coronavirus.
> Ejemplo: la cápside del rinovirus, el virus del resfriado común, son 60 copias de cuatro proteínas encajadas formando un icosaedro, sin envoltura.

Cada virus solo infecta a ciertas células, las que tienen en su superficie el **receptor** que sus proteínas reconocen. Por eso el virus de la gripe ataca las vías respiratorias y el de la hepatitis, el hígado.

## Cómo se multiplica un virus
El ciclo general tiene cinco pasos:
- **Adsorción**: el virus se une al receptor de la célula.
- **Entrada**: penetra y libera su genoma.
- **Replicación y síntesis**: la célula copia el genoma del virus y fabrica sus proteínas.
- **Ensamblaje**: las piezas se unen formando nuevos virus.
- **Liberación**: salen rompiendo la célula (lisis) o por gemación, llevándose un trozo de membrana.

Los **bacteriófagos**, virus que infectan bacterias, pueden seguir dos caminos:
- **Ciclo lítico**: se multiplican enseguida y destruyen la bacteria.
- **Ciclo lisogénico**: su ADN se integra en el cromosoma bacteriano y se copia con él, sin causar daño, hasta que un estímulo lo activa.

## Los retrovirus
Los **retrovirus**, como el **VIH**, tienen ARN y una enzima especial, la **transcriptasa inversa**, que hace lo contrario de lo habitual: copia el ARN a ADN. Ese ADN se integra en el genoma de la célula y queda ahí de forma permanente. Por eso la infección por VIH puede controlarse con medicación, pero todavía no eliminarse.

El VIH ataca a los linfocitos T colaboradores, piezas clave de la defensa, y sin tratamiento conduce al sida.

## Las bacterias
Son células procariotas, de 1 a 10 µm. Según su forma se llaman **cocos** (esféricas), **bacilos** (alargadas), **espirilos** (en espiral) o **vibrios** (en coma). Se reproducen por **bipartición**: en buenas condiciones, algunas se dividen cada 20 minutos.

Aunque no tienen reproducción sexual, pueden intercambiar genes entre sí, por ejemplo mediante plásmidos. Así se propaga la resistencia a los antibióticos.

Su papel es enorme:
- Descomponen la materia orgánica y reciclan los nutrientes.
- Fijan el nitrógeno del aire, haciéndolo disponible para las plantas.
- Forman nuestra **microbiota**: en el intestino ayudan a digerir, fabrican vitaminas y frenan a los patógenos.
- Se usan para producir yogur, queso, antibióticos o insulina.

## Las enfermedades infecciosas
Una enfermedad infecciosa es la causada por un patógeno que entra en el organismo y se multiplica. Se transmite por distintas vías:
- **Aire**: gotitas al toser o estornudar (gripe, tuberculosis).
- **Agua y alimentos contaminados** (cólera, salmonelosis).
- **Contacto directo o sexual** (hepatitis B, VIH).
- **Vectores**, animales que transportan el patógeno (el mosquito en la malaria).

Tratamiento según el agente:
- Contra las **bacterias**, **antibióticos**: atacan estructuras que solo ellas tienen, como la pared celular o los ribosomas 70S.
- Contra los **virus**, **antivirales** específicos y, sobre todo, prevención con vacunas.
> Los antibióticos no sirven contra los virus, que no tienen pared ni ribosomas propios. Tomarlos sin necesidad no cura un resfriado y favorece que aparezcan bacterias resistentes, un problema grave de salud pública.

## El sistema inmunitario: primeras barreras
La defensa del cuerpo actúa en varios niveles. Los primeros son **inespecíficos**: actúan igual contra cualquier invasor.
- **Barreras externas**: la piel, las mucosas, el ácido del estómago, las lágrimas.
- **Respuesta inflamatoria**: si un patógeno entra, la zona se enrojece y se hincha porque llega más sangre con células defensivas.
- **Fagocitos**: glóbulos blancos, como los macrófagos, que engullen y digieren a los microbios.
- **Fiebre**: dificulta la multiplicación de muchos patógenos.

## La respuesta inmunitaria específica
Si las barreras anteriores no bastan, entra en acción la defensa **específica**, que reconoce a cada patógeno por sus **antígenos**, moléculas de su superficie. La llevan a cabo los **linfocitos**:
- Los **linfocitos B** fabrican **anticuerpos**, proteínas que se unen al antígeno y lo neutralizan o lo marcan para su destrucción.
- Los **linfocitos T citotóxicos** destruyen las células infectadas.
- Los **linfocitos T colaboradores** coordinan toda la respuesta.

Tras vencer la infección quedan **células de memoria**. Si el mismo patógeno vuelve, la respuesta es mucho más rápida e intensa, a menudo sin que lleguemos a enfermar. Es la **memoria inmunológica**.

## Vacunas y sueros
- Una **vacuna** introduce el antígeno sin la enfermedad: patógenos muertos o debilitados, fragmentos, o las instrucciones para fabricarlos (vacunas de ARN mensajero). El cuerpo crea células de memoria. Es una inmunidad **activa**, lenta de adquirir pero duradera.
- Un **suero** aporta anticuerpos ya fabricados. Es una inmunidad **pasiva**: actúa de inmediato pero dura poco.
> La viruela, que mató a cientos de millones de personas, fue declarada erradicada en 1980 gracias a la vacunación.
` },
  { id: 'cuerpo', name: 'El cuerpo humano', sum: 'Organización, nutrición, sistema nervioso, hormonas, huesos y músculos.', m: 'cuerpo',
    match: /./,
    k: [['Tejido', 'Conjunto de células parecidas que realizan la misma función.'], ['Homeostasis', 'Mantenimiento de las condiciones internas constantes (temperatura, glucosa, pH...).'], ['Neurona', 'Célula del sistema nervioso especializada en transmitir impulsos eléctricos.'], ['Sinapsis', 'Zona de comunicación entre dos neuronas, mediante neurotransmisores.'], ['Potencial de acción', 'Inversión breve del voltaje de la membrana: entra Na⁺ (despolarización) y sale K⁺ (repolarización).'], ['Mielina', 'Vaina aislante del axón que acelera el impulso nervioso.'], ['Acto reflejo', 'Respuesta rápida e involuntaria coordinada por la médula espinal.'], ['Hormona', 'Mensajero químico que viaja por la sangre y actúa sobre órganos diana.'], ['Circulación mayor', 'Ventrículo izquierdo → aorta → cuerpo → venas cavas → aurícula derecha.'], ['Circulación menor', 'Ventrículo derecho → arteria pulmonar → pulmones → venas pulmonares → aurícula izquierda.'], ['Alvéolo', 'Saco microscópico del pulmón donde se intercambian O₂ y CO₂ con la sangre.'], ['Nefrona', 'Unidad del riñón que filtra la sangre y forma la orina.'], ['Sarcómero', 'Unidad de contracción del músculo, formada por filamentos de actina y miosina.']],
    notes: `
## Cómo se organiza el cuerpo
El cuerpo humano tiene unos 30 billones de células, organizadas en niveles de complejidad creciente:
$ célula → tejido → órgano → aparato o sistema → organismo
Un **tejido** es un conjunto de células parecidas con una misma función. Hay cuatro tipos básicos:
- **Epitelial**: recubre superficies y forma glándulas.
- **Conectivo**: une y sostiene. Incluye el hueso, el cartílago, la grasa y la sangre.
- **Muscular**: se contrae y produce movimiento.
- **Nervioso**: transmite información.

Varios tejidos forman un **órgano**, y varios órganos, un **aparato** o **sistema**.

## La homeostasis
El cuerpo mantiene su medio interno estable aunque cambie el exterior: la temperatura ronda los 37 °C, el pH de la sangre es 7,4 y la glucosa se mueve en un margen estrecho. Ese equilibrio se llama **homeostasis** y se logra mediante mecanismos de **retroalimentación negativa**: cuando un valor se desvía, se activa una respuesta que lo corrige.
> Ejemplo: si sube la temperatura corporal, sudamos y los vasos de la piel se dilatan para perder calor. Si baja, tiritamos y los vasos se contraen.

## La nutrición: cuatro aparatos coordinados
La función de nutrición lleva materia y energía a cada célula y retira sus desechos.

**Aparato digestivo**: transforma los alimentos en moléculas pequeñas.
- En la **boca** empieza la digestión, con la masticación y la saliva.
- El **estómago** mezcla el alimento con jugo gástrico, muy ácido, y comienza a digerir las proteínas.
- En el **intestino delgado** termina la digestión, con ayuda de la bilis del hígado y el jugo del páncreas, y se **absorben** los nutrientes. Sus pliegues y vellosidades multiplican la superficie.
- El **intestino grueso** recupera agua y forma las heces.

**Aparato respiratorio**: toma oxígeno y expulsa dióxido de carbono. El aire recorre la tráquea y los bronquios hasta los **alvéolos**, unos 300 millones de sacos diminutos rodeados de capilares. Allí, por difusión, el O₂ pasa a la sangre y el CO₂ sale.

**Aparato circulatorio**: transporta todo por el cuerpo. La sangre contiene **plasma**, **glóbulos rojos** (llevan el oxígeno unido a la hemoglobina), **glóbulos blancos** (defensa) y **plaquetas** (coagulación).

**Aparato excretor**: los **riñones** filtran la sangre. Cada uno tiene alrededor de un millón de **nefronas**, que filtran unos 180 litros al día y reabsorben casi todo, dejando alrededor de litro y medio de orina.

## El corazón y la circulación
El corazón es un músculo hueco con cuatro cavidades: dos **aurículas**, que reciben la sangre, y dos **ventrículos**, que la impulsan. Las válvulas impiden que retroceda.

La circulación humana es **doble**: la sangre pasa dos veces por el corazón en cada vuelta.
- **Circulación menor o pulmonar**: ventrículo derecho → arteria pulmonar → pulmones (la sangre se oxigena) → venas pulmonares → aurícula izquierda.
- **Circulación mayor o sistémica**: ventrículo izquierdo → aorta → todos los órganos → venas cavas → aurícula derecha.

Tipos de vasos:
- Las **arterias** salen del corazón; tienen paredes gruesas y elásticas.
- Las **venas** vuelven a él; tienen válvulas que impiden el retroceso.
- Los **capilares**, de una sola capa de células, permiten el intercambio con los tejidos.

Cada latido alterna **sístole** (contracción) y **diástole** (relajación), y lo inicia el **nódulo sinoauricular**, el marcapasos natural.
$ Gasto cardíaco = frecuencia cardíaca × volumen por latido ≈ 5 L/min en reposo

## El sistema nervioso
Recibe información, la procesa y ordena respuestas rápidas. Se divide en:
- **Sistema nervioso central**: el **encéfalo** (cerebro, cerebelo y tronco) y la **médula espinal**.
- **Sistema nervioso periférico**: los nervios que conectan el central con el resto del cuerpo. Su parte **somática** controla los movimientos voluntarios y la **autónoma** (simpática y parasimpática) regula los órganos internos.

Funciones del encéfalo:
- El **cerebro** se ocupa del pensamiento, la memoria, el lenguaje y los movimientos voluntarios.
- El **cerebelo** coordina el movimiento y el equilibrio.
- El **tronco del encéfalo** controla funciones vitales, como la respiración y el latido.

## La neurona y el impulso nervioso
La **neurona** es la célula del sistema nervioso. Tiene tres partes: las **dendritas** reciben señales, el **soma** contiene el núcleo y el **axón** las transmite.

En reposo, el interior de la neurona es negativo respecto al exterior: unos −70 mV, mantenidos por la bomba de sodio-potasio. Cuando llega un estímulo suficiente se dispara un **potencial de acción**:
- Se abren canales de **Na⁺**, que entra en masa: el interior se vuelve positivo (**despolarización**).
- Enseguida se abren canales de **K⁺**, que sale: se recupera el valor negativo (**repolarización**).
- El cambio se propaga a lo largo del axón como una onda.
Es una respuesta de **todo o nada**: o se produce completa o no se produce.

Muchos axones están recubiertos de **mielina**, un aislante con interrupciones llamadas **nodos de Ranvier**. El impulso salta de nodo en nodo (conducción saltatoria) y pasa de aproximadamente 1 m/s a más de 100 m/s.

## La sinapsis
Las neuronas no se tocan: entre ellas hay un pequeño espacio, la **hendidura sináptica**. Cuando el impulso llega al final del axón:
- Entra calcio en el terminal.
- Unas vesículas liberan **neurotransmisores** a la hendidura.
- Estos se unen a receptores de la neurona siguiente y generan en ella una nueva señal.
Ejemplos de neurotransmisores: acetilcolina, dopamina, serotonina. Muchos fármacos y drogas actúan alterando la sinapsis.

## Actos reflejos y voluntarios
- En un **acto reflejo**, la respuesta es rápida, automática y la coordina la médula: el receptor capta el estímulo, una neurona sensitiva lo lleva a la médula y una neurona motora ordena la respuesta al músculo. Así retiramos la mano de algo que quema antes de sentir el dolor.
- En un **acto voluntario**, la información llega a la corteza cerebral, que decide la respuesta.

## El sistema endocrino
Es el otro sistema de coordinación. Sus glándulas vierten **hormonas** a la sangre, que actúan solo sobre las células con el receptor adecuado. Es más lento que el nervioso, pero sus efectos duran más.
- **Hipófisis**: la glándula maestra; regula a las demás y produce la hormona del crecimiento.
- **Tiroides**: la tiroxina regula el ritmo del metabolismo.
- **Páncreas**: la **insulina** hace bajar la glucosa en sangre y el **glucagón** la hace subir.
- **Suprarrenales**: la adrenalina prepara al cuerpo para una emergencia.
- **Gónadas**: producen las hormonas sexuales.
> En la diabetes, el páncreas no fabrica insulina suficiente o las células no responden a ella, y la glucosa se acumula en la sangre.

## El aparato locomotor
Lo forman el esqueleto y los músculos.

**El esqueleto** tiene 206 huesos. Sostiene el cuerpo, protege órganos (el cráneo, el cerebro; las costillas, el corazón y los pulmones), permite el movimiento, almacena calcio y fabrica las células de la sangre en la **médula ósea roja**. Los huesos se unen en **articulaciones**: fijas (cráneo), semimóviles (vértebras) o móviles (rodilla, hombro), donde el cartílago y el líquido sinovial reducen el roce.

**Los músculos** esqueléticos se unen a los huesos por **tendones** y trabajan en parejas **antagonistas**: cuando el bíceps se contrae y dobla el codo, el tríceps se relaja, y al revés.

La contracción se explica por el deslizamiento de filamentos: dentro de cada fibra muscular hay unidades llamadas **sarcómeros**, con filamentos de **actina** y **miosina**. Al llegar la orden nerviosa se libera calcio, la miosina se engancha a la actina y tira de ella gastando ATP. El sarcómero se acorta, y con él todo el músculo.
> En el atlas del cuerpo humano del laboratorio 3D puedes activar cada sistema por separado, buscar cualquier estructura por su nombre y tocar cada pieza para ver su ficha.
` },
];
