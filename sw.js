// Trabajador de servicio de Lumen: guarda en el dispositivo lo que se va usando para que la app funcione sin conexión.
// - Código y datos pequeños (html, js, css, json): se pide primero a la red para tener siempre la última versión;
//   si no hay conexión, se sirve la copia guardada.
// - Archivos grandes que no cambian (bibliotecas, modelos 3D, audio): se sirve la copia guardada si existe.
// Si se actualizan archivos pesados (modelos, audio, bibliotecas), hay que cambiar el número de CACHE: al activarse
// la versión nueva se borran las copias antiguas y se vuelven a descargar.
const CACHE = 'lumen-v1';
const PESADOS = /\/(lib|audio|data\/atlas|data\/modelos|data\/cuerpo)\//;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('lumen-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim())));

self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  const guardar = (res) => { if (res && res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(url.pathname, copia)); } return res; };
  const guardado = () => caches.match(url.pathname).then((r) => r || (url.pathname.endsWith('/') ? caches.match(url.pathname + 'index.html') : undefined));
  if (PESADOS.test(url.pathname)) e.respondWith(guardado().then((r) => r || fetch(req).then(guardar)));
  else e.respondWith(fetch(req).then(guardar).catch(() => guardado().then((r) => r || Response.error())));
});
