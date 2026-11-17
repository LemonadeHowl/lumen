// Índice de temas de Química. Mismo formato que biologia.temas.js: apuntes (notes), conceptos clave que pasan
// a flashcards (k), maqueta 3D relacionada (m) y una expresión (match) que reparte las preguntas del banco.
// Los temas se comprueban en este orden y el último recoge el resto; n = orden en que se muestran.
window.TOPICS = window.TOPICS || {};
TOPICS.quimica = [
  { id: 'equilibrio', name: 'Equilibrio, ácidos y energía', sum: 'Termoquímica, cinética, equilibrio, pH y electroquímica.',
    match: /pH|espontánea|equilibrio|pila|N₂|ácido|exotérmic|endotérmic|entalpía|catalizador|oxida|redox|reductor|Kc|neutraliza/i,
    k: [['Entalpía (ΔH)', 'Calor intercambiado a presión constante: negativa si la reacción es exotérmica, positiva si es endotérmica.'], ['Ley de Hess', 'La variación de entalpía de una reacción es la misma se realice en una etapa o en varias.'], ['Entropía (S)', 'Medida del desorden de un sistema; aumenta al pasar de sólido a líquido y a gas.'], ['Energía libre de Gibbs', 'ΔG = ΔH − T·ΔS; la reacción es espontánea si ΔG < 0.'], ['Energía de activación', 'Energía mínima que deben tener las partículas al chocar para que haya reacción.'], ['Catalizador', 'Sustancia que acelera una reacción rebajando la energía de activación, sin consumirse.'], ['Constante de equilibrio', 'Kc = [productos] / [reactivos], cada concentración elevada a su coeficiente; solo cambia con la temperatura.'], ['Principio de Le Chatelier', 'Un sistema en equilibrio se desplaza para contrarrestar el cambio que se le impone.'], ['Ácido y base (Brønsted)', 'Un ácido cede protones (H⁺); una base los acepta.'], ['pH', 'pH = −log [H₃O⁺]; ácido si es menor que 7, básico si es mayor. pH + pOH = 14.'], ['Neutralización', 'Ácido + base → sal + agua.'], ['Oxidación y reducción', 'Oxidarse es perder electrones; reducirse es ganarlos. El oxidante se reduce y el reductor se oxida.'], ['Pila galvánica', 'Dispositivo que obtiene corriente de una reacción redox espontánea: oxidación en el ánodo, reducción en el cátodo.'], ['Electrólisis', 'Uso de corriente eléctrica para forzar una reacción redox no espontánea.']],
    notes: `
## Energía de las reacciones: termoquímica
En toda reacción se rompen enlaces en los reactivos (lo que cuesta energía) y se forman enlaces nuevos en los productos (lo que la libera). El balance entre ambos es la energía de la reacción. A presión constante, ese calor se llama **variación de entalpía** (ΔH):
- **Exotérmica** (ΔH < 0): desprende calor al entorno. Ejemplos: combustiones, neutralizaciones, la respiración celular.
- **Endotérmica** (ΔH > 0): absorbe calor. Ejemplos: la fotosíntesis, la descomposición de la caliza, las bolsas de frío instantáneo.

Una **ecuación termoquímica** indica la reacción y su entalpía:
$ CH₄ + 2 O₂ → CO₂ + 2 H₂O      ΔH = −890 kJ/mol
Quemar un mol de metano (16 g) libera 890 kJ.

## Ley de Hess y entalpías de formación
La entalpía es una **función de estado**: solo depende del punto de partida y del de llegada, no del camino. De ahí la **ley de Hess**: si una reacción puede escribirse como suma de otras, su ΔH es la suma de las ΔH de esas etapas.
> Ejemplo: C + O₂ → CO₂ tiene ΔH = −393,5 kJ, y CO + ½ O₂ → CO₂ tiene ΔH = −283,0 kJ. Restando, C + ½ O₂ → CO tiene ΔH = −393,5 − (−283,0) = −110,5 kJ, un valor difícil de medir directamente.
La **entalpía de formación** (ΔHf) es la de formar un mol de compuesto a partir de sus elementos. Con ellas se calcula cualquier reacción:
$ ΔH = Σ ΔHf (productos) − Σ ΔHf (reactivos)

## Espontaneidad: entropía y energía libre
Que una reacción desprenda calor no basta para saber si ocurrirá sola: el hielo se funde espontáneamente a 20 °C aunque absorbe calor. Falta tener en cuenta la **entropía** (S), que mide el desorden. Aumenta al fundir, al evaporar, al disolver y cuando crece el número de moles de gas.

Las dos tendencias se combinan en la **energía libre de Gibbs**:
$ ΔG = ΔH − T · ΔS
- ΔG < 0: reacción **espontánea**.
- ΔG > 0: no espontánea (lo es la inversa).
- ΔG = 0: equilibrio.

Según los signos:
- ΔH < 0 y ΔS > 0: espontánea a cualquier temperatura.
- ΔH > 0 y ΔS < 0: nunca espontánea.
- ΔH < 0 y ΔS < 0: espontánea solo a temperaturas bajas.
- ΔH > 0 y ΔS > 0: espontánea solo a temperaturas altas.
> Ejemplo: en la fusión del hielo, ΔH = +6010 J/mol y ΔS = +22,0 J/(mol·K). ΔG se anula cuando T = ΔH/ΔS = 6010/22,0 = 273 K, es decir, 0 °C. Por encima, el hielo se funde solo.
Espontánea no significa rápida: la oxidación del hierro lo es, pero tarda años.

## Velocidad de reacción: cinética
La **teoría de colisiones** explica la velocidad: para reaccionar, las partículas deben chocar con la orientación adecuada y con una energía mínima, la **energía de activación**. Todo lo que aumente los choques eficaces acelera la reacción:
- **Temperatura**: las partículas van más rápido y más de ellas superan la barrera. Como regla aproximada, 10 °C más duplican la velocidad. Por eso los alimentos duran más en el frigorífico.
- **Concentración** (o presión en los gases): más partículas, más choques.
- **Superficie de contacto**: el serrín arde mucho más deprisa que un tronco.
- **Catalizador**: ofrece un camino con menor energía de activación y no se consume. No cambia ΔH ni la posición del equilibrio. Las **enzimas** son los catalizadores de los seres vivos; el catalizador de un coche transforma gases tóxicos en otros inocuos.

## Equilibrio químico
Muchas reacciones son **reversibles**: los productos reaccionan entre sí y regeneran los reactivos. Con el tiempo, las velocidades directa e inversa se igualan y las concentraciones dejan de cambiar. Es un **equilibrio dinámico**: las dos reacciones siguen ocurriendo, pero se compensan.

Para a A + b B ⇌ c C + d D, la **constante de equilibrio** es:
$ Kc = [C]ᶜ · [D]ᵈ / ([A]ᵃ · [B]ᵇ)
- Kc muy grande: en el equilibrio predominan los productos.
- Kc muy pequeña: apenas se forman productos.
- Kc solo cambia con la temperatura.

El **cociente de reacción** Q tiene la misma expresión, pero con las concentraciones de cualquier momento. Si Q < Kc la reacción avanza hacia los productos; si Q > Kc, hacia los reactivos.

## Principio de Le Chatelier
Si se altera un sistema en equilibrio, este se desplaza en el sentido que contrarresta el cambio:
- **Añadir un reactivo**: se desplaza hacia los productos. Retirar un producto tiene el mismo efecto.
- **Aumentar la presión** (reducir el volumen): se desplaza hacia el lado con menos moles de gas.
- **Aumentar la temperatura**: se desplaza en el sentido endotérmico.
- **Un catalizador** no desplaza el equilibrio: solo hace que se alcance antes.
> Ejemplo: N₂ + 3 H₂ ⇌ 2 NH₃, con ΔH = −92 kJ. Hay 4 moles de gas a la izquierda y 2 a la derecha: la presión alta favorece al amoníaco. Al ser exotérmica, la temperatura baja también, pero entonces la reacción es lentísima. La industria (proceso Haber-Bosch) usa un compromiso: unas 200 atm, 450 °C y un catalizador de hierro.

## Ácidos y bases
- **Arrhenius**: un ácido libera H⁺ en agua y una base libera OH⁻.
- **Brønsted-Lowry** (más general): un **ácido** cede protones y una **base** los acepta. Cada ácido tiene su **base conjugada**: HCl / Cl⁻, NH₄⁺ / NH₃.

El agua se ioniza muy ligeramente por sí sola:
$ 2 H₂O ⇌ H₃O⁺ + OH⁻      Kw = [H₃O⁺]·[OH⁻] = 10⁻¹⁴  (a 25 °C)
En agua pura ambas concentraciones valen 10⁻⁷ M. La acidez se mide con el **pH**:
$ pH = −log [H₃O⁺]      pOH = −log [OH⁻]      pH + pOH = 14
- pH < 7: ácido. pH = 7: neutro. pH > 7: básico.
- La escala es logarítmica: cada unidad supone una concentración de H₃O⁺ diez veces mayor o menor.
> Valores orientativos: jugo gástrico 1,5; zumo de limón 2; vinagre 3; café 5; agua pura 7; sangre 7,4; lejía 12,5.

## Fuerza de ácidos y bases
- **Fuertes**: se disocian por completo. Ácidos: HCl, HNO₃, H₂SO₄. Bases: NaOH, KOH.
- **Débiles**: solo se disocian en parte y alcanzan un equilibrio con constante Ka o Kb. Ejemplos: ácido acético (vinagre), amoníaco.
> Ejemplo (ácido fuerte): HCl 0,01 M tiene [H₃O⁺] = 10⁻² M, luego pH = 2.
> Ejemplo (base fuerte): NaOH 0,01 M tiene [OH⁻] = 10⁻² M, pOH = 2 y pH = 14 − 2 = 12.
> Ejemplo (ácido débil): ácido acético 0,1 M, con Ka = 1,8·10⁻⁵. [H₃O⁺] ≈ √(Ka·c) = √(1,8·10⁻⁶) = 1,3·10⁻³ M, y pH ≈ 2,9. Mucho menos ácido que un ácido fuerte de la misma concentración (pH 1).

## Neutralización y valoraciones
Un ácido y una base reaccionan dando una sal y agua:
$ HCl + NaOH → NaCl + H₂O
En una **valoración** se añade poco a poco una disolución de concentración conocida hasta neutralizar otra de concentración desconocida. Un **indicador** señala el final con un cambio de color: la fenolftaleína es incolora en medio ácido y rosa en medio básico. Para un ácido y una base que reaccionan mol a mol:
$ M ácido · V ácido = M base · V base
> Ejemplo: 25 mL de HCl se neutralizan con 20 mL de NaOH 0,1 M. M ácido = 0,1 · 20 / 25 = 0,08 M.
Las **disoluciones amortiguadoras** mantienen el pH casi constante aunque se añada algo de ácido o de base. La sangre es una de ellas.

## Reacciones redox
En una reacción **redox** hay transferencia de electrones:
- **Oxidación**: pérdida de electrones. El número de oxidación aumenta.
- **Reducción**: ganancia de electrones. El número de oxidación disminuye.
- El **oxidante** es quien provoca la oxidación de otro y, por tanto, se reduce. El **reductor** se oxida.

Las dos ocurren siempre a la vez.
> Ejemplo: Zn + Cu²⁺ → Zn²⁺ + Cu. El cinc pasa de 0 a +2: pierde dos electrones y se oxida (es el reductor). El ion cobre pasa de +2 a 0: se reduce (es el oxidante).
Son redox las combustiones, la corrosión de los metales, la respiración y la fotosíntesis.

## Pilas y electrólisis
En una **pila galvánica** la oxidación y la reducción ocurren en recipientes separados, y los electrones deben viajar por un cable: se obtiene corriente eléctrica a partir de una reacción espontánea.
- **Ánodo** (polo negativo): oxidación.
- **Cátodo** (polo positivo): reducción.
- El **puente salino** cierra el circuito dejando pasar iones.

El voltaje se calcula con los potenciales estándar de reducción:
$ E° pila = E° cátodo − E° ánodo
> Ejemplo: en la pila Daniell, con cinc (E° = −0,76 V) y cobre (E° = +0,34 V), E° = 0,34 − (−0,76) = 1,10 V.
La **electrólisis** es el proceso inverso: se gasta energía eléctrica para forzar una reacción no espontánea. Así se obtienen el aluminio, el cloro o el hidrógeno a partir del agua, y se recargan las baterías.
` },
  { id: 'estados', name: 'Estados de la materia, gases y disoluciones', sum: 'Sólidos, líquidos y gases; mezclas y concentración.', m: 'estados',
    match: /sólido a líquido|gas|hielo|disolución|molaridad|ebullición|evapora|sublimación|presión|kelvin/i,
    k: [['Teoría cinético-molecular', 'La materia está formada por partículas en movimiento continuo; a más temperatura, más agitación.'], ['Fusión y solidificación', 'Paso de sólido a líquido y a la inversa.'], ['Vaporización y condensación', 'Paso de líquido a gas y a la inversa.'], ['Sublimación', 'Paso directo de sólido a gas.'], ['Punto de ebullición', 'Temperatura a la que la presión de vapor del líquido iguala a la presión exterior.'], ['Ley de Boyle', 'A temperatura constante, P·V = constante.'], ['Ley de Charles', 'A presión constante, V/T = constante (T en kelvin).'], ['Ecuación de los gases ideales', 'P·V = n·R·T, con R = 0,082 atm·L/(mol·K).'], ['Volumen molar', 'Un mol de cualquier gas ideal ocupa 22,4 L a 0 °C y 1 atm.'], ['Presión parcial', 'La que ejercería un gas de una mezcla si ocupara él solo el recipiente; la total es la suma de todas.'], ['Mezcla homogénea y heterogénea', 'Homogénea: no se distinguen sus componentes (disolución). Heterogénea: sí se distinguen.'], ['Molaridad', 'M = moles de soluto / litros de disolución.'], ['Dilución', 'Al añadir disolvente los moles de soluto no cambian: M₁·V₁ = M₂·V₂.'], ['Solubilidad', 'Cantidad máxima de soluto que se disuelve en una cantidad de disolvente a una temperatura dada.']],
    notes: `
## El modelo cinético-molecular
Toda la materia está formada por partículas (átomos, moléculas o iones) en continuo movimiento, con fuerzas de atracción entre ellas. El estado en que se encuentra una sustancia depende del pulso entre esas fuerzas, que tienden a juntar las partículas, y la agitación térmica, que tiende a separarlas.
- **Sólido**: las fuerzas dominan. Las partículas vibran en posiciones fijas. Forma y volumen propios; apenas se comprime. Si las partículas están ordenadas es un sólido **cristalino** (sal, cuarzo); si no, **amorfo** (vidrio).
- **Líquido**: las partículas siguen juntas, pero se deslizan unas sobre otras. Volumen fijo y forma del recipiente; fluye.
- **Gas**: la agitación domina. Las partículas están muy separadas y se mueven libremente. Ocupa todo el recipiente y se comprime con facilidad.

Existe un cuarto estado, el **plasma**: un gas tan caliente que sus átomos han perdido electrones. Es el estado de las estrellas y de los rayos.

## Cambios de estado
- Sólido → líquido: **fusión**. Líquido → sólido: **solidificación**.
- Líquido → gas: **vaporización**. Gas → líquido: **condensación**.
- Sólido → gas: **sublimación** (hielo seco, naftalina). Gas → sólido: sublimación inversa (escarcha).

La vaporización puede ocurrir de dos formas. La **evaporación** se produce solo en la superficie y a cualquier temperatura: así se seca la ropa. La **ebullición** ocurre en todo el líquido, con burbujas, a una temperatura fija.

Durante un cambio de estado **la temperatura permanece constante**, aunque se siga calentando: toda la energía se emplea en vencer las fuerzas entre partículas. Es el calor latente. Por eso una curva de calentamiento tiene tramos inclinados (la sustancia se calienta) y tramos horizontales (cambia de estado).

## Presión de vapor y punto de ebullición
Un líquido hierve cuando su **presión de vapor** iguala a la presión exterior. Por eso el punto de ebullición depende de la presión:
- A 1 atm el agua hierve a 100 °C.
- En la cima del Everest, con un tercio de la presión, hierve a unos 71 °C y los alimentos tardan mucho más en cocerse.
- En una olla a presión hierve a unos 120 °C y la comida se hace antes.

## El caso especial del agua
Los **puentes de hidrógeno** entre sus moléculas dan al agua propiedades poco comunes:
- Puntos de fusión y ebullición muy altos para una molécula tan pequeña.
- En el hielo, cada molécula se une a otras cuatro formando una red abierta. Por eso el hielo es **menos denso** que el agua líquida y flota. La densidad máxima se alcanza a 4 °C, lo que permite que los lagos se hielen solo por arriba y haya vida debajo.
- Un calor específico muy alto: el agua tarda en calentarse y en enfriarse, y así regula el clima.
- Disuelve muchísimas sustancias iónicas y polares.

## Los gases: magnitudes
El estado de un gas se describe con cuatro magnitudes:
- **Presión** (P): debida a los choques de las partículas contra las paredes. 1 atm = 760 mmHg = 101 325 Pa.
- **Volumen** (V): el del recipiente, en litros.
- **Temperatura** (T): siempre en **kelvin**. T(K) = t(°C) + 273.
- **Cantidad de gas** (n): en moles.

## Las leyes de los gases
- **Boyle**: a T constante, P·V = constante. Si el volumen se reduce a la mitad, la presión se duplica.
- **Charles**: a P constante, V/T = constante. Un gas se dilata al calentarlo.
- **Gay-Lussac**: a V constante, P/T = constante. Por eso no hay que calentar un bote de aerosol.
- **Avogadro**: a P y T constantes, volúmenes iguales de gases distintos contienen el mismo número de moléculas.

Las tres primeras se combinan en una sola expresión para una cantidad fija de gas:
$ P₁·V₁ / T₁ = P₂·V₂ / T₂
> Ejemplo (Boyle): 2 L de aire a 1 atm se comprimen hasta 0,5 L. P₂ = 1 · 2 / 0,5 = 4 atm.
> Ejemplo (Charles): un globo de 3 L a 300 K se calienta hasta 400 K. V₂ = 3 · 400 / 300 = 4 L.

## La ecuación de los gases ideales
$ P · V = n · R · T      (R = 0,082 atm·L/(mol·K))
> Ejemplo: ¿qué volumen ocupa 1 mol de gas a 0 °C y 1 atm? V = n·R·T/P = 1 · 0,082 · 273 / 1 = 22,4 L. Es el **volumen molar** en condiciones normales, el mismo para cualquier gas.
De ella se obtiene también la densidad de un gas, d = P·M / (R·T): los gases de mayor masa molar son más densos. El helio (4 g/mol) flota en el aire (unos 29 g/mol); el CO₂ (44 g/mol) se acumula a ras de suelo.

Un gas **ideal** es un modelo: partículas sin volumen propio y sin fuerzas entre ellas. Los gases reales se le parecen a presiones bajas y temperaturas altas, y se apartan cuando están muy comprimidos o cerca de licuarse.

## Mezclas de gases
En una mezcla, cada gas se comporta como si estuviera solo. Su **presión parcial** es la que ejercería si ocupara él solo todo el recipiente, y la presión total es la suma de las parciales (**ley de Dalton**).
> Ejemplo: el aire tiene un 21 % de oxígeno. A 1 atm, la presión parcial del oxígeno es 0,21 atm.

## Sustancias puras y mezclas
- **Sustancia pura**: composición fija y propiedades constantes. Puede ser un **elemento** (un solo tipo de átomo: oro, oxígeno) o un **compuesto** (varios elementos unidos en proporción fija: agua, sal).
- **Mezcla**: varias sustancias que conservan sus propiedades. **Heterogénea** si se distinguen sus componentes (granito, agua con aceite) y **homogénea** si no (aire, agua salada, bronce).

Las mezclas se separan por métodos físicos:
- **Filtración**: sólido no disuelto y líquido.
- **Decantación**: líquidos que no se mezclan, de distinta densidad.
- **Destilación**: líquidos con distinto punto de ebullición.
- **Cristalización**: sólido disuelto, evaporando el disolvente.
- **Cromatografía**: componentes que avanzan a distinta velocidad sobre un soporte.

## Disoluciones
Una disolución es una mezcla homogénea. El componente mayoritario es el **disolvente** y el minoritario, el **soluto**. La **concentración** indica cuánto soluto hay:
- **Porcentaje en masa**: gramos de soluto por cada 100 g de disolución.
- **Gramos por litro** (g/L).
- **Molaridad**, la más usada en química:
$ M = moles de soluto / litros de disolución
> Ejemplo: se disuelven 20 g de NaOH (40 g/mol) hasta tener 500 mL de disolución. Son 20/40 = 0,5 mol en 0,5 L: la disolución es 1 M.
Al **diluir** se añade disolvente; los moles de soluto no cambian:
$ M₁ · V₁ = M₂ · V₂
> Ejemplo: 100 mL de disolución 2 M se llevan hasta 400 mL. M₂ = 2 · 100 / 400 = 0,5 M.

## Solubilidad
La **solubilidad** es la máxima cantidad de soluto que admite una cantidad de disolvente a una temperatura dada. Una disolución que la ha alcanzado está **saturada**.
- La solubilidad de casi todos los sólidos aumenta con la temperatura.
- La de los gases disminuye con la temperatura y aumenta con la presión: un refresco caliente pierde el gas, y al abrirlo (baja la presión) burbujea.
- «Semejante disuelve a semejante»: los disolventes polares, como el agua, disuelven sustancias iónicas y polares; los apolares, como la gasolina, disuelven grasas.

Añadir un soluto cambia algunas propiedades del disolvente: baja su punto de congelación (por eso se echa sal en las carreteras heladas) y sube su punto de ebullición.
` },
  { id: 'reacciones', name: 'Reacciones y estequiometría', sum: 'El mol, ajuste de ecuaciones y cálculos con reacciones.',
    match: /Ajusta|moles|\bmol(?![a-zé])|Avogadro|fórmula del agua|masa molar|reactivo|rendimiento|combustión|gramos|coeficiente/i,
    k: [['Cambio químico', 'Transformación en la que unas sustancias se convierten en otras distintas.'], ['Ley de conservación de la masa', 'La masa de los reactivos es igual a la de los productos (Lavoisier).'], ['Ley de las proporciones definidas', 'Un compuesto tiene siempre los mismos elementos en la misma proporción en masa (Proust).'], ['Mol', 'Cantidad de sustancia que contiene 6,022·10²³ partículas.'], ['Masa molar', 'Masa de un mol de sustancia, en g/mol; coincide numéricamente con la masa atómica o molecular.'], ['Paso de masa a moles', 'n = masa (g) / masa molar (g/mol)'], ['Fórmula empírica y molecular', 'La empírica da la proporción más sencilla de átomos; la molecular, el número real de cada uno.'], ['Coeficientes estequiométricos', 'Números que ajustan la ecuación; indican la proporción en moles entre reactivos y productos.'], ['Reactivo limitante', 'El que se agota primero y determina cuánto producto se forma.'], ['Rendimiento', '(cantidad real / cantidad teórica) × 100'], ['Pureza', 'Porcentaje de la muestra que es realmente la sustancia que reacciona.'], ['Combustión', 'Reacción con oxígeno que desprende calor; en los hidrocarburos produce CO₂ y H₂O.']],
    notes: `
## Cambios físicos y cambios químicos
En un **cambio físico** las sustancias siguen siendo las mismas: fundir hielo, disolver azúcar, romper un vidrio. En un **cambio químico** o reacción, unas sustancias (**reactivos**) se transforman en otras distintas (**productos**) con propiedades diferentes: quemar papel, oxidarse el hierro, cocer un huevo.

Señales habituales de que ha habido reacción: cambio de color, desprendimiento de un gas, formación de un sólido (precipitado) o intercambio notable de calor o luz.

A escala atómica, una reacción es una **reorganización de átomos**: se rompen unos enlaces y se forman otros. Los átomos no se crean, no se destruyen ni cambian de elemento.

## Las leyes de las reacciones
- **Conservación de la masa** (Lavoisier, 1789): la masa total de los reactivos es igual a la de los productos. Es consecuencia directa de que los átomos se conservan.
- **Proporciones definidas** (Proust): un compuesto tiene siempre los mismos elementos en la misma proporción en masa. El agua tiene siempre 8 g de oxígeno por cada gramo de hidrógeno, venga de donde venga.
- **Proporciones múltiples** (Dalton): si dos elementos forman varios compuestos, lo hacen en proporciones sencillas (CO y CO₂).

Estas leyes llevaron a Dalton a proponer que la materia está formada por átomos.

## Ecuaciones químicas y su ajuste
Una ecuación química representa la reacción con fórmulas. Está **ajustada** cuando hay el mismo número de átomos de cada elemento a ambos lados. Para ajustar se colocan **coeficientes** delante de las fórmulas; los subíndices no se tocan nunca, porque cambiarían la sustancia.
> Ejemplo: H₂ + O₂ → H₂O no está ajustada (2 oxígenos a la izquierda, 1 a la derecha). Ajustada queda: 2 H₂ + O₂ → 2 H₂O.
Un orden que suele funcionar: primero los metales, luego los no metales, después el hidrógeno y, por último, el oxígeno.
> Ejemplo: C₃H₈ + O₂ → CO₂ + H₂O. Tres carbonos: 3 CO₂. Ocho hidrógenos: 4 H₂O. Oxígenos a la derecha: 3·2 + 4 = 10, luego 5 O₂. Resultado: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.

## El mol
Los átomos son demasiado pequeños para contarlos de uno en uno, así que se cuentan por paquetes enormes. El **mol** es la cantidad de sustancia que contiene el **número de Avogadro** de partículas:
$ 1 mol = 6,022 · 10²³ partículas
Es un número difícil de imaginar: un mol de granos de arena cubriría toda la Tierra con una capa de varios metros.

La **masa molar** es la masa de un mol y coincide en número con la masa atómica o molecular, expresada en g/mol. Se calcula sumando las masas atómicas de la fórmula:
- H₂O: 2·1 + 16 = 18 g/mol.
- CO₂: 12 + 2·16 = 44 g/mol.
- NaCl: 23 + 35,5 = 58,5 g/mol.

El mol es el puente entre la masa que medimos en la balanza y el número de partículas:
$ n = masa / masa molar
$ número de partículas = n · 6,022·10²³
> Ejemplo: 88 g de CO₂ son 88/44 = 2 mol, que contienen 2 · 6,022·10²³ = 1,2·10²⁴ moléculas.

## Composición y fórmulas
La **composición centesimal** es el porcentaje en masa de cada elemento en un compuesto.
> Ejemplo: en el agua, el hidrógeno supone 2/18 = 11,1 % y el oxígeno 16/18 = 88,9 %.
- La **fórmula empírica** da la proporción más sencilla entre los átomos.
- La **fórmula molecular** indica cuántos átomos de cada tipo tiene realmente la molécula.
> Ejemplo: la glucosa tiene fórmula molecular C₆H₁₂O₆ y fórmula empírica CH₂O.

## Cálculos estequiométricos
Los coeficientes de la ecuación ajustada indican la proporción **en moles** en que reaccionan y se forman las sustancias. No indican gramos. El método es siempre el mismo:
- Escribir y ajustar la ecuación.
- Pasar los datos a moles.
- Aplicar la proporción entre los coeficientes.
- Pasar el resultado a la unidad que se pide.
> Ejemplo: ¿cuántos gramos de agua se obtienen con 4 g de H₂? En 2 H₂ + O₂ → 2 H₂O, son 4/2 = 2 mol de H₂. La proporción H₂ : H₂O es 2 : 2, así que se forman 2 mol de agua, es decir, 2·18 = 36 g.
> Ejemplo: se queman 16 g de metano, CH₄ + 2 O₂ → CO₂ + 2 H₂O. Son 16/16 = 1 mol de CH₄, que produce 1 mol de CO₂: 44 g.

Si en la reacción intervienen gases o disoluciones, los moles se obtienen de otra manera:
- **Gases**: con P·V = n·R·T, o sabiendo que un mol ocupa 22,4 L a 0 °C y 1 atm.
- **Disoluciones**: n = molaridad · volumen en litros.

## Reactivo limitante
Cuando los reactivos no están en la proporción exacta, uno se agota antes: es el **reactivo limitante**, y de él depende cuánto producto se forma. El otro queda **en exceso**. Para identificarlo se compara, para cada reactivo, los moles disponibles con los que exige la ecuación.
> Ejemplo: se mezclan 4 g de H₂ (2 mol) con 16 g de O₂ (0,5 mol). Según 2 H₂ + O₂ → 2 H₂O, 0,5 mol de O₂ solo consumen 1 mol de H₂. El O₂ es el limitante: se forma 1 mol de agua (18 g) y sobra 1 mol de H₂ (2 g).
Ocurre igual que al hacer bocadillos: con 10 rebanadas de pan y 3 lonchas de queso solo salen 3, y sobra pan.

## Rendimiento y pureza
En la práctica se obtiene menos producto del calculado: la reacción no se completa, hay reacciones secundarias o se pierde algo al recogerlo.
$ Rendimiento = (cantidad real / cantidad teórica) · 100
> Ejemplo: si el cálculo predice 18 g de agua y se recogen 15 g, el rendimiento es 15/18 · 100 = 83 %.
Los reactivos tampoco suelen ser puros. La **pureza** es el porcentaje de la muestra que corresponde a la sustancia que reacciona: 50 g de caliza del 80 % de pureza contienen solo 40 g de carbonato de calcio.

## Tipos de reacciones
- **Síntesis**: A + B → AB. Ejemplo: 2 Mg + O₂ → 2 MgO.
- **Descomposición**: AB → A + B. Ejemplo: CaCO₃ → CaO + CO₂.
- **Desplazamiento**: un elemento sustituye a otro en un compuesto. Ejemplo: Zn + 2 HCl → ZnCl₂ + H₂.
- **Combustión**: una sustancia reacciona con oxígeno y desprende calor. Los hidrocarburos dan CO₂ y H₂O; si falta oxígeno se forma CO, muy tóxico.
- **Neutralización**: ácido + base → sal + agua.
- **Precipitación**: al mezclar dos disoluciones se forma un sólido insoluble.
- **Redox**: hay transferencia de electrones.
` },
  { id: 'enlace', name: 'Enlace químico y geometría', sum: 'Enlace iónico, covalente y metálico; forma y polaridad de las moléculas.', m: 'moleculas',
    match: /enlace|geometría|angular|hibridación|CO₂|electronegatividad|sal común|iónic|covalente|metálic|polar|puente de hidrógeno/i,
    k: [['Regla del octeto', 'Los átomos tienden a completar ocho electrones en su capa de valencia.'], ['Estructura de Lewis', 'Representación de los electrones de valencia con puntos y de los pares compartidos con rayas.'], ['Enlace iónico', 'Transferencia de electrones entre un metal y un no metal; forma redes cristalinas.'], ['Enlace covalente', 'Compartición de pares de electrones entre no metales.'], ['Enlace metálico', 'Cationes metálicos inmersos en un «mar» de electrones deslocalizados.'], ['Electronegatividad', 'Tendencia de un átomo a atraer los electrones de un enlace.'], ['Enlace polar', 'Enlace covalente en el que un átomo atrae más los electrones y aparecen cargas parciales.'], ['Red covalente', 'Sólido en el que todos los átomos están unidos por enlaces covalentes (diamante, cuarzo).'], ['Teoría RPECV', 'Los pares de electrones se colocan lo más lejos posible entre sí, y eso fija la geometría.'], ['Hibridación', 'Mezcla de orbitales atómicos: sp³ (tetraédrica), sp² (plana, 120°) y sp (lineal).'], ['Enlaces σ y π', 'σ: solapamiento frontal, presente en todo enlace. π: solapamiento lateral, en dobles y triples.'], ['Fuerzas de London', 'Atracciones débiles entre dipolos instantáneos; existen en todas las moléculas.'], ['Puente de hidrógeno', 'Atracción entre un H unido a N, O o F y otro átomo muy electronegativo.']],
    notes: `
## Por qué se unen los átomos
Casi ningún elemento se encuentra en la naturaleza como átomos sueltos. Los átomos se enlazan porque juntos tienen **menos energía**, es decir, son más estables. La excepción son los gases nobles, que ya tienen su última capa completa.

En general, los átomos tienden a adquirir esa configuración de gas noble, con ocho electrones de valencia: es la **regla del octeto**. Lo consiguen cediendo, ganando o compartiendo electrones, y de ahí salen los tres tipos de enlace. El hidrógeno se conforma con dos electrones, y hay excepciones (el boro con seis, el azufre o el fósforo con más de ocho).

Las **estructuras de Lewis** representan los electrones de valencia con puntos alrededor del símbolo, y cada par compartido con una raya.

## Qué tipo de enlace se forma
Depende de la **electronegatividad**, la tendencia de cada átomo a atraer los electrones del enlace:
- Metal + no metal (diferencia grande, por encima de 1,7 aproximadamente): enlace **iónico**.
- No metal + no metal (diferencia pequeña o nula): enlace **covalente**.
- Metal + metal: enlace **metálico**.

## Enlace iónico
El metal cede electrones y se convierte en un **catión**; el no metal los gana y se convierte en un **anión**. Los iones de signo contrario se atraen en todas direcciones y forman una **red cristalina**, no moléculas sueltas. La fórmula (NaCl) solo indica la proporción entre iones.
> Ejemplo: el sodio (1 electrón de valencia) cede su electrón al cloro (7). Se forman Na⁺ y Cl⁻, ambos con octeto completo. En el cristal, cada Na⁺ está rodeado por 6 Cl⁻ y viceversa.
Propiedades de los compuestos iónicos:
- Sólidos a temperatura ambiente, con puntos de fusión altos (el NaCl funde a 801 °C).
- Duros pero **frágiles**: un golpe desplaza una capa, enfrenta iones del mismo signo y el cristal se rompe.
- Muchos son solubles en agua.
- No conducen la electricidad en estado sólido, porque los iones están fijos, pero sí fundidos o disueltos.

## Enlace covalente
Dos no metales **comparten** pares de electrones. Según los pares compartidos el enlace es:
- **Simple** (un par): H–H, Cl–Cl.
- **Doble** (dos pares): O=O.
- **Triple** (tres pares): N≡N. Es más corto y más fuerte, y por eso el nitrógeno del aire es tan poco reactivo.

En el enlace **dativo** o coordinado, los dos electrones del par los aporta el mismo átomo, como ocurre en el ion amonio, NH₄⁺.

Los enlaces covalentes dan lugar a dos tipos de sustancias muy distintos:
- **Sustancias moleculares**: moléculas independientes, unidas entre sí por fuerzas débiles. Puntos de fusión y ebullición bajos; muchas son gases o líquidos (O₂, agua, metano). No conducen la electricidad.
- **Redes covalentes**: todos los átomos están unidos por enlaces covalentes en una red gigante. Son durísimas y funden a temperaturas altísimas: diamante, cuarzo (SiO₂).
> El diamante y el grafito son carbono puro. En el diamante cada átomo se une a otros cuatro en una red tridimensional. En el grafito se une a tres, formando láminas que deslizan entre sí; por eso es blando, sirve para escribir y conduce la electricidad.

## Enlace metálico
Los átomos de un metal ceden sus electrones de valencia a una nube común, un «mar» de electrones deslocalizados que se mueve entre los cationes. Explica las propiedades de los metales:
- Conducen muy bien la electricidad y el calor, gracias a esos electrones libres.
- Son **dúctiles** y **maleables**: las capas de cationes pueden deslizar sin que se rompa el enlace.
- Tienen brillo y, en general, puntos de fusión altos.

## Polaridad del enlace
Si los dos átomos de un enlace covalente son iguales, comparten los electrones por igual: el enlace es **apolar** (H₂, Cl₂). Si son distintos, el más electronegativo atrae más los electrones y aparecen cargas parciales: el enlace es **polar** (H–Cl, O–H). Cuanto mayor es la diferencia de electronegatividad, más polar es el enlace, hasta llegar al caso extremo del enlace iónico.

## Geometría molecular
La forma de una molécula se predice con la teoría **RPECV** (repulsión de los pares de electrones de la capa de valencia): los pares de electrones que rodean al átomo central se repelen y se colocan lo más lejos posible entre sí. Cuentan tanto los pares enlazantes como los solitarios, y un enlace doble o triple cuenta como un solo grupo.
- 2 grupos: **lineal**, 180° (CO₂, BeCl₂).
- 3 grupos: **trigonal plana**, 120° (BF₃).
- 4 grupos, todos enlazantes: **tetraédrica**, 109,5° (CH₄).
- 3 enlazantes + 1 solitario: **piramidal trigonal**, 107° (NH₃).
- 2 enlazantes + 2 solitarios: **angular**, 104,5° (H₂O).

Los pares solitarios repelen algo más que los enlazantes, y por eso el ángulo se cierra al pasar del metano al amoníaco y al agua.

## Hibridación
Para explicar esas geometrías, la teoría del enlace de valencia propone que los orbitales del átomo central se mezclan y forman **orbitales híbridos**:
- **sp³**: cuatro orbitales hacia los vértices de un tetraedro. Enlaces simples (metano, etano).
- **sp²**: tres orbitales en un plano, a 120°. Aparece con enlaces dobles (eteno) y en el benceno.
- **sp**: dos orbitales en línea, a 180°. Aparece con enlaces triples (etino).

El solapamiento frontal de orbitales forma un enlace **σ**; el lateral, entre orbitales p, un enlace **π**. Un enlace doble es un σ más un π, y uno triple, un σ más dos π.

## Polaridad de las moléculas
Una molécula con enlaces polares puede ser apolar si su geometría hace que los dipolos se anulen.
- El **CO₂** es lineal: los dos dipolos C=O son iguales y opuestos. Molécula apolar.
- El **agua** es angular: los dipolos no se anulan. Molécula polar.
- El **metano** es tetraédrico y simétrico: apolar. El **amoníaco**, piramidal: polar.

La polaridad determina qué se disuelve en qué: el agua, polar, disuelve sales y azúcar, pero no el aceite.

## Fuerzas intermoleculares
Son las atracciones entre moléculas. Son mucho más débiles que los enlaces, pero de ellas dependen los puntos de fusión y ebullición de las sustancias moleculares.
- **Fuerzas de London** (dispersión): existen en todas las moléculas, también en las apolares, y crecen con el tamaño de la molécula.
- **Dipolo-dipolo**: entre moléculas polares.
- **Puentes de hidrógeno**: las más intensas. Aparecen cuando un hidrógeno está unido a N, O o F.
> Ejemplo: el agua (18 g/mol) hierve a 100 °C, mientras que el H₂S (34 g/mol) lo hace a −60 °C. La diferencia se debe a los puentes de hidrógeno del agua. También mantienen unida la doble hélice del ADN.

## Resumen de propiedades
- **Iónicas**: sólidos duros y frágiles, fusión alta, conducen fundidas o disueltas.
- **Moleculares**: fusión baja, blandas, no conducen.
- **Redes covalentes**: durísimas, fusión altísima, no conducen (salvo el grafito).
- **Metales**: conducen siempre, dúctiles y maleables.
` },
  { id: 'atomo', name: 'Estructura atómica y tabla periódica', sum: 'Partículas, modelos atómicos, configuración electrónica y propiedades periódicas.', m: 'tabla',
    match: /./,
    k: [['Número atómico (Z)', 'Número de protones; identifica al elemento.'], ['Número másico (A)', 'Protones + neutrones.'], ['Isótopos', 'Átomos del mismo elemento con distinto número de neutrones.'], ['Ion', 'Átomo con carga: catión (pierde electrones) o anión (los gana).'], ['Modelo de Rutherford', 'Núcleo diminuto, denso y positivo, con los electrones girando alrededor; el átomo es casi todo vacío.'], ['Orbital', 'Región del espacio donde es muy probable encontrar al electrón.'], ['Números cuánticos', 'n (nivel), l (forma: s, p, d, f), m (orientación) y s (espín).'], ['Principio de exclusión de Pauli', 'En un orbital caben como máximo dos electrones, con espines opuestos.'], ['Regla de Hund', 'En orbitales de igual energía, los electrones se colocan primero desapareados.'], ['Configuración electrónica', 'Distribución de los electrones en orbitales: 1s² 2s² 2p⁶ 3s²…'], ['Electrones de valencia', 'Los de la última capa; determinan las propiedades químicas.'], ['Grupo y periodo', 'Grupo: columna, mismos electrones de valencia. Periodo: fila, mismo número de capas.'], ['Energía de ionización', 'Energía necesaria para arrancar un electrón a un átomo en estado gaseoso.']],
    notes: `
## De qué está hecho un átomo
El átomo es la unidad más pequeña de un elemento que conserva sus propiedades. Tiene dos zonas:
- El **núcleo**, en el centro, con **protones** (carga +1, masa ≈ 1 u) y **neutrones** (sin carga, masa ≈ 1 u).
- La **corteza**, con **electrones** (carga −1, masa unas 1836 veces menor que la del protón).

Las proporciones son sorprendentes. Un átomo mide del orden de 10⁻¹⁰ m, y su núcleo es unas 100 000 veces más pequeño: si el átomo fuera un estadio de fútbol, el núcleo sería una canica en el centro. Sin embargo, el núcleo concentra más del 99,9 % de la masa. El átomo es, casi todo, espacio vacío.

## Número atómico, número másico e isótopos
- El **número atómico** Z es el número de protones. Identifica al elemento: todo átomo con 6 protones es carbono.
- El **número másico** A es la suma de protones y neutrones.
$ neutrones = A − Z
> Ejemplo: un átomo de cloro con Z = 17 y A = 35 tiene 17 protones, 35 − 17 = 18 neutrones y, si es neutro, 17 electrones.
Los **isótopos** son átomos del mismo elemento (igual Z) con distinto número de neutrones (distinto A). Tienen las mismas propiedades químicas. El hidrógeno tiene tres: protio, deuterio y tritio. El carbono-14, radiactivo, se usa para datar restos arqueológicos.

La **masa atómica** que figura en la tabla periódica es la media ponderada de los isótopos naturales.
> Ejemplo: el cloro es un 75,8 % de cloro-35 y un 24,2 % de cloro-37. Masa atómica = 35·0,758 + 37·0,242 ≈ 35,5 u.

## Iones
Un átomo neutro tiene tantos electrones como protones. Si pierde o gana electrones se convierte en un **ion**; el núcleo no cambia.
- **Catión**: ha perdido electrones y tiene carga positiva (Na⁺, Ca²⁺). Es típico de los metales.
- **Anión**: ha ganado electrones y tiene carga negativa (Cl⁻, O²⁻). Es típico de los no metales.
> Ejemplo: el calcio (Z = 20) pierde dos electrones y forma Ca²⁺, con 20 protones y 18 electrones.

## La evolución del modelo atómico
Cada modelo se abandonó cuando un experimento lo contradijo:
- **Dalton** (1803): el átomo es una esfera maciza e indivisible. Explica las leyes de las reacciones.
- **Thomson** (1897): descubre el electrón con los rayos catódicos. Propone una esfera positiva con electrones incrustados, el «pudin de pasas».
- **Rutherford** (1911): bombardea una lámina de oro con partículas alfa. Casi todas la atraviesan, pero unas pocas rebotan. Conclusión: la carga positiva y la masa están en un **núcleo** diminuto, y el resto es vacío.
- **Bohr** (1913): los electrones giran en órbitas de energía fija y emiten o absorben luz al saltar de una a otra. Explica el espectro del hidrógeno.
- **Modelo cuántico** (Schrödinger, Heisenberg, hacia 1926): no se puede conocer la trayectoria del electrón. Se habla de **orbitales**, regiones donde es muy probable encontrarlo.


## Números cuánticos y orbitales
El estado de cada electrón se describe con cuatro números cuánticos:
- **n** (principal): nivel de energía y tamaño del orbital. Vale 1, 2, 3…
- **l** (secundario): forma del orbital. Va de 0 a n − 1. l = 0 es un orbital **s** (esférico); l = 1, **p** (dos lóbulos); l = 2, **d**; l = 3, **f**.
- **m** (magnético): orientación en el espacio. Va de −l a +l.
- **s** (espín): sentido de giro del electrón, +½ o −½.

De ahí salen las capacidades:
- Un subnivel s tiene 1 orbital (2 electrones); un p, 3 orbitales (6); un d, 5 orbitales (10); un f, 7 orbitales (14).
- En el nivel n caben como máximo 2·n² electrones: 2, 8, 18, 32.

## Configuración electrónica
Es la distribución de los electrones en los orbitales. Sigue tres reglas:
- **Principio de mínima energía**: se llenan primero los orbitales de menor energía.
- **Principio de exclusión de Pauli**: en cada orbital caben dos electrones como máximo, con espines opuestos.
- **Regla de Hund**: en orbitales de igual energía (los tres p, por ejemplo), los electrones se colocan primero uno en cada orbital.

El orden de llenado lo da el diagrama de Moeller:
$ 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s
> Ejemplo: sodio (Z = 11): 1s² 2s² 2p⁶ 3s¹. Tiene un electrón de valencia, que pierde con facilidad para formar Na⁺.
> Ejemplo: cloro (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵. Tiene siete electrones de valencia; le falta uno para completar la capa y tiende a formar Cl⁻.
> Ejemplo: hierro (Z = 26): [Ar] 4s² 3d⁶. Se abrevia escribiendo entre corchetes el gas noble anterior.
Los **electrones de valencia**, los de la última capa, son los que intervienen en los enlaces y determinan el comportamiento químico.

## La tabla periódica
Mendeléiev ordenó en 1869 los elementos conocidos por su masa y los agrupó por propiedades parecidas. Dejó huecos para elementos aún no descubiertos y predijo sus propiedades con acierto. Hoy los 118 elementos se ordenan por **número atómico** creciente.
- Las 18 columnas son los **grupos**. Los elementos de un grupo tienen la misma configuración de valencia y, por eso, propiedades químicas parecidas.
- Las 7 filas son los **periodos**. El número del periodo indica cuántas capas tiene el átomo.

Grupos con nombre propio:
- **Grupo 1, alcalinos** (Li, Na, K): un electrón de valencia; metales blandos y muy reactivos.
- **Grupo 2, alcalinotérreos** (Mg, Ca).
- **Grupos 3 a 12, metales de transición** (Fe, Cu, Au).
- **Grupo 17, halógenos** (F, Cl, Br): siete electrones de valencia; no metales muy reactivos.
- **Grupo 18, gases nobles** (He, Ne, Ar): capa completa; apenas reaccionan.

La mayoría de los elementos son **metales**, situados a la izquierda y en el centro. Los **no metales** están arriba a la derecha, y entre ambos, los **semimetales** (silicio, germanio). La tabla se divide además en bloques s, p, d y f según el orbital que se está llenando.

## Propiedades periódicas
Varían de forma regular a lo largo de la tabla. La clave es la atracción del núcleo sobre los electrones externos: al avanzar en un periodo aumenta la carga nuclear sin añadir capas; al bajar en un grupo se añaden capas, que alejan y apantallan a los electrones externos.
- **Radio atómico**: aumenta al bajar en un grupo y disminuye hacia la derecha en un periodo.
- **Energía de ionización**: energía necesaria para arrancar un electrón. Aumenta hacia la derecha y hacia arriba. Es baja en los metales alcalinos y muy alta en los gases nobles.
- **Afinidad electrónica**: energía que se desprende cuando el átomo gana un electrón. Es máxima en los halógenos.
- **Electronegatividad**: tendencia a atraer los electrones de un enlace. Aumenta hacia la derecha y hacia arriba; el flúor es el más electronegativo.
- **Carácter metálico**: tendencia a perder electrones. Aumenta hacia la izquierda y hacia abajo.
> Un catión es siempre más pequeño que su átomo neutro (ha perdido electrones y a veces una capa entera), y un anión, más grande.
` },
];

TOPICS.quimica.forEach(function (t, i, a) { t.n = a.length - i; });
