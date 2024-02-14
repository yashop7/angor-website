self.addEventListener('install', function (event) {
    console.log('ServiceWorker installed');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
    console.log('ServiceWorker activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
    const url = new URL(event.request.url);

    // Only cache requests from the same origin as your PWA
    if (url.origin === location.origin) {
        event.respondWith(
            caches.open('cache').then(function (cache) {
                return cache.match(event.request).then(function (response) {
                    return fetch(event.request).then(function (networkResponse) {
                        // Check for updates
                        if (networkResponse) {
                            cache.put(event.request, networkResponse.clone());
                            displayUpdateNotification(); // Call this when an update is detected
                        }
                        return response || networkResponse;
                    });
                });
            })
        );
    }
});

function displayUpdateNotification() {
    if (Notification.permission === 'granted') {
        new Notification('New version available!', {
            body: 'A new version of the application is available. Refresh to update.'
        });
    }
}
