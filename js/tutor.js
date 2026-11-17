// Tutor: carpetas por área, ruta de lecciones (idiomas), índice de temas con teoría (ciencias y programación),
// práctica adaptativa con repetición espaciada, flashcards automáticas y ejecución real de código.
(function () {
  const KEY = 'lumen.v1';
  const LV = ['', 'Básico', 'Intermedio', 'Avanzado'];
  const IV = [60e3, 600e3, 864e5, 3 * 864e5, 7 * 864e5, 21 * 864e5]; // intervalos de repaso por «caja»
  const START = { aleman: 1.35 };
  const PRAISE = ['¡Correcto!', '¡Muy bien!', 'Exacto.', '¡Eso es!', 'Perfecto.'];
  const LANGS = { aleman: ['de-DE', 1], frances: ['fr-FR', 2], italiano: ['it-IT', 3], catalan: ['ca-ES', 4] }; // [voz, columna en VOCAB]
  const AREA_INFO = { ciencias: 'Índice de temas con apuntes, ejercicios y maquetas 3D.', idiomas: 'Ruta de lecciones cortas por temas, con audio.', programacion: 'Apuntes por temas y código que se ejecuta de verdad.' };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dstr = (d) => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const dayNum = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
  const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const P = (id) => '#/tutor/' + BANK[id].area + '/' + id;
  const topicsOf = (id) => (window.TOPICS && TOPICS[id] ? TOPICS[id].slice().sort((a, b) => (a.n || 0) - (b.n || 0)) : []);

  // Identificador estable por pregunta y reparto de las preguntas entre los temas de cada materia.
  Object.keys(BANK).forEach((id) => BANK[id].q.forEach((q) => {
    q.s = id; q.id = hash(id + q.q + (q.c || '') + (q.t === 'fc' ? q.a : ''));
    const ts = window.TOPICS && TOPICS[id];
    if (ts && !q.tp) { const txt = q.q + ' ' + (q.c || '') + ' ' + (q.t === 'fc' ? q.a : ''); q.tp = (ts.slice().sort((x, y) => (x.pr || 9) - (y.pr || 9)).find((t) => t.match.test(txt)) || ts[ts.length - 1]).id; } // pr = prioridad de reparto
  }));
  // Enlaces «Ver en 3D»: algunas preguntas apuntan a maquetas que ya no están en el laboratorio. Se redirigen a la
  // maqueta que las sustituye o, si no hay ninguna, se quita el enlace (antes abrían la célula por defecto).
  const SUSTITUTA = { onda: 'ondas', atomo: 'tabla', corazon: 'cuerpo', neurona: 'cuerpo' };
  const hay3D = (m) => !!window.MODELS && MODELS.some((x) => x.id === m);
  const arreglar3D = (o) => { if (!o.m || hay3D(o.m)) return; if (hay3D(SUSTITUTA[o.m])) o.m = SUSTITUTA[o.m]; else delete o.m; };
  Object.keys(BANK).forEach((id) => BANK[id].q.forEach(arreglar3D));
  Object.keys(window.TOPICS || {}).forEach((id) => TOPICS[id].forEach(arreglar3D));
  const pool = (id) => BANK[id].q.filter((q) => q.t !== 'fc');
  // Curso por niveles (data/idiomas/curso_<idioma>.js): sus preguntas no entran en la repetición espaciada
  Object.keys(window.CURSO || {}).forEach((id) => CURSO[id].forEach((N) => {
    const prep = (q, k) => Object.assign(q, { s: id, gen: true, l: q.l || 1, e: q.e || '', id: hash(id + k + q.q + (q.tx || '') + (q.say || '')) });
    N.u.forEach((U) => {
      U.g.e.forEach((q) => prep(q, U.id + 'g'));
      const txt = U.d.l.map((l) => (l[0] === 'Text' ? '' : l[0] + ': ') + l[1]).join('\n');
      U.d.q.forEach((q) => { q.tx = txt; prep(q, U.id + 'l'); });
    });
  }));
  // Modelos de examen por nivel: los textos largos se guardan una vez en pt.t y cada pregunta los cita por su clave
  Object.keys(window.EXAMEN || {}).forEach((id) => Object.keys(EXAMEN[id]).forEach((nv) => EXAMEN[id][nv].partes.forEach((pt) => pt.q.forEach((q, i) => {
    if (pt.t && pt.t[q.tx]) q.tx = pt.t[q.tx];
    if (pt.t && pt.t[q.say]) q.say = pt.t[q.say];
    Object.assign(q, { s: id, gen: true, l: 1, e: q.e || '', id: hash(id + nv + pt.k + i + q.q) });
  }))));

  // ───── Estado guardado ─────
  const fresh = () => ({ subj: {}, xp: 0, streak: { day: '', n: 0 }, daily: { day: '' }, lang: 'aleman' });
  let S = fresh();
  try { Object.assign(S, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { /* sin almacenamiento: se sigue en memoria */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* idem */ } };
  function st(id) {
    const s = S.subj[id] || (S.subj[id] = { level: START[id] || 1, mode: 'auto', cards: {} });
    if (!s.deck) s.deck = []; if (!s.lessons) s.lessons = {};
    return s;
  }
  const target = (s) => (s.mode === 'auto' ? Math.max(1, Math.min(3, Math.round(s.level))) : +s.mode);

  function stats(id) {
    const s = st(id), now = Date.now(), qs = pool(id), x = { total: qs.length, seen: 0, mastered: 0, due: 0 };
    qs.forEach((q) => { const c = s.cards[q.id]; if (!c) return; x.seen++; if (c.box >= 3) x.mastered++; if (c.due <= now) x.due++; });
    return x;
  }

  // ───── Flashcards: se añaden solas al aprender ─────
  function addCard(id, f, b, src) {
    const s = st(id), cid = hash(f);
    if (s.deck.some((c) => c.id === cid)) return false;
    s.deck.push({ id: cid, f, b, src: src || '', box: 0, due: Date.now() }); return true;
  }
  const deckDue = (id) => { const now = Date.now(); return st(id).deck.filter((c) => c.due <= now).length; };

  // ───── Práctica adaptativa ─────
  function pick(id, lastId) {
    const s = st(id), now = Date.now(), L = target(s), qs = pool(id);
    const scope = (q) => (s.mode === 'auto' ? q.l <= L : q.l === L);
    const due = qs.filter((q) => s.cards[q.id] && s.cards[q.id].due <= now && scope(q) && q.id !== lastId);
    if (due.length) return { q: due.sort((a, b) => s.cards[a.id].due - s.cards[b.id].due)[0] };
    let nu = qs.filter((q) => !s.cards[q.id] && q.l === L);
    if (!nu.length && s.mode === 'auto') {
      const rest = qs.filter((q) => !s.cards[q.id]);
      const dmin = Math.min.apply(null, rest.map((q) => Math.abs(q.l - L)));
      nu = rest.filter((q) => Math.abs(q.l - L) === dmin);
    }
    if (nu.length) return { q: nu[Math.floor(Math.random() * nu.length)] };
    const rest = qs.filter((q) => scope(q) && q.id !== lastId && s.cards[q.id]).sort((a, b) => s.cards[a.id].due - s.cards[b.id].due);
    return { q: rest[0] || qs[0], early: true };
  }
  function bumpStreak() {
    const t = dstr(); if (S.streak.day === t) return;
    S.streak = { day: t, n: S.streak.day === dstr(new Date(Date.now() - 864e5)) ? S.streak.n + 1 : 1 };
  }
  // Registra una respuesta. Devuelve +1 / -1 si el nivel adaptativo cambia.
  function answer(id, q, ok) {
    const s = st(id); let change = 0;
    if (ok) S.xp += 10 * (q.l || 1);
    if (!q.gen) { // las preguntas generadas en lecciones de vocabulario no entran en la repetición espaciada
      const c = s.cards[q.id] || (s.cards[q.id] = { box: 0, seen: 0, ok: 0 }), first = !c.seen;
      c.seen++; if (ok) { c.ok++; c.box = first ? 2 : Math.min(c.box + 1, 5); } else c.box = 0;
      c.due = Date.now() + IV[c.box];
      if (s.mode === 'auto') {
        const before = target(s), w = q.l >= before ? 1 : 0.5;
        s.level = Math.max(1, Math.min(3.4, s.level + (ok ? 0.13 : -0.17) * w));
        change = Math.sign(target(s) - before);
      }
    }
    bumpStreak(); save();
    return change;
  }

  // ───── Corrección de texto ─────
  const norm = (t) => String(t).toLowerCase().replace(/[’`´]/g, "'").replace(/^[¿¡\s]+/, '').replace(/[.;!?\s]+$/, '').replace(/\s+/g, ' ');
  const bare = (t) => norm(t).normalize('NFD').replace(/[̀-ͯ]/g, '');
  function checkText(q, val) {
    if (q.a.some((a) => norm(a) === norm(val))) return { ok: true };
    if (q.a.some((a) => bare(a) === bare(val))) return { ok: true, note: 'Ojo con las tildes y la ortografía: se escribe <b>' + esc(q.a[0]) + '</b>.' };
    return { ok: false };
  }
  const toks = (t) => String(t).replace(/[?!.,¿¡]/g, ' ').split(/\s+/).filter(Boolean);
  // Números: acepta coma o punto decimal, espacios de miles y notación científica (1,5e3 · 1,5·10^3 · 1,5x10³)
  const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
  function leerNum(t) {
    let s = String(t).trim().replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/g, (c) => SUP[c]).replace(/−/g, '-').replace(/(\d)[  ](?=\d{3}\b)/g, '$1');
    s = s.replace(/\s*[·x×*]\s*10\s*\^?\s*(-?\d+)/i, 'e$1').replace(',', '.');
    const m = s.match(/-?\d+(?:\.\d+)?(?:e-?\d+)?/i);
    return m ? parseFloat(m[0]) : NaN;
  }
  const SUPI = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const fmtNum = (v) => {
    if (Math.abs(v) >= 1e5 || (Math.abs(v) < 1e-3 && v !== 0)) {
      const [m, e] = v.toExponential(3).split('e');
      return String(+m).replace('.', ',') + '·10' + String(+e).replace('-', '⁻').replace(/\d/g, (d) => SUPI[d]);
    }
    return String(+v.toPrecision(4)).replace('.', ',');
  };
  function checkNum(q, val) {
    const v = leerNum(val); if (isNaN(v)) return { ok: false, note: 'No se ha reconocido ningún número.' };
    const tol = q.tol === undefined ? 0.02 : q.tol, ok = q.a === 0 ? Math.abs(v) < 1e-9 : Math.abs(v - q.a) <= Math.abs(q.a) * tol;
    if (ok && v !== q.a) return { ok: true, note: 'Valor exacto: <b>' + fmtNum(q.a) + (q.u ? ' ' + esc(q.u) : '') + '</b>.' };
    return { ok };
  }

  // ───── Audio (voz del dispositivo) ─────
  // Pronunciación: primero la grabación de un hablante nativo (data/idiomas/audio.js); si no la hay, la voz del
  // dispositivo, pero solo si tiene una voz de ese idioma (con otra voz sonaría mal y confunde).
  let player = null, aviso = null;
  function avisar(msg) {
    if (!aviso) { aviso = document.createElement('div'); aviso.className = 'toast'; document.body.appendChild(aviso); }
    aviso.textContent = msg; aviso.classList.add('on'); clearTimeout(aviso.t); aviso.t = setTimeout(() => aviso.classList.remove('on'), 4200);
  }
  function voz(id, text) {
    try {
      const u = new SpeechSynthesisUtterance(text), code = LANGS[id][0], vs = speechSynthesis.getVoices();
      const v = vs.find((x) => x.lang.replace('_', '-') === code) || vs.find((x) => x.lang.slice(0, 2) === code.slice(0, 2));
      if (vs.length && !v) { avisar('Este dispositivo no tiene instalada una voz de ' + BANK[id].name.toLowerCase() + ', y esta frase aún no tiene grabación.'); return; }
      if (v) u.voice = v;
      u.lang = code; u.rate = 0.9; speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { /* sin síntesis de voz */ }
  }
  function speak(id, text) {
    const a = window.AUDIO && AUDIO[id] && AUDIO[id][text];
    try { if (player) player.pause(); speechSynthesis.cancel(); } catch (e) { /* nada que parar */ }
    if (!a) return voz(id, text);
    try { player = new Audio('audio/' + id + '/' + a[0]); const pr = player.play(); if (pr && pr.catch) pr.catch(() => voz(id, text)); } catch (e) { voz(id, text); }
  }
  const spk = '<button class="spk" type="button" title="Escuchar" aria-label="Escuchar"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg></button>';

  // ───── Ejecución real de código ─────
  const loadScript = (src) => new Promise((ok, ko) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => ko(new Error('red')); document.head.appendChild(s); });
  let pyP = null, sqlP = null;
  function getPy() { if (!pyP) pyP = loadScript('lib/pyodide/pyodide.js').then(() => window.loadPyodide({ indexURL: 'lib/pyodide/' })).catch((e) => { pyP = null; throw e; }); return pyP; }
  function getSql() {
    const base = 'lib/sql/';
    if (!sqlP) sqlP = loadScript(base + 'sql-wasm.js').then(() => window.initSqlJs({ locateFile: (f) => base + f })).catch((e) => { sqlP = null; throw e; });
    return sqlP;
  }
  async function runPy(src, post) {
    const py = await getPy(); let out = '';
    py.setStdout({ batched: (s) => { out += s + '\n'; } }); py.setStderr({ batched: () => {} });
    const ns = py.globals.get('dict')();
    try { py.runPython(src + '\n' + (post || ''), { globals: ns }); return { out: out.trim() }; }
    catch (e) { const lines = String(e.message || e).trim().split('\n'); return { out: out.trim(), err: lines[lines.length - 1] }; }
    finally { if (ns.destroy) ns.destroy(); }
  }
  // La consulta del alumno y la solución se ejecutan cada una en su propia base recién creada: así los ejercicios que
  // crean vistas, disparadores o modifican datos no se pisan entre sí.
  async function runSql(src, q) {
    const SQL = await getSql(), db = new SQL.Database(), ref = new SQL.Database();
    try {
      db.run(BANK.sql.setup); ref.run(BANK.sql.setup);
      let res; try { res = db.exec(src); } catch (e) { return { err: e.message }; }
      const rows = (r) => (r.length ? r[r.length - 1].values : []).map((v) => JSON.stringify(v));
      const a = rows(res), b = rows(ref.exec(q.sol));
      if (!q.ord) { a.sort(); b.sort(); }
      return { pass: a.length === b.length && a.join('|') === b.join('|'), table: res[res.length - 1] };
    } finally { db.close(); ref.close(); }
  }
  function tableHtml(t) {
    if (!t) return '<p class="muted">La consulta no devolvió filas.</p>';
    return '<div class="tablewrap"><table><tr>' + t.columns.map((c) => '<th>' + esc(c) + '</th>').join('') + '</tr>' +
      t.values.slice(0, 12).map((r) => '<tr>' + r.map((v) => '<td>' + esc(v === null ? 'NULL' : v) + '</td>').join('') + '</tr>').join('') + '</table></div>';
  }

  // ───── Lecciones ─────
  const gq = (id, o) => Object.assign({ s: id, l: 1, e: '', gen: true, id: hash(id + o.t + o.q + (o.a || '')) }, o);
  const ART = /^(der|die|das|le|la|les|il|lo|i|gli|el|els|un|une|una|l')\s*/i;
  function vocabLesson(id, tp, ws) {
    const li = LANGS[id][1], T = (w) => w[li], name = BANK[id].name.toLowerCase(), qs = [];
    const others = (w, f) => shuffle(tp.w.filter((x) => f(x) !== f(w))).slice(0, 3).map(f);
    ws.forEach((w) => qs.push(gq(id, { t: 'new', q: T(w), a: w[0] })));
    ws.forEach((w) => qs.push(gq(id, { t: 'mc', q: '¿Cómo se dice «' + w[0] + '» en ' + name + '?', o: [T(w)].concat(others(w, T)) })));
    qs.push(gq(id, { t: 'match', q: 'Empareja cada palabra con su traducción', pairs: ws.map((w) => [T(w), w[0]]) }));
    ws.forEach((w) => qs.push(gq(id, { t: 'mc', q: '¿Qué significa «' + T(w) + '»?', say: T(w), o: [w[0]].concat(others(w, (x) => x[0])) })));
    ws.forEach((w) => qs.push(gq(id, { t: 'in', q: 'Escribe en ' + name + ': «' + w[0] + '»', a: [T(w), T(w).replace(ART, '')] })));
    // Escucha: solo con las palabras que tienen grabación de un hablante nativo
    const oir = shuffle(ws.filter((w) => grab(id, T(w))));
    oir.slice(0, 2).forEach((w) => qs.push(dictado(id, T(w))));
    oir.slice(2, 4).forEach((w) => qs.push(gq(id, { t: 'mc', q: 'Escucha: ¿qué significa?', say: T(w), listen: true, o: [w[0]].concat(others(w, (x) => x[0])) })));
    return qs;
  }
  function phraseLesson(id, tp) {
    const li = LANGS[id][1], T = (w) => w[li], qs = [];
    tp.p.forEach((p) => qs.push(gq(id, { t: 'new', q: T(p), a: p[0] })));
    tp.p.forEach((p) => {
      const extra = shuffle([].concat.apply([], tp.p.filter((x) => x !== p).map((x) => toks(T(x)))).filter((w) => toks(T(p)).indexOf(w) < 0)).slice(0, 2);
      qs.push(gq(id, { t: 'build', q: 'Ordena las palabras para traducir: «' + p[0] + '»', a: T(p), x: extra }));
    });
    tp.p.forEach((p) => qs.push(gq(id, { t: 'mc', q: '¿Qué significa «' + T(p) + '»?', say: T(p), o: [p[0]].concat(tp.p.filter((x) => x !== p).map((x) => x[0])) })));
    qs.push(gq(id, { t: 'match', q: 'Empareja cada palabra con su traducción', pairs: shuffle(tp.w).slice(0, 4).map((w) => [T(w), w[0]]) }));
    if (RECO) shuffle(tp.p).slice(0, 2).forEach((p) => qs.push(gq(id, { t: 'say', q: 'Dilo en voz alta', a: T(p), es: p[0] })));
    return qs;
  }
  const RECO = window.SpeechRecognition || window.webkitSpeechRecognition; // reconocimiento de voz del navegador, si lo hay
  const grab = (id, t) => !!(window.AUDIO && AUDIO[id] && AUDIO[id][t]);
  const dictado = (id, t) => gq(id, { t: 'in', q: 'Escucha y escribe lo que oyes', say: t, listen: true, a: [t, t.replace(ART, '')] });
  // Ruta de un idioma: por cada tema, dos lecciones de palabras y una de frases; al final, gramática por niveles.
  function lessonsOf(id) {
    const out = [];
    if (!LANGS[id]) return out;
    VOCAB.forEach((tp) => {
      out.push({ unit: tp.name, name: 'Palabras I', id: tp.id + '-1', make: () => vocabLesson(id, tp, tp.w.slice(0, 4)) });
      out.push({ unit: tp.name, name: 'Palabras II', id: tp.id + '-2', make: () => vocabLesson(id, tp, tp.w.slice(4, 8)) });
      out.push({ unit: tp.name, name: 'Frases', id: tp.id + '-f', make: () => phraseLesson(id, tp) });
    });
    [1, 2, 3].forEach((L) => {
      const qs = pool(id).filter((q) => q.l === L), n = Math.ceil(qs.length / 5), size = Math.ceil(qs.length / n);
      for (let i = 0; i < n; i++) out.push({ unit: 'Gramática · nivel ' + LV[L].toLowerCase(), name: 'Lección ' + (i + 1), id: 'g' + L + '-' + i, lvl: L, make: () => qs.slice(i * size, i * size + size) });
    });
    return out;
  }
  const topicQs = (id, t) => pool(id).filter((q) => q.tp === t.id);

  // ───── Exámenes ─────
  // ámbito: t-<tema> (ciencias y programación), u-<tema de vocabulario> o g<nivel> (idiomas). Devuelve título y modelos.
  // Las secciones de idiomas siguen la estructura habitual de los exámenes oficiales (comprensión lectora, comprensión
  // oral, expresión escrita y expresión oral); las preguntas son propias de Lumen.
  function examen(id, ambito) {
    const M = [], mk = (k, n, d, qs) => { if (qs.length >= 3) M.push({ k, n, d, qs }); };
    if (ambito[0] === 'n') { // modelo de examen oficial de un nivel
      const X = window.EXAMEN && EXAMEN[id] && EXAMEN[id][ambito.slice(2)]; if (!X) return null;
      X.partes.forEach((pt) => M.push({ k: pt.k, n: pt.n, d: pt.d, qs: pt.q }));
      return { title: X.titulo, nivel: ambito.slice(2), M, desc: X.desc };
    }
    if (LANGS[id] && ambito[0] === 'u') {
      const tp = VOCAB.find((x) => x.id === ambito.slice(2)); if (!tp) return null;
      const li = LANGS[id][1], T = (w) => w[li], name = BANK[id].name.toLowerCase();
      const otras = (w, f, arr) => shuffle(arr.filter((x) => f(x) !== f(w))).slice(0, 3).map(f);
      mk('lectura', 'Comprensión lectora y vocabulario', 'Entender palabras y frases escritas.', tp.w.map((w) => gq(id, { t: 'mc', q: '¿Qué significa «' + T(w) + '»?', o: [w[0]].concat(otras(w, (x) => x[0], tp.w)) }))
        .concat(tp.p.map((p) => gq(id, { t: 'mc', q: '¿Qué significa «' + T(p) + '»?', o: [p[0]].concat(otras(p, (x) => x[0], tp.p)) }))));
      mk('oral', 'Comprensión oral', 'Entender lo que se oye, sin verlo escrito. Solo con las palabras que tienen grabación.', tp.w.filter((w) => grab(id, T(w))).map((w, i) => (i % 2 ? dictado(id, T(w))
        : gq(id, { t: 'mc', q: 'Escucha: ¿qué significa?', say: T(w), listen: true, o: [w[0]].concat(otras(w, (x) => x[0], tp.w)) }))));
      mk('escrita', 'Expresión escrita', 'Escribir palabras y construir frases.', tp.w.map((w) => gq(id, { t: 'in', q: 'Escribe en ' + name + ': «' + w[0] + '»', a: [T(w), T(w).replace(ART, '')] }))
        .concat(tp.p.map((p) => gq(id, { t: 'build', q: 'Ordena las palabras para traducir: «' + p[0] + '»', a: T(p), x: shuffle([].concat.apply([], tp.p.filter((x) => x !== p).map((x) => toks(T(x)))).filter((w) => toks(T(p)).indexOf(w) < 0)).slice(0, 2) }))));
      if (RECO) mk('hablada', 'Expresión oral', 'Decir las frases en voz alta. Necesita micrófono y conexión.', tp.p.map((p) => gq(id, { t: 'say', q: 'Dilo en voz alta', a: T(p), es: p[0] })).concat(tp.w.slice(0, 2).map((w) => gq(id, { t: 'say', q: 'Dilo en voz alta', a: T(w), es: w[0] }))));
      return { title: tp.name, nivel: 'A1', M };
    }
    let qs, title, nivel = '';
    if (LANGS[id]) { const L = +ambito.slice(1); qs = pool(id).filter((q) => q.l === L); title = 'Gramática · nivel ' + LV[L].toLowerCase(); nivel = ['', 'A1–A2', 'B1', 'B2'][L]; }
    else { const t = topicsOf(id).find((x) => x.id === ambito.slice(2)); if (!t) return null; qs = topicQs(id, t); title = t.name; }
    mk('test', 'Tipo test', 'Preguntas de opción múltiple, como en la mayoría de las pruebas objetivas.', qs.filter((q) => q.t === 'mc'));
    mk('escrita', BANK[id].area === 'programacion' ? 'Práctico' : 'Respuesta escrita', BANK[id].area === 'programacion' ? 'Completar y escribir código que se ejecuta de verdad. Puedes ejecutarlo las veces que necesites.' : 'Respuestas cortas y cálculos, sin opciones entre las que elegir.', qs.filter((q) => q.t === 'in' || q.t === 'code' || q.t === 'num'));
    if (BANK[id].area === 'ciencias') mk('orden', 'Ordenar procesos', 'Poner en orden las etapas de un proceso o los elementos de una serie.', qs.filter((q) => q.t === 'ord'));
    mk('mixto', 'Mixto', 'Una selección de todos los tipos de pregunta del tema.', shuffle(qs).slice(0, 12));
    return { title, nivel, M };
  }
  function examPage(el, id, ambito) {
    const E = examen(id, ambito), s = st(id), back = ambito[0] === 't' ? P(id) + '/tema/' + ambito.slice(2) : P(id);
    if (!E) return hub(el, id);
    el.innerHTML = `<div class="session wide"><p><a href="${back}">← Volver</a></p><h1>Examen · ${esc(E.title)}</h1>
      <p class="muted">Sin tiempo límite y sin corrección sobre la marcha: respondes todo y al final ves la nota y el repaso de cada pregunta. No afecta a tu progreso.${E.nivel ? ' Nivel orientativo: ' + E.nivel + ' del Marco Común Europeo.' : ''}</p>
      ${E.desc ? '<p class="muted">' + esc(E.desc) + ' Los textos y las preguntas son de Lumen, escritos imitando el formato del modelo oficial; no son preguntas de exámenes reales.</p>' : ''}
      ${LANGS[id] && ambito[0] === 'u' ? '<p class="muted">Las cuatro partes siguen la estructura de los exámenes oficiales de idiomas (comprensión lectora, comprensión oral, expresión escrita y expresión oral). Las preguntas son de Lumen, no de exámenes reales.</p>' : ''}
      <div class="toc">${E.M.length ? E.M.map((m) => { const best = s.exams && s.exams[ambito + '/' + m.k];
        return `<a class="card topic" href="${P(id)}/examen/${ambito}/${m.k}"><span class="num">${m.qs.length}</span><div><h3 style="margin:0">${esc(m.n)}</h3><p class="muted" style="margin:0">${esc(m.d)}</p></div>
          <small>${best !== undefined ? 'Mejor nota: ' + String(best).replace('.', ',') : m.qs.length + ' preguntas'}</small></a>`; }).join('') : '<div class="card"><p style="margin:0">Este tema aún no tiene preguntas suficientes para un examen.</p></div>'}</div></div>`;
  }
  function nextLesson(id) { const s = st(id), ls = lessonsOf(id); return ls.find((l) => !s.lessons[l.id]) || null; }

  // ───── Eventos diarios ─────
  function daily() {
    const t = dstr();
    if (S.daily.day !== t) {
      const all = [];
      Object.keys(BANK).forEach((id) => { const L = target(st(id)); pool(id).forEach((q) => { if (q.l <= L) all.push(q); }); });
      S.daily = { day: t, qid: all[(dayNum() * 7919) % all.length].id, done: false, ok: false }; save();
    }
    let q = null;
    Object.keys(BANK).forEach((id) => BANK[id].q.forEach((x) => { if (x.id === S.daily.qid) q = x; }));
    return { q: q || BANK.biologia.q[0], done: S.daily.done, ok: S.daily.ok };
  }
  function dailyLesson() {
    const id = LANGS[S.lang] ? S.lang : 'aleman', l = nextLesson(id);
    return l ? { id, name: BANK[id].name, unit: l.unit, lesson: l.name, href: P(id) + '/leccion/' + l.id } : null;
  }
  function summary() {
    const y = dstr(new Date(Date.now() - 864e5)), r = { xp: S.xp, streak: (S.streak.day === dstr() || S.streak.day === y) ? S.streak.n : 0, due: 0, cards: 0, mastered: 0, total: 0 };
    Object.keys(BANK).forEach((id) => { const x = stats(id); r.due += x.due + deckDue(id); r.cards += st(id).deck.length; r.mastered += x.mastered; r.total += x.total; });
    return r;
  }

  // ───── Apuntes: mini formato de texto ─────
  function renderNotes(src) {
    const inl = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    let h = '', list = false, codeBuf = null;
    const flush = () => { if (list) { h += '</ul>'; list = false; } if (codeBuf) { h += '<pre><code>' + esc(codeBuf.join('\n')) + '</code></pre>'; codeBuf = null; } };
    src.trim().split('\n').forEach((ln) => {
      if (ln.startsWith('|')) { if (list) flush(); (codeBuf = codeBuf || []).push(ln.slice(2)); return; }
      if (ln.startsWith('- ')) { if (codeBuf) flush(); if (!list) { h += '<ul>'; list = true; } h += '<li>' + inl(ln.slice(2)) + '</li>'; return; }
      flush();
      if (ln.startsWith('## ')) h += '<h3>' + inl(ln.slice(3)) + '</h3>';
      else if (ln.startsWith('$ ')) h += '<div class="formula">' + inl(ln.slice(2)) + '</div>';
      else if (ln.startsWith('> ')) h += '<div class="note">' + inl(ln.slice(2)) + '</div>';
      else if (ln.trim()) h += '<p>' + inl(ln) + '</p>';
    });
    flush(); return h;
  }

  // ───── Tamaño de letra (se recuerda en este navegador) ─────
  const letraN = () => { try { return +localStorage.getItem('lumen.font') || 0; } catch (e) { return 0; } };
  function letra(n) {
    n = Math.max(-2, Math.min(5, n));
    try { localStorage.setItem('lumen.font', n); } catch (e) { /* sin almacenamiento */ }
    document.documentElement.style.fontSize = n ? (100 + 8 * n) + '%' : '';
  }
  letra(letraN());

  // ───── Vistas ─────
  let keyFn = null;
  document.addEventListener('keydown', (e) => { if (keyFn && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) keyFn(e); });

  // Carátula de la materia: su icono (js/iconos.js) o, si no lo tiene, sus iniciales sobre su color
  const caratula = (id) => (window.ICONOS && ICONOS[id] ? `<span class="mono ico">${ICONOS[id]}</span>` : `<span class="mono" style="background:${BANK[id].color}">${BANK[id].mono}</span>`);
  const subjCard = (id) => {
    const b = BANK[id], x = stats(id), s = st(id), dd = deckDue(id);
    return `<a class="card subj" href="${P(id)}"><div class="subj-h">${caratula(id)}
      <div><h3 style="margin:0">${b.name}</h3><small>${LV[target(s)]} · ${s.deck.length} flashcards</small></div></div>
      <div class="bar"><i style="width:${Math.round(100 * x.mastered / x.total)}%"></i></div>
      <small>${x.mastered}/${x.total} ejercicios dominados${x.due + dd ? ' · ' + (x.due + dd) + ' por repasar' : ''}</small></a>`;
  };

  function home(el) {
    let h = '<h1>Tutor</h1><p class="muted">Tres carpetas, cada una con sus materias. Entra en una para ver sus temas, lecciones y flashcards.</p><div class="folders">';
    AREAS.forEach(([a, name]) => {
      const ids = Object.keys(BANK).filter((id) => BANK[id].area === a);
      h += `<a class="card folder" href="#/tutor/${a}"><div class="ftab"></div><h2>${name}</h2><p class="muted">${AREA_INFO[a]}</p>
        <div class="chips">${ids.map((id) => `<span class="chip" style="border-color:${BANK[id].color}">${BANK[id].name}</span>`).join('')}</div></a>`;
    });
    // Plegado por defecto: solo se abre cuando hace falta (copia de seguridad, modo sin conexión, tamaño de letra)
    h += `</div><details class="card datos" style="margin-top:28px"><summary><h3>Tus datos</h3><span class="muted">Copia de seguridad, uso sin conexión y tamaño de letra</span></summary>
      <p class="muted">El progreso y las flashcards se guardan solo en este navegador. Con una copia de seguridad puedes llevarlos a otro dispositivo o recuperarlos.</p>
      <div class="row"><button class="btn small" id="exp">Guardar copia de seguridad</button><button class="btn ghost small" id="imp">Restaurar una copia</button>
        <input type="file" id="impf" accept=".json,application/json" hidden><button class="btn ghost small" id="reset">Borrar todo mi progreso</button></div>
      <div id="offbox" hidden style="margin-top:14px"><div class="row"><button class="btn ghost small" id="off">Descargar todo para usar sin conexión</button><span class="muted" id="offst" style="font-size:.88rem"></span></div></div>
      <p class="muted" style="margin:14px 0 0">Tamaño de letra: <button class="btn ghost small" data-f="-1" aria-label="Letra más pequeña">A−</button>
        <button class="btn ghost small" data-f="0">Normal</button> <button class="btn ghost small" data-f="1" aria-label="Letra más grande">A+</button></p></details>`;
    el.innerHTML = h;
    el.querySelector('#exp').onclick = () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'lumen', version: 1, fecha: dstr(), datos: S })], { type: 'application/json' }));
      a.download = 'lumen-copia-' + dstr() + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    el.querySelector('#imp').onclick = () => el.querySelector('#impf').click();
    el.querySelector('#impf').onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        let d = null; try { d = JSON.parse(rd.result); } catch (err) { /* no es JSON */ }
        if (!d || d.app !== 'lumen' || !d.datos || typeof d.datos.subj !== 'object') { avisar('Ese archivo no es una copia de seguridad de Lumen.'); return; }
        if (!confirm('Se sustituirá el progreso actual de este navegador por el de la copia del ' + (d.fecha || 'archivo') + '. ¿Continuar?')) return;
        S = Object.assign(fresh(), d.datos); save(); home(el); avisar('Copia restaurada.');
      };
      rd.readAsText(f);
    };
    // Sin conexión: lo que se va usando se guarda solo; este botón lo descarga todo de una vez
    if (navigator.serviceWorker && window.caches && location.protocol !== 'file:') {
      const ob = el.querySelector('#offbox'), os = el.querySelector('#offst'), btn = el.querySelector('#off'); ob.hidden = false;
      fetch('offline.json').then((r) => r.json()).then((L) => {
        const mb = (n) => (n / 1048576).toFixed(0) + ' MB';
        caches.open('lumen-v1').then((c) => c.keys()).then((ks) => { os.textContent = ks.length >= L.archivos.length ? 'Todo descargado: funciona sin conexión.' : 'Ocupa unos ' + mb(L.total) + '.'; });
        btn.onclick = async () => {
          btn.disabled = true; const c = await caches.open('lumen-v1'); let hecho = 0, fallos = 0;
          for (const [ruta, tam] of L.archivos) {
            const clave = new URL(ruta, location.href).pathname;
            try { if (!(await c.match(clave))) { const r = await fetch(ruta); if (r.ok) await c.put(clave, r); else fallos++; } } catch (e) { fallos++; }
            hecho += tam; os.textContent = 'Descargando… ' + Math.round(100 * hecho / L.total) + ' %';
          }
          os.textContent = fallos ? 'Han fallado ' + fallos + ' archivos. Vuelve a pulsar para reintentarlo.' : 'Todo descargado: funciona sin conexión.'; btn.disabled = false;
        };
      }).catch(() => { ob.hidden = true; });
    }
    el.querySelectorAll('[data-f]').forEach((b) => { b.onclick = () => letra(+b.dataset.f ? letraN() + +b.dataset.f : 0); });
    el.querySelector('#reset').onclick = () => { if (confirm('¿Seguro que quieres borrar todo tu progreso y tus flashcards? No se puede deshacer.')) { S = fresh(); save(); home(el); } };
  }

  function area(el, a) {
    const name = AREAS.find((x) => x[0] === a)[1];
    el.innerHTML = `<p><a href="#/tutor">← Tutor</a></p><h1>${name}</h1><p class="muted">${AREA_INFO[a]}</p>
      <div class="grid">${Object.keys(BANK).filter((id) => BANK[id].area === a).map(subjCard).join('')}</div>`;
  }

  const stars = (n) => '<span class="stars">' + '★'.repeat(n) + '<i>' + '★'.repeat(3 - n) + '</i></span>';

  function hub(el, id) {
    const b = BANK[id], s = st(id), x = stats(id), dd = deckDue(id), areaName = AREAS.find((a) => a[0] === b.area)[1];
    let h = `<p><a href="#/tutor/${b.area}">← ${areaName}</a></p>
      <div class="subj-h">${caratula(id)}<h1 style="margin:0">${b.name}</h1></div>
      <div class="meter"><span>Nivel: <b>${LV[target(s)]}</b></span><span>Ejercicios dominados: <b>${x.mastered}/${x.total}</b></span><span>Flashcards: <b>${s.deck.length}</b></span></div>
      <div class="duo">
        <a class="card act" href="${P(id)}/flashcards"><h3>Flashcards</h3><p class="muted">${s.deck.length ? s.deck.length + ' tarjetas' + (dd ? ' · <b>' + dd + ' por repasar</b>' : ' · al día') : 'Se llenan solas con lo que vas aprendiendo.'}</p></a>
        <a class="card act" href="${P(id)}/practica"><h3>Práctica adaptativa</h3><p class="muted">Ejercicios de toda la materia a tu nivel${x.due ? ' · <b>' + x.due + ' por repasar</b>' : ''}.</p></a>
        ${window.CHEATS && CHEATS[id] ? `<a class="card act" href="${P(id)}/chuleta"><h3>Chuleta</h3><p class="muted">${LANGS[id] ? 'Frases de conversación, pronunciación y trucos de gramática en una sola página.' : 'Lo más importante de ' + esc(b.name) + ' en una sola página, para consultar mientras practicas.'}</p></a>` : ''}
      </div>`;
    if (b.links) h += '<h4>Recursos</h4><div class="toc">' + b.links.map((l) => `<a class="card topic" href="${esc(l[2])}" target="_blank" rel="noopener"><span class="num">↗</span><div><h3 style="margin:0">${esc(l[0])}</h3><p class="muted" style="margin:0">${esc(l[1])}</p></div><small>Abrir</small></a>`).join('') + '</div>';
    if (LANGS[id]) {
      const na = window.AUDIO && AUDIO[id] ? Object.keys(AUDIO[id]).length : 0;
      if (na) h += `<p class="muted" style="font-size:.85rem">Pronunciación: ${na} grabaciones de hablantes nativos (Wikimedia Commons). <a href="${P(id)}/creditos">Ver autores y licencias</a></p>`;
      const ls = lessonsOf(id), nxt = nextLesson(id);
      ((window.CURSO && CURSO[id]) || []).forEach((N) => {
        h += `<h4>Curso · ${esc(N.nombre)}</h4><p class="muted" style="margin-top:0">${esc(N.desc)}</p><div class="toc">`;
        N.u.forEach((U, i) => {
          const hechas = Object.keys(s.lessons).filter((k) => k.indexOf('c-' + U.id + '-') === 0).length, total = Math.ceil(U.v.length / 7) + 2;
          h += `<a class="card topic" href="${P(id)}/curso/${U.id}"><span class="num">${i + 1}</span><div><h3 style="margin:0">${esc(U.t)}</h3><p class="muted" style="margin:0">${esc(U.es)} · ${esc(U.g.t)}</p></div><small>${hechas >= total ? 'Completada' : hechas + ' de ' + total}</small></a>`;
        });
        h += '</div>';
      });
      const EX = (window.EXAMEN && EXAMEN[id]) || {};
      if (Object.keys(EX).length) {
        h += '<h4>Exámenes modelo</h4><div class="toc">';
        Object.keys(EX).forEach((nv) => { const best = s.exams && Object.keys(s.exams).filter((k) => k.indexOf('n-' + nv + '/') === 0).map((k) => s.exams[k]);
          h += `<a class="card topic" href="${P(id)}/examen/n-${nv}"><span class="num">${nv}</span><div><h3 style="margin:0">${esc(EX[nv].titulo)}</h3><p class="muted" style="margin:0">${esc(EX[nv].corto || '')}</p></div><small>${best && best.length ? 'Mejor nota: ' + String(Math.max.apply(null, best)).replace('.', ',') : EX[nv].partes.reduce((a, pt) => a + pt.q.length, 0) + ' tareas'}</small></a>`; });
        h += '</div>';
      }
      h += '<h4>Vocabulario por temas</h4><div class="path">';
      let unit = null, uid = '';
      const exLink = (u) => { const best = s.exams && Object.keys(s.exams).filter((k) => k.indexOf(u + '/') === 0).map((k) => s.exams[k]); return `<a class="node exam" href="${P(id)}/examen/${u}"><b>Examen</b><small>${best && best.length ? 'Mejor nota: ' + String(Math.max.apply(null, best)).replace('.', ',') : 'Opcional'}</small></a>`; };
      ls.forEach((l) => {
        if (l.unit !== unit) { if (unit !== null) h += exLink(uid) + '</div></div>'; unit = l.unit; uid = l.lvl ? 'g' + l.lvl : 'u-' + l.id.replace(/-[12f]$/, ''); h += `<div class="unit"><h3>${esc(unit)}</h3><div class="nodes">`; }
        const done = s.lessons[l.id], open = done || (nxt && nxt.id === l.id);
        h += open ? `<a class="node${done ? ' done' : ' cur'}" href="${P(id)}/leccion/${l.id}"><b>${esc(l.name)}</b>${done ? stars(done) : '<small>Empezar</small>'}</a>`
          : `<span class="node lock"><b>${esc(l.name)}</b><small>Bloqueada</small></span>`;
      });
      h += exLink(uid) + '</div></div></div>';
    } else {
      h += '<h4>Índice de temas</h4><div class="toc">';
      topicsOf(id).forEach((t, i) => {
        const done = s.lessons['t-' + t.id], n = topicQs(id, t).length;
        h += `<a class="card topic" href="${P(id)}/tema/${t.id}"><span class="num">${i + 1}</span><div><h3 style="margin:0">${esc(t.name)}</h3><p class="muted" style="margin:0">${esc(t.sum)}</p></div>
          <small>${done ? stars(done) : n + ' ejercicios'}</small></a>`;
      });
      h += '</div>';
    }
    el.innerHTML = h;
  }

  function topic(el, id, t) {
    let added = 0;
    t.k.forEach((k) => { if (addCard(id, k[0], k[1], 'tema')) added++; });
    BANK[id].q.forEach((q) => { if (q.t === 'fc' && q.tp === t.id && addCard(id, q.q, q.a, 'tema')) added++; });
    if (added) save();
    const n = topicQs(id, t).length, model = t.m && MODELS.find((m) => m.id === t.m);
    el.innerHTML = `<div class="session wide"><p><a href="${P(id)}">← ${esc(BANK[id].name)}</a></p><h1>${esc(t.name)}</h1><p class="muted">${esc(t.sum)}</p>
      ${added ? `<div class="note">Se han añadido <b>${added}</b> conceptos clave de este tema a tus flashcards.</div>` : ''}
      <article class="card notes">${renderNotes(t.notes)}
        <h3>Conceptos clave</h3><dl class="keys">${t.k.map((k) => '<dt>' + esc(k[0]) + '</dt><dd>' + esc(k[1]) + '</dd>').join('')}</dl></article>
      <div class="row" style="margin-top:16px">${n ? `<a class="btn" href="${P(id)}/tema/${t.id}/ejercicios">Hacer los ${n} ejercicios del tema</a>` : ''}
        ${model ? `<a class="btn ghost" href="#/lab/${model.id}">Ver en 3D: ${esc(model.name)}</a>` : ''}<a class="btn ghost" href="${P(id)}/examen/t-${t.id}">Examen del tema</a><a class="btn ghost" href="${P(id)}/flashcards">Flashcards</a></div></div>`;
    if (window.Buscar) Buscar.irA(el);
  }

  // Unidad del curso: vocabulario, gramática, diálogo y escritura
  const cursoU = (id, uid) => { let r = null; ((window.CURSO && CURSO[id]) || []).forEach((N) => N.u.forEach((U) => { if (U.id === uid) r = { N, U }; })); return r; };
  const filaV = (id, w) => { const r = [w[1]]; r[LANGS[id][1]] = w[0]; return r; }; // [alemán, español] → fila con el formato de VOCAB
  function unidad(el, id, N, U) {
    const s = st(id), base = P(id) + '/curso/' + U.id, hecho = (k) => (s.lessons['c-' + U.id + '-' + k] ? ' ✓' : ''), nv = Math.ceil(U.v.length / 7);
    el.innerHTML = `<div class="session wide"><p><a href="${P(id)}">← ${esc(BANK[id].name)}</a></p><h1>${esc(U.t)}</h1><p class="muted">${esc(N.id)} · ${esc(U.es)}</p>
      <article class="card notes"><h3>Vocabulario</h3><p class="muted">Toca una palabra para oírla. Practícalas por grupos: pasan solas a tus flashcards.</p>
        <div class="voc">${U.v.map((w) => `<button class="vw" data-w="${esc(w[0])}"><b>${esc(w[0])}</b><span>${esc(w[1])}</span></button>`).join('')}</div>
        <div class="row" style="margin-top:14px">${Array.from({ length: nv }, (x, i) => `<a class="btn${hecho('v' + i) ? ' ghost' : ''}" href="${base}/v${i}">Practicar grupo ${i + 1}${hecho('v' + i)}</a>`).join('')}</div></article>
      <article class="card notes" style="margin-top:16px"><h3>Gramática: ${esc(U.g.t)}</h3>${renderNotes(U.g.n)}
        <div class="row" style="margin-top:14px"><a class="btn${hecho('g') ? ' ghost' : ''}" href="${base}/g">Ejercicios de gramática (${U.g.e.length})${hecho('g')}</a></div></article>
      <article class="card notes" style="margin-top:16px"><h3>${esc(U.d.t)}</h3><p class="muted">Lee y escucha. Toca una línea para oírla.</p>
        <div class="dialogo">${U.d.l.map((l) => `<p data-w="${esc(l[1])}">${l[0] === 'Text' ? '' : '<b>' + esc(l[0]) + '</b> '}<span>${esc(l[1])}</span><span class="es" hidden>${esc(l[2])}</span></p>`).join('')}</div>
        <div class="row" style="margin-top:14px"><button class="btn ghost" id="tr">Mostrar traducción</button><a class="btn${hecho('l') ? ' ghost' : ''}" href="${base}/l">Preguntas de comprensión (${U.d.q.length})${hecho('l')}</a></div></article>
      <article class="card notes" style="margin-top:16px"><h3>Escritura</h3><p>${esc(U.w.c)}</p><textarea id="lib" rows="5" spellcheck="false" placeholder="Escribe aquí tu texto en ${esc(BANK[id].name.toLowerCase())}"></textarea>
        <div class="row" style="margin-top:10px"><button class="btn ghost" id="mod">Ver un modelo</button></div><pre class="modelo" id="modt" hidden>${esc(U.w.m)}</pre></article></div>`;
    el.querySelectorAll('[data-w]').forEach((b) => { b.onclick = () => speak(id, b.dataset.w); });
    el.querySelector('#tr').onclick = (e) => { const v = e.target.dataset.on !== '1'; e.target.dataset.on = v ? '1' : ''; e.target.textContent = v ? 'Ocultar traducción' : 'Mostrar traducción'; el.querySelectorAll('.dialogo .es').forEach((x) => { x.hidden = !v; }); };
    el.querySelector('#mod').onclick = () => { el.querySelector('#modt').hidden = false; };
    if (window.Buscar) Buscar.irA(el);
  }
  function cursoRuta(el, id, h) {
    const c = cursoU(id, h[4]); if (!c) return hub(el, id);
    const U = c.U, back = P(id) + '/curso/' + U.id, k = h[5];
    if (k === 'g') return session(el, id, { queue: U.g.e, title: U.t + ' · Gramática', lid: 'c-' + U.id + '-g', back });
    if (k === 'l') return session(el, id, { queue: U.d.q, title: U.t + ' · Comprensión', lid: 'c-' + U.id + '-l', back });
    if (k && k[0] === 'v') { const i = +k.slice(1), filas = U.v.map((w) => filaV(id, w)), grupo = filas.slice(i * 7, i * 7 + 7);
      if (grupo.length) return session(el, id, { queue: vocabLesson(id, { w: filas }, grupo), title: U.t + ' · Vocabulario ' + (i + 1), lid: 'c-' + U.id + '-v' + i, back }); }
    return unidad(el, id, c.N, U);
  }

  // Chuleta (cheatsheet): tabla de código y explicación por secciones, con buscador
  function cheat(el, id) {
    const c = CHEATS[id], b = BANK[id];
    el.innerHTML = `<p class="noprint"><a href="${P(id)}">← ${esc(b.name)}</a></p><h1>Chuleta de ${esc(LANGS[id] ? b.name.toLowerCase() : b.name)}</h1><p class="muted">${esc(c.intro)}</p>
      <div class="row noprint" style="margin-bottom:16px"><input type="search" id="cq" placeholder="Buscar en la chuleta…" aria-label="Buscar en la chuleta" style="flex:1;min-width:180px">
        <button class="btn ghost small" id="cprint">Imprimir</button></div>
      <div class="cheat${c.prosa ? ' prosa' : ''}">${c.s.map((s) => `<section class="card"><h3>${esc(s[0])}</h3><table>${s[1].map((r) =>
        `<tr><td><code>${esc(r[0])}</code></td><td>${esc(r[1])}</td></tr>`).join('')}</table></section>`).join('')}</div>
      <p class="muted" id="cnone" hidden>Nada coincide con la búsqueda.</p>`;
    el.querySelector('#cprint').onclick = () => window.print();
    if (window.Buscar) Buscar.irA(el);
    el.querySelector('#cq').oninput = (e) => {
      const q = e.target.value.trim().toLowerCase(); let any = false;
      el.querySelectorAll('.cheat section').forEach((sec) => {
        const head = sec.querySelector('h3').textContent.toLowerCase().includes(q); let n = 0;
        sec.querySelectorAll('tr').forEach((tr) => { const ok = !q || head || tr.textContent.toLowerCase().includes(q); tr.hidden = !ok; if (ok) n++; });
        sec.hidden = !n; if (n) any = true;
      });
      el.querySelector('#cnone').hidden = any;
    };
  }

  // Autores y licencias de las grabaciones (las licencias CC BY y CC BY-SA exigen citarlos)
  function credits(el, id) {
    const A = (window.AUDIO && AUDIO[id]) || {}, ks = Object.keys(A).sort((a, b) => a.localeCompare(b));
    el.innerHTML = `<p><a href="${P(id)}">← ${esc(BANK[id].name)}</a></p><h1>Grabaciones de ${esc(BANK[id].name.toLowerCase())}</h1>
      <p class="muted">Pronunciaciones grabadas por voluntarios y publicadas en Wikimedia Commons, la mayoría a través del proyecto Lingua Libre. Si la palabra lleva artículo, la grabación es de la palabra sola.</p>
      <div class="card" style="overflow-x:auto"><table><tr><th>Texto</th><th>Autor</th><th>Licencia</th><th>Archivo original</th></tr>${ks.map((k) =>
        `<tr><td>${esc(k)}</td><td>${esc(A[k][1])}</td><td>${esc(A[k][2])}</td><td><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(A[k][3].replace(/ /g, '_'))}" target="_blank" rel="noopener">${esc(A[k][3])}</a></td></tr>`).join('')}</table></div>`;
  }

  function cards(el, id) {
    const s = st(id), b = BANK[id];
    function list() {
      const now = Date.now(), due = s.deck.filter((c) => c.due <= now);
      el.innerHTML = `<div class="session wide"><p><a href="${P(id)}">← ${esc(b.name)}</a></p><h1>Flashcards · ${esc(b.name)}</h1>
        <p class="muted">Aquí se guardan solas las palabras y los conceptos que vas aprendiendo. También puedes añadir las tuyas aquí, o seleccionando cualquier texto de la app (en el móvil, manteniendo pulsada una palabra).</p>
        <form class="ans" id="nueva" style="margin-bottom:16px"><input id="nf" placeholder="Anverso: palabra, frase o concepto" autocomplete="off"><input id="nb" placeholder="Reverso: significado o explicación" autocomplete="off"><button class="btn">Añadir</button></form>
        ${s.deck.length ? `<div class="row"><button class="btn" id="rv"${due.length ? '' : ' disabled'}>Repasar pendientes (${due.length})</button><button class="btn ghost" id="all">Repasar todas (${s.deck.length})</button></div>
          <div class="decklist">${s.deck.map((c) => `<div class="dcard"><b>${esc(c.f)}</b><span>${esc(c.b)}</span><i class="pill">${c.box >= 3 ? 'Dominada' : c.due <= now ? 'Pendiente' : 'Aprendiendo'}</i><button class="x" data-id="${c.id}" title="Quitar esta tarjeta" aria-label="Quitar esta tarjeta">✕</button></div>`).join('')}</div>`
          : `<div class="card"><p style="margin:0">Todavía no hay tarjetas. ${LANGS[id] ? 'Completa una lección' : 'Abre un tema del índice'} y aparecerán aquí.</p></div>`}</div>`;
      el.querySelector('#nueva').onsubmit = (e) => {
        e.preventDefault(); const f = el.querySelector('#nf').value.trim(), bk = el.querySelector('#nb').value.trim(); if (!f || !bk) return;
        if (addCard(id, f, bk, 'mia')) { save(); list(); } else avisar('Ya tienes una tarjeta con ese anverso.');
      };
      el.querySelectorAll('.dcard .x').forEach((x) => { x.onclick = () => { s.deck = s.deck.filter((c) => c.id !== x.dataset.id); save(); list(); }; });
      const rv = el.querySelector('#rv'), all = el.querySelector('#all');
      if (rv) rv.onclick = () => review(due); if (all) all.onclick = () => review(shuffle(s.deck));
    }
    function review(q) {
      let i = 0, ok = 0;
      el.innerHTML = `<div class="session"><p><a href="${P(id)}/flashcards" id="back">← Flashcards</a></p><div class="bar"><i id="pb" style="width:0"></i></div><div class="card flash" id="fc" style="margin-top:16px"></div></div>`;
      el.querySelector('#back').onclick = (e) => { e.preventDefault(); list(); };
      const box = el.querySelector('#fc');
      (function show() {
        el.querySelector('#pb').style.width = Math.round(100 * i / q.length) + '%';
        if (i >= q.length) { save(); box.innerHTML = `<h2>Repaso terminado</h2><p>Sabías ${ok} de ${q.length}.</p><button class="btn" id="end">Volver a las tarjetas</button>`; box.querySelector('#end').onclick = list; return; }
        const c = q[i];
        box.innerHTML = `<p class="muted small">Tarjeta ${i + 1} de ${q.length}</p><p class="qtext big">${esc(c.f)} ${c.src === 'voc' ? spk : ''}</p><div id="fb"><button class="btn" id="flip">Mostrar respuesta</button></div>`;
        const sp = box.querySelector('.spk'); if (sp) sp.onclick = () => speak(id, c.f);
        box.querySelector('#flip').onclick = () => {
          box.querySelector('#fb').innerHTML = `<div class="fbbox"><p class="qtext" style="margin:0">${esc(c.b)}</p><div class="fbact"><button class="btn ghost" id="no">No la sabía</button><button class="btn" id="yes">La sabía</button></div></div>`;
          const done = (good) => { if (good) { ok++; c.box = Math.min((c.box || 0) + 1, 5); if (c.box < 2) c.box = 2; } else c.box = 0; c.due = Date.now() + IV[c.box]; bumpStreak(); i++; show(); };
          box.querySelector('#no').onclick = () => done(false); box.querySelector('#yes').onclick = () => done(true); box.querySelector('#yes').focus();
        };
        box.querySelector('#flip').focus();
      })();
    }
    list();
  }

  // Sesión de ejercicios. o.queue: lección o ejercicios de un tema · o.fixed: reto del día · sin opciones: práctica adaptativa.
  function session(el, id, o) {
    o = o || {};
    const sub = BANK[id], s = st(id), fixed = o.fixed, queue = o.queue ? o.queue.slice() : null, back = o.back || (fixed ? '#/' : P(id));
    let cur = null, last = null, done = false, errors = 0, added = 0, count = 0, given = '';
    let oido = '';
    const ex = o.exam ? [] : null; // en un examen no se corrige al momento: se guardan las respuestas
    const retried = {};
    if (LANGS[id]) { S.lang = id; save(); }
    el.innerHTML = `<div class="session">
      <p><a href="${back}">← ${fixed ? 'Inicio' : esc(sub.name)}</a></p>
      <div class="row between"><h1 style="margin:0">${fixed ? 'Reto del día · ' + esc(sub.name) : esc(o.title || 'Práctica adaptativa')}</h1>
      ${ex ? '<span class="pill">Examen · se corrige al final</span>' : ''}${fixed || queue ? '' : `<label class="muted">Dificultad <select id="mode"><option value="auto">Adaptativa</option><option value="1">Básico</option><option value="2">Intermedio</option><option value="3">Avanzado</option></select></label>`}</div>
      ${queue ? '<div class="bar" style="margin:14px 0 16px"><i id="pb" style="width:0"></i></div>' : '<div class="meter" id="meter"></div>'}<div class="card" id="qbox"></div></div>`;
    const box = el.querySelector('#qbox'), meter = el.querySelector('#meter'), modeSel = el.querySelector('#mode');
    if (modeSel) { modeSel.value = s.mode; modeSel.onchange = () => { s.mode = modeSel.value; save(); next(); }; }

    function drawMeter() {
      if (queue) { el.querySelector('#pb').style.width = Math.round(100 * count / (count + queue.length + (done ? 0 : 1))) + '%'; return; }
      const x = stats(id);
      meter.innerHTML = `<span>Nivel: <b>${LV[target(s)]}</b>${s.mode === 'auto' ? ' (adaptativo)' : ''}</span><span>Dominados: <b>${x.mastered}/${x.total}</b></span><span>Por repasar: <b>${x.due}</b></span>`;
    }
    function next() {
      if (queue) { if (!queue.length) return finish(); cur = queue.shift(); }
      else cur = fixed || null;
      const pk = cur ? { q: cur } : pick(id, last); cur = pk.q; done = false; draw(pk); drawMeter();
    }
    function finish() {
      if (ex) return nota();
      const st3 = errors === 0 ? 3 : errors <= 2 ? 2 : 1;
      if (o.lid) s.lessons[o.lid] = Math.max(s.lessons[o.lid] || 0, st3);
      if (o.lvl) BANK[id].q.forEach((q) => { if (q.t === 'fc' && q.l === o.lvl && addCard(id, q.q, q.a, 'gram')) added++; });
      S.xp += 30; bumpStreak(); save();
      el.querySelector('#pb').style.width = '100%';
      const nl = LANGS[id] && !o.back && nextLesson(id);
      box.innerHTML = `<div class="finish"><div class="bigstars">${stars(st3)}</div><h2>${st3 === 3 ? '¡Lección perfecta!' : st3 === 2 ? '¡Lección completada!' : 'Lección terminada'}</h2>
        <p class="muted">${errors ? errors + (errors === 1 ? ' fallo' : ' fallos') + ' por el camino' : 'Sin fallos'}${added ? ' · ' + added + ' flashcards nuevas' : ''}</p>
        <div class="fbact" style="justify-content:center">${added || st(id).deck.length ? `<a class="btn ghost" href="${P(id)}/flashcards">Ver flashcards</a>` : ''}
        ${nl ? `<a class="btn" href="${P(id)}/leccion/${nl.id}">Siguiente lección</a>` : `<a class="btn" href="${back}">Continuar</a>`}</div></div>`;
    }

    function draw(pk) {
      const c = s.cards[cur.id], tagTxt = fixed ? 'Reto del día' : cur.t === 'new' ? 'Nuevo' : queue ? 'Ejercicio' : !c ? 'Nueva' : pk.early ? 'Repaso extra' : 'Repaso';
      let h = `<div class="qmeta">${cur.gen ? '' : `<span class="pill l${cur.l}">${LV[cur.l]}</span>`}<span class="pill">${tagTxt}</span></div>`;
      if (cur.t === 'new') {
        h += `<div class="newcard"><p class="qtext big">${esc(cur.q)} ${spk}</p><p class="muted" style="font-size:1.1rem">${esc(cur.a)}</p></div><div class="fbact"><button class="btn" id="got">Entendido →</button></div>`;
      } else {
        h += (cur.tx ? `<div class="lectura">${esc(cur.tx)}</div>` : '') + `<p class="qtext">${esc(cur.q)} ${cur.say ? spk : ''}</p>` + (cur.c ? `<pre><code>${esc(cur.c)}</code></pre>` : '');
        if (cur.t === 'mc') {
          cur._o = cur.r !== undefined ? cur.o.map((t, i) => ({ t, ok: i === cur.r })) : shuffle(cur.o.map((t, i) => ({ t, ok: i === 0 })));
          h += '<div class="opts">' + cur._o.map((x, i) => `<button class="opt" data-i="${i}"><kbd>${i + 1}</kbd><span>${esc(x.t)}</span></button>`).join('') + '</div>';
        } else if (cur.t === 'in') {
          h += '<form class="ans"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe tu respuesta"><button class="btn">Comprobar</button></form>';
        } else if (cur.t === 'match') {
          cur._l = shuffle(cur.pairs.map((p, i) => ({ t: p[0], k: i }))); cur._r = shuffle(cur.pairs.map((p, i) => ({ t: p[1], k: i })));
          const col = (arr, side) => '<div>' + arr.map((x) => `<button class="opt" data-side="${side}" data-k="${x.k}">${esc(x.t)}</button>`).join('') + '</div>';
          h += '<div class="match">' + col(cur._l, 'l') + col(cur._r, 'r') + '</div>';
        } else if (cur.t === 'libre') {
          h += '<textarea id="lib" rows="' + (cur.oral ? 3 : 7) + '" spellcheck="false" placeholder="' + (cur.oral ? 'Dilo en voz alta. Si quieres, apunta aquí tus notas (opcional)' : 'Escribe aquí tu texto') + '"></textarea><div class="fbact"><button class="btn" id="libok">Entregar</button></div>';
        } else if (cur.t === 'say') {
          h += `<p class="qtext big">${esc(cur.a)} ${spk}</p><p class="muted">${esc(cur.es)}</p>
            <div class="row"><button class="btn" id="mic">Hablar</button><button class="btn ghost" id="nomic">Ahora no puedo hablar</button></div><p class="muted small" id="micst"></p>`;
        } else if (cur.t === 'num') {
          h += `<form class="ans"><input id="ans" inputmode="decimal" autocomplete="off" placeholder="Escribe el número"${cur.u ? ` aria-label="Respuesta en ${esc(cur.u)}"` : ''}>${cur.u ? `<span class="unid">${esc(cur.u)}</span>` : ''}<button class="btn">Comprobar</button></form>`;
        } else if (cur.t === 'ord') {
          h += '<div class="slot orden" id="slot"></div><div class="tiles orden" id="tiles"></div><div class="fbact"><button class="btn" id="chk">Comprobar</button></div>';
        } else if (cur.t === 'build') {
          h += '<div class="slot" id="slot"></div><div class="tiles" id="tiles"></div><div class="fbact"><button class="btn" id="chk">Comprobar</button></div>';
        } else {
          h += (cur.lang === 'sql' ? `<p class="muted small">Tablas disponibles: ${esc(sub.schema)}</p>` : '') +
            `<textarea id="code" spellcheck="false" rows="${cur.lang === 'sql' ? 4 : 7}" placeholder="${cur.lang === 'sql' ? 'Escribe aquí tu consulta SQL' : 'Escribe aquí tu código Python'}">${esc(cur.starter || '')}</textarea>
            <div class="row"><button class="btn" id="run">Ejecutar y comprobar</button><button class="btn ghost" id="giveup">Ver solución</button><button class="btn ghost" id="skip" hidden>Saltar</button></div><div id="out" class="out"></div>`;
        }
        h += '<div id="fb"></div>';
      }
      box.innerHTML = h;
      const $ = (q) => box.querySelector(q), sp = $('.spk');
      if (sp) sp.onclick = () => speak(id, cur.t === 'say' ? cur.a : cur.say || cur.q);
      if (cur.listen && cur.say !== oido) { oido = cur.say; speak(id, cur.say); }
      if (cur.t === 'libre') {
        $('#libok').onclick = () => { if (done || (!cur.oral && !$('#lib').value.trim())) return; given = $('#lib').value; $('#lib').disabled = true; $('#libok').disabled = true; resolve(true, 'No se corrige sola. Compárala con este modelo:<pre class="modelo">' + esc(cur.a) + '</pre>'); };
      } else if (cur.t === 'say') {
        const stt = $('#micst');
        $('#nomic').onclick = () => { last = cur.id; count++; next(); }; // saltar no cuenta como fallo
        $('#mic').onclick = () => {
          if (done) return;
          let r; try { r = new RECO(); } catch (e) { stt.textContent = 'Este navegador no permite usar el micrófono aquí.'; return; }
          r.lang = LANGS[id][0]; r.maxAlternatives = 3; stt.textContent = 'Escuchando… habla ahora.'; $('#mic').disabled = true;
          r.onresult = (ev) => {
            const alts = Array.from(ev.results[0]).map((a) => a.transcript), want = toks(bare(cur.a));
            const pct = (t) => { const g = toks(bare(t)); return want.filter((w) => g.indexOf(w) >= 0).length / want.length; };
            const best = alts.slice().sort((a, b) => pct(b) - pct(a))[0];
            given = best; resolve(pct(best) >= 0.75, 'Se ha entendido: «' + esc(best) + '».');
          };
          r.onerror = (ev) => { $('#mic').disabled = false; stt.textContent = ev.error === 'not-allowed' ? 'No hay permiso para usar el micrófono.' : ev.error === 'network' ? 'El reconocimiento de voz necesita conexión a internet.' : 'No se ha oído nada. Inténtalo otra vez.'; };
          r.onend = () => { if (!done) $('#mic').disabled = false; };
          try { r.start(); } catch (e) { stt.textContent = 'No se pudo iniciar el micrófono.'; $('#mic').disabled = false; }
        };
      } else if (cur.t === 'new') {
        if (addCard(id, cur.q, cur.a, 'voc')) { added++; save(); }
        speak(id, cur.q);
        $('#got').onclick = () => { count++; next(); }; $('#got').focus();
      } else if (cur.t === 'mc') {
        box.querySelectorAll('.opt').forEach((b) => { b.onclick = () => {
          if (done) return;
          const x = cur._o[+b.dataset.i]; given = x.t;
          if (!ex) { box.querySelectorAll('.opt').forEach((y) => { y.disabled = true; if (cur._o[+y.dataset.i].ok) y.classList.add('ok'); }); if (!x.ok) b.classList.add('bad'); }
          resolve(x.ok);
        }; });
      } else if (cur.t === 'in') {
        const inp = $('#ans'); inp.focus();
        $('.ans').onsubmit = (e) => { e.preventDefault(); if (done || !inp.value.trim()) return; inp.disabled = true; given = inp.value; const r = checkText(cur, inp.value); resolve(r.ok, r.note); };
      } else if (cur.t === 'match') {
        let sel = null, miss = 0, left = cur.pairs.length;
        box.querySelectorAll('.match .opt').forEach((b) => { b.onclick = () => {
          if (!sel || sel.dataset.side === b.dataset.side) { if (sel) sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
          const a = sel; sel = null; a.classList.remove('sel');
          if (a.dataset.k === b.dataset.k) { [a, b].forEach((y) => { y.classList.add('ok'); y.disabled = true; }); if (--left === 0) resolve(miss === 0, miss ? 'Con ' + miss + (miss === 1 ? ' fallo' : ' fallos') + ' al emparejar.' : ''); }
          else { miss++; [a, b].forEach((y) => { y.classList.add('bad'); setTimeout(() => y.classList.remove('bad'), 500); }); }
        }; });
      } else if (cur.t === 'num') {
        const inp = $('#ans'); inp.focus();
        $('.ans').onsubmit = (e) => { e.preventDefault(); if (done || !inp.value.trim()) return; inp.disabled = true; given = inp.value + (cur.u ? ' ' + cur.u : ''); const r = checkNum(cur, inp.value); resolve(r.ok, r.note); };
      } else if (cur.t === 'ord') {
        // Se tocan los elementos en el orden correcto; tocar uno ya colocado lo devuelve a la lista
        let bank = shuffle(cur.o.map((t, i) => ({ t, i })));
        if (bank.every((x, j) => x.i === j)) bank = bank.slice(1).concat(bank[0]); // nunca empieza ya ordenado
        const chosen = [];
        const paint = () => {
          $('#slot').innerHTML = chosen.map((x, j) => `<button class="tile" data-i="${x.i}"><b>${j + 1}.</b> ${esc(x.t)}</button>`).join('') || '<span class="muted">Toca los elementos en el orden correcto</span>';
          $('#tiles').innerHTML = bank.filter((x) => chosen.indexOf(x) < 0).map((x) => `<button class="tile" data-i="${x.i}">${esc(x.t)}</button>`).join('');
          box.querySelectorAll('#tiles .tile').forEach((b) => { b.onclick = () => { if (done) return; chosen.push(bank.find((x) => x.i === +b.dataset.i)); paint(); }; });
          box.querySelectorAll('#slot .tile').forEach((b) => { b.onclick = () => { if (done) return; chosen.splice(chosen.findIndex((x) => x.i === +b.dataset.i), 1); paint(); }; });
        };
        paint();
        $('#chk').onclick = () => { if (done || chosen.length < cur.o.length) return; given = chosen.map((x) => x.t).join(' → '); $('#chk').disabled = true; resolve(chosen.every((x, j) => x.i === j)); };
      } else if (cur.t === 'build') {
        const want = toks(cur.a), bank = shuffle(want.concat(cur.x || [])).map((t, i) => ({ t, i })), chosen = [];
        const paint = () => {
          $('#slot').innerHTML = chosen.map((x) => `<button class="tile" data-i="${x.i}">${esc(x.t)}</button>`).join('') || '<span class="muted">Toca las palabras en orden</span>';
          $('#tiles').innerHTML = bank.map((x) => `<button class="tile${chosen.indexOf(x) >= 0 ? ' used' : ''}" data-i="${x.i}"${chosen.indexOf(x) >= 0 ? ' disabled' : ''}>${esc(x.t)}</button>`).join('');
          box.querySelectorAll('#tiles .tile').forEach((b) => { b.onclick = () => { if (done) return; chosen.push(bank.find((x) => x.i === +b.dataset.i)); paint(); }; });
          box.querySelectorAll('#slot .tile').forEach((b) => { b.onclick = () => { if (done) return; chosen.splice(chosen.findIndex((x) => x.i === +b.dataset.i), 1); paint(); }; });
        };
        paint();
        $('#chk').onclick = () => { if (done || !chosen.length) return; const ok = chosen.map((x) => x.t).join(' ') === want.join(' '); given = chosen.map((x) => x.t).join(' '); $('#chk').disabled = true; if (ok && !ex) speak(id, cur.a); resolve(ok); };
      } else {
        const ta = $('#code'), out = $('#out'), run = $('#run');
        ta.onkeydown = (e) => { if (e.key === 'Tab') { e.preventDefault(); const p = ta.selectionStart; ta.value = ta.value.slice(0, p) + '    ' + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = p + 4; } };
        $('#giveup').onclick = () => { given = ta.value; resolve(false); };
        if (ex) $('#giveup').textContent = 'Dejar en blanco';
        $('#skip').onclick = () => { last = cur.id; count++; next(); };
        run.onclick = async () => {
          if (done || !ta.value.trim()) return;
          run.disabled = true; out.innerHTML = '<p class="muted">Ejecutando… (la primera vez se carga el intérprete y tarda unos segundos)</p>';
          try {
            if (cur.lang === 'py') {
              const r = await runPy(ta.value, cur.post);
              if (r.err) out.innerHTML = `<pre>${esc((r.out ? r.out + '\n' : '') + r.err)}</pre><p>Hay un error. Lee el mensaje con calma y vuelve a intentarlo.</p>`;
              else if (r.out === cur.out) { out.innerHTML = `<pre>${esc(r.out)}</pre>`; given = ta.value; resolve(true); }
              else out.innerHTML = `<pre>${esc(r.out || '(sin salida)')}</pre><p>Se esperaba <code>${esc(cur.out)}</code>. Ajusta el código y prueba otra vez.</p>`;
            } else {
              const r = await runSql(ta.value, cur);
              if (r.err) out.innerHTML = `<pre>${esc(r.err)}</pre><p>La consulta tiene un error. Revísala y vuelve a intentarlo.</p>`;
              else { out.innerHTML = tableHtml(r.table) + (r.pass ? '' : '<p>El resultado todavía no coincide con lo que se pide. Revisa las columnas y los filtros.</p>'); if (r.pass) { given = ta.value; resolve(true); } }
            }
          } catch (e) {
            out.innerHTML = '<p>No se pudo cargar el intérprete. Puedes saltar este ejercicio.</p>';
            $('#skip').hidden = false;
          }
          run.disabled = done;
        };
      }
    }

    function resolve(ok, note) {
      if (done) return; done = true; last = cur.id; count++;
      if (ex) { ex.push({ q: cur, ok, given }); given = ''; return next(); }
      given = '';
      if (fixed) { S.daily.done = true; S.daily.ok = ok; if (ok) S.xp += 20; }
      if (queue && !ok && cur.t !== 'say') { errors++; if (!retried[cur.id]) { retried[cur.id] = 1; queue.push(cur); } } // lo fallado vuelve al final de la lección
      const ch = answer(id, cur, ok);
      box.querySelectorAll('#run,#giveup,#code,.tile').forEach((x) => { x.disabled = true; });
      let h = `<div class="fbbox ${ok ? 'ok' : 'bad'}"><strong>${ok ? PRAISE[Math.floor(Math.random() * PRAISE.length)] : 'Todavía no.'}</strong> ${note || ''}`;
      if (!ok && cur.t === 'say') h += ' Escucha el modelo e inténtalo de nuevo cuando vuelva a salir.';
      if (!ok && (cur.t === 'in' || cur.t === 'build')) h += ` La respuesta correcta es <b>${esc(cur.t === 'in' ? cur.a[0] : cur.a)}</b>.`;
      if (!ok && cur.t === 'num') h += ` La respuesta correcta es <b>${fmtNum(cur.a)}${cur.u ? ' ' + esc(cur.u) : ''}</b>.`;
      if (!ok && cur.t === 'ord') h += `<ol class="orden-ok">${cur.o.map((x) => '<li>' + esc(x) + '</li>').join('')}</ol>`;
      if (!ok && cur.t === 'code') h += `<p>Una solución posible:</p><pre>${esc(cur.sol)}</pre>`;
      if (cur.e) h += `<p>${esc(cur.e)}</p>`;
      if (!ok && queue && retried[cur.id] === 1) { retried[cur.id] = 2; h += '<p class="muted">Volverá a salir al final de la lección.</p>'; }
      if (ch) h += `<p class="lvl">${ch > 0 ? 'Subes a nivel ' + LV[target(s)] + '. ¡Buen ritmo!' : 'Volvemos a nivel ' + LV[target(s)] + ' para afianzar la base.'}</p>`;
      if (fixed) h += `<p class="lvl">${ok ? 'Reto del día superado.' : 'Mañana tendrás un reto nuevo.'}</p>`;
      h += `<div class="fbact">${cur.m ? `<a class="btn ghost" href="#/lab/${cur.m}">Ver en 3D</a>` : ''}${fixed ? '<a class="btn" id="next" href="#/">Volver al inicio</a>' : '<button class="btn" id="next">Siguiente →</button>'}</div></div>`;
      const fb = box.querySelector('#fb'); fb.innerHTML = h;
      const nb = fb.querySelector('#next'); if (!fixed) nb.onclick = next; nb.focus();
      drawMeter();
    }

    // Corrección del examen: nota sobre 10 y repaso de cada pregunta con su respuesta correcta
    function nota() {
      const pun = ex.filter((x) => x.q.t !== 'libre'), okN = pun.filter((x) => x.ok).length, n10 = pun.length ? Math.round(okN / pun.length * 100) / 10 : 0;
      if (!s.exams) s.exams = {};
      if (pun.length) { s.exams[o.exam] = Math.max(s.exams[o.exam] || 0, n10); save(); }
      el.querySelector('#pb').style.width = '100%';
      // Las partes de redacción y expresión oral no tienen respuestas que corregir: en vez de una nota se invita a comparar con el modelo
      const cab = pun.length ? `<h2>Nota: ${String(n10).replace('.', ',')} sobre 10</h2><p class="muted">${okN} de ${pun.length} respuestas correctas${pun.length < ex.length ? ' (la redacción no puntúa)' : ''} · ${n10 >= 9 ? 'Sobresaliente' : n10 >= 7 ? 'Notable' : n10 >= 5 ? 'Aprobado' : 'Conviene repasar el tema'}</p>`
        : '<h2>Parte terminada</h2><p class="muted">Esta parte no lleva nota: compara lo que has escrito o dicho con cada modelo y fíjate en los criterios que aparecen debajo.</p>';
      const bien = (q) => (q.t === 'mc' ? q.o[q.r || 0] : q.t === 'in' ? q.a[0] : q.t === 'num' ? fmtNum(q.a) + (q.u ? ' ' + q.u : '') : q.t === 'ord' ? q.o.join(' → ') : q.t === 'code' ? q.sol : q.t === 'match' ? q.pairs.map((p) => p[0] + ' = ' + p[1]).join(' · ') : q.a);
      box.innerHTML = `<div class="finish">${cab}</div>
        <div class="exrev">${ex.map((x, i) => `<div class="${x.ok ? 'ok' : 'bad'}">${x.q.tx && (!i || ex[i - 1].q.tx !== x.q.tx) ? `<div class="lectura">${esc(x.q.tx)}</div>` : ''}<b>${i + 1}. ${esc(x.q.listen ? x.q.q + ' («' + x.q.say + '»)' : x.q.q)}</b>${x.q.c ? `<pre><code>${esc(x.q.c)}</code></pre>` : ''}
          <p>${x.q.t === 'libre' ? (x.given ? 'Tu texto: <i>' + esc(x.given) + '</i></p><p>' : '') + 'Modelo:</p><pre class="modelo">' + esc(x.q.a) + '</pre><p>' : x.ok ? 'Correcta' : 'Tu respuesta: ' + (x.given ? '<i>' + esc(x.given) + '</i>' : 'en blanco')}${x.ok ? '' : ` · Correcta: ${x.q.t === 'code' ? '' : '<b>' + esc(bien(x.q)) + '</b>'}`}</p>
          ${!x.ok && x.q.t === 'code' ? `<pre>${esc(x.q.sol)}</pre>` : ''}${x.q.e ? `<p class="muted">${esc(x.q.e)}</p>` : ''}</div>`).join('')}</div>
        <div class="fbact"><a class="btn ghost" href="${back}">Volver</a><button class="btn" id="otra">Repetir el examen</button></div>`;
      box.querySelector('#otra').onclick = () => route(el, location.hash.replace(/^#\/?/, '').split('/'));
    }

    keyFn = (e) => {
      if (!document.body.contains(box) || done || !cur || cur.t !== 'mc' || !/^[1-9]$/.test(e.key)) return;
      const b = box.querySelector('.opt[data-i="' + (+e.key - 1) + '"]'); if (b) b.click();
    };
    next();
  }

  // Rutas: #/tutor · #/tutor/<área> · #/tutor/<área>/<materia>[/practica | /flashcards | /chuleta | /leccion/<id> | /tema/<id>[/ejercicios] | /examen/<ámbito>[/<modelo>]]
  function route(el, h) {
    keyFn = null;
    if (BANK[h[1]]) { location.replace(P(h[1])); return; } // enlaces antiguos #/tutor/<materia>
    const a = h[1], id = h[2];
    if (!a || !AREAS.some((x) => x[0] === a)) return home(el);
    if (!id || !BANK[id] || BANK[id].area !== a) return area(el, a);
    if (h[3] === 'practica') return session(el, id);
    if (h[3] === 'flashcards') return cards(el, id);
    if (h[3] === 'chuleta' && window.CHEATS && CHEATS[id]) return cheat(el, id);
    if (h[3] === 'creditos' && LANGS[id]) return credits(el, id);
    if (h[3] === 'curso' && LANGS[id]) return cursoRuta(el, id, h);
    if (h[3] === 'examen' && h[4]) {
      const E = examen(id, h[4]), m = E && E.M.find((x) => x.k === h[5]);
      if (m) return session(el, id, { queue: h[4][0] === 'n' ? m.qs : shuffle(m.qs), title: 'Examen · ' + E.title + ' · ' + m.n, exam: h[4] + '/' + m.k, back: P(id) + '/examen/' + h[4] });
      return examPage(el, id, h[4]);
    }
    if (h[3] === 'leccion') { const L = lessonsOf(id).find((x) => x.id === h[4]); if (L) return session(el, id, { queue: L.make(), title: L.unit + ' · ' + L.name, lid: L.id, lvl: L.lvl }); }
    if (h[3] === 'tema') {
      const t = topicsOf(id).find((x) => x.id === h[4]);
      if (t) return h[5] === 'ejercicios' ? session(el, id, { queue: topicQs(id, t), title: t.name, lid: 't-' + t.id, back: P(id) + '/tema/' + t.id }) : topic(el, id, t);
    }
    return hub(el, id);
  }

  // Al seleccionar un texto (en el móvil, manteniendo pulsada una palabra) aparece un botón para guardarlo como tarjeta.
  (function () {
    const bub = document.createElement('button'); bub.className = 'selbub'; bub.type = 'button'; bub.textContent = '＋ Flashcard'; bub.hidden = true; document.body.appendChild(bub);
    const pan = document.createElement('div'); pan.className = 'selpan card'; pan.hidden = true; document.body.appendChild(pan);
    let txt = '', tm = 0;
    document.addEventListener('selectionchange', () => { clearTimeout(tm); tm = setTimeout(() => {
      const sel = window.getSelection(), t = sel ? String(sel).trim() : '', v = document.getElementById('view'), n = sel && sel.anchorNode;
      if (!t || t.length > 160 || !sel.rangeCount || !v || !n || !v.contains(n) || !pan.hidden || (n.parentElement && n.parentElement.closest('input,textarea,.selpan'))) { bub.hidden = true; return; }
      const r = sel.getRangeAt(0).getBoundingClientRect(); if (!r.width && !r.height) { bub.hidden = true; return; }
      txt = t; bub.hidden = false;
      bub.style.left = Math.max(8, Math.min(window.innerWidth - 130, r.left + r.width / 2 - 60)) + window.scrollX + 'px'; bub.style.top = r.bottom + window.scrollY + 10 + 'px';
    }, 280); });
    bub.addEventListener('pointerdown', (e) => e.preventDefault()); // no perder la selección al pulsar
    bub.onclick = () => {
      const h = location.hash.replace(/^#\/?/, '').split('/'), actual = BANK[h[2]] ? h[2] : (LANGS[S.lang] ? S.lang : 'aleman');
      bub.hidden = true; pan.hidden = false;
      pan.innerHTML = `<h3 style="margin-top:0">Nueva flashcard</h3><label>Anverso<input id="sf" value="${esc(txt)}"></label><label>Reverso<input id="sb" placeholder="Significado o explicación"></label>
        <label>Materia<select id="ss">${Object.keys(BANK).map((k) => `<option value="${k}"${k === actual ? ' selected' : ''}>${esc(BANK[k].name)}</option>`).join('')}</select></label>
        <div class="row"><button class="btn" id="sok">Guardar</button><button class="btn ghost" id="sno">Cancelar</button></div>`;
      const q = (x) => pan.querySelector(x); q('#sb').focus();
      q('#sno').onclick = () => { pan.hidden = true; };
      q('#sok').onclick = () => {
        const f = q('#sf').value.trim(), bk = q('#sb').value.trim(), id = q('#ss').value; if (!f || !bk) { q('#sb').focus(); return; }
        const ok = addCard(id, f, bk, 'mia'); if (ok) save(); pan.hidden = true;
        avisar(ok ? 'Añadida a las flashcards de ' + BANK[id].name + '.' : 'Ya tenías una tarjeta con ese texto.');
      };
    };
  })();

  window.Tutor = { deck: (id) => st(id).deck, route, session, daily, dailyLesson, summary, dayNum, esc, LV, path: P, levelOf: (id) => (BANK[id] ? target(st(id)) : 1) };
})();
