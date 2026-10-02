var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../gaclib/workflow-rpc/lib/src/errors.js
var RpcProtocolError = class extends Error {
  static {
    __name(this, "RpcProtocolError");
  }
};

// ../../gaclib/workflow-rpc/lib/src/types.js
var RpcTypeId_Null = -100;
var NULL_RPC_REFERENCE = Object.freeze({
  clientId: -1,
  objectId: -1,
  typeId: RpcTypeId_Null
});

// ../../gaclib/workflow-rpc/lib/src/validation.js
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
__name(isRecord, "isRecord");
function expectRecord(value, description) {
  if (!isRecord(value)) {
    throw new RpcProtocolError(`${description} must be a JSON object.`);
  }
  return value;
}
__name(expectRecord, "expectRecord");
function expectArray(value, description) {
  if (!Array.isArray(value)) {
    throw new RpcProtocolError(`${description} must be a JSON array.`);
  }
  return value;
}
__name(expectArray, "expectArray");
function expectString(value, description) {
  if (typeof value !== "string") {
    throw new RpcProtocolError(`${description} must be a string.`);
  }
  return value;
}
__name(expectString, "expectString");
function expectBoolean(value, description) {
  if (typeof value !== "boolean") {
    throw new RpcProtocolError(`${description} must be a boolean.`);
  }
  return value;
}
__name(expectBoolean, "expectBoolean");
function expectSafeInteger(value, description) {
  if (typeof value !== "number" || !Number.isSafeInteger(value)) {
    throw new RpcProtocolError(`${description} must be a safe integer.`);
  }
  return value;
}
__name(expectSafeInteger, "expectSafeInteger");
function assertExactKeys(value, keys, description) {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  if (actual.length !== expected.length || actual.some((key, index) => key !== expected[index])) {
    throw new RpcProtocolError(`${description} has unexpected fields.`);
  }
}
__name(assertExactKeys, "assertExactKeys");
function readReference(value, description = "RPC object reference") {
  const object = expectRecord(value, description);
  assertExactKeys(object, ["clientId", "objectId", "typeId"], description);
  return {
    clientId: expectSafeInteger(object.clientId, `${description}.clientId`),
    objectId: expectSafeInteger(object.objectId, `${description}.objectId`),
    typeId: expectSafeInteger(object.typeId, `${description}.typeId`)
  };
}
__name(readReference, "readReference");

// ../../gaclib/workflow-rpc/lib/src/codecs.js
function createRpcCodec(name, functions) {
  return {
    name,
    encode: /* @__PURE__ */ __name((endpoint, value) => functions.encode(value, endpoint), "encode"),
    decode: /* @__PURE__ */ __name((endpoint, value) => functions.decode(value, endpoint), "decode"),
    encodeUnknown: /* @__PURE__ */ __name((endpoint, value) => (functions.encodeUnknown ?? functions.encode)(value, endpoint), "encodeUnknown"),
    decodeUnknown: /* @__PURE__ */ __name((endpoint, value) => (functions.decodeUnknown ?? functions.decode)(value, endpoint), "decodeUnknown"),
    copy: /* @__PURE__ */ __name((endpoint, value, active) => functions.copy === void 0 ? value : functions.copy(value, endpoint, active), "copy")
  };
}
__name(createRpcCodec, "createRpcCodec");
var rpcVoidCodec = createRpcCodec("Void", {
  encode: /* @__PURE__ */ __name(() => null, "encode"),
  decode: /* @__PURE__ */ __name((value) => {
    if (value !== null) {
      throw new RpcProtocolError("Void must be encoded as null.");
    }
  }, "decode")
});
var rpcBooleanCodec = createRpcCodec("Boolean", {
  encode: /* @__PURE__ */ __name((value) => value, "encode"),
  decode: /* @__PURE__ */ __name((value) => expectBoolean(value, "Boolean"), "decode")
});
var rpcStringCodec = createRpcCodec("String", {
  encode: /* @__PURE__ */ __name((value) => value, "encode"),
  decode: /* @__PURE__ */ __name((value) => expectString(value, "String"), "decode")
});
var rpcCharCodec = createRpcCodec("Char", {
  encode: /* @__PURE__ */ __name((value) => {
    if (value.length !== 1) {
      throw new RpcProtocolError("Char must contain one UTF-16 code unit.");
    }
    return value;
  }, "encode"),
  decode: /* @__PURE__ */ __name((value) => {
    const result = expectString(value, "Char");
    if (result.length !== 1) {
      throw new RpcProtocolError("Char must contain one UTF-16 code unit.");
    }
    return result;
  }, "decode"),
  encodeUnknown: /* @__PURE__ */ __name((value) => ["Char", value], "encodeUnknown"),
  decodeUnknown: /* @__PURE__ */ __name((value) => {
    const pair = expectArray(value, "Unknown Char");
    if (pair.length !== 2 || pair[0] !== "Char") {
      throw new RpcProtocolError('Unknown Char must be ["Char", value].');
    }
    const result = expectString(pair[1], "Unknown Char value");
    if (result.length !== 1) {
      throw new RpcProtocolError("Unknown Char must contain one UTF-16 code unit.");
    }
    return result;
  }, "decodeUnknown")
});
var integerRanges = {
  UInt8: [0, 255],
  UInt16: [0, 65535],
  UInt32: [0, 4294967295],
  UInt64: [0, Number.MAX_SAFE_INTEGER],
  Int8: [-128, 127],
  Int16: [-32768, 32767],
  Int32: [-2147483648, 2147483647],
  Int64: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
};
function validateNumber(value, kind) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new RpcProtocolError(`${kind} must be a finite number.`);
  }
  const range = integerRanges[kind];
  if (range !== void 0) {
    if (!Number.isSafeInteger(value) || value < range[0] || value > range[1]) {
      throw new RpcProtocolError(`${kind} is outside its safe range.`);
    }
  }
  if (kind === "Single" && Math.abs(value) > 34028234663852886e22) {
    throw new RpcProtocolError("Single is outside its finite range.");
  }
  return value;
}
__name(validateNumber, "validateNumber");
function createNumberCodec(kind) {
  return createRpcCodec(kind, {
    encode: /* @__PURE__ */ __name((value) => validateNumber(value, kind), "encode"),
    decode: /* @__PURE__ */ __name((value) => validateNumber(value, kind), "decode"),
    encodeUnknown: /* @__PURE__ */ __name((value) => [kind, validateNumber(value, kind)], "encodeUnknown"),
    decodeUnknown: /* @__PURE__ */ __name((value) => {
      const pair = expectArray(value, `Unknown ${kind}`);
      if (pair.length !== 2 || pair[0] !== kind) {
        throw new RpcProtocolError(`Unknown ${kind} has an invalid tag.`);
      }
      return validateNumber(pair[1], kind);
    }, "decodeUnknown")
  });
}
__name(createNumberCodec, "createNumberCodec");
var rpcUInt8Codec = createNumberCodec("UInt8");
var rpcUInt16Codec = createNumberCodec("UInt16");
var rpcUInt32Codec = createNumberCodec("UInt32");
var rpcUInt64Codec = createNumberCodec("UInt64");
var rpcInt8Codec = createNumberCodec("Int8");
var rpcInt16Codec = createNumberCodec("Int16");
var rpcInt32Codec = createNumberCodec("Int32");
var rpcInt64Codec = createNumberCodec("Int64");
var rpcSingleCodec = createNumberCodec("Single");
var rpcDoubleCodec = createNumberCodec("Double");
function createTaggedStringCodec(kind) {
  return createRpcCodec(kind, {
    encode: /* @__PURE__ */ __name((value) => expectString(value, kind), "encode"),
    decode: /* @__PURE__ */ __name((value) => expectString(value, kind), "decode"),
    encodeUnknown: /* @__PURE__ */ __name((value) => [kind, expectString(value, kind)], "encodeUnknown"),
    decodeUnknown: /* @__PURE__ */ __name((value) => {
      const pair = expectArray(value, `Unknown ${kind}`);
      if (pair.length !== 2 || pair[0] !== kind) {
        throw new RpcProtocolError(`Unknown ${kind} has an invalid tag.`);
      }
      return expectString(pair[1], kind);
    }, "decodeUnknown")
  });
}
__name(createTaggedStringCodec, "createTaggedStringCodec");
var rpcDateTimeCodec = createTaggedStringCodec("DateTime");
var rpcLocaleCodec = createTaggedStringCodec("Locale");
function taggedReference(ref) {
  return {
    "$": "system::RpcObjectReference",
    ...ref
  };
}
__name(taggedReference, "taggedReference");
function readTaggedReference(value) {
  const object = expectRecord(value, "Tagged RPC object reference");
  assertExactKeys(object, ["$", "clientId", "objectId", "typeId"], "Tagged RPC object reference");
  if (object.$ !== "system::RpcObjectReference") {
    throw new RpcProtocolError("Tagged RPC object reference has an invalid tag.");
  }
  return readReference({
    clientId: object.clientId,
    objectId: object.objectId,
    typeId: object.typeId
  });
}
__name(readTaggedReference, "readTaggedReference");
function createInterfaceCodec(typeId, factory) {
  return createRpcCodec(`interface:${String(typeId)}`, {
    encode: /* @__PURE__ */ __name((value, endpoint) => value === null ? { ...NULL_RPC_REFERENCE } : endpoint.objectToReference(value, typeId), "encode"),
    decode: /* @__PURE__ */ __name((value, endpoint) => endpoint.referenceToObject(readReference(value), factory), "decode"),
    encodeUnknown: /* @__PURE__ */ __name((value, endpoint) => value === null ? null : taggedReference(endpoint.objectToReference(value, typeId)), "encodeUnknown"),
    decodeUnknown: /* @__PURE__ */ __name((value, endpoint) => value === null ? null : endpoint.referenceToObject(readTaggedReference(value), factory), "decodeUnknown")
  });
}
__name(createInterfaceCodec, "createInterfaceCodec");

// ../../gaclib/workflow-rpc/lib/src/proxy.js
var RpcProxy = class {
  static {
    __name(this, "RpcProxy");
  }
  endpoint;
  reference;
  propertyCache = /* @__PURE__ */ new Map();
  localStateFinalized = false;
  constructor(context) {
    this.endpoint = context.endpoint;
    this.reference = context.reference;
  }
  get disposed() {
    return this.endpoint.isProxyDisposed(this);
  }
  dispose() {
    this.finalizeLocalState();
    return this.endpoint.disposeProxy(this);
  }
  finalizeLocalState() {
    if (this.localStateFinalized)
      return;
    this.localStateFinalized = true;
    this.onFinalize();
  }
  onFinalize() {
    this.clearPropertyCache();
  }
  invoke(methodId, arguments_) {
    return this.endpoint.invokeProxy(this, methodId, arguments_);
  }
  raiseEvent(eventId, arguments_) {
    return this.endpoint.raiseProxyEvent(this, eventId, arguments_);
  }
  getCachedProperty(key, loader) {
    const existing = this.propertyCache.get(key);
    if (existing !== void 0) {
      return existing;
    }
    const loading = loader().catch((error) => {
      this.propertyCache.delete(key);
      throw error;
    });
    this.propertyCache.set(key, loading);
    return loading;
  }
  invalidateProperty(key) {
    this.propertyCache.delete(key);
  }
  clearPropertyCache() {
    this.propertyCache.clear();
  }
};

// ../../gaclib/workflow-rpc/lib/src/collections.js
var predefinedLocalBrand = Symbol("RpcPredefinedLocalObject");
var predefinedProxyBrand = Symbol("RpcPredefinedProxy");
var PredefinedProxy = class extends RpcProxy {
  static {
    __name(this, "PredefinedProxy");
  }
  [predefinedProxyBrand] = true;
  methods = /* @__PURE__ */ new Map();
  method(methodId) {
    const descriptor = this.methods.get(methodId);
    if (descriptor === void 0) {
      throw new RpcProtocolError(`Unknown predefined RPC method id: ${String(methodId)}`);
    }
    return descriptor;
  }
  invokeEvent(eventId, arguments_) {
    return Promise.reject(new RpcProtocolError(`This predefined proxy does not support event ${String(eventId)} with ${String(arguments_.length)} arguments.`));
  }
};
var LocalPredefinedObject = class {
  static {
    __name(this, "LocalPredefinedObject");
  }
  [predefinedLocalBrand] = true;
  disposed = false;
  dispose() {
    return Promise.resolve();
  }
};

// ../rvm/lib/src/generated/generated.js
var IViewModelLocalToken = Symbol("rvmt::IViewModel");
var IViewModelTypeId = 0;
var IViewModel_Translate_1Id = 1;
var IViewModelProxyImpl = class extends RpcProxy {
  static {
    __name(this, "IViewModelProxyImpl");
  }
  Translate(name) {
    return this.invoke(IViewModel_Translate_1Id, [name]);
  }
};
var IViewModelProxyFactory = {
  key: "rvmt::IViewModel",
  create: /* @__PURE__ */ __name((context) => new IViewModelProxyImpl(context), "create")
};
var IViewModelCodec = createInterfaceCodec(IViewModelTypeId, IViewModelProxyFactory);
var IViewModelDescriptor = {
  typeId: IViewModelTypeId,
  idString: "rvmt::IViewModel",
  name: "rvmt::IViewModel",
  constructorService: true,
  baseTypeIds: [],
  methods: [
    {
      id: IViewModel_Translate_1Id,
      idString: "rvmt::IViewModel.Translate",
      name: "Translate",
      implementationKey: "Translate",
      parameters: [
        { codec: rpcStringCodec, transfer: "value" }
      ],
      result: { codec: rpcStringCodec, transfer: "value" }
    }
  ],
  events: [],
  properties: [],
  proxyFactory: IViewModelProxyFactory,
  localToken: IViewModelLocalToken
};
var AllRpcInterfaceDescriptors = [
  IViewModelDescriptor
];
function configureRpcEndpoint(endpoint) {
  for (const descriptor of AllRpcInterfaceDescriptors)
    endpoint.registerInterface(descriptor);
}
__name(configureRpcEndpoint, "configureRpcEndpoint");
function registerIViewModelService(endpoint, implementation) {
  return endpoint.registerService(IViewModelDescriptor, implementation);
}
__name(registerIViewModelService, "registerIViewModelService");
function requestIViewModelService(endpoint) {
  return endpoint.requestService(IViewModelTypeId);
}
__name(requestIViewModelService, "requestIViewModelService");
export {
  AllRpcInterfaceDescriptors,
  IViewModelCodec,
  IViewModelDescriptor,
  IViewModelLocalToken,
  IViewModelProxyFactory,
  IViewModelTypeId,
  IViewModel_Translate_1Id,
  configureRpcEndpoint,
  registerIViewModelService,
  requestIViewModelService
};
//# sourceMappingURL=rvm.js.map
