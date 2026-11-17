// Carátulas de las materias del tutor: dibujos SVG propios (40 × 40). Para cambiar una basta con editar su dibujo.
// Las banderas son las oficiales simplificadas; el de Python recrea su logotipo de las dos serpientes; SQL no tiene
// logotipo propio (es un lenguaje estándar), así que usa el símbolo habitual de base de datos.
(function () {
  const svg = (inner) => '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + inner + '</svg>';
  const serpiente = 'M19.6 6c-5 0-5.6 2.2-5.6 4.2V13h6v1h-8.8C8.4 14 7 16.2 7 20s1.4 6 4 6h2.6v-3.4c0-2.6 2.2-4.6 4.8-4.6h5.2c2 0 3.4-1.6 3.4-3.6v-4.2C27 7.6 24.6 6 19.6 6z';
  window.ICONOS = {
    biologia: svg('<rect width="40" height="40" fill="#dcfce7"/><circle cx="20" cy="20" r="15" fill="#86efac" stroke="#16a34a" stroke-width="2"/>'
      + '<circle cx="17" cy="22" r="6.5" fill="#8b5cf6"/><circle cx="15.5" cy="23" r="2.2" fill="#4c1d95"/>'
      + '<ellipse cx="27" cy="14" rx="4.4" ry="2.4" fill="#fb923c" transform="rotate(-30 27 14)"/><ellipse cx="27.5" cy="27" rx="3.6" ry="2" fill="#fb923c" transform="rotate(35 27.5 27)"/>'
      + '<circle cx="12" cy="11.5" r="1.6" fill="#0ea5e9"/><circle cx="19" cy="9" r="1.2" fill="#f472b6"/><circle cx="9.5" cy="18" r="1.1" fill="#f472b6"/>'),
    fisica: svg('<rect width="40" height="40" fill="#1e3a8a"/><g fill="none" stroke="#93c5fd" stroke-width="1.6">'
      + '<ellipse cx="20" cy="20" rx="16" ry="6"/><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(120 20 20)"/></g>'
      + '<circle cx="20" cy="20" r="3.4" fill="#fbbf24"/><circle cx="35.2" cy="18" r="1.6" fill="#fff"/><circle cx="11.2" cy="7.2" r="1.6" fill="#fff"/><circle cx="14" cy="33.6" r="1.6" fill="#fff"/>'),
    quimica: svg('<rect width="40" height="40" fill="#ffedd5"/>'
      + '<path d="M16.5 6.5h7M17.5 6.5v10L9.6 30a2.4 2.4 0 0 0 2.1 3.6h16.6a2.4 2.4 0 0 0 2.1-3.6L22.5 16.5v-10" fill="#fff" stroke="#9a3412" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'
      + '<path d="M14 24.5h12l3.6 6.2a1.3 1.3 0 0 1-1.1 1.9H11.5a1.3 1.3 0 0 1-1.1-1.9z" fill="#f97316"/>'
      + '<circle cx="17.5" cy="28.5" r="1.4" fill="#ffedd5"/><circle cx="22.5" cy="26.8" r="1" fill="#ffedd5"/><circle cx="20" cy="20" r="1.2" fill="#fdba74"/><circle cx="21.5" cy="13" r="0.9" fill="#fdba74"/>'),
    aleman: svg('<rect width="40" height="13.4" fill="#000"/><rect y="13.3" width="40" height="13.4" fill="#dd0000"/><rect y="26.6" width="40" height="13.4" fill="#ffce00"/>'),
    frances: svg('<rect width="13.4" height="40" fill="#0055a4"/><rect x="13.3" width="13.4" height="40" fill="#fff"/><rect x="26.6" width="13.4" height="40" fill="#ef4135"/>'),
    italiano: svg('<rect width="13.4" height="40" fill="#009246"/><rect x="13.3" width="13.4" height="40" fill="#fff"/><rect x="26.6" width="13.4" height="40" fill="#ce2b37"/>'),
    catalan: svg('<rect width="40" height="40" fill="#fcdd09"/>' + [1, 3, 5, 7].map((i) => '<rect y="' + (i * 40 / 9).toFixed(2) + '" width="40" height="' + (40 / 9).toFixed(2) + '" fill="#da121a"/>').join('')),
    python: svg('<rect width="40" height="40" fill="#f8fafc"/><g transform="translate(3 3) scale(0.85)"><path d="' + serpiente + '" fill="#3776ab"/><circle cx="16.8" cy="9.6" r="1.2" fill="#fff"/>'
      + '<g transform="rotate(180 20 20)"><path d="' + serpiente + '" fill="#ffd43b"/><circle cx="16.8" cy="9.6" r="1.2" fill="#fff"/></g></g>'),
    sql: svg('<rect width="40" height="40" fill="#ede9fe"/><path d="M9 11v18c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5V11" fill="#8b5cf6"/>'
      + '<path d="M9 17c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5M9 23c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5" fill="none" stroke="#ede9fe" stroke-width="1.6"/>'
      + '<ellipse cx="20" cy="11" rx="11" ry="4.5" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.2"/>'),
  };
})();
