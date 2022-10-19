(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/vue/dist/vue.js
  var require_vue = __commonJS({
    "node_modules/vue/dist/vue.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Vue = factory());
      })(exports, function() {
        "use strict";
        var emptyObject = Object.freeze({});
        var isArray3 = Array.isArray;
        function isUndef(v) {
          return v === void 0 || v === null;
        }
        function isDef(v) {
          return v !== void 0 && v !== null;
        }
        function isTrue(v) {
          return v === true;
        }
        function isFalse(v) {
          return v === false;
        }
        function isPrimitive(value) {
          return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
        }
        function isFunction2(value) {
          return typeof value === "function";
        }
        function isObject3(obj) {
          return obj !== null && typeof obj === "object";
        }
        var _toString = Object.prototype.toString;
        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }
        function isPlainObject2(obj) {
          return _toString.call(obj) === "[object Object]";
        }
        function isRegExp2(v) {
          return _toString.call(v) === "[object RegExp]";
        }
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
          return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        function toString4(val) {
          return val == null ? "" : Array.isArray(val) || isPlainObject2(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        function makeMap(str2, expectsLowerCase) {
          var map = /* @__PURE__ */ Object.create(null);
          var list = str2.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function(val) {
            return map[val.toLowerCase()];
          } : function(val) {
            return map[val];
          };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove$2(arr, item) {
          var len2 = arr.length;
          if (len2) {
            if (item === arr[len2 - 1]) {
              arr.length = len2 - 1;
              return;
            }
            var index2 = arr.indexOf(item);
            if (index2 > -1) {
              return arr.splice(index2, 1);
            }
          }
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        function hasOwn2(obj, key) {
          return hasOwnProperty2.call(obj, key);
        }
        function cached(fn) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function cachedFn(str2) {
            var hit = cache[str2];
            return hit || (cache[str2] = fn(str2));
          };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str2) {
          return str2.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var capitalize = cached(function(str2) {
          return str2.charAt(0).toUpperCase() + str2.slice(1);
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str2) {
          return str2.replace(hyphenateRE, "-$1").toLowerCase();
        });
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          }
          boundFn._length = fn.length;
          return boundFn;
        }
        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }
        var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
        function toArray2(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        }
        function extend2(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }
        function toObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend2(res, arr[i]);
            }
          }
          return res;
        }
        function noop2(a, b, c) {
        }
        var no = function(a, b, c) {
          return false;
        };
        var identity = function(_) {
          return _;
        };
        function genStaticKeys$1(modules2) {
          return modules2.reduce(function(keys, m) {
            return keys.concat(m.staticKeys || []);
          }, []).join(",");
        }
        function looseEqual(a, b) {
          if (a === b)
            return true;
          var isObjectA = isObject3(a);
          var isObjectB = isObject3(b);
          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function(e, i) {
                  return looseEqual(e, b[i]);
                });
              } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function(key) {
                  return looseEqual(a[key], b[key]);
                });
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
          } else {
            return false;
          }
        }
        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val))
              return i;
          }
          return -1;
        }
        function once(fn) {
          var called = false;
          return function() {
            if (!called) {
              called = true;
              fn.apply(this, arguments);
            }
          };
        }
        function hasChanged(x, y) {
          if (x === y) {
            return x === 0 && 1 / x !== 1 / y;
          } else {
            return x === x || y === y;
          }
        }
        var SSR_ATTR = "data-server-rendered";
        var ASSET_TYPES = ["component", "directive", "filter"];
        var LIFECYCLE_HOOKS = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch",
          "renderTracked",
          "renderTriggered"
        ];
        var config = {
          optionMergeStrategies: /* @__PURE__ */ Object.create(null),
          silent: false,
          productionTip: true,
          devtools: true,
          performance: false,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: /* @__PURE__ */ Object.create(null),
          isReservedTag: no,
          isReservedAttr: no,
          isUnknownElement: no,
          getTagNamespace: noop2,
          parsePlatformTagName: identity,
          mustUseProp: no,
          async: true,
          _lifecycleHooks: LIFECYCLE_HOOKS
        };
        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function isReserved(str2) {
          var c = (str2 + "").charCodeAt(0);
          return c === 36 || c === 95;
        }
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        }
        var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
        function parsePath(path) {
          if (bailRE.test(path)) {
            return;
          }
          var segments = path.split(".");
          return function(obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj)
                return;
              obj = obj[segments[i]];
            }
            return obj;
          };
        }
        var hasProto = "__proto__" in {};
        var inBrowser = typeof window !== "undefined";
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        UA && UA.indexOf("android") > 0;
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
        UA && /chrome\/\d+/.test(UA) && !isEdge;
        UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        var nativeWatch = {}.watch;
        var supportsPassive = false;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function() {
                supportsPassive = true;
              }
            });
            window.addEventListener("test-passive", null, opts);
          } catch (e) {
          }
        }
        var _isServer;
        var isServerRendering = function() {
          if (_isServer === void 0) {
            if (!inBrowser && typeof global !== "undefined") {
              _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
          return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
          _Set = Set;
        } else {
          _Set = function() {
            function Set2() {
              this.set = /* @__PURE__ */ Object.create(null);
            }
            Set2.prototype.has = function(key) {
              return this.set[key] === true;
            };
            Set2.prototype.add = function(key) {
              this.set[key] = true;
            };
            Set2.prototype.clear = function() {
              this.set = /* @__PURE__ */ Object.create(null);
            };
            return Set2;
          }();
        }
        var currentInstance = null;
        function getCurrentInstance() {
          return currentInstance && { proxy: currentInstance };
        }
        function setCurrentInstance(vm) {
          if (vm === void 0) {
            vm = null;
          }
          if (!vm)
            currentInstance && currentInstance._scope.off();
          currentInstance = vm;
          vm && vm._scope.on();
        }
        var VNode = function() {
          function VNode2(tag, data, children, text2, elm, context, componentOptions, asyncFactory) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text2;
            this.elm = elm;
            this.ns = void 0;
            this.context = context;
            this.fnContext = void 0;
            this.fnOptions = void 0;
            this.fnScopeId = void 0;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = void 0;
            this.parent = void 0;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = asyncFactory;
            this.asyncMeta = void 0;
            this.isAsyncPlaceholder = false;
          }
          Object.defineProperty(VNode2.prototype, "child", {
            get: function() {
              return this.componentInstance;
            },
            enumerable: false,
            configurable: true
          });
          return VNode2;
        }();
        var createEmptyVNode = function(text2) {
          if (text2 === void 0) {
            text2 = "";
          }
          var node = new VNode();
          node.text = text2;
          node.isComment = true;
          return node;
        };
        function createTextVNode(val) {
          return new VNode(void 0, void 0, void 0, String(val));
        }
        function cloneVNode(vnode) {
          var cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children && vnode.children.slice(),
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
          );
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;
          cloned.isComment = vnode.isComment;
          cloned.fnContext = vnode.fnContext;
          cloned.fnOptions = vnode.fnOptions;
          cloned.fnScopeId = vnode.fnScopeId;
          cloned.asyncMeta = vnode.asyncMeta;
          cloned.isCloned = true;
          return cloned;
        }
        var initProxy;
        {
          var allowedGlobals_1 = makeMap(
            "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"
          );
          var warnNonPresent_1 = function(target2, key) {
            warn$2('Property or method "'.concat(key, '" is not defined on the instance but ') + "referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", target2);
          };
          var warnReservedPrefix_1 = function(target2, key) {
            warn$2('Property "'.concat(key, '" must be accessed with "$data.').concat(key, '" because ') + 'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data', target2);
          };
          var hasProxy_1 = typeof Proxy !== "undefined" && isNative(Proxy);
          if (hasProxy_1) {
            var isBuiltInModifier_1 = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
            config.keyCodes = new Proxy(config.keyCodes, {
              set: function(target2, key, value) {
                if (isBuiltInModifier_1(key)) {
                  warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                  return false;
                } else {
                  target2[key] = value;
                  return true;
                }
              }
            });
          }
          var hasHandler_1 = {
            has: function(target2, key) {
              var has2 = key in target2;
              var isAllowed = allowedGlobals_1(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target2.$data);
              if (!has2 && !isAllowed) {
                if (key in target2.$data)
                  warnReservedPrefix_1(target2, key);
                else
                  warnNonPresent_1(target2, key);
              }
              return has2 || !isAllowed;
            }
          };
          var getHandler_1 = {
            get: function(target2, key) {
              if (typeof key === "string" && !(key in target2)) {
                if (key in target2.$data)
                  warnReservedPrefix_1(target2, key);
                else
                  warnNonPresent_1(target2, key);
              }
              return target2[key];
            }
          };
          initProxy = function initProxy2(vm) {
            if (hasProxy_1) {
              var options = vm.$options;
              var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
              vm._renderProxy = new Proxy(vm, handlers);
            } else {
              vm._renderProxy = vm;
            }
          };
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var uid$2 = 0;
        var pendingCleanupDeps = [];
        var cleanupDeps = function() {
          for (var i = 0; i < pendingCleanupDeps.length; i++) {
            var dep = pendingCleanupDeps[i];
            dep.subs = dep.subs.filter(function(s) {
              return s;
            });
            dep._pending = false;
          }
          pendingCleanupDeps.length = 0;
        };
        var Dep = function() {
          function Dep2() {
            this._pending = false;
            this.id = uid$2++;
            this.subs = [];
          }
          Dep2.prototype.addSub = function(sub) {
            this.subs.push(sub);
          };
          Dep2.prototype.removeSub = function(sub) {
            this.subs[this.subs.indexOf(sub)] = null;
            if (!this._pending) {
              this._pending = true;
              pendingCleanupDeps.push(this);
            }
          };
          Dep2.prototype.depend = function(info) {
            if (Dep2.target) {
              Dep2.target.addDep(this);
              if (info && Dep2.target.onTrack) {
                Dep2.target.onTrack(__assign({ effect: Dep2.target }, info));
              }
            }
          };
          Dep2.prototype.notify = function(info) {
            var subs = this.subs.filter(function(s) {
              return s;
            });
            if (!config.async) {
              subs.sort(function(a, b) {
                return a.id - b.id;
              });
            }
            for (var i = 0, l = subs.length; i < l; i++) {
              var sub = subs[i];
              if (info) {
                sub.onTrigger && sub.onTrigger(__assign({ effect: subs[i] }, info));
              }
              sub.update();
            }
          };
          return Dep2;
        }();
        Dep.target = null;
        var targetStack = [];
        function pushTarget(target2) {
          targetStack.push(target2);
          Dep.target = target2;
        }
        function popTarget() {
          targetStack.pop();
          Dep.target = targetStack[targetStack.length - 1];
        }
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse"
        ];
        methodsToPatch.forEach(function(method) {
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted)
              ob.observeArray(inserted);
            {
              ob.dep.notify({
                type: "array mutation",
                target: this,
                key: method
              });
            }
            return result;
          });
        });
        var rawMap = /* @__PURE__ */ new WeakMap();
        function reactive(target2) {
          makeReactive(target2, false);
          return target2;
        }
        function shallowReactive(target2) {
          makeReactive(target2, true);
          def(target2, "__v_isShallow", true);
          return target2;
        }
        function makeReactive(target2, shallow) {
          if (!isReadonly(target2)) {
            {
              if (isArray3(target2)) {
                warn$2("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
              }
              var existingOb = target2 && target2.__ob__;
              if (existingOb && existingOb.shallow !== shallow) {
                warn$2("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
              }
            }
            var ob = observe(target2, shallow, isServerRendering());
            if (!ob) {
              if (target2 == null || isPrimitive(target2)) {
                warn$2("value cannot be made reactive: ".concat(String(target2)));
              }
              if (isCollectionType(target2)) {
                warn$2("Vue 2 does not support reactive collection types such as Map or Set.");
              }
            }
          }
        }
        function isReactive(value) {
          if (isReadonly(value)) {
            return isReactive(value["__v_raw"]);
          }
          return !!(value && value.__ob__);
        }
        function isShallow(value) {
          return !!(value && value.__v_isShallow);
        }
        function isReadonly(value) {
          return !!(value && value.__v_isReadonly);
        }
        function isProxy(value) {
          return isReactive(value) || isReadonly(value);
        }
        function toRaw(observed) {
          var raw = observed && observed["__v_raw"];
          return raw ? toRaw(raw) : observed;
        }
        function markRaw(value) {
          if (isObject3(value)) {
            rawMap.set(value, true);
          }
          return value;
        }
        function isCollectionType(value) {
          var type = toRawType(value);
          return type === "Map" || type === "WeakMap" || type === "Set" || type === "WeakSet";
        }
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var NO_INIITIAL_VALUE = {};
        var shouldObserve = true;
        function toggleObserving(value) {
          shouldObserve = value;
        }
        var mockDep = {
          notify: noop2,
          depend: noop2,
          addSub: noop2,
          removeSub: noop2
        };
        var Observer = function() {
          function Observer2(value, shallow, mock) {
            if (shallow === void 0) {
              shallow = false;
            }
            if (mock === void 0) {
              mock = false;
            }
            this.value = value;
            this.shallow = shallow;
            this.mock = mock;
            this.dep = mock ? mockDep : new Dep();
            this.vmCount = 0;
            def(value, "__ob__", this);
            if (isArray3(value)) {
              if (!mock) {
                if (hasProto) {
                  value.__proto__ = arrayMethods;
                } else {
                  for (var i = 0, l = arrayKeys.length; i < l; i++) {
                    var key = arrayKeys[i];
                    def(value, key, arrayMethods[key]);
                  }
                }
              }
              if (!shallow) {
                this.observeArray(value);
              }
            } else {
              var keys = Object.keys(value);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                defineReactive(value, key, NO_INIITIAL_VALUE, void 0, shallow, mock);
              }
            }
          }
          Observer2.prototype.observeArray = function(value) {
            for (var i = 0, l = value.length; i < l; i++) {
              observe(value[i], false, this.mock);
            }
          };
          return Observer2;
        }();
        function observe(value, shallow, ssrMockReactivity) {
          if (value && hasOwn2(value, "__ob__") && value.__ob__ instanceof Observer) {
            return value.__ob__;
          }
          if (shouldObserve && (ssrMockReactivity || !isServerRendering()) && (isArray3(value) || isPlainObject2(value)) && Object.isExtensible(value) && !value.__v_skip && !rawMap.has(value) && !isRef(value) && !(value instanceof VNode)) {
            return new Observer(value, shallow, ssrMockReactivity);
          }
        }
        function defineReactive(obj, key, val, customSetter, shallow, mock) {
          var dep = new Dep();
          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }
          var getter = property && property.get;
          var setter = property && property.set;
          if ((!getter || setter) && (val === NO_INIITIAL_VALUE || arguments.length === 2)) {
            val = obj[key];
          }
          var childOb = !shallow && observe(val, false, mock);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                {
                  dep.depend({
                    target: obj,
                    type: "get",
                    key
                  });
                }
                if (childOb) {
                  childOb.dep.depend();
                  if (isArray3(value)) {
                    dependArray(value);
                  }
                }
              }
              return isRef(value) && !shallow ? value.value : value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (!hasChanged(value, newVal)) {
                return;
              }
              if (customSetter) {
                customSetter();
              }
              if (setter) {
                setter.call(obj, newVal);
              } else if (getter) {
                return;
              } else if (!shallow && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
                return;
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal, false, mock);
              {
                dep.notify({
                  type: "set",
                  target: obj,
                  key,
                  newValue: newVal,
                  oldValue: value
                });
              }
            }
          });
          return dep;
        }
        function set(target2, key, val) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target2));
          }
          if (isReadonly(target2)) {
            warn$2('Set operation on key "'.concat(key, '" failed: target is readonly.'));
            return;
          }
          var ob = target2.__ob__;
          if (isArray3(target2) && isValidArrayIndex(key)) {
            target2.length = Math.max(target2.length, key);
            target2.splice(key, 1, val);
            if (ob && !ob.shallow && ob.mock) {
              observe(val, false, true);
            }
            return val;
          }
          if (key in target2 && !(key in Object.prototype)) {
            target2[key] = val;
            return val;
          }
          if (target2._isVue || ob && ob.vmCount) {
            warn$2("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
            return val;
          }
          if (!ob) {
            target2[key] = val;
            return val;
          }
          defineReactive(ob.value, key, val, void 0, ob.shallow, ob.mock);
          {
            ob.dep.notify({
              type: "add",
              target: target2,
              key,
              newValue: val,
              oldValue: void 0
            });
          }
          return val;
        }
        function del(target2, key) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn$2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target2));
          }
          if (isArray3(target2) && isValidArrayIndex(key)) {
            target2.splice(key, 1);
            return;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn$2("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
            return;
          }
          if (isReadonly(target2)) {
            warn$2('Delete operation on key "'.concat(key, '" failed: target is readonly.'));
            return;
          }
          if (!hasOwn2(target2, key)) {
            return;
          }
          delete target2[key];
          if (!ob) {
            return;
          }
          {
            ob.dep.notify({
              type: "delete",
              target: target2,
              key
            });
          }
        }
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            if (e && e.__ob__) {
              e.__ob__.dep.depend();
            }
            if (isArray3(e)) {
              dependArray(e);
            }
          }
        }
        var RefFlag = "__v_isRef";
        function isRef(r) {
          return !!(r && r.__v_isRef === true);
        }
        function ref$1(value) {
          return createRef(value, false);
        }
        function shallowRef(value) {
          return createRef(value, true);
        }
        function createRef(rawValue, shallow) {
          if (isRef(rawValue)) {
            return rawValue;
          }
          var ref2 = {};
          def(ref2, RefFlag, true);
          def(ref2, "__v_isShallow", shallow);
          def(ref2, "dep", defineReactive(ref2, "value", rawValue, null, shallow, isServerRendering()));
          return ref2;
        }
        function triggerRef(ref2) {
          if (!ref2.dep) {
            warn$2("received object is not a triggerable ref.");
          }
          {
            ref2.dep && ref2.dep.notify({
              type: "set",
              target: ref2,
              key: "value"
            });
          }
        }
        function unref(ref2) {
          return isRef(ref2) ? ref2.value : ref2;
        }
        function proxyRefs(objectWithRefs) {
          if (isReactive(objectWithRefs)) {
            return objectWithRefs;
          }
          var proxy2 = {};
          var keys = Object.keys(objectWithRefs);
          for (var i = 0; i < keys.length; i++) {
            proxyWithRefUnwrap(proxy2, objectWithRefs, keys[i]);
          }
          return proxy2;
        }
        function proxyWithRefUnwrap(target2, source, key) {
          Object.defineProperty(target2, key, {
            enumerable: true,
            configurable: true,
            get: function() {
              var val = source[key];
              if (isRef(val)) {
                return val.value;
              } else {
                var ob = val && val.__ob__;
                if (ob)
                  ob.dep.depend();
                return val;
              }
            },
            set: function(value) {
              var oldValue = source[key];
              if (isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
              } else {
                source[key] = value;
              }
            }
          });
        }
        function customRef(factory) {
          var dep = new Dep();
          var _a2 = factory(function() {
            {
              dep.depend({
                target: ref2,
                type: "get",
                key: "value"
              });
            }
          }, function() {
            {
              dep.notify({
                target: ref2,
                type: "set",
                key: "value"
              });
            }
          }), get2 = _a2.get, set2 = _a2.set;
          var ref2 = {
            get value() {
              return get2();
            },
            set value(newVal) {
              set2(newVal);
            }
          };
          def(ref2, RefFlag, true);
          return ref2;
        }
        function toRefs(object) {
          if (!isReactive(object)) {
            warn$2("toRefs() expects a reactive object but received a plain one.");
          }
          var ret = isArray3(object) ? new Array(object.length) : {};
          for (var key in object) {
            ret[key] = toRef(object, key);
          }
          return ret;
        }
        function toRef(object, key, defaultValue) {
          var val = object[key];
          if (isRef(val)) {
            return val;
          }
          var ref2 = {
            get value() {
              var val2 = object[key];
              return val2 === void 0 ? defaultValue : val2;
            },
            set value(newVal) {
              object[key] = newVal;
            }
          };
          def(ref2, RefFlag, true);
          return ref2;
        }
        var rawToReadonlyMap = /* @__PURE__ */ new WeakMap();
        var rawToShallowReadonlyMap = /* @__PURE__ */ new WeakMap();
        function readonly(target2) {
          return createReadonly(target2, false);
        }
        function createReadonly(target2, shallow) {
          if (!isPlainObject2(target2)) {
            {
              if (isArray3(target2)) {
                warn$2("Vue 2 does not support readonly arrays.");
              } else if (isCollectionType(target2)) {
                warn$2("Vue 2 does not support readonly collection types such as Map or Set.");
              } else {
                warn$2("value cannot be made readonly: ".concat(typeof target2));
              }
            }
            return target2;
          }
          if (isReadonly(target2)) {
            return target2;
          }
          var map = shallow ? rawToShallowReadonlyMap : rawToReadonlyMap;
          var existingProxy = map.get(target2);
          if (existingProxy) {
            return existingProxy;
          }
          var proxy2 = Object.create(Object.getPrototypeOf(target2));
          map.set(target2, proxy2);
          def(proxy2, "__v_isReadonly", true);
          def(proxy2, "__v_raw", target2);
          if (isRef(target2)) {
            def(proxy2, RefFlag, true);
          }
          if (shallow || isShallow(target2)) {
            def(proxy2, "__v_isShallow", true);
          }
          var keys = Object.keys(target2);
          for (var i = 0; i < keys.length; i++) {
            defineReadonlyProperty(proxy2, target2, keys[i], shallow);
          }
          return proxy2;
        }
        function defineReadonlyProperty(proxy2, target2, key, shallow) {
          Object.defineProperty(proxy2, key, {
            enumerable: true,
            configurable: true,
            get: function() {
              var val = target2[key];
              return shallow || !isPlainObject2(val) ? val : readonly(val);
            },
            set: function() {
              warn$2('Set operation on key "'.concat(key, '" failed: target is readonly.'));
            }
          });
        }
        function shallowReadonly(target2) {
          return createReadonly(target2, true);
        }
        function computed(getterOrOptions, debugOptions) {
          var getter;
          var setter;
          var onlyGetter = isFunction2(getterOrOptions);
          if (onlyGetter) {
            getter = getterOrOptions;
            setter = function() {
              warn$2("Write operation failed: computed value is readonly");
            };
          } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
          }
          var watcher = isServerRendering() ? null : new Watcher(currentInstance, getter, noop2, { lazy: true });
          if (watcher && debugOptions) {
            watcher.onTrack = debugOptions.onTrack;
            watcher.onTrigger = debugOptions.onTrigger;
          }
          var ref2 = {
            effect: watcher,
            get value() {
              if (watcher) {
                if (watcher.dirty) {
                  watcher.evaluate();
                }
                if (Dep.target) {
                  if (Dep.target.onTrack) {
                    Dep.target.onTrack({
                      effect: Dep.target,
                      target: ref2,
                      type: "get",
                      key: "value"
                    });
                  }
                  watcher.depend();
                }
                return watcher.value;
              } else {
                return getter();
              }
            },
            set value(newVal) {
              setter(newVal);
            }
          };
          def(ref2, RefFlag, true);
          def(ref2, "__v_isReadonly", onlyGetter);
          return ref2;
        }
        var mark;
        var measure;
        {
          var perf_1 = inBrowser && window.performance;
          if (perf_1 && perf_1.mark && perf_1.measure && perf_1.clearMarks && perf_1.clearMeasures) {
            mark = function(tag) {
              return perf_1.mark(tag);
            };
            measure = function(name, startTag, endTag2) {
              perf_1.measure(name, startTag, endTag2);
              perf_1.clearMarks(startTag);
              perf_1.clearMarks(endTag2);
            };
          }
        }
        var normalizeEvent = cached(function(name) {
          var passive = name.charAt(0) === "&";
          name = passive ? name.slice(1) : name;
          var once2 = name.charAt(0) === "~";
          name = once2 ? name.slice(1) : name;
          var capture = name.charAt(0) === "!";
          name = capture ? name.slice(1) : name;
          return {
            name,
            once: once2,
            capture,
            passive
          };
        });
        function createFnInvoker(fns, vm) {
          function invoker() {
            var fns2 = invoker.fns;
            if (isArray3(fns2)) {
              var cloned = fns2.slice();
              for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
              }
            } else {
              return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
            }
          }
          invoker.fns = fns;
          return invoker;
        }
        function updateListeners(on2, oldOn, add2, remove2, createOnceHandler2, vm) {
          var name, cur, old, event;
          for (name in on2) {
            cur = on2[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            if (isUndef(cur)) {
              warn$2('Invalid handler for event "'.concat(event.name, '": got ') + String(cur), vm);
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on2[name] = createFnInvoker(cur, vm);
              }
              if (isTrue(event.once)) {
                cur = on2[name] = createOnceHandler2(event.name, cur, event.capture);
              }
              add2(event.name, cur, event.capture, event.passive, event.params);
            } else if (cur !== old) {
              old.fns = cur;
              on2[name] = old;
            }
          }
          for (name in oldOn) {
            if (isUndef(on2[name])) {
              event = normalizeEvent(name);
              remove2(event.name, oldOn[name], event.capture);
            }
          }
        }
        function mergeVNodeHook(def2, hookKey, hook) {
          if (def2 instanceof VNode) {
            def2 = def2.data.hook || (def2.data.hook = {});
          }
          var invoker;
          var oldHook = def2[hookKey];
          function wrappedHook() {
            hook.apply(this, arguments);
            remove$2(invoker.fns, wrappedHook);
          }
          if (isUndef(oldHook)) {
            invoker = createFnInvoker([wrappedHook]);
          } else {
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
            } else {
              invoker = createFnInvoker([oldHook, wrappedHook]);
            }
          }
          invoker.merged = true;
          def2[hookKey] = invoker;
        }
        function extractPropsFromVNodeData(data, Ctor, tag) {
          var propOptions = Ctor.options.props;
          if (isUndef(propOptions)) {
            return;
          }
          var res = {};
          var attrs2 = data.attrs, props2 = data.props;
          if (isDef(attrs2) || isDef(props2)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key);
              {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs2 && hasOwn2(attrs2, keyInLowerCase)) {
                  tip('Prop "'.concat(keyInLowerCase, '" is passed to component ') + "".concat(formatComponentName(
                    tag || Ctor
                  ), ", but the declared prop name is") + ' "'.concat(key, '". ') + "Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "'.concat(altKey, '" instead of "').concat(key, '".'));
                }
              }
              checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
            }
          }
          return res;
        }
        function checkProp(res, hash2, key, altKey, preserve) {
          if (isDef(hash2)) {
            if (hasOwn2(hash2, key)) {
              res[key] = hash2[key];
              if (!preserve) {
                delete hash2[key];
              }
              return true;
            } else if (hasOwn2(hash2, altKey)) {
              res[key] = hash2[altKey];
              if (!preserve) {
                delete hash2[altKey];
              }
              return true;
            }
          }
          return false;
        }
        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (isArray3(children[i])) {
              return Array.prototype.concat.apply([], children);
            }
          }
          return children;
        }
        function normalizeChildren(children) {
          return isPrimitive(children) ? [createTextVNode(children)] : isArray3(children) ? normalizeArrayChildren(children) : void 0;
        }
        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
          var res = [];
          var i, c, lastIndex, last;
          for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === "boolean")
              continue;
            lastIndex = res.length - 1;
            last = res[lastIndex];
            if (isArray3(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, "".concat(nestedIndex || "", "_").concat(i));
                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text);
                  c.shift();
                }
                res.push.apply(res, c);
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c);
              } else if (c !== "") {
                res.push(createTextVNode(c));
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c.text);
              } else {
                if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                  c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                }
                res.push(c);
              }
            }
          }
          return res;
        }
        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
          if (isArray3(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = void 0;
          }
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
          }
          return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
          if (isDef(data) && isDef(data.__ob__)) {
            warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + "Always create fresh vnode data objects in each render!", context);
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.is)) {
            tag = data.is;
          }
          if (!tag) {
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
            warn$2("Avoid using non-primitive value as key, use string/number value instead.", context);
          }
          if (isArray3(children) && isFunction2(children[0])) {
            data = data || {};
            data.scopedSlots = { default: children[0] };
            children.length = 0;
          }
          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
          }
          var vnode, ns;
          if (typeof tag === "string") {
            var Ctor = void 0;
            ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
              if (isDef(data) && isDef(data.nativeOn) && data.tag !== "component") {
                warn$2("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
              }
              vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
              vnode = createComponent(Ctor, data, context, children, tag);
            } else {
              vnode = new VNode(tag, data, children, void 0, void 0, context);
            }
          } else {
            vnode = createComponent(tag, data, context, children);
          }
          if (isArray3(vnode)) {
            return vnode;
          } else if (isDef(vnode)) {
            if (isDef(ns))
              applyNS(vnode, ns);
            if (isDef(data))
              registerDeepBindings(data);
            return vnode;
          } else {
            return createEmptyVNode();
          }
        }
        function applyNS(vnode, ns, force) {
          vnode.ns = ns;
          if (vnode.tag === "foreignObject") {
            ns = void 0;
            force = true;
          }
          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                applyNS(child, ns, force);
              }
            }
          }
        }
        function registerDeepBindings(data) {
          if (isObject3(data.style)) {
            traverse(data.style);
          }
          if (isObject3(data.class)) {
            traverse(data.class);
          }
        }
        function renderList(val, render) {
          var ret = null, i, l, keys, key;
          if (isArray3(val) || typeof val === "string") {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === "number") {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject3(val)) {
            if (hasSymbol && val[Symbol.iterator]) {
              ret = [];
              var iterator = val[Symbol.iterator]();
              var result = iterator.next();
              while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
              }
            } else {
              keys = Object.keys(val);
              ret = new Array(keys.length);
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
              }
            }
          }
          if (!isDef(ret)) {
            ret = [];
          }
          ret._isVList = true;
          return ret;
        }
        function renderSlot(name, fallbackRender, props2, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name];
          var nodes;
          if (scopedSlotFn) {
            props2 = props2 || {};
            if (bindObject) {
              if (!isObject3(bindObject)) {
                warn$2("slot v-bind without argument expects an Object", this);
              }
              props2 = extend2(extend2({}, bindObject), props2);
            }
            nodes = scopedSlotFn(props2) || (isFunction2(fallbackRender) ? fallbackRender() : fallbackRender);
          } else {
            nodes = this.$slots[name] || (isFunction2(fallbackRender) ? fallbackRender() : fallbackRender);
          }
          var target2 = props2 && props2.slot;
          if (target2) {
            return this.$createElement("template", { slot: target2 }, nodes);
          } else {
            return nodes;
          }
        }
        function resolveFilter(id) {
          return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        function isKeyNotMatch(expect, actual) {
          if (isArray3(expect)) {
            return expect.indexOf(actual) === -1;
          } else {
            return expect !== actual;
          }
        }
        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
          }
          return eventKeyCode === void 0;
        }
        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject3(value)) {
              warn$2("v-bind without argument expects an Object or Array value", this);
            } else {
              if (isArray3(value)) {
                value = toObject(value);
              }
              var hash2 = void 0;
              var _loop_1 = function(key2) {
                if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
                  hash2 = data;
                } else {
                  var type = data.attrs && data.attrs.type;
                  hash2 = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key2);
                var hyphenatedKey = hyphenate(key2);
                if (!(camelizedKey in hash2) && !(hyphenatedKey in hash2)) {
                  hash2[key2] = value[key2];
                  if (isSync) {
                    var on2 = data.on || (data.on = {});
                    on2["update:".concat(key2)] = function($event) {
                      value[key2] = $event;
                    };
                  }
                }
              };
              for (var key in value) {
                _loop_1(key);
              }
            }
          }
          return data;
        }
        function renderStatic(index2, isInFor) {
          var cached2 = this._staticTrees || (this._staticTrees = []);
          var tree = cached2[index2];
          if (tree && !isInFor) {
            return tree;
          }
          tree = cached2[index2] = this.$options.staticRenderFns[index2].call(
            this._renderProxy,
            this._c,
            this
          );
          markStatic$1(tree, "__static__".concat(index2), false);
          return tree;
        }
        function markOnce(tree, index2, key) {
          markStatic$1(tree, "__once__".concat(index2).concat(key ? "_".concat(key) : ""), true);
          return tree;
        }
        function markStatic$1(tree, key, isOnce) {
          if (isArray3(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== "string") {
                markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }
        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }
        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject2(value)) {
              warn$2("v-on without argument expects an Object value", this);
            } else {
              var on2 = data.on = data.on ? extend2({}, data.on) : {};
              for (var key in value) {
                var existing = on2[key];
                var ours = value[key];
                on2[key] = existing ? [].concat(existing, ours) : ours;
              }
            }
          }
          return data;
        }
        function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
          res = res || { $stable: !hasDynamicKeys };
          for (var i = 0; i < fns.length; i++) {
            var slot = fns[i];
            if (isArray3(slot)) {
              resolveScopedSlots(slot, res, hasDynamicKeys);
            } else if (slot) {
              if (slot.proxy) {
                slot.fn.proxy = true;
              }
              res[slot.key] = slot.fn;
            }
          }
          if (contentHashKey) {
            res.$key = contentHashKey;
          }
          return res;
        }
        function bindDynamicKeys(baseObj, values) {
          for (var i = 0; i < values.length; i += 2) {
            var key = values[i];
            if (typeof key === "string" && key) {
              baseObj[values[i]] = values[i + 1];
            } else if (key !== "" && key !== null) {
              warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
            }
          }
          return baseObj;
        }
        function prependModifier(value, symbol) {
          return typeof value === "string" ? symbol + value : value;
        }
        function installRenderHelpers(target2) {
          target2._o = markOnce;
          target2._n = toNumber;
          target2._s = toString4;
          target2._l = renderList;
          target2._t = renderSlot;
          target2._q = looseEqual;
          target2._i = looseIndexOf;
          target2._m = renderStatic;
          target2._f = resolveFilter;
          target2._k = checkKeyCodes;
          target2._b = bindObjectProps;
          target2._v = createTextVNode;
          target2._e = createEmptyVNode;
          target2._u = resolveScopedSlots;
          target2._g = bindObjectListeners;
          target2._d = bindDynamicKeys;
          target2._p = prependModifier;
        }
        function resolveSlots(children, context) {
          if (!children || !children.length) {
            return {};
          }
          var slots = {};
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            var data = child.data;
            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
            }
            if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
              var name_1 = data.slot;
              var slot = slots[name_1] || (slots[name_1] = []);
              if (child.tag === "template") {
                slot.push.apply(slot, child.children || []);
              } else {
                slot.push(child);
              }
            } else {
              (slots.default || (slots.default = [])).push(child);
            }
          }
          for (var name_2 in slots) {
            if (slots[name_2].every(isWhitespace)) {
              delete slots[name_2];
            }
          }
          return slots;
        }
        function isWhitespace(node) {
          return node.isComment && !node.asyncFactory || node.text === " ";
        }
        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory;
        }
        function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
          var res;
          var hasNormalSlots = Object.keys(normalSlots).length > 0;
          var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
          var key = scopedSlots && scopedSlots.$key;
          if (!scopedSlots) {
            res = {};
          } else if (scopedSlots._normalized) {
            return scopedSlots._normalized;
          } else if (isStable && prevScopedSlots && prevScopedSlots !== emptyObject && key === prevScopedSlots.$key && !hasNormalSlots && !prevScopedSlots.$hasNormal) {
            return prevScopedSlots;
          } else {
            res = {};
            for (var key_1 in scopedSlots) {
              if (scopedSlots[key_1] && key_1[0] !== "$") {
                res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
              }
            }
          }
          for (var key_2 in normalSlots) {
            if (!(key_2 in res)) {
              res[key_2] = proxyNormalSlot(normalSlots, key_2);
            }
          }
          if (scopedSlots && Object.isExtensible(scopedSlots)) {
            scopedSlots._normalized = res;
          }
          def(res, "$stable", isStable);
          def(res, "$key", key);
          def(res, "$hasNormal", hasNormalSlots);
          return res;
        }
        function normalizeScopedSlot(vm, normalSlots, key, fn) {
          var normalized = function() {
            var cur = currentInstance;
            setCurrentInstance(vm);
            var res = arguments.length ? fn.apply(null, arguments) : fn({});
            res = res && typeof res === "object" && !isArray3(res) ? [res] : normalizeChildren(res);
            var vnode = res && res[0];
            setCurrentInstance(cur);
            return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
          };
          if (fn.proxy) {
            Object.defineProperty(normalSlots, key, {
              get: normalized,
              enumerable: true,
              configurable: true
            });
          }
          return normalized;
        }
        function proxyNormalSlot(slots, key) {
          return function() {
            return slots[key];
          };
        }
        function initSetup(vm) {
          var options = vm.$options;
          var setup = options.setup;
          if (setup) {
            var ctx = vm._setupContext = createSetupContext(vm);
            setCurrentInstance(vm);
            pushTarget();
            var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
            popTarget();
            setCurrentInstance();
            if (isFunction2(setupResult)) {
              options.render = setupResult;
            } else if (isObject3(setupResult)) {
              if (setupResult instanceof VNode) {
                warn$2("setup() should not return VNodes directly - return a render function instead.");
              }
              vm._setupState = setupResult;
              if (!setupResult.__sfc) {
                for (var key in setupResult) {
                  if (!isReserved(key)) {
                    proxyWithRefUnwrap(vm, setupResult, key);
                  } else {
                    warn$2("Avoid using variables that start with _ or $ in setup().");
                  }
                }
              } else {
                var proxy2 = vm._setupProxy = {};
                for (var key in setupResult) {
                  if (key !== "__sfc") {
                    proxyWithRefUnwrap(proxy2, setupResult, key);
                  }
                }
              }
            } else if (setupResult !== void 0) {
              warn$2("setup() should return an object. Received: ".concat(setupResult === null ? "null" : typeof setupResult));
            }
          }
        }
        function createSetupContext(vm) {
          var exposeCalled = false;
          return {
            get attrs() {
              if (!vm._attrsProxy) {
                var proxy2 = vm._attrsProxy = {};
                def(proxy2, "_v_attr_proxy", true);
                syncSetupProxy(proxy2, vm.$attrs, emptyObject, vm, "$attrs");
              }
              return vm._attrsProxy;
            },
            get listeners() {
              if (!vm._listenersProxy) {
                var proxy2 = vm._listenersProxy = {};
                syncSetupProxy(proxy2, vm.$listeners, emptyObject, vm, "$listeners");
              }
              return vm._listenersProxy;
            },
            get slots() {
              return initSlotsProxy(vm);
            },
            emit: bind$1(vm.$emit, vm),
            expose: function(exposed) {
              {
                if (exposeCalled) {
                  warn$2("expose() should be called only once per setup().", vm);
                }
                exposeCalled = true;
              }
              if (exposed) {
                Object.keys(exposed).forEach(function(key) {
                  return proxyWithRefUnwrap(vm, exposed, key);
                });
              }
            }
          };
        }
        function syncSetupProxy(to, from, prev, instance, type) {
          var changed = false;
          for (var key in from) {
            if (!(key in to)) {
              changed = true;
              defineProxyAttr(to, key, instance, type);
            } else if (from[key] !== prev[key]) {
              changed = true;
            }
          }
          for (var key in to) {
            if (!(key in from)) {
              changed = true;
              delete to[key];
            }
          }
          return changed;
        }
        function defineProxyAttr(proxy2, key, instance, type) {
          Object.defineProperty(proxy2, key, {
            enumerable: true,
            configurable: true,
            get: function() {
              return instance[type][key];
            }
          });
        }
        function initSlotsProxy(vm) {
          if (!vm._slotsProxy) {
            syncSetupSlots(vm._slotsProxy = {}, vm.$scopedSlots);
          }
          return vm._slotsProxy;
        }
        function syncSetupSlots(to, from) {
          for (var key in from) {
            to[key] = from[key];
          }
          for (var key in to) {
            if (!(key in from)) {
              delete to[key];
            }
          }
        }
        function useSlots() {
          return getContext().slots;
        }
        function useAttrs() {
          return getContext().attrs;
        }
        function useListeners() {
          return getContext().listeners;
        }
        function getContext() {
          if (!currentInstance) {
            warn$2("useContext() called without active instance.");
          }
          var vm = currentInstance;
          return vm._setupContext || (vm._setupContext = createSetupContext(vm));
        }
        function mergeDefaults(raw, defaults2) {
          var props2 = isArray3(raw) ? raw.reduce(function(normalized, p) {
            return normalized[p] = {}, normalized;
          }, {}) : raw;
          for (var key in defaults2) {
            var opt = props2[key];
            if (opt) {
              if (isArray3(opt) || isFunction2(opt)) {
                props2[key] = { type: opt, default: defaults2[key] };
              } else {
                opt.default = defaults2[key];
              }
            } else if (opt === null) {
              props2[key] = { default: defaults2[key] };
            } else {
              warn$2('props default key "'.concat(key, '" has no corresponding declaration.'));
            }
          }
          return props2;
        }
        function initRender(vm) {
          vm._vnode = null;
          vm._staticTrees = null;
          var options = vm.$options;
          var parentVnode = vm.$vnode = options._parentVnode;
          var renderContext = parentVnode && parentVnode.context;
          vm.$slots = resolveSlots(options._renderChildren, renderContext);
          vm.$scopedSlots = parentVnode ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots) : emptyObject;
          vm._c = function(a, b, c, d) {
            return createElement$1(vm, a, b, c, d, false);
          };
          vm.$createElement = function(a, b, c, d) {
            return createElement$1(vm, a, b, c, d, true);
          };
          var parentData = parentVnode && parentVnode.data;
          {
            defineReactive(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
              !isUpdatingChildComponent && warn$2("$attrs is readonly.", vm);
            }, true);
            defineReactive(vm, "$listeners", options._parentListeners || emptyObject, function() {
              !isUpdatingChildComponent && warn$2("$listeners is readonly.", vm);
            }, true);
          }
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue3) {
          installRenderHelpers(Vue3.prototype);
          Vue3.prototype.$nextTick = function(fn) {
            return nextTick(fn, this);
          };
          Vue3.prototype._render = function() {
            var vm = this;
            var _a2 = vm.$options, render = _a2.render, _parentVnode = _a2._parentVnode;
            if (_parentVnode && vm._isMounted) {
              vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
              if (vm._slotsProxy) {
                syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
              }
            }
            vm.$vnode = _parentVnode;
            var vnode;
            try {
              setCurrentInstance(vm);
              currentRenderingInstance = vm;
              vnode = render.call(vm._renderProxy, vm.$createElement);
            } catch (e) {
              handleError(e, vm, "render");
              if (vm.$options.renderError) {
                try {
                  vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                } catch (e2) {
                  handleError(e2, vm, "renderError");
                  vnode = vm._vnode;
                }
              } else {
                vnode = vm._vnode;
              }
            } finally {
              currentRenderingInstance = null;
              setCurrentInstance();
            }
            if (isArray3(vnode) && vnode.length === 1) {
              vnode = vnode[0];
            }
            if (!(vnode instanceof VNode)) {
              if (isArray3(vnode)) {
                warn$2("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
              }
              vnode = createEmptyVNode();
            }
            vnode.parent = _parentVnode;
            return vnode;
          };
        }
        function ensureCtor(comp, base) {
          if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
            comp = comp.default;
          }
          return isObject3(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode();
          node.asyncFactory = factory;
          node.asyncMeta = { data, context, children, tag };
          return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
          }
          if (isDef(factory.resolved)) {
            return factory.resolved;
          }
          var owner = currentRenderingInstance;
          if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
            factory.owners.push(owner);
          }
          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
          }
          if (owner && !isDef(factory.owners)) {
            var owners_1 = factory.owners = [owner];
            var sync_1 = true;
            var timerLoading_1 = null;
            var timerTimeout_1 = null;
            owner.$on("hook:destroyed", function() {
              return remove$2(owners_1, owner);
            });
            var forceRender_1 = function(renderCompleted) {
              for (var i = 0, l = owners_1.length; i < l; i++) {
                owners_1[i].$forceUpdate();
              }
              if (renderCompleted) {
                owners_1.length = 0;
                if (timerLoading_1 !== null) {
                  clearTimeout(timerLoading_1);
                  timerLoading_1 = null;
                }
                if (timerTimeout_1 !== null) {
                  clearTimeout(timerTimeout_1);
                  timerTimeout_1 = null;
                }
              }
            };
            var resolve = once(function(res) {
              factory.resolved = ensureCtor(res, baseCtor);
              if (!sync_1) {
                forceRender_1(true);
              } else {
                owners_1.length = 0;
              }
            });
            var reject_1 = once(function(reason) {
              warn$2("Failed to resolve async component: ".concat(String(factory)) + (reason ? "\nReason: ".concat(reason) : ""));
              if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender_1(true);
              }
            });
            var res_1 = factory(resolve, reject_1);
            if (isObject3(res_1)) {
              if (isPromise(res_1)) {
                if (isUndef(factory.resolved)) {
                  res_1.then(resolve, reject_1);
                }
              } else if (isPromise(res_1.component)) {
                res_1.component.then(resolve, reject_1);
                if (isDef(res_1.error)) {
                  factory.errorComp = ensureCtor(res_1.error, baseCtor);
                }
                if (isDef(res_1.loading)) {
                  factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                  if (res_1.delay === 0) {
                    factory.loading = true;
                  } else {
                    timerLoading_1 = setTimeout(function() {
                      timerLoading_1 = null;
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true;
                        forceRender_1(false);
                      }
                    }, res_1.delay || 200);
                  }
                }
                if (isDef(res_1.timeout)) {
                  timerTimeout_1 = setTimeout(function() {
                    timerTimeout_1 = null;
                    if (isUndef(factory.resolved)) {
                      reject_1("timeout (".concat(res_1.timeout, "ms)"));
                    }
                  }, res_1.timeout);
                }
              }
            }
            sync_1 = false;
            return factory.loading ? factory.loadingComp : factory.resolved;
          }
        }
        function getFirstComponentChild(children) {
          if (isArray3(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
              }
            }
          }
        }
        function initEvents(vm) {
          vm._events = /* @__PURE__ */ Object.create(null);
          vm._hasHookEvent = false;
          var listeners = vm.$options._parentListeners;
          if (listeners) {
            updateComponentListeners(vm, listeners);
          }
        }
        var target$1;
        function add$1(event, fn) {
          target$1.$on(event, fn);
        }
        function remove$1(event, fn) {
          target$1.$off(event, fn);
        }
        function createOnceHandler$1(event, fn) {
          var _target = target$1;
          return function onceHandler() {
            var res = fn.apply(null, arguments);
            if (res !== null) {
              _target.$off(event, onceHandler);
            }
          };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
          target$1 = vm;
          updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
          target$1 = void 0;
        }
        function eventsMixin(Vue3) {
          var hookRE = /^hook:/;
          Vue3.prototype.$on = function(event, fn) {
            var vm = this;
            if (isArray3(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
              }
            } else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              if (hookRE.test(event)) {
                vm._hasHookEvent = true;
              }
            }
            return vm;
          };
          Vue3.prototype.$once = function(event, fn) {
            var vm = this;
            function on2() {
              vm.$off(event, on2);
              fn.apply(vm, arguments);
            }
            on2.fn = fn;
            vm.$on(event, on2);
            return vm;
          };
          Vue3.prototype.$off = function(event, fn) {
            var vm = this;
            if (!arguments.length) {
              vm._events = /* @__PURE__ */ Object.create(null);
              return vm;
            }
            if (isArray3(event)) {
              for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                vm.$off(event[i_1], fn);
              }
              return vm;
            }
            var cbs = vm._events[event];
            if (!cbs) {
              return vm;
            }
            if (!fn) {
              vm._events[event] = null;
              return vm;
            }
            var cb;
            var i = cbs.length;
            while (i--) {
              cb = cbs[i];
              if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
              }
            }
            return vm;
          };
          Vue3.prototype.$emit = function(event) {
            var vm = this;
            {
              var lowerCaseEvent = event.toLowerCase();
              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip('Event "'.concat(lowerCaseEvent, '" is emitted in component ') + "".concat(formatComponentName(vm), ' but the handler is registered for "').concat(event, '". ') + "Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "'.concat(hyphenate(event), '" instead of "').concat(event, '".'));
              }
            }
            var cbs = vm._events[event];
            if (cbs) {
              cbs = cbs.length > 1 ? toArray2(cbs) : cbs;
              var args = toArray2(arguments, 1);
              var info = 'event handler for "'.concat(event, '"');
              for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
              }
            }
            return vm;
          };
        }
        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
          var prevActiveInstance = activeInstance;
          activeInstance = vm;
          return function() {
            activeInstance = prevActiveInstance;
          };
        }
        function initLifecycle(vm) {
          var options = vm.$options;
          var parent = options.parent;
          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
            }
            parent.$children.push(vm);
          }
          vm.$parent = parent;
          vm.$root = parent ? parent.$root : vm;
          vm.$children = [];
          vm.$refs = {};
          vm._provided = parent ? parent._provided : /* @__PURE__ */ Object.create(null);
          vm._watcher = null;
          vm._inactive = null;
          vm._directInactive = false;
          vm._isMounted = false;
          vm._isDestroyed = false;
          vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue3) {
          Vue3.prototype._update = function(vnode, hydrating) {
            var vm = this;
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            var restoreActiveInstance = setActiveInstance(vm);
            vm._vnode = vnode;
            if (!prevVnode) {
              vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
            } else {
              vm.$el = vm.__patch__(prevVnode, vnode);
            }
            restoreActiveInstance();
            if (prevEl) {
              prevEl.__vue__ = null;
            }
            if (vm.$el) {
              vm.$el.__vue__ = vm;
            }
            var wrapper = vm;
            while (wrapper && wrapper.$vnode && wrapper.$parent && wrapper.$vnode === wrapper.$parent._vnode) {
              wrapper.$parent.$el = wrapper.$el;
              wrapper = wrapper.$parent;
            }
          };
          Vue3.prototype.$forceUpdate = function() {
            var vm = this;
            if (vm._watcher) {
              vm._watcher.update();
            }
          };
          Vue3.prototype.$destroy = function() {
            var vm = this;
            if (vm._isBeingDestroyed) {
              return;
            }
            callHook$1(vm, "beforeDestroy");
            vm._isBeingDestroyed = true;
            var parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove$2(parent.$children, vm);
            }
            vm._scope.stop();
            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
            }
            vm._isDestroyed = true;
            vm.__patch__(vm._vnode, null);
            callHook$1(vm, "destroyed");
            vm.$off();
            if (vm.$el) {
              vm.$el.__vue__ = null;
            }
            if (vm.$vnode) {
              vm.$vnode.parent = null;
            }
          };
        }
        function mountComponent(vm, el, hydrating) {
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode;
            {
              if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                warn$2("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
              } else {
                warn$2("Failed to mount component: template or render function not defined.", vm);
              }
            }
          }
          callHook$1(vm, "beforeMount");
          var updateComponent;
          if (config.performance && mark) {
            updateComponent = function() {
              var name = vm._name;
              var id = vm._uid;
              var startTag = "vue-perf-start:".concat(id);
              var endTag2 = "vue-perf-end:".concat(id);
              mark(startTag);
              var vnode = vm._render();
              mark(endTag2);
              measure("vue ".concat(name, " render"), startTag, endTag2);
              mark(startTag);
              vm._update(vnode, hydrating);
              mark(endTag2);
              measure("vue ".concat(name, " patch"), startTag, endTag2);
            };
          } else {
            updateComponent = function() {
              vm._update(vm._render(), hydrating);
            };
          }
          var watcherOptions = {
            before: function() {
              if (vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, "beforeUpdate");
              }
            }
          };
          {
            watcherOptions.onTrack = function(e) {
              return callHook$1(vm, "renderTracked", [e]);
            };
            watcherOptions.onTrigger = function(e) {
              return callHook$1(vm, "renderTriggered", [e]);
            };
          }
          new Watcher(vm, updateComponent, noop2, watcherOptions, true);
          hydrating = false;
          var preWatchers = vm._preWatchers;
          if (preWatchers) {
            for (var i = 0; i < preWatchers.length; i++) {
              preWatchers[i].run();
            }
          }
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook$1(vm, "mounted");
          }
          return vm;
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
          {
            isUpdatingChildComponent = true;
          }
          var newScopedSlots = parentVnode.data.scopedSlots;
          var oldScopedSlots = vm.$scopedSlots;
          var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
          var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
          var prevVNode = vm.$vnode;
          vm.$options._parentVnode = parentVnode;
          vm.$vnode = parentVnode;
          if (vm._vnode) {
            vm._vnode.parent = parentVnode;
          }
          vm.$options._renderChildren = renderChildren;
          var attrs2 = parentVnode.data.attrs || emptyObject;
          if (vm._attrsProxy) {
            if (syncSetupProxy(vm._attrsProxy, attrs2, prevVNode.data && prevVNode.data.attrs || emptyObject, vm, "$attrs")) {
              needsForceUpdate = true;
            }
          }
          vm.$attrs = attrs2;
          listeners = listeners || emptyObject;
          var prevListeners = vm.$options._parentListeners;
          if (vm._listenersProxy) {
            syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, "$listeners");
          }
          vm.$listeners = vm.$options._parentListeners = listeners;
          updateComponentListeners(vm, listeners, prevListeners);
          if (propsData && vm.$options.props) {
            toggleObserving(false);
            var props2 = vm._props;
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props;
              props2[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            vm.$options.propsData = propsData;
          }
          if (needsForceUpdate) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
          }
          {
            isUpdatingChildComponent = false;
          }
        }
        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive)
              return true;
          }
          return false;
        }
        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
              return;
            }
          } else if (vm._directInactive) {
            return;
          }
          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
            }
            callHook$1(vm, "activated");
          }
        }
        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
              return;
            }
          }
          if (!vm._inactive) {
            vm._inactive = true;
            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
            }
            callHook$1(vm, "deactivated");
          }
        }
        function callHook$1(vm, hook, args, setContext) {
          if (setContext === void 0) {
            setContext = true;
          }
          pushTarget();
          var prev = currentInstance;
          setContext && setCurrentInstance(vm);
          var handlers = vm.$options[hook];
          var info = "".concat(hook, " hook");
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
            }
          }
          if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook);
          }
          setContext && setCurrentInstance(prev);
          popTarget();
        }
        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index$1 = 0;
        function resetSchedulerState() {
          index$1 = queue.length = activatedChildren.length = 0;
          has = {};
          {
            circular = {};
          }
          waiting = flushing = false;
        }
        var currentFlushTimestamp = 0;
        var getNow = Date.now;
        if (inBrowser && !isIE) {
          var performance_1 = window.performance;
          if (performance_1 && typeof performance_1.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
            getNow = function() {
              return performance_1.now();
            };
          }
        }
        var sortCompareFn = function(a, b) {
          if (a.post) {
            if (!b.post)
              return 1;
          } else if (b.post) {
            return -1;
          }
          return a.id - b.id;
        };
        function flushSchedulerQueue() {
          currentFlushTimestamp = getNow();
          flushing = true;
          var watcher, id;
          queue.sort(sortCompareFn);
          for (index$1 = 0; index$1 < queue.length; index$1++) {
            watcher = queue[index$1];
            if (watcher.before) {
              watcher.before();
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            if (has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > MAX_UPDATE_COUNT) {
                warn$2("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "'.concat(watcher.expression, '"') : "in a component render function."), watcher.vm);
                break;
              }
            }
          }
          var activatedQueue = activatedChildren.slice();
          var updatedQueue = queue.slice();
          resetSchedulerState();
          callActivatedHooks(activatedQueue);
          callUpdatedHooks(updatedQueue);
          cleanupDeps();
          if (devtools && config.devtools) {
            devtools.emit("flush");
          }
        }
        function callUpdatedHooks(queue2) {
          var i = queue2.length;
          while (i--) {
            var watcher = queue2[i];
            var vm = watcher.vm;
            if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook$1(vm, "updated");
            }
          }
        }
        function queueActivatedComponent(vm) {
          vm._inactive = false;
          activatedChildren.push(vm);
        }
        function callActivatedHooks(queue2) {
          for (var i = 0; i < queue2.length; i++) {
            queue2[i]._inactive = true;
            activateChildComponent(queue2[i], true);
          }
        }
        function queueWatcher(watcher) {
          var id = watcher.id;
          if (has[id] != null) {
            return;
          }
          if (watcher === Dep.target && watcher.noRecurse) {
            return;
          }
          has[id] = true;
          if (!flushing) {
            queue.push(watcher);
          } else {
            var i = queue.length - 1;
            while (i > index$1 && queue[i].id > watcher.id) {
              i--;
            }
            queue.splice(i + 1, 0, watcher);
          }
          if (!waiting) {
            waiting = true;
            if (!config.async) {
              flushSchedulerQueue();
              return;
            }
            nextTick(flushSchedulerQueue);
          }
        }
        var WATCHER = "watcher";
        var WATCHER_CB = "".concat(WATCHER, " callback");
        var WATCHER_GETTER = "".concat(WATCHER, " getter");
        var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
        function watchEffect(effect2, options) {
          return doWatch(effect2, null, options);
        }
        function watchPostEffect(effect2, options) {
          return doWatch(effect2, null, __assign(__assign({}, options), { flush: "post" }));
        }
        function watchSyncEffect(effect2, options) {
          return doWatch(effect2, null, __assign(__assign({}, options), { flush: "sync" }));
        }
        var INITIAL_WATCHER_VALUE = {};
        function watch(source, cb, options) {
          if (typeof cb !== "function") {
            warn$2("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature.");
          }
          return doWatch(source, cb, options);
        }
        function doWatch(source, cb, _a2) {
          var _b = _a2 === void 0 ? emptyObject : _a2, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? "pre" : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
          if (!cb) {
            if (immediate !== void 0) {
              warn$2('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.');
            }
            if (deep !== void 0) {
              warn$2('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.');
            }
          }
          var warnInvalidSource = function(s) {
            warn$2("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") + "function, a ref, a reactive object, or an array of these types.");
          };
          var instance = currentInstance;
          var call = function(fn, type, args) {
            if (args === void 0) {
              args = null;
            }
            return invokeWithErrorHandling(fn, null, args, instance, type);
          };
          var getter;
          var forceTrigger = false;
          var isMultiSource = false;
          if (isRef(source)) {
            getter = function() {
              return source.value;
            };
            forceTrigger = isShallow(source);
          } else if (isReactive(source)) {
            getter = function() {
              source.__ob__.dep.depend();
              return source;
            };
            deep = true;
          } else if (isArray3(source)) {
            isMultiSource = true;
            forceTrigger = source.some(function(s) {
              return isReactive(s) || isShallow(s);
            });
            getter = function() {
              return source.map(function(s) {
                if (isRef(s)) {
                  return s.value;
                } else if (isReactive(s)) {
                  return traverse(s);
                } else if (isFunction2(s)) {
                  return call(s, WATCHER_GETTER);
                } else {
                  warnInvalidSource(s);
                }
              });
            };
          } else if (isFunction2(source)) {
            if (cb) {
              getter = function() {
                return call(source, WATCHER_GETTER);
              };
            } else {
              getter = function() {
                if (instance && instance._isDestroyed) {
                  return;
                }
                if (cleanup) {
                  cleanup();
                }
                return call(source, WATCHER, [onCleanup]);
              };
            }
          } else {
            getter = noop2;
            warnInvalidSource(source);
          }
          if (cb && deep) {
            var baseGetter_1 = getter;
            getter = function() {
              return traverse(baseGetter_1());
            };
          }
          var cleanup;
          var onCleanup = function(fn) {
            cleanup = watcher.onStop = function() {
              call(fn, WATCHER_CLEANUP);
            };
          };
          if (isServerRendering()) {
            onCleanup = noop2;
            if (!cb) {
              getter();
            } else if (immediate) {
              call(cb, WATCHER_CB, [
                getter(),
                isMultiSource ? [] : void 0,
                onCleanup
              ]);
            }
            return noop2;
          }
          var watcher = new Watcher(currentInstance, getter, noop2, {
            lazy: true
          });
          watcher.noRecurse = !cb;
          var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
          watcher.run = function() {
            if (!watcher.active) {
              return;
            }
            if (cb) {
              var newValue = watcher.get();
              if (deep || forceTrigger || (isMultiSource ? newValue.some(function(v, i) {
                return hasChanged(v, oldValue[i]);
              }) : hasChanged(newValue, oldValue))) {
                if (cleanup) {
                  cleanup();
                }
                call(cb, WATCHER_CB, [
                  newValue,
                  oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
                  onCleanup
                ]);
                oldValue = newValue;
              }
            } else {
              watcher.get();
            }
          };
          if (flush === "sync") {
            watcher.update = watcher.run;
          } else if (flush === "post") {
            watcher.post = true;
            watcher.update = function() {
              return queueWatcher(watcher);
            };
          } else {
            watcher.update = function() {
              if (instance && instance === currentInstance && !instance._isMounted) {
                var buffer = instance._preWatchers || (instance._preWatchers = []);
                if (buffer.indexOf(watcher) < 0)
                  buffer.push(watcher);
              } else {
                queueWatcher(watcher);
              }
            };
          }
          {
            watcher.onTrack = onTrack;
            watcher.onTrigger = onTrigger;
          }
          if (cb) {
            if (immediate) {
              watcher.run();
            } else {
              oldValue = watcher.get();
            }
          } else if (flush === "post" && instance) {
            instance.$once("hook:mounted", function() {
              return watcher.get();
            });
          } else {
            watcher.get();
          }
          return function() {
            watcher.teardown();
          };
        }
        var activeEffectScope;
        var EffectScope = function() {
          function EffectScope2(detached) {
            if (detached === void 0) {
              detached = false;
            }
            this.active = true;
            this.effects = [];
            this.cleanups = [];
            if (!detached && activeEffectScope) {
              this.parent = activeEffectScope;
              this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
            }
          }
          EffectScope2.prototype.run = function(fn) {
            if (this.active) {
              var currentEffectScope = activeEffectScope;
              try {
                activeEffectScope = this;
                return fn();
              } finally {
                activeEffectScope = currentEffectScope;
              }
            } else {
              warn$2("cannot run an inactive effect scope.");
            }
          };
          EffectScope2.prototype.on = function() {
            activeEffectScope = this;
          };
          EffectScope2.prototype.off = function() {
            activeEffectScope = this.parent;
          };
          EffectScope2.prototype.stop = function(fromParent) {
            if (this.active) {
              var i = void 0, l = void 0;
              for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].teardown();
              }
              for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
              }
              if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                  this.scopes[i].stop(true);
                }
              }
              if (this.parent && !fromParent) {
                var last = this.parent.scopes.pop();
                if (last && last !== this) {
                  this.parent.scopes[this.index] = last;
                  last.index = this.index;
                }
              }
              this.active = false;
            }
          };
          return EffectScope2;
        }();
        function effectScope(detached) {
          return new EffectScope(detached);
        }
        function recordEffectScope(effect2, scope) {
          if (scope === void 0) {
            scope = activeEffectScope;
          }
          if (scope && scope.active) {
            scope.effects.push(effect2);
          }
        }
        function getCurrentScope() {
          return activeEffectScope;
        }
        function onScopeDispose(fn) {
          if (activeEffectScope) {
            activeEffectScope.cleanups.push(fn);
          } else {
            warn$2("onScopeDispose() is called when there is no active effect scope to be associated with.");
          }
        }
        function provide(key, value) {
          if (!currentInstance) {
            {
              warn$2("provide() can only be used inside setup().");
            }
          } else {
            resolveProvided(currentInstance)[key] = value;
          }
        }
        function resolveProvided(vm) {
          var existing = vm._provided;
          var parentProvides = vm.$parent && vm.$parent._provided;
          if (parentProvides === existing) {
            return vm._provided = Object.create(parentProvides);
          } else {
            return existing;
          }
        }
        function inject(key, defaultValue, treatDefaultAsFactory) {
          if (treatDefaultAsFactory === void 0) {
            treatDefaultAsFactory = false;
          }
          var instance = currentInstance;
          if (instance) {
            var provides = instance.$parent && instance.$parent._provided;
            if (provides && key in provides) {
              return provides[key];
            } else if (arguments.length > 1) {
              return treatDefaultAsFactory && isFunction2(defaultValue) ? defaultValue.call(instance) : defaultValue;
            } else {
              warn$2('injection "'.concat(String(key), '" not found.'));
            }
          } else {
            warn$2("inject() can only be used inside setup() or functional components.");
          }
        }
        function h(type, props2, children) {
          if (!currentInstance) {
            warn$2("globally imported h() can only be invoked when there is an active component instance, e.g. synchronously in a component's render or setup function.");
          }
          return createElement$1(currentInstance, type, props2, children, 2, true);
        }
        function handleError(err, vm, info) {
          pushTarget();
          try {
            if (vm) {
              var cur = vm;
              while (cur = cur.$parent) {
                var hooks2 = cur.$options.errorCaptured;
                if (hooks2) {
                  for (var i = 0; i < hooks2.length; i++) {
                    try {
                      var capture = hooks2[i].call(cur, err, vm, info) === false;
                      if (capture)
                        return;
                    } catch (e) {
                      globalHandleError(e, cur, "errorCaptured hook");
                    }
                  }
                }
              }
            }
            globalHandleError(err, vm, info);
          } finally {
            popTarget();
          }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
          var res;
          try {
            res = args ? handler.apply(context, args) : handler.call(context);
            if (res && !res._isVue && isPromise(res) && !res._handled) {
              res.catch(function(e) {
                return handleError(e, vm, info + " (Promise/async)");
              });
              res._handled = true;
            }
          } catch (e) {
            handleError(e, vm, info);
          }
          return res;
        }
        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
              if (e !== err) {
                logError(e, null, "config.errorHandler");
              }
            }
          }
          logError(err, vm, info);
        }
        function logError(err, vm, info) {
          {
            warn$2("Error in ".concat(info, ': "').concat(err.toString(), '"'), vm);
          }
          if (inBrowser && typeof console !== "undefined") {
            console.error(err);
          } else {
            throw err;
          }
        }
        var isUsingMicroTask = false;
        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        var timerFunc;
        if (typeof Promise !== "undefined" && isNative(Promise)) {
          var p_1 = Promise.resolve();
          timerFunc = function() {
            p_1.then(flushCallbacks);
            if (isIOS)
              setTimeout(noop2);
          };
          isUsingMicroTask = true;
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
          var counter_1 = 1;
          var observer = new MutationObserver(flushCallbacks);
          var textNode_1 = document.createTextNode(String(counter_1));
          observer.observe(textNode_1, {
            characterData: true
          });
          timerFunc = function() {
            counter_1 = (counter_1 + 1) % 2;
            textNode_1.data = String(counter_1);
          };
          isUsingMicroTask = true;
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
          timerFunc = function() {
            setImmediate(flushCallbacks);
          };
        } else {
          timerFunc = function() {
            setTimeout(flushCallbacks, 0);
          };
        }
        function nextTick(cb, ctx) {
          var _resolve;
          callbacks.push(function() {
            if (cb) {
              try {
                cb.call(ctx);
              } catch (e) {
                handleError(e, ctx, "nextTick");
              }
            } else if (_resolve) {
              _resolve(ctx);
            }
          });
          if (!pending) {
            pending = true;
            timerFunc();
          }
          if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
              _resolve = resolve;
            });
          }
        }
        function useCssModule(name) {
          {
            {
              warn$2("useCssModule() is not supported in the global build.");
            }
            return emptyObject;
          }
        }
        function useCssVars(getter) {
          if (!inBrowser && true)
            return;
          var instance = currentInstance;
          if (!instance) {
            warn$2("useCssVars is called without current active component instance.");
            return;
          }
          watchPostEffect(function() {
            var el = instance.$el;
            var vars = getter(instance, instance._setupProxy);
            if (el && el.nodeType === 1) {
              var style2 = el.style;
              for (var key in vars) {
                style2.setProperty("--".concat(key), vars[key]);
              }
            }
          });
        }
        function defineAsyncComponent(source) {
          if (isFunction2(source)) {
            source = { loader: source };
          }
          var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a2 = source.delay, delay = _a2 === void 0 ? 200 : _a2, timeout = source.timeout, _b = source.suspensible, suspensible = _b === void 0 ? false : _b, userOnError = source.onError;
          if (suspensible) {
            warn$2("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
          }
          var pendingRequest = null;
          var retries = 0;
          var retry = function() {
            retries++;
            pendingRequest = null;
            return load();
          };
          var load = function() {
            var thisRequest;
            return pendingRequest || (thisRequest = pendingRequest = loader().catch(function(err) {
              err = err instanceof Error ? err : new Error(String(err));
              if (userOnError) {
                return new Promise(function(resolve, reject) {
                  var userRetry = function() {
                    return resolve(retry());
                  };
                  var userFail = function() {
                    return reject(err);
                  };
                  userOnError(err, userRetry, userFail, retries + 1);
                });
              } else {
                throw err;
              }
            }).then(function(comp) {
              if (thisRequest !== pendingRequest && pendingRequest) {
                return pendingRequest;
              }
              if (!comp) {
                warn$2("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.");
              }
              if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
                comp = comp.default;
              }
              if (comp && !isObject3(comp) && !isFunction2(comp)) {
                throw new Error("Invalid async component load result: ".concat(comp));
              }
              return comp;
            }));
          };
          return function() {
            var component = load();
            return {
              component,
              delay,
              timeout,
              error: errorComponent,
              loading: loadingComponent
            };
          };
        }
        function createLifeCycle(hookName) {
          return function(fn, target2) {
            if (target2 === void 0) {
              target2 = currentInstance;
            }
            if (!target2) {
              warn$2("".concat(formatName(hookName), " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup().");
              return;
            }
            return injectHook(target2, hookName, fn);
          };
        }
        function formatName(name) {
          if (name === "beforeDestroy") {
            name = "beforeUnmount";
          } else if (name === "destroyed") {
            name = "unmounted";
          }
          return "on".concat(name[0].toUpperCase() + name.slice(1));
        }
        function injectHook(instance, hookName, fn) {
          var options = instance.$options;
          options[hookName] = mergeLifecycleHook(options[hookName], fn);
        }
        var onBeforeMount = createLifeCycle("beforeMount");
        var onMounted = createLifeCycle("mounted");
        var onBeforeUpdate = createLifeCycle("beforeUpdate");
        var onUpdated = createLifeCycle("updated");
        var onBeforeUnmount = createLifeCycle("beforeDestroy");
        var onUnmounted = createLifeCycle("destroyed");
        var onActivated = createLifeCycle("activated");
        var onDeactivated = createLifeCycle("deactivated");
        var onServerPrefetch = createLifeCycle("serverPrefetch");
        var onRenderTracked = createLifeCycle("renderTracked");
        var onRenderTriggered = createLifeCycle("renderTriggered");
        var injectErrorCapturedHook = createLifeCycle("errorCaptured");
        function onErrorCaptured(hook, target2) {
          if (target2 === void 0) {
            target2 = currentInstance;
          }
          injectErrorCapturedHook(hook, target2);
        }
        var version = "2.7.11";
        function defineComponent(options) {
          return options;
        }
        var vca = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          version,
          defineComponent,
          ref: ref$1,
          shallowRef,
          isRef,
          toRef,
          toRefs,
          unref,
          proxyRefs,
          customRef,
          triggerRef,
          reactive,
          isReactive,
          isReadonly,
          isShallow,
          isProxy,
          shallowReactive,
          markRaw,
          toRaw,
          readonly,
          shallowReadonly,
          computed,
          watch,
          watchEffect,
          watchPostEffect,
          watchSyncEffect,
          EffectScope,
          effectScope,
          onScopeDispose,
          getCurrentScope,
          provide,
          inject,
          h,
          getCurrentInstance,
          useSlots,
          useAttrs,
          useListeners,
          mergeDefaults,
          nextTick,
          set,
          del,
          useCssModule,
          useCssVars,
          defineAsyncComponent,
          onBeforeMount,
          onMounted,
          onBeforeUpdate,
          onUpdated,
          onBeforeUnmount,
          onUnmounted,
          onActivated,
          onDeactivated,
          onServerPrefetch,
          onRenderTracked,
          onRenderTriggered,
          onErrorCaptured
        });
        var seenObjects = new _Set();
        function traverse(val) {
          _traverse(val, seenObjects);
          seenObjects.clear();
          return val;
        }
        function _traverse(val, seen) {
          var i, keys;
          var isA = isArray3(val);
          if (!isA && !isObject3(val) || Object.isFrozen(val) || val instanceof VNode) {
            return;
          }
          if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
              return;
            }
            seen.add(depId);
          }
          if (isA) {
            i = val.length;
            while (i--)
              _traverse(val[i], seen);
          } else if (isRef(val)) {
            _traverse(val.value, seen);
          } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--)
              _traverse(val[keys[i]], seen);
          }
        }
        var uid$1 = 0;
        var Watcher = function() {
          function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
            recordEffectScope(
              this,
              activeEffectScope && !activeEffectScope._vm ? activeEffectScope : vm ? vm._scope : void 0
            );
            if ((this.vm = vm) && isRenderWatcher) {
              vm._watcher = this;
            }
            if (options) {
              this.deep = !!options.deep;
              this.user = !!options.user;
              this.lazy = !!options.lazy;
              this.sync = !!options.sync;
              this.before = options.before;
              {
                this.onTrack = options.onTrack;
                this.onTrigger = options.onTrigger;
              }
            } else {
              this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$1;
            this.active = true;
            this.post = false;
            this.dirty = this.lazy;
            this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = expOrFn.toString();
            if (isFunction2(expOrFn)) {
              this.getter = expOrFn;
            } else {
              this.getter = parsePath(expOrFn);
              if (!this.getter) {
                this.getter = noop2;
                warn$2('Failed watching path: "'.concat(expOrFn, '" ') + "Watcher only accepts simple dot-delimited paths. For full control, use a function instead.", vm);
              }
            }
            this.value = this.lazy ? void 0 : this.get();
          }
          Watcher2.prototype.get = function() {
            pushTarget(this);
            var value;
            var vm = this.vm;
            try {
              value = this.getter.call(vm, vm);
            } catch (e) {
              if (this.user) {
                handleError(e, vm, 'getter for watcher "'.concat(this.expression, '"'));
              } else {
                throw e;
              }
            } finally {
              if (this.deep) {
                traverse(value);
              }
              popTarget();
              this.cleanupDeps();
            }
            return value;
          };
          Watcher2.prototype.addDep = function(dep) {
            var id = dep.id;
            if (!this.newDepIds.has(id)) {
              this.newDepIds.add(id);
              this.newDeps.push(dep);
              if (!this.depIds.has(id)) {
                dep.addSub(this);
              }
            }
          };
          Watcher2.prototype.cleanupDeps = function() {
            var i = this.deps.length;
            while (i--) {
              var dep = this.deps[i];
              if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
              }
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
          };
          Watcher2.prototype.update = function() {
            if (this.lazy) {
              this.dirty = true;
            } else if (this.sync) {
              this.run();
            } else {
              queueWatcher(this);
            }
          };
          Watcher2.prototype.run = function() {
            if (this.active) {
              var value = this.get();
              if (value !== this.value || isObject3(value) || this.deep) {
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                  var info = 'callback for watcher "'.concat(this.expression, '"');
                  invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                } else {
                  this.cb.call(this.vm, value, oldValue);
                }
              }
            }
          };
          Watcher2.prototype.evaluate = function() {
            this.value = this.get();
            this.dirty = false;
          };
          Watcher2.prototype.depend = function() {
            var i = this.deps.length;
            while (i--) {
              this.deps[i].depend();
            }
          };
          Watcher2.prototype.teardown = function() {
            if (this.vm && !this.vm._isBeingDestroyed) {
              remove$2(this.vm._scope.effects, this);
            }
            if (this.active) {
              var i = this.deps.length;
              while (i--) {
                this.deps[i].removeSub(this);
              }
              this.active = false;
              if (this.onStop) {
                this.onStop();
              }
            }
          };
          return Watcher2;
        }();
        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop2,
          set: noop2
        };
        function proxy(target2, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
          };
          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
          };
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function initState(vm) {
          var opts2 = vm.$options;
          if (opts2.methods)
            initMethods(vm, opts2.methods);
          if (opts2.data) {
            initData(vm);
          } else {
            var ob = observe(vm._data = {});
            ob && ob.vmCount++;
          }
          if (opts2.computed)
            initComputed$1(vm, opts2.computed);
          if (opts2.watch && opts2.watch !== nativeWatch) {
            initWatch(vm, opts2.watch);
          }
        }
        function initProps$1(vm, propsOptions) {
          if (!propsOptions)
            return;
          var propsData = vm.$options.propsData || {};
          var props2 = vm._props = shallowReactive({});
          var keys = vm.$options._propKeys = [];
          var isRoot = !vm.$parent;
          if (!isRoot) {
            toggleObserving(false);
          }
          var _loop_1 = function(key2) {
            keys.push(key2);
            var value = validateProp(key2, propsOptions, propsData, vm);
            {
              var hyphenatedKey = hyphenate(key2);
              if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                warn$2('"'.concat(hyphenatedKey, '" is a reserved attribute and cannot be used as component prop.'), vm);
              }
              defineReactive(props2, key2, value, function() {
                if (!isRoot && !isUpdatingChildComponent) {
                  warn$2("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "'.concat(key2, '"'), vm);
                }
              });
            }
            if (!(key2 in vm)) {
              proxy(vm, "_props", key2);
            }
          };
          for (var key in propsOptions) {
            _loop_1(key);
          }
          toggleObserving(true);
        }
        function initData(vm) {
          var data = vm.$options.data;
          data = vm._data = isFunction2(data) ? getData(data, vm) : data || {};
          if (!isPlainObject2(data)) {
            data = {};
            warn$2("data functions should return an object:\nhttps://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
          }
          var keys = Object.keys(data);
          var props2 = vm.$options.props;
          var methods = vm.$options.methods;
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            {
              if (methods && hasOwn2(methods, key)) {
                warn$2('Method "'.concat(key, '" has already been defined as a data property.'), vm);
              }
            }
            if (props2 && hasOwn2(props2, key)) {
              warn$2('The data property "'.concat(key, '" is already declared as a prop. ') + "Use prop default value instead.", vm);
            } else if (!isReserved(key)) {
              proxy(vm, "_data", key);
            }
          }
          var ob = observe(data);
          ob && ob.vmCount++;
        }
        function getData(data, vm) {
          pushTarget();
          try {
            return data.call(vm, vm);
          } catch (e) {
            handleError(e, vm, "data()");
            return {};
          } finally {
            popTarget();
          }
        }
        var computedWatcherOptions = { lazy: true };
        function initComputed$1(vm, computed2) {
          var watchers = vm._computedWatchers = /* @__PURE__ */ Object.create(null);
          var isSSR = isServerRendering();
          for (var key in computed2) {
            var userDef = computed2[key];
            var getter = isFunction2(userDef) ? userDef : userDef.get;
            if (getter == null) {
              warn$2('Getter is missing for computed property "'.concat(key, '".'), vm);
            }
            if (!isSSR) {
              watchers[key] = new Watcher(vm, getter || noop2, noop2, computedWatcherOptions);
            }
            if (!(key in vm)) {
              defineComputed(vm, key, userDef);
            } else {
              if (key in vm.$data) {
                warn$2('The computed property "'.concat(key, '" is already defined in data.'), vm);
              } else if (vm.$options.props && key in vm.$options.props) {
                warn$2('The computed property "'.concat(key, '" is already defined as a prop.'), vm);
              } else if (vm.$options.methods && key in vm.$options.methods) {
                warn$2('The computed property "'.concat(key, '" is already defined as a method.'), vm);
              }
            }
          }
        }
        function defineComputed(target2, key, userDef) {
          var shouldCache = !isServerRendering();
          if (isFunction2(userDef)) {
            sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
            sharedPropertyDefinition.set = noop2;
          } else {
            sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop2;
            sharedPropertyDefinition.set = userDef.set || noop2;
          }
          if (sharedPropertyDefinition.set === noop2) {
            sharedPropertyDefinition.set = function() {
              warn$2('Computed property "'.concat(key, '" was assigned to but it has no setter.'), this);
            };
          }
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate();
              }
              if (Dep.target) {
                if (Dep.target.onTrack) {
                  Dep.target.onTrack({
                    effect: Dep.target,
                    target: this,
                    type: "get",
                    key
                  });
                }
                watcher.depend();
              }
              return watcher.value;
            }
          };
        }
        function createGetterInvoker(fn) {
          return function computedGetter() {
            return fn.call(this, this);
          };
        }
        function initMethods(vm, methods) {
          var props2 = vm.$options.props;
          for (var key in methods) {
            {
              if (typeof methods[key] !== "function") {
                warn$2('Method "'.concat(key, '" has type "').concat(typeof methods[key], '" in the component definition. ') + "Did you reference the function correctly?", vm);
              }
              if (props2 && hasOwn2(props2, key)) {
                warn$2('Method "'.concat(key, '" has already been defined as a prop.'), vm);
              }
              if (key in vm && isReserved(key)) {
                warn$2('Method "'.concat(key, '" conflicts with an existing Vue instance method. ') + "Avoid defining component methods that start with _ or $.");
              }
            }
            vm[key] = typeof methods[key] !== "function" ? noop2 : bind$1(methods[key], vm);
          }
        }
        function initWatch(vm, watch2) {
          for (var key in watch2) {
            var handler = watch2[key];
            if (isArray3(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }
        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject2(handler)) {
            options = handler;
            handler = handler.handler;
          }
          if (typeof handler === "string") {
            handler = vm[handler];
          }
          return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue3) {
          var dataDef = {};
          dataDef.get = function() {
            return this._data;
          };
          var propsDef = {};
          propsDef.get = function() {
            return this._props;
          };
          {
            dataDef.set = function() {
              warn$2("Avoid replacing instance root $data. Use nested data properties instead.", this);
            };
            propsDef.set = function() {
              warn$2("$props is readonly.", this);
            };
          }
          Object.defineProperty(Vue3.prototype, "$data", dataDef);
          Object.defineProperty(Vue3.prototype, "$props", propsDef);
          Vue3.prototype.$set = set;
          Vue3.prototype.$delete = del;
          Vue3.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this;
            if (isPlainObject2(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
              var info = 'callback for immediate watcher "'.concat(watcher.expression, '"');
              pushTarget();
              invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
              popTarget();
            }
            return function unwatchFn() {
              watcher.teardown();
            };
          };
        }
        function initProvide(vm) {
          var provideOption = vm.$options.provide;
          if (provideOption) {
            var provided = isFunction2(provideOption) ? provideOption.call(vm) : provideOption;
            if (!isObject3(provided)) {
              return;
            }
            var source = resolveProvided(vm);
            var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
            }
          }
        }
        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm);
          if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(function(key) {
              {
                defineReactive(vm, key, result[key], function() {
                  warn$2("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. " + 'injection being mutated: "'.concat(key, '"'), vm);
                });
              }
            });
            toggleObserving(true);
          }
        }
        function resolveInject(inject2, vm) {
          if (inject2) {
            var result = /* @__PURE__ */ Object.create(null);
            var keys = hasSymbol ? Reflect.ownKeys(inject2) : Object.keys(inject2);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key === "__ob__")
                continue;
              var provideKey = inject2[key].from;
              if (provideKey in vm._provided) {
                result[key] = vm._provided[provideKey];
              } else if ("default" in inject2[key]) {
                var provideDefault = inject2[key].default;
                result[key] = isFunction2(provideDefault) ? provideDefault.call(vm) : provideDefault;
              } else {
                warn$2('Injection "'.concat(key, '" not found'), vm);
              }
            }
            return result;
          }
        }
        var uid = 0;
        function initMixin$1(Vue3) {
          Vue3.prototype._init = function(options) {
            var vm = this;
            vm._uid = uid++;
            var startTag, endTag2;
            if (config.performance && mark) {
              startTag = "vue-perf-start:".concat(vm._uid);
              endTag2 = "vue-perf-end:".concat(vm._uid);
              mark(startTag);
            }
            vm._isVue = true;
            vm.__v_skip = true;
            vm._scope = new EffectScope(true);
            vm._scope._vm = true;
            if (options && options._isComponent) {
              initInternalComponent(vm, options);
            } else {
              vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
            }
            {
              initProxy(vm);
            }
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            var opts2 = vm.$options;
            initInjections(vm);
            initProps$1(vm, opts2.props);
            initSetup(vm);
            callHook$1(vm, "beforeCreate", void 0, false);
            initState(vm);
            initProvide(vm);
            callHook$1(vm, "created");
            if (config.performance && mark) {
              vm._name = formatComponentName(vm, false);
              mark(endTag2);
              measure("vue ".concat(vm._name, " init"), startTag, endTag2);
            }
            if (vm.$options.el) {
              vm.$mount(vm.$options.el);
            }
          };
        }
        function initInternalComponent(vm, options) {
          var opts2 = vm.$options = Object.create(vm.constructor.options);
          var parentVnode = options._parentVnode;
          opts2.parent = options.parent;
          opts2._parentVnode = parentVnode;
          var vnodeComponentOptions = parentVnode.componentOptions;
          opts2.propsData = vnodeComponentOptions.propsData;
          opts2._parentListeners = vnodeComponentOptions.listeners;
          opts2._renderChildren = vnodeComponentOptions.children;
          opts2._componentTag = vnodeComponentOptions.tag;
          if (options.render) {
            opts2.render = options.render;
            opts2.staticRenderFns = options.staticRenderFns;
          }
        }
        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options;
          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super);
            var cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
              Ctor.superOptions = superOptions;
              var modifiedOptions = resolveModifiedOptions(Ctor);
              if (modifiedOptions) {
                extend2(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
              if (options.name) {
                options.components[options.name] = Ctor;
              }
            }
          }
          return options;
        }
        function resolveModifiedOptions(Ctor) {
          var modified;
          var latest = Ctor.options;
          var sealed = Ctor.sealedOptions;
          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified)
                modified = {};
              modified[key] = latest[key];
            }
          }
          return modified;
        }
        function FunctionalRenderContext(data, props2, children, parent, Ctor) {
          var _this = this;
          var options = Ctor.options;
          var contextVm;
          if (hasOwn2(parent, "_uid")) {
            contextVm = Object.create(parent);
            contextVm._original = parent;
          } else {
            contextVm = parent;
            parent = parent._original;
          }
          var isCompiled = isTrue(options._compiled);
          var needNormalization = !isCompiled;
          this.data = data;
          this.props = props2;
          this.children = children;
          this.parent = parent;
          this.listeners = data.on || emptyObject;
          this.injections = resolveInject(options.inject, parent);
          this.slots = function() {
            if (!_this.$slots) {
              normalizeScopedSlots(parent, data.scopedSlots, _this.$slots = resolveSlots(children, parent));
            }
            return _this.$slots;
          };
          Object.defineProperty(this, "scopedSlots", {
            enumerable: true,
            get: function() {
              return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
            }
          });
          if (isCompiled) {
            this.$options = options;
            this.$slots = this.slots();
            this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
          }
          if (options._scopeId) {
            this._c = function(a, b, c, d) {
              var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
              if (vnode && !isArray3(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
              }
              return vnode;
            };
          } else {
            this._c = function(a, b, c, d) {
              return createElement$1(contextVm, a, b, c, d, needNormalization);
            };
          }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
          var options = Ctor.options;
          var props2 = {};
          var propOptions = options.props;
          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props2[key] = validateProp(key, propOptions, propsData || emptyObject);
            }
          } else {
            if (isDef(data.attrs))
              mergeProps(props2, data.attrs);
            if (isDef(data.props))
              mergeProps(props2, data.props);
          }
          var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
          var vnode = options.render.call(null, renderContext._c, renderContext);
          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
          } else if (isArray3(vnode)) {
            var vnodes = normalizeChildren(vnode) || [];
            var res = new Array(vnodes.length);
            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
            }
            return res;
          }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
          var clone = cloneVNode(vnode);
          clone.fnContext = contextVm;
          clone.fnOptions = options;
          {
            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
          }
          if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
          }
          return clone;
        }
        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key];
          }
        }
        function getComponentName(options) {
          return options.name || options.__name || options._componentTag;
        }
        var componentVNodeHooks = {
          init: function(vnode, hydrating) {
            if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
              var mountedNode = vnode;
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
            } else {
              var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
              child.$mount(hydrating ? vnode.elm : void 0, hydrating);
            }
          },
          prepatch: function(oldVnode, vnode) {
            var options = vnode.componentOptions;
            var child = vnode.componentInstance = oldVnode.componentInstance;
            updateChildComponent(
              child,
              options.propsData,
              options.listeners,
              vnode,
              options.children
            );
          },
          insert: function(vnode) {
            var context = vnode.context, componentInstance = vnode.componentInstance;
            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook$1(componentInstance, "mounted");
            }
            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                queueActivatedComponent(componentInstance);
              } else {
                activateChildComponent(componentInstance, true);
              }
            }
          },
          destroy: function(vnode) {
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
              } else {
                deactivateChildComponent(componentInstance, true);
              }
            }
          }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return;
          }
          var baseCtor = context.$options._base;
          if (isObject3(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
          }
          if (typeof Ctor !== "function") {
            {
              warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
            }
            return;
          }
          var asyncFactory;
          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
            if (Ctor === void 0) {
              return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
            }
          }
          data = data || {};
          resolveConstructorOptions(Ctor);
          if (isDef(data.model)) {
            transformModel(Ctor.options, data);
          }
          var propsData = extractPropsFromVNodeData(data, Ctor, tag);
          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children);
          }
          var listeners = data.on;
          data.on = data.nativeOn;
          if (isTrue(Ctor.options.abstract)) {
            var slot = data.slot;
            data = {};
            if (slot) {
              data.slot = slot;
            }
          }
          installComponentHooks(data);
          var name = getComponentName(Ctor.options) || tag;
          var vnode = new VNode(
            "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ""),
            data,
            void 0,
            void 0,
            void 0,
            context,
            { Ctor, propsData, listeners, tag, children },
            asyncFactory
          );
          return vnode;
        }
        function createComponentInstanceForVnode(vnode, parent) {
          var options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent
          };
          var inlineTemplate = vnode.data.inlineTemplate;
          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
          }
          return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
          var hooks2 = data.hook || (data.hook = {});
          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i];
            var existing = hooks2[key];
            var toMerge = componentVNodeHooks[key];
            if (existing !== toMerge && !(existing && existing._merged)) {
              hooks2[key] = existing ? mergeHook(toMerge, existing) : toMerge;
            }
          }
        }
        function mergeHook(f1, f2) {
          var merged = function(a, b) {
            f1(a, b);
            f2(a, b);
          };
          merged._merged = true;
          return merged;
        }
        function transformModel(options, data) {
          var prop = options.model && options.model.prop || "value";
          var event = options.model && options.model.event || "input";
          (data.attrs || (data.attrs = {}))[prop] = data.model.value;
          var on2 = data.on || (data.on = {});
          var existing = on2[event];
          var callback = data.model.callback;
          if (isDef(existing)) {
            if (isArray3(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
              on2[event] = [callback].concat(existing);
            }
          } else {
            on2[event] = callback;
          }
        }
        var warn$2 = noop2;
        var tip = noop2;
        var generateComponentTrace;
        var formatComponentName;
        {
          var hasConsole_1 = typeof console !== "undefined";
          var classifyRE_1 = /(?:^|[-_])(\w)/g;
          var classify_1 = function(str2) {
            return str2.replace(classifyRE_1, function(c) {
              return c.toUpperCase();
            }).replace(/[-_]/g, "");
          };
          warn$2 = function(msg, vm) {
            if (vm === void 0) {
              vm = currentInstance;
            }
            var trace = vm ? generateComponentTrace(vm) : "";
            if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace);
            } else if (hasConsole_1 && !config.silent) {
              console.error("[Vue warn]: ".concat(msg).concat(trace));
            }
          };
          tip = function(msg, vm) {
            if (hasConsole_1 && !config.silent) {
              console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ""));
            }
          };
          formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) {
              return "<Root>";
            }
            var options = isFunction2(vm) && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
            var name = getComponentName(options);
            var file = options.__file;
            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
            }
            return (name ? "<".concat(classify_1(name), ">") : "<Anonymous>") + (file && includeFile !== false ? " at ".concat(file) : "");
          };
          var repeat_1 = function(str2, n) {
            var res = "";
            while (n) {
              if (n % 2 === 1)
                res += str2;
              if (n > 1)
                str2 += str2;
              n >>= 1;
            }
            return res;
          };
          generateComponentTrace = function(vm) {
            if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1];
                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                  }
                }
                tree.push(vm);
                vm = vm.$parent;
              }
              return "\n\nfound in\n\n" + tree.map(function(vm2, i) {
                return "".concat(i === 0 ? "---> " : repeat_1(" ", 5 + i * 2)).concat(isArray3(vm2) ? "".concat(formatComponentName(vm2[0]), "... (").concat(vm2[1], " recursive calls)") : formatComponentName(vm2));
              }).join("\n");
            } else {
              return "\n\n(found in ".concat(formatComponentName(vm), ")");
            }
          };
        }
        var strats = config.optionMergeStrategies;
        {
          strats.el = strats.propsData = function(parent, child, vm, key) {
            if (!vm) {
              warn$2('option "'.concat(key, '" can only be used during instance ') + "creation with the `new` keyword.");
            }
            return defaultStrat(parent, child);
          };
        }
        function mergeData(to, from) {
          if (!from)
            return to;
          var key, toVal, fromVal;
          var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === "__ob__")
              continue;
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn2(to, key)) {
              set(to, key, fromVal);
            } else if (toVal !== fromVal && isPlainObject2(toVal) && isPlainObject2(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function mergedDataFn() {
              return mergeData(isFunction2(childVal) ? childVal.call(this, this) : childVal, isFunction2(parentVal) ? parentVal.call(this, this) : parentVal);
            };
          } else {
            return function mergedInstanceDataFn() {
              var instanceData = isFunction2(childVal) ? childVal.call(vm, vm) : childVal;
              var defaultData = isFunction2(parentVal) ? parentVal.call(vm, vm) : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }
        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              warn$2('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }
          return mergeDataOrFn(parentVal, childVal, vm);
        };
        function mergeLifecycleHook(parentVal, childVal) {
          var res = childVal ? parentVal ? parentVal.concat(childVal) : isArray3(childVal) ? childVal : [childVal] : parentVal;
          return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks2) {
          var res = [];
          for (var i = 0; i < hooks2.length; i++) {
            if (res.indexOf(hooks2[i]) === -1) {
              res.push(hooks2[i]);
            }
          }
          return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
          strats[hook] = mergeLifecycleHook;
        });
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend2(res, childVal);
          } else {
            return res;
          }
        }
        ASSET_TYPES.forEach(function(type) {
          strats[type + "s"] = mergeAssets;
        });
        strats.watch = function(parentVal, childVal, vm, key) {
          if (parentVal === nativeWatch)
            parentVal = void 0;
          if (childVal === nativeWatch)
            childVal = void 0;
          if (!childVal)
            return Object.create(parentVal || null);
          {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal)
            return childVal;
          var ret = {};
          extend2(ret, parentVal);
          for (var key_1 in childVal) {
            var parent_1 = ret[key_1];
            var child = childVal[key_1];
            if (parent_1 && !isArray3(parent_1)) {
              parent_1 = [parent_1];
            }
            ret[key_1] = parent_1 ? parent_1.concat(child) : isArray3(child) ? child : [child];
          }
          return ret;
        };
        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
          if (childVal && true) {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal)
            return childVal;
          var ret = /* @__PURE__ */ Object.create(null);
          extend2(ret, parentVal);
          if (childVal)
            extend2(ret, childVal);
          return ret;
        };
        strats.provide = mergeDataOrFn;
        var defaultStrat = function(parentVal, childVal) {
          return childVal === void 0 ? parentVal : childVal;
        };
        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key);
          }
        }
        function validateComponentName(name) {
          if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
            warn$2('Invalid component name: "' + name + '". Component names should conform to valid custom element name in html5 specification.');
          }
          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn$2("Do not use built-in or reserved HTML elements as component id: " + name);
          }
        }
        function normalizeProps(options, vm) {
          var props2 = options.props;
          if (!props2)
            return;
          var res = {};
          var i, val, name;
          if (isArray3(props2)) {
            i = props2.length;
            while (i--) {
              val = props2[i];
              if (typeof val === "string") {
                name = camelize(val);
                res[name] = { type: null };
              } else {
                warn$2("props must be strings when using array syntax.");
              }
            }
          } else if (isPlainObject2(props2)) {
            for (var key in props2) {
              val = props2[key];
              name = camelize(key);
              res[name] = isPlainObject2(val) ? val : { type: val };
            }
          } else {
            warn$2('Invalid value for option "props": expected an Array or an Object, ' + "but got ".concat(toRawType(props2), "."), vm);
          }
          options.props = res;
        }
        function normalizeInject(options, vm) {
          var inject2 = options.inject;
          if (!inject2)
            return;
          var normalized = options.inject = {};
          if (isArray3(inject2)) {
            for (var i = 0; i < inject2.length; i++) {
              normalized[inject2[i]] = { from: inject2[i] };
            }
          } else if (isPlainObject2(inject2)) {
            for (var key in inject2) {
              var val = inject2[key];
              normalized[key] = isPlainObject2(val) ? extend2({ from: key }, val) : { from: val };
            }
          } else {
            warn$2('Invalid value for option "inject": expected an Array or an Object, ' + "but got ".concat(toRawType(inject2), "."), vm);
          }
        }
        function normalizeDirectives$1(options) {
          var dirs = options.directives;
          if (dirs) {
            for (var key in dirs) {
              var def2 = dirs[key];
              if (isFunction2(def2)) {
                dirs[key] = { bind: def2, update: def2 };
              }
            }
          }
        }
        function assertObjectType(name, value, vm) {
          if (!isPlainObject2(value)) {
            warn$2('Invalid value for option "'.concat(name, '": expected an Object, ') + "but got ".concat(toRawType(value), "."), vm);
          }
        }
        function mergeOptions(parent, child, vm) {
          {
            checkComponents(child);
          }
          if (isFunction2(child)) {
            child = child.options;
          }
          normalizeProps(child, vm);
          normalizeInject(child, vm);
          normalizeDirectives$1(child);
          if (!child._base) {
            if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
              }
            }
          }
          var options = {};
          var key;
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!hasOwn2(parent, key)) {
              mergeField(key);
            }
          }
          function mergeField(key2) {
            var strat = strats[key2] || defaultStrat;
            options[key2] = strat(parent[key2], child[key2], vm, key2);
          }
          return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
          if (typeof id !== "string") {
            return;
          }
          var assets = options[type];
          if (hasOwn2(assets, id))
            return assets[id];
          var camelizedId = camelize(id);
          if (hasOwn2(assets, camelizedId))
            return assets[camelizedId];
          var PascalCaseId = capitalize(camelizedId);
          if (hasOwn2(assets, PascalCaseId))
            return assets[PascalCaseId];
          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
          if (warnMissing && !res) {
            warn$2("Failed to resolve " + type.slice(0, -1) + ": " + id);
          }
          return res;
        }
        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key];
          var absent = !hasOwn2(propsData, key);
          var value = propsData[key];
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          if (booleanIndex > -1) {
            if (absent && !hasOwn2(prop, "default")) {
              value = false;
            } else if (value === "" || value === hyphenate(key)) {
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
              }
            }
          }
          if (value === void 0) {
            value = getPropDefaultValue(vm, prop, key);
            var prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
          }
          {
            assertProp(prop, key, value, vm, absent);
          }
          return value;
        }
        function getPropDefaultValue(vm, prop, key) {
          if (!hasOwn2(prop, "default")) {
            return void 0;
          }
          var def2 = prop.default;
          if (isObject3(def2)) {
            warn$2('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
          }
          if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
            return vm._props[key];
          }
          return isFunction2(def2) && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
        }
        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn$2('Missing required prop: "' + name + '"', vm);
            return;
          }
          if (value == null && !prop.required) {
            return;
          }
          var type = prop.type;
          var valid = !type || type === true;
          var expectedTypes = [];
          if (type) {
            if (!isArray3(type)) {
              type = [type];
            }
            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i], vm);
              expectedTypes.push(assertedType.expectedType || "");
              valid = assertedType.valid;
            }
          }
          var haveExpectedTypes = expectedTypes.some(function(t) {
            return t;
          });
          if (!valid && haveExpectedTypes) {
            warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
            return;
          }
          var validator = prop.validator;
          if (validator) {
            if (!validator(value)) {
              warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
            }
          }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
        function assertType(value, type, vm) {
          var valid;
          var expectedType = getType(type);
          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value;
            valid = t === expectedType.toLowerCase();
            if (!valid && t === "object") {
              valid = value instanceof type;
            }
          } else if (expectedType === "Object") {
            valid = isPlainObject2(value);
          } else if (expectedType === "Array") {
            valid = isArray3(value);
          } else {
            try {
              valid = value instanceof type;
            } catch (e) {
              warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
              valid = false;
            }
          }
          return {
            valid,
            expectedType
          };
        }
        var functionTypeCheckRE = /^\s*function (\w+)/;
        function getType(fn) {
          var match = fn && fn.toString().match(functionTypeCheckRE);
          return match ? match[1] : "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (!isArray3(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          for (var i = 0, len2 = expectedTypes.length; i < len2; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i;
            }
          }
          return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
          var message = 'Invalid prop: type check failed for prop "'.concat(name, '".') + " Expected ".concat(expectedTypes.map(capitalize).join(", "));
          var expectedType = expectedTypes[0];
          var receivedType = toRawType(value);
          if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean3(expectedType, receivedType)) {
            message += " with value ".concat(styleValue(value, expectedType));
          }
          message += ", got ".concat(receivedType, " ");
          if (isExplicable(receivedType)) {
            message += "with value ".concat(styleValue(value, receivedType), ".");
          }
          return message;
        }
        function styleValue(value, type) {
          if (type === "String") {
            return '"'.concat(value, '"');
          } else if (type === "Number") {
            return "".concat(Number(value));
          } else {
            return "".concat(value);
          }
        }
        var EXPLICABLE_TYPES = ["string", "number", "boolean"];
        function isExplicable(value) {
          return EXPLICABLE_TYPES.some(function(elem) {
            return value.toLowerCase() === elem;
          });
        }
        function isBoolean3() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return args.some(function(elem) {
            return elem.toLowerCase() === "boolean";
          });
        }
        function Vue2(options) {
          if (!(this instanceof Vue2)) {
            warn$2("Vue is a constructor and should be called with the `new` keyword");
          }
          this._init(options);
        }
        initMixin$1(Vue2);
        stateMixin(Vue2);
        eventsMixin(Vue2);
        lifecycleMixin(Vue2);
        renderMixin(Vue2);
        function initUse(Vue3) {
          Vue3.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
              return this;
            }
            var args = toArray2(arguments, 1);
            args.unshift(this);
            if (isFunction2(plugin.install)) {
              plugin.install.apply(plugin, args);
            } else if (isFunction2(plugin)) {
              plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
          };
        }
        function initMixin(Vue3) {
          Vue3.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
          };
        }
        function initExtend(Vue3) {
          Vue3.cid = 0;
          var cid = 1;
          Vue3.extend = function(extendOptions) {
            extendOptions = extendOptions || {};
            var Super = this;
            var SuperId = Super.cid;
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
            }
            var name = getComponentName(extendOptions) || getComponentName(Super.options);
            if (name) {
              validateComponentName(name);
            }
            var Sub = function VueComponent(options) {
              this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub["super"] = Super;
            if (Sub.options.props) {
              initProps(Sub);
            }
            if (Sub.options.computed) {
              initComputed(Sub);
            }
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;
            ASSET_TYPES.forEach(function(type) {
              Sub[type] = Super[type];
            });
            if (name) {
              Sub.options.components[name] = Sub;
            }
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend2({}, Sub.options);
            cachedCtors[SuperId] = Sub;
            return Sub;
          };
        }
        function initProps(Comp) {
          var props2 = Comp.options.props;
          for (var key in props2) {
            proxy(Comp.prototype, "_props", key);
          }
        }
        function initComputed(Comp) {
          var computed2 = Comp.options.computed;
          for (var key in computed2) {
            defineComputed(Comp.prototype, key, computed2[key]);
          }
        }
        function initAssetRegisters(Vue3) {
          ASSET_TYPES.forEach(function(type) {
            Vue3[type] = function(id, definition) {
              if (!definition) {
                return this.options[type + "s"][id];
              } else {
                if (type === "component") {
                  validateComponentName(id);
                }
                if (type === "component" && isPlainObject2(definition)) {
                  definition.name = definition.name || id;
                  definition = this.options._base.extend(definition);
                }
                if (type === "directive" && isFunction2(definition)) {
                  definition = { bind: definition, update: definition };
                }
                this.options[type + "s"][id] = definition;
                return definition;
              }
            };
          });
        }
        function _getComponentName(opts2) {
          return opts2 && (getComponentName(opts2.Ctor.options) || opts2.tag);
        }
        function matches(pattern, name) {
          if (isArray3(pattern)) {
            return pattern.indexOf(name) > -1;
          } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1;
          } else if (isRegExp2(pattern)) {
            return pattern.test(name);
          }
          return false;
        }
        function pruneCache(keepAliveInstance, filter2) {
          var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
          for (var key in cache) {
            var entry = cache[key];
            if (entry) {
              var name_1 = entry.name;
              if (name_1 && !filter2(name_1)) {
                pruneCacheEntry(cache, key, keys, _vnode);
              }
            }
          }
        }
        function pruneCacheEntry(cache, key, keys, current) {
          var entry = cache[key];
          if (entry && (!current || entry.tag !== current.tag)) {
            entry.componentInstance.$destroy();
          }
          cache[key] = null;
          remove$2(keys, key);
        }
        var patternTypes = [String, RegExp, Array];
        var KeepAlive = {
          name: "keep-alive",
          abstract: true,
          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
          },
          methods: {
            cacheVNode: function() {
              var _a2 = this, cache = _a2.cache, keys = _a2.keys, vnodeToCache = _a2.vnodeToCache, keyToCache = _a2.keyToCache;
              if (vnodeToCache) {
                var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                  name: _getComponentName(componentOptions),
                  tag,
                  componentInstance
                };
                keys.push(keyToCache);
                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
              }
            }
          },
          created: function() {
            this.cache = /* @__PURE__ */ Object.create(null);
            this.keys = [];
          },
          destroyed: function() {
            for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys);
            }
          },
          mounted: function() {
            var _this = this;
            this.cacheVNode();
            this.$watch("include", function(val) {
              pruneCache(_this, function(name) {
                return matches(val, name);
              });
            });
            this.$watch("exclude", function(val) {
              pruneCache(_this, function(name) {
                return !matches(val, name);
              });
            });
          },
          updated: function() {
            this.cacheVNode();
          },
          render: function() {
            var slot = this.$slots.default;
            var vnode = getFirstComponentChild(slot);
            var componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
              var name_2 = _getComponentName(componentOptions);
              var _a2 = this, include = _a2.include, exclude = _a2.exclude;
              if (include && (!name_2 || !matches(include, name_2)) || exclude && name_2 && matches(exclude, name_2)) {
                return vnode;
              }
              var _b = this, cache = _b.cache, keys = _b.keys;
              var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::".concat(componentOptions.tag) : "") : vnode.key;
              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                remove$2(keys, key);
                keys.push(key);
              } else {
                this.vnodeToCache = vnode;
                this.keyToCache = key;
              }
              vnode.data.keepAlive = true;
            }
            return vnode || slot && slot[0];
          }
        };
        var builtInComponents = {
          KeepAlive
        };
        function initGlobalAPI(Vue3) {
          var configDef = {};
          configDef.get = function() {
            return config;
          };
          {
            configDef.set = function() {
              warn$2("Do not replace the Vue.config object, set individual fields instead.");
            };
          }
          Object.defineProperty(Vue3, "config", configDef);
          Vue3.util = {
            warn: warn$2,
            extend: extend2,
            mergeOptions,
            defineReactive
          };
          Vue3.set = set;
          Vue3.delete = del;
          Vue3.nextTick = nextTick;
          Vue3.observable = function(obj) {
            observe(obj);
            return obj;
          };
          Vue3.options = /* @__PURE__ */ Object.create(null);
          ASSET_TYPES.forEach(function(type) {
            Vue3.options[type + "s"] = /* @__PURE__ */ Object.create(null);
          });
          Vue3.options._base = Vue3;
          extend2(Vue3.options.components, builtInComponents);
          initUse(Vue3);
          initMixin(Vue3);
          initExtend(Vue3);
          initAssetRegisters(Vue3);
        }
        initGlobalAPI(Vue2);
        Object.defineProperty(Vue2.prototype, "$isServer", {
          get: isServerRendering
        });
        Object.defineProperty(Vue2.prototype, "$ssrContext", {
          get: function() {
            return this.$vnode && this.$vnode.ssrContext;
          }
        });
        Object.defineProperty(Vue2, "FunctionalRenderContext", {
          value: FunctionalRenderContext
        });
        Vue2.version = version;
        var isReservedAttr = makeMap("style,class");
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function(tag, type, attr) {
          return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
        var convertEnumeratedValue = function(key, value) {
          return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
        };
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var isXlink = function(name) {
          return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };
        var getXlinkProp = function(name) {
          return isXlink(name) ? name.slice(6, name.length) : "";
        };
        var isFalsyAttrValue = function(val) {
          return val == null || val === false;
        };
        function genClassForVnode(vnode) {
          var data = vnode.data;
          var parentNode2 = vnode;
          var childNode = vnode;
          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
            }
          }
          while (isDef(parentNode2 = parentNode2.parent)) {
            if (parentNode2 && parentNode2.data) {
              data = mergeClassData(data, parentNode2.data);
            }
          }
          return renderClass(data.staticClass, data.class);
        }
        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class) ? [child.class, parent.class] : parent.class
          };
        }
        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
          }
          return "";
        }
        function concat(a, b) {
          return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value);
          }
          if (isObject3(value)) {
            return stringifyObject(value);
          }
          if (typeof value === "string") {
            return value;
          }
          return "";
        }
        function stringifyArray(value) {
          var res = "";
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
              if (res)
                res += " ";
              res += stringified;
            }
          }
          return res;
        }
        function stringifyObject(value) {
          var res = "";
          for (var key in value) {
            if (value[key]) {
              if (res)
                res += " ";
              res += key;
            }
          }
          return res;
        }
        var namespaceMap = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function(tag) {
          return tag === "pre";
        };
        var isReservedTag = function(tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          if (tag === "math") {
            return "math";
          }
        }
        var unknownElementCache = /* @__PURE__ */ Object.create(null);
        function isUnknownElement(tag) {
          if (!inBrowser) {
            return true;
          }
          if (isReservedTag(tag)) {
            return false;
          }
          tag = tag.toLowerCase();
          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
          }
          var el = document.createElement(tag);
          if (tag.indexOf("-") > -1) {
            return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
          } else {
            return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
          }
        }
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        function query(el) {
          if (typeof el === "string") {
            var selected = document.querySelector(el);
            if (!selected) {
              warn$2("Cannot find element: " + el);
              return document.createElement("div");
            }
            return selected;
          } else {
            return el;
          }
        }
        function createElement(tagName2, vnode) {
          var elm = document.createElement(tagName2);
          if (tagName2 !== "select") {
            return elm;
          }
          if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
            elm.setAttribute("multiple", "multiple");
          }
          return elm;
        }
        function createElementNS(namespace, tagName2) {
          return document.createElementNS(namespaceMap[namespace], tagName2);
        }
        function createTextNode(text2) {
          return document.createTextNode(text2);
        }
        function createComment(text2) {
          return document.createComment(text2);
        }
        function insertBefore(parentNode2, newNode, referenceNode) {
          parentNode2.insertBefore(newNode, referenceNode);
        }
        function removeChild(node, child) {
          node.removeChild(child);
        }
        function appendChild(node, child) {
          node.appendChild(child);
        }
        function parentNode(node) {
          return node.parentNode;
        }
        function nextSibling(node) {
          return node.nextSibling;
        }
        function tagName(node) {
          return node.tagName;
        }
        function setTextContent(node, text2) {
          node.textContent = text2;
        }
        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, "");
        }
        var nodeOps = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          createElement,
          createElementNS,
          createTextNode,
          createComment,
          insertBefore,
          removeChild,
          appendChild,
          parentNode,
          nextSibling,
          tagName,
          setTextContent,
          setStyleScope
        });
        var ref = {
          create: function(_, vnode) {
            registerRef(vnode);
          },
          update: function(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
            }
          },
          destroy: function(vnode) {
            registerRef(vnode, true);
          }
        };
        function registerRef(vnode, isRemoval) {
          var ref2 = vnode.data.ref;
          if (!isDef(ref2))
            return;
          var vm = vnode.context;
          var refValue = vnode.componentInstance || vnode.elm;
          var value = isRemoval ? null : refValue;
          var $refsValue = isRemoval ? void 0 : refValue;
          if (isFunction2(ref2)) {
            invokeWithErrorHandling(ref2, vm, [value], vm, "template ref function");
            return;
          }
          var isFor = vnode.data.refInFor;
          var _isString = typeof ref2 === "string" || typeof ref2 === "number";
          var _isRef = isRef(ref2);
          var refs = vm.$refs;
          if (_isString || _isRef) {
            if (isFor) {
              var existing = _isString ? refs[ref2] : ref2.value;
              if (isRemoval) {
                isArray3(existing) && remove$2(existing, refValue);
              } else {
                if (!isArray3(existing)) {
                  if (_isString) {
                    refs[ref2] = [refValue];
                    setSetupRef(vm, ref2, refs[ref2]);
                  } else {
                    ref2.value = [refValue];
                  }
                } else if (!existing.includes(refValue)) {
                  existing.push(refValue);
                }
              }
            } else if (_isString) {
              if (isRemoval && refs[ref2] !== refValue) {
                return;
              }
              refs[ref2] = $refsValue;
              setSetupRef(vm, ref2, value);
            } else if (_isRef) {
              if (isRemoval && ref2.value !== refValue) {
                return;
              }
              ref2.value = value;
            } else {
              warn$2("Invalid template ref type: ".concat(typeof ref2));
            }
          }
        }
        function setSetupRef(_a2, key, val) {
          var _setupState = _a2._setupState;
          if (_setupState && hasOwn2(_setupState, key)) {
            if (isRef(_setupState[key])) {
              _setupState[key].value = val;
            } else {
              _setupState[key] = val;
            }
          }
        }
        var emptyNode = new VNode("", {}, []);
        var hooks = ["create", "activate", "update", "remove", "destroy"];
        function sameVnode(a, b) {
          return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
        }
        function sameInputType(a, b) {
          if (a.tag !== "input")
            return true;
          var i;
          var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
          var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
          return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key;
          var map = {};
          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key))
              map[key] = i;
          }
          return map;
        }
        function createPatchFunction(backend) {
          var i, j;
          var cbs = {};
          var modules2 = backend.modules, nodeOps2 = backend.nodeOps;
          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules2.length; ++j) {
              if (isDef(modules2[j][hooks[i]])) {
                cbs[hooks[i]].push(modules2[j][hooks[i]]);
              }
            }
          }
          function emptyNodeAt(elm) {
            return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
          }
          function createRmCb(childElm, listeners) {
            function remove2() {
              if (--remove2.listeners === 0) {
                removeNode(childElm);
              }
            }
            remove2.listeners = listeners;
            return remove2;
          }
          function removeNode(el) {
            var parent = nodeOps2.parentNode(el);
            if (isDef(parent)) {
              nodeOps2.removeChild(parent, el);
            }
          }
          function isUnknownElement2(vnode, inVPre) {
            return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
              return isRegExp2(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
            })) && config.isUnknownElement(vnode.tag);
          }
          var creatingElmInVPre = 0;
          function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            vnode.isRootInsert = !nested;
            if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
            }
            var data = vnode.data;
            var children = vnode.children;
            var tag = vnode.tag;
            if (isDef(tag)) {
              {
                if (data && data.pre) {
                  creatingElmInVPre++;
                }
                if (isUnknownElement2(vnode, creatingElmInVPre)) {
                  warn$2("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context);
                }
              }
              vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
              setScope(vnode);
              createChildren(vnode, children, insertedVnodeQueue);
              if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
              }
              insert(parentElm, vnode.elm, refElm);
              if (data && data.pre) {
                creatingElmInVPre--;
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps2.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps2.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }
          function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2 = vnode.data;
            if (isDef(i2)) {
              var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
              if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
                i2(vnode, false);
              }
              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                  reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
              }
            }
          }
          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
              vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
            } else {
              registerRef(vnode);
              insertedVnodeQueue.push(vnode);
            }
          }
          function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2;
            var innerNode = vnode;
            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
                for (i2 = 0; i2 < cbs.activate.length; ++i2) {
                  cbs.activate[i2](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
              }
            }
            insert(parentElm, vnode.elm, refElm);
          }
          function insert(parent, elm, ref2) {
            if (isDef(parent)) {
              if (isDef(ref2)) {
                if (nodeOps2.parentNode(ref2) === parent) {
                  nodeOps2.insertBefore(parent, elm, ref2);
                }
              } else {
                nodeOps2.appendChild(parent, elm);
              }
            }
          }
          function createChildren(vnode, children, insertedVnodeQueue) {
            if (isArray3(children)) {
              {
                checkDuplicateKeys(children);
              }
              for (var i_1 = 0; i_1 < children.length; ++i_1) {
                createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
            }
          }
          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
          }
          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
              cbs.create[i_2](emptyNode, vnode);
            }
            i = vnode.data.hook;
            if (isDef(i)) {
              if (isDef(i.create))
                i.create(emptyNode, vnode);
              if (isDef(i.insert))
                insertedVnodeQueue.push(vnode);
            }
          }
          function setScope(vnode) {
            var i2;
            if (isDef(i2 = vnode.fnScopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            } else {
              var ancestor = vnode;
              while (ancestor) {
                if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
                  nodeOps2.setStyleScope(vnode.elm, i2);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            }
          }
          function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
            }
          }
          function invokeDestroyHook(vnode) {
            var i2, j2;
            var data = vnode.data;
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy))
                i2(vnode);
              for (i2 = 0; i2 < cbs.destroy.length; ++i2)
                cbs.destroy[i2](vnode);
            }
            if (isDef(i2 = vnode.children)) {
              for (j2 = 0; j2 < vnode.children.length; ++j2) {
                invokeDestroyHook(vnode.children[j2]);
              }
            }
          }
          function removeVnodes(vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch);
                  invokeDestroyHook(ch);
                } else {
                  removeNode(ch.elm);
                }
              }
            }
          }
          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i_3;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                rm.listeners += listeners;
              } else {
                rm = createRmCb(vnode.elm, listeners);
              }
              if (isDef(i_3 = vnode.componentInstance) && isDef(i_3 = i_3._vnode) && isDef(i_3.data)) {
                removeAndInvokeRemoveHook(i_3, rm);
              }
              for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                cbs.remove[i_3](vnode, rm);
              }
              if (isDef(i_3 = vnode.data.hook) && isDef(i_3 = i_3.remove)) {
                i_3(vnode, rm);
              } else {
                rm();
              }
            } else {
              removeNode(vnode.elm);
            }
          }
          function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0;
            var newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
            var canMove = !removeOnly;
            {
              checkDuplicateKeys(newCh);
            }
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx];
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (isUndef(oldKeyToIdx))
                  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                } else {
                  vnodeToMove = oldCh[idxInOld];
                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    oldCh[idxInOld] = void 0;
                    canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                  } else {
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  }
                }
                newStartVnode = newCh[++newStartIdx];
              }
            }
            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
              addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(oldCh, oldStartIdx, oldEndIdx);
            }
          }
          function checkDuplicateKeys(children) {
            var seenKeys = {};
            for (var i_4 = 0; i_4 < children.length; i_4++) {
              var vnode = children[i_4];
              var key = vnode.key;
              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn$2("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                } else {
                  seenKeys[key] = true;
                }
              }
            }
          }
          function findIdxInOld(node, oldCh, start, end) {
            for (var i_5 = start; i_5 < end; i_5++) {
              var c = oldCh[i_5];
              if (isDef(c) && sameVnode(node, c))
                return i_5;
            }
          }
          function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
            if (oldVnode === vnode) {
              return;
            }
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            var elm = vnode.elm = oldVnode.elm;
            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              } else {
                vnode.isAsyncPlaceholder = true;
              }
              return;
            }
            if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
            }
            var i2;
            var data = vnode.data;
            if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
              i2(oldVnode, vnode);
            }
            var oldCh = oldVnode.children;
            var ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
              for (i2 = 0; i2 < cbs.update.length; ++i2)
                cbs.update[i2](oldVnode, vnode);
              if (isDef(i2 = data.hook) && isDef(i2 = i2.update))
                i2(oldVnode, vnode);
            }
            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                  updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              } else if (isDef(ch)) {
                {
                  checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text))
                  nodeOps2.setTextContent(elm, "");
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
              } else if (isDef(oldVnode.text)) {
                nodeOps2.setTextContent(elm, "");
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps2.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch))
                i2(oldVnode, vnode);
            }
          }
          function invokeInsertHook(vnode, queue2, initial) {
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue2;
            } else {
              for (var i_6 = 0; i_6 < queue2.length; ++i_6) {
                queue2[i_6].data.hook.insert(queue2[i_6]);
              }
            }
          }
          var hydrationBailed = false;
          var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i2;
            var tag = vnode.tag, data = vnode.data, children = vnode.children;
            inVPre = inVPre || data && data.pre;
            vnode.elm = elm;
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
            }
            {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
              }
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.init))
                i2(vnode, true);
              if (isDef(i2 = vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                return true;
              }
            }
            if (isDef(tag)) {
              if (isDef(children)) {
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue);
                } else {
                  if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                    if (i2 !== elm.innerHTML) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("server innerHTML: ", i2);
                        console.warn("client innerHTML: ", elm.innerHTML);
                      }
                      return false;
                    }
                  } else {
                    var childrenMatch = true;
                    var childNode = elm.firstChild;
                    for (var i_7 = 0; i_7 < children.length; i_7++) {
                      if (!childNode || !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                        childrenMatch = false;
                        break;
                      }
                      childNode = childNode.nextSibling;
                    }
                    if (!childrenMatch || childNode) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                      }
                      return false;
                    }
                  }
                }
              }
              if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                  }
                }
                if (!fullInvoke && data["class"]) {
                  traverse(data["class"]);
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
            }
            return true;
          }
          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement2(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
            }
          }
          return function patch2(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode))
                invokeDestroyHook(oldVnode);
              return;
            }
            var isInitialPatch = false;
            var insertedVnodeQueue = [];
            if (isUndef(oldVnode)) {
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue);
            } else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
              } else {
                if (isRealElement) {
                  if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                  }
                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true);
                      return oldVnode;
                    } else {
                      warn$2("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                    }
                  }
                  oldVnode = emptyNodeAt(oldVnode);
                }
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps2.parentNode(oldElm);
                createElm(
                  vnode,
                  insertedVnodeQueue,
                  oldElm._leaveCb ? null : parentElm,
                  nodeOps2.nextSibling(oldElm)
                );
                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent;
                  var patchable = isPatchable(vnode);
                  while (ancestor) {
                    for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                      cbs.destroy[i_8](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                      for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                        cbs.create[i_9](emptyNode, ancestor);
                      }
                      var insert_1 = ancestor.data.hook.insert;
                      if (insert_1.merged) {
                        for (var i_10 = 1; i_10 < insert_1.fns.length; i_10++) {
                          insert_1.fns[i_10]();
                        }
                      }
                    } else {
                      registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                  }
                }
                if (isDef(parentElm)) {
                  removeVnodes([oldVnode], 0, 0);
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode);
                }
              }
            }
            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
          };
        }
        var directives$1 = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode);
          }
        };
        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
          }
        }
        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode;
          var isDestroy = vnode === emptyNode;
          var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
          var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
          var dirsWithInsert = [];
          var dirsWithPostpatch = [];
          var key, oldDir, dir;
          for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
              callHook(dir, "bind", vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
              }
            } else {
              dir.oldValue = oldDir.value;
              dir.oldArg = oldDir.arg;
              callHook(dir, "update", vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
              }
            }
          }
          if (dirsWithInsert.length) {
            var callInsert = function() {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], "inserted", vnode, oldVnode);
              }
            };
            if (isCreate) {
              mergeVNodeHook(vnode, "insert", callInsert);
            } else {
              callInsert();
            }
          }
          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, "postpatch", function() {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
              }
            });
          }
          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                callHook(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
              }
            }
          }
        }
        var emptyModifiers = /* @__PURE__ */ Object.create(null);
        function normalizeDirectives(dirs, vm) {
          var res = /* @__PURE__ */ Object.create(null);
          if (!dirs) {
            return res;
          }
          var i, dir;
          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
              dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            if (vm._setupState && vm._setupState.__sfc) {
              var setupDef = dir.def || resolveAsset(vm, "_setupState", "v-" + dir.name);
              if (typeof setupDef === "function") {
                dir.def = {
                  bind: setupDef,
                  update: setupDef
                };
              } else {
                dir.def = setupDef;
              }
            }
            dir.def = dir.def || resolveAsset(vm.$options, "directives", dir.name, true);
          }
          return res;
        }
        function getRawDirName(dir) {
          return dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join("."));
        }
        function callHook(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook];
          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
              handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
            }
          }
        }
        var baseModules = [ref, directives$1];
        function updateAttrs(oldVnode, vnode) {
          var opts2 = vnode.componentOptions;
          if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
            return;
          }
          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
          }
          var key, cur, old;
          var elm = vnode.elm;
          var oldAttrs = oldVnode.data.attrs || {};
          var attrs2 = vnode.data.attrs || {};
          if (isDef(attrs2.__ob__) || isTrue(attrs2._v_attr_proxy)) {
            attrs2 = vnode.data.attrs = extend2({}, attrs2);
          }
          for (key in attrs2) {
            cur = attrs2[key];
            old = oldAttrs[key];
            if (old !== cur) {
              setAttr(elm, key, cur, vnode.data.pre);
            }
          }
          if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
            setAttr(elm, "value", attrs2.value);
          }
          for (key in oldAttrs) {
            if (isUndef(attrs2[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
              }
            }
          }
        }
        function setAttr(el, key, value, isInPre) {
          if (isInPre || el.tagName.indexOf("-") > -1) {
            baseSetAttr(el, key, value);
          } else if (isBooleanAttr(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
              el.setAttribute(key, value);
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(key, convertEnumeratedValue(key, value));
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            baseSetAttr(el, key, value);
          }
        }
        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
              var blocker_1 = function(e) {
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker_1);
              };
              el.addEventListener("input", blocker_1);
              el.__ieph = true;
            }
            el.setAttribute(key, value);
          }
        }
        var attrs = {
          create: updateAttrs,
          update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
          var el = vnode.elm;
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
            return;
          }
          var cls = genClassForVnode(vnode);
          var transitionClass = el._transitionClasses;
          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
          }
          if (cls !== el._prevClass) {
            el.setAttribute("class", cls);
            el._prevClass = cls;
          }
        }
        var klass$1 = {
          create: updateClass,
          update: updateClass
        };
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;
          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 39 && prev !== 92)
                inSingle = false;
            } else if (inDouble) {
              if (c === 34 && prev !== 92)
                inDouble = false;
            } else if (inTemplateString) {
              if (c === 96 && prev !== 92)
                inTemplateString = false;
            } else if (inRegex) {
              if (c === 47 && prev !== 92)
                inRegex = false;
            } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
              if (expression === void 0) {
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 34:
                  inDouble = true;
                  break;
                case 39:
                  inSingle = true;
                  break;
                case 96:
                  inTemplateString = true;
                  break;
                case 40:
                  paren++;
                  break;
                case 41:
                  paren--;
                  break;
                case 91:
                  square++;
                  break;
                case 93:
                  square--;
                  break;
                case 123:
                  curly++;
                  break;
                case 125:
                  curly--;
                  break;
              }
              if (c === 47) {
                var j = i - 1;
                var p = void 0;
                for (; j >= 0; j--) {
                  p = exp.charAt(j);
                  if (p !== " ")
                    break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                  inRegex = true;
                }
              }
            }
          }
          if (expression === void 0) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }
          function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
          }
          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }
          return expression;
        }
        function wrapFilter(exp, filter2) {
          var i = filter2.indexOf("(");
          if (i < 0) {
            return '_f("'.concat(filter2, '")(').concat(exp, ")");
          } else {
            var name_1 = filter2.slice(0, i);
            var args = filter2.slice(i + 1);
            return '_f("'.concat(name_1, '")(').concat(exp).concat(args !== ")" ? "," + args : args);
          }
        }
        function baseWarn(msg, range2) {
          console.error("[Vue compiler]: ".concat(msg));
        }
        function pluckModuleFunction(modules2, key) {
          return modules2 ? modules2.map(function(m) {
            return m[key];
          }).filter(function(_) {
            return _;
          }) : [];
        }
        function addProp(el, name, value, range2, dynamic) {
          (el.props || (el.props = [])).push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addAttr(el, name, value, range2, dynamic) {
          var attrs2 = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
          attrs2.push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addRawAttr(el, name, value, range2) {
          el.attrsMap[name] = value;
          el.attrsList.push(rangeSetItem({ name, value }, range2));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range2) {
          (el.directives || (el.directives = [])).push(rangeSetItem({
            name,
            rawName,
            value,
            arg,
            isDynamicArg,
            modifiers
          }, range2));
          el.plain = false;
        }
        function prependModifierMarker(symbol, name, dynamic) {
          return dynamic ? "_p(".concat(name, ',"').concat(symbol, '")') : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn2, range2, dynamic) {
          modifiers = modifiers || emptyObject;
          if (warn2 && modifiers.prevent && modifiers.passive) {
            warn2("passive and prevent can't be used together. Passive handler can't prevent default event.", range2);
          }
          if (modifiers.right) {
            if (dynamic) {
              name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
            } else if (name === "click") {
              name = "contextmenu";
              delete modifiers.right;
            }
          } else if (modifiers.middle) {
            if (dynamic) {
              name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
            } else if (name === "click") {
              name = "mouseup";
            }
          }
          if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker("!", name, dynamic);
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker("~", name, dynamic);
          }
          if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker("&", name, dynamic);
          }
          var events2;
          if (modifiers.native) {
            delete modifiers.native;
            events2 = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events2 = el.events || (el.events = {});
          }
          var newHandler = rangeSetItem({ value: value.trim(), dynamic }, range2);
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }
          var handlers = events2[name];
          if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
          } else if (handlers) {
            events2[name] = important ? [newHandler, handlers] : [handlers, newHandler];
          } else {
            events2[name] = newHandler;
          }
          el.plain = false;
        }
        function getRawBindingAttr(el, name) {
          return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
        }
        function getBindingAttr(el, name, getStatic) {
          var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }
        function getAndRemoveAttrByRegex(el, name) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            var attr = list[i];
            if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
            }
          }
        }
        function rangeSetItem(item, range2) {
          if (range2) {
            if (range2.start != null) {
              item.start = range2.start;
            }
            if (range2.end != null) {
              item.end = range2.end;
            }
          }
          return item;
        }
        function genComponentModel(el, value, modifiers) {
          var _a2 = modifiers || {}, number = _a2.number, trim2 = _a2.trim;
          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim2) {
            valueExpression = "(typeof ".concat(baseValueExpression, " === 'string'") + "? ".concat(baseValueExpression, ".trim()") + ": ".concat(baseValueExpression, ")");
          }
          if (number) {
            valueExpression = "_n(".concat(valueExpression, ")");
          }
          var assignment = genAssignmentCode(value, valueExpression);
          el.model = {
            value: "(".concat(value, ")"),
            expression: JSON.stringify(value),
            callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
          };
        }
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return "".concat(value, "=").concat(assignment);
          } else {
            return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
          }
        }
        var len, str, chr, index, expressionPos, expressionEndPos;
        function parseModel(val) {
          val = val.trim();
          len = val.length;
          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index = val.lastIndexOf(".");
            if (index > -1) {
              return {
                exp: val.slice(0, index),
                key: '"' + val.slice(index + 1) + '"'
              };
            } else {
              return {
                exp: val,
                key: null
              };
            }
          }
          str = val;
          index = expressionPos = expressionEndPos = 0;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 91) {
              parseBracket(chr);
            }
          }
          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
          };
        }
        function next() {
          return str.charCodeAt(++index);
        }
        function eof() {
          return index >= len;
        }
        function isStringStart(chr2) {
          return chr2 === 34 || chr2 === 39;
        }
        function parseBracket(chr2) {
          var inBracket = 1;
          expressionPos = index;
          while (!eof()) {
            chr2 = next();
            if (isStringStart(chr2)) {
              parseString(chr2);
              continue;
            }
            if (chr2 === 91)
              inBracket++;
            if (chr2 === 93)
              inBracket--;
            if (inBracket === 0) {
              expressionEndPos = index;
              break;
            }
          }
        }
        function parseString(chr2) {
          var stringQuote = chr2;
          while (!eof()) {
            chr2 = next();
            if (chr2 === stringQuote) {
              break;
            }
          }
        }
        var warn$1;
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";
        function model$1(el, dir, _warn) {
          warn$1 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;
          {
            if (tag === "input" && type === "file") {
              warn$1("<".concat(el.tag, ' v-model="').concat(value, '" type="file">:\n') + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap["v-model"]);
            }
          }
          if (el.component) {
            genComponentModel(el, value, modifiers);
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            return false;
          } else {
            warn$1("<".concat(el.tag, ' v-model="').concat(value, '">: ') + "v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.", el.rawAttrsMap["v-model"]);
          }
          return true;
        }
        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(el, "checked", "Array.isArray(".concat(value, ")") + "?_i(".concat(value, ",").concat(valueBinding, ")>-1") + (trueValueBinding === "true" ? ":(".concat(value, ")") : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
          addHandler(el, "change", "var $$a=".concat(value, ",") + "$$el=$event.target," + "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") + "if(Array.isArray($$a)){" + "var $$v=".concat(number ? "_n(" + valueBinding + ")" : valueBinding, ",") + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, "$$a.concat([$$v])"), ")}") + "else{$$i>-1&&(".concat(genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))"), ")}") + "}else{".concat(genAssignmentCode(value, "$$c"), "}"), null, true);
        }
        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
          addProp(el, "checked", "_q(".concat(value, ",").concat(valueBinding, ")"));
          addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' + "return ".concat(number ? "_n(val)" : "val", "})");
          var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = ".concat(selectedVal, ";");
          code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
          addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;
          {
            var value_1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
            var typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
            if (value_1 && !typeBinding) {
              var binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
              warn$1("".concat(binding, '="').concat(value_1, '" conflicts with v-model on the same element ') + "because the latter already expands to a value binding internally", el.rawAttrsMap[binding]);
            }
          }
          var _a2 = modifiers || {}, lazy = _a2.lazy, number = _a2.number, trim2 = _a2.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
          var valueExpression = "$event.target.value";
          if (trim2) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(".concat(valueExpression, ")");
          }
          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;".concat(code);
          }
          addProp(el, "value", "(".concat(value, ")"));
          addHandler(el, event, code, null, true);
          if (trim2 || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }
        function normalizeEvents(on2) {
          if (isDef(on2[RANGE_TOKEN])) {
            var event_1 = isIE ? "change" : "input";
            on2[event_1] = [].concat(on2[RANGE_TOKEN], on2[event_1] || []);
            delete on2[RANGE_TOKEN];
          }
          if (isDef(on2[CHECKBOX_RADIO_TOKEN])) {
            on2.change = [].concat(on2[CHECKBOX_RADIO_TOKEN], on2.change || []);
            delete on2[CHECKBOX_RADIO_TOKEN];
          }
        }
        var target;
        function createOnceHandler(event, handler, capture) {
          var _target = target;
          return function onceHandler() {
            var res = handler.apply(null, arguments);
            if (res !== null) {
              remove(event, onceHandler, capture, _target);
            }
          };
        }
        var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
        function add(name, handler, capture, passive) {
          if (useMicrotaskFix) {
            var attachedTimestamp_1 = currentFlushTimestamp;
            var original_1 = handler;
            handler = original_1._wrapper = function(e) {
              if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp_1 || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
                return original_1.apply(this, arguments);
              }
            };
          }
          target.addEventListener(name, handler, supportsPassive ? { capture, passive } : capture);
        }
        function remove(name, handler, capture, _target) {
          (_target || target).removeEventListener(
            name,
            handler._wrapper || handler,
            capture
          );
        }
        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
          }
          var on2 = vnode.data.on || {};
          var oldOn = oldVnode.data.on || {};
          target = vnode.elm || oldVnode.elm;
          normalizeEvents(on2);
          updateListeners(on2, oldOn, add, remove, createOnceHandler, vnode.context);
          target = void 0;
        }
        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners,
          destroy: function(vnode) {
            return updateDOMListeners(vnode, emptyNode);
          }
        };
        var svgContainer;
        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
          }
          var key, cur;
          var elm = vnode.elm;
          var oldProps = oldVnode.data.domProps || {};
          var props2 = vnode.data.domProps || {};
          if (isDef(props2.__ob__) || isTrue(props2._v_attr_proxy)) {
            props2 = vnode.data.domProps = extend2({}, props2);
          }
          for (key in oldProps) {
            if (!(key in props2)) {
              elm[key] = "";
            }
          }
          for (key in props2) {
            cur = props2[key];
            if (key === "textContent" || key === "innerHTML") {
              if (vnode.children)
                vnode.children.length = 0;
              if (cur === oldProps[key])
                continue;
              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
              }
            }
            if (key === "value" && elm.tagName !== "PROGRESS") {
              elm._value = cur;
              var strCur = isUndef(cur) ? "" : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
              }
            } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
              svgContainer = svgContainer || document.createElement("div");
              svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
              var svg = svgContainer.firstChild;
              while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
              }
              while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
              }
            } else if (cur !== oldProps[key]) {
              try {
                elm[key] = cur;
              } catch (e) {
              }
            }
          }
        }
        function shouldUpdateValue(elm, checkVal) {
          return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
        }
        function isNotInFocusAndDirty(elm, checkVal) {
          var notInFocus = true;
          try {
            notInFocus = document.activeElement !== elm;
          } catch (e) {
          }
          return notInFocus && elm.value !== checkVal;
        }
        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value;
          var modifiers = elm._vModifiers;
          if (isDef(modifiers)) {
            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
              return value.trim() !== newVal.trim();
            }
          }
          return value !== newVal;
        }
        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps
        };
        var parseStyleText = cached(function(cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function(item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });
        function normalizeStyleData(data) {
          var style2 = normalizeStyleBinding(data.style);
          return data.staticStyle ? extend2(data.staticStyle, style2) : style2;
        }
        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
          }
          if (typeof bindingStyle === "string") {
            return parseStyleText(bindingStyle);
          }
          return bindingStyle;
        }
        function getStyle(vnode, checkChild) {
          var res = {};
          var styleData;
          if (checkChild) {
            var childNode = vnode;
            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                extend2(res, styleData);
              }
            }
          }
          if (styleData = normalizeStyleData(vnode.data)) {
            extend2(res, styleData);
          }
          var parentNode2 = vnode;
          while (parentNode2 = parentNode2.parent) {
            if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
              extend2(res, styleData);
            }
          }
          return res;
        }
        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function(el, name, val) {
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
          } else if (importantRE.test(val)) {
            el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
          } else {
            var normalizedName = normalize(name);
            if (Array.isArray(val)) {
              for (var i = 0, len2 = val.length; i < len2; i++) {
                el.style[normalizedName] = val[i];
              }
            } else {
              el.style[normalizedName] = val;
            }
          }
        };
        var vendorNames = ["Webkit", "Moz", "ms"];
        var emptyStyle;
        var normalize = cached(function(prop) {
          emptyStyle = emptyStyle || document.createElement("div").style;
          prop = camelize(prop);
          if (prop !== "filter" && prop in emptyStyle) {
            return prop;
          }
          var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
          for (var i = 0; i < vendorNames.length; i++) {
            var name_1 = vendorNames[i] + capName;
            if (name_1 in emptyStyle) {
              return name_1;
            }
          }
        });
        function updateStyle(oldVnode, vnode) {
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
            return;
          }
          var cur, name;
          var el = vnode.elm;
          var oldStaticStyle = oldData.staticStyle;
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
          var oldStyle = oldStaticStyle || oldStyleBinding;
          var style2 = normalizeStyleBinding(vnode.data.style) || {};
          vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend2({}, style2) : style2;
          var newStyle = getStyle(vnode, true);
          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, "");
            }
          }
          for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
              setProp(el, name, cur == null ? "" : cur);
            }
          }
        }
        var style$1 = {
          create: updateStyle,
          update: updateStyle
        };
        var whitespaceRE$1 = /\s+/;
        function addClass2(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE$1).forEach(function(c) {
                return el.classList.add(c);
              });
            } else {
              el.classList.add(cls);
            }
          } else {
            var cur = " ".concat(el.getAttribute("class") || "", " ");
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        }
        function removeClass2(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE$1).forEach(function(c) {
                return el.classList.remove(c);
              });
            } else {
              el.classList.remove(cls);
            }
            if (!el.classList.length) {
              el.removeAttribute("class");
            }
          } else {
            var cur = " ".concat(el.getAttribute("class") || "", " ");
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            cur = cur.trim();
            if (cur) {
              el.setAttribute("class", cur);
            } else {
              el.removeAttribute("class");
            }
          }
        }
        function resolveTransition(def2) {
          if (!def2) {
            return;
          }
          if (typeof def2 === "object") {
            var res = {};
            if (def2.css !== false) {
              extend2(res, autoCssTransition(def2.name || "v"));
            }
            extend2(res, def2);
            return res;
          } else if (typeof def2 === "string") {
            return autoCssTransition(def2);
          }
        }
        var autoCssTransition = cached(function(name) {
          return {
            enterClass: "".concat(name, "-enter"),
            enterToClass: "".concat(name, "-enter-to"),
            enterActiveClass: "".concat(name, "-enter-active"),
            leaveClass: "".concat(name, "-leave"),
            leaveToClass: "".concat(name, "-leave-to"),
            leaveActiveClass: "".concat(name, "-leave-active")
          };
        });
        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
          if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
            transitionProp = "WebkitTransition";
            transitionEndEvent = "webkitTransitionEnd";
          }
          if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
            animationProp = "WebkitAnimation";
            animationEndEvent = "webkitAnimationEnd";
          }
        }
        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
          return fn();
        };
        function nextFrame(fn) {
          raf(function() {
            raf(fn);
          });
        }
        function addTransitionClass(el, cls) {
          var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass2(el, cls);
          }
        }
        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove$2(el._transitionClasses, cls);
          }
          removeClass2(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
          var _a2 = getTransitionInfo(el, expectedType), type = _a2.type, timeout = _a2.timeout, propCount = _a2.propCount;
          if (!type)
            return cb();
          var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
          var ended = 0;
          var end = function() {
            el.removeEventListener(event, onEnd);
            cb();
          };
          var onEnd = function(e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end();
              }
            }
          };
          setTimeout(function() {
            if (ended < propCount) {
              end();
            }
          }, timeout + 1);
          el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el);
          var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
          var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
          var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
          var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
          var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
          var animationTimeout = getTimeout(animationDelays, animationDurations);
          var type;
          var timeout = 0;
          var propCount = 0;
          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
            propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
          }
          var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
          return {
            type,
            timeout,
            propCount,
            hasTransform
          };
        }
        function getTimeout(delays, durations) {
          while (delays.length < durations.length) {
            delays = delays.concat(delays);
          }
          return Math.max.apply(null, durations.map(function(d, i) {
            return toMs(d) + toMs(delays[i]);
          }));
        }
        function toMs(s) {
          return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
        }
        function enter(vnode, toggleDisplay) {
          var el = vnode.elm;
          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data)) {
            return;
          }
          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
          }
          var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter2 = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
          var context = activeInstance;
          var transitionNode = activeInstance.$vnode;
          while (transitionNode && transitionNode.parent) {
            context = transitionNode.context;
            transitionNode = transitionNode.parent;
          }
          var isAppear = !context._isMounted || !vnode.isRootInsert;
          if (isAppear && !appear && appear !== "") {
            return;
          }
          var startClass = isAppear && appearClass ? appearClass : enterClass;
          var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
          var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
          var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
          var enterHook = isAppear ? isFunction2(appear) ? appear : enter2 : enter2;
          var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
          var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
          var explicitEnterDuration = toNumber(isObject3(duration) ? duration.enter : duration);
          if (explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, "enter", vnode);
          }
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(enterHook);
          var cb = el._enterCb = once(function() {
            if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
            } else {
              afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
          });
          if (!vnode.data.show) {
            mergeVNodeHook(vnode, "insert", function() {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
            });
          }
          beforeEnterHook && beforeEnterHook(el);
          if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(function() {
              removeTransitionClass(el, startClass);
              if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }
          if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
          }
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
        function leave(vnode, rm) {
          var el = vnode.elm;
          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data) || el.nodeType !== 1) {
            return rm();
          }
          if (isDef(el._leaveCb)) {
            return;
          }
          var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave2 = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(leave2);
          var explicitLeaveDuration = toNumber(isObject3(duration) ? duration.leave : duration);
          if (isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, "leave", vnode);
          }
          var cb = el._leaveCb = once(function() {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
            } else {
              rm();
              afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
          });
          if (delayLeave) {
            delayLeave(performLeave);
          } else {
            performLeave();
          }
          function performLeave() {
            if (cb.cancelled) {
              return;
            }
            if (!vnode.data.show && el.parentNode) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function() {
                removeTransitionClass(el, leaveClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            leave2 && leave2(el, cb);
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
        }
        function checkDuration(val, name, vnode) {
          if (typeof val !== "number") {
            warn$2("<transition> explicit ".concat(name, " duration is not a valid number - ") + "got ".concat(JSON.stringify(val), "."), vnode.context);
          } else if (isNaN(val)) {
            warn$2("<transition> explicit ".concat(name, " duration is NaN - ") + "the duration expression might be incorrect.", vnode.context);
          }
        }
        function isValidDuration(val) {
          return typeof val === "number" && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false;
          }
          var invokerFns = fn.fns;
          if (isDef(invokerFns)) {
            return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
          } else {
            return (fn._length || fn.length) > 1;
          }
        }
        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode);
          }
        }
        var transition = inBrowser ? {
          create: _enter,
          activate: _enter,
          remove: function(vnode, rm) {
            if (vnode.data.show !== true) {
              leave(vnode, rm);
            } else {
              rm();
            }
          }
        } : {};
        var platformModules = [attrs, klass$1, events, domProps, style$1, transition];
        var modules$1 = platformModules.concat(baseModules);
        var patch = createPatchFunction({ nodeOps, modules: modules$1 });
        if (isIE9) {
          document.addEventListener("selectionchange", function() {
            var el = document.activeElement;
            if (el && el.vmodel) {
              trigger(el, "input");
            }
          });
        }
        var directive = {
          inserted: function(el, binding, vnode, oldVnode) {
            if (vnode.tag === "select") {
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, "postpatch", function() {
                  directive.componentUpdated(el, binding, vnode);
                });
              } else {
                setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
            } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                el.addEventListener("change", onCompositionEnd);
                if (isIE9) {
                  el.vmodel = true;
                }
              }
            }
          },
          componentUpdated: function(el, binding, vnode) {
            if (vnode.tag === "select") {
              setSelected(el, binding, vnode.context);
              var prevOptions_1 = el._vOptions;
              var curOptions_1 = el._vOptions = [].map.call(el.options, getValue);
              if (curOptions_1.some(function(o, i) {
                return !looseEqual(o, prevOptions_1[i]);
              })) {
                var needReset = el.multiple ? binding.value.some(function(v) {
                  return hasNoMatchingOption(v, curOptions_1);
                }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions_1);
                if (needReset) {
                  trigger(el, "change");
                }
              }
            }
          }
        };
        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm);
          if (isIE || isEdge) {
            setTimeout(function() {
              actuallySetSelected(el, binding, vm);
            }, 0);
          }
        }
        function actuallySetSelected(el, binding, vm) {
          var value = binding.value;
          var isMultiple = el.multiple;
          if (isMultiple && !Array.isArray(value)) {
            warn$2('<select multiple v-model="'.concat(binding.expression, '"> ') + "expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(value).slice(8, -1)), vm);
            return;
          }
          var selected, option;
          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                option.selected = selected;
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i;
                }
                return;
              }
            }
          }
          if (!isMultiple) {
            el.selectedIndex = -1;
          }
        }
        function hasNoMatchingOption(value, options) {
          return options.every(function(o) {
            return !looseEqual(o, value);
          });
        }
        function getValue(option) {
          return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
          e.target.composing = true;
        }
        function onCompositionEnd(e) {
          if (!e.target.composing)
            return;
          e.target.composing = false;
          trigger(e.target, "input");
        }
        function trigger(el, type) {
          var e = document.createEvent("HTMLEvents");
          e.initEvent(type, true, true);
          el.dispatchEvent(e);
        }
        function locateNode(vnode) {
          return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
        }
        var show = {
          bind: function(el, _a2, vnode) {
            var value = _a2.value;
            vnode = locateNode(vnode);
            var transition2 = vnode.data && vnode.data.transition;
            var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
            if (value && transition2) {
              vnode.data.show = true;
              enter(vnode, function() {
                el.style.display = originalDisplay;
              });
            } else {
              el.style.display = value ? originalDisplay : "none";
            }
          },
          update: function(el, _a2, vnode) {
            var value = _a2.value, oldValue = _a2.oldValue;
            if (!value === !oldValue)
              return;
            vnode = locateNode(vnode);
            var transition2 = vnode.data && vnode.data.transition;
            if (transition2) {
              vnode.data.show = true;
              if (value) {
                enter(vnode, function() {
                  el.style.display = el.__vOriginalDisplay;
                });
              } else {
                leave(vnode, function() {
                  el.style.display = "none";
                });
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : "none";
            }
          },
          unbind: function(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
            }
          }
        };
        var platformDirectives = {
          model: directive,
          show
        };
        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        };
        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions;
          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
          } else {
            return vnode;
          }
        }
        function extractTransitionData(comp) {
          var data = {};
          var options = comp.$options;
          for (var key in options.propsData) {
            data[key] = comp[key];
          }
          var listeners = options._parentListeners;
          for (var key in listeners) {
            data[camelize(key)] = listeners[key];
          }
          return data;
        }
        function placeholder(h2, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h2("keep-alive", {
              props: rawChild.componentOptions.propsData
            });
          }
        }
        function hasParentTransition(vnode) {
          while (vnode = vnode.parent) {
            if (vnode.data.transition) {
              return true;
            }
          }
        }
        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag;
        }
        var isNotTextNode = function(c) {
          return c.tag || isAsyncPlaceholder(c);
        };
        var isVShowDirective = function(d) {
          return d.name === "show";
        };
        var Transition = {
          name: "transition",
          props: transitionProps,
          abstract: true,
          render: function(h2) {
            var _this = this;
            var children = this.$slots.default;
            if (!children) {
              return;
            }
            children = children.filter(isNotTextNode);
            if (!children.length) {
              return;
            }
            if (children.length > 1) {
              warn$2("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
            }
            var mode = this.mode;
            if (mode && mode !== "in-out" && mode !== "out-in") {
              warn$2("invalid <transition> mode: " + mode, this.$parent);
            }
            var rawChild = children[0];
            if (hasParentTransition(this.$vnode)) {
              return rawChild;
            }
            var child = getRealChild(rawChild);
            if (!child) {
              return rawChild;
            }
            if (this._leaving) {
              return placeholder(h2, rawChild);
            }
            var id = "__transition-".concat(this._uid, "-");
            child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
            var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
            var oldRawChild = this._vnode;
            var oldChild = getRealChild(oldRawChild);
            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
              child.data.show = true;
            }
            if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
              var oldData = oldChild.data.transition = extend2({}, data);
              if (mode === "out-in") {
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", function() {
                  _this._leaving = false;
                  _this.$forceUpdate();
                });
                return placeholder(h2, rawChild);
              } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild;
                }
                var delayedLeave_1;
                var performLeave = function() {
                  delayedLeave_1();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", function(leave2) {
                  delayedLeave_1 = leave2;
                });
              }
            }
            return rawChild;
          }
        };
        var props = extend2({
          tag: String,
          moveClass: String
        }, transitionProps);
        delete props.mode;
        var TransitionGroup = {
          props,
          beforeMount: function() {
            var _this = this;
            var update = this._update;
            this._update = function(vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(_this);
              _this.__patch__(
                _this._vnode,
                _this.kept,
                false,
                true
              );
              _this._vnode = _this.kept;
              restoreActiveInstance();
              update.call(_this, vnode, hydrating);
            };
          },
          render: function(h2) {
            var tag = this.tag || this.$vnode.data.tag || "span";
            var map = /* @__PURE__ */ Object.create(null);
            var prevChildren = this.prevChildren = this.children;
            var rawChildren = this.$slots.default || [];
            var children = this.children = [];
            var transitionData = extractTransitionData(this);
            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                  children.push(c);
                  map[c.key] = c;
                  (c.data || (c.data = {})).transition = transitionData;
                } else {
                  var opts2 = c.componentOptions;
                  var name_1 = opts2 ? getComponentName(opts2.Ctor.options) || opts2.tag || "" : c.tag;
                  warn$2("<transition-group> children must be keyed: <".concat(name_1, ">"));
                }
              }
            }
            if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i = 0; i < prevChildren.length; i++) {
                var c = prevChildren[i];
                c.data.transition = transitionData;
                c.data.pos = c.elm.getBoundingClientRect();
                if (map[c.key]) {
                  kept.push(c);
                } else {
                  removed.push(c);
                }
              }
              this.kept = h2(tag, null, kept);
              this.removed = removed;
            }
            return h2(tag, null, children);
          },
          updated: function() {
            var children = this.prevChildren;
            var moveClass = this.moveClass || (this.name || "v") + "-move";
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
            }
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);
            this._reflow = document.body.offsetHeight;
            children.forEach(function(c) {
              if (c.data.moved) {
                var el_1 = c.elm;
                var s = el_1.style;
                addTransitionClass(el_1, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el_1.addEventListener(transitionEndEvent, el_1._moveCb = function cb(e) {
                  if (e && e.target !== el_1) {
                    return;
                  }
                  if (!e || /transform$/.test(e.propertyName)) {
                    el_1.removeEventListener(transitionEndEvent, cb);
                    el_1._moveCb = null;
                    removeTransitionClass(el_1, moveClass);
                  }
                });
              }
            });
          },
          methods: {
            hasMove: function(el, moveClass) {
              if (!hasTransition) {
                return false;
              }
              if (this._hasMove) {
                return this._hasMove;
              }
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                el._transitionClasses.forEach(function(cls) {
                  removeClass2(clone, cls);
                });
              }
              addClass2(clone, moveClass);
              clone.style.display = "none";
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return this._hasMove = info.hasTransform;
            }
          }
        };
        function callPendingCbs(c) {
          if (c.elm._moveCb) {
            c.elm._moveCb();
          }
          if (c.elm._enterCb) {
            c.elm._enterCb();
          }
        }
        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
          var oldPos = c.data.pos;
          var newPos = c.data.newPos;
          var dx = oldPos.left - newPos.left;
          var dy = oldPos.top - newPos.top;
          if (dx || dy) {
            c.data.moved = true;
            var s = c.elm.style;
            s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
            s.transitionDuration = "0s";
          }
        }
        var platformComponents = {
          Transition,
          TransitionGroup
        };
        Vue2.config.mustUseProp = mustUseProp;
        Vue2.config.isReservedTag = isReservedTag;
        Vue2.config.isReservedAttr = isReservedAttr;
        Vue2.config.getTagNamespace = getTagNamespace;
        Vue2.config.isUnknownElement = isUnknownElement;
        extend2(Vue2.options.directives, platformDirectives);
        extend2(Vue2.options.components, platformComponents);
        Vue2.prototype.__patch__ = inBrowser ? patch : noop2;
        Vue2.prototype.$mount = function(el, hydrating) {
          el = el && inBrowser ? query(el) : void 0;
          return mountComponent(this, el, hydrating);
        };
        if (inBrowser) {
          setTimeout(function() {
            if (config.devtools) {
              if (devtools) {
                devtools.emit("init", Vue2);
              } else {
                console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
              }
            }
            if (config.productionTip !== false && typeof console !== "undefined") {
              console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
            }
          }, 0);
        }
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function(delimiters2) {
          var open = delimiters2[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters2[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text2, delimiters2) {
          var tagRE = delimiters2 ? buildRegex(delimiters2) : defaultTagRE;
          if (!tagRE.test(text2)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = tagRE.lastIndex = 0;
          var match, index2, tokenValue;
          while (match = tagRE.exec(text2)) {
            index2 = match.index;
            if (index2 > lastIndex) {
              rawTokens.push(tokenValue = text2.slice(lastIndex, index2));
              tokens.push(JSON.stringify(tokenValue));
            }
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(".concat(exp, ")"));
            rawTokens.push({ "@binding": exp });
            lastIndex = index2 + match[0].length;
          }
          if (lastIndex < text2.length) {
            rawTokens.push(tokenValue = text2.slice(lastIndex));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens
          };
        }
        function transformNode$1(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (staticClass) {
            var res = parseText(staticClass, options.delimiters);
            if (res) {
              warn2('class="'.concat(staticClass, '": ') + 'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap["class"]);
            }
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, " ").trim());
          }
          var classBinding = getBindingAttr(el, "class", false);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }
        function genData$2(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:".concat(el.staticClass, ",");
          }
          if (el.classBinding) {
            data += "class:".concat(el.classBinding, ",");
          }
          return data;
        }
        var klass = {
          staticKeys: ["staticClass"],
          transformNode: transformNode$1,
          genData: genData$2
        };
        function transformNode(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                warn2('style="'.concat(staticStyle, '": ') + 'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap["style"]);
              }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }
          var styleBinding = getBindingAttr(el, "style", false);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }
        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:".concat(el.staticStyle, ",");
          }
          if (el.styleBinding) {
            data += "style:(".concat(el.styleBinding, "),");
          }
          return data;
        }
        var style = {
          staticKeys: ["staticStyle"],
          transformNode,
          genData: genData$1
        };
        var decoder;
        var he = {
          decode: function(html3) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html3;
            return decoder.textContent;
          }
        };
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
        var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
        var startTagOpen = new RegExp("^<".concat(qnameCapture));
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "	",
          "&#39;": "'"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function(tag, html3) {
          return tag && isIgnoreNewlineTag(tag) && html3[0] === "\n";
        };
        function decodeAttr(value, shouldDecodeNewlines2) {
          var re = shouldDecodeNewlines2 ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function(match) {
            return decodingMap[match];
          });
        }
        function parseHTML(html3, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag2 = options.isUnaryTag || no;
          var canBeLeftOpenTag2 = options.canBeLeftOpenTag || no;
          var index2 = 0;
          var last, lastTag;
          var _loop_1 = function() {
            last = html3;
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html3.indexOf("<");
              if (textEnd === 0) {
                if (comment.test(html3)) {
                  var commentEnd = html3.indexOf("-->");
                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment && options.comment) {
                      options.comment(html3.substring(4, commentEnd), index2, index2 + commentEnd + 3);
                    }
                    advance(commentEnd + 3);
                    return "continue";
                  }
                }
                if (conditionalComment.test(html3)) {
                  var conditionalEnd = html3.indexOf("]>");
                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    return "continue";
                  }
                }
                var doctypeMatch = html3.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  return "continue";
                }
                var endTagMatch = html3.match(endTag);
                if (endTagMatch) {
                  var curIndex = index2;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index2);
                  return "continue";
                }
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html3)) {
                    advance(1);
                  }
                  return "continue";
                }
              }
              var text2 = void 0, rest = void 0, next2 = void 0;
              if (textEnd >= 0) {
                rest = html3.slice(textEnd);
                while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                  next2 = rest.indexOf("<", 1);
                  if (next2 < 0)
                    break;
                  textEnd += next2;
                  rest = html3.slice(textEnd);
                }
                text2 = html3.substring(0, textEnd);
              }
              if (textEnd < 0) {
                text2 = html3;
              }
              if (text2) {
                advance(text2.length);
              }
              if (options.chars && text2) {
                options.chars(text2, index2 - text2.length, index2);
              }
            } else {
              var endTagLength_1 = 0;
              var stackedTag_1 = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag_1] || (reCache[stackedTag_1] = new RegExp("([\\s\\S]*?)(</" + stackedTag_1 + "[^>]*>)", "i"));
              var rest = html3.replace(reStackedTag, function(all2, text3, endTag2) {
                endTagLength_1 = endTag2.length;
                if (!isPlainTextElement(stackedTag_1) && stackedTag_1 !== "noscript") {
                  text3 = text3.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag_1, text3)) {
                  text3 = text3.slice(1);
                }
                if (options.chars) {
                  options.chars(text3);
                }
                return "";
              });
              index2 += html3.length - rest.length;
              html3 = rest;
              parseEndTag(stackedTag_1, index2 - endTagLength_1, index2);
            }
            if (html3 === last) {
              options.chars && options.chars(html3);
              if (!stack.length && options.warn) {
                options.warn('Mal-formatted tag at end of template: "'.concat(html3, '"'), {
                  start: index2 + html3.length
                });
              }
              return "break";
            }
          };
          while (html3) {
            var state_1 = _loop_1();
            if (state_1 === "break")
              break;
          }
          parseEndTag();
          function advance(n) {
            index2 += n;
            html3 = html3.substring(n);
          }
          function parseStartTag() {
            var start = html3.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index2
              };
              advance(start[0].length);
              var end = void 0, attr = void 0;
              while (!(end = html3.match(startTagClose)) && (attr = html3.match(dynamicArgAttribute) || html3.match(attribute))) {
                attr.start = index2;
                advance(attr[0].length);
                attr.end = index2;
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index2;
                return match;
              }
            }
          }
          function handleStartTag(match) {
            var tagName2 = match.tagName;
            var unarySlash = match.unarySlash;
            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName2)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag2(tagName2) && lastTag === tagName2) {
                parseEndTag(tagName2);
              }
            }
            var unary = isUnaryTag2(tagName2) || !!unarySlash;
            var l = match.attrs.length;
            var attrs2 = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines2 = tagName2 === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
              attrs2[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines2)
              };
              if (options.outputSourceRange) {
                attrs2[i].start = args.start + args[0].match(/^\s*/).length;
                attrs2[i].end = args.end;
              }
            }
            if (!unary) {
              stack.push({
                tag: tagName2,
                lowerCasedTag: tagName2.toLowerCase(),
                attrs: attrs2,
                start: match.start,
                end: match.end
              });
              lastTag = tagName2;
            }
            if (options.start) {
              options.start(tagName2, attrs2, unary, match.start, match.end);
            }
          }
          function parseEndTag(tagName2, start, end) {
            var pos, lowerCasedTagName;
            if (start == null)
              start = index2;
            if (end == null)
              end = index2;
            if (tagName2) {
              lowerCasedTagName = tagName2.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              pos = 0;
            }
            if (pos >= 0) {
              for (var i = stack.length - 1; i >= pos; i--) {
                if ((i > pos || !tagName2) && options.warn) {
                  options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
                    start: stack[i].start,
                    end: stack[i].end
                  });
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName2, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName2, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName2, start, end);
              }
            }
          }
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:|^#/;
        var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;
        var dynamicArgRE = /^\[.*\]$/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^\.|^v-bind:/;
        var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
        var slotRE = /^v-slot(:|$)|^#/;
        var lineBreakRE = /[\r\n]/;
        var whitespaceRE = /[ \f\t\r\n]+/g;
        var invalidAttributeRE = /[\s"'<>\/=]/;
        var decodeHTMLCached = cached(he.decode);
        var emptySlotScopeToken = "_empty_";
        var warn;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        var maybeComponent;
        function createASTElement(tag, attrs2, parent) {
          return {
            type: 1,
            tag,
            attrsList: attrs2,
            attrsMap: makeAttrsMap(attrs2),
            rawAttrsMap: {},
            parent,
            children: []
          };
        }
        function parse2(template, options) {
          warn = options.warn || baseWarn;
          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;
          var isReservedTag2 = options.isReservedTag || no;
          maybeComponent = function(el) {
            return !!(el.component || el.attrsMap[":is"] || el.attrsMap["v-bind:is"] || !(el.attrsMap.is ? isReservedTag2(el.attrsMap.is) : isReservedTag2(el.tag)));
          };
          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
          postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
          delimiters = options.delimiters;
          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var whitespaceOption = options.whitespace;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;
          function warnOnce(msg, range2) {
            if (!warned) {
              warned = true;
              warn(msg, range2);
            }
          }
          function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
              element = processElement(element, options);
            }
            if (!stack.length && element !== root) {
              if (root.if && (element.elseif || element.else)) {
                {
                  checkRootConstraints(element);
                }
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                });
              } else {
                warnOnce("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.", { start: element.start });
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
              } else {
                if (element.slotScope) {
                  var name_1 = element.slotTarget || '"default"';
                  (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name_1] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            element.children = element.children.filter(function(c) {
              return !c.slotScope;
            });
            trimEndingWhitespace(element);
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }
          function trimEndingWhitespace(el) {
            if (!inPre) {
              var lastNode = void 0;
              while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ") {
                el.children.pop();
              }
            }
          }
          function checkRootConstraints(el) {
            if (el.tag === "slot" || el.tag === "template") {
              warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") + "contain multiple nodes.", { start: el.start });
            }
            if (el.attrsMap.hasOwnProperty("v-for")) {
              warnOnce("Cannot use v-for on stateful component root element because it renders multiple elements.", el.rawAttrsMap["v-for"]);
            }
          }
          parseHTML(template, {
            warn,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start: function(tag, attrs2, unary, start, end) {
              var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
              if (isIE && ns === "svg") {
                attrs2 = guardIESVGBug(attrs2);
              }
              var element = createASTElement(tag, attrs2, currentParent);
              if (ns) {
                element.ns = ns;
              }
              {
                if (options.outputSourceRange) {
                  element.start = start;
                  element.end = end;
                  element.rawAttrsMap = element.attrsList.reduce(function(cumulated, attr) {
                    cumulated[attr.name] = attr;
                    return cumulated;
                  }, {});
                }
                attrs2.forEach(function(attr) {
                  if (invalidAttributeRE.test(attr.name)) {
                    warn("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.", options.outputSourceRange ? {
                      start: attr.start + attr.name.indexOf("["),
                      end: attr.start + attr.name.length
                    } : void 0);
                  }
                });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as " + "<".concat(tag, ">") + ", as they will not be parsed.", { start: element.start });
              }
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                processFor(element);
                processIf(element);
                processOnce(element);
              }
              if (!root) {
                root = element;
                {
                  checkRootConstraints(root);
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },
            end: function(tag, start, end) {
              var element = stack[stack.length - 1];
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                element.end = end;
              }
              closeElement(element);
            },
            chars: function(text2, start, end) {
              if (!currentParent) {
                {
                  if (text2 === template) {
                    warnOnce("Component template requires a root element, rather than just text.", { start });
                  } else if (text2 = text2.trim()) {
                    warnOnce('text "'.concat(text2, '" outside root element will be ignored.'), {
                      start
                    });
                  }
                }
                return;
              }
              if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text2) {
                return;
              }
              var children = currentParent.children;
              if (inPre || text2.trim()) {
                text2 = isTextTag(currentParent) ? text2 : decodeHTMLCached(text2);
              } else if (!children.length) {
                text2 = "";
              } else if (whitespaceOption) {
                if (whitespaceOption === "condense") {
                  text2 = lineBreakRE.test(text2) ? "" : " ";
                } else {
                  text2 = " ";
                }
              } else {
                text2 = preserveWhitespace ? " " : "";
              }
              if (text2) {
                if (!inPre && whitespaceOption === "condense") {
                  text2 = text2.replace(whitespaceRE, " ");
                }
                var res = void 0;
                var child = void 0;
                if (!inVPre && text2 !== " " && (res = parseText(text2, delimiters))) {
                  child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text2
                  };
                } else if (text2 !== " " || !children.length || children[children.length - 1].text !== " ") {
                  child = {
                    type: 3,
                    text: text2
                  };
                }
                if (child) {
                  if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                  }
                  children.push(child);
                }
              }
            },
            comment: function(text2, start, end) {
              if (currentParent) {
                var child = {
                  type: 3,
                  text: text2,
                  isComment: true
                };
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }
                currentParent.children.push(child);
              }
            }
          });
          return root;
        }
        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }
        function processRawAttrs(el) {
          var list = el.attrsList;
          var len2 = list.length;
          if (len2) {
            var attrs2 = el.attrs = new Array(len2);
            for (var i = 0; i < len2; i++) {
              attrs2[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                attrs2[i].start = list[i].start;
                attrs2[i].end = list[i].end;
              }
            }
          } else if (!el.pre) {
            el.plain = true;
          }
        }
        function processElement(element, options) {
          processKey(element);
          element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
          processRef(element);
          processSlotContent(element);
          processSlotOutlet(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
          return element;
        }
        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            {
              if (el.tag === "template") {
                warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, "key"));
              }
              if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent_1 = el.parent;
                if (iterator && iterator === exp && parent_1 && parent_1.tag === "transition-group") {
                  warn("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.", getRawBindingAttr(el, "key"), true);
                }
              }
            }
            el.key = exp;
          }
        }
        function processRef(el) {
          var ref2 = getBindingAttr(el, "ref");
          if (ref2) {
            el.ref = ref2;
            el.refInFor = checkInFor(el);
          }
        }
        function processFor(el) {
          var exp;
          if (exp = getAndRemoveAttr(el, "v-for")) {
            var res = parseFor(exp);
            if (res) {
              extend2(el, res);
            } else {
              warn("Invalid v-for expression: ".concat(exp), el.rawAttrsMap["v-for"]);
            }
          }
        }
        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch)
            return;
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }
        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp,
              block: el
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }
        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el
            });
          } else {
            warn("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : "else", " ") + "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
          }
        }
        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (children[i].text !== " ") {
                warn('text "'.concat(children[i].text.trim(), '" between v-if and v-else(-if) ') + "will be ignored.", children[i]);
              }
              children.pop();
            }
          }
        }
        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }
        function processOnce(el) {
          var once2 = getAndRemoveAttr(el, "v-once");
          if (once2 != null) {
            el.once = true;
          }
        }
        function processSlotContent(el) {
          var slotScope;
          if (el.tag === "template") {
            slotScope = getAndRemoveAttr(el, "scope");
            if (slotScope) {
              warn('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', el.rawAttrsMap["scope"], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
          } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
            if (el.attrsMap["v-for"]) {
              warn("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") + "(v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
            }
            el.slotScope = slotScope;
          }
          var slotTarget = getBindingAttr(el, "slot");
          if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
            if (el.tag !== "template" && !el.slotScope) {
              addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
            }
          }
          {
            if (el.tag === "template") {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (el.slotTarget || el.slotScope) {
                    warn("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.parent && !maybeComponent(el.parent)) {
                    warn("<template v-slot> can only appear at the root level inside the receiving component", el);
                  }
                }
                var _a2 = getSlotName(slotBinding), name_2 = _a2.name, dynamic = _a2.dynamic;
                el.slotTarget = name_2;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken;
              }
            } else {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (!maybeComponent(el)) {
                    warn("v-slot can only be used on components or <template>.", slotBinding);
                  }
                  if (el.slotScope || el.slotTarget) {
                    warn("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.scopedSlots) {
                    warn("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.", slotBinding);
                  }
                }
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var _b = getSlotName(slotBinding), name_3 = _b.name, dynamic = _b.dynamic;
                var slotContainer_1 = slots[name_3] = createASTElement("template", [], el);
                slotContainer_1.slotTarget = name_3;
                slotContainer_1.slotTargetDynamic = dynamic;
                slotContainer_1.children = el.children.filter(function(c) {
                  if (!c.slotScope) {
                    c.parent = slotContainer_1;
                    return true;
                  }
                });
                slotContainer_1.slotScope = slotBinding.value || emptySlotScopeToken;
                el.children = [];
                el.plain = false;
              }
            }
          }
        }
        function getSlotName(binding) {
          var name = binding.name.replace(slotRE, "");
          if (!name) {
            if (binding.name[0] !== "#") {
              name = "default";
            } else {
              warn("v-slot shorthand syntax requires a slot name.", binding);
            }
          }
          return dynamicArgRE.test(name) ? { name: name.slice(1, -1), dynamic: true } : { name: '"'.concat(name, '"'), dynamic: false };
        }
        function processSlotOutlet(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (el.key) {
              warn("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
            }
          }
        }
        function processComponent(el) {
          var binding;
          if (binding = getBindingAttr(el, "is")) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }
        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
          for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              el.hasBindings = true;
              modifiers = parseModifiers(name.replace(dirRE, ""));
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                if (value.trim().length === 0) {
                  warn('The value for a v-bind expression cannot be empty. Found in "v-bind:'.concat(name, '"'));
                }
                if (modifiers) {
                  if (modifiers.prop && !isDynamic) {
                    name = camelize(name);
                    if (name === "innerHtml")
                      name = "innerHTML";
                  }
                  if (modifiers.camel && !isDynamic) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    syncGen = genAssignmentCode(value, "$event");
                    if (!isDynamic) {
                      addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn, list[i]);
                      if (hyphenate(name) !== camelize(name)) {
                        addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn, list[i]);
                      }
                    } else {
                      addHandler(
                        el,
                        '"update:"+('.concat(name, ")"),
                        syncGen,
                        null,
                        false,
                        warn,
                        list[i],
                        true
                      );
                    }
                  }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, value, list[i], isDynamic);
                } else {
                  addAttr(el, name, value, list[i], isDynamic);
                }
              } else if (onRE.test(name)) {
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
              } else {
                name = name.replace(dirRE, "");
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                  if (dynamicArgRE.test(arg)) {
                    arg = arg.slice(1, -1);
                    isDynamic = true;
                  }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") {
                  checkForAliasModel(el, value);
                }
              }
            } else {
              {
                var res = parseText(value, delimiters);
                if (res) {
                  warn("".concat(name, '="').concat(value, '": ') + 'Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, "true", list[i]);
              }
            }
          }
        }
        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== void 0) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }
        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret_1 = {};
            match.forEach(function(m) {
              ret_1[m.slice(1)] = true;
            });
            return ret_1;
          }
        }
        function makeAttrsMap(attrs2) {
          var map = {};
          for (var i = 0, l = attrs2.length; i < l; i++) {
            if (map[attrs2[i].name] && !isIE && !isEdge) {
              warn("duplicate attribute: " + attrs2[i].name, attrs2[i]);
            }
            map[attrs2[i].name] = attrs2[i].value;
          }
          return map;
        }
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }
        function isForbiddenTag(el) {
          return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs2) {
          var res = [];
          for (var i = 0; i < attrs2.length; i++) {
            var attr = attrs2[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }
        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn("<".concat(el.tag, ' v-model="').concat(value, '">: ') + "You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap["v-model"]);
            }
            _el = _el.parent;
          }
        }
        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }
            var typeBinding = void 0;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(".concat(map["v-bind"], ").type");
            }
            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              var branch0 = cloneASTElement(el);
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true;
              branch0.if = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
              });
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
                block: branch1
              });
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
              });
              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }
              return branch0;
            }
          }
        }
        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var model = {
          preTransformNode
        };
        var modules = [klass, style, model];
        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(".concat(dir.value, ")"), dir);
          }
        }
        function html2(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(".concat(dir.value, ")"), dir);
          }
        }
        var directives = {
          model: model$1,
          text,
          html: html2
        };
        var baseOptions = {
          expectHTML: true,
          modules,
          directives,
          isPreTag,
          isUnaryTag,
          mustUseProp,
          canBeLeftOpenTag,
          isReservedTag,
          getTagNamespace,
          staticKeys: genStaticKeys$1(modules)
        };
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys);
        function optimize(root, options) {
          if (!root)
            return;
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          markStatic(root);
          markStaticRoots(root, false);
        }
        function genStaticKeys(keys) {
          return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }
        function markStatic(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                var block = node.ifConditions[i].block;
                markStatic(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }
        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                markStaticRoots(node.ifConditions[i].block, isInFor);
              }
            }
          }
        }
        function isStatic(node) {
          if (node.type === 2) {
            return false;
          }
          if (node.type === 3) {
            return true;
          }
          return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
        var fnInvokeRE = /\([^)]*?\);*$/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46]
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"]
        };
        var genGuard = function(condition) {
          return "if(".concat(condition, ")return null;");
        };
        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events2, isNative2) {
          var prefix = isNative2 ? "nativeOn:" : "on:";
          var staticHandlers = "";
          var dynamicHandlers = "";
          for (var name_1 in events2) {
            var handlerCode = genHandler(events2[name_1]);
            if (events2[name_1] && events2[name_1].dynamic) {
              dynamicHandlers += "".concat(name_1, ",").concat(handlerCode, ",");
            } else {
              staticHandlers += '"'.concat(name_1, '":').concat(handlerCode, ",");
            }
          }
          staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");
          if (dynamicHandlers) {
            return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
          } else {
            return prefix + staticHandlers;
          }
        }
        function genHandler(handler) {
          if (!handler) {
            return "function(){}";
          }
          if (Array.isArray(handler)) {
            return "[".concat(handler.map(function(handler2) {
              return genHandler(handler2);
            }).join(","), "]");
          }
          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);
          var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}");
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            var _loop_1 = function(key2) {
              if (modifierCode[key2]) {
                genModifierCode += modifierCode[key2];
                if (keyCodes[key2]) {
                  keys.push(key2);
                }
              } else if (key2 === "exact") {
                var modifiers_1 = handler.modifiers;
                genModifierCode += genGuard(["ctrl", "shift", "alt", "meta"].filter(function(keyModifier) {
                  return !modifiers_1[keyModifier];
                }).map(function(keyModifier) {
                  return "$event.".concat(keyModifier, "Key");
                }).join("||"));
              } else {
                keys.push(key2);
              }
            };
            for (var key in handler.modifiers) {
              _loop_1(key);
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath ? "return ".concat(handler.value, ".apply(null, arguments)") : isFunctionExpression ? "return (".concat(handler.value, ").apply(null, arguments)") : isFunctionInvocation ? "return ".concat(handler.value) : handler.value;
            return "function($event){".concat(code).concat(handlerCode, "}");
          }
        }
        function genKeyFilter(keys) {
          return "if(!$event.type.indexOf('key')&&" + "".concat(keys.map(genFilterCode).join("&&"), ")return null;");
        }
        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==".concat(keyVal);
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return "_k($event.keyCode," + "".concat(JSON.stringify(key), ",") + "".concat(JSON.stringify(keyCode), ",") + "$event.key," + "".concat(JSON.stringify(keyName)) + ")";
        }
        function on(el, dir) {
          if (dir.modifiers) {
            warn$2("v-on without argument does not support modifiers.");
          }
          el.wrapListeners = function(code) {
            return "_g(".concat(code, ",").concat(dir.value, ")");
          };
        }
        function bind2(el, dir) {
          el.wrapData = function(code) {
            return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? "true" : "false").concat(dir.modifiers && dir.modifiers.sync ? ",true" : "", ")");
          };
        }
        var baseDirectives = {
          on,
          bind: bind2,
          cloak: noop2
        };
        var CodegenState = function() {
          function CodegenState2(options) {
            this.options = options;
            this.warn = options.warn || baseWarn;
            this.transforms = pluckModuleFunction(options.modules, "transformCode");
            this.dataGenFns = pluckModuleFunction(options.modules, "genData");
            this.directives = extend2(extend2({}, baseDirectives), options.directives);
            var isReservedTag2 = options.isReservedTag || no;
            this.maybeComponent = function(el) {
              return !!el.component || !isReservedTag2(el.tag);
            };
            this.onceId = 0;
            this.staticRenderFns = [];
            this.pre = false;
          }
          return CodegenState2;
        }();
        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? ast.tag === "script" ? "null" : genElement(ast, state) : '_c("div")';
          return {
            render: "with(this){return ".concat(code, "}"),
            staticRenderFns: state.staticRenderFns
          };
        }
        function genElement(el, state) {
          if (el.parent) {
            el.pre = el.pre || el.parent.pre;
          }
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            var code = void 0;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data = void 0;
              var maybeComponent2 = state.maybeComponent(el);
              if (!el.plain || el.pre && maybeComponent2) {
                data = genData(el, state);
              }
              var tag = void 0;
              var bindings = state.options.bindings;
              if (maybeComponent2 && bindings && bindings.__isScriptSetup !== false) {
                tag = checkBindingType(bindings, el.tag);
              }
              if (!tag)
                tag = "'".concat(el.tag, "'");
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c(".concat(tag).concat(
                data ? ",".concat(data) : ""
              ).concat(
                children ? ",".concat(children) : "",
                ")"
              );
            }
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }
        function checkBindingType(bindings, key) {
          var camelName = camelize(key);
          var PascalName = capitalize(camelName);
          var checkType = function(type) {
            if (bindings[key] === type) {
              return key;
            }
            if (bindings[camelName] === type) {
              return camelName;
            }
            if (bindings[PascalName] === type) {
              return PascalName;
            }
          };
          var fromConst = checkType("setup-const") || checkType("setup-reactive-const");
          if (fromConst) {
            return fromConst;
          }
          var fromMaybeRef = checkType("setup-let") || checkType("setup-ref") || checkType("setup-maybe-ref");
          if (fromMaybeRef) {
            return fromMaybeRef;
          }
        }
        function genStatic(el, state) {
          el.staticProcessed = true;
          var originalPreState = state.pre;
          if (el.pre) {
            state.pre = el.pre;
          }
          state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
          state.pre = originalPreState;
          return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ",true" : "", ")");
        }
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent_1 = el.parent;
            while (parent_1) {
              if (parent_1.for) {
                key = parent_1.key;
                break;
              }
              parent_1 = parent_1.parent;
            }
            if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap["v-once"]);
              return genElement(el, state);
            }
            return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
          } else {
            return genStatic(el, state);
          }
        }
        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true;
          return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }
          var condition = conditions.shift();
          if (condition.exp) {
            return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
          } else {
            return "".concat(genTernaryExp(condition.block));
          }
          function genTernaryExp(el) {
            return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
          }
        }
        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : "";
          var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : "";
          if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) {
            state.warn("<".concat(el.tag, ' v-for="').concat(alias, " in ").concat(exp, '">: component lists rendered with ') + "v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap["v-for"], true);
          }
          el.forProcessed = true;
          return "".concat(altHelper || "_l", "((").concat(exp, "),") + "function(".concat(alias).concat(iterator1).concat(iterator2, "){") + "return ".concat((altGen || genElement)(el, state)) + "})";
        }
        function genData(el, state) {
          var data = "{";
          var dirs = genDirectives(el, state);
          if (dirs)
            data += dirs + ",";
          if (el.key) {
            data += "key:".concat(el.key, ",");
          }
          if (el.ref) {
            data += "ref:".concat(el.ref, ",");
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          if (el.pre) {
            data += "pre:true,";
          }
          if (el.component) {
            data += 'tag:"'.concat(el.tag, '",');
          }
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          if (el.attrs) {
            data += "attrs:".concat(genProps(el.attrs), ",");
          }
          if (el.props) {
            data += "domProps:".concat(genProps(el.props), ",");
          }
          if (el.events) {
            data += "".concat(genHandlers(el.events, false), ",");
          }
          if (el.nativeEvents) {
            data += "".concat(genHandlers(el.nativeEvents, true), ",");
          }
          if (el.slotTarget && !el.slotScope) {
            data += "slot:".concat(el.slotTarget, ",");
          }
          if (el.scopedSlots) {
            data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
          }
          if (el.model) {
            data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
          }
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += "".concat(inlineTemplate, ",");
            }
          }
          data = data.replace(/,$/, "") + "}";
          if (el.dynamicAttrs) {
            data = "_b(".concat(data, ',"').concat(el.tag, '",').concat(genProps(el.dynamicAttrs), ")");
          }
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }
        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs)
            return;
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res += '{name:"'.concat(dir.name, '",rawName:"').concat(dir.rawName, '"').concat(dir.value ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value)) : "").concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : '"'.concat(dir.arg, '"')) : "").concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : "", "},");
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }
        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (el.children.length !== 1 || ast.type !== 1) {
            state.warn("Inline-template components must have exactly one child element.", { start: el.start });
          }
          if (ast && ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns.map(function(code) {
              return "function(){".concat(code, "}");
            }).join(","), "]}");
          }
        }
        function genScopedSlots(el, slots, state) {
          var needsForceUpdate = el.for || Object.keys(slots).some(function(key) {
            var slot = slots[key];
            return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
          });
          var needsKey = !!el.if;
          if (!needsForceUpdate) {
            var parent_2 = el.parent;
            while (parent_2) {
              if (parent_2.slotScope && parent_2.slotScope !== emptySlotScopeToken || parent_2.for) {
                needsForceUpdate = true;
                break;
              }
              if (parent_2.if) {
                needsKey = true;
              }
              parent_2 = parent_2.parent;
            }
          }
          var generatedSlots = Object.keys(slots).map(function(key) {
            return genScopedSlot(slots[key], state);
          }).join(",");
          return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
        }
        function hash(str2) {
          var hash2 = 5381;
          var i = str2.length;
          while (i) {
            hash2 = hash2 * 33 ^ str2.charCodeAt(--i);
          }
          return hash2 >>> 0;
        }
        function containsSlotChild(el) {
          if (el.type === 1) {
            if (el.tag === "slot") {
              return true;
            }
            return el.children.some(containsSlotChild);
          }
          return false;
        }
        function genScopedSlot(el, state) {
          var isLegacySyntax = el.attrsMap["slot-scope"];
          if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, "null");
          }
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
          }
          var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
          var fn = "function(".concat(slotScope, "){") + "return ".concat(el.tag === "template" ? el.if && isLegacySyntax ? "(".concat(el.if, ")?").concat(genChildren(el, state) || "undefined", ":undefined") : genChildren(el, state) || "undefined" : genElement(el, state), "}");
          var reverseProxy = slotScope ? "" : ",proxy:true";
          return "{key:".concat(el.slotTarget || '"default"', ",fn:").concat(fn).concat(reverseProxy, "}");
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el_1 = children[0];
            if (children.length === 1 && el_1.for && el_1.tag !== "template" && el_1.tag !== "slot") {
              var normalizationType_1 = checkSkip ? state.maybeComponent(el_1) ? ",1" : ",0" : "";
              return "".concat((altGenElement || genElement)(el_1, state)).concat(normalizationType_1);
            }
            var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
            var gen_1 = altGenNode || genNode;
            return "[".concat(children.map(function(c) {
              return gen_1(c, state);
            }).join(","), "]").concat(normalizationType ? ",".concat(normalizationType) : "");
          }
        }
        function getNormalizationType(children, maybeComponent2) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return needsNormalization(c.block);
            })) {
              res = 2;
              break;
            }
            if (maybeComponent2(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return maybeComponent2(c.block);
            })) {
              res = 1;
            }
          }
          return res;
        }
        function needsNormalization(el) {
          return el.for !== void 0 || el.tag === "template" || el.tag === "slot";
        }
        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          } else if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }
        function genText(text2) {
          return "_v(".concat(text2.type === 2 ? text2.expression : transformSpecialNewlines(JSON.stringify(text2.text)), ")");
        }
        function genComment(comment2) {
          return "_e(".concat(JSON.stringify(comment2.text), ")");
        }
        function genSlot(el, state) {
          var slotName = el.slotName || '"default"';
          var children = genChildren(el, state);
          var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : "");
          var attrs2 = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function(attr) {
            return {
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
            };
          })) : null;
          var bind3 = el.attrsMap["v-bind"];
          if ((attrs2 || bind3) && !children) {
            res += ",null";
          }
          if (attrs2) {
            res += ",".concat(attrs2);
          }
          if (bind3) {
            res += "".concat(attrs2 ? "" : ",null", ",").concat(bind3);
          }
          return res + ")";
        }
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : "", ")");
        }
        function genProps(props2) {
          var staticProps = "";
          var dynamicProps = "";
          for (var i = 0; i < props2.length; i++) {
            var prop = props2[i];
            var value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
              dynamicProps += "".concat(prop.name, ",").concat(value, ",");
            } else {
              staticProps += '"'.concat(prop.name, '":').concat(value, ",");
            }
          }
          staticProps = "{".concat(staticProps.slice(0, -1), "}");
          if (dynamicProps) {
            return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
          } else {
            return staticProps;
          }
        }
        function transformSpecialNewlines(text2) {
          return text2.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast, warn2) {
          if (ast) {
            checkNode(ast, warn2);
          }
        }
        function checkNode(node, warn2) {
          if (node.type === 1) {
            for (var name_1 in node.attrsMap) {
              if (dirRE.test(name_1)) {
                var value = node.attrsMap[name_1];
                if (value) {
                  var range2 = node.rawAttrsMap[name_1];
                  if (name_1 === "v-for") {
                    checkFor(node, 'v-for="'.concat(value, '"'), warn2, range2);
                  } else if (name_1 === "v-slot" || name_1[0] === "#") {
                    checkFunctionParameterExpression(value, "".concat(name_1, '="').concat(value, '"'), warn2, range2);
                  } else if (onRE.test(name_1)) {
                    checkEvent(value, "".concat(name_1, '="').concat(value, '"'), warn2, range2);
                  } else {
                    checkExpression(value, "".concat(name_1, '="').concat(value, '"'), warn2, range2);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn2);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn2, node);
          }
        }
        function checkEvent(exp, text2, warn2, range2) {
          var stripped = exp.replace(stripStringRE, "");
          var keywordMatch = stripped.match(unaryOperatorsRE);
          if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== "$") {
            warn2("avoid using JavaScript unary operator as property name: " + '"'.concat(keywordMatch[0], '" in expression ').concat(text2.trim()), range2);
          }
          checkExpression(exp, text2, warn2, range2);
        }
        function checkFor(node, text2, warn2, range2) {
          checkExpression(node.for || "", text2, warn2, range2);
          checkIdentifier(node.alias, "v-for alias", text2, warn2, range2);
          checkIdentifier(node.iterator1, "v-for iterator", text2, warn2, range2);
          checkIdentifier(node.iterator2, "v-for iterator", text2, warn2, range2);
        }
        function checkIdentifier(ident, type, text2, warn2, range2) {
          if (typeof ident === "string") {
            try {
              new Function("var ".concat(ident, "=_"));
            } catch (e) {
              warn2("invalid ".concat(type, ' "').concat(ident, '" in expression: ').concat(text2.trim()), range2);
            }
          }
        }
        function checkExpression(exp, text2, warn2, range2) {
          try {
            new Function("return ".concat(exp));
          } catch (e) {
            var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
            if (keywordMatch) {
              warn2("avoid using JavaScript keyword as property name: " + '"'.concat(keywordMatch[0], '"\n  Raw expression: ').concat(text2.trim()), range2);
            } else {
              warn2("invalid expression: ".concat(e.message, " in\n\n") + "    ".concat(exp, "\n\n") + "  Raw expression: ".concat(text2.trim(), "\n"), range2);
            }
          }
        }
        function checkFunctionParameterExpression(exp, text2, warn2, range2) {
          try {
            new Function(exp, "");
          } catch (e) {
            warn2("invalid function parameter expression: ".concat(e.message, " in\n\n") + "    ".concat(exp, "\n\n") + "  Raw expression: ".concat(text2.trim(), "\n"), range2);
          }
        }
        var range = 2;
        function generateCodeFrame(source, start, end) {
          if (start === void 0) {
            start = 0;
          }
          if (end === void 0) {
            end = source.length;
          }
          var lines = source.split(/\r?\n/);
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                  continue;
                res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
                var lineLength = lines[j].length;
                if (j === i) {
                  var pad = start - (count - lineLength) + 1;
                  var length_1 = end > count ? lineLength - pad : end - start;
                  res.push("   |  " + repeat(" ", pad) + repeat("^", length_1));
                } else if (j > i) {
                  if (end > count) {
                    var length_2 = Math.min(end - count, lineLength);
                    res.push("   |  " + repeat("^", length_2));
                  }
                  count += lineLength + 1;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        function repeat(str2, n) {
          var result = "";
          if (n > 0) {
            while (true) {
              if (n & 1)
                result += str2;
              n >>>= 1;
              if (n <= 0)
                break;
              str2 += str2;
            }
          }
          return result;
        }
        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({ err, code });
            return noop2;
          }
        }
        function createCompileToFunctionFn(compile) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function compileToFunctions2(template, options, vm) {
            options = extend2({}, options);
            var warn2 = options.warn || warn$2;
            delete options.warn;
            {
              try {
                new Function("return 1");
              } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                  warn2("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
                }
              }
            }
            var key = options.delimiters ? String(options.delimiters) + template : template;
            if (cache[key]) {
              return cache[key];
            }
            var compiled = compile(template, options);
            {
              if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                  compiled.errors.forEach(function(e) {
                    warn2("Error compiling template:\n\n".concat(e.msg, "\n\n") + generateCodeFrame(template, e.start, e.end), vm);
                  });
                } else {
                  warn2("Error compiling template:\n\n".concat(template, "\n\n") + compiled.errors.map(function(e) {
                    return "- ".concat(e);
                  }).join("\n") + "\n", vm);
                }
              }
              if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                  compiled.tips.forEach(function(e) {
                    return tip(e.msg, vm);
                  });
                } else {
                  compiled.tips.forEach(function(msg) {
                    return tip(msg, vm);
                  });
                }
              }
            }
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
              return createFunction(code, fnGenErrors);
            });
            {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn2("Failed to generate render function:\n\n" + fnGenErrors.map(function(_a2) {
                  var err = _a2.err, code = _a2.code;
                  return "".concat(err.toString(), " in\n\n").concat(code, "\n");
                }).join("\n"), vm);
              }
            }
            return cache[key] = res;
          };
        }
        function createCompilerCreator(baseCompile) {
          return function createCompiler2(baseOptions2) {
            function compile(template, options) {
              var finalOptions = Object.create(baseOptions2);
              var errors = [];
              var tips = [];
              var warn2 = function(msg, range2, tip2) {
                (tip2 ? tips : errors).push(msg);
              };
              if (options) {
                if (options.outputSourceRange) {
                  var leadingSpaceLength_1 = template.match(/^\s*/)[0].length;
                  warn2 = function(msg, range2, tip2) {
                    var data = typeof msg === "string" ? { msg } : msg;
                    if (range2) {
                      if (range2.start != null) {
                        data.start = range2.start + leadingSpaceLength_1;
                      }
                      if (range2.end != null) {
                        data.end = range2.end + leadingSpaceLength_1;
                      }
                    }
                    (tip2 ? tips : errors).push(data);
                  };
                }
                if (options.modules) {
                  finalOptions.modules = (baseOptions2.modules || []).concat(options.modules);
                }
                if (options.directives) {
                  finalOptions.directives = extend2(Object.create(baseOptions2.directives || null), options.directives);
                }
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }
              finalOptions.warn = warn2;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                detectErrors(compiled.ast, warn2);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }
            return {
              compile,
              compileToFunctions: createCompileToFunctionFn(compile)
            };
          };
        }
        var createCompiler = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse2(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var _a = createCompiler(baseOptions), compileToFunctions = _a.compileToFunctions;
        var div;
        function getShouldDecode(href) {
          div = div || document.createElement("div");
          div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
          return div.innerHTML.indexOf("&#10;") > 0;
        }
        var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
        var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
        var idToTemplate = cached(function(id) {
          var el = query(id);
          return el && el.innerHTML;
        });
        var mount = Vue2.prototype.$mount;
        Vue2.prototype.$mount = function(el, hydrating) {
          el = el && query(el);
          if (el === document.body || el === document.documentElement) {
            warn$2("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
            return this;
          }
          var options = this.$options;
          if (!options.render) {
            var template = options.template;
            if (template) {
              if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                  template = idToTemplate(template);
                  if (!template) {
                    warn$2("Template element not found or is empty: ".concat(options.template), this);
                  }
                }
              } else if (template.nodeType) {
                template = template.innerHTML;
              } else {
                {
                  warn$2("invalid template option:" + template, this);
                }
                return this;
              }
            } else if (el) {
              template = getOuterHTML(el);
            }
            if (template) {
              if (config.performance && mark) {
                mark("compile");
              }
              var _a2 = compileToFunctions(template, {
                outputSourceRange: true,
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
              }, this), render = _a2.render, staticRenderFns = _a2.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              if (config.performance && mark) {
                mark("compile end");
                measure("vue ".concat(this._name, " compile"), "compile", "compile end");
              }
            }
          }
          return mount.call(this, el, hydrating);
        };
        function getOuterHTML(el) {
          if (el.outerHTML) {
            return el.outerHTML;
          } else {
            var container = document.createElement("div");
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
          }
        }
        Vue2.compile = compileToFunctions;
        function effect(fn, scheduler) {
          var watcher = new Watcher(currentInstance, fn, noop2, {
            sync: true
          });
          if (scheduler) {
            watcher.update = function() {
              scheduler(function() {
                return watcher.run();
              });
            };
          }
        }
        extend2(Vue2, vca);
        Vue2.effect = effect;
        return Vue2;
      });
    }
  });

  // node_modules/form-data/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/form-data/lib/browser.js"(exports, module) {
      module.exports = typeof self == "object" ? self.FormData : window.FormData;
    }
  });

  // js/application.ts
  var import_vue = __toESM(require_vue());

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    const pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function merge() {
    const result = {};
    const assignValue = (val, key) => {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[_-\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define2 = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/env/classes/FormData.js
  var import_form_data = __toESM(require_browser(), 1);
  var FormData_default = import_form_data.default;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function isSpecCompliant(thing) {
    return thing && utils_default.isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator];
  }
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (FormData_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && isSpecCompliant(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]") && (arr = utils_default.toArray(value)))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !utils_default.isUndefined(el) && formData.append(
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !utils_default.isUndefined(el) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    const _encode = options && options.encode || encode2;
    const serializerParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    if (serializerParams) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializerParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default2 = FormData;

  // node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default2,
      Blob
    },
    isStandardBrowserEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = browser_default.isStandardBrowserEnv ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils_default.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils_default.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils_default.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }();

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv2() {
    return function isURLSameOrigin() {
      return true;
    };
  }();

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  var $defaults = Symbol("defaults");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function matchHeaderValue(context, value, header, filter2) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  function AxiosHeaders(headers, defaults2) {
    headers && this.set(headers);
    this[$defaults] = defaults2 || null;
  }
  Object.assign(AxiosHeaders.prototype, {
    set: function(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = findKey(self2, lHeader);
        if (key && _rewrite !== true && (self2[key] === false || _rewrite === false)) {
          return;
        }
        if (utils_default.isArray(_value)) {
          _value = _value.map(normalizeValue);
        } else {
          _value = normalizeValue(_value);
        }
        self2[key || _header] = _value;
      }
      if (utils_default.isPlainObject(header)) {
        utils_default.forEach(header, (_value, _header) => {
          setHeader(_value, _header, valueOrRewrite);
        });
      } else {
        setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    },
    get: function(header, parser) {
      header = normalizeHeader(header);
      if (!header)
        return void 0;
      const key = findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    },
    has: function(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = findKey(this, header);
        return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    },
    delete: function(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    },
    clear: function() {
      return Object.keys(this).forEach(this.delete.bind(this));
    },
    normalize: function(format2) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format2 ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    },
    toJSON: function() {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(
        Object.assign({}, this[$defaults] || null, this),
        (value, header) => {
          if (value == null || value === false)
            return;
          obj[header] = utils_default.isArray(value) ? value.join(", ") : value;
        }
      );
      return obj;
    }
  });
  Object.assign(AxiosHeaders, {
    from: function(thing) {
      if (utils_default.isString(thing)) {
        return new this(parseHeaders_default(thing));
      }
      return thing instanceof this ? thing : new this(thing);
    },
    accessor: function(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  });
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
  utils_default.freezeMethods(AxiosHeaders.prototype);
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils_default.isFormData(requestData) && browser_default.isStandardBrowserEnv) {
        requestHeaders.setContentType(false);
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (browser_default.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  }

  // node_modules/axios/lib/adapters/index.js
  var adapters = {
    http: xhrAdapter,
    xhr: xhrAdapter
  };
  var adapters_default = {
    getAdapter: (nameOrAdapter) => {
      if (utils_default.isString(nameOrAdapter)) {
        const adapter = adapters[nameOrAdapter];
        if (!nameOrAdapter) {
          throw Error(
            utils_default.hasOwnProp(nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Can not resolve adapter '${nameOrAdapter}'`
          );
        }
        return adapter;
      }
      if (!utils_default.isFunction(nameOrAdapter)) {
        throw new TypeError("adapter is not a function");
      }
      return nameOrAdapter;
    },
    adapters
  };

  // node_modules/axios/lib/defaults/index.js
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function getDefaultAdapter() {
    let adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = adapters_default.getAdapter("xhr");
    } else if (typeof process !== "undefined" && utils_default.kindOf(process) === "process") {
      adapter = adapters_default.getAdapter("http");
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: browser_default.classes.FormData,
      Blob: browser_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default();
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    const adapter = config.adapter || defaults_default.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge(target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils_default.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function valueFromConfig2(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      }
    }
    function defaultToConfig2(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      } else if (!utils_default.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    const mergeMap = {
      "url": valueFromConfig2,
      "method": valueFromConfig2,
      "data": valueFromConfig2,
      "baseURL": defaultToConfig2,
      "transformRequest": defaultToConfig2,
      "transformResponse": defaultToConfig2,
      "paramsSerializer": defaultToConfig2,
      "timeout": defaultToConfig2,
      "timeoutMessage": defaultToConfig2,
      "withCredentials": defaultToConfig2,
      "adapter": defaultToConfig2,
      "responseType": defaultToConfig2,
      "xsrfCookieName": defaultToConfig2,
      "xsrfHeaderName": defaultToConfig2,
      "onUploadProgress": defaultToConfig2,
      "onDownloadProgress": defaultToConfig2,
      "decompress": defaultToConfig2,
      "maxContentLength": defaultToConfig2,
      "maxBodyLength": defaultToConfig2,
      "beforeRedirect": defaultToConfig2,
      "transport": defaultToConfig2,
      "httpAgent": defaultToConfig2,
      "httpsAgent": defaultToConfig2,
      "cancelToken": defaultToConfig2,
      "socketPath": defaultToConfig2,
      "responseEncoding": defaultToConfig2,
      "validateStatus": mergeDirectKeys
    };
    utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.1.2";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const transitional2 = config.transitional;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      const defaultHeaders = config.headers && utils_default.merge(
        config.headers.common,
        config.headers[config.method]
      );
      defaultHeaders && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      config.headers = new AxiosHeaders_default(config.headers, defaultHeaders);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.formToJSON = (thing) => {
    return formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  };
  var axios_default = axios;

  // node_modules/axios/index.js
  var axios_default2 = axios_default;

  // node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js
  var DefaultSection = { name: "default-section", props: { section: { type: Object, required: true }, currentIndex: { type: [Number, String], required: false, default: 1 / 0 }, renderSuggestion: { type: Function, required: false }, normalizeItemFunction: { type: Function, required: true }, componentAttrPrefix: { type: String, required: true }, componentAttrIdAutosuggest: { type: String, required: true } }, data: function() {
    return { _currentIndex: this.currentIndex };
  }, computed: { list: function() {
    var t = this.section, e = t.limit, n = t.data;
    return n.length < e && (e = n.length), n.slice(0, e);
  } }, methods: { getItemIndex: function(t) {
    return this.section.start_index + t;
  }, getItemByIndex: function(t) {
    return this.section.data[t];
  }, onMouseEnter: function(t) {
    var e = parseInt(t.currentTarget.getAttribute("data-suggestion-index"));
    this._currentIndex = e, this.$emit("updateCurrentIndex", e);
  }, onMouseLeave: function() {
    this.$emit("updateCurrentIndex", null);
  } }, render: function(t) {
    var e = this, n = this.componentAttrPrefix, s = { beforeSection: this.$scopedSlots["before-section-" + this.section.name], afterSectionDefault: this.$scopedSlots["after-section"], afterSectionNamed: this.$scopedSlots["after-section-" + this.section.name] }, i = n + "__results-before " + n + "__results-before--" + this.section.name, r = s.beforeSection && s.beforeSection({ section: this.section, className: i }) || [];
    return t("ul", { attrs: { role: "listbox", "aria-labelledby": this.section.label && this.componentAttrIdAutosuggest + "-" + this.section.label }, class: this.section.ulClass }, [r[0] && r[0] || this.section.label && t("li", { class: i, id: this.componentAttrIdAutosuggest + "-" + this.section.label }, this.section.label) || "", this.list.map(function(s2, i2) {
      var r2, o = e.normalizeItemFunction(e.section.name, e.section.type, e.section.label, e.section.liClass, s2), u = e.getItemIndex(i2), l = e._currentIndex === u || parseInt(e.currentIndex) === u;
      return t("li", { attrs: Object.assign({}, { role: "option", "data-suggestion-index": u, "data-section-name": o.name, id: n + "__results-item--" + u }, o.liAttributes), key: u, class: Object.assign((r2 = {}, r2[n + "__results-item--highlighted"] = l, r2[n + "__results-item"] = true, r2), o.liClass), on: { mouseenter: e.onMouseEnter, mouseleave: e.onMouseLeave } }, [e.renderSuggestion ? e.renderSuggestion(o) : e.$scopedSlots.default && e.$scopedSlots.default({ _key: i2, suggestion: o })]);
    }), s.afterSectionDefault && s.afterSectionDefault({ section: this.section, className: n + "__results-after " + n + "__results-after--" + this.section.name }), s.afterSectionNamed && s.afterSectionNamed({ section: this.section, className: n + "__results_after " + n + "__results-after--" + this.section.name })]);
  } };
  function hasClass(t, e) {
    return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
  }
  function addClass(t, e) {
    hasClass(t, e) || (t.className += " " + e);
  }
  function removeClass(t, e) {
    t.classList && t.classList.remove(e);
  }
  var INDEX_IS_FOCUSED_ON_INPUT = -1;
  var defaultSectionConfig = { name: "default", type: "default-section" };
  var VueAutosuggest = { render: function() {
    var t = this, e = t.$createElement, n = t._self._c || e;
    return n("div", { attrs: { id: t.componentAttrIdAutosuggest } }, [t._t("before-input"), n("div", { attrs: { role: "combobox", "aria-expanded": t.isOpen ? "true" : "false", "aria-haspopup": "listbox", "aria-owns": t.componentAttrIdAutosuggest + "-" + t.componentAttrPrefix + "__results" } }, [n("input", t._g(t._b({ class: [t.isOpen ? t.componentAttrPrefix + "__input--open" : "", t.internal_inputProps.class], attrs: { type: t.internal_inputProps.type, autocomplete: t.internal_inputProps.autocomplete, "aria-autocomplete": "list", "aria-activedescendant": t.isOpen && null !== t.currentIndex ? t.componentAttrPrefix + "__results-item--" + t.currentIndex : "", "aria-controls": t.componentAttrIdAutosuggest + "-" + t.componentAttrPrefix + "__results" }, domProps: { value: t.internalValue }, on: { input: t.inputHandler, keydown: t.handleKeyStroke } }, "input", t.internal_inputProps, false), t.listeners))]), t._t("after-input"), t._v(" "), n("div", { class: t._componentAttrClassAutosuggestResultsContainer, attrs: { id: t.componentAttrIdAutosuggest + "-" + t.componentAttrPrefix + "__results" } }, [t.isOpen ? n("div", { class: t._componentAttrClassAutosuggestResults, attrs: { "aria-labelledby": t.componentAttrIdAutosuggest } }, [t._t("before-suggestions"), t._v(" "), t._l(t.computedSections, function(e2, s) {
      return n(e2.type, { key: t.getSectionRef("" + e2.name + s), ref: t.getSectionRef("" + e2.name + s), refInFor: true, tag: "component", attrs: { "current-index": t.currentIndex, "normalize-item-function": t.normalizeItem, "render-suggestion": t.renderSuggestion, section: e2, "component-attr-prefix": t.componentAttrPrefix, "component-attr-id-autosuggest": t.componentAttrIdAutosuggest }, on: { updateCurrentIndex: t.updateCurrentIndex }, scopedSlots: t._u([{ key: "before-section-" + (e2.name || e2.label), fn: function(n2) {
        var s2 = n2.section, i = n2.className;
        return [t._t("before-section-" + (e2.name || e2.label), null, { section: s2, className: i })];
      } }, { key: "default", fn: function(e3) {
        var n2 = e3.suggestion, s2 = e3._key;
        return [t._t("default", [t._v(" " + t._s(n2.item) + " ")], { suggestion: n2, index: s2 })];
      } }, { key: "after-section-" + (e2.name || e2.label), fn: function(n2) {
        var s2 = n2.section;
        return [t._t("after-section-" + (e2.name || e2.label), null, { section: s2 })];
      } }, { key: "after-section", fn: function(e3) {
        var n2 = e3.section;
        return [t._t("after-section", null, { section: n2 })];
      } }]) });
    }), t._v(" "), t._t("after-suggestions")], 2) : t._e(), t._v(" "), t._t("after-suggestions-container")], 2)], 2);
  }, staticRenderFns: [], name: "Autosuggest", components: { DefaultSection }, props: { value: { type: String, default: null }, inputProps: { type: Object, required: true }, limit: { type: Number, required: false, default: 1 / 0 }, suggestions: { type: Array, required: true }, renderSuggestion: { type: Function, required: false, default: null }, getSuggestionValue: { type: Function, required: false, default: function(t) {
    var e = t.item;
    return "object" == typeof e && e.hasOwnProperty("name") ? e.name : e;
  } }, shouldRenderSuggestions: { type: Function, required: false, default: function(t, e) {
    return t > 0 && !e;
  } }, sectionConfigs: { type: Object, required: false, default: function() {
    return { default: { onSelected: null } };
  } }, onSelected: { type: Function, required: false, default: null }, componentAttrIdAutosuggest: { type: String, required: false, default: "autosuggest" }, componentAttrClassAutosuggestResultsContainer: { type: String, required: false, default: null }, componentAttrClassAutosuggestResults: { type: String, required: false, default: null }, componentAttrPrefix: { type: String, required: false, default: "autosuggest" } }, data: function() {
    return { internalValue: null, searchInputOriginal: null, currentIndex: null, currentItem: null, loading: false, didSelectFromOptions: false, defaultInputProps: { type: "text", autocomplete: "off" }, clientXMouseDownInitial: null };
  }, computed: { internal_inputProps: function() {
    return Object.assign({}, this.defaultInputProps, this.inputProps);
  }, listeners: function() {
    var t = this;
    return Object.assign({}, this.$listeners, { input: function(t2) {
    }, click: function() {
      t.loading = false, t.$listeners.click && t.$listeners.click(t.currentItem), t.$nextTick(function() {
        t.ensureItemVisible(t.currentItem, t.currentIndex);
      });
    }, selected: function() {
      t.currentItem && t.sectionConfigs[t.currentItem.name] && t.sectionConfigs[t.currentItem.name].onSelected ? t.sectionConfigs[t.currentItem.name].onSelected(t.currentItem, t.searchInputOriginal) : t.sectionConfigs.default.onSelected ? t.sectionConfigs.default.onSelected(null, t.searchInputOriginal) : t.$listeners.selected && t.$emit("selected", t.currentItem, t.currentIndex), t.setChangeItem(null);
    } });
  }, isOpen: function() {
    return this.shouldRenderSuggestions(this.totalResults, this.loading);
  }, computedSections: function() {
    var t = this, e = 0;
    return this.suggestions.map(function(n) {
      if (n.data) {
        var s, i, r, o, u = n.name ? n.name : defaultSectionConfig.name, l = null;
        t.sectionConfigs[u] && (s = t.sectionConfigs[u].limit, r = t.sectionConfigs[u].type, i = t.sectionConfigs[u].label, o = t.sectionConfigs[u].ulClass, l = t.sectionConfigs[u].liClass), r = r || defaultSectionConfig.type, s = (s = s || t.limit) || 1 / 0, s = n.data.length < s ? n.data.length : s;
        var a = { name: u, label: i = i || n.label, type: r, limit: s, data: n.data, start_index: e, end_index: e + s - 1, ulClass: o, liClass: l };
        return e += s, a;
      }
    });
  }, totalResults: function() {
    return this.computedSections.reduce(function(t, e) {
      if (!e)
        return t;
      var n = e.limit, s = e.data;
      return t + (s.length >= n ? n : s.length);
    }, 0);
  }, _componentAttrClassAutosuggestResultsContainer: function() {
    return this.componentAttrClassAutosuggestResultsContainer || this.componentAttrPrefix + "__results-container";
  }, _componentAttrClassAutosuggestResults: function() {
    return this.componentAttrClassAutosuggestResults || this.componentAttrPrefix + "__results";
  } }, watch: { value: { handler: function(t) {
    this.internalValue = t;
  }, immediate: true }, isOpen: { handler: function(t, e) {
    t !== e && this.$emit(t ? "opened" : "closed");
  }, immediate: true } }, created: function() {
    this.loading = true;
  }, mounted: function() {
    document.addEventListener("mouseup", this.onDocumentMouseUp), document.addEventListener("mousedown", this.onDocumentMouseDown);
  }, beforeDestroy: function() {
    document.removeEventListener("mouseup", this.onDocumentMouseUp), document.removeEventListener("mousedown", this.onDocumentMouseDown);
  }, methods: { inputHandler: function(t) {
    var e = t.target.value;
    this.$emit("input", e), this.internalValue = e, this.didSelectFromOptions || (this.searchInputOriginal = e, this.currentIndex = null);
  }, getSectionRef: function(t) {
    return "computed_section_" + t;
  }, getItemByIndex: function(t) {
    var e = false;
    if (null === t)
      return e;
    for (var n = 0; n < this.computedSections.length; n++)
      if (t >= this.computedSections[n].start_index && t <= this.computedSections[n].end_index) {
        var s = t - this.computedSections[n].start_index, i = this.computedSections[n].name, r = this.$refs[this.getSectionRef("" + i + n)][0];
        if (r) {
          e = this.normalizeItem(this.computedSections[n].name, this.computedSections[n].type, r.section.label, r.section.liClass, r.getItemByIndex(s));
          break;
        }
      }
    return e;
  }, handleKeyStroke: function(t) {
    var e = this, n = t.keyCode;
    if (!([16, 9, 17, 18, 91, 93].indexOf(n) > -1)) {
      var s = !this.isOpen;
      if (this.loading = false, this.didSelectFromOptions = false, this.isOpen)
        switch (n) {
          case 40:
          case 38:
            if (t.preventDefault(), 38 === n && null === this.currentIndex)
              break;
            var i = 40 === n ? 1 : -1, r = Math.max((parseInt(this.currentIndex) || 0) + (s ? 0 : i), INDEX_IS_FOCUSED_ON_INPUT);
            this.setCurrentIndex(r, this.totalResults), this.didSelectFromOptions = true, this.totalResults > 0 && this.currentIndex >= 0 ? (this.setChangeItem(this.getItemByIndex(this.currentIndex)), this.didSelectFromOptions = true) : this.currentIndex === INDEX_IS_FOCUSED_ON_INPUT && (this.setChangeItem(null), this.internalValue = this.searchInputOriginal, t.preventDefault()), this.$nextTick(function() {
              e.ensureItemVisible(e.currentItem, e.currentIndex);
            });
            break;
          case 13:
            t.preventDefault(), this.totalResults > 0 && this.currentIndex >= 0 && (this.setChangeItem(this.getItemByIndex(this.currentIndex), true), this.didSelectFromOptions = true), this.loading = true, this.listeners.selected(this.didSelectFromOptions);
            break;
          case 27:
            this.loading = true, this.currentIndex = null, this.internalValue = this.searchInputOriginal, this.$emit("input", this.searchInputOriginal), t.preventDefault();
        }
    }
  }, setChangeItem: function(t, e) {
    if (void 0 === e && (e = false), null !== this.currentIndex && t) {
      if (t) {
        this.currentItem = t, this.$emit("item-changed", t, this.currentIndex);
        var n = this.getSuggestionValue(t);
        this.internalValue = n, e && (this.searchInputOriginal = n), this.ensureItemVisible(t, this.currentIndex);
      }
    } else
      this.currentItem = null, this.$emit("item-changed", null, null);
  }, normalizeItem: function(t, e, n, s, i) {
    return { name: t, type: e, label: n, liClass: i.liClass || s, item: i };
  }, ensureItemVisible: function(t, e, n) {
    var s = this.$el.querySelector(n || "." + this._componentAttrClassAutosuggestResults);
    if (s) {
      var i = s.querySelector("#" + this.componentAttrPrefix + "__results-item--" + e);
      if (i) {
        var r = s.clientHeight, o = s.scrollTop, u = i.clientHeight, l = i.offsetTop;
        u + l >= o + r ? s.scrollTop = u + l - r : l < o && o > 0 && (s.scrollTop = l);
      }
    }
  }, updateCurrentIndex: function(t) {
    this.setCurrentIndex(t, -1, true);
  }, clickedOnScrollbar: function(t, e) {
    var n = this.$el.querySelector("." + this._componentAttrClassAutosuggestResults), s = n && n.clientWidth <= e + 17 && e + 17 <= n.clientWidth + 34;
    return "DIV" === t.target.tagName && n && s || false;
  }, onDocumentMouseDown: function(t) {
    var e = t.target.getBoundingClientRect ? t.target.getBoundingClientRect() : 0;
    this.clientXMouseDownInitial = t.clientX - e.left;
  }, onDocumentMouseUp: function(t) {
    if (!this.$el.contains(t.target))
      return this.loading = true, void (this.currentIndex = null);
    "INPUT" === t.target.tagName || this.clickedOnScrollbar(t, this.clientXMouseDownInitial) || (this.loading = true, this.didSelectFromOptions = true, this.setChangeItem(this.getItemByIndex(this.currentIndex), true), this.listeners.selected(true));
  }, setCurrentIndex: function(t, e, n) {
    void 0 === e && (e = -1), void 0 === n && (n = false);
    var s = t;
    n || (null === this.currentIndex || t >= e) && (s = 0);
    this.currentIndex = s;
    var i = this.$el.querySelector("#" + this.componentAttrPrefix + "__results-item--" + this.currentIndex), r = this.componentAttrPrefix + "__results-item--highlighted";
    this.$el.querySelector("." + r) && removeClass(this.$el.querySelector("." + r), r), i && addClass(i, r);
  } } };
  var VueAutosuggestPlugin = { install: function(t) {
    t.component("vue-autosuggest-default-section", DefaultSection), t.component("vue-autosuggest", VueAutosuggest);
  } };
  "undefined" != typeof window && window.Vue && window.Vue.use(VueAutosuggestPlugin);
  var vue_autosuggest_esm_default = VueAutosuggestPlugin;

  // node_modules/fuse.js/dist/fuse.esm.js
  function isArray2(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString3(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString2(value) {
    return typeof value === "string";
  }
  function isNumber2(value) {
    return typeof value === "number";
  }
  function isBoolean2(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject2(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject2(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        totalWeight += obj.weight;
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString2(key) || isArray2(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray2(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray2(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(obj2);
      } else {
        let key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString2(value) || isNumber2(value) || isBoolean2(value))) {
          list.push(toString3(value));
        } else if (isArray2(value)) {
          arr = true;
          for (let i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path2, index + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1);
        }
      }
    };
    deepGet(obj, isString2(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  };
  var BasicOptions = {
    isCaseSensitive: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  var FuzzyOptions = {
    location: 0,
    threshold: 0.6,
    distance: 100
  };
  var AdvancedOptions = {
    useExtendedSearch: false,
    getFn: get,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  };
  var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString2(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    add(doc) {
      const idx = this.size();
      if (isString2(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray2(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString2(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray2(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            } else
              ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString2(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for (let len = matchmask.length; i < len; i += 1) {
      let match = matchmask[i];
      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location: location2 = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location2, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i = 0;
        while (i < patternLen) {
          matchMask[index + i] = 1;
          i += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i = 0; i < patternLen; i += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i) - 1;
      for (let j = finish; j >= start; j -= 1) {
        let currentLocation = j - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        if (i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }
        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i = 0, len = pattern.length; i < len; i += 1) {
      const char = pattern.charAt(i);
      mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
  }
  var BitapSearch = class {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, includeMatches } = this.options;
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location: location2,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location2 + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index = text.indexOf(this.pattern);
      const isMatch = index === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location2 = 0;
      let index;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index = text.indexOf(this.pattern, location2)) > -1) {
        location2 = index + patternLen;
        indices.push([index, location2 - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i = 0, len = query.length; i < len; i += 1) {
        const queryItem = query[i];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location: location2,
        threshold,
        distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i = 0, qLen = query.length; i < qLen; i += 1) {
        const searchers2 = query[i];
        allIndices.length = 0;
        numMatches = 0;
        for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
          const searcher = searchers2[j];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray2(query) && isObject2(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString2(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray2(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches)
      transformers.push(transformMatches);
    if (includeScore)
      transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index) {
      this.options = __spreadValues(__spreadValues({}, Config), options);
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i = 0, len = this._docs.length; i < len; i += 1) {
        const doc = this._docs[i];
        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString2(query) ? isString2(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber2(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i = 0, len = node.children.length; i < len; i += 1) {
          const child = node.children[i];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray2(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "6.6.2";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }

  // js/application.ts
  import_vue.default.use(vue_autosuggest_esm_default);
  import_vue.default.config.productionTip = false;
  import_vue.default.config.devtools = false;
  var wp = createWordpressAxios();
  var html = String.raw;
  import_vue.default.component("Field", {
    props: ["value", "field"],
    template: html`<div v-if="!value">no value</div>
    <div v-else-if="field.settings.type === 'group'">group {{field.key}}</div>
    <div v-else-if="field.settings.type === 'text'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>

      <div v-if="field.key === 'organisatie_naam'">
        <OrganisationSearch v-model="model" @change="model = $event" />
      </div>
      <input
        v-else
        type="text"
        class="d-block inp"
        v-model="model"
        :readonly="!$root.editable"
      />
    </div>
    <div v-else-if="field.settings.type === 'textarea'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <textarea
        type="text"
        class="d-block inp"
        :rows="field.settings.rows"
        :maxlength="field.settings.maxlength"
        :readonly="!$root.editable"
      ></textarea>
    </div>
    <div v-else-if="field.settings.type === 'checkbox'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="checkbox"
          class="mr-2"
          v-model="model"
          :value="val"
          :disabled="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div
      v-else-if="field.settings.type === 'button_group'||field.settings.type === 'radio'"
    >
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="radio"
          class="mr-2"
          :value="val"
          :name="field.key"
          v-model="model"
          :disabled="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div v-else-if="field.settings.type === 'radio'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="radio"
          class="mr-2"
          v-model="model"
          :value="val"
          :readonly="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div v-else-if="field.settings.type === 'post_object'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      post object
    </div>
    <div v-else>
      Unexpected input type: {{field.settings.type}}
      <pre>{{field}}</pre>
    </div> `,
    computed: {
      model: {
        get() {
          var _a;
          const value = (_a = this.value[this.field.key]) != null ? _a : this.field.settings.default_value;
          if (this.field.settings.type === "checkbox" && !Array.isArray(value))
            return [];
          return value;
        },
        set(value) {
          if (!this.$root.editable)
            return;
          this.$set(this.value, this.field.key, value);
        }
      },
      enabled() {
        if (!Array.isArray(this.field.settings.conditional_logic))
          return true;
        return !this.field.settings.conditional_logic.flatMap().flatMap().find((c) => c.field);
      }
    },
    methods: {},
    mounted() {
      if (!this.value)
        this.$emit("change", {});
    }
  });
  import_vue.default.component("OrganisationSearch", {
    props: ["value"],
    template: html` <div>
    <vue-autosuggest
      :suggestions="[{data:suggestions}]"
      :input-props="{id:'autosuggest__input', value, placeholder:value||'Kies jouw organisatie'}"
      @input="onInputChange"
      @selected="selectHandler"
      @click="clickHandler"
    >
      <template slot-scope="{suggestion}">
        <span class="my-suggestion-item">{{suggestion.item}}</span>
      </template>
    </vue-autosuggest>
  </div>`,
    data() {
      return { query: "" };
    },
    computed: {
      suggestions() {
        return this.fuse.search(this.query).map((s) => s.item.title);
      },
      fuse() {
        const fuse = new Fuse(this.allSuggestions, { keys: ["title"] });
        return fuse;
      },
      allSuggestions() {
        return this.$root.allOrganisations || [];
      }
    },
    methods: {
      onInputChange(value) {
        console.log("query", value, this.query);
        this.query = value;
      },
      selectHandler(value) {
        console.log("selectHandler", value, this.query);
        if (value && value.item) {
          console.log("emitting", value.item);
          this.$emit("change", value.item);
        }
      },
      clickHandler(value) {
        console.log("clickHandler", value, this.query);
      }
    },
    mounted() {
    }
  });
  new import_vue.default({
    el: "#app",
    data() {
      const url = new URL(window.location.href);
      const draftIds = this.getDraftIds();
      return {
        draftId: url.searchParams.get("draftId") || "",
        editorId: parseInt(url.searchParams.get("editor")) || "",
        user: window.user,
        allGroupsPromise: null,
        allFieldsPromise: null,
        allFields: stale("allFields") || [],
        allGroups: stale("allGroups") || [{ title: "Aanvrager" }],
        allOrganisationsPromise: null,
        allOrganisations: stale("allOrganisations"),
        draftIds,
        editor: null,
        myApplicationsPromise: null,
        myApplications: null
      };
    },
    computed: {
      signedIn() {
        return window.user.ID;
      },
      userData() {
        return window.user.data || {};
      },
      applications() {
        if (!this.signedIn)
          return [];
        if (!this.myApplicationsPromise)
          setTimeout(() => this.loadMyApplications(), 10);
        return this.myApplications;
      },
      organisations() {
        if (!this.allOrganisationsPromise)
          setTimeout(() => this.loadAllOrganisations(), 10);
        return this.allOrganisations;
      },
      fieldIds() {
        return this.allFields.map((c) => c.id);
      },
      allowedFields() {
        const fields = this.allFields.filter((f) => f.settings.type !== "user").filter((f) => !f.settings.wrapper.class.includes("admin"));
        return fields.filter((c) => !this.fieldIds.includes(c.parent)).map(
          (parent) => Object.assign(parent, {
            children: fields.filter((f) => f.parent === parent.id)
          })
        );
      },
      visibleFields() {
        return this.allowedFields.filter(
          (f) => this.evaluateConditions(f.settings.conditional_logic)
        );
      },
      title() {
        return this.editor.title || "Nieuwe aanvraag";
      },
      drafts() {
        this.draftId;
        return this.draftIds.map((id) => stale(id));
      },
      status() {
        return this.editor && this.editor.acf && this.editor.acf.status;
      },
      editable() {
        return this.status === "draft";
      }
    },
    methods: {
      evaluateConditions(condition) {
        if (!condition)
          return true;
        return condition.some((or) => !or.some((c) => this.evaluateCondition(c)));
      },
      evaluateCondition(condition) {
        if (!condition)
          return true;
        const field = this.allFields.find((f) => f.slug === condition.field);
        if (!field)
          return false;
        const parent = this.allFields.find((f) => f.id === field.parent);
        const value = parent ? this.editor.acf[parent.key][field.key] : this.editor.acf[field.key];
        switch (condition.operator) {
          case "==":
            return value === condition.value;
        }
        console.warn("missing operator");
        return true;
      },
      getDraftIds() {
        return Object.keys(window.localStorage).filter(
          (d) => d.startsWith("draft/")
        );
      },
      createDraft() {
        this.editor = this.emptyDraft();
        const url = new URL(window.location.href);
        url.searchParams.set("draftId", this.editor.draftId);
        this.visitURL(url);
      },
      emptyDraft() {
        return {
          draftId: Math.random().toString(36).slice(2),
          createdAt: new Date().toJSON(),
          id: 0,
          acf: { status: "draft" },
          slug: {}
        };
      },
      edit(application) {
        const url = new URL(window.location.href);
        url.hash = "";
        if (application.draftId) {
          let draftId = application.draftId.replace("draft/", "");
          this.editor = stale("draft/" + draftId);
          if (!this.editor) {
            return alert("This draft is not available");
          }
          if (url.searchParams.get("draftId") === draftId)
            return;
          url.searchParams.set("draftId", draftId);
        } else if (application.id) {
          this.editorId = application.id;
          this.editor = application;
          if (url.searchParams.get("editor") === application.id)
            return;
          url.searchParams.set("editor", application.id);
          url.searchParams.set("editor", application.id);
        }
        this.visitURL(url);
      },
      removeDraft(app) {
        var _a;
        delete window.localStorage["draft/" + ((_a = app == null ? void 0 : app.draftId) == null ? void 0 : _a.replace("draft/", ""))];
        this.draftIds = this.getDraftIds();
      },
      async loadGroups() {
        const promise = wp.get("/wp/v2/acf-field-group");
        this.allGroupsPromise = promise;
        this.allGroups = (await promise).data;
        persist("allGroups", this.allGroups);
      },
      async loadFields() {
        const promise = wp.get("/wp/v2/acf-field", {
          params: { per_page: 99 }
        });
        this.allFieldsPromise = promise;
        this.allFields = (await promise).data.sort(
          (a, b) => a.menu_order - b.menu_order
        );
        persist("allFields", this.allFields);
      },
      async loadMyApplications() {
        const promise = wp.get("/wp/v2/application");
        this.myApplicationsPromise = promise;
        this.myApplications = (await promise).data.reverse();
        return this.myApplications;
      },
      async loadAllOrganisations() {
        const promise = wp.get(
          "/subsidy-application/organisations"
        );
        this.allOrganisationsPromise = promise;
        this.allOrganisations = (await promise).data.reverse();
        persist("allOrganisations", this.allOrganisations);
        return this.myApplications;
      },
      async save(application) {
        const saved = await wp.post("/wp/v2/application/", {});
      },
      async review(application) {
      },
      async remove(application) {
        const ok = await wp.delete("/wp/v2/application/" + application.id);
        this.reconsider();
      },
      visit(event) {
        event.preventDefault();
        const url = new URL(event.target.href || event.target.parentElement.href);
        this.draftId = url.searchParams.get("draftId") || "";
        this.editorId = url.searchParams.get("editor");
        if (!this.editorId)
          this.editor = null;
        this.visitURL(url, false);
      },
      visitURL(url, back = false) {
        console.log("url", url.toString());
        const before = this.draftId;
        this.draftId = url.searchParams.get("draftId") || "";
        if (!this.draftId && before)
          this.editor = null;
        console.log("scrointview");
        document.body.scrollIntoView();
        if (!back)
          window.history.pushState({}, "", url);
      },
      types(app) {
        return Array.isArray(app.acf.type) ? app.acf.type : [];
      },
      isEditable(app) {
        return app && app.acf && app.acf.status === "draft";
      },
      clear() {
        window.localStorage.clear();
        location.reload();
      },
      reconsider() {
        this.loadMyApplications();
      }
    },
    mounted() {
      this.loadGroups();
      this.loadFields();
      if (this.signedIn) {
        this.loadMyApplications().then((apps) => {
          const app = apps.find((a) => a.id === this.editorId);
          app && this.edit(app);
        });
      }
      if (this.draftId && !this.editor) {
        this.edit(this.draftId);
      }
      window.addEventListener("focus", this.reconsider);
      window.addEventListener("visible", this.reconsider);
      setTimeout(() => {
        window.addEventListener(
          "popstate",
          () => {
            console.log("postate");
            this.visitURL(new URL(window.location.href), true);
          },
          false
        );
      }, 500);
    },
    watch: {
      editor: {
        deep: true,
        handler(d) {
          if (d)
            persist("draft/" + d.draftId, d);
        }
      }
    }
  });
  function persist(key, data) {
    try {
      window.localStorage[key] = JSON.stringify({
        at: new Date(),
        data
      });
    } catch (error) {
    }
  }
  function stale(key) {
    try {
      const data = window.localStorage[key];
      if (!data)
        return;
      return JSON.parse(data).data;
    } catch (error) {
    }
  }
  function createWordpressAxios() {
    return axios_default2.create({
      baseURL: window.restUrl,
      headers: {
        "X-WP-Nonce": window.wpNonce
      }
    });
  }
})();
/*!
 * Vue.js v2.7.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
//# sourceMappingURL=application.js.map
