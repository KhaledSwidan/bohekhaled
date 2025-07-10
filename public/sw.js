const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/', // الصفحة الرئيسية
  '/favicon.ico',
  '/manifest.json',
  '/hero-image.jpg',
  '/offline.html', // صفحة offline احتياطية (لو حابب تستخدمها)
];

// ✅ Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // تفعيل التحديث فورًا

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ✅ Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // تفعيل فورًا لكل التبويبات
  );
});

// ✅ Fetch: Cache-first with network fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).catch(() => {
        // fallback to offline page (اختياري)
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});
