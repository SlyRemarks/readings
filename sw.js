self.addEventListener('fetch', (event) => {
    // This can be expanded for offline caching
    event.respondWith(fetch(event.request));
});
