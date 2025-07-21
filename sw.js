const CACHE = 'v1';
const FILES = [
  '/',
  '/index.html',
  '/edit.html',
  '/wrapped.html',
  '/style.css',
  '/script.js',
  '/lor_tinky.jpg'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)));
});
