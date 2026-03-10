const CACHE_NAME = 'lisa-app-v6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 1. Installation: Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('App-Shell wird gecacht');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Aktivierung: Alte Caches löschen (wenn du Updates machst)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// 3. Fetch: Inhalte aus dem Cache laden (Offline-Support)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Wenn im Cache, dann nimm es. Wenn nicht, lade aus dem Netz.
      return response || fetch(event.request);
    })
  );
});