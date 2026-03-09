self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Iski wajah se browser ko lagta hai ki ye ek proper App hai
    e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});