// Banco de preguntas: estructura común. Para ampliar una materia basta con añadir líneas a su lista `q`.
// mc(nivel, pregunta, [correcta, distractor, ...], explicación, extras) -> opción múltiple (la correcta va SIEMPRE primero; se baraja al mostrar)
// tx(nivel, pregunta, respuesta | [respuestas válidas], explicación, extras) -> respuesta escrita
// fc(nivel, anverso, reverso, extras)                                     -> tarjeta de memoria
// code(nivel, lenguaje 'py'|'sql', enunciado, {starter, post, out, sol, ord, e}) -> código ejecutable
//   Python: se ejecuta el código del alumno + `post`, y la salida debe coincidir con `out`.
//   SQL: el resultado debe coincidir con el de la consulta `sol` (ord:true si importa el orden).
// extras: { m: 'idMaqueta3D', c: 'código a mostrar' }   ·   niveles: 1 básico, 2 intermedio, 3 avanzado
window.BANK = {};
window.AREAS = [['ciencias', 'Ciencias'], ['idiomas', 'Idiomas'], ['programacion', 'Programación']];
window.mc = (l, q, o, e, x) => Object.assign({ l, t: 'mc', q, o, e }, x);
window.tx = (l, q, a, e, x) => Object.assign({ l, t: 'in', q, a: [].concat(a), e }, x);
window.fc = (l, q, a, x) => Object.assign({ l, t: 'fc', q, a, e: '' }, x);
// Respuesta numérica: a = valor correcto, u = unidad que se muestra junto a la casilla; se acepta un error relativo de tol (2 % por defecto)
window.nm = (l, q, a, u, e, x) => Object.assign({ l, t: 'num', q, a, u: u || '', e, tol: 0.02 }, x);
// Ordenar: o = elementos en el orden correcto (se muestran desordenados)
window.ord = (l, q, o, e, x) => Object.assign({ l, t: 'ord', q, o, e }, x);
window.code = (l, lang, q, x) => Object.assign({ l, t: 'code', lang, q }, x);
