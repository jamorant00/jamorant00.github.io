const CACHE = 'v2';
const FILES = ['/','/index.html','/edit.html','/wrapped.html','/style.css','/lor_tinky.jpg'];
self.addEventListener('install', e=> e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=> e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
