// Laboratorio 3D: visor común para todas las maquetas (escena, cámara, selección de partes y controles).
(function () {
  const LV = ['', 'Básico', 'Intermedio', 'Avanzado'];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let R = null;

  function stop() {
    if (!R) return;
    cancelAnimationFrame(R.raf); if (R.ro) R.ro.disconnect(); R.controls.dispose(); R.renderer.dispose(); R = null;
  }
  const getLvl = (m) => { try { const v = +localStorage.getItem('lumen.lab.lvl'); if (v >= 1 && v <= 3) return v; } catch (e) { /* sin almacenamiento */ } return Tutor.levelOf(m.subj); };
  const setLvl = (v) => { try { localStorage.setItem('lumen.lab.lvl', v); } catch (e) { /* idem */ } };

  function chipsHtml(m) {
    const ks = Object.keys(m.parts), chip = (k) => `<button class="chip" data-k="${k}">${esc(m.parts[k].n)}</button>`;
    const grps = []; ks.forEach((k) => { const g = m.parts[k].grp || ''; if (grps.indexOf(g) < 0) grps.push(g); });
    if (grps.length < 2) return ks.map(chip).join('');
    return grps.map((g) => `<h5>${esc(g)}</h5>` + ks.filter((k) => (m.parts[k].grp || '') === g).map(chip).join('')).join('');
  }

  function render(el, id) {
    stop();
    const m = MODELS.find((x) => x.id === id) || MODELS[0];
    let lvl = getLvl(m), sel = null, handle = {};
    const areas = []; MODELS.forEach((x) => { if (areas.indexOf(x.area) < 0) areas.push(x.area); });
    el.innerHTML = `<div class="lab">
      <aside class="lab-list card">${areas.map((a) => '<h4>' + a + '</h4>' + MODELS.filter((x) => x.area === a).map((x) => `<a href="#/lab/${x.id}" class="${x.id === m.id ? 'on' : ''}">${x.name}</a>`).join('')).join('')}</aside>
      <section><div class="stage" id="stage"><canvas></canvas><div class="hud" id="hud"></div><div class="tip" id="tip"></div><div class="hint">Arrastra para girar · rueda o pellizco para acercar · toca una parte para saber más</div></div>
        <div class="ctrls" id="ctrls"></div></section>
      <aside class="lab-info card"><h2>${m.name}</h2>
        <div class="seg" id="lv">${[1, 2, 3].map((i) => `<button data-l="${i}">${LV[i]}</button>`).join('')}</div>
        <div class="partbox" id="part"></div>
        ${m.noChips ? '<div id="side"></div>' : `<h4>Partes</h4>
        <div class="chips${Object.keys(m.parts).length > 14 ? ' scroll' : ''}" id="chips">${chipsHtml(m)}</div>`}
        <a class="btn" href="#/tutor/${m.subj}">Practicar ${BANK[m.subj].name} en el tutor</a>${m.credit ? `<p class="credit">${esc(m.credit)}</p>` : ''}</aside></div>`;
    const $ = (q) => el.querySelector(q), stage = $('#stage'), canvas = stage.querySelector('canvas'), hudEl = $('#hud'), tip = $('#tip');

    function info() {
      el.querySelectorAll('#lv button').forEach((b) => b.classList.toggle('on', +b.dataset.l === lvl));
      el.querySelectorAll('.chip').forEach((b) => b.classList.toggle('on', b.dataset.k === sel));
      const pt = sel && m.parts[sel];
      $('#part').innerHTML = pt ? `<b>${esc(pt.n)}</b><p>${esc(Array.isArray(pt.d) ? pt.d[lvl - 1] : pt.d)}</p>` : '<span class="muted">Selecciona una parte de la lista o tócala en la maqueta.</span>';
      if (handle.partInfo) handle.partInfo(sel, $('#part')); // la maqueta puede añadir datos y botones propios
    }
    el.querySelectorAll('#lv button').forEach((b) => { b.onclick = () => { lvl = +b.dataset.l; setLvl(lvl); info(); }; });
    el.querySelectorAll('.chip').forEach((b) => { b.onclick = () => { sel = b.dataset.k; info(); paint(); }; });
    let hov = null, paint = () => {};
    info();

    if (!window.THREE || !THREE.OrbitControls) {
      stage.innerHTML = '<p style="color:#cbd5e1;padding:24px">No se pudo cargar el motor 3D. Comprueba la conexión a internet y recarga la página.</p>';
      return;
    }

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0b1020);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 500); camera.position.set(m.cam[0], m.cam[1], m.cam[2]);
    const controls = new THREE.OrbitControls(camera, canvas); controls.enableDamping = true;
    if (m.target) controls.target.set(m.target[0], m.target[1], m.target[2]);
    if (m.lights === false) scene.add(new THREE.AmbientLight(0xffffff, 0.13)); // la maqueta trae su propia luz (p. ej. el Sol)
    const luces = []; // [luz, intensidad base]: las maquetas con texturas claras piden menos luz (m.luz)
    if (m.lights !== false) {
      const amb = new THREE.AmbientLight(0xffffff, 0.7), d1 = new THREE.DirectionalLight(0xffffff, 0.9), d2 = new THREE.DirectionalLight(0xffffff, 0.35);
      d1.position.set(6, 10, 8); d2.position.set(-8, -4, -6);
      [[amb, 0.7], [d1, 0.9], [d2, 0.35]].forEach((l) => { scene.add(l[0]); luces.push(l); });
    }
    const luz = (f) => luces.forEach((l) => { l[0].intensity = l[1] * f; });
    luz(m.luz || 1);

    const params = {}; (m.controls || []).forEach((c) => { params[c.id] = c.value; });
    let group = null, hudTxt = '';
    const hud = (t) => { if (t !== hudTxt) { hudTxt = t; hudEl.textContent = t; } };
    function build() {
      if (group) { if (group.userData.dispose) group.userData.dispose(); scene.remove(group); group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); }
      group = new THREE.Group(); scene.add(group); hud('');
      handle = m.build({ g: group, p: params, hud, repaint: () => paint(), api: { select: (k) => { sel = k; info(); paint(); }, sel: () => sel, camera, controls, luz, ctrls: $('#ctrls'), side: $('#side') } }) || {};
    }
    build();

    $('#ctrls').innerHTML = (m.controls || []).map((c) => c.type === 'check'
      ? `<label class="chk"><input type="checkbox" data-id="${c.id}"${c.value ? ' checked' : ''}> ${c.label}</label>`
      : c.type === 'range'
      ? `<label>${c.label}: <output id="o-${c.id}">${c.value}</output><input type="range" data-id="${c.id}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}"></label>`
      : `<label>${c.label}<select data-id="${c.id}">${c.options.map((o) => `<option value="${o[0]}"${o[0] === c.value ? ' selected' : ''}>${o[1]}</option>`).join('')}</select></label>`).join('');
    el.querySelectorAll('#ctrls [data-id]').forEach((inp) => {
      inp.oninput = () => {
        const v = inp.value; params[inp.dataset.id] = inp.type === 'checkbox' ? inp.checked : v !== '' && !isNaN(v) ? +v : v;
        const o = $('#o-' + inp.dataset.id); if (o) o.textContent = v;
        if (handle.set) handle.set(params); else build();
        paint();
      };
    });
    if (handle.mount) handle.mount(); // panel de controles propio de la maqueta

    // Selección de partes con el puntero (las cubiertas transparentes dejan pasar el clic a lo que hay dentro).
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
    // Resalta la parte bajo el puntero y la seleccionada.
    const RES = m.resalte || [0x3d3d3d, 0x4a3300]; // [bajo el puntero, seleccionada]
    paint = () => {
      group.traverse((o) => {
        if (!o.isMesh || !o.material || !o.material.emissive) return;
        let q = o; while (q && !q.userData.part) q = q.parent;
        const k = q && q.userData.part;
        o.material.emissive.setHex(k && k === hov ? RES[0] : k && k === sel ? RES[1] : 0x000000);
      });
    };
    const shown = (o) => { while (o) { if (!o.visible) return false; o = o.parent; } return true; };
    function hit(ev) {
      const r = canvas.getBoundingClientRect();
      mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(mouse, camera);
      let shell = null; punto = null;
      for (const h of ray.intersectObjects(handle.pickables ? handle.pickables() : group.children, true)) {
        let o = h.object; while (o && !o.userData.part) o = o.parent;
        if (!o || !shown(h.object)) continue;
        if (o.userData.shell) { if (!shell) { shell = o.userData.part; punto = h.point.clone(); } continue; }
        punto = h.point.clone(); return o.userData.part;
      }
      return shell;
    }
    let punto = null; // punto de la maqueta bajo el último rayo lanzado
    // Punto de la escena bajo el puntero: el de la maqueta o, si no toca nada, el del plano que pasa por el centro de la vista
    function bajoPuntero(ev) {
      hit(ev); if (punto) return punto;
      const n = camera.getWorldDirection(new THREE.Vector3()), out = new THREE.Vector3();
      return ray.ray.intersectPlane(new THREE.Plane().setFromNormalAndCoplanarPoint(n, controls.target), out) ? out : null;
    }
    const mover = (d) => { controls.target.add(d); camera.position.add(d); };
    // Zoom hacia el cursor: al acercar, la vista se desplaza hacia lo que hay bajo el puntero
    canvas.addEventListener('wheel', (e) => {
      if (e.deltaY >= 0) return;
      const q = bajoPuntero(e); if (q) mover(q.sub(controls.target).multiplyScalar(0.16));
    }, { passive: true });
    // Doble clic: centra la vista en el punto tocado
    canvas.addEventListener('dblclick', (e) => { const q = bajoPuntero(e); if (q) mover(q.sub(controls.target)); });
    let down = null;
    canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    canvas.addEventListener('pointerup', (e) => {
      if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 6) return;
      const k = hit(e); if (k && m.parts[k]) { sel = k; info(); paint(); const c = el.querySelector('.chip.on'); if (c && c.scrollIntoView) c.scrollIntoView({ block: 'nearest' }); }
    });
    let lastMove = 0;
    canvas.addEventListener('pointermove', (e) => {
      const now = performance.now(); if (e.buttons || now - lastMove < 70) return; lastMove = now; // el trazado de rayos es caro en modelos grandes
      const k = hit(e), r = stage.getBoundingClientRect();
      if ((k && m.parts[k] ? k : null) !== hov) { hov = k && m.parts[k] ? k : null; paint(); }
      if (k && m.parts[k]) { tip.style.display = 'block'; tip.textContent = m.parts[k].n; tip.style.left = (e.clientX - r.left) + 'px'; tip.style.top = (e.clientY - r.top) + 'px'; canvas.style.cursor = 'pointer'; }
      else { tip.style.display = 'none'; canvas.style.cursor = 'grab'; }
    });
    canvas.addEventListener('pointerleave', () => { tip.style.display = 'none'; if (hov) { hov = null; paint(); } });

    function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
    resize();
    const clock = new THREE.Clock(); let t = 0;
    R = { renderer, controls, raf: 0, ro: null };
    if (window.ResizeObserver) { R.ro = new ResizeObserver(resize); R.ro.observe(stage); }
    (function tick() {
      if (!R || R.renderer !== renderer) return;
      R.raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05); t += dt;
      if (handle.update) handle.update(t, dt);
      controls.update(); renderer.render(scene, camera);
    })();
  }

  window.Lab = { render, stop };
})();
