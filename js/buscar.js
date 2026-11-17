// Buscador global: busca a la vez en apuntes, conceptos clave, chuletas, vocabulario, flashcards y laboratorio.
// El índice se construye la primera vez que se abre. Al pulsar un resultado se va al punto exacto: sección de los
// apuntes, fila de la chuleta o pieza del atlas (se pasa el destino en sessionStorage con la clave «lumen.ir»).
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const llano = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const limpio = (s) => s.replace(/\*\*/g, '').replace(/^[>$|\-] ?/gm, '').replace(/\s+/g, ' ').trim();
  const P = (id) => '#/tutor/' + BANK[id].area + '/' + id;
  let IDX = null;

  function indice() {
    const out = [], add = (g, titulo, texto, href, ir) => out.push({ g, titulo, texto, href, ir, k: llano(titulo + ' ' + texto) });
    Object.keys(window.TOPICS || {}).forEach((id) => { if (!BANK[id]) return; TOPICS[id].forEach((t) => {
      const href = P(id) + '/tema/' + t.id;
      t.notes.split(/\n(?=## )/).forEach((sec) => { const m = sec.match(/^\s*## (.*)/); if (m) add('Apuntes', BANK[id].name + ' › ' + t.name + ' › ' + m[1], limpio(sec.replace(/^\s*## .*/, '')), href, m[1]); });
      t.k.forEach((k) => add('Conceptos clave', k[0], k[1] + ' (' + BANK[id].name + ' › ' + t.name + ')', href, 'Conceptos clave'));
    }); });
    Object.keys(window.CHEATS || {}).forEach((id) => { if (!BANK[id]) return; CHEATS[id].s.forEach((s) => s[1].forEach((r) => add('Chuletas', r[0], r[1] + ' (' + BANK[id].name + ' › ' + s[0] + ')', P(id) + '/chuleta', r[0]))); });
    (window.VOCAB || []).forEach((tp) => tp.w.concat(tp.p).forEach((w) => add('Vocabulario', w[0], 'Alemán: ' + w[1] + ' · Francés: ' + w[2] + ' · Italiano: ' + w[3] + ' · Catalán: ' + w[4], '#/tutor/idiomas', null)));
    // Curso de idiomas por niveles: el vocabulario de cada unidad y las secciones de su gramática
    Object.keys(window.CURSO || {}).forEach((id) => { if (!BANK[id]) return; CURSO[id].forEach((N) => N.u.forEach((U) => {
      const href = P(id) + '/curso/' + U.id, donde = ' (' + BANK[id].name + ' ' + N.id + ' › ' + U.t + ')';
      U.v.forEach((w) => add('Vocabulario', w[0], w[1] + donde, href, null));
      U.g.n.split(/\n(?=## )/).forEach((sec) => { const m = sec.match(/^\s*## (.*)/); if (m) add('Apuntes', BANK[id].name + ' ' + N.id + ' › ' + U.g.t + ' › ' + m[1], limpio(sec.replace(/^\s*## .*/, '')), href, m[1]); });
    })); });
    (window.MODELS || []).forEach((m) => {
      add('Laboratorio', m.name, m.info[0], '#/lab/' + m.id, null);
      if (m.id !== 'cuerpo') Object.keys(m.parts).forEach((k) => { const p = m.parts[k]; add('Laboratorio', p.n + ' · ' + m.name, Array.isArray(p.d) ? p.d[0] : p.d, '#/lab/' + m.id, null); });
    });
    if (window.ATLAS) ATLAS.p.forEach((p, i) => add('Atlas del cuerpo humano', p[0], p[1], '#/lab/cuerpo', 'pieza:' + i));
    if (window.ELEMENTOS) ELEMENTOS.forEach((e) => add('Tabla periódica', e[1] + ' (' + e[0] + ')', e[5] || '', '#/lab/tabla', 'elemento:' + e[0]));
    return out;
  }
  function tarjetas() { // las flashcards cambian, así que se leen en cada búsqueda
    const out = [];
    Object.keys(BANK).forEach((id) => (Tutor.deck(id) || []).forEach((c) => out.push({ g: 'Tus flashcards', titulo: c.f, texto: c.b + ' (' + BANK[id].name + ')', href: P(id) + '/flashcards', k: llano(c.f + ' ' + c.b) })));
    return out;
  }
  function recorte(texto, w) {
    const i = llano(texto).indexOf(w), a = Math.max(0, i - 60);
    return (a > 0 ? '…' : '') + texto.slice(a, a + 170) + (texto.length > a + 170 ? '…' : '');
  }

  function render(el) {
    el.innerHTML = `<div class="session wide"><h1>Buscar</h1><p class="muted">Busca en los apuntes, las chuletas, el vocabulario, tus flashcards y el laboratorio.</p>
      <input type="search" id="bq" placeholder="Mitosis, bucle for, fémur, gracias…" aria-label="Buscar en toda la app" autocomplete="off"><div id="bres" style="margin-top:16px"></div></div>`;
    const inp = el.querySelector('#bq'), res = el.querySelector('#bres');
    let guardada = ''; try { guardada = sessionStorage.getItem('lumen.busca') || ''; } catch (e) { /* sin almacenamiento */ }
    function buscar() {
      const q = llano(inp.value.trim()).split(/\s+/).filter(Boolean);
      try { sessionStorage.setItem('lumen.busca', inp.value); } catch (e) { /* idem */ }
      if (q.join('').length < 2) { res.innerHTML = ''; return; }
      if (!IDX) IDX = indice();
      const hits = IDX.concat(tarjetas()).filter((x) => q.every((w) => x.k.indexOf(w) >= 0));
      const grupos = {}; hits.forEach((x) => { (grupos[x.g] = grupos[x.g] || []).push(x); });
      const orden = ['Apuntes', 'Conceptos clave', 'Chuletas', 'Vocabulario', 'Tus flashcards', 'Laboratorio', 'Tabla periódica', 'Atlas del cuerpo humano'];
      res.innerHTML = hits.length ? orden.filter((g) => grupos[g]).map((g) => {
        const L = grupos[g].sort((a, b) => (llano(b.titulo).indexOf(q[0]) >= 0) - (llano(a.titulo).indexOf(q[0]) >= 0));
        return `<h4>${g} · ${L.length}</h4><div class="toc">` + L.slice(0, 8).map((x) => `<a class="card bhit" href="${x.href}"${x.ir ? ` data-ir="${esc(x.ir)}"` : ''}><b>${esc(x.titulo)}</b><span class="muted">${esc(recorte(x.texto, q[0]))}</span></a>`).join('')
          + (L.length > 8 ? `<p class="muted" style="margin:0;font-size:.85rem">y ${L.length - 8} más: afina la búsqueda para verlos.</p>` : '') + '</div>';
      }).join('') : '<p class="muted">Sin resultados.</p>';
      res.querySelectorAll('a[data-ir]').forEach((a) => { a.onclick = () => { try { sessionStorage.setItem('lumen.ir', a.dataset.ir); } catch (e) { /* idem */ } }; });
    }
    inp.oninput = buscar; inp.value = guardada; inp.focus(); buscar();
  }
  // Destino pendiente tras pulsar un resultado: lo lee (una sola vez) la vista a la que se llega.
  function destino(prefijo) {
    let v = null; try { v = sessionStorage.getItem('lumen.ir'); } catch (e) { return null; }
    if (v === null || (prefijo ? v.indexOf(prefijo) !== 0 : /^(pieza|elemento):/.test(v))) return null;
    try { sessionStorage.removeItem('lumen.ir'); } catch (e) { /* idem */ }
    return prefijo ? v.slice(prefijo.length) : v;
  }
  // En apuntes y chuletas: desplaza hasta el título o la fila buscada y la destaca un momento
  function irA(el) {
    const v = destino(''); if (!v) return;
    const n = Array.from(el.querySelectorAll('h3, td:first-child')).find((x) => x.textContent.trim() === v);
    if (n) setTimeout(() => { n.scrollIntoView({ block: 'center' }); n.classList.add('marca'); setTimeout(() => n.classList.remove('marca'), 2600); }, 80);
  }
  window.Buscar = { render, destino, irA };
})();
