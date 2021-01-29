import {} from '.';

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            // eslint-disable-next-line no-console
            console.warn(`hello from service worker ${event.request}`);

            return fetch(event.request);
        })()
    );
});
