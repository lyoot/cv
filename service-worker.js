const CACHE_NAME = "cv-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/scripts.js"
];

// تثبيت الخدمة وتخزين الملفات في الكاش
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// تشغيل الخدمة وجلب الملفات من الكاش
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// تحديث الكاش عند وجود نسخة جديدة
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

