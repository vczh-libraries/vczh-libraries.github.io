// This worker is scoped to wasm-fct. It adds the headers required by Wasm threads
// on static hosts and streams responses without maintaining a separate cache.
self.addEventListener('install', (event) => { event.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (new URL(request.url).origin !== self.location.origin) return;
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
    event.respondWith((async () => {
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        headers.set('Cross-Origin-Opener-Policy', 'same-origin');
        headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
        headers.set('Cross-Origin-Resource-Policy', 'same-origin');
        let body = response.body;
        if (response.ok && body !== null && new URL(request.url).pathname.endsWith('/app.wasm')) {
            const clients = await self.clients.matchAll({ type: 'window' });
            const reader = body.getReader();
            let loaded = 0;
            let reported = 0;
            body = new ReadableStream({
                async pull(controller) {
                    const { done, value } = await reader.read();
                    if (!done) loaded += value.byteLength;
                    if (done || loaded - reported >= 256 * 1024) {
                        for (const client of clients) client.postMessage({ kind: 'wasm-download', loaded, done });
                        reported = loaded;
                    }
                    if (done) controller.close();
                    else controller.enqueue(value);
                },
                cancel(reason) { return reader.cancel(reason); },
            });
        }
        return new Response(body, { status: response.status, statusText: response.statusText, headers });
    })());
});
