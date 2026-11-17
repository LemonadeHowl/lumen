// Navegación, portada con eventos diarios y tema claro/oscuro.
(function () {
  const view = document.getElementById('view'), esc = Tutor.esc;

  function home() {
    const s = Tutor.summary(), d = Tutor.daily(), dn = Tutor.dayNum();
    const dl = Tutor.dailyLesson();
    const model = MODELS[dn % MODELS.length], fact = FACTS[dn % FACTS.length];
    const words = Object.keys(WORDS).map((k) => { const w = WORDS[k][dn % WORDS[k].length]; return `<div class="word"><small>${BANK[k].name}</small><b>${esc(w[0])}</b><span>${esc(w[1])}</span><em>${esc(w[2])}</em></div>`; }).join('');
    view.innerHTML = `
      <section class="hero"><h1>Aprende a tu ritmo y míralo en 3D</h1>
        <p>Un tutor que se adapta a ti en ciencias, idiomas y programación, y un laboratorio de maquetas para entender lo que estudias.</p></section>
      <div class="stats">
        <div class="card stat"><b>${s.streak}</b><span>${s.streak === 1 ? 'día de racha' : 'días de racha'}</span></div>
        <div class="card stat"><b>${s.xp}</b><span>puntos</span></div>
        <div class="card stat"><b>${s.due}</b><span>por repasar ahora</span></div>
        <div class="card stat"><b>${s.cards}</b><span>flashcards</span></div>
        <div class="card stat"><b>${s.mastered}/${s.total}</b><span>ejercicios dominados</span></div>
      </div>
      <h4>Hoy</h4>
      <div class="today">
        <div class="card"><span class="pill">Reto del día</span><h3>${BANK[d.q.s].name} · ${Tutor.LV[d.q.l]}</h3>
          <p class="muted">${d.done ? (d.ok ? 'Superado. Vuelve mañana a por otro.' : 'Ya lo has intentado. Mañana habrá uno nuevo.') : 'Un problema elegido para tu nivel. Si lo resuelves, ganas 20 puntos extra.'}</p>
          ${d.done ? '' : '<a class="btn" href="#/reto">Resolver el reto</a>'}</div>
        ${dl ? `<div class="card"><span class="pill">Lección del día</span><h3>${dl.name} · ${esc(dl.unit)}</h3><p class="muted">${esc(dl.lesson)}: unos cinco minutos para mantener la racha.</p><a class="btn" href="${dl.href}">Empezar la lección</a></div>` : ''}
        <div class="card"><span class="pill">Maqueta del día</span><h3>${model.name}</h3><p class="muted">${esc(model.info[0])}</p><a class="btn ghost" href="#/lab/${model.id}">Explorar en 3D</a></div>
        <div class="card"><span class="pill">¿Sabías que…?</span><p class="fact">${esc(fact)}</p></div>
      </div>
      <h4>Palabras del día</h4><div class="words card">${words}</div>
      <h4>Secciones</h4>
      <div class="duo">
        <div class="card"><h2>Tutor</h2><p class="muted">Tres carpetas: ciencias, idiomas y programación. Lecciones cortas, apuntes por temas, flashcards y código que se ejecuta de verdad.</p><a class="btn" href="#/tutor">Empezar a practicar</a></div>
        <div class="card"><h2>Laboratorio 3D</h2><p class="muted">${MODELS.length} maquetas interactivas, de la célula al sistema solar, con explicaciones en tres niveles.</p><a class="btn" href="#/lab">Abrir el laboratorio</a></div>
      </div>`;
  }

  function route() {
    const h = location.hash.replace(/^#\/?/, '').split('/');
    Lab.stop();
    document.querySelectorAll('.top nav a').forEach((a) => a.classList.toggle('on', a.dataset.r === (h[0] === 'reto' ? '' : h[0] || '')));
    view.className = 'view r-' + (h[0] || 'home');
    if (h[0] === 'tutor') Tutor.route(view, h);
    else if (h[0] === 'lab') Lab.render(view, h[1]);
    else if (h[0] === 'buscar') Buscar.render(view);
    else if (h[0] === 'reto') { const d = Tutor.daily(); if (d.done) home(); else Tutor.session(view, d.q.s, { fixed: d.q }); }
    else home();
    window.scrollTo(0, 0);
  }

  const root = document.documentElement;
  try { const t = localStorage.getItem('lumen.theme'); if (t) root.dataset.theme = t; } catch (e) { /* sin almacenamiento */ }
  document.getElementById('theme').onclick = () => {
    const cur = root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'), n = cur === 'dark' ? 'light' : 'dark';
    root.dataset.theme = n; try { localStorage.setItem('lumen.theme', n); } catch (e) { /* idem */ }
  };

  window.addEventListener('hashchange', route);
  route();
})();

// Modo sin conexión: el trabajador de servicio guarda en el dispositivo lo que se va usando (solo con http/https).
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(function () { /* sin modo sin conexión */ });
