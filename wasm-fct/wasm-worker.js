var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../remote-protocol-wasm/lib/src/messages.js
function normalizeError(error) {
  return error instanceof Error ? error : new Error(String(error));
}
__name(normalizeError, "normalizeError");

// ../remote-protocol-wasm/lib/src/worker.js
var module;
function notify(kind, connectionId = 0, data = "") {
  globalThis.postMessage({ kind, connectionId, data });
}
__name(notify, "notify");
function receive(kind, connectionId, data) {
  try {
    notify(kind, connectionId, data);
    return "";
  } catch (error) {
    return normalizeError(error).message;
  }
}
__name(receive, "receive");
function check(error) {
  if (error !== "")
    throw new Error(error);
}
__name(check, "check");
Object.assign(globalThis, {
  vlConsoleWrite(heap, pointer, length) {
    try {
      let text = "";
      for (const code of heap.subarray(pointer / 2, pointer / 2 + length))
        text += String.fromCharCode(code);
      console.log(text);
      return 1;
    } catch {
      return 0;
    }
  },
  vlConsoleColor() {
    return 1;
  },
  vlConsoleTitle() {
    return 1;
  },
  vlConsoleRead() {
    return void 0;
  }
});
globalThis.onmessage = (event) => {
  void (async () => {
    const command = event.data;
    if (command.kind === "start") {
      if (module !== void 0)
        return;
      const loaded = await import(
        /* @vite-ignore */
        command.moduleUrl
      );
      module = await loaded.default({ onAbort: /* @__PURE__ */ __name((reason) => {
        notify("error", 0, String(reason));
      }, "onAbort") });
      check(module.StartApplication(receive, command.connectionCount));
      return;
    }
    if (module === void 0)
      throw new Error("The Wasm module has not started.");
    check(module.SendDataToWasmCore(command.connectionId, command.data));
  })().catch((error) => {
    notify("error", 0, normalizeError(error).message);
  });
};
//# sourceMappingURL=wasm-worker.js.map
