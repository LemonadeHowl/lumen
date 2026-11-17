// Ayudantes para escribir los modelos de examen de idiomas (data/idiomas/examen_<idioma>_<nivel>.js).
// Cada modelo es una lista de partes (Lesen, Hören, Schreiben, Sprechen). Cada parte tiene:
//   k: clave · n: nombre · d: descripción · t: textos largos {clave: texto}, que las preguntas citan por su clave · q: tareas
// Tipos de tarea, que reproducen los de los exámenes oficiales:
//   EX.rf(texto, afirmación, ¿es correcta?, explicación)        Richtig / Falsch
//   EX.jn(texto, afirmación, ¿sí?, explicación)                 Ja / Nein
//   EX.mc(texto, pregunta, [opciones], índice correcto, expl.)  opción múltiple a, b, c (en el orden dado)
//   EX.zu(texto, situación, 'abcdefX', letra correcta, expl.)   emparejar con un anuncio o una persona (X o 0 = ninguno)
//   EX.oir(tarea)        convierte el texto de la tarea en audio: se escucha en vez de leerse
//   EX.libre(consigna, modelo, criterios)                       redacción: se compara con un modelo, no puntúa
//   EX.oral(consigna, modelo, criterios)                        expresión oral: se dice en voz alta y se compara con un modelo
(function () {
  const L = 'abcdefghij';
  window.EXAMEN = window.EXAMEN || {};
  window.EX = {
    rf: (tx, q, ok, e) => ({ t: 'mc', tx, q, o: ['Richtig', 'Falsch'], r: ok ? 0 : 1, e }),
    jn: (tx, q, ok, e) => ({ t: 'mc', tx, q, o: ['Ja', 'Nein'], r: ok ? 0 : 1, e }),
    mc: (tx, q, o, r, e) => ({ t: 'mc', tx, q, o: o.map((x, i) => L[i] + ')  ' + x), r, e }),
    zu: (tx, q, letras, r, e) => ({ t: 'mc', tx, q, o: letras.split(''), r: letras.indexOf(r), e }),
    oir: (q) => { q.say = q.tx; delete q.tx; q.listen = true; return q; },
    libre: (q, a, e) => ({ t: 'libre', q, a, e }),
    oral: (q, a, e) => ({ t: 'libre', oral: true, q, a, e }),
    add: (idioma, nivel, examen) => { (EXAMEN[idioma] = EXAMEN[idioma] || {})[nivel] = examen; },
  };
})();
