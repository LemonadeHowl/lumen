BANK.fisica = { name: 'Física', area: 'ciencias', mono: 'Fi', color: '#2563eb', q: [
  mc(1, '¿Cuál es la unidad de fuerza en el Sistema Internacional?', ['El newton', 'El julio', 'El vatio', 'El pascal'], '1 N es la fuerza que acelera 1 kg a 1 m/s². El julio mide energía, el vatio potencia y el pascal presión.'),
  mc(1, 'Un coche recorre 100 km en 2 h. ¿Cuál es su velocidad media?', ['50 km/h', '200 km/h', '100 km/h', '25 km/h'], 'Velocidad media = distancia / tiempo = 100 km / 2 h.'),
  mc(1, '¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?', ['La gravedad', 'El magnetismo', 'La fricción', 'La fuerza nuclear'], 'La atracción gravitatoria del Sol curva continuamente la trayectoria de los planetas.', { m: 'solar' }),
  mc(1, '¿Qué planeta tarda menos en dar una vuelta al Sol?', ['Mercurio', 'Venus', 'La Tierra', 'Neptuno'], 'Cuanto más cerca del Sol, más corta y rápida es la órbita: Mercurio tarda 88 días.', { m: 'solar' }),
  tx(1, '¿Cuánto vale aproximadamente la aceleración de la gravedad en la superficie terrestre, en m/s²?', ['9.8', '9,8', '9.81', '9,81', '10'], 'g ≈ 9,8 m/s²: cada segundo de caída libre la velocidad aumenta unos 9,8 m/s.', { m: 'pendulo' }),
  mc(1, '¿En qué estado de la materia están más separadas las partículas?', ['Gas', 'Líquido', 'Sólido', 'En todos igual'], 'En un gas las partículas se mueven libremente y ocupan todo el recipiente.', { m: 'estados' }),
  mc(1, 'La luz visible es…', ['Una onda electromagnética', 'Una onda sonora', 'Una corriente de partículas de aire', 'Una onda que necesita agua para viajar'], 'La luz no necesita medio material: se propaga incluso en el vacío.', { m: 'onda' }),
  mc(1, 'Si sobre un objeto en movimiento no actúa ninguna fuerza neta, el objeto…', ['Sigue en línea recta a velocidad constante', 'Se frena hasta pararse', 'Acelera', 'Cae'], 'Primera ley de Newton (inercia). En la vida diaria las cosas se paran por el rozamiento, que es una fuerza.'),
  fc(1, 'Segunda ley de Newton', 'F = m · a'),

  mc(2, 'Una fuerza neta de 10 N actúa sobre una masa de 2 kg. ¿Qué aceleración produce?', ['5 m/s²', '20 m/s²', '0,2 m/s²', '12 m/s²'], 'a = F / m = 10 N / 2 kg.'),
  mc(2, 'El periodo de un péndulo simple (ángulos pequeños) depende de…', ['Su longitud y la gravedad', 'Su masa', 'Su masa y su amplitud', 'El material del hilo'], 'T = 2π·√(L/g): ni la masa ni (para ángulos pequeños) la amplitud influyen.', { m: 'pendulo' }),
  mc(2, 'Si se cuadruplica la longitud de un péndulo, su periodo…', ['Se duplica', 'Se cuadruplica', 'Se reduce a la mitad', 'No cambia'], 'El periodo es proporcional a √L, y √4 = 2.', { m: 'pendulo' }),
  tx(2, '¿Cuál es la energía cinética, en julios, de un cuerpo de 2 kg que se mueve a 3 m/s?', ['9', '9 j'], 'Ec = ½·m·v² = ½ · 2 · 3² = 9 J.'),
  mc(2, 'En una onda, si la frecuencia aumenta y la velocidad no cambia, la longitud de onda…', ['Disminuye', 'Aumenta', 'No cambia', 'Se anula'], 'v = λ·f: con v constante, λ y f son inversamente proporcionales.', { m: 'onda' }),
  mc(2, '¿Qué afirma la tercera ley de Kepler?', ['T² es proporcional a a³', 'T es proporcional a a', 'Las órbitas son circulares', 'Todos los planetas tardan lo mismo'], 'El cuadrado del periodo orbital es proporcional al cubo del semieje mayor de la órbita.', { m: 'solar' }),
  mc(2, 'Un objeto cae libremente desde el reposo. ¿Qué velocidad lleva a los 3 s? (g = 10 m/s²)', ['30 m/s', '15 m/s', '45 m/s', '10 m/s'], 'v = g·t = 10 · 3. (La distancia recorrida, ½·g·t², sería 45 m.)'),
  mc(2, '¿Qué magnitud se conserva siempre en un choque sin fuerzas externas?', ['El momento lineal', 'La energía cinética', 'La velocidad de cada cuerpo', 'La aceleración'], 'La energía cinética solo se conserva en los choques elásticos; el momento lineal total, siempre.'),
  fc(2, 'Periodo del péndulo simple', 'T = 2π · √(L / g)', { m: 'pendulo' }),

  mc(3, 'En una onda electromagnética en el vacío, los campos E y B son…', ['Perpendiculares entre sí y a la dirección de propagación', 'Paralelos entre sí', 'Paralelos a la dirección de propagación', 'Independientes: no oscilan en fase'], 'Es una onda transversal: E, B y la dirección de avance forman un triedro, y E y B oscilan en fase.', { m: 'onda' }),
  mc(3, '¿Cuál es la expresión de la velocidad de escape de un planeta de masa M y radio R?', ['√(2GM/R)', 'GM/R²', '√(GM/R)', '2GM/R'], 'Se obtiene igualando energía cinética y energía potencial gravitatoria. √(GM/R) es la velocidad orbital circular rasante.', { m: 'solar' }),
  tx(3, 'La energía de un fotón es E = h·f. Si la frecuencia se duplica, ¿por cuánto se multiplica la energía?', ['2', 'dos', 'x2', 'por 2', 'por dos'], 'Energía y frecuencia son directamente proporcionales; h es la constante de Planck.', { m: 'onda' }),
  mc(3, 'En un gas ideal a volumen constante, si la temperatura absoluta se duplica, la presión…', ['Se duplica', 'Se reduce a la mitad', 'Se cuadruplica', 'No cambia'], 'Ley de Gay-Lussac: P/T es constante a volumen fijo. Las partículas chocan más y con más energía.', { m: 'estados' }),
  mc(3, 'En la Luna, g es aproximadamente 1/6 de la terrestre. El periodo de un mismo péndulo allí…', ['Aumenta en un factor √6 ≈ 2,45', 'Disminuye en un factor √6', 'Se multiplica por 6', 'No cambia'], 'T es proporcional a 1/√g.', { m: 'pendulo' }),
  mc(3, '¿Qué establece el principio de incertidumbre de Heisenberg?', ['No pueden conocerse a la vez con precisión arbitraria la posición y el momento', 'Las medidas siempre tienen error instrumental', 'La energía no se conserva a escala atómica', 'Los electrones no tienen posición'], 'Δx·Δp ≥ ħ/2: es un límite fundamental de la naturaleza, no un defecto de los aparatos.', { m: 'atomo' }),
  mc(3, 'Un satélite describe una órbita circular. ¿Qué trabajo realiza la gravedad en una vuelta?', ['Cero', 'Positivo', 'Negativo', 'Depende de la masa del satélite'], 'La fuerza es siempre perpendicular al desplazamiento, así que no realiza trabajo y la rapidez se mantiene.', { m: 'solar' }),
  mc(3, 'Según la relatividad especial, un reloj que se mueve respecto a un observador…', ['Marca el tiempo más despacio para ese observador', 'Marca el tiempo más deprisa', 'No se ve afectado', 'Se detiene al alcanzar el sonido'], 'Dilatación temporal: Δt = γ·Δt₀, con γ = 1/√(1 − v²/c²).'),
  fc(3, 'Energía de un fotón', 'E = h · f = h · c / λ', { m: 'onda' }),

  // --- Ampliación por temas ---
  // Cinemática y dinámica
  mc(1, 'Cuando empujas una pared, la pared…', ['Te empuja a ti con una fuerza igual y de sentido contrario', 'No ejerce ninguna fuerza sobre ti', 'Te empuja con una fuerza menor', 'Te empuja solo si se mueve'], 'Tercera ley de Newton: las fuerzas aparecen siempre por parejas, sobre cuerpos distintos.'),
  tx(2, 'Un coche parte del reposo con una aceleración constante de 2 m/s². ¿Qué distancia recorre, en metros, en 5 s?', ['25', '25 m'], 'x = ½·a·t² = ½ · 2 · 5² = 25 m.'),
  mc(2, 'Un bloque de 5 kg descansa sobre una mesa horizontal. ¿Cuánto vale la fuerza normal? (g = 10 m/s²)', ['50 N', '5 N', '0 N', '500 N'], 'El bloque está en equilibrio, así que la normal compensa al peso: N = m·g = 5 · 10.'),
  mc(2, 'Un coche toma una curva con rapidez constante. ¿Tiene aceleración?', ['Sí, porque cambia la dirección de la velocidad', 'No, porque la rapidez no cambia', 'Solo si frena', 'Solo si la curva es cerrada'], 'La velocidad es un vector. Cambiar su dirección exige una aceleración centrípeta, a = v²/r, dirigida hacia el centro.'),
  mc(3, 'Se lanza un proyectil con cierto ángulo. Sin rozamiento del aire, en el punto más alto de su trayectoria…', ['La velocidad vertical es cero y la horizontal se mantiene', 'La velocidad es cero', 'La aceleración es cero', 'La velocidad horizontal es cero'], 'El eje horizontal es un MRU y el vertical un MRUA. Arriba solo se anula la componente vertical; la aceleración sigue siendo g.'),
  mc(3, 'Un bloque de 2 kg desliza por un suelo horizontal con coeficiente de rozamiento 0,5. ¿Cuánto vale la fuerza de rozamiento? (g = 10 m/s²)', ['10 N', '20 N', '1 N', '4 N'], 'Fr = μ·N = μ·m·g = 0,5 · 2 · 10 = 10 N.'),
  tx(3, 'Un vagón de 2 kg que va a 3 m/s choca con otro de 1 kg en reposo y quedan enganchados. ¿A qué velocidad, en m/s, se mueven juntos?', ['2', '2 m/s'], 'Se conserva el momento lineal: 2·3 + 1·0 = (2 + 1)·v, de donde v = 2 m/s.'),
  fc(2, 'Ecuaciones del MRUA', 'v = v₀ + a·t  ·  x = x₀ + v₀·t + ½·a·t²  ·  v² = v₀² + 2·a·Δx'),

  // Energía y termodinámica
  tx(1, '¿Qué trabajo, en julios, realiza una fuerza de 20 N que desplaza un cuerpo 5 m en su misma dirección?', ['100', '100 j'], 'W = F·d·cos θ = 20 · 5 · 1 = 100 J.'),
  mc(1, 'Una máquina realiza un trabajo de 600 J en 3 s. ¿Qué potencia desarrolla?', ['200 W', '1800 W', '603 W', '0,005 W'], 'P = W / t = 600 / 3 = 200 W.'),
  tx(2, 'Expresa en kelvin una temperatura de 27 °C.', ['300', '300 k', '300.15', '300,15'], 'T(K) = t(°C) + 273 = 300 K.', { m: 'estados' }),
  tx(2, '¿Cuánta energía potencial, en julios, gana una masa de 2 kg al subirla 5 m? (g = 10 m/s²)', ['100', '100 j'], 'Ep = m·g·h = 2 · 10 · 5 = 100 J.'),
  mc(2, 'Mientras el hielo se funde a 0 °C, el calor que recibe…', ['Rompe uniones entre partículas sin subir la temperatura', 'Sube la temperatura poco a poco', 'Se pierde', 'Aumenta la masa del hielo'], 'Durante un cambio de estado la temperatura no varía: la energía es calor latente, Q = m·L.', { m: 'estados' }),
  mc(3, 'Una bola se deja caer desde 20 m sin rozamiento. Por conservación de la energía mecánica, ¿con qué velocidad llega al suelo? (g = 10 m/s²)', ['20 m/s', '10 m/s', '40 m/s', '200 m/s'], 'm·g·h = ½·m·v², así que v = √(2·g·h) = √400 = 20 m/s. No depende de la masa.'),
  mc(3, 'Un gas absorbe 500 J de calor y realiza 200 J de trabajo al expandirse. ¿Cuánto varía su energía interna?', ['Aumenta 300 J', 'Aumenta 700 J', 'Disminuye 300 J', 'No varía'], 'Primer principio: ΔU = Q − W = 500 − 200 = 300 J.', { m: 'estados' }),
  mc(3, '¿Qué afirma el segundo principio de la termodinámica?', ['La entropía de un sistema aislado nunca disminuye', 'La energía se conserva', 'El cero absoluto es inalcanzable', 'Todo el calor puede convertirse en trabajo'], 'Por eso el calor pasa solo del cuerpo caliente al frío y ninguna máquina térmica tiene un rendimiento del 100 %.'),
  fc(2, 'Calor intercambiado al cambiar la temperatura', 'Q = m · c · ΔT'),

  // Oscilaciones y ondas
  mc(1, '¿Por qué no se oye el sonido en el vacío?', ['Porque es una onda mecánica y necesita un medio material', 'Porque en el vacío viaja demasiado rápido', 'Porque en el vacío hace mucho frío', 'Sí se oye, pero más débil'], 'El sonido son compresiones y dilataciones de un medio. Sin partículas que vibren, no hay sonido.', { m: 'onda' }),
  mc(2, 'Una oscilación tiene un periodo de 0,5 s. ¿Cuál es su frecuencia?', ['2 Hz', '0,5 Hz', '5 Hz', '20 Hz'], 'f = 1 / T = 1 / 0,5 = 2 Hz.', { m: 'pendulo' }),
  tx(2, 'Una onda tiene una frecuencia de 5 Hz y una longitud de onda de 2 m. ¿Cuál es su velocidad, en m/s?', ['10', '10 m/s'], 'v = λ·f = 2 · 5 = 10 m/s.', { m: 'onda' }),
  mc(2, 'Al pasar del aire al agua, un rayo de luz…', ['Se acerca a la normal, porque en el agua va más despacio', 'Se aleja de la normal', 'No cambia de dirección nunca', 'Aumenta su velocidad'], 'Ley de Snell: n₁·sen θ₁ = n₂·sen θ₂. El agua tiene mayor índice de refracción (1,33), así que el ángulo disminuye.', { m: 'onda' }),
  mc(3, 'En una masa unida a un muelle, si la masa se cuadruplica, el periodo de oscilación…', ['Se duplica', 'Se cuadruplica', 'Se reduce a la mitad', 'No cambia'], 'T = 2π·√(m/k): el periodo es proporcional a √m, y √4 = 2.'),
  fc(2, 'Ley de Snell de la refracción', 'n₁ · sen θ₁ = n₂ · sen θ₂', { m: 'onda' }),

  // Gravitación y astronomía
  mc(2, 'Si la distancia entre dos masas se duplica, la fuerza gravitatoria entre ellas…', ['Se reduce a la cuarta parte', 'Se reduce a la mitad', 'Se duplica', 'No cambia'], 'F = G·M·m / r²: la fuerza es inversamente proporcional al cuadrado de la distancia.', { m: 'solar' }),
  tx(2, 'El campo gravitatorio en la superficie de la Luna vale 1,6 m/s². ¿Cuánto pesa allí, en newtons, un astronauta de 70 kg?', ['112', '112 n'], 'P = m·g = 70 · 1,6 = 112 N. Su masa sigue siendo 70 kg.'),
  mc(3, 'Según la segunda ley de Kepler, un planeta se mueve más rápido…', ['En el perihelio, el punto más cercano al Sol', 'En el afelio, el punto más lejano', 'Siempre a la misma velocidad', 'Cuando su órbita es circular'], 'El radio vector barre áreas iguales en tiempos iguales, así que cerca del Sol debe recorrer más arco.', { m: 'solar' }),
  mc(3, '¿Qué caracteriza a un satélite geoestacionario?', ['Su periodo es de 24 h y parece fijo en el cielo', 'Está a 400 km de altura', 'No está sometido a la gravedad', 'Da una vuelta cada 90 minutos'], 'Orbita sobre el ecuador a unos 35 800 km de altura, al mismo ritmo que gira la Tierra.', { m: 'solar' }),

  // Física moderna
  mc(1, '¿Cómo se llama la partícula de luz que propuso Einstein a partir de la idea de Planck?', ['Fotón', 'Electrón', 'Protón', 'Neutrón'], 'Cada fotón lleva una energía E = h·f.', { m: 'atomo' }),
  mc(2, 'En el efecto fotoeléctrico, si la luz no supera la frecuencia umbral del metal…', ['No se arranca ningún electrón, por intensa que sea la luz', 'Los electrones salen más despacio', 'Los electrones tardan más en salir', 'Salen menos electrones'], 'Cada fotón cede su energía a un solo electrón; si h·f es menor que el trabajo de extracción, no hay emisión.', { m: 'atomo' }),
  mc(2, 'En el modelo de Bohr, un átomo emite luz cuando un electrón…', ['Salta de un nivel de energía superior a otro inferior', 'Salta a un nivel superior', 'Gira en su nivel', 'Choca con el núcleo'], 'La energía del fotón emitido es la diferencia entre los dos niveles. Para subir de nivel debe absorber un fotón.', { m: 'atomo' }),
  mc(2, 'Según De Broglie, si el momento lineal de una partícula se duplica, su longitud de onda asociada…', ['Se reduce a la mitad', 'Se duplica', 'No cambia', 'Se cuadruplica'], 'λ = h / p: son inversamente proporcionales.', { m: 'atomo' }),
  tx(3, 'Calcula el factor de Lorentz γ de una nave que viaja a v = 0,6c.', ['1.25', '1,25', '5/4'], 'γ = 1/√(1 − 0,6²) = 1/√0,64 = 1/0,8 = 1,25.'),
  mc(3, 'Según E = m·c², ¿a cuánta energía equivale 1 g de masa?', ['9·10¹³ J', '3·10⁵ J', '9·10¹⁶ J', '3·10⁸ J'], 'E = 0,001 kg · (3·10⁸ m/s)² = 9·10¹³ J.'),
  mc(3, 'La semivida de un isótopo radiactivo es de 10 años. ¿Qué fracción de la muestra queda sin desintegrar a los 30 años?', ['1/8', '1/3', '1/6', 'Nada'], 'Pasan tres semividas: ½ · ½ · ½ = 1/8.'),
] };
