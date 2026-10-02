var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../remote-protocol-http/lib/src/channel.js
var CHANNEL_ERROR_NAME = "!Error";
function parseInteger(text, description) {
  if (!/^-?(?:0|[1-9][0-9]*)$/.test(text)) {
    throw new Error(`Invalid ${description}: ${text}`);
  }
  const value = Number(text);
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Unsafe ${description}: ${text}`);
  }
  return value;
}
__name(parseInteger, "parseInteger");
function validateInteger(value, description) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ${description}: ${String(value)}`);
  }
}
__name(validateInteger, "validateInteger");
function parseNetworkPackage(text) {
  const firstSeparator = text.indexOf(";");
  if (firstSeparator === -1) {
    throw new Error(`Invalid network package: ${text}`);
  }
  const secondSeparator = text.indexOf(";", firstSeparator + 1);
  if (secondSeparator === -1) {
    throw new Error(`Invalid network package: ${text}`);
  }
  const ids = text.substring(0, firstSeparator);
  const parts = ids.split(",");
  const result = {
    channelName: text.substring(firstSeparator + 1, secondSeparator),
    messageBody: text.substring(secondSeparator + 1)
  };
  if (parts[0] !== "") {
    result.clientId = parseInteger(parts[0], "network package client id");
  }
  if (parts.length > 1) {
    const extraClientIds = [];
    for (let index = 1; index < parts.length; index++) {
      if (parts[index] === "") {
        throw new Error(`Invalid network package extra client id: ${text}`);
      }
      extraClientIds.push(parseInteger(parts[index], "network package extra client id"));
    }
    result.extraClientIds = extraClientIds;
  }
  return result;
}
__name(parseNetworkPackage, "parseNetworkPackage");
function serializeNetworkPackage(networkPackage) {
  let ids = "";
  if (networkPackage.clientId !== void 0) {
    validateInteger(networkPackage.clientId, "network package client id");
    ids = String(networkPackage.clientId);
  }
  if (networkPackage.extraClientIds !== void 0) {
    for (const clientId of networkPackage.extraClientIds) {
      validateInteger(clientId, "network package extra client id");
      ids += `,${String(clientId)}`;
    }
  }
  return `${ids};${networkPackage.channelName};${networkPackage.messageBody}`;
}
__name(serializeNetworkPackage, "serializeNetworkPackage");
function validatePositiveClientId(clientId, description = "client id") {
  if (!Number.isSafeInteger(clientId) || clientId <= 0) {
    throw new Error(`Invalid ${description}: ${String(clientId)}`);
  }
}
__name(validatePositiveClientId, "validatePositiveClientId");
function validateChannelName(channelName) {
  if (channelName.length === 0 || channelName.includes("!") || channelName.includes(";")) {
    throw new Error(`Invalid channel name: ${channelName}`);
  }
}
__name(validateChannelName, "validateChannelName");

// ../remote-protocol-http/lib/src/httpChannel.js
var DEFAULT_HTTP_CHANNEL_ORIGIN = "http://localhost:8888";
var DEFAULT_HTTP_CHANNEL_BASE_PATH = "/GacUIRemoteProtocolHttp";
var HttpChannelConnectionError = class extends Error {
  static {
    __name(this, "HttpChannelConnectionError");
  }
  assigned;
  serverError;
  constructor(assigned, message = assigned ? "HTTP channel disconnected." : "HTTP channel closed before client assignment.", serverError = false) {
    super(message);
    this.assigned = assigned;
    this.serverError = serverError;
  }
};
function normalizeError(error) {
  if (error instanceof Error) {
    return error;
  }
  return new Error(String(error));
}
__name(normalizeError, "normalizeError");
function validateOrigin(origin) {
  const url = new URL(origin);
  if (url.protocol !== "http:" && url.protocol !== "https:" || url.pathname !== "/" || url.search !== "" || url.hash !== "") {
    throw new Error(`Invalid HTTP channel origin: ${origin}`);
  }
}
__name(validateOrigin, "validateOrigin");
function validateBasePath(basePath) {
  if (!basePath.startsWith("/") || basePath.endsWith("/") || basePath.includes("?") || basePath.includes("#")) {
    throw new Error(`Invalid HTTP channel base path: ${basePath}`);
  }
}
__name(validateBasePath, "validateBasePath");
var HttpChannelClient = class {
  static {
    __name(this, "HttpChannelClient");
  }
  origin;
  basePath;
  channelNames;
  fetchImpl;
  handlers = /* @__PURE__ */ new Set();
  queuedMessages = [];
  abortControllers = /* @__PURE__ */ new Set();
  completionResolve;
  completionPromise;
  currentState = "connecting";
  assignedClientId;
  urls;
  sending = Promise.resolve();
  startPromise;
  completed = false;
  constructor(options) {
    if (options.channelNames.length === 0) {
      throw new Error("An HTTP channel client must advertise at least one channel.");
    }
    const uniqueNames = /* @__PURE__ */ new Set();
    for (const channelName of options.channelNames) {
      validateChannelName(channelName);
      if (uniqueNames.has(channelName)) {
        throw new Error(`Duplicate HTTP channel name: ${channelName}`);
      }
      uniqueNames.add(channelName);
    }
    this.origin = options.origin ?? DEFAULT_HTTP_CHANNEL_ORIGIN;
    this.basePath = options.basePath ?? DEFAULT_HTTP_CHANNEL_BASE_PATH;
    validateOrigin(this.origin);
    validateBasePath(this.basePath);
    this.channelNames = [...options.channelNames];
    const globalFetch = globalThis.fetch;
    let fetchImpl = options.fetch;
    if (fetchImpl === void 0) {
      if (globalFetch === void 0) {
        throw new Error("No fetch implementation is available for the HTTP channel client.");
      }
      fetchImpl = /* @__PURE__ */ __name((input, init) => globalThis.fetch(input, init), "fetchImpl");
    }
    this.fetchImpl = fetchImpl;
    let resolveCompletion;
    this.completionPromise = new Promise((resolve) => {
      resolveCompletion = resolve;
    });
    if (resolveCompletion === void 0) {
      throw new Error("Failed to create the HTTP channel completion promise.");
    }
    this.completionResolve = resolveCompletion;
  }
  get clientId() {
    return this.assignedClientId;
  }
  get state() {
    return this.currentState;
  }
  get completion() {
    return this.completionPromise;
  }
  finish(completion) {
    if (this.completed) {
      return;
    }
    this.completed = true;
    this.currentState = completion.type === "stopped" ? "stopped" : "failed";
    for (const controller of this.abortControllers) {
      controller.abort();
    }
    this.abortControllers.clear();
    this.completionResolve(completion);
  }
  fail(error) {
    const normalized = normalizeError(error);
    const failure = normalized instanceof HttpChannelConnectionError ? normalized : new HttpChannelConnectionError(this.assignedClientId !== void 0, normalized.message);
    this.finish({ type: "failed", error: failure });
    return failure;
  }
  getUrl(path) {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    if (path.startsWith(this.basePath)) {
      return `${this.origin}${path}`;
    }
    return `${this.origin}${this.basePath}${path}`;
  }
  async fetchText(url, init) {
    const controller = new AbortController();
    this.abortControllers.add(controller);
    try {
      const response = await this.fetchImpl(url, { ...init, signal: controller.signal });
      if (response.status !== 200) {
        throw new HttpChannelConnectionError(this.assignedClientId !== void 0);
      }
      return await response.text();
    } catch (error) {
      if (this.currentState === "stopped") {
        throw error;
      }
      throw this.fail(error);
    } finally {
      this.abortControllers.delete(controller);
    }
  }
  async connectServer() {
    const url = `${this.origin}${this.basePath}/VlppInterProcess/Connect`;
    const responseText = await this.fetchText(url, {
      method: "GET",
      headers: { "Accept": "application/json; charset=utf8" }
    });
    const separator = responseText.indexOf(";");
    if (separator === -1 || responseText.indexOf(";", separator + 1) !== -1) {
      throw this.fail(new Error(`Invalid connect response: ${responseText}`));
    }
    return {
      requestUrl: responseText.substring(0, separator),
      responseUrl: responseText.substring(separator + 1)
    };
  }
  async post(message) {
    if (this.urls === void 0) {
      throw new Error("HTTP channel connection URLs are not available.");
    }
    const responseText = await this.fetchText(this.getUrl(this.urls.responseUrl), {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf8" },
      body: message
    });
    return responseText === "" ? void 0 : responseText;
  }
  async read() {
    if (this.urls === void 0) {
      throw new Error("HTTP channel connection URLs are not available.");
    }
    const responseText = await this.fetchText(this.getUrl(this.urls.requestUrl), {
      method: "POST",
      headers: { "Accept": "application/json; charset=utf8" }
    });
    return responseText === "" ? void 0 : responseText;
  }
  acceptAssignment(networkPackage, originalText) {
    if (networkPackage.channelName !== "") {
      return false;
    }
    if (networkPackage.extraClientIds !== void 0 || networkPackage.messageBody !== "" || networkPackage.clientId === void 0) {
      throw this.fail(new Error(`Invalid channel assignment: ${originalText}`));
    }
    validatePositiveClientId(networkPackage.clientId, "assigned channel client id");
    if (this.assignedClientId !== void 0) {
      throw this.fail(new Error("The HTTP channel client received more than one assignment."));
    }
    this.assignedClientId = networkPackage.clientId;
    this.currentState = "assigned";
    return true;
  }
  dispatch(networkPackage, originalText) {
    if (networkPackage.channelName === CHANNEL_ERROR_NAME) {
      throw this.fail(new HttpChannelConnectionError(this.assignedClientId !== void 0, networkPackage.messageBody, true));
    }
    if (this.acceptAssignment(networkPackage, originalText)) {
      return;
    }
    if (networkPackage.extraClientIds !== void 0 || networkPackage.clientId === void 0) {
      throw this.fail(new Error(`Invalid incoming network package: ${originalText}`));
    }
    validatePositiveClientId(networkPackage.clientId, "sender client id");
    if (!this.channelNames.includes(networkPackage.channelName)) {
      return;
    }
    const message = {
      senderClientId: networkPackage.clientId,
      channelName: networkPackage.channelName,
      messageBody: networkPackage.messageBody
    };
    if (this.handlers.size === 0) {
      this.queuedMessages.push(message);
      return;
    }
    this.deliver(message);
  }
  deliver(message) {
    for (const handler of this.handlers) {
      Promise.resolve(handler(message)).catch((error) => {
        this.fail(error);
      });
    }
  }
  handleText(text) {
    let networkPackage;
    try {
      networkPackage = parseNetworkPackage(text);
    } catch (error) {
      throw this.fail(error);
    }
    this.dispatch(networkPackage, text);
  }
  async connect() {
    if (this.currentState !== "connecting") {
      if (this.currentState === "assigned") {
        return;
      }
      throw new Error("The HTTP channel client is already closed.");
    }
    this.urls = await this.connectServer();
    const join = serializeNetworkPackage({
      channelName: "",
      messageBody: this.channelNames.join("!")
    });
    const firstResponse = await this.post(join);
    if (firstResponse !== void 0) {
      this.handleText(firstResponse);
    }
    while (this.currentState === "connecting") {
      const responseText = await this.read();
      if (responseText !== void 0) {
        this.handleText(responseText);
      }
    }
    if (this.currentState !== "assigned") {
      throw new HttpChannelConnectionError(false);
    }
  }
  enqueue(networkPackage) {
    if (this.currentState !== "assigned") {
      return Promise.reject(new Error("The HTTP channel client is not assigned."));
    }
    const message = serializeNetworkPackage(networkPackage);
    const current = this.sending.catch(() => void 0).then(async () => {
      if (this.currentState !== "assigned") {
        throw new Error("The HTTP channel client is closed.");
      }
      const responseText = await this.post(message);
      if (responseText !== void 0) {
        this.handleText(responseText);
      }
    });
    this.sending = current;
    return current;
  }
  sendToClient(receiverClientId, channelName, messageBody) {
    validatePositiveClientId(receiverClientId, "receiver client id");
    validateChannelName(channelName);
    if (!this.channelNames.includes(channelName)) {
      return Promise.reject(new Error(`The HTTP channel client did not advertise channel: ${channelName}`));
    }
    return this.enqueue({ clientId: receiverClientId, channelName, messageBody });
  }
  broadcast(channelName, messageBody, blockedReceivers = []) {
    validateChannelName(channelName);
    if (!this.channelNames.includes(channelName)) {
      return Promise.reject(new Error(`The HTTP channel client did not advertise channel: ${channelName}`));
    }
    const uniqueIds = /* @__PURE__ */ new Set();
    for (const clientId of blockedReceivers) {
      validatePositiveClientId(clientId, "blocked receiver client id");
      if (clientId === this.assignedClientId) {
        return Promise.reject(new Error("The HTTP channel client cannot block itself from a broadcast."));
      }
      if (uniqueIds.has(clientId)) {
        return Promise.reject(new Error(`Duplicate blocked receiver client id: ${String(clientId)}`));
      }
      uniqueIds.add(clientId);
    }
    return this.enqueue({
      extraClientIds: blockedReceivers.length === 0 ? void 0 : [...blockedReceivers],
      channelName,
      messageBody
    });
  }
  onMessage(handler) {
    this.handlers.add(handler);
    if (this.queuedMessages.length > 0) {
      const messages = this.queuedMessages.splice(0, this.queuedMessages.length);
      for (const message of messages) {
        this.deliver(message);
      }
    }
    return () => {
      this.handlers.delete(handler);
    };
  }
  start() {
    if (this.startPromise !== void 0) {
      return this.startPromise;
    }
    if (this.currentState !== "assigned") {
      return Promise.reject(new Error("The HTTP channel client is not assigned."));
    }
    this.startPromise = (async () => {
      while (this.currentState === "assigned") {
        const reading = this.read().then((responseText) => ({ type: "message", responseText })).catch((error) => ({ type: "failure", error: normalizeError(error) }));
        const result = await Promise.race([
          reading,
          this.completion
        ]);
        if (result.type === "failed") {
          throw result.error;
        }
        if (result.type === "stopped") {
          return;
        }
        if (result.type === "failure") {
          throw result.error;
        }
        if (result.responseText !== void 0 && this.currentState === "assigned") {
          this.handleText(result.responseText);
        }
      }
      const completion = await this.completion;
      if (completion.type === "failed") {
        throw completion.error;
      }
    })();
    return this.startPromise;
  }
  stop() {
    this.finish({ type: "stopped" });
  }
};
async function connectHttpChannel(options) {
  const client = new HttpChannelClient(options);
  await client.connect();
  return client;
}
__name(connectHttpChannel, "connectHttpChannel");

// ../../gaclib/remote-protocol/lib/src/remoteProtocolPrimitiveTypes.js
var Key;
(function(Key2) {
  Key2[Key2["KEY_UNKNOWN"] = -1] = "KEY_UNKNOWN";
  Key2[Key2["KEY_MAXIMUM"] = 255] = "KEY_MAXIMUM";
  Key2[Key2["KEY_LBUTTON"] = 1] = "KEY_LBUTTON";
  Key2[Key2["KEY_RBUTTON"] = 2] = "KEY_RBUTTON";
  Key2[Key2["KEY_CANCEL"] = 3] = "KEY_CANCEL";
  Key2[Key2["KEY_MBUTTON"] = 4] = "KEY_MBUTTON";
  Key2[Key2["KEY_XBUTTON1"] = 5] = "KEY_XBUTTON1";
  Key2[Key2["KEY_XBUTTON2"] = 6] = "KEY_XBUTTON2";
  Key2[Key2["KEY_BACK"] = 8] = "KEY_BACK";
  Key2[Key2["KEY_TAB"] = 9] = "KEY_TAB";
  Key2[Key2["KEY_CLEAR"] = 12] = "KEY_CLEAR";
  Key2[Key2["KEY_RETURN"] = 13] = "KEY_RETURN";
  Key2[Key2["KEY_SHIFT"] = 16] = "KEY_SHIFT";
  Key2[Key2["KEY_CONTROL"] = 17] = "KEY_CONTROL";
  Key2[Key2["KEY_MENU"] = 18] = "KEY_MENU";
  Key2[Key2["KEY_PAUSE"] = 19] = "KEY_PAUSE";
  Key2[Key2["KEY_CAPITAL"] = 20] = "KEY_CAPITAL";
  Key2[Key2["KEY_KANA_HANGUL"] = 21] = "KEY_KANA_HANGUL";
  Key2[Key2["KEY_JUNJA"] = 23] = "KEY_JUNJA";
  Key2[Key2["KEY_FINAL"] = 24] = "KEY_FINAL";
  Key2[Key2["KEY_KANJI"] = 25] = "KEY_KANJI";
  Key2[Key2["KEY_ESCAPE"] = 27] = "KEY_ESCAPE";
  Key2[Key2["KEY_CONVERT"] = 28] = "KEY_CONVERT";
  Key2[Key2["KEY_NONCONVERT"] = 29] = "KEY_NONCONVERT";
  Key2[Key2["KEY_ACCEPT"] = 30] = "KEY_ACCEPT";
  Key2[Key2["KEY_MODECHANGE"] = 31] = "KEY_MODECHANGE";
  Key2[Key2["KEY_SPACE"] = 32] = "KEY_SPACE";
  Key2[Key2["KEY_PRIOR"] = 33] = "KEY_PRIOR";
  Key2[Key2["KEY_NEXT"] = 34] = "KEY_NEXT";
  Key2[Key2["KEY_END"] = 35] = "KEY_END";
  Key2[Key2["KEY_HOME"] = 36] = "KEY_HOME";
  Key2[Key2["KEY_LEFT"] = 37] = "KEY_LEFT";
  Key2[Key2["KEY_UP"] = 38] = "KEY_UP";
  Key2[Key2["KEY_RIGHT"] = 39] = "KEY_RIGHT";
  Key2[Key2["KEY_DOWN"] = 40] = "KEY_DOWN";
  Key2[Key2["KEY_SELECT"] = 41] = "KEY_SELECT";
  Key2[Key2["KEY_PRINT"] = 42] = "KEY_PRINT";
  Key2[Key2["KEY_EXECUTE"] = 43] = "KEY_EXECUTE";
  Key2[Key2["KEY_SNAPSHOT"] = 44] = "KEY_SNAPSHOT";
  Key2[Key2["KEY_INSERT"] = 45] = "KEY_INSERT";
  Key2[Key2["KEY_DELETE"] = 46] = "KEY_DELETE";
  Key2[Key2["KEY_HELP"] = 47] = "KEY_HELP";
  Key2[Key2["KEY_0"] = 48] = "KEY_0";
  Key2[Key2["KEY_1"] = 49] = "KEY_1";
  Key2[Key2["KEY_2"] = 50] = "KEY_2";
  Key2[Key2["KEY_3"] = 51] = "KEY_3";
  Key2[Key2["KEY_4"] = 52] = "KEY_4";
  Key2[Key2["KEY_5"] = 53] = "KEY_5";
  Key2[Key2["KEY_6"] = 54] = "KEY_6";
  Key2[Key2["KEY_7"] = 55] = "KEY_7";
  Key2[Key2["KEY_8"] = 56] = "KEY_8";
  Key2[Key2["KEY_9"] = 57] = "KEY_9";
  Key2[Key2["KEY_A"] = 65] = "KEY_A";
  Key2[Key2["KEY_B"] = 66] = "KEY_B";
  Key2[Key2["KEY_C"] = 67] = "KEY_C";
  Key2[Key2["KEY_D"] = 68] = "KEY_D";
  Key2[Key2["KEY_E"] = 69] = "KEY_E";
  Key2[Key2["KEY_F"] = 70] = "KEY_F";
  Key2[Key2["KEY_G"] = 71] = "KEY_G";
  Key2[Key2["KEY_H"] = 72] = "KEY_H";
  Key2[Key2["KEY_I"] = 73] = "KEY_I";
  Key2[Key2["KEY_J"] = 74] = "KEY_J";
  Key2[Key2["KEY_K"] = 75] = "KEY_K";
  Key2[Key2["KEY_L"] = 76] = "KEY_L";
  Key2[Key2["KEY_M"] = 77] = "KEY_M";
  Key2[Key2["KEY_N"] = 78] = "KEY_N";
  Key2[Key2["KEY_O"] = 79] = "KEY_O";
  Key2[Key2["KEY_P"] = 80] = "KEY_P";
  Key2[Key2["KEY_Q"] = 81] = "KEY_Q";
  Key2[Key2["KEY_R"] = 82] = "KEY_R";
  Key2[Key2["KEY_S"] = 83] = "KEY_S";
  Key2[Key2["KEY_T"] = 84] = "KEY_T";
  Key2[Key2["KEY_U"] = 85] = "KEY_U";
  Key2[Key2["KEY_V"] = 86] = "KEY_V";
  Key2[Key2["KEY_W"] = 87] = "KEY_W";
  Key2[Key2["KEY_X"] = 88] = "KEY_X";
  Key2[Key2["KEY_Y"] = 89] = "KEY_Y";
  Key2[Key2["KEY_Z"] = 90] = "KEY_Z";
  Key2[Key2["KEY_LWIN"] = 91] = "KEY_LWIN";
  Key2[Key2["KEY_RWIN"] = 92] = "KEY_RWIN";
  Key2[Key2["KEY_APPS"] = 93] = "KEY_APPS";
  Key2[Key2["KEY_SLEEP"] = 95] = "KEY_SLEEP";
  Key2[Key2["KEY_NUMPAD0"] = 96] = "KEY_NUMPAD0";
  Key2[Key2["KEY_NUMPAD1"] = 97] = "KEY_NUMPAD1";
  Key2[Key2["KEY_NUMPAD2"] = 98] = "KEY_NUMPAD2";
  Key2[Key2["KEY_NUMPAD3"] = 99] = "KEY_NUMPAD3";
  Key2[Key2["KEY_NUMPAD4"] = 100] = "KEY_NUMPAD4";
  Key2[Key2["KEY_NUMPAD5"] = 101] = "KEY_NUMPAD5";
  Key2[Key2["KEY_NUMPAD6"] = 102] = "KEY_NUMPAD6";
  Key2[Key2["KEY_NUMPAD7"] = 103] = "KEY_NUMPAD7";
  Key2[Key2["KEY_NUMPAD8"] = 104] = "KEY_NUMPAD8";
  Key2[Key2["KEY_NUMPAD9"] = 105] = "KEY_NUMPAD9";
  Key2[Key2["KEY_MULTIPLY"] = 106] = "KEY_MULTIPLY";
  Key2[Key2["KEY_ADD"] = 107] = "KEY_ADD";
  Key2[Key2["KEY_SEPARATOR"] = 108] = "KEY_SEPARATOR";
  Key2[Key2["KEY_SUBTRACT"] = 109] = "KEY_SUBTRACT";
  Key2[Key2["KEY_DECIMAL"] = 110] = "KEY_DECIMAL";
  Key2[Key2["KEY_DIVIDE"] = 111] = "KEY_DIVIDE";
  Key2[Key2["KEY_F1"] = 112] = "KEY_F1";
  Key2[Key2["KEY_F2"] = 113] = "KEY_F2";
  Key2[Key2["KEY_F3"] = 114] = "KEY_F3";
  Key2[Key2["KEY_F4"] = 115] = "KEY_F4";
  Key2[Key2["KEY_F5"] = 116] = "KEY_F5";
  Key2[Key2["KEY_F6"] = 117] = "KEY_F6";
  Key2[Key2["KEY_F7"] = 118] = "KEY_F7";
  Key2[Key2["KEY_F8"] = 119] = "KEY_F8";
  Key2[Key2["KEY_F9"] = 120] = "KEY_F9";
  Key2[Key2["KEY_F10"] = 121] = "KEY_F10";
  Key2[Key2["KEY_F11"] = 122] = "KEY_F11";
  Key2[Key2["KEY_F12"] = 123] = "KEY_F12";
  Key2[Key2["KEY_F13"] = 124] = "KEY_F13";
  Key2[Key2["KEY_F14"] = 125] = "KEY_F14";
  Key2[Key2["KEY_F15"] = 126] = "KEY_F15";
  Key2[Key2["KEY_F16"] = 127] = "KEY_F16";
  Key2[Key2["KEY_F17"] = 128] = "KEY_F17";
  Key2[Key2["KEY_F18"] = 129] = "KEY_F18";
  Key2[Key2["KEY_F19"] = 130] = "KEY_F19";
  Key2[Key2["KEY_F20"] = 131] = "KEY_F20";
  Key2[Key2["KEY_F21"] = 132] = "KEY_F21";
  Key2[Key2["KEY_F22"] = 133] = "KEY_F22";
  Key2[Key2["KEY_F23"] = 134] = "KEY_F23";
  Key2[Key2["KEY_F24"] = 135] = "KEY_F24";
  Key2[Key2["KEY_NUMLOCK"] = 144] = "KEY_NUMLOCK";
  Key2[Key2["KEY_SCROLL"] = 145] = "KEY_SCROLL";
  Key2[Key2["KEY_OEM_FJ_JISHO"] = 146] = "KEY_OEM_FJ_JISHO";
  Key2[Key2["KEY_OEM_FJ_MASSHOU"] = 147] = "KEY_OEM_FJ_MASSHOU";
  Key2[Key2["KEY_OEM_FJ_TOUROKU"] = 148] = "KEY_OEM_FJ_TOUROKU";
  Key2[Key2["KEY_OEM_FJ_LOYA"] = 149] = "KEY_OEM_FJ_LOYA";
  Key2[Key2["KEY_OEM_FJ_ROYA"] = 150] = "KEY_OEM_FJ_ROYA";
  Key2[Key2["KEY_LSHIFT"] = 160] = "KEY_LSHIFT";
  Key2[Key2["KEY_RSHIFT"] = 161] = "KEY_RSHIFT";
  Key2[Key2["KEY_LCONTROL"] = 162] = "KEY_LCONTROL";
  Key2[Key2["KEY_RCONTROL"] = 163] = "KEY_RCONTROL";
  Key2[Key2["KEY_LMENU"] = 164] = "KEY_LMENU";
  Key2[Key2["KEY_RMENU"] = 165] = "KEY_RMENU";
  Key2[Key2["KEY_BROWSER_BACK"] = 166] = "KEY_BROWSER_BACK";
  Key2[Key2["KEY_BROWSER_FORWARD"] = 167] = "KEY_BROWSER_FORWARD";
  Key2[Key2["KEY_BROWSER_REFRESH"] = 168] = "KEY_BROWSER_REFRESH";
  Key2[Key2["KEY_BROWSER_STOP"] = 169] = "KEY_BROWSER_STOP";
  Key2[Key2["KEY_BROWSER_SEARCH"] = 170] = "KEY_BROWSER_SEARCH";
  Key2[Key2["KEY_BROWSER_FAVORITES"] = 171] = "KEY_BROWSER_FAVORITES";
  Key2[Key2["KEY_BROWSER_HOME"] = 172] = "KEY_BROWSER_HOME";
  Key2[Key2["KEY_VOLUME_MUTE"] = 173] = "KEY_VOLUME_MUTE";
  Key2[Key2["KEY_VOLUME_DOWN"] = 174] = "KEY_VOLUME_DOWN";
  Key2[Key2["KEY_VOLUME_UP"] = 175] = "KEY_VOLUME_UP";
  Key2[Key2["KEY_MEDIA_NEXT_TRACK"] = 176] = "KEY_MEDIA_NEXT_TRACK";
  Key2[Key2["KEY_MEDIA_PREV_TRACK"] = 177] = "KEY_MEDIA_PREV_TRACK";
  Key2[Key2["KEY_MEDIA_STOP"] = 178] = "KEY_MEDIA_STOP";
  Key2[Key2["KEY_MEDIA_PLAY_PAUSE"] = 179] = "KEY_MEDIA_PLAY_PAUSE";
  Key2[Key2["KEY_LAUNCH_MAIL"] = 180] = "KEY_LAUNCH_MAIL";
  Key2[Key2["KEY_LAUNCH_MEDIA_SELECT"] = 181] = "KEY_LAUNCH_MEDIA_SELECT";
  Key2[Key2["KEY_LAUNCH_APP1"] = 182] = "KEY_LAUNCH_APP1";
  Key2[Key2["KEY_LAUNCH_APP2"] = 183] = "KEY_LAUNCH_APP2";
  Key2[Key2["KEY_OEM_PLUS"] = 187] = "KEY_OEM_PLUS";
  Key2[Key2["KEY_OEM_COMMA"] = 188] = "KEY_OEM_COMMA";
  Key2[Key2["KEY_OEM_MINUS"] = 189] = "KEY_OEM_MINUS";
  Key2[Key2["KEY_OEM_PERIOD"] = 190] = "KEY_OEM_PERIOD";
  Key2[Key2["KEY_OEM_8"] = 223] = "KEY_OEM_8";
  Key2[Key2["KEY_OEM_AX"] = 225] = "KEY_OEM_AX";
  Key2[Key2["KEY_OEM_102"] = 226] = "KEY_OEM_102";
  Key2[Key2["KEY_ICO_HELP"] = 227] = "KEY_ICO_HELP";
  Key2[Key2["KEY_ICO_00"] = 228] = "KEY_ICO_00";
  Key2[Key2["KEY_PROCESSKEY"] = 229] = "KEY_PROCESSKEY";
  Key2[Key2["KEY_ICO_CLEAR"] = 230] = "KEY_ICO_CLEAR";
  Key2[Key2["KEY_PACKET"] = 231] = "KEY_PACKET";
  Key2[Key2["KEY_OEM_RESET"] = 233] = "KEY_OEM_RESET";
  Key2[Key2["KEY_OEM_JUMP"] = 234] = "KEY_OEM_JUMP";
  Key2[Key2["KEY_OEM_PA1"] = 235] = "KEY_OEM_PA1";
  Key2[Key2["KEY_OEM_PA2"] = 236] = "KEY_OEM_PA2";
  Key2[Key2["KEY_OEM_PA3"] = 237] = "KEY_OEM_PA3";
  Key2[Key2["KEY_OEM_WSCTRL"] = 238] = "KEY_OEM_WSCTRL";
  Key2[Key2["KEY_OEM_CUSEL"] = 239] = "KEY_OEM_CUSEL";
  Key2[Key2["KEY_OEM_ATTN"] = 240] = "KEY_OEM_ATTN";
  Key2[Key2["KEY_OEM_FINISH"] = 241] = "KEY_OEM_FINISH";
  Key2[Key2["KEY_OEM_COPY"] = 242] = "KEY_OEM_COPY";
  Key2[Key2["KEY_OEM_AUTO"] = 243] = "KEY_OEM_AUTO";
  Key2[Key2["KEY_OEM_ENLW"] = 244] = "KEY_OEM_ENLW";
  Key2[Key2["KEY_OEM_BACKTAB"] = 245] = "KEY_OEM_BACKTAB";
  Key2[Key2["KEY_ATTN"] = 246] = "KEY_ATTN";
  Key2[Key2["KEY_CRSEL"] = 247] = "KEY_CRSEL";
  Key2[Key2["KEY_EXSEL"] = 248] = "KEY_EXSEL";
  Key2[Key2["KEY_EREOF"] = 249] = "KEY_EREOF";
  Key2[Key2["KEY_PLAY"] = 250] = "KEY_PLAY";
  Key2[Key2["KEY_ZOOM"] = 251] = "KEY_ZOOM";
  Key2[Key2["KEY_NONAME"] = 252] = "KEY_NONAME";
  Key2[Key2["KEY_PA1"] = 253] = "KEY_PA1";
  Key2[Key2["KEY_OEM_CLEAR"] = 254] = "KEY_OEM_CLEAR";
  Key2[Key2["KEY_SEMICOLON"] = 186] = "KEY_SEMICOLON";
  Key2[Key2["KEY_SLASH"] = 191] = "KEY_SLASH";
  Key2[Key2["KEY_GRAVE_ACCENT"] = 192] = "KEY_GRAVE_ACCENT";
  Key2[Key2["KEY_LEFT_BRACKET"] = 219] = "KEY_LEFT_BRACKET";
  Key2[Key2["KEY_BACKSLASH"] = 220] = "KEY_BACKSLASH";
  Key2[Key2["KEY_RIGHT_BRACKET"] = 221] = "KEY_RIGHT_BRACKET";
  Key2[Key2["KEY_APOSTROPHE"] = 222] = "KEY_APOSTROPHE";
  Key2[Key2["KEY_OEM_1"] = 186] = "KEY_OEM_1";
  Key2[Key2["KEY_OEM_2"] = 191] = "KEY_OEM_2";
  Key2[Key2["KEY_OEM_3"] = 192] = "KEY_OEM_3";
  Key2[Key2["KEY_OEM_4"] = 219] = "KEY_OEM_4";
  Key2[Key2["KEY_OEM_5"] = 220] = "KEY_OEM_5";
  Key2[Key2["KEY_OEM_6"] = 221] = "KEY_OEM_6";
  Key2[Key2["KEY_OEM_7"] = 222] = "KEY_OEM_7";
  Key2[Key2["KEY_HANJA"] = 25] = "KEY_HANJA";
  Key2[Key2["KEY_OEM_NEC_EQUAL"] = 146] = "KEY_OEM_NEC_EQUAL";
})(Key || (Key = {}));

// ../../gaclib/remote-protocol/lib/src/remoteProtocolInvoking.js
function jsonToRequest(pi, receiver) {
  if (pi.semantic === "Message") {
    switch (pi.name) {
      case "ControllerConnectionEstablished":
        receiver.RequestControllerConnectionEstablished();
        break;
      case "ControllerConnectionStopped":
        receiver.RequestControllerConnectionStopped();
        break;
      case "WindowNotifySetTitle":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetTitle(pi.arguments);
        break;
      case "WindowNotifySetEnabled":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetEnabled(pi.arguments);
        break;
      case "WindowNotifySetTopMost":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetTopMost(pi.arguments);
        break;
      case "WindowNotifySetShowInTaskBar":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetShowInTaskBar(pi.arguments);
        break;
      case "WindowNotifySetCustomFrameMode":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetCustomFrameMode(pi.arguments);
        break;
      case "WindowNotifySetMaximizedBox":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetMaximizedBox(pi.arguments);
        break;
      case "WindowNotifySetMinimizedBox":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetMinimizedBox(pi.arguments);
        break;
      case "WindowNotifySetBorder":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetBorder(pi.arguments);
        break;
      case "WindowNotifySetSizeBox":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetSizeBox(pi.arguments);
        break;
      case "WindowNotifySetIconVisible":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetIconVisible(pi.arguments);
        break;
      case "WindowNotifySetTitleBar":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetTitleBar(pi.arguments);
        break;
      case "WindowNotifySetBounds":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetBounds(pi.arguments);
        break;
      case "WindowNotifySetClientSize":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetClientSize(pi.arguments);
        break;
      case "WindowNotifyActivate":
        receiver.RequestWindowNotifyActivate();
        break;
      case "WindowNotifyShow":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifyShow(pi.arguments);
        break;
      case "WindowNotifyMinSize":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifyMinSize(pi.arguments);
        break;
      case "WindowNotifySetCaret":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestWindowNotifySetCaret(pi.arguments);
        break;
      case "IOUpdateGlobalShortcutKey":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestIOUpdateGlobalShortcutKey(pi.arguments);
        break;
      case "IORequireCapture":
        receiver.RequestIORequireCapture();
        break;
      case "IOReleaseCapture":
        receiver.RequestIOReleaseCapture();
        break;
      case "ImageDestroyed":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestImageDestroyed(pi.arguments);
        break;
      case "DocumentParagraph_OpenCaret":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_OpenCaret(pi.arguments);
        break;
      case "DocumentParagraph_CloseCaret":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_CloseCaret(pi.arguments);
        break;
      case "RendererCreated":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererCreated(pi.arguments);
        break;
      case "RendererDestroyed":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererDestroyed(pi.arguments);
        break;
      case "RendererBeginRendering":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererBeginRendering(pi.arguments);
        break;
      case "RendererBeginBoundary":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererBeginBoundary(pi.arguments);
        break;
      case "RendererRenderElement":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererRenderElement(pi.arguments);
        break;
      case "RendererEndBoundary":
        receiver.RequestRendererEndBoundary();
        break;
      case "RendererIdle":
        receiver.RequestRendererIdle();
        break;
      case "RendererRenderDom":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererRenderDom(pi.arguments);
        break;
      case "RendererRenderDomDiff":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererRenderDomDiff(pi.arguments);
        break;
      default:
        throw new Error("Invalid message name: " + pi.name);
    }
  } else if (pi.semantic === "Request") {
    if (pi.id === void 0) {
      throw new Error("Missing id for request: " + pi.name);
    }
    switch (pi.name) {
      case "ControllerGetFontConfig":
        receiver.RequestControllerGetFontConfig(pi.id);
        break;
      case "ControllerGetScreenConfig":
        receiver.RequestControllerGetScreenConfig(pi.id);
        break;
      case "WindowGetBounds":
        receiver.RequestWindowGetBounds(pi.id);
        break;
      case "IOIsKeyPressing":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestIOIsKeyPressing(pi.id, pi.arguments);
        break;
      case "IOIsKeyToggled":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestIOIsKeyToggled(pi.id, pi.arguments);
        break;
      case "ImageCreated":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestImageCreated(pi.id, pi.arguments);
        break;
      case "RendererUpdateElement_DocumentParagraph":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestRendererUpdateElement_DocumentParagraph(pi.id, pi.arguments);
        break;
      case "DocumentParagraph_GetCaret":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_GetCaret(pi.id, pi.arguments);
        break;
      case "DocumentParagraph_GetCaretBounds":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_GetCaretBounds(pi.id, pi.arguments);
        break;
      case "DocumentParagraph_GetInlineObjectFromPoint":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_GetInlineObjectFromPoint(pi.id, pi.arguments);
        break;
      case "DocumentParagraph_GetNearestCaretFromTextPos":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_GetNearestCaretFromTextPos(pi.id, pi.arguments);
        break;
      case "DocumentParagraph_IsValidCaret":
        if (pi.arguments === void 0) {
          throw new Error("Missing arguments for request: " + pi.name);
        }
        receiver.RequestDocumentParagraph_IsValidCaret(pi.id, pi.arguments);
        break;
      case "RendererEndRendering":
        receiver.RequestRendererEndRendering(pi.id);
        break;
      default:
        throw new Error("Invalid request name: " + pi.name);
    }
  } else {
    throw new Error("Invalid semantic type for request: " + pi.semantic);
  }
}
__name(jsonToRequest, "jsonToRequest");
var ResponseToJson = class {
  static {
    __name(this, "ResponseToJson");
  }
  callback;
  constructor(callback) {
    this.callback = callback;
  }
  RespondControllerGetFontConfig(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "ControllerGetFontConfig",
      arguments: responseArgs
    });
  }
  RespondControllerGetScreenConfig(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "ControllerGetScreenConfig",
      arguments: responseArgs
    });
  }
  RespondWindowGetBounds(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "WindowGetBounds",
      arguments: responseArgs
    });
  }
  RespondIOIsKeyPressing(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "IOIsKeyPressing",
      arguments: responseArgs
    });
  }
  RespondIOIsKeyToggled(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "IOIsKeyToggled",
      arguments: responseArgs
    });
  }
  RespondImageCreated(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "ImageCreated",
      arguments: responseArgs
    });
  }
  RespondRendererUpdateElement_DocumentParagraph(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "RendererUpdateElement_DocumentParagraph",
      arguments: responseArgs
    });
  }
  RespondDocumentParagraph_GetCaret(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "DocumentParagraph_GetCaret",
      arguments: responseArgs
    });
  }
  RespondDocumentParagraph_GetCaretBounds(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "DocumentParagraph_GetCaretBounds",
      arguments: responseArgs
    });
  }
  RespondDocumentParagraph_GetInlineObjectFromPoint(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "DocumentParagraph_GetInlineObjectFromPoint",
      arguments: responseArgs
    });
  }
  RespondDocumentParagraph_GetNearestCaretFromTextPos(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "DocumentParagraph_GetNearestCaretFromTextPos",
      arguments: responseArgs
    });
  }
  RespondDocumentParagraph_IsValidCaret(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "DocumentParagraph_IsValidCaret",
      arguments: responseArgs
    });
  }
  RespondRendererEndRendering(id, responseArgs) {
    this.callback({
      semantic: "Response",
      id,
      name: "RendererEndRendering",
      arguments: responseArgs
    });
  }
};
var EventToJson = class {
  static {
    __name(this, "EventToJson");
  }
  callback;
  constructor(callback) {
    this.callback = callback;
  }
  OnControllerConnect(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "ControllerConnect",
      arguments: eventArgs
    });
  }
  OnControllerDisconnect() {
    this.callback({
      semantic: "Event",
      name: "ControllerDisconnect"
    });
  }
  OnControllerRequestExit() {
    this.callback({
      semantic: "Event",
      name: "ControllerRequestExit"
    });
  }
  OnControllerForceExit() {
    this.callback({
      semantic: "Event",
      name: "ControllerForceExit"
    });
  }
  OnControllerScreenUpdated(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "ControllerScreenUpdated",
      arguments: eventArgs
    });
  }
  OnWindowBoundsUpdated(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "WindowBoundsUpdated",
      arguments: eventArgs
    });
  }
  OnWindowActivatedUpdated(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "WindowActivatedUpdated",
      arguments: eventArgs
    });
  }
  OnIOGlobalShortcutKey(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOGlobalShortcutKey",
      arguments: eventArgs
    });
  }
  OnIOButtonDown(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOButtonDown",
      arguments: eventArgs
    });
  }
  OnIOButtonDoubleClick(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOButtonDoubleClick",
      arguments: eventArgs
    });
  }
  OnIOButtonUp(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOButtonUp",
      arguments: eventArgs
    });
  }
  OnIOHWheel(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOHWheel",
      arguments: eventArgs
    });
  }
  OnIOVWheel(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOVWheel",
      arguments: eventArgs
    });
  }
  OnIOMouseMoving(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOMouseMoving",
      arguments: eventArgs
    });
  }
  OnIOMouseEntered() {
    this.callback({
      semantic: "Event",
      name: "IOMouseEntered"
    });
  }
  OnIOMouseLeaved() {
    this.callback({
      semantic: "Event",
      name: "IOMouseLeaved"
    });
  }
  OnIOKeyDown(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOKeyDown",
      arguments: eventArgs
    });
  }
  OnIOKeyUp(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOKeyUp",
      arguments: eventArgs
    });
  }
  OnIOChar(eventArgs) {
    this.callback({
      semantic: "Event",
      name: "IOChar",
      arguments: eventArgs
    });
  }
};

// ../../gaclib/remote-protocol/lib/src/remoteProtocolDefinition.js
var CharacterEncoding;
(function(CharacterEncoding2) {
  CharacterEncoding2["UTF8"] = "UTF8";
  CharacterEncoding2["UTF16"] = "UTF16";
  CharacterEncoding2["UTF32"] = "UTF32";
})(CharacterEncoding || (CharacterEncoding = {}));
var WindowHitTestResult;
(function(WindowHitTestResult2) {
  WindowHitTestResult2["BorderNoSizing"] = "BorderNoSizing";
  WindowHitTestResult2["BorderLeft"] = "BorderLeft";
  WindowHitTestResult2["BorderRight"] = "BorderRight";
  WindowHitTestResult2["BorderTop"] = "BorderTop";
  WindowHitTestResult2["BorderBottom"] = "BorderBottom";
  WindowHitTestResult2["BorderLeftTop"] = "BorderLeftTop";
  WindowHitTestResult2["BorderRightTop"] = "BorderRightTop";
  WindowHitTestResult2["BorderLeftBottom"] = "BorderLeftBottom";
  WindowHitTestResult2["BorderRightBottom"] = "BorderRightBottom";
  WindowHitTestResult2["Title"] = "Title";
  WindowHitTestResult2["ButtonMinimum"] = "ButtonMinimum";
  WindowHitTestResult2["ButtonMaximum"] = "ButtonMaximum";
  WindowHitTestResult2["ButtonClose"] = "ButtonClose";
  WindowHitTestResult2["Client"] = "Client";
  WindowHitTestResult2["Icon"] = "Icon";
  WindowHitTestResult2["NoDecision"] = "NoDecision";
})(WindowHitTestResult || (WindowHitTestResult = {}));
var WindowSystemCursorType;
(function(WindowSystemCursorType2) {
  WindowSystemCursorType2["SmallWaiting"] = "SmallWaiting";
  WindowSystemCursorType2["LargeWaiting"] = "LargeWaiting";
  WindowSystemCursorType2["Arrow"] = "Arrow";
  WindowSystemCursorType2["Cross"] = "Cross";
  WindowSystemCursorType2["Hand"] = "Hand";
  WindowSystemCursorType2["Help"] = "Help";
  WindowSystemCursorType2["IBeam"] = "IBeam";
  WindowSystemCursorType2["SizeAll"] = "SizeAll";
  WindowSystemCursorType2["SizeNESW"] = "SizeNESW";
  WindowSystemCursorType2["SizeNS"] = "SizeNS";
  WindowSystemCursorType2["SizeNWSE"] = "SizeNWSE";
  WindowSystemCursorType2["SizeWE"] = "SizeWE";
})(WindowSystemCursorType || (WindowSystemCursorType = {}));
var WindowSizeState;
(function(WindowSizeState2) {
  WindowSizeState2["Minimized"] = "Minimized";
  WindowSizeState2["Restored"] = "Restored";
  WindowSizeState2["Maximized"] = "Maximized";
})(WindowSizeState || (WindowSizeState = {}));
var IOMouseButton;
(function(IOMouseButton2) {
  IOMouseButton2["Left"] = "Left";
  IOMouseButton2["Middle"] = "Middle";
  IOMouseButton2["Right"] = "Right";
  IOMouseButton2["Mouse4"] = "Mouse4";
  IOMouseButton2["Mouse5"] = "Mouse5";
})(IOMouseButton || (IOMouseButton = {}));
var ElementShapeType;
(function(ElementShapeType2) {
  ElementShapeType2["Rectangle"] = "Rectangle";
  ElementShapeType2["Ellipse"] = "Ellipse";
  ElementShapeType2["RoundRect"] = "RoundRect";
})(ElementShapeType || (ElementShapeType = {}));
var ElementGradientrDirection;
(function(ElementGradientrDirection2) {
  ElementGradientrDirection2["Horizontal"] = "Horizontal";
  ElementGradientrDirection2["Vertical"] = "Vertical";
  ElementGradientrDirection2["Slash"] = "Slash";
  ElementGradientrDirection2["Backslash"] = "Backslash";
})(ElementGradientrDirection || (ElementGradientrDirection = {}));
var ElementSplitterDirection;
(function(ElementSplitterDirection2) {
  ElementSplitterDirection2["Horizontal"] = "Horizontal";
  ElementSplitterDirection2["Vertical"] = "Vertical";
})(ElementSplitterDirection || (ElementSplitterDirection = {}));
var ElementHorizontalAlignment;
(function(ElementHorizontalAlignment2) {
  ElementHorizontalAlignment2["Left"] = "Left";
  ElementHorizontalAlignment2["Right"] = "Right";
  ElementHorizontalAlignment2["Center"] = "Center";
})(ElementHorizontalAlignment || (ElementHorizontalAlignment = {}));
var ElementVerticalAlignment;
(function(ElementVerticalAlignment2) {
  ElementVerticalAlignment2["Top"] = "Top";
  ElementVerticalAlignment2["Bottom"] = "Bottom";
  ElementVerticalAlignment2["Center"] = "Center";
})(ElementVerticalAlignment || (ElementVerticalAlignment = {}));
var ElementSolidLabelMeasuringRequest;
(function(ElementSolidLabelMeasuringRequest2) {
  ElementSolidLabelMeasuringRequest2["FontHeight"] = "FontHeight";
  ElementSolidLabelMeasuringRequest2["TotalSize"] = "TotalSize";
})(ElementSolidLabelMeasuringRequest || (ElementSolidLabelMeasuringRequest = {}));
var ImageFormatType;
(function(ImageFormatType2) {
  ImageFormatType2["Bmp"] = "Bmp";
  ImageFormatType2["Gif"] = "Gif";
  ImageFormatType2["Icon"] = "Icon";
  ImageFormatType2["Jpeg"] = "Jpeg";
  ImageFormatType2["Png"] = "Png";
  ImageFormatType2["Tiff"] = "Tiff";
  ImageFormatType2["Wmp"] = "Wmp";
  ImageFormatType2["Unknown"] = "Unknown";
})(ImageFormatType || (ImageFormatType = {}));
var BreakCondition;
(function(BreakCondition2) {
  BreakCondition2["StickToPreviousRun"] = "StickToPreviousRun";
  BreakCondition2["StickToNextRun"] = "StickToNextRun";
  BreakCondition2["Alone"] = "Alone";
})(BreakCondition || (BreakCondition = {}));
var CaretRelativePosition;
(function(CaretRelativePosition2) {
  CaretRelativePosition2["CaretFirst"] = "CaretFirst";
  CaretRelativePosition2["CaretLast"] = "CaretLast";
  CaretRelativePosition2["CaretLineFirst"] = "CaretLineFirst";
  CaretRelativePosition2["CaretLineLast"] = "CaretLineLast";
  CaretRelativePosition2["CaretMoveLeft"] = "CaretMoveLeft";
  CaretRelativePosition2["CaretMoveRight"] = "CaretMoveRight";
  CaretRelativePosition2["CaretMoveUp"] = "CaretMoveUp";
  CaretRelativePosition2["CaretMoveDown"] = "CaretMoveDown";
})(CaretRelativePosition || (CaretRelativePosition = {}));
var RendererType;
(function(RendererType2) {
  RendererType2["FocusRectangle"] = "FocusRectangle";
  RendererType2["Raw"] = "Raw";
  RendererType2["SolidBorder"] = "SolidBorder";
  RendererType2["SinkBorder"] = "SinkBorder";
  RendererType2["SinkSplitter"] = "SinkSplitter";
  RendererType2["SolidBackground"] = "SolidBackground";
  RendererType2["GradientBackground"] = "GradientBackground";
  RendererType2["InnerShadow"] = "InnerShadow";
  RendererType2["SolidLabel"] = "SolidLabel";
  RendererType2["Polygon"] = "Polygon";
  RendererType2["ImageFrame"] = "ImageFrame";
  RendererType2["DocumentParagraph"] = "DocumentParagraph";
})(RendererType || (RendererType = {}));
var RenderingDom_DiffType;
(function(RenderingDom_DiffType2) {
  RenderingDom_DiffType2["Deleted"] = "Deleted";
  RenderingDom_DiffType2["Created"] = "Created";
  RenderingDom_DiffType2["Modified"] = "Modified";
})(RenderingDom_DiffType || (RenderingDom_DiffType = {}));

// ../remote-protocol-http/lib/src/rendererClient.js
var GACUI_REMOTE_PROTOCOL_CORE_CLIENT_ID = 1;
var GACUI_REMOTE_PROTOCOL_CHANNEL_NAME = "GacUIRemoteProtocol";
var RemoteProtocolHttpDisconnectError = class extends Error {
  static {
    __name(this, "RemoteProtocolHttpDisconnectError");
  }
  constructor() {
    super("HTTP remote protocol disconnected.");
  }
};
var RemoteProtocolClient = class {
  static {
    __name(this, "RemoteProtocolClient");
  }
  requests;
  channelClient;
  responses;
  events;
  unsubscribe;
  constructor(requests, channelClient) {
    this.requests = requests;
    this.channelClient = channelClient;
    const callback = /* @__PURE__ */ __name((invoking) => {
      void this.channelClient.sendToClient(GACUI_REMOTE_PROTOCOL_CORE_CLIENT_ID, GACUI_REMOTE_PROTOCOL_CHANNEL_NAME, JSON.stringify([invoking])).catch(() => void 0);
    }, "callback");
    this.responses = new ResponseToJson(callback);
    this.events = new EventToJson(callback);
    this.unsubscribe = this.channelClient.onMessage((message) => {
      if (message.channelName !== GACUI_REMOTE_PROTOCOL_CHANNEL_NAME) {
        return;
      }
      const requests2 = JSON.parse(message.messageBody);
      for (const request of requests2) {
        jsonToRequest(request, this.requests);
      }
    });
  }
  async start() {
    if (this.channelClient.clientId === void 0) {
      throw new Error("Renderer channel is not connected.");
    }
    const platform = navigator.platform;
    const osSuperKeyName = platform.startsWith("Mac") ? "Command" : platform.startsWith("Win") ? "Win" : "Super";
    this.events.OnControllerConnect({ documentCaretFromEncoding: CharacterEncoding.UTF16, osSuperKeyName });
    await this.channelClient.start();
  }
  stop() {
    this.unsubscribe();
    this.channelClient.stop();
  }
};
var RemoteProtocolHttpClient = class extends RemoteProtocolClient {
  static {
    __name(this, "RemoteProtocolHttpClient");
  }
  async start() {
    try {
      await super.start();
    } catch (error) {
      if (error instanceof HttpChannelConnectionError) {
        if (error.serverError)
          throw new Error(error.message);
        throw new RemoteProtocolHttpDisconnectError();
      }
      throw error;
    }
  }
};
function createRemoteProtocolClient(requests, channelClient) {
  return new RemoteProtocolClient(requests, channelClient);
}
__name(createRemoteProtocolClient, "createRemoteProtocolClient");
function createRemoteProtocolHttpClient(requests, channelClient) {
  return new RemoteProtocolHttpClient(requests, channelClient);
}
__name(createRemoteProtocolHttpClient, "createRemoteProtocolHttpClient");
async function connectHttpServer(host, requests, basePath = DEFAULT_HTTP_CHANNEL_BASE_PATH) {
  const channelClient = await connectHttpChannel({
    origin: host,
    basePath,
    channelNames: [GACUI_REMOTE_PROTOCOL_CHANNEL_NAME]
  });
  return createRemoteProtocolHttpClient(requests, channelClient);
}
__name(connectHttpServer, "connectHttpServer");
export {
  CHANNEL_ERROR_NAME,
  DEFAULT_HTTP_CHANNEL_BASE_PATH,
  DEFAULT_HTTP_CHANNEL_ORIGIN,
  GACUI_REMOTE_PROTOCOL_CHANNEL_NAME,
  HttpChannelClient,
  HttpChannelConnectionError,
  RemoteProtocolHttpDisconnectError,
  connectHttpChannel,
  connectHttpServer,
  createRemoteProtocolClient,
  createRemoteProtocolHttpClient,
  parseNetworkPackage,
  serializeNetworkPackage,
  validateChannelName,
  validatePositiveClientId
};
//# sourceMappingURL=http.js.map
