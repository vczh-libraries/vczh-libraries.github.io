import { createHtmlRenderer, GacUIHtmlRendererExitError, isShortcutReservedForBrowser } from './gacui.js';
import { connectWasmServer, WasmApplication } from './wasm.js';

const screen = document.getElementById('gacui-screen');
const loading = document.getElementById('gacui-loading');
const message = document.getElementById('gacui-loading-message');
const progress = document.getElementById('gacui-progress');
const buttons = [...document.querySelectorAll('button')];
let application;
let renderer;

function showMask(success, text) {
    loading.hidden = true;
    for (const button of buttons) button.disabled = true;
    const kind = success ? 'success' : 'error';
    const mask = document.getElementById(`gacui-${kind}-mask`);
    document.getElementById(`gacui-${kind}-message`).textContent = text;
    screen.append(mask);
    mask.classList.add('visible');
}

async function prepareThreads() {
    if (!globalThis.isSecureContext || !('serviceWorker' in navigator)) {
        throw new Error('Open this demo over HTTPS in a browser with WebAssembly thread support.');
    }
    await navigator.serviceWorker.register('./service-worker.js');
    await navigator.serviceWorker.ready;
    if (navigator.serviceWorker.controller === null) {
        await new Promise((resolve) => navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true }));
    }
    if (!globalThis.crossOriginIsolated) {
        if (sessionStorage.getItem('gacui-wasm-reload') === '1') {
            throw new Error('WebAssembly threads are unavailable. Please try a current browser with its default privacy settings.');
        }
        sessionStorage.setItem('gacui-wasm-reload', '1');
        location.reload();
        return false;
    }
    sessionStorage.removeItem('gacui-wasm-reload');
    return true;
}

async function main() {
    if (!await prepareThreads()) return;
    const sizeResponse = await fetch('./app-size.json');
    if (!sizeResponse.ok) throw new Error(`Cannot load the demo: HTTP ${sizeResponse.status}.`);
    const { bytes } = await sizeResponse.json();
    progress.max = bytes;
    progress.value = 0;
    message.textContent = 'Downloading the demo…';
    navigator.serviceWorker.addEventListener('message', ({ data }) => {
        if (data.kind !== 'wasm-download' || loading.hidden) return;
        progress.value = data.loaded;
        message.textContent = data.done ? 'Starting the demo…' : `Downloading the demo… ${Math.min(100, Math.floor(100 * data.loaded / bytes))}%`;
    });

    application = new WasmApplication({
        moduleUrl: new URL('./app.mjs', location.href),
        workerUrl: new URL('./wasm-worker.js', location.href),
        channels: [['GacUIRemoteProtocol']],
    });
    window.addEventListener('pagehide', () => { application.stop(); }, { once: true });
    renderer = createHtmlRenderer({
        target: screen,
        isShortcutReservedForBrowser,
        suggestMinSize(x, y) {
            screen.style.width = `max(${Math.max(x, 320)}px, calc(100vw - 32px))`;
            screen.style.height = `max(${Math.max(y, 240)}px, calc(100dvh - 112px))`;
        },
        idle: () => { window.__gacui_playwright_idle?.(); },
        blink: () => { window.__gacui_playwright_blink?.(); },
    });
    const client = await connectWasmServer(application, renderer.requests);
    renderer.start(client.responses, client.events);
    loading.hidden = true;
    screen.focus();
    for (const button of buttons) button.disabled = false;
    try {
        try {
            await client.start();
        } catch (error) {
            if (!(error instanceof GacUIHtmlRendererExitError)) throw error;
        }
        const result = await application.completion;
        if (result !== 0) throw new Error(`The demo stopped with code ${result}.`);
        showMask(true, 'The demo has closed. Refresh the page to start again.');
    } finally {
        client.stop();
        renderer.stop();
    }
}

screen.addEventListener('contextmenu', (event) => { event.preventDefault(); });
document.getElementById('gacui-exit').onclick = () => { renderer?.requestStopToCore(false); };
document.getElementById('gacui-force-exit').onclick = () => { renderer?.requestStopToCore(true); };
void main().catch((error) => {
    showMask(false, error instanceof Error ? error.message : String(error));
    application?.stop();
    throw error;
});
