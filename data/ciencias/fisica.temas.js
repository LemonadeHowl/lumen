// Índice de temas de Física. Mismo formato que biologia.temas.js: apuntes (notes), conceptos clave que pasan
// a flashcards (k), maqueta 3D relacionada (m) y una expresión (match) que reparte las preguntas del banco.
// Los temas se comprueban en este orden y el último recoge el resto; n = orden en que se muestran.
window.TOPICS = window.TOPICS || {};
TOPICS.fisica = [
  { id: 'moderna', name: 'Física moderna', sum: 'Cuántica, relatividad y física nuclear: los límites de la física clásica.', m: 'agujero',
    match: /Heisenberg|relativ|fotón|fotoeléctrico|De Broglie|Planck|Lorentz|m·c²|Bohr|radiactiv|semivida|fisión|fusión nuclear/i,
    k: [['Cuanto de energía', 'E = h·f: la energía de la radiación se intercambia en paquetes indivisibles.'], ['Fotón', 'Partícula de luz, sin masa, con energía E = h·f y momento p = h/λ.'], ['Efecto fotoeléctrico', 'La luz arranca electrones de un metal solo si su frecuencia supera un umbral: Ec máx = h·f − W₀.'], ['Modelo de Bohr', 'El electrón solo ocupa niveles de energía permitidos; al saltar entre ellos emite o absorbe un fotón.'], ['Dualidad onda-corpúsculo', 'Luz y materia se comportan como onda o como partícula según el experimento; λ = h/p.'], ['Principio de incertidumbre', 'Δx·Δp ≥ ħ/2: posición y momento no pueden conocerse a la vez con precisión arbitraria.'], ['Orbital', 'Región del espacio donde es más probable encontrar al electrón.'], ['Postulados de la relatividad especial', 'Las leyes físicas son iguales en todos los sistemas inerciales y c es la misma para todos los observadores.'], ['Factor de Lorentz', 'γ = 1 / √(1 − v²/c²); vale 1 en reposo y crece sin límite al acercarse a c.'], ['Dilatación del tiempo', 'Un reloj en movimiento marca el tiempo más despacio: Δt = γ·Δt₀.'], ['Equivalencia masa-energía', 'E = m·c²: la masa es una forma muy concentrada de energía.'], ['Semivida', 'Tiempo que tarda en desintegrarse la mitad de los núcleos de una muestra radiactiva.'], ['Fisión y fusión', 'Fisión: un núcleo pesado se parte. Fusión: dos núcleos ligeros se unen. Ambas liberan energía.']],
    notes: `
## Por qué hizo falta una física nueva
A finales del siglo XIX la física parecía casi terminada. La **mecánica de Newton** explicaba el movimiento de los cuerpos y el **electromagnetismo de Maxwell**, la luz, la electricidad y el magnetismo. Pero quedaban algunos experimentos que no encajaban, y resultaron ser grietas profundas. La física clásica fallaba en dos terrenos:
- **Lo muy pequeño** (átomos y partículas): de ahí nació la **física cuántica**.
- **Lo muy rápido** (velocidades cercanas a la de la luz) y lo muy masivo: de ahí nació la **relatividad**.

La física clásica no quedó anulada: sigue siendo una aproximación excelente para objetos cotidianos. La física moderna la contiene como caso límite.

## Planck y la cuantización de la energía
Un cuerpo caliente emite radiación: un hierro al rojo, el filamento de una bombilla, el Sol. La teoría clásica predecía que debía emitir una cantidad infinita de energía en el ultravioleta, algo absurdo que se llamó **catástrofe ultravioleta**. En 1900 Max Planck resolvió el problema con una hipótesis que él mismo consideraba un truco matemático: la energía no se intercambia de forma continua, sino en paquetes o **cuantos**.
$ E = h · f      (h = 6,63·10⁻³⁴ J·s)
La constante de Planck h es diminuta, y por eso a escala humana la energía parece continua, igual que la arena parece lisa vista de lejos.

## El efecto fotoeléctrico
Al iluminar un metal, este puede emitir electrones. Los experimentos mostraban tres hechos que la teoría ondulatoria no explicaba:
- Por debajo de una **frecuencia umbral** no sale ningún electrón, por intensa que sea la luz.
- Por encima del umbral, la emisión es instantánea.
- La energía de los electrones depende de la frecuencia de la luz, no de su intensidad.

Einstein lo explicó en 1905: la luz está formada por partículas, los **fotones**, cada uno con energía h·f. Un fotón cede toda su energía a un solo electrón. Si esa energía supera el **trabajo de extracción** W₀ del metal, el electrón escapa:
$ Ec máxima = h·f − W₀
Más intensidad significa más fotones y, por tanto, más electrones, pero no electrones más rápidos.
> Ejemplo: luz violeta de 400 nm tiene f = c/λ = 7,5·10¹⁴ Hz y sus fotones llevan E = h·f ≈ 5,0·10⁻¹⁹ J (3,1 eV). El sodio tiene W₀ ≈ 2,3 eV, así que los electrones salen con hasta 0,8 eV. Con luz roja de 700 nm (1,8 eV) no sale ninguno.
Es el principio de las células solares y de los sensores de las cámaras.

## El átomo de Bohr y los espectros
Cada elemento, al calentarse, emite luz solo de ciertos colores: su **espectro de emisión**, una especie de huella dactilar. Niels Bohr lo explicó en 1913 proponiendo que el electrón del hidrógeno solo puede estar en ciertos **niveles de energía**:
$ Eₙ = −13,6 eV / n²      (n = 1, 2, 3…)
Cuando el electrón baja de un nivel a otro inferior, emite un fotón cuya energía es exactamente la diferencia entre ambos. Para subir, debe absorber un fotón con esa misma energía.
> Ejemplo: el salto de n = 3 a n = 2 libera 1,89 eV, que corresponde a luz roja de 656 nm, la línea más intensa del hidrógeno.

## Dualidad onda-corpúsculo
Si la luz, que es una onda, se comporta a veces como partícula, Louis de Broglie propuso en 1924 lo contrario: toda partícula tiene una onda asociada.
$ λ = h / p = h / (m·v)
Se confirmó al observar que los electrones se difractan al atravesar un cristal, igual que los rayos X. En el experimento de la **doble rendija**, los electrones lanzados de uno en uno acaban formando un patrón de interferencia: cada uno se comporta como onda al propagarse y como partícula al ser detectado.
> Ejemplo: un electrón a 10⁶ m/s tiene λ ≈ 0,7 nm, comparable al tamaño de un átomo. Una pelota de 150 g a 40 m/s tiene λ ≈ 10⁻³⁴ m: imposible de detectar. Por eso no vemos ondas en los objetos cotidianos.

## El principio de incertidumbre y los orbitales
Werner Heisenberg demostró en 1927 que hay pares de magnitudes que no pueden conocerse a la vez con precisión total:
$ Δx · Δp ≥ ħ / 2      (ħ = h / 2π)
No es un defecto de los instrumentos, sino una propiedad de la naturaleza: una partícula no tiene a la vez una posición y un momento perfectamente definidos.

Por eso el electrón no describe una órbita como un planeta. La mecánica cuántica (Schrödinger, 1926) lo describe con una **función de onda**, cuyo cuadrado da la probabilidad de encontrarlo en cada punto. Las regiones donde esa probabilidad es alta son los **orbitales** (s, p, d, f), que explican la tabla periódica y el enlace químico.

## Relatividad especial
En 1905 Einstein partió de dos postulados:
- Las leyes de la física son las mismas en todos los sistemas de referencia inerciales.
- La velocidad de la luz en el vacío, c = 3·10⁸ m/s, es la misma para todos los observadores, se muevan como se muevan.

El segundo choca con la intuición: si corres detrás de un rayo de luz, sigue alejándose de ti a c. Para que eso sea posible, el espacio y el tiempo no pueden ser absolutos. Las consecuencias dependen del **factor de Lorentz**:
$ γ = 1 / √(1 − v²/c²)
- **Dilatación del tiempo**: un reloj en movimiento va más lento. Δt = γ·Δt₀.
- **Contracción de longitudes**: un objeto en movimiento se acorta en la dirección de avance. L = L₀ / γ.
- **Relatividad de la simultaneidad**: dos sucesos simultáneos para un observador pueden no serlo para otro.
- **Límite de velocidad**: ningún cuerpo con masa puede alcanzar c, porque haría falta una energía infinita.
> Ejemplo: a v = 0,8c, γ = 1/√(1 − 0,64) = 1,67. Un segundo del reloj en movimiento dura 1,67 s para el observador en reposo. A la velocidad de un avión, γ difiere de 1 en menos de una billonésima: por eso no lo notamos.
Una prueba directa son los **muones** creados en la alta atmósfera: viven tan poco que no deberían llegar al suelo, pero llegan porque, vistos desde la Tierra, su tiempo transcurre más despacio.

## Masa y energía
$ E = m · c²
La masa es energía concentrada. Como c² es un número enorme, una masa pequeña equivale a una energía gigantesca: un gramo de materia equivale a 9·10¹³ J, lo que produce una central eléctrica grande en un día. El Sol brilla porque convierte unos cuatro millones de toneladas de masa en energía cada segundo.

## Relatividad general
En 1915 Einstein extendió la teoría a la gravedad: la masa y la energía **curvan el espacio-tiempo**, y los cuerpos se mueven siguiendo esa curvatura. Predice que la luz se desvía al pasar junto a una estrella, que el tiempo corre más despacio cerca de una masa grande, y que existen **agujeros negros** y **ondas gravitacionales**, detectadas por primera vez en 2015.
En la maqueta del agujero negro puedes ver cómo la gravedad curva la luz: activa y desactiva la lente gravitatoria para comparar.
> Los relojes de los satélites GPS atrasan 7 microsegundos al día por su velocidad y adelantan 45 por estar en una gravedad más débil. Sin corregir esos 38 microsegundos netos, el error de posición crecería unos 10 km diarios.

## Física nuclear
El núcleo atómico está formado por protones y neutrones unidos por la **fuerza nuclear fuerte**. Los núcleos inestables se desintegran emitiendo radiación: es la **radiactividad**.
- **Alfa (α)**: núcleos de helio. La detiene una hoja de papel.
- **Beta (β)**: electrones. La detiene una lámina de aluminio.
- **Gamma (γ)**: fotones de altísima energía. Hace falta plomo u hormigón grueso.

La **semivida** es el tiempo que tarda en desintegrarse la mitad de los núcleos de una muestra. La del carbono-14 es de 5730 años, y eso permite datar restos orgánicos.

Hay dos formas de obtener energía del núcleo, ambas por conversión de masa en energía:
- **Fisión**: un núcleo pesado (uranio, plutonio) se parte en dos. Es la base de las centrales nucleares.
- **Fusión**: dos núcleos ligeros (hidrógeno) se unen. Es la fuente de energía de las estrellas.
` },
  { id: 'gravitacion', name: 'Gravitación y astronomía', sum: 'Ley de Newton, leyes de Kepler, órbitas y satélites.', m: 'solar',
    match: /planeta|Kepler|órbita|escape|satélite|gravitatori|gravitación/i,
    k: [['Ley de gravitación universal', 'F = G·M·m / r²: toda masa atrae a cualquier otra.'], ['Campo gravitatorio', 'Fuerza por unidad de masa: g = G·M / r². En la superficie terrestre, 9,8 m/s².'], ['Masa y peso', 'La masa (kg) es la cantidad de materia y no cambia; el peso (N) es la fuerza P = m·g y depende del lugar.'], ['Primera ley de Kepler', 'Las órbitas son elipses con el Sol en uno de los focos.'], ['Segunda ley de Kepler', 'El radio vector barre áreas iguales en tiempos iguales: el planeta va más rápido cerca del Sol.'], ['Tercera ley de Kepler', 'T² es proporcional a a³.'], ['Perihelio y afelio', 'Puntos de la órbita más cercano y más lejano al Sol.'], ['Velocidad orbital circular', 'v = √(G·M / r): cuanto más lejos, más lenta.'], ['Satélite geoestacionario', 'Orbita sobre el ecuador a unos 35 800 km de altura con periodo de 24 h: parece fijo en el cielo.'], ['Energía potencial gravitatoria', 'Ep = −G·M·m / r; es cero en el infinito y negativa a cualquier distancia finita.'], ['Velocidad de escape', 'v = √(2·G·M / R). En la Tierra, 11,2 km/s.'], ['Ingravidez', 'Sensación de no pesar por estar en caída libre continua, no por ausencia de gravedad.']],
    notes: `
## Del cielo de los antiguos a Newton
Durante casi dos mil años dominó el modelo **geocéntrico** de Ptolomeo, con la Tierra inmóvil en el centro. En 1543 Copérnico propuso el modelo **heliocéntrico**: los planetas, incluida la Tierra, giran alrededor del Sol. Galileo lo apoyó con el telescopio al descubrir las lunas de Júpiter y las fases de Venus. Kepler encontró las leyes exactas del movimiento planetario y, finalmente, Newton explicó en 1687 por qué se cumplen.

## La ley de gravitación universal
Newton entendió que la fuerza que hace caer una manzana es la misma que mantiene a la Luna en órbita. Dos masas cualesquiera se atraen con una fuerza:
$ F = G · M · m / r²      (G = 6,67·10⁻¹¹ N·m²/kg²)
Sus características:
- Es siempre **atractiva**.
- Actúa a distancia, sin contacto.
- Es proporcional al producto de las masas.
- Disminuye con el **cuadrado de la distancia** entre los centros: al doble de distancia, la cuarta parte de fuerza; al triple, la novena parte.
- Cumple la tercera ley de Newton: la Tierra atrae a la Luna con la misma fuerza con que la Luna atrae a la Tierra.

La constante G es tan pequeña que la atracción entre objetos cotidianos es inapreciable. Solo se nota cuando al menos una de las masas es astronómica.
> Ejemplo: dos personas de 70 kg separadas 1 m se atraen con F = 6,67·10⁻¹¹ · 70 · 70 / 1² ≈ 3·10⁻⁷ N, el peso de un grano de arena fina.

## Campo gravitatorio
Una masa M modifica el espacio que la rodea creando un **campo gravitatorio**. Su intensidad g es la fuerza que sufriría cada kilogramo colocado en ese punto:
$ g = G · M / r²
En la superficie terrestre vale 9,8 m/s² y coincide con la aceleración de caída libre. Disminuye con la altura, pero despacio: en la cima del Everest es un 0,3 % menor, y a 400 km, donde orbita la Estación Espacial, todavía vale 8,7 m/s².

## Masa, peso e ingravidez
- La **masa** mide la cantidad de materia y la inercia. Se mide en kilogramos y es la misma en cualquier lugar.
- El **peso** es la fuerza con que un astro atrae al cuerpo: P = m·g. Se mide en newtons y depende del lugar.
> Ejemplo: un astronauta de 70 kg pesa 686 N en la Tierra y solo 113 N en la Luna (g = 1,62 m/s²), pero su masa sigue siendo 70 kg.
Los astronautas en órbita flotan, pero no porque no haya gravedad. Están en **caída libre** continua junto con su nave: caen hacia la Tierra, pero avanzan tan deprisa de lado que nunca la alcanzan. Eso es estar en órbita.

## Las leyes de Kepler
Kepler las dedujo entre 1609 y 1619 a partir de las observaciones de Tycho Brahe:
- **Primera (ley de las órbitas)**: los planetas describen órbitas elípticas con el Sol en uno de los focos. El punto más cercano al Sol es el **perihelio** y el más lejano, el **afelio**. Las órbitas de los planetas son casi circulares.
- **Segunda (ley de las áreas)**: la línea que une el Sol con el planeta barre áreas iguales en tiempos iguales. Por tanto, el planeta va más rápido en el perihelio y más lento en el afelio. Es una consecuencia de la conservación del momento angular.
- **Tercera (ley de los periodos)**: el cuadrado del periodo es proporcional al cubo del semieje mayor de la órbita.
$ T² = k · a³
La constante k es la misma para todos los cuerpos que orbitan el mismo astro. Con T en años y a en unidades astronómicas, alrededor del Sol k = 1.
> Ejemplo: Marte está a 1,52 UA del Sol. T² = 1,52³ = 3,51, así que T = 1,87 años. Coincide con su año real de 687 días.
Las estaciones no se deben a la distancia al Sol, sino a la inclinación de 23,5° del eje terrestre. De hecho, la Tierra pasa por el perihelio a principios de enero.

## Órbitas circulares
En una órbita circular la gravedad es la fuerza centrípeta que curva la trayectoria:
$ G·M·m / r² = m·v² / r   →   v = √(G·M / r)
Dos conclusiones importantes: la velocidad orbital **no depende de la masa del satélite**, y cuanto mayor es el radio, más lenta es la órbita. Sustituyendo v = 2πr/T se recupera la tercera ley de Kepler y se obtiene el valor de su constante:
$ T² = (4π² / G·M) · r³
Esta fórmula permite calcular la masa de un astro observando algo que orbite a su alrededor. Así se conocen las masas del Sol, de los planetas con lunas y de los agujeros negros.

## Satélites artificiales
- **Órbita baja** (200 a 2000 km): la Estación Espacial Internacional vuela a 400 km de altura, a 7,7 km/s, y da una vuelta cada 92 minutos.
- **Órbita media** (unos 20 000 km): satélites de navegación como GPS y Galileo, con periodo de 12 horas.
- **Órbita geoestacionaria** (35 800 km sobre el ecuador): el periodo es de 24 h, igual que la rotación terrestre, de modo que el satélite parece inmóvil en el cielo. Se usa en televisión y meteorología.

## Energía en el campo gravitatorio
La energía potencial gravitatoria entre dos masas es:
$ Ep = −G · M · m / r
Se toma como cero en el infinito, y por eso es negativa: hay que aportar energía para separar los cuerpos. La fórmula Ep = m·g·h es su aproximación cerca de la superficie.

En una órbita circular, la energía total es negativa y vale la mitad de la potencial:
$ E = −G · M · m / (2r)
Una energía total negativa significa que el cuerpo está **ligado**: no puede escapar. Además, en una órbita circular la gravedad no realiza trabajo, porque siempre es perpendicular al movimiento, y por eso la rapidez no cambia.

## Velocidad de escape
Es la velocidad mínima con la que hay que lanzar un cuerpo desde la superficie para que no vuelva. Se obtiene exigiendo que la energía total sea cero:
$ ½·m·v² − G·M·m / R = 0   →   v escape = √(2·G·M / R)
No depende de la masa del cuerpo. En la Tierra son 11,2 km/s; en la Luna, 2,4 km/s; en Júpiter, 60 km/s. La Luna no tiene atmósfera precisamente porque su velocidad de escape es tan baja que las moléculas de gas acaban escapando.

Si un astro es tan compacto que su velocidad de escape supera la de la luz, nada puede salir de él: es un **agujero negro**.

## Las mareas
La Luna atrae con más fuerza el lado de la Tierra que tiene más cerca que el lado opuesto. Esa diferencia estira los océanos y produce dos abultamientos, uno hacia la Luna y otro en el lado contrario: por eso hay dos pleamares al día. El Sol también influye: cuando se alinea con la Luna (luna nueva y luna llena) se producen las mareas vivas.

## El sistema solar
- **Planetas rocosos**: Mercurio, Venus, la Tierra y Marte. Pequeños, densos y cercanos al Sol.
- **Gigantes gaseosos**: Júpiter y Saturno, formados sobre todo por hidrógeno y helio.
- **Gigantes helados**: Urano y Neptuno.
- Además: el cinturón de asteroides entre Marte y Júpiter, planetas enanos como Plutón y Ceres, y los cometas.

El Sol contiene el 99,86 % de la masa del sistema. Las distancias se miden en **unidades astronómicas** (1 UA = 150 millones de km, la distancia media Tierra-Sol) y, fuera del sistema solar, en **años luz**.
> En la maqueta del sistema solar, compara el periodo de Mercurio (88 días) con el de Neptuno (165 años): es la tercera ley de Kepler en acción.
` },
  { id: 'ondas', name: 'Oscilaciones y ondas', sum: 'Movimiento armónico, péndulo, sonido, luz y óptica.', m: 'ondas',
    match: /péndulo|onda|luz|sonido|Snell|refracción|frecuencia|armónico|muelle|oscila/i,
    k: [['Movimiento armónico simple', 'Oscilación producida por una fuerza proporcional al desplazamiento: F = −k·x.'], ['Periodo y frecuencia', 'T es el tiempo de una oscilación; f = 1/T es el número de oscilaciones por segundo (Hz).'], ['Periodo de un muelle', 'T = 2π·√(m/k)'], ['Periodo del péndulo simple', 'T = 2π·√(L/g): no depende de la masa.'], ['Resonancia', 'Gran aumento de amplitud cuando se fuerza un sistema a su frecuencia natural.'], ['Ecuación de las ondas', 'v = λ · f'], ['Onda transversal', 'La vibración es perpendicular a la propagación (luz, cuerda).'], ['Onda longitudinal', 'La vibración es paralela a la propagación (sonido).'], ['Ley de Snell', 'n₁·sen θ₁ = n₂·sen θ₂: la luz se desvía al cambiar de medio.'], ['Índice de refracción', 'n = c / v: cuántas veces más lenta va la luz en un medio que en el vacío.'], ['Interferencia', 'Superposición de dos ondas: se refuerzan (constructiva) o se anulan (destructiva).'], ['Efecto Doppler', 'La frecuencia percibida sube si la fuente se acerca y baja si se aleja.'], ['Espectro electromagnético', 'Radio, microondas, infrarrojo, visible, ultravioleta, rayos X y gamma (de menor a mayor frecuencia).']],
    notes: `
## Movimientos periódicos
Un movimiento es **periódico** cuando se repite a intervalos iguales de tiempo: el latido del corazón, la rotación de la Tierra, el vaivén de un columpio. Si además el cuerpo va y viene a ambos lados de una posición de equilibrio, es una **oscilación** o vibración.
- **Periodo** T: tiempo que dura una oscilación completa (s).
- **Frecuencia** f: número de oscilaciones por segundo. Se mide en hercios (Hz).
$ f = 1 / T
- **Amplitud** A: separación máxima respecto al equilibrio.

## Movimiento armónico simple
Es la oscilación más sencilla e importante. Se produce cuando la fuerza que devuelve el cuerpo al equilibrio es proporcional a su desplazamiento y de sentido contrario (**ley de Hooke**):
$ F = −k · x
La posición sigue entonces una función sinusoidal:
$ x(t) = A · sen(ω·t + φ)
- **Pulsación** ω = 2π·f = 2π/T, en rad/s.
- **Fase inicial** φ: indica en qué punto empieza el movimiento.

La velocidad es máxima al pasar por el centro (v máx = A·ω) y nula en los extremos. La aceleración es justo al revés: nula en el centro y máxima en los extremos.
$ a = −ω² · x

## Energía de un oscilador
En cada oscilación la energía cambia de forma sin cesar:
- En los **extremos** toda es potencial elástica: Ep = ½·k·A².
- En el **centro** toda es cinética.
- La energía total se conserva y es proporcional al cuadrado de la amplitud.
$ E = ½ · k · A²

## Masa unida a un muelle
$ T = 2π · √(m / k)
Más masa significa oscilaciones más lentas; un muelle más rígido (k mayor), oscilaciones más rápidas. El periodo no depende de la amplitud.
> Ejemplo: una masa de 0,5 kg colgada de un muelle de k = 200 N/m oscila con T = 2π·√(0,5/200) = 0,31 s, unas tres veces por segundo.

## El péndulo simple
Una masa colgada de un hilo. Para ángulos pequeños (menos de unos 15°) se comporta como un oscilador armónico:
$ T = 2π · √(L / g)
El periodo **no depende de la masa** ni, aproximadamente, de la amplitud: solo de la longitud y de la gravedad. Galileo lo descubrió observando una lámpara de la catedral de Pisa, y durante siglos fue la base de los relojes.
> Ejemplo: un péndulo de 1 m en la Tierra tiene T = 2π·√(1/9,8) ≈ 2,0 s. En la Luna (g = 1,62 m/s²) tardaría 4,9 s. Midiendo el periodo de un péndulo se puede calcular g en cualquier lugar.

## Amortiguamiento y resonancia
En la realidad el rozamiento va restando energía y la amplitud disminuye poco a poco: son oscilaciones **amortiguadas**. Para mantenerlas hay que aportar energía desde fuera (oscilaciones **forzadas**).

Si la fuerza exterior actúa justo a la **frecuencia natural** del sistema, la amplitud crece muchísimo: es la **resonancia**. Es lo que ocurre al empujar un columpio en el momento adecuado, al sintonizar una emisora de radio o cuando una copa se rompe con una nota sostenida.

## Qué es una onda
Una onda es una perturbación que se propaga transportando **energía sin transportar materia**. Al lanzar una piedra a un estanque, el agua sube y baja, pero no viaja hacia la orilla.
- **Longitud de onda** λ: distancia entre dos crestas consecutivas.
- **Frecuencia** f: la impone la fuente y no cambia al pasar de un medio a otro.
- **Velocidad de propagación**: depende solo del medio.
$ v = λ · f
> Ejemplo: la nota la, de 440 Hz, en el aire (v = 340 m/s) tiene λ = 340/440 = 0,77 m.

## Tipos de ondas
Según la dirección de vibración:
- **Transversales**: la vibración es perpendicular al avance (ondas en una cuerda, luz).
- **Longitudinales**: la vibración es paralela al avance, con compresiones y dilataciones (sonido).

Según el medio:
- **Mecánicas**: necesitan un medio material (sonido, olas, ondas sísmicas).
- **Electromagnéticas**: se propagan también en el vacío (luz, radio, rayos X).

## El sonido
Es una onda mecánica longitudinal. Viaja a unos **340 m/s** en el aire, a 1500 m/s en el agua y a unos 5000 m/s en el acero: más rápido cuanto más rígido es el medio. En el vacío no se propaga.
- El **tono** (grave o agudo) depende de la frecuencia. El oído humano percibe entre 20 y 20 000 Hz; por debajo están los infrasonidos y por encima, los ultrasonidos.
- La **intensidad** depende de la amplitud y se mide en decibelios (dB). Cada 10 dB más supone diez veces más energía.
- El **timbre** distingue dos instrumentos que tocan la misma nota: depende de la forma de la onda.

**Efecto Doppler**: cuando la fuente se acerca, las ondas se comprimen y el sonido se oye más agudo; cuando se aleja, más grave. Es lo que ocurre con la sirena de una ambulancia. Con la luz permite medir la velocidad de estrellas y galaxias.

## Fenómenos ondulatorios
- **Reflexión**: la onda rebota en una superficie; el ángulo de reflexión es igual al de incidencia (eco, espejo).
- **Refracción**: la onda cambia de dirección al pasar a un medio donde su velocidad es distinta.
- **Difracción**: la onda rodea obstáculos o se abre al atravesar rendijas de tamaño parecido a su longitud de onda. Por eso oímos a alguien que habla detrás de una esquina, pero no lo vemos.
- **Interferencia**: dos ondas que coinciden se suman. Si llegan cresta con cresta se refuerzan (**constructiva**); si llegan cresta con valle se anulan (**destructiva**). Es el principio de los auriculares con cancelación de ruido.
- **Ondas estacionarias**: en una cuerda sujeta por los extremos solo caben ciertas longitudes de onda, con puntos inmóviles (nodos). Son las notas de una guitarra.

## La luz como onda electromagnética
Maxwell demostró que la luz consiste en un campo eléctrico y otro magnético que oscilan en fase, perpendiculares entre sí y a la dirección de avance. En el vacío todas las ondas electromagnéticas viajan a c = 3·10⁸ m/s y solo se distinguen por su frecuencia. Ordenadas de menor a mayor frecuencia forman el **espectro electromagnético**:
- Ondas de radio, microondas, infrarrojo, **luz visible**, ultravioleta, rayos X y rayos gamma.

La luz visible es una franja muy estrecha, de 700 nm (rojo) a 400 nm (violeta). A mayor frecuencia, más energía transporta la radiación, y por eso los rayos ultravioleta, X y gamma dañan los tejidos.

## Óptica: reflexión y refracción de la luz
En un medio transparente la luz va más despacio que en el vacío. El **índice de refracción** lo mide:
$ n = c / v      (aire ≈ 1; agua = 1,33; vidrio ≈ 1,5)
Al cambiar de medio el rayo se desvía según la **ley de Snell**:
$ n₁ · sen θ₁ = n₂ · sen θ₂
Si pasa a un medio con mayor índice, se acerca a la normal; si pasa a uno con menor índice, se aleja.
> Ejemplo: un rayo entra del aire al agua con 45° de incidencia. sen θ₂ = sen 45° / 1,33 = 0,53, así que θ₂ ≈ 32°. Por eso una pajita parece quebrada dentro de un vaso.
- **Reflexión total**: al pasar a un medio de menor índice con un ángulo mayor que el ángulo límite (48,8° del agua al aire), la luz no sale y se refleja por completo. Así funciona la fibra óptica.
- **Dispersión**: el índice varía ligeramente con el color, de modo que un prisma o las gotas de lluvia separan la luz blanca en el arcoíris.
- **Lentes**: las convergentes concentran los rayos y las divergentes los separan. Son la base de gafas, cámaras, microscopios y del propio ojo.
` },
  { id: 'energia', name: 'Energía y termodinámica', sum: 'Trabajo, energía, calor, gases y máquinas térmicas.', m: 'estados',
    match: /gas|estado de la materia|energía cinética|energía potencial|energía mecánica|calor|trabajo|termodinámic|entropía|temperatura/i,
    k: [['Trabajo', 'W = F · d · cos θ (en julios): energía transferida por una fuerza al desplazar un cuerpo.'], ['Potencia', 'P = W / t (en vatios): rapidez con que se realiza trabajo.'], ['Energía cinética', 'Ec = ½·m·v²'], ['Teorema de las fuerzas vivas', 'El trabajo total sobre un cuerpo es igual a la variación de su energía cinética.'], ['Energía potencial gravitatoria', 'Ep = m·g·h'], ['Conservación de la energía mecánica', 'Sin rozamiento, Ec + Ep se mantiene constante.'], ['Temperatura', 'Medida de la energía cinética media de las partículas. T(K) = t(°C) + 273.'], ['Calor específico', 'Energía necesaria para subir 1 °C la temperatura de 1 kg de sustancia: Q = m·c·ΔT.'], ['Calor latente', 'Energía necesaria para cambiar de estado 1 kg de sustancia sin variar su temperatura: Q = m·L.'], ['Ecuación de los gases ideales', 'P·V = n·R·T, con T en kelvin.'], ['Primer principio de la termodinámica', 'ΔU = Q − W: la energía ni se crea ni se destruye.'], ['Segundo principio', 'La entropía de un sistema aislado nunca disminuye; el calor fluye solo del cuerpo caliente al frío.'], ['Rendimiento', 'Fracción del calor absorbido que una máquina convierte en trabajo; siempre menor que 1.']],
    notes: `
## Qué es la energía
La energía es la capacidad de un sistema para producir cambios: mover, calentar, deformar, iluminar. Se presenta en muchas formas (cinética, potencial, térmica, química, eléctrica, nuclear) y su propiedad fundamental es que **se conserva**: puede transformarse o transferirse, pero la cantidad total no cambia. Se mide en **julios** (J).

Hay dos maneras de transferir energía entre sistemas: el **trabajo** y el **calor**.

## Trabajo
Una fuerza realiza trabajo cuando desplaza el cuerpo sobre el que actúa:
$ W = F · d · cos θ
θ es el ángulo entre la fuerza y el desplazamiento.
- Si la fuerza va a favor del movimiento, el trabajo es positivo y el cuerpo gana energía.
- Si va en contra, como el rozamiento, es negativo y el cuerpo pierde energía.
- Si es perpendicular al movimiento, no realiza trabajo. Sostener una maleta sin moverla cansa, pero físicamente no es trabajo.
> Ejemplo: arrastrar una caja 5 m con una fuerza de 20 N en la dirección del movimiento supone W = 20 · 5 = 100 J.

## Potencia
Es la rapidez con que se realiza trabajo o se transfiere energía:
$ P = W / t
Se mide en **vatios** (1 W = 1 J/s). Un caballo de vapor equivale a 735 W. El **kilovatio-hora** de la factura eléctrica no es potencia sino energía: 1 kWh = 3,6 millones de julios.
> Ejemplo: una grúa que realiza 600 J de trabajo en 3 s desarrolla P = 600 / 3 = 200 W.

## Energía cinética
Es la energía que tiene un cuerpo por estar en movimiento:
$ Ec = ½ · m · v²
Depende del cuadrado de la velocidad: al doble de velocidad, cuatro veces más energía. Por eso la distancia de frenado de un coche se cuadruplica cuando su velocidad se duplica.

El **teorema de las fuerzas vivas** relaciona trabajo y energía cinética: el trabajo total de todas las fuerzas es igual a la variación de la energía cinética.
$ W total = ΔEc

## Energía potencial
Es energía almacenada por la posición o la configuración de un sistema.
- **Gravitatoria**: Ep = m·g·h. Aumenta con la altura.
- **Elástica**: Ep = ½·k·x². La de un muelle estirado o comprimido una distancia x.

Solo tienen energía potencial asociada las fuerzas **conservativas** (peso, fuerza elástica), aquellas cuyo trabajo no depende del camino seguido.

## Conservación de la energía mecánica
La energía mecánica es la suma de cinética y potencial. Si solo actúan fuerzas conservativas, se mantiene constante:
$ Ec + Ep = constante
> Ejemplo: una bola cae desde 5 m. Arriba toda su energía es potencial; abajo, toda cinética. m·g·h = ½·m·v², así que v = √(2·g·h) = √(2·9,8·5) ≈ 9,9 m/s, sin importar la masa.
En una montaña rusa o en un péndulo, la energía pasa continuamente de potencial a cinética y viceversa.

Cuando hay **rozamiento**, la energía mecánica disminuye. No desaparece: se transforma en energía térmica y los cuerpos se calientan.
$ W rozamiento = ΔEm

## Temperatura
La materia está formada por partículas en continuo movimiento. La **temperatura** mide la energía cinética media de esas partículas. Escalas:
- **Celsius** (°C): 0 °C es la fusión del hielo y 100 °C, la ebullición del agua.
- **Kelvin** (K): la escala absoluta del Sistema Internacional.
$ T (K) = t (°C) + 273
El **cero absoluto** (0 K = −273,15 °C) es la temperatura más baja posible, en la que la agitación de las partículas sería mínima.

## Calor
El calor es energía que pasa de un cuerpo a otro por estar a distinta temperatura. Los cuerpos no tienen calor: tienen energía interna, e intercambian calor hasta alcanzar el **equilibrio térmico**, es decir, la misma temperatura.
$ Q = m · c · ΔT
El **calor específico** c indica cuánta energía hace falta para subir 1 °C la temperatura de 1 kg de sustancia. El del agua es muy alto, 4180 J/(kg·°C), y por eso el mar suaviza el clima de las costas.
> Ejemplo: calentar 1 kg de agua de 20 °C a 100 °C requiere Q = 1 · 4180 · 80 = 334 400 J.

El calor se propaga de tres maneras:
- **Conducción**: por contacto, sin movimiento de materia (una cuchara metálica en la sopa).
- **Convección**: por corrientes en líquidos y gases (el aire caliente sube).
- **Radiación**: por ondas electromagnéticas, incluso en el vacío (el calor del Sol).

## Los estados de la materia y sus cambios
- **Sólido**: partículas ordenadas que solo vibran; forma y volumen fijos.
- **Líquido**: partículas juntas pero móviles; volumen fijo, forma variable.
- **Gas**: partículas muy separadas y libres; ocupa todo el recipiente y se comprime fácilmente.

Los cambios de estado son fusión y solidificación, vaporización y condensación, sublimación y sublimación inversa. Mientras dura un cambio de estado, **la temperatura no varía**: toda la energía se emplea en romper uniones entre partículas. Esa energía es el **calor latente**:
$ Q = m · L
> Ejemplo: fundir 1 kg de hielo a 0 °C requiere 334 000 J, lo mismo que calentar después ese agua hasta 80 °C. Evaporarla necesita 2 260 000 J.
En la maqueta de los estados de la materia puedes ver cómo cambia el movimiento de las partículas al variar la temperatura.

## Gases ideales
La **teoría cinética** explica los gases como partículas en movimiento caótico. La **presión** se debe a sus choques contra las paredes, y la temperatura, a su energía cinética media. Las tres leyes clásicas:
- **Boyle**: a temperatura constante, P·V es constante. Si el volumen se reduce a la mitad, la presión se duplica.
- **Charles**: a presión constante, V/T es constante.
- **Gay-Lussac**: a volumen constante, P/T es constante.

Todas se resumen en la ecuación de estado:
$ P · V = n · R · T      (R = 8,31 J/(mol·K) = 0,082 atm·L/(mol·K))
La temperatura debe ir siempre en **kelvin**.
> Ejemplo: 1 mol de gas a 0 °C (273 K) y 1 atm ocupa V = n·R·T/P = 1 · 0,082 · 273 / 1 = 22,4 L.

## Los principios de la termodinámica
- **Principio cero**: dos cuerpos en equilibrio térmico con un tercero lo están entre sí. Es lo que permite medir con un termómetro.
- **Primer principio**: la energía interna de un sistema cambia por el calor que recibe y el trabajo que realiza. Es la conservación de la energía.
$ ΔU = Q − W
> Ejemplo: un gas absorbe 500 J de calor y, al expandirse, realiza 200 J de trabajo. Su energía interna aumenta en 300 J.
- **Segundo principio**: el calor pasa espontáneamente del cuerpo caliente al frío, nunca al revés. La **entropía**, que mide el desorden, nunca disminuye en un sistema aislado. Esto marca el sentido del tiempo: un vaso roto no se recompone solo.
- **Tercer principio**: el cero absoluto es inalcanzable.

## Máquinas térmicas
Una máquina térmica (motor de coche, turbina de vapor) toma calor de un foco caliente, convierte una parte en trabajo y cede el resto a un foco frío. Su **rendimiento** es la fracción aprovechada:
$ η = W / Q absorbido
El segundo principio impide que sea del 100 %. El máximo teórico lo fija el **ciclo de Carnot**:
$ η máx = 1 − T fría / T caliente
> Ejemplo: entre 500 K y 300 K, η máx = 1 − 300/500 = 0,40. Ninguna máquina real que trabaje entre esas temperaturas supera el 40 %.
Un frigorífico hace el camino inverso: consume trabajo para llevar calor del interior frío al exterior caliente.
` },
  { id: 'mecanica', name: 'Cinemática y dinámica', sum: 'Movimiento, fuerzas, leyes de Newton y choques.',
    match: /./,
    k: [['Magnitud vectorial', 'La que tiene módulo, dirección y sentido (velocidad, fuerza), frente a la escalar (masa, tiempo).'], ['Velocidad media', 'v = Δx / Δt'], ['MRUA', 'v = v₀ + a·t ;  x = x₀ + v₀·t + ½·a·t² ;  v² = v₀² + 2·a·Δx'], ['Caída libre', 'MRUA con a = g = 9,8 m/s², igual para todos los cuerpos si se desprecia el aire.'], ['Tiro parabólico', 'Composición de un MRU horizontal y un MRUA vertical.'], ['Aceleración centrípeta', 'a = v² / r, dirigida hacia el centro: cambia la dirección de la velocidad.'], ['Primera ley de Newton', 'Sin fuerza neta, un cuerpo sigue en reposo o en movimiento rectilíneo uniforme (inercia).'], ['Segunda ley de Newton', 'F = m · a'], ['Tercera ley de Newton', 'A toda acción le corresponde una reacción igual y opuesta, sobre cuerpos distintos.'], ['Fuerza de rozamiento', 'Fr = μ·N: se opone al deslizamiento y no depende del área de contacto.'], ['Momento lineal', 'p = m·v; se conserva si no hay fuerzas externas.'], ['Impulso', 'I = F·Δt = Δp: una fuerza cambia el momento lineal tanto más cuanto más tiempo actúa.']],
    notes: `
## Magnitudes y unidades
La física describe la naturaleza con **magnitudes**, propiedades que se pueden medir. El Sistema Internacional fija las unidades básicas: metro (longitud), kilogramo (masa), segundo (tiempo), kelvin, amperio, mol y candela. Las demás se derivan de ellas: el newton es kg·m/s².
- Las magnitudes **escalares** quedan definidas con un número y su unidad: masa, tiempo, temperatura, energía.
- Las **vectoriales** necesitan además dirección y sentido: posición, velocidad, aceleración, fuerza.

Antes de sustituir en una fórmula, pasa todos los datos a unidades del SI.
> Conversión útil: para pasar de km/h a m/s se divide entre 3,6. Así, 90 km/h = 25 m/s.

## Describir el movimiento
La **cinemática** describe cómo se mueven los cuerpos sin atender a las causas. Todo movimiento es relativo: hay que fijar un **sistema de referencia**. Un pasajero sentado en un tren está en reposo respecto al vagón y en movimiento respecto al andén.
- **Posición** x: dónde está el cuerpo.
- **Desplazamiento** Δx: cambio de posición. No coincide con la **distancia recorrida** si el cuerpo cambia de sentido: tras una vuelta completa a una pista, el desplazamiento es cero.
- **Velocidad**: rapidez con que cambia la posición.
$ v = Δx / Δt
- **Aceleración**: rapidez con que cambia la velocidad.
$ a = Δv / Δt
Hay aceleración siempre que cambia la velocidad, también si solo cambia su dirección. Una aceleración negativa en un cuerpo que avanza significa que frena.

## Movimiento rectilíneo uniforme (MRU)
Trayectoria recta, velocidad constante y aceleración nula. Se recorren distancias iguales en tiempos iguales:
$ x = x₀ + v·t
En una gráfica posición-tiempo es una recta cuya pendiente es la velocidad.

## Movimiento rectilíneo uniformemente acelerado (MRUA)
Trayectoria recta y aceleración constante. Tres ecuaciones lo resuelven todo:
$ v = v₀ + a·t
$ x = x₀ + v₀·t + ½·a·t²
$ v² = v₀² + 2·a·Δx
La tercera es útil cuando no se conoce el tiempo. En una gráfica velocidad-tiempo es una recta cuya pendiente es la aceleración, y el área bajo ella es el desplazamiento.
> Ejemplo: un coche parte del reposo con a = 2 m/s². A los 5 s lleva v = 2·5 = 10 m/s y ha recorrido x = ½·2·5² = 25 m.
> Ejemplo de frenada: un coche a 25 m/s frena con a = −5 m/s². De v² = v₀² + 2·a·Δx se obtiene Δx = 25² / (2·5) = 62,5 m.

## Caída libre y tiro vertical
Son MRUA con a = g = 9,8 m/s² dirigida hacia abajo. Si se desprecia el aire, **todos los cuerpos caen con la misma aceleración**, sea cual sea su masa: Galileo lo dedujo y los astronautas del Apolo 15 lo comprobaron en la Luna dejando caer un martillo y una pluma.
> Ejemplo: un objeto que cae desde el reposo lleva a los 3 s una velocidad v = 9,8·3 = 29,4 m/s y ha recorrido ½·9,8·3² = 44,1 m.
Un cuerpo lanzado hacia arriba frena hasta detenerse un instante en el punto más alto (v = 0, pero a sigue siendo g) y vuelve a caer. Tarda lo mismo en subir que en bajar.

## Tiro parabólico
Un balón chutado o un proyectil se mueven en dos dimensiones. La clave es que los dos ejes son **independientes**:
- En **horizontal** no hay aceleración: MRU con vₓ = v₀·cos α.
- En **vertical** actúa la gravedad: MRUA con v₀ᵧ = v₀·sen α.

La trayectoria resultante es una parábola. En el punto más alto la velocidad vertical es cero, pero la horizontal se mantiene. Sin aire, el alcance máximo se consigue con 45°.
> Ejemplo: se lanza un balón a 20 m/s con 30° (g = 10 m/s²). vₓ = 17,3 m/s y v₀ᵧ = 10 m/s. Sube durante 1 s hasta 5 m de altura, está 2 s en el aire y cae a 17,3 · 2 = 34,6 m.

## Movimiento circular uniforme
El cuerpo recorre una circunferencia con rapidez constante. Aunque la rapidez no cambie, la dirección de la velocidad sí, de modo que **hay aceleración**, dirigida hacia el centro:
$ a centrípeta = v² / r
La velocidad angular ω mide el ángulo girado por unidad de tiempo, y v = ω·r. El periodo es T = 2π/ω.
> Ejemplo: un coche a 20 m/s en una curva de 50 m de radio tiene a = 20² / 50 = 8 m/s². Esa aceleración la proporciona el rozamiento de los neumáticos.

## Las leyes de Newton
La **dinámica** estudia las causas del movimiento: las fuerzas. Se resume en tres leyes.
- **Primera (inercia)**: si la fuerza neta sobre un cuerpo es cero, este mantiene su estado de reposo o de movimiento rectilíneo uniforme. Los cuerpos no necesitan una fuerza para seguir moviéndose; la necesitan para cambiar su movimiento. Por eso el cinturón nos sujeta en un frenazo.
- **Segunda (fundamental)**: la fuerza neta produce una aceleración proporcional a ella e inversamente proporcional a la masa.
$ F neta = m · a
La unidad de fuerza es el **newton**: la fuerza que acelera 1 kg a 1 m/s².
- **Tercera (acción y reacción)**: si A ejerce una fuerza sobre B, B ejerce sobre A otra igual y de sentido contrario. No se anulan porque actúan sobre cuerpos distintos. Al andar empujamos el suelo hacia atrás y el suelo nos empuja hacia delante.

## Fuerzas habituales
- **Peso**: P = m·g, vertical y hacia abajo.
- **Normal** (N): la que ejerce una superficie sobre el cuerpo apoyado, perpendicular a ella. En un suelo horizontal sin otras fuerzas verticales, N = m·g.
- **Rozamiento**: se opone al deslizamiento. No depende del área de contacto.
$ Fr = μ · N
El coeficiente **estático** (antes de moverse) es mayor que el **dinámico** (ya deslizando): cuesta más arrancar un mueble que mantenerlo en movimiento.
- **Tensión**: la que transmite una cuerda tirante.
- **Fuerza elástica**: la de un resorte deformado, F = k·x.
- **Fuerza centrípeta**: no es una fuerza nueva, sino el nombre de la resultante que apunta al centro en un movimiento circular: F = m·v²/r.

## Cómo resolver un problema de dinámica
- Dibuja el cuerpo aislado con todas las fuerzas que actúan sobre él.
- Elige unos ejes; conviene que uno coincida con la dirección del movimiento.
- Descompón las fuerzas que no estén sobre los ejes.
- Aplica F = m·a en cada eje y resuelve.
> Ejemplo: un bloque de 2 kg se arrastra por un suelo horizontal con una fuerza de 12 N y μ = 0,2 (g = 10 m/s²). N = 20 N, Fr = 0,2·20 = 4 N, y a = (12 − 4) / 2 = 4 m/s².
En un **plano inclinado** un ángulo θ, el peso se descompone en m·g·sen θ (paralela al plano, tira hacia abajo) y m·g·cos θ (perpendicular, la compensa la normal). Sin rozamiento, el cuerpo baja con a = g·sen θ: en una rampa de 30°, 4,9 m/s².

## Momento lineal e impulso
El **momento lineal** o cantidad de movimiento mide lo difícil que es detener un cuerpo:
$ p = m · v
El **impulso** de una fuerza es el producto de la fuerza por el tiempo que actúa, y es igual al cambio de momento lineal:
$ F · Δt = Δp
Por eso un airbag protege: alarga el tiempo de frenado y reduce la fuerza sobre el pasajero.

## Conservación del momento y choques
Si sobre un sistema no actúan fuerzas externas, su momento lineal total **se conserva**. Se cumple en choques, explosiones y en el retroceso de un arma; también es el fundamento de los cohetes, que avanzan expulsando gases hacia atrás.
- Choque **elástico**: se conserva además la energía cinética (bolas de billar, aproximadamente).
- Choque **inelástico**: parte de la energía cinética se transforma en calor y deformación. Si los cuerpos quedan unidos, es perfectamente inelástico.
> Ejemplo: un vagón de 2 kg a 3 m/s choca con otro de 1 kg en reposo y quedan enganchados. 2·3 + 1·0 = (2 + 1)·v, así que v = 2 m/s.
` },
];

TOPICS.fisica.forEach(function (t, i, a) { t.n = a.length - i; });
