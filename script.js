/******/ var __webpack_modules__ = ({

/***/ 914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(483),
  ca = __webpack_require__(557);
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set(),
  ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
  ja = Object.prototype.hasOwnProperty,
  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(a) {
  if (ja.call(ma, a)) return !0;
  if (ja.call(la, a)) return !1;
  if (ka.test(a)) return ma[a] = !0;
  la[a] = !0;
  return !1;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;
  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return !1;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return !1 === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}
function v(a, b, c, d, e, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  z[a] = new v(a, 0, !1, a, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  z[b] = new v(b, 1, !1, a[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  z[a] = new v(a, 3, !0, a, null, !1, !1);
});
["capture", "download"].forEach(function (a) {
  z[a] = new v(a, 4, !1, a, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  z[a] = new v(a, 6, !1, a, null, !1, !1);
});
["rowSpan", "start"].forEach(function (a) {
  z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign,
  La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = !1;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = !0;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) {
      if (b = function () {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (l) {
        d = l;
      }
      a();
    }
  } catch (l) {
    if (l && d && "string" === typeof l.stack) {
      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
        if (1 !== g || 1 !== h) {
          do if (g--, h--, 0 > h || e[g] !== f[h]) {
            var k = "\n" + e[g].replace(" at new ", " at ");
            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
            return k;
          } while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = !1, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, !1), a;
    case 11:
      return a = Oa(a.type.render, !1), a;
    case 1:
      return a = Oa(a.type, !0), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {}
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value",
    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
    d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
      f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function () {
        return e.call(this);
      },
      set: function (a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function () {
        return d;
      },
      setValue: function (a) {
        d = "" + a;
      },
      stopTracking: function () {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
    d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, !1);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value),
    d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = !0);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = {
    initialValue: Sa(c)
  };
}
function ib(a, b) {
  var c = Sa(b.value),
    d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb,
  nb = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
      for (; b.firstChild;) a.appendChild(b.firstChild);
    }
  });
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (a) {
  qb.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
      e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb,
      b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {}
var Ib = !1;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = !0;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = !1;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = !1;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", {
    get: function () {
      Lb = !0;
    }
  });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = !1;
}
function Nb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (a) {
      Ob = !0;
      Pb = a;
    }
  };
function Tb(a, b, c, d, e, f, g, h, k) {
  Ob = !1;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l = Pb;
      Ob = !1;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = !0, Rb = l);
  }
}
function Vb(a) {
  var b = a,
    c = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    a = b;
    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return Xb(e), a;
        if (f === d) return Xb(e), b;
        f = f.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a;) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0,
    e = a.suspendedLanes,
    f = a.pingedLanes,
    g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5E3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
    var g = 31 - oc(f),
      h = 1 << g,
      k = e[g];
    if (-1 === k) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c;) {
    var e = 31 - oc(c),
      f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c;) {
    var d = 31 - oc(c),
      e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f) return a = {
    blockedOn: b,
    domEventName: c,
    eventSystemFlags: d,
    nativeEvent: f,
    targetContainers: [e]
  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), !0;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), !0;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), !0;
    case "pointerover":
      var f = e.pointerId;
      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
      return !0;
    case "gotpointercapture":
      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
  }
  return !1;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) if (b = c.tag, 13 === b) {
      if (b = Wb(c), null !== b) {
        a.blockedOn = b;
        Ic(a.priority, function () {
          Gc(c);
        });
        return;
      }
    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
      return;
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return !1;
  for (var b = a.targetContainers; 0 < b.length;) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
    b.shift();
  }
  return !0;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = !1;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b) {
    return ad(b, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function gd(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e;) {
        var f = Cb(e);
        null !== f && Ec(f);
        f = Yc(a, b, c, d);
        null === f && hd(a, b, d, id, c);
        if (f === e) break;
        e = f;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var a,
    b = ld,
    c = b.length,
    d,
    e = "value" in kd ? kd.value : kd.textContent,
    f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++);
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(a) {
  function b(b, d, e, f, g) {
    this._reactName = b;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
    },
    stopPropagation: function () {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
    },
    persist: function () {},
    isPersistent: pd
  });
  return b;
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  td = rd(sd),
  ud = A({}, sd, {
    view: 0,
    detail: 0
  }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function (a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    },
    movementY: function (a) {
      return "movementY" in a ? a.movementY : xd;
    }
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, {
    dataTransfer: 0
  }),
  Dd = rd(Cd),
  Ed = A({}, ud, {
    relatedTarget: 0
  }),
  Fd = rd(Ed),
  Gd = A({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }),
  Jd = rd(Id),
  Kd = A({}, sd, {
    data: 0
  }),
  Ld = rd(Kd),
  Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (a) {
      return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function (a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function (a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function (a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && "CompositionEvent" in window,
  be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be,
  de = ia && (!ae || be && 8 < be && 11 >= be),
  ee = String.fromCharCode(32),
  fe = !1;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = !1;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = !0;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
    event: c,
    listeners: b
  }));
}
var pe = null,
  qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = ("oninput" in document);
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
    d = Object.keys(b);
  if (c.length !== d.length) return !1;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
  }
  return !0;
}
function Je(a) {
  for (; a && a.firstChild;) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }
    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }
    if (c) a = b.contentWindow;else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(),
    c = a.focusedElem,
    d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
      a = a.getSelection();
      var e = c.textContent.length,
        f = Math.min(d.start, e);
      d = void 0 === d.end ? f : Math.min(d.end, e);
      !a.extend && f > d && (e = d, d = f, f = e);
      e = Ke(c, f);
      var g = Ke(c, d);
      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
    }
    b = [];
    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
      element: a,
      left: a.scrollLeft,
      top: a.scrollTop
    });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
    start: d.selectionStart,
    end: d.selectionEnd
  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
    anchorNode: d.anchorNode,
    anchorOffset: d.anchorOffset,
    focusNode: d.focusNode,
    focusOffset: d.focusOffset
  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
    event: b,
    listeners: d
  }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd")
  },
  Xe = {},
  Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a],
    c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c],
      e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g],
          k = h.instance,
          l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      } else for (g = 0; g < d.length; g++) {
        h = d[g];
        k = h.instance;
        l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, !1), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = !0;
    da.forEach(function (b) {
      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
  d ? void 0 !== e ? a.addEventListener(b, c, {
    capture: !0,
    passive: e
  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
    passive: e
  }) : a.addEventListener(b, c, !1);
}
function hd(a, b, c, d, e) {
  var f = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g;) {
        var k = g.tag;
        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
        g = g.return;
      }
      for (; null !== h;) {
        g = Wc(h);
        if (null === g) return;
        k = g.tag;
        if (5 === k || 6 === k) {
          d = f = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function () {
    var d = f,
      e = xb(c),
      g = [];
    a: {
      var h = df.get(a);
      if (void 0 !== h) {
        var k = td,
          n = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k = Rd;
            break;
          case "focusin":
            n = "focus";
            k = Fd;
            break;
          case "focusout":
            n = "blur";
            k = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Vd;
            break;
          case $e:
          case af:
          case bf:
            k = Hd;
            break;
          case cf:
            k = Xd;
            break;
          case "scroll":
            k = vd;
            break;
          case "wheel":
            k = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Td;
        }
        var t = 0 !== (b & 4),
          J = !t && "scroll" === a,
          x = t ? null !== h ? h + "Capture" : null : h;
        t = [];
        for (var w = d, u; null !== w;) {
          u = w;
          var F = u.stateNode;
          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
          if (J) break;
          w = w.return;
        }
        0 < t.length && (h = new k(h, n, null, c, e), g.push({
          event: h,
          listeners: t
        }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h = "mouseover" === a || "pointerover" === a;
        k = "mouseout" === a || "pointerout" === a;
        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
        if (k || h) {
          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
          if (k) {
            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
          } else k = null, n = d;
          if (k !== n) {
            t = Bd;
            F = "onMouseLeave";
            x = "onMouseEnter";
            w = "mouse";
            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
            J = null == k ? h : ue(k);
            u = null == n ? h : ue(n);
            h = new t(F, w + "leave", k, c, e);
            h.target = J;
            h.relatedTarget = u;
            F = null;
            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
            J = F;
            if (k && n) b: {
              t = k;
              x = n;
              w = 0;
              for (u = t; u; u = vf(u)) w++;
              u = 0;
              for (F = x; F; F = vf(F)) u++;
              for (; 0 < w - u;) t = vf(t), w--;
              for (; 0 < u - w;) x = vf(x), u--;
              for (; w--;) {
                if (t === x || null !== x && t === x.alternate) break b;
                t = vf(t);
                x = vf(x);
              }
              t = null;
            } else t = null;
            null !== k && wf(g, h, k, t, !1);
            null !== n && null !== J && wf(g, J, n, t, !0);
          }
        }
      }
      a: {
        h = d ? ue(d) : window;
        k = h.nodeName && h.nodeName.toLowerCase();
        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
          if (we) na = Fe;else {
            na = De;
            var xa = Ce;
          }
        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
        if (na && (na = na(a, d))) {
          ne(g, na, c, e);
          break a;
        }
        xa && xa(a, h, d);
        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
      }
      xa = d ? ue(d) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = !1;
          Ue(g, c, e);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g, c, e);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
        event: ba,
        listeners: xa
      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
        event: e,
        listeners: d
      }), e.data = $a);
    }
    se(g, b);
  });
}
function tf(a, b, c) {
  return {
    instance: a,
    listener: b,
    currentTarget: c
  };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a;) {
    var e = a,
      f = e.stateNode;
    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do a = a.return; while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; null !== c && c !== d;) {
    var h = c,
      k = h.alternate,
      l = h.stateNode;
    if (null !== k && k === d) break;
    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
    c = c.return;
  }
  0 !== g.length && a.push({
    event: b,
    listeners: g
  });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
  Hf = "function" === typeof Promise ? Promise : void 0,
  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
function If(a) {
  setTimeout(function () {
    throw a;
  });
}
function Kf(a, b) {
  var c = b,
    d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c;) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(a) {
  return {
    current: a
  };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
    f;
  for (f in c) e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return !0;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = !0;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = !0;
    var a = 0,
      b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do d = d(!0); while (null !== d);
      }
      eg = null;
      fg = !1;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = !1;
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - oc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f + a;
  } else rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
        id: rg,
        overflow: sg
      } : null, a.memoizedState = {
        dehydrated: b,
        treeContext: c,
        retryLane: 1073741824
      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
    default:
      return !1;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = !1;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return !1;
  if (!I) return Fg(a), I = !0, !1;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var a = yg; a;) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = !1;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a;) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a) if (a = {
    context: a,
    memoizedValue: b,
    next: null
  }, null === Og) {
    if (null === Ng) throw Error(p(308));
    Og = a;
    Ng.dependencies = {
      lanes: 0,
      firstContext: a
    };
  } else Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = !1;
function ah(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    firstBaseUpdate: a.firstBaseUpdate,
    lastBaseUpdate: a.lastBaseUpdate,
    shared: a.shared,
    effects: a.effects
  });
}
function ch(a, b) {
  return {
    eventTime: a,
    lane: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue,
    d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null,
      f = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = {
          eventTime: c.eventTime,
          lane: c.lane,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        };
        null === f ? e = f = g : f = f.next = g;
        c = c.next;
      } while (null !== c);
      null === f ? e = f = b : f = f.next = b;
    } else e = f = b;
    c = {
      baseState: d.baseState,
      firstBaseUpdate: e,
      lastBaseUpdate: f,
      shared: d.shared,
      effects: d.effects
    };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = !1;
  var f = e.firstBaseUpdate,
    g = e.lastBaseUpdate,
    h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k = h,
      l = k.next;
    k.next = null;
    null === g ? f = l : g.next = l;
    g = k;
    var m = a.alternate;
    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
  }
  if (null !== f) {
    var q = e.baseState;
    g = 0;
    m = l = k = null;
    h = f;
    do {
      var r = h.lane,
        y = h.eventTime;
      if ((d & r) === r) {
        null !== m && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n = a,
            t = h;
          r = b;
          y = c;
          switch (t.tag) {
            case 1:
              n = t.payload;
              if ("function" === typeof n) {
                q = n.call(y, q, r);
                break a;
              }
              q = n;
              break a;
            case 3:
              n.flags = n.flags & -65537 | 128;
            case 0:
              n = t.payload;
              r = "function" === typeof n ? n.call(y, q, r) : n;
              if (null === r || void 0 === r) break a;
              q = A({}, q, r);
              break a;
            case 2:
              $g = !0;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
      } else y = {
        eventTime: y,
        lane: r,
        tag: h.tag,
        payload: h.payload,
        callback: h.callback,
        next: null
      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
    } while (1);
    null === m && (k = q);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = m;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do g |= e.lane, e = e.next; while (e !== b);
    } else null === f && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b],
      e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = {
  isMounted: function (a) {
    return (a = a._reactInternals) ? Vb(a) === a : !1;
  },
  enqueueSetState: function (a, b, c) {
    a = a._reactInternals;
    var d = L(),
      e = lh(a),
      f = ch(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = dh(a, f, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  },
  enqueueReplaceState: function (a, b, c) {
    a = a._reactInternals;
    var d = L(),
      e = lh(a),
      f = ch(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = dh(a, f, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  },
  enqueueForceUpdate: function (a, b) {
    a = a._reactInternals;
    var c = L(),
      d = lh(a),
      e = ch(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = dh(a, e, d);
    null !== b && (mh(b, a, d, c), eh(b, a, d));
  }
};
function oh(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
}
function ph(a, b, c) {
  var d = !1,
    e = Vf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d,
        f = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
      b = function (a) {
        var b = e.refs;
        b === jh && (b = e.refs = {});
        null === a ? delete b[f] : b[f] = a;
      };
      b._stringRef = f;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b, c) {
    if (a) {
      var d = b.deletions;
      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
    }
  }
  function c(c, d) {
    if (!a) return null;
    for (; null !== d;) b(c, d), d = d.sibling;
    return null;
  }
  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    return a;
  }
  function e(a, b) {
    a = wh(a, b);
    a.index = 0;
    a.sibling = null;
    return a;
  }
  function f(b, c, d) {
    b.index = d;
    if (!a) return b.flags |= 1048576, c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
    b.flags |= 2;
    return c;
  }
  function g(b) {
    a && null === b.alternate && (b.flags |= 2);
    return b;
  }
  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function k(a, b, c, d) {
    var f = c.type;
    if (f === ya) return m(a, b, c.props.children, d, c.key);
    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
    d = yh(c.type, c.key, c.props, null, a.mode, d);
    d.ref = sh(a, b, c);
    d.return = a;
    return d;
  }
  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || []);
    b.return = a;
    return b;
  }
  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function q(a, b, c) {
    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case va:
          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
        case wa:
          return b = zh(b, a.mode, c), b.return = a, b;
        case Ha:
          var d = b._init;
          return q(a, d(b._payload), c);
      }
      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
      th(a, b);
    }
    return null;
  }
  function r(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case va:
          return c.key === e ? k(a, b, c, d) : null;
        case wa:
          return c.key === e ? l(a, b, c, d) : null;
        case Ha:
          return e = c._init, r(a, b, e(c._payload), d);
      }
      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
      th(a, c);
    }
    return null;
  }
  function y(a, b, c, d, e) {
    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case va:
          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
        case wa:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        case Ha:
          var f = d._init;
          return y(a, b, c, f(d._payload), e);
      }
      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      th(b, d);
    }
    return null;
  }
  function n(e, g, h, k) {
    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
      u.index > w ? (x = u, u = null) : x = u.sibling;
      var n = r(e, u, h[w], k);
      if (null === n) {
        null === u && (u = x);
        break;
      }
      a && u && null === n.alternate && b(e, u);
      g = f(n, g, w);
      null === m ? l = n : m.sibling = n;
      m = n;
      u = x;
    }
    if (w === h.length) return c(e, u), I && tg(e, w), l;
    if (null === u) {
      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
      I && tg(e, w);
      return l;
    }
    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
    a && u.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function t(e, g, h, k) {
    var l = Ka(h);
    if ("function" !== typeof l) throw Error(p(150));
    h = l.call(h);
    if (null == h) throw Error(p(151));
    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
      m.index > w ? (x = m, m = null) : x = m.sibling;
      var t = r(e, m, n.value, k);
      if (null === t) {
        null === m && (m = x);
        break;
      }
      a && m && null === t.alternate && b(e, m);
      g = f(t, g, w);
      null === u ? l = t : u.sibling = t;
      u = t;
      m = x;
    }
    if (n.done) return c(e, m), I && tg(e, w), l;
    if (null === m) {
      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
      I && tg(e, w);
      return l;
    }
    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
    a && m.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function J(a, d, f, h) {
    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
    if ("object" === typeof f && null !== f) {
      switch (f.$$typeof) {
        case va:
          a: {
            for (var k = f.key, l = d; null !== l;) {
              if (l.key === k) {
                k = f.type;
                if (k === ya) {
                  if (7 === l.tag) {
                    c(a, l.sibling);
                    d = e(l, f.props.children);
                    d.return = a;
                    a = d;
                    break a;
                  }
                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                  c(a, l.sibling);
                  d = e(l, f.props);
                  d.ref = sh(a, l, f);
                  d.return = a;
                  a = d;
                  break a;
                }
                c(a, l);
                break;
              } else b(a, l);
              l = l.sibling;
            }
            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case wa:
          a: {
            for (l = f.key; null !== d;) {
              if (d.key === l) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }
            d = zh(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
        case Ha:
          return l = f._init, J(a, d, l(f._payload), h);
      }
      if (eb(f)) return n(a, d, f, h);
      if (Ka(f)) return t(a, d, f, h);
      th(a, f);
    }
    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
  }
  return J;
}
var Bh = vh(!0),
  Ch = vh(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh) throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N = null,
  O = null,
  P = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b) return !1;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
  return !0;
}
function Xh(a, b, c, d, e, f) {
  Rh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f = 0;
    do {
      Th = !1;
      Uh = 0;
      if (25 <= f) throw Error(p(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = !1;
  if (b) throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b) P = b, O = a;else {
    if (null === a) throw Error(p(310));
    O = a;
    a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      baseQueue: O.baseQueue,
      queue: O.queue,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O,
    e = d.baseQueue,
    f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    f = e.next;
    d = d.baseState;
    var h = g = null,
      k = null,
      l = f;
    do {
      var m = l.lane;
      if ((Rh & m) === m) null !== k && (k = k.next = {
        lane: 0,
        action: l.action,
        hasEagerState: l.hasEagerState,
        eagerState: l.eagerState,
        next: null
      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
        var q = {
          lane: m,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        null === k ? (h = k = q, g = d) : k = k.next = q;
        N.lanes |= m;
        hh |= m;
      }
      l = l.next;
    } while (null !== l && l !== f);
    null === k ? g = d : k.next = h;
    He(d, b.memoizedState) || (Ug = !0);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do f = e.lane, N.lanes |= f, hh |= f, e = e.next; while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch,
    e = c.pending,
    f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do f = a(f, g.action), g = g.next; while (g !== e);
    He(f, b.memoizedState) || (Ug = !0);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function hi() {}
function ii(a, b) {
  var c = N,
    d = di(),
    e = b(),
    f = !He(d.memoizedState, e);
  f && (d.memoizedState = e, Ug = !0);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R) throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = {
    getSnapshot: b,
    value: c
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function () {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return !0;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ei,
    lastRenderedState: a
  };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(!0);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(!1), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = {
    lane: d,
    action: c,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a),
    e = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Hi(a)) Ii(b, e);else {
    var f = a.alternate;
    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
      var g = b.lastRenderedState,
        h = f(g, c);
      e.hasEagerState = !0;
      e.eagerState = h;
      if (He(h, g)) {
        var k = b.interleaved;
        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l) {} finally {}
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = !0;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1
  },
  Yh = {
    readContext: Vg,
    useCallback: function (a, b) {
      ci().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function (a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ti(4194308, 4, yi.bind(null, b, a), c);
    },
    useLayoutEffect: function (a, b) {
      return ti(4194308, 4, a, b);
    },
    useInsertionEffect: function (a, b) {
      return ti(4, 2, a, b);
    },
    useMemo: function (a, b) {
      var c = ci();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function (a, b, c) {
      var d = ci();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      d.queue = a;
      a = a.dispatch = Gi.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: function (a) {
      var b = ci();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function (a) {
      return ci().memoizedState = a;
    },
    useTransition: function () {
      var a = qi(!1),
        b = a[0];
      a = Ei.bind(null, a[1]);
      ci().memoizedState = a;
      return [b, a];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (a, b, c) {
      var d = N,
        e = ci();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === R) throw Error(p(349));
        0 !== (Rh & 30) || ni(d, b, c);
      }
      e.memoizedState = c;
      var f = {
        value: c,
        getSnapshot: b
      };
      e.queue = f;
      vi(ki.bind(null, d, f, a), [a]);
      d.flags |= 2048;
      li(9, mi.bind(null, d, f, c, b), void 0, null);
      return c;
    },
    useId: function () {
      var a = ci(),
        b = R.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Uh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function () {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (a) {
      var b = di();
      return Di(b, O.memoizedState, a);
    },
    useTransition: function () {
      var a = fi(ei)[0],
        b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function () {
      return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (a) {
      var b = di();
      return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
    },
    useTransition: function () {
      var a = gi(ei)[0],
        b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  };
function Ki(a, b) {
  try {
    var c = "",
      d = b;
    do c += Pa(d), d = d.return; while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {
    value: a,
    source: b,
    stack: e,
    digest: null
  };
}
function Li(a, b, c) {
  return {
    value: a,
    source: null,
    stack: null != c ? c : null,
    digest: null != b ? b : null
  };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function () {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;
  c.callback = function () {
    Pi || (Pi = !0, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function () {
      return d(e);
    };
    c.callback = function () {
      Mi(a, b);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f, e);
  c = bi();
  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f = c.type;
    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if (0 === (a.lanes & e)) {
    var g = f.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f = a.memoizedProps;
    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps,
    e = d.children,
    f = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) {
    if (0 === (b.mode & 1)) b.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, G(fj, gj), gj |= c;else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a,
        cachePool: null,
        transitions: null
      }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      };
      d = null !== f ? f.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f = Zf(c) ? Xf : H.current;
  f = Yf(b, f);
  Tg(b, e);
  c = Xh(a, b, c, d, f, e);
  d = bi();
  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f = !0;
    cg(b);
  } else f = !1;
  Tg(b, e);
  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
      h = b.memoizedProps;
    g.props = h;
    var k = g.context,
      l = c.contextType;
    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
    var m = c.getDerivedStateFromProps,
      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
    $g = !1;
    var r = b.memoizedState;
    g.state = r;
    gh(b, d, g, e);
    k = b.memoizedState;
    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l;
    q = b.pendingProps;
    r = g.context;
    k = c.contextType;
    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
    var y = c.getDerivedStateFromProps;
    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
    $g = !1;
    r = b.memoizedState;
    g.state = r;
    gh(b, d, g, e);
    var n = b.memoizedState;
    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
  }
  return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
  b.memoizedState = d.state;
  e && dg(b, c, !0);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function oj(a) {
  return {
    baseLanes: a,
    cachePool: null,
    transitions: null
  };
}
function pj(a, b, c) {
  var d = b.pendingProps,
    e = M.current,
    f = !1,
    g = 0 !== (b.flags & 128),
    h;
  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, g = {
      mode: "hidden",
      children: g
    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
  if (f) {
    f = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k = {
      mode: "hidden",
      children: d.children
    };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
    f.return = b;
    d.return = b;
    d.sibling = f;
    b.child = d;
    d = f;
    f = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : {
      baseLanes: g.baseLanes | c,
      cachePool: null,
      transitions: g.transitions
    };
    f.memoizedState = g;
    f.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f = a.child;
  a = f.sibling;
  d = wh(f, {
    mode: "visible",
    children: d.children
  });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({
    mode: "visible",
    children: b
  }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f = d.fallback;
    e = b.mode;
    d = qj({
      mode: "visible",
      children: d.children
    }, e, 0, null);
    f = Ah(f, e, g, null);
    f.flags |= 2;
    d.return = b;
    f.return = b;
    d.sibling = f;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f;
  }
  if (0 === (b.mode & 1)) return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f = Error(p(419));
    d = Li(f, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = !0;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailMode: e
  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps,
    e = d.revealOrder,
    f = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      xj(b, !1, e, c, f);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e;) {
        a = e.alternate;
        if (null !== a && null === Mh(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      xj(b, !0, c, null, f);
      break;
    case "together":
      xj(b, !1, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context,
        e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d) break;else return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function (a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function () {};
Cj = function (a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "select":
        e = A({}, e, {
          value: void 0
        });
        d = A({}, d, {
          value: void 0
        });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
      var h = e[l];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = null != e ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
        if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(l, c)), c = k;
      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l) b.flags |= 4;
  }
};
Dj = function (a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child,
    c = 0,
    d = 0;
  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d);
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f), D("invalid", d);
          }
          ub(c, f);
          e = null;
          for (var g in f) if (f.hasOwnProperty(g)) {
            var h = f[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f, !0);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
            is: d.is
          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, !1, !1);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a);
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = {
                  wasMultiple: !!d.multiple
                };
                e = A({}, d, {
                  value: void 0
                });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f in h) if (h.hasOwnProperty(f)) {
              var k = h[f];
              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, !1);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = !0;
                break a;
              default:
                d = !1;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
            case 3:
              Af(d.nodeValue, c, 0 !== (a.mode & 1));
              break;
            case 5:
              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
          }
          f && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f) throw Error(p(318));
            f = b.memoizedState;
            f = null !== f ? f.dehydrated : null;
            if (!f) throw Error(p(317));
            f[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f = !1;
        } else null !== zg && (Gj(zg), zg = null), f = !0;
        if (!f) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f = b.memoizedState;
      if (null === f) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f.rendering;
      if (null === g) {
        if (d) Ej(f, !1);else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
            g = Mh(a);
            if (null !== g) {
              b.flags |= 128;
              Ej(f, !1);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                lanes: a.lanes,
                firstContext: a.firstContext
              }), c = c.sibling;
              G(M, M.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
        }
      } else {
        if (!d) if (a = Mh(g), null !== a) {
          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
      }
      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = !1,
  U = !1,
  Lj = "function" === typeof WeakSet ? WeakSet : Set,
  V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  } else c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = !1;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = {
      start: a.selectionStart,
      end: a.selectionEnd
    };else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset,
          f = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f.nodeType;
        } catch (F) {
          c = null;
          break a;
        }
        var g = 0,
          h = -1,
          k = -1,
          l = 0,
          m = 0,
          q = a,
          r = null;
        b: for (;;) {
          for (var y;;) {
            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
            3 === q.nodeType && (g += q.nodeValue.length);
            if (null === (y = q.firstChild)) break;
            r = q;
            q = y;
          }
          for (;;) {
            if (q === a) break b;
            r === c && ++l === e && (h = g);
            r === f && ++m === d && (k = g);
            if (null !== (y = q.nextSibling)) break;
            q = r;
            r = q.parentNode;
          }
          q = y;
        }
        c = -1 === h || -1 === k ? null : {
          start: h,
          end: k
        };
      } else c = null;
    }
    c = c || {
      start: 0,
      end: 0
    };
  } else c = null;
  Df = {
    focusedElem: a,
    selectionRange: c
  };
  dd = !1;
  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
    b = V;
    try {
      var n = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n) {
            var t = n.memoizedProps,
              J = n.memoizedState,
              x = b.stateNode,
              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
            x.__reactInternalSnapshotBeforeUpdate = w;
          }
          break;
        case 3:
          var u = b.stateNode.containerInfo;
          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F) {
      W(b, b.return, F);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n = Oj;
  Oj = !1;
  return n;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        void 0 !== f && Nj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a: for (;;) {
    for (; null === a.sibling;) {
      if (null === a.return || Uj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
}
var X = null,
  Yj = !1;
function Zj(a, b, c) {
  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {}
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X,
        e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = !0;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f = e,
            g = f.destroy;
          f = f.tag;
          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function (b) {
      var d = ck.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f = a,
        g = b,
        h = g;
      a: for (; null !== h;) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Yj = !1;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Yj = !0;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Yj = !0;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      ak(f, g, e);
      X = null;
      Yj = !1;
      var k = e.alternate;
      null !== k && (k.return = null);
      e.return = null;
    } catch (l) {
      W(e, b, l);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate,
    d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t) {
          W(a, a.return, t);
        }
        try {
          Qj(5, a, a.return);
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t) {
          W(a, a.return, t);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f = a.memoizedProps,
          g = null !== c ? c.memoizedProps : f,
          h = a.type,
          k = a.updateQueue;
        a.updateQueue = null;
        if (null !== k) try {
          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
          vb(h, g);
          var l = vb(h, f);
          for (g = 0; g < k.length; g += 2) {
            var m = k[g],
              q = k[g + 1];
            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
          }
          switch (h) {
            case "input":
              bb(e, f);
              break;
            case "textarea":
              ib(e, f);
              break;
            case "select":
              var r = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f.multiple;
              var y = f.value;
              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
          }
          e[Pf] = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f = a.memoizedProps;
        try {
          e.nodeValue = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t) {
        W(a, a.return, t);
      }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
          for (q = V = m; null !== V;) {
            r = V;
            y = r.child;
            switch (r.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qj(4, r, r.return);
                break;
              case 1:
                Mj(r, r.return);
                var n = r.stateNode;
                if ("function" === typeof n.componentWillUnmount) {
                  d = r;
                  c = r.return;
                  try {
                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                  } catch (t) {
                    W(d, c, t);
                  }
                }
                break;
              case 5:
                Mj(r, r.return);
                break;
              case 22:
                if (null !== r.memoizedState) {
                  hk(q);
                  continue;
                }
            }
            null !== y ? (y.return = r, V = y) : hk(q);
          }
          m = m.sibling;
        }
        a: for (m = null, q = a;;) {
          if (5 === q.tag) {
            if (null === m) {
              m = q;
              try {
                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
              } catch (t) {
                W(a, a.return, t);
              }
            }
          } else if (6 === q.tag) {
            if (null === m) try {
              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
            } catch (t) {
              W(a, a.return, t);
            }
          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
            q.child.return = q;
            q = q.child;
            continue;
          }
          if (q === a) break a;
          for (; null === q.sibling;) {
            if (null === q.return || q.return === a) break a;
            m === q && (m = null);
            q = q.return;
          }
          m === q && (m = null);
          q.sibling.return = q.return;
          q = q.sibling;
        }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(b, a), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c;) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f = Vj(a);
          Xj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo,
            h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k) {
      W(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a, b, c);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V;) {
    var e = V,
      f = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate,
          k = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l = U;
        Kj = g;
        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
        for (; null !== f;) V = f, jk(f, b, c), f = f.sibling;
        V = e;
        Kj = h;
        U = l;
      }
      lk(a, b, c);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
  }
}
function lk(a) {
  for (; null !== V;) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Rj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f = b.updateQueue;
            null !== f && ih(b, f, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              ih(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k.autoFocus && c.focus();
                  break;
                case "img":
                  k.src && (c.src = k.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l = b.alternate;
              if (null !== l) {
                var m = l.memoizedState;
                if (null !== m) {
                  var q = m.dehydrated;
                  null !== q && bd(q);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Sj(b);
      } catch (r) {
        W(b, b.return, r);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V;) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V;) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k) {
            W(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              W(b, e, k);
            }
          }
          var f = b.return;
          try {
            Sj(b);
          } catch (k) {
            W(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k) {
            W(b, g, k);
          }
      }
    } catch (k) {
      W(b, b.return, k);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K = 0,
  R = null,
  Y = null,
  Z = 0,
  gj = 0,
  fj = Uf(0),
  T = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = Infinity,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
      0 === (K & 6) && jg();
    }), c = null;else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c) return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
    b = d;
    var e = K;
    K |= 2;
    var f = Kk();
    if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
    do try {
      Mk();
      break;
    } catch (h) {
      Nk(a, h);
    } while (1);
    Qg();
    nk.current = f;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b) Dk(a, d);else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d;) {
            var g = 31 - oc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a;;) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d],
          f = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f(), e)) return !1;
        } catch (g) {
          return !1;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return !0;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return !0;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b;) {
    var c = 31 - oc(b),
      d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition,
    d = C;
  try {
    if (pk.transition = null, C = 1, a) return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c;) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        Jh();
        E(Wf);
        E(H);
        Oh();
        break;
      case 5:
        Lh(d);
        break;
      case 4:
        Jh();
        break;
      case 13:
        E(M);
        break;
      case 19:
        E(M);
        break;
      case 10:
        Rg(d.type._context);
        break;
      case 22:
      case 23:
        Ij();
    }
    c = c.return;
  }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next,
        f = c.pending;
      if (null !== f) {
        var g = f.next;
        f.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d;) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = !1;
      }
      Rh = 0;
      P = O = N = null;
      Th = !1;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f = a,
          g = c.return,
          h = c,
          k = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
          var l = k,
            m = h,
            q = m.tag;
          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
            var r = m.alternate;
            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = Vi(g);
          if (null !== y) {
            y.flags &= -257;
            Wi(y, g, h, f, b);
            y.mode & 1 && Ti(f, l, b);
            b = y;
            k = l;
            var n = b.updateQueue;
            if (null === n) {
              var t = new Set();
              t.add(k);
              b.updateQueue = t;
            } else n.add(k);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f, l, b);
              uj();
              break a;
            }
            k = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J = Vi(g);
          if (null !== J) {
            0 === (J.flags & 65536) && (J.flags |= 256);
            Wi(J, g, h, f, b);
            Jg(Ki(k, h));
            break a;
          }
        }
        f = k = Ki(k, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f] : tk.push(f);
        f = g;
        do {
          switch (f.tag) {
            case 3:
              f.flags |= 65536;
              b &= -b;
              f.lanes |= b;
              var x = Oi(f, k, b);
              fh(f, x);
              break a;
            case 1:
              h = k;
              var w = f.type,
                u = f.stateNode;
              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var F = Ri(f, h, b);
                fh(f, F);
                break a;
              }
          }
          f = f.return;
        } while (null !== f);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b) vk = null, Lk(a, b);
  do try {
    Uk();
    break;
  } catch (e) {
    Nk(a, e);
  } while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y) throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y;) Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc();) Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C,
    e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do Ik(); while (null !== xk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Bc(a, f);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
    Ik();
    return null;
  }));
  f = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f) {
    f = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c, a, e);
    dc();
    K = h;
    C = g;
    pk.transition = f;
  } else a.current = c;
  wk && (wk = !1, xk = a, yk = e);
  f = a.pendingLanes;
  0 === f && (Si = null);
  mc(c.stateNode, d);
  Ek(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
    componentStack: e.stack,
    digest: e.digest
  });
  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f = a.pendingLanes;
  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk),
      b = pk.transition,
      c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk) var d = !1;else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V;) {
          var f = V,
            g = f.child;
          if (0 !== (V.flags & 16)) {
            var h = f.deletions;
            if (null !== h) {
              for (var k = 0; k < h.length; k++) {
                var l = h[k];
                for (V = l; null !== V;) {
                  var m = V;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m, f);
                  }
                  var q = m.child;
                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
                    m = V;
                    var r = m.sibling,
                      y = m.return;
                    Tj(m);
                    if (m === l) {
                      V = null;
                      break;
                    }
                    if (null !== r) {
                      r.return = y;
                      V = r;
                      break;
                    }
                    V = y;
                  }
                }
              }
              var n = f.alternate;
              if (null !== n) {
                var t = n.child;
                if (null !== t) {
                  n.child = null;
                  do {
                    var J = t.sibling;
                    t.sibling = null;
                    t = J;
                  } while (null !== t);
                }
              }
              V = f;
            }
          }
          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
            f = V;
            if (0 !== (f.flags & 2048)) switch (f.tag) {
              case 0:
              case 11:
              case 15:
                Qj(9, f, f.return);
            }
            var x = f.sibling;
            if (null !== x) {
              x.return = f.return;
              V = x;
              break b;
            }
            V = f.return;
          }
        }
        var w = a.current;
        for (V = w; null !== V;) {
          g = V;
          var u = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Rj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F = h.sibling;
            if (null !== F) {
              F.return = h.return;
              V = F;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {}
        d = !0;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return !1;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
    if (3 === b.tag) {
      Yk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
        a = Ki(c, a);
        a = Ri(b, a, 1);
        b = dh(b, a, 1);
        a = L();
        null !== b && (Ac(b, 1, a), Ek(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState,
    c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function (a, b, c) {
  if (null !== a) {
    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
    }
  } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated) {
          if (f = {
            element: d,
            isDehydrated: !1,
            cache: g.cache,
            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
            transitions: g.transitions
          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
        } else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f) if (He(f.value, g)) {
          if (f.children === e.children && !Wf.current) {
            b = $i(a, b, c);
            break a;
          }
        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
          var h = f.dependencies;
          if (null !== h) {
            g = f.child;
            for (var k = h.firstContext; null !== k;) {
              if (k.context === d) {
                if (1 === f.tag) {
                  k = ch(-1, c & -c);
                  k.tag = 2;
                  var l = f.updateQueue;
                  if (null !== l) {
                    l = l.shared;
                    var m = l.pending;
                    null === m ? k.next = k : (k.next = m.next, m.next = k);
                    l.pending = k;
                  }
                }
                f.lanes |= c;
                k = f.alternate;
                null !== k && (k.lanes |= c);
                Sg(f.return, c, b);
                h.lanes |= c;
                break;
              }
              k = k.next;
            }
          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
            g = f.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            Sg(g, c, b);
            g = f.sibling;
          } else g = f.child;
          if (null !== g) g.return = f;else for (g = f; null !== g;) {
            if (g === b) {
              g = null;
              break;
            }
            f = g.sibling;
            if (null !== f) {
              f.return = g.return;
              g = f;
              break;
            }
            g = g.return;
          }
          f = g;
        }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a) return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    lanes: b.lanes,
    firstContext: b.firstContext
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ya:
      return Ah(c.children, e, f, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
    case Ia:
      return qj(c, e, f, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = {
    isHidden: !1
  };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
  a = new bl(a, b, c, h, k);
  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
  f = Bg(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = {
    element: d,
    isDehydrated: c,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  };
  ah(f);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}
function el(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
  a = cl(c, d, !0, a, e, f, g, h, k);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f = ch(d, e);
  f.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current,
    f = L(),
    g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f, g);
  b.payload = {
    element: a
  };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function (a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function (a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function () {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function () {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function (a) {
  if (a) {
    var b = Hc();
    a = {
      blockedOn: null,
      target: a,
      priority: b
    };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f = d;
      d = function () {
        var a = hl(g);
        f.call(a);
      };
    }
    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild;) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function () {
      var a = hl(k);
      h.call(a);
    };
  }
  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
  a._reactRootContainer = k;
  a[uf] = k.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function () {
    gl(b, k, c, d);
  });
  return k;
}
function sl(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if ("function" === typeof e) {
      var h = e;
      e = function () {
        var a = hl(g);
        h.call(a);
      };
    }
    gl(b, g, a, e);
  } else g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function (a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function () {
        var b = Zg(a, 1);
        if (null !== b) {
          var c = L();
          mh(b, a, 1, c);
        }
      }), jl(a, 1);
  }
};
Fc = function (a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function (a) {
  if (13 === a.tag) {
    var b = lh(a),
      c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function () {
  return C;
};
Ic = function (a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function (a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
  }
};
Gb = Rk;
Hb = Sk;
var tl = {
    usingClientEntryPoint: !1,
    Events: [Cb, ue, Db, Eb, Fb, Rk]
  },
  ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  };
var vl = {
  bundleType: ul.bundleType,
  version: ul.version,
  rendererPackageName: ul.rendererPackageName,
  rendererConfig: ul.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ua.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  },
  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber) try {
    kc = wl.inject(vl), lc = wl;
  } catch (a) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
exports.createPortal = function (a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b)) throw Error(p(200));
  return dl(a, b, null, c);
};
exports.createRoot = function (a, b) {
  if (!ol(a)) throw Error(p(299));
  var c = !1,
    d = "",
    e = ll;
  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, !1, null, null, c, !1, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
exports.findDOMNode = function (a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
exports.flushSync = function (a) {
  return Sk(a);
};
exports.hydrate = function (a, b, c) {
  if (!pl(b)) throw Error(p(200));
  return sl(null, a, b, !0, c);
};
exports.hydrateRoot = function (a, b, c) {
  if (!ol(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null,
    e = !1,
    f = "",
    g = ll;
  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
  return new nl(b);
};
exports.render = function (a, b, c) {
  if (!pl(b)) throw Error(p(200));
  return sl(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function (a) {
  if (!pl(a)) throw Error(p(40));
  return a._reactRootContainer ? (Sk(function () {
    sl(null, null, a, !1, function () {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), !0) : !1;
};
exports.unstable_batchedUpdates = Rk;
exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
  if (!pl(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return sl(a, b, c, !1, d);
};
exports.version = "18.2.0-next-9e3b772b8-20220608";

/***/ }),

/***/ 998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(914);
} else {}

/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(483),
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
__webpack_unused_export__ = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol.for("react.element"),
  n = Symbol.for("react.portal"),
  p = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  C = Object.assign,
  D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = {
    current: null
  },
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, e) {
  var d,
    c = {},
    k = null,
    h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}
function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [],
    c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = {
    current: null
  },
  V = {
    transition: null
  },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
  };
exports.Children = {
  map: S,
  forEach: function (a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function (a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
    c = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};
exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};
exports.isValidElement = O;
exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};
exports.useContext = function (a) {
  return U.current.useContext(a);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};
exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};
exports.useId = function () {
  return U.current.useId();
};
exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};
exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};
exports.useRef = function (a) {
  return U.current.useRef(a);
};
exports.useState = function (a) {
  return U.current.useState(a);
};
exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
exports.useTransition = function () {
  return U.current.useTransition();
};
exports.version = "18.2.0";

/***/ }),

/***/ 483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(146);
} else {}

/***/ }),

/***/ 723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(9);
} else {}

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function f(a, b) {
  var c = a.length;
  a.push(b);
  a: for (; 0 < c;) {
    var d = c - 1 >>> 1,
      e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}
function h(a) {
  return 0 === a.length ? null : a[0];
}
function k(a) {
  if (0 === a.length) return null;
  var b = a[0],
    c = a.pop();
  if (c !== b) {
    a[0] = c;
    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
      var m = 2 * (d + 1) - 1,
        C = a[m],
        n = m + 1,
        x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
    }
  }
  return b;
}
function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;
  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
    q = p.now();
  exports.unstable_now = function () {
    return p.now() - q;
  };
}
var r = [],
  t = [],
  u = 1,
  v = null,
  y = 3,
  z = !1,
  A = !1,
  B = !1,
  D = "function" === typeof setTimeout ? setTimeout : null,
  E = "function" === typeof clearTimeout ? clearTimeout : null,
  F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
  for (var b = h(t); null !== b;) {
    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
    b = h(t);
  }
}
function H(a) {
  B = !1;
  G(a);
  if (!A) if (null !== h(r)) A = !0, I(J);else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}
function J(a, b) {
  A = !1;
  B && (B = !1, E(L), L = -1);
  z = !0;
  var c = y;
  try {
    G(b);
    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
      var d = v.callback;
      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);
      v = h(r);
    }
    if (null !== v) var w = !0;else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = !1;
    }
    return w;
  } finally {
    v = null, y = c, z = !1;
  }
}
var N = !1,
  O = null,
  L = -1,
  P = 5,
  Q = -1;
function M() {
  return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
  if (null !== O) {
    var a = exports.unstable_now();
    Q = a;
    var b = !0;
    try {
      b = O(!0, a);
    } finally {
      b ? S() : (N = !1, O = null);
    }
  } else N = !1;
}
var S;
if ("function" === typeof F) S = function () {
  F(R);
};else if ("undefined" !== typeof MessageChannel) {
  var T = new MessageChannel(),
    U = T.port2;
  T.port1.onmessage = R;
  S = function () {
    U.postMessage(null);
  };
} else S = function () {
  D(R, 0);
};
function I(a) {
  O = a;
  N || (N = !0, S());
}
function K(a, b) {
  L = D(function () {
    a(exports.unstable_now());
  }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};
exports.unstable_continueExecution = function () {
  A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function (a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function () {
  return y;
};
exports.unstable_getFirstCallbackNode = function () {
  return h(r);
};
exports.unstable_next = function (a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = y;
  }
  var c = y;
  y = b;
  try {
    return a();
  } finally {
    y = c;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = function () {};
exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = y;
  y = a;
  try {
    return b();
  } finally {
    y = c;
  }
};
exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
  switch (a) {
    case 1:
      var e = -1;
      break;
    case 2:
      e = 250;
      break;
    case 5:
      e = 1073741823;
      break;
    case 4:
      e = 1E4;
      break;
    default:
      e = 5E3;
  }
  e = c + e;
  a = {
    id: u++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
  return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function (a) {
  var b = y;
  return function () {
    var c = y;
    y = b;
    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};

/***/ }),

/***/ 557:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(122);
} else {}

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(998);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
function _classPrivateFieldBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var id = 0;
function _classPrivateFieldKey(name) {
  return "__private_" + id++ + "_" + name;
}
;// CONCATENATED MODULE: ./src/engine/util.js
function convertPointerEvent(e){var _e$targetTouches$,_e$targetTouches$2,_e$targetTouches$3,_e$targetTouches$4;e.offsetX=(_e$targetTouches$=e.targetTouches[0])===null||_e$targetTouches$===void 0?void 0:_e$targetTouches$.clientX;e.offsetY=(_e$targetTouches$2=e.targetTouches[0])===null||_e$targetTouches$2===void 0?void 0:_e$targetTouches$2.clientY;e.pageX=(_e$targetTouches$3=e.targetTouches[0])===null||_e$targetTouches$3===void 0?void 0:_e$targetTouches$3.pageX;e.pageY=(_e$targetTouches$4=e.targetTouches[0])===null||_e$targetTouches$4===void 0?void 0:_e$targetTouches$4.pageY;if(e.changedTouches){var _e$changedTouches$,_e$changedTouches$2;e.offsetX=(_e$changedTouches$=e.changedTouches[0])===null||_e$changedTouches$===void 0?void 0:_e$changedTouches$.clientX;e.offsetY=(_e$changedTouches$2=e.changedTouches[0])===null||_e$changedTouches$2===void 0?void 0:_e$changedTouches$2.clientY;//e.pageX = e.changedTouches[0]?.pageX
//e.pageY = e.changedTouches[0]?.pageY
}return e;}var _root=document;function setRoot(root){_root=root;}function registerEventByQuerySelectorAll(tag,event,callback){let root=arguments.length>3&&arguments[3]!==undefined?arguments[3]:_root;Array.from(root.querySelectorAll(tag)).forEach(e=>{e.addEventListener(event,callback);// callback(e)
});}function util_registerEvent(tag,event,callback){var _root$getElementById;let root=arguments.length>3&&arguments[3]!==undefined?arguments[3]:_root;(_root$getElementById=root.getElementById(tag))===null||_root$getElementById===void 0?void 0:_root$getElementById.addEventListener(event,e=>{e.preventDefault();callback(e);},{passive:false});}// export function registerEvents(tags, event, callback, root = _root) {
//   tags.forEach((tag) => {
//     root.getElementById(tag)?.addEventListener(event, callback)
//     if (event === 'pointerdown') {
//       root.getElementById(tag)?.addEventListener('touchstart', callback)
//     } else if (event === 'pointerup') {
//       root.getElementById(tag)?.addEventListener('touchend', callback)
//     } else if (event === 'pointermove') {
//       root.getElementById(tag)?.addEventListener('touchmove', callback)
//     }
//   })
// }
function util_getElement(tag){let root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_root;return root.getElementById(tag);}function getElementsByQuerySelector(tag){let root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_root;return root.querySelector(tag);}function getElementsByQuerySelectorAll(tag){let root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_root;return root.querySelectorAll(tag);}function toggleVisibility(tag){var _root$getElementById2;let root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_root;return(_root$getElementById2=root.getElementById(tag))===null||_root$getElementById2===void 0?void 0:_root$getElementById2.classList.toggle('invisible');}function toggleHidden(tag){var _root$getElementById3;let root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_root;return(_root$getElementById3=root.getElementById(tag))===null||_root$getElementById3===void 0?void 0:_root$getElementById3.classList.toggle('hidden');}function togggleAnimation(tag,animation){var _root$getElementById4;let root=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_root;return(_root$getElementById4=root.getElementById(tag))===null||_root$getElementById4===void 0?void 0:_root$getElementById4.classList.toggle(animation);}function log(message){let logLevel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'info';console.log(message);}// 정다각형 꼭지점 좌표
function getRegularPolygonCoordinatesBySideLength(n,sideLength){const radius=sideLength/(2*Math.sin(Math.PI/n));const coordinates=[];const angle=2*Math.PI/n;let internalAngle=180*(n-2);if(n===3||n===6){internalAngle=60;}else if(n===4){internalAngle=90;}const rotationAngle=internalAngle/2*Math.PI/180;for(let i=0;i<n;i++){const x=radius*Math.cos(i*angle);const y=radius*Math.sin(i*angle);const newX=x*Math.cos(rotationAngle)-y*Math.sin(rotationAngle);const newY=x*Math.sin(rotationAngle)+y*Math.cos(rotationAngle);coordinates.push([newX,newY]);}if(n===7||n===11||n===15){return coordinates.map(coordinate=>getSymmetricPoints(coordinate,{cy:0}));}else{return coordinates;}}// 정다각형 꼭지점 좌표
function getRegularPolygonCoordinatesByRadius(n){let radius=arguments.length>1&&arguments[1]!==undefined?arguments[1]:150;const coordinates=[];const angle=2*Math.PI/n;let internalAngle=180*(n-2);if(n===3||n===6){internalAngle=60;}else if(n===4){internalAngle=90;}const rotationAngle=internalAngle/2*Math.PI/180;for(let i=0;i<n;i++){const x=radius*Math.cos(i*angle);const y=radius*Math.sin(i*angle);const newX=x*Math.cos(rotationAngle)-y*Math.sin(rotationAngle);const newY=x*Math.sin(rotationAngle)+y*Math.cos(rotationAngle);coordinates.push([newX,newY]);}if(n===7||n===11||n===15){return coordinates.map(coordinate=>getSymmetricPoints(coordinate,{cy:0}));}else{return coordinates;}}// 다각형 꼭지점울 둘러싸고있는 직사각형 좌표
function getSurroundVertexCoordinate(arr){return arr.reduce((acc,_ref)=>{let[x,y]=_ref;return{minX:Math.min(acc.minX,x),maxX:Math.max(acc.maxX,x),minY:Math.min(acc.minY,y),maxY:Math.max(acc.maxY,y)};},{minX:arr[0][0],maxX:arr[0][0],minY:arr[0][1],maxY:arr[0][1]});}function getCoordinatesXY(arr,x,y){return arr.map(_ref2=>{let[a,b]=_ref2;return[a+x,b+y];});}// 다각형 꼭지점을 잇는 path 경로
function getPathDistanceAttribute(arr){return arr.reduce((acc,_ref3,index)=>{let[x,y]=_ref3;return index===0?"M".concat(x,",").concat(y):"".concat(acc," L").concat(x,",").concat(y);},'')+' Z';}function getPathDistanceAttributeByRx(arr){let rx=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return arr.reduce((acc,_ref4,index,curArr)=>{let[x,y]=_ref4;if(index===0){return"M".concat(x+rx,",").concat(y);}else if(index===1){return"".concat(acc," L").concat(x-rx,",").concat(y," Q").concat(x,",").concat(y," ").concat(x,",").concat(y-rx);}else if(index===2){return"".concat(acc," L").concat(x,",").concat(y+rx," Q").concat(x,",").concat(y," ").concat(x-rx,",").concat(y);}else if(index===3){return"\n        ".concat(acc," L").concat(rx,",").concat(y," Q").concat(x,",").concat(y," ").concat(x,",").concat(y+rx,"\n        L").concat(curArr[0][0],",").concat(-rx,"\n        Q").concat(curArr[0][0],",").concat(curArr[0][1]," ").concat(curArr[0][0]+rx,",").concat(curArr[0][1]);}else{return'';}},'')+' Z';}// 직사각형을 a만큼 넓힌 좌표
function getExpandRectangleCoordinates(arr,a){const[x1,y1]=arr[0];const[x2,y2]=arr[1];const[x3,y3]=arr[2];const[x4,y4]=arr[3];const expandedRectangle=[[x1-a,y1-a],[x2+a,y2-a],[x3+a,y3+a],[x4-a,y4+a]];return expandedRectangle;}// 직사각형 각변의 중점 좌표
function getRectangleMidpoints(arr){const midpoints=[];for(let i=0;i<arr.length;i++){const currentPoint=arr[i];const nextPoint=arr[(i+1)%arr.length];const midpointX=(currentPoint[0]+nextPoint[0])/2;const midpointY=(currentPoint[1]+nextPoint[1])/2;midpoints.push([midpointX,midpointY]);}return midpoints;}// x1, y1에서 angleDeg만큼 회전한 새로운 좌표
function getRotatePoint(x1,y1,angleDeg){const deg=(angleDeg%360+360)%360;const angleRad=deg*Math.PI/180;const cosTheta=Math.cos(angleRad);const sinTheta=Math.sin(angleRad);const newX=x1*cosTheta-y1*sinTheta;const newY=x1*sinTheta+y1*cosTheta;return{x:newX,y:newY};}function rotatePointAroundCenter(x1,y1,cx,cy,angleDeg){// 각도를 라디안으로 변환
const deg=(angleDeg%360+360)%360;const angleRad=deg*Math.PI/180;// 코사인과 사인 값 계산
const cosTheta=Math.cos(angleRad);const sinTheta=Math.sin(angleRad);// 원점을 기준으로 회전하기 위해 점을 평행 이동
const translatedX=x1-cx;const translatedY=y1-cy;// 회전 변환
const rotatedX=translatedX*cosTheta-translatedY*sinTheta;const rotatedY=translatedX*sinTheta+translatedY*cosTheta;// 다시 원래의 중심으로 평행 이동
const newX=rotatedX+cx;const newY=rotatedY+cy;return{x:newX,y:newY};}// 두 점사이의 각도
function getCalculateRotation(point1,point2){const deltaX=point2.x-point1.x;const deltaY=point2.y-point1.y;const angleRad=Math.atan2(deltaX,-deltaY);let angleDeg=angleRad*180/Math.PI;if(angleDeg<0){angleDeg+=360;}return Math.round(angleDeg);}// 중심에서 두점사이의 각도
// flg = false, 시계방향으로 각도 계산
// flg = true, 시계반대방향으로 각도 계산
function getCalculateRotationFromCenter(center,point1,point2){let flg=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;const vector1={x:point1.x-center.x,y:point1.y-center.y};const vector2={x:point2.x-center.x,y:point2.y-center.y};const angleRad1=Math.atan2(vector1.y,vector1.x);const angleRad2=Math.atan2(vector2.y,vector2.x);let angleRad=flg?angleRad1-angleRad2:angleRad2-angleRad1;if(angleRad<0){angleRad+=2*Math.PI;}let angleDeg=angleRad*180/Math.PI;return Math.round(angleDeg);}function findIntersection(point1,point2,point3,point4){const{x:x1,y:y1}=point1;const{x:x2,y:y2}=point2;const{x:x3,y:y3}=point3;const{x:x4,y:y4}=point4;const denominator=(y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);if(denominator===0){return{x:0,y:0};}const ua=((x4-x3)*(y1-y3)-(y4-y3)*(x1-x3))/denominator;const ub=((x2-x1)*(y1-y3)-(y2-y1)*(x1-x3))/denominator;// 교점이 두 선분 모두에 속하지 않을 때
if(ua<0||ua>1||ub<0||ub>1){return{x:0,y:0};}// 교점 좌표 계산
const x=x1+ua*(x2-x1);const y=y1+ua*(y2-y1);return{x,y};}function pointOnLineSegment(point1,point2,point){const{x:x1,y:y1}=point1;const{x:x2,y:y2}=point2;const{x,y}=point;if(x1===x2&&y1===y2){return x===x1&&y===y1;}const m=(y2-y1)/(x2-x1);const b=y1-m*x1;// 새로운 점 C가 선분 위
return Math.abs(y-(m*x+b))<1&&x>=Math.min(x1,x2)&&x<=Math.max(x1,x2)&&y>=Math.min(y1,y2)&&y<=Math.max(y1,y2);}function calculatePointOnCircle(point1,point2,r){const angle=Math.atan2(point2.y-point1.y,point2.x-point1.x);const x=point1.x+r*Math.cos(angle);const y=point1.y+r*Math.sin(angle);return{x,y};}// 두 점 사이의 거리
function getDistanceBetweenTwoPoints(point1,point2){const dx=point2.x-point1.x;const dy=point2.y-point1.y;return Math.sqrt(dx*dx+dy*dy);}// 두점 사이의 거리가 스냅되는지 안되는지 확인
function getSnapCoordinateTwoPoint(point1,point2,distance){return Math.abs(point1[0]-point2[0])<=distance&&Math.abs(point1[1]-point2[1])<=distance;}// 그리드(배경)에 스냅되는 좌표
function getGridSnapCoordinate(x,y,grid,distance){const snapX=Math.round(x/grid)*grid;const snapY=Math.round(y/grid)*grid;if(Math.abs(snapX-x)<=distance&&Math.abs(snapY-y)<=distance){return{snapX,snapY};}else{return{snapX:x,snapY:y};}}// 회전된 새로운 좌표
function getRotatedCoordinates(coordinates,x,y,rotate){return coordinates===null||coordinates===void 0?void 0:coordinates.map(_ref5=>{let[pointX,pointY]=_ref5;const{x:rotatedX,y:rotatedY}=getRotatePoint(pointX,pointY,rotate);return[Math.round(rotatedX+x),Math.round(rotatedY+y)];});}// 두 직사각형의 교집합 영역 계산
function intersectionArea(rect1,rect2){const{minX:rect1MinX,maxX:rect1MaxX,minY:rect1MinY,maxY:rect1MaxY}=getSurroundVertexCoordinate(rect1);const{minX:rect2MinX,maxX:rect2MaxX,minY:rect2MinY,maxY:rect2MaxY}=getSurroundVertexCoordinate(rect2);const x_overlap=Math.max(0,Math.min(rect2MaxX,rect1MaxX)-Math.max(rect2MinX,rect1MinX));const y_overlap=Math.max(0,Math.min(rect2MaxY,rect1MaxY)-Math.max(rect2MinY,rect1MinY));return x_overlap*y_overlap;}// 사각형과 다른 사각형들의 교집합 계산
function calculateOverlap(rect,rects){let maxOverlap=0;let maxOverlapIndex=-1;for(let i=0;i<rects.length;i++){const{coordinates,x,y,rotate}=rects[i];const newCoordinates=getRotatedCoordinates(coordinates,x,y,rotate);const overlap=intersectionArea(rect,newCoordinates);if(overlap>maxOverlap){maxOverlap=overlap;maxOverlapIndex=i;}}return{index:maxOverlapIndex,overlapArea:maxOverlap};}// 다각형의 중심
function getCenterCoordinate(arr){if((arr===null||arr===void 0?void 0:arr.length)<3){return;}const{minX,minY,maxX,maxY}=getSurroundVertexCoordinate(arr);const cx=(minX+maxX)/2;const cy=(minY+maxY)/2;return{cx,cy};}// 다각형의 무게중심
function getCenterOfGravity(arr){const length=arr.length;const newArr=arr.reduce((acc,cur)=>[acc[0]+cur[0],acc[1]+cur[1]],[0,0]);return[newArr[0]/length,newArr[1]/length];}// 정다각형의 무게중심에서 꼭지점 까지 거리를 알 때, 한변의 길이를 구함
// radius: 무게중심에서 꼭지점까지 거리
function calculateSideLength(n,radius){let perLength=arguments.length>2&&arguments[2]!==undefined?arguments[2]:50;const value=2*radius*Math.sin(Math.PI/n);return Math.floor(value/perLength)*perLength;}// 다각형을 둘러싸는 직사각형의 좌표
function getSurroundCoordinates(coordinates,rotate){const{minX,maxX,minY,maxY}=getSurroundVertexCoordinate(coordinates);const arr=[[minX,minY],[maxX,minY],[maxX,maxY],[minX,maxY]];return getRotatedCoordinates(arr,0,0,rotate);}// 회전축 좌표
function getRotateCircleCoordinate(coordinates,rotate){const{minX,maxX,minY}=getSurroundVertexCoordinate(coordinates);return getRotatePoint((minX+maxX)/2,minY-40,rotate);}// 사각형안에 점이 들어가있는지 없는지 확인
function isPointInPolygon(point,polygon){const[x,y]=point;let inside=false;const polygonLength=polygon.length;for(let i=0,j=polygonLength-1;i<polygonLength;j=i++){const[xi,yi]=polygon[i];const[xj,yj]=polygon[j];const isYInside=yi>y!==yj>y;const isXInside=x<(xj-xi)*(y-yi)/(yj-yi)+xi;const intersect=isYInside&&isXInside;if(intersect){inside=!inside;}}return inside;}// x, y축 대칭된 좌표
function getSymmetricPoints(point,symmetricPoint){if(!symmetricPoint)return point;const[x,y]=point;const{cx,cy}=symmetricPoint;const newX=cx!==undefined?cy===0?-x:2*cx-x:x;const newY=cy!==undefined?cx===0?-y:2*cy-y:y;return[newX,newY];}// 두점과 수직이고 point2를 지나는 선분의 좌표
function findPerpendicularPoint(point1,point2){let l=arguments.length>2&&arguments[2]!==undefined?arguments[2]:100;const[x1,y1]=point1;const[x2,y2]=point2;if(x2===x1){return[{x:x1-l/10,y:y2},{x:x2+l/10,y:y2}];}if(y2===y1){return[{x:x2,y:y1-l/10},{x:x2,y:y2+l/10}];}// 두 점을 지나는 직선의 기울기
const slope=(y2-y1)/(x2-x1);// 중점 좌표 계산
const midX=(x1+x2)/2;const midY=(y1+y2)/2;// 수직인 직선의 기울기
const perpendicularSlope=-1/slope;// 점 (x2, y2)를 중심으로 하는 길이가 l인 선분의 좌표 계산
const deltaX=Math.sqrt(l/(1+perpendicularSlope*perpendicularSlope));const deltaY=perpendicularSlope*deltaX;const intersectionX=(perpendicularSlope*x2-slope*midX+midY-y2)/(perpendicularSlope-slope);const intersectionY=perpendicularSlope*(intersectionX-x2)+y2;// 선분의 끝점
const end1X=intersectionX+deltaX;const end1Y=intersectionY+deltaY;const end2X=intersectionX-deltaX;const end2Y=intersectionY-deltaY;return[{x:end1X,y:end1Y},{x:end2X,y:end2Y}];}function getCustomTextSvg(text){return"\n      <g>\n        <rect width=\"79\" height=\"40\" rx=\"8\" fill=\"#292D35\"/>        \n        <text\n          style=\"user-select:none;\"\n          x=\"42\"\n          y=\"28\"\n          text-anchor=\"middle\"\n          fill=\"#fff\"\n          font-size=\"20\"\n          font-weight=\"700\"\n        >\n          ".concat(text,"\n        </text>\n      </g>\n    ");}function getRhombusSvgPath(point,r){const[x,y]=point;return"M".concat(x,",").concat(y-r," L").concat(x-r,",").concat(y," L").concat(x,",").concat(y+r," L").concat(x+r,",").concat(y," Z");}window.addEventListener('shadowdom-ready',ev=>{_root=ev.detail.root;window.dispatchEvent(new Event('util-ready'));});// 두원의 교점
function findCircleIntersections(circle1,circle2){const{x:x1,y:y1,r:r1}=circle1;const{x:x2,y:y2,r:r2}=circle2;// 두 원의 중심 사이의 거리 계산
let d=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));// 두 원이 완전히 겹치는 경우나 한 원이 다른 원 안에 있는 경우 교점이 없음
if(d>r1+r2||d<Math.abs(r1-r2)){return[];}// 두 원의 교점이 하나인 경우
if(d===r1+r2||d===Math.abs(r1-r2)){const x=(r1*x2+r2*x1)/(r1+r2);const y=(r1*y2+r2*y1)/(r1+r2);return[{x:x,y:y}];}// 두 원의 교점이 두 개인 경우
let a=(Math.pow(r1,2)-Math.pow(r2,2)+Math.pow(d,2))/(2*d);let h=Math.sqrt(Math.pow(r1,2)-Math.pow(a,2));let x3=x1+a*(x2-x1)/d;let y3=y1+a*(y2-y1)/d;let x4=x3+h*(y2-y1)/d;let y4=y3-h*(x2-x1)/d;let x5=x3-h*(y2-y1)/d;let y5=y3+h*(x2-x1)/d;return[{x:x4,y:y4},{x:x5,y:y5}];}function isPointInsideCircle(point,circle){const{x,y}=point;const{x:cx,y:cy,r}=circle;const d=Math.sqrt(Math.pow(x-cx,2)+Math.pow(y-cy,2));return d<=r;}function getCopySvg(){return"\n    <svg width=\"43\" height=\"43\" viewBox=\"0 0 43 43\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" cursor=\"pointer\">\n      <g clip-path=\"url(#clip0_2977_2338)\">\n      <path d=\"M37.9029 5.86233L33.8107 1.63579C33.3081 1.11973 32.7076 0.709213 32.0443 0.428318C31.3809 0.147423 30.6682 0.00180319 29.9479 0L21.5002 0C19.4358 0.00260602 17.4354 0.716828 15.8363 2.02229C14.2371 3.32774 13.1368 5.14461 12.721 7.16667H12.5418C10.1668 7.16951 7.88987 8.11425 6.21047 9.79364C4.53108 11.473 3.58634 13.75 3.5835 16.125V34.0417C3.58634 36.4167 4.53108 38.6936 6.21047 40.373C7.88987 42.0524 10.1668 42.9972 12.5418 43H23.2918C25.6669 42.9972 27.9438 42.0524 29.6232 40.373C31.3026 38.6936 32.2473 36.4167 32.2502 34.0417V33.8625C34.2722 33.4467 36.0891 32.3464 37.3945 30.7472C38.7 29.1481 39.4142 27.1477 39.4168 25.0833V9.60333C39.4195 8.20658 38.8762 6.86409 37.9029 5.86233ZM23.2918 39.4167H12.5418C11.1163 39.4167 9.74914 38.8504 8.74113 37.8424C7.73312 36.8344 7.16683 35.4672 7.16683 34.0417V16.125C7.16683 14.6995 7.73312 13.3323 8.74113 12.3243C9.74914 11.3163 11.1163 10.75 12.5418 10.75V25.0833C12.5447 27.4584 13.4894 29.7353 15.1688 31.4147C16.8482 33.0941 19.1251 34.0388 21.5002 34.0417H28.6668C28.6668 35.4672 28.1005 36.8344 27.0925 37.8424C26.0845 38.8504 24.7174 39.4167 23.2918 39.4167ZM30.4585 30.4583H21.5002C20.0746 30.4583 18.7075 29.892 17.6995 28.884C16.6915 27.876 16.1252 26.5089 16.1252 25.0833V8.95833C16.1252 7.53279 16.6915 6.16564 17.6995 5.15763C18.7075 4.14963 20.0746 3.58333 21.5002 3.58333H28.6668V7.16667C28.6668 8.11703 29.0444 9.02846 29.7164 9.70047C30.3884 10.3725 31.2998 10.75 32.2502 10.75H35.8335V25.0833C35.8335 26.5089 35.2672 27.876 34.2592 28.884C33.2512 29.892 31.884 30.4583 30.4585 30.4583Z\" fill=\"black\"/>\n      </g>\n      <defs>\n      <clipPath id=\"clip0_2977_2338\">\n      <rect width=\"43\" height=\"43\" fill=\"white\"/>\n      </clipPath>\n      </defs>\n    </svg>\n    ";}function getTitleSvg(){return"\n    <svg width=\"68\" height=\"68\" viewBox=\"0 0 68 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" cursor=\"pointer\">\n      <rect width=\"68\" height=\"68\" fill=\"url(#pattern0_2971_993)\"/>\n      <defs>\n      <pattern id=\"pattern0_2971_993\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n      <use xlink:href=\"#image0_2971_993\" transform=\"scale(0.00195312)\"/>\n      </pattern>\n      <image id=\"image0_2971_993\" width=\"512\" height=\"512\" xlink:href=\"data:image/png;base64,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\"/>\n      </defs>\n    </svg>\n  ";}function getRulerSvg(){return"\n    <svg width=\"128\" height=\"128\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" cursor=\"pointer\">\n      <rect width=\"128\" height=\"128\" fill=\"url(#pattern0_2971_916)\"/>\n      <defs>\n      <pattern id=\"pattern0_2971_916\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n      <use xlink:href=\"#image0_2971_916\" transform=\"scale(0.000925926)\"/>\n      </pattern>\n      <image id=\"image0_2971_916\" width=\"1080\" height=\"1080\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4CAYAAADsEGyPAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AUUChoM4paPqgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAABRxSURBVHja7NvBDcIwEABBG7n/lk0F5BWibDJTAOLuhASrMAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBv0wp4mG0FAADgNyHv87ECAAAAoE7gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIG9ZARyaJ7/evvn7G+Y1r3nNa17zmte85n3VvPAYnuAAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADylhXApaYVuC/ui/vivrgvcD5PcAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAeQIHAAAAkCdwAAAAAHkCBwAAAJAncAAAAAB5AgcAAACQJ3AAAAAAecsKgD+aVgA+v7gv7gtwBYEDAF+gAQDI8xcVAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgb1kBHNpWAAAAcH+e4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODbHhwSAAAAAAj6/9oTRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4BV8cEB7UoZ96AAAAAElFTkSuQmCC\"/>\n      </defs>\n    </svg>\n  ";}function getResetSvg(){return"\n    <svg width=\"61\" height=\"61\" viewBox=\"0 0 61 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <rect width=\"61\" height=\"61\" fill=\"url(#pattern0_2977_915)\"/>\n      <defs>\n      <pattern id=\"pattern0_2977_915\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n      <use xlink:href=\"#image0_2977_915\" transform=\"scale(0.003003)\"/>\n      </pattern>\n      <image id=\"image0_2977_915\" width=\"333\" height=\"333\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU0AAAFNCAYAAAHz9w1SAAAACXBIWXMAAJnKAACZygHjkaQiAAAGYGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTI0VDIxOjQ1OjU0KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOS0yNFQxMDozOTo1MCswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOS0yNFQxMDozOTo1MCswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODk3NDhmZS1mZmRjLTQzZGEtOGFiMS1kMzIxNmRiMzhlYzIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmMzEwZWI0OS1hZDk4LTg3NGEtOTg1YS1iZjZmNGMyYmY3MTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMTkyNGE1Yi0yYzVkLTQ3YjQtOGQyZS1jYjQ4MGRkYmVlZDgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMxOTI0YTViLTJjNWQtNDdiNC04ZDJlLWNiNDgwZGRiZWVkOCIgc3RFdnQ6d2hlbj0iMjAyMS0wOC0yNFQyMTo0NTo1NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDg5NzQ4ZmUtZmZkYy00M2RhLThhYjEtZDMyMTZkYjM4ZWMyIiBzdEV2dDp3aGVuPSIyMDIxLTA5LTI0VDEwOjM5OjUwKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NC7FaAAAgdElEQVR4nO3dT3LbxrYG8E+3Mr/SCp60gkuvINQKIFXhjSON8GaRVyB7BVJmwUjM+KJKxArMrMC8KzDfCoy3Ar8BmjZNkSC60ehz0P39qlJJJJFoNA8P+h8aZ9++fcMU/EO6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\"/>\n      </defs>\n    </svg>\n  ";}function getUnitSvg(x,y,unit){let className=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'';return"\n    <g class=\"table-unit unit-btn ".concat(className,"\" transform=\"translate(").concat(x,", ").concat(y,")\">\n      <rect class=\"unit-btn ").concat(className,"\" x=\"1\" y=\"1\" width=\"133\" height=\"46\" rx=\"11\" fill=\"white\"/>\n      <text class=\"unit-btn unit-text ").concat(className,"\" x=\"20\" y=\"30\" font-size=\"20px\" font-weight=\"600\" fill=\"#666\">\n      ").concat(unit?unit:'단위',"\n      </text>\n      <path class=\"unit-btn ").concat(className,"\" d=\"M110.543 28.1293C109.743 29.0992 108.257 29.0992 107.457 28.1293L103.039 22.7726C101.963 21.4681 102.891 19.5 104.582 19.5L113.418 19.5C115.109 19.5 116.037 21.4681 114.961 22.7726L110.543 28.1293Z\" fill=\"#999999\"/>\n      <rect class=\"unit-btn ").concat(className,"\" data-name=\"").concat(className,"\" x=\"1\" y=\"1\" width=\"133\" height=\"46\" rx=\"11\" stroke=\"#E6E6E6\" stroke-width=\"2\" fill=\"transparent\"/>\n    </g>\n  ");}function fillRectangleSvg(startX,startY,width,height,perWidth,perHeight){let gap=arguments.length>6&&arguments[6]!==undefined?arguments[6]:20;let x=startX;let y=startY;let svg='';while(y+perHeight<=height){while(x+perWidth<=width){svg+="\n        <rect x=\"".concat(x,"\" y=\"").concat(y,"\" width=\"").concat(perWidth,"\" height=\"").concat(perHeight,"\" rx=\"10\" stroke=\"gray\" stroke-width=\"2\" fill=\"none\" />\n      ");x+=perWidth+gap;}y+=perHeight+gap;x=startX;}return svg;}function convertAngle(angle){let step=arguments.length>1&&arguments[1]!==undefined?arguments[1]:5;const moduloAngle=angle%360;if(moduloAngle>=360-step||moduloAngle<=step||moduloAngle>=0&&moduloAngle<=step){return 0;}else if(moduloAngle>=90-step&&moduloAngle<=90+step){return 90;}else if(moduloAngle>=180-step&&moduloAngle<=180+step){return 180;}else if(moduloAngle>=270-step&&moduloAngle<=270+step){return 270;}else{return moduloAngle;}}function createSVGElement(elementType,attributes,events){const element=document.createElementNS('http://www.w3.org/2000/svg',elementType);for(const key in attributes){element.setAttribute(key,attributes[key]);}for(const eventName in events){element.addEventListener(eventName,events[eventName]);}return element;}function toggleActive(e){const items=getElementsByQuerySelectorAll('.test');const isActive=e.target.classList.contains('active');for(const item of items){item.classList.remove('active');}if(!isActive){e.target.classList.toggle('active');}}// path sweep-flag값 계산
function calcSweepFlag(point1,point2,point3){if(point3){const AB={x:point2.x-point1.x,y:point2.y-point1.y};const BC={x:point3.x-point2.x,y:point3.y-point2.y};const crossProduct=AB.x*BC.y-AB.y*BC.x;return crossProduct>0?1:0;}else{const crossProduct=point1.x*point2.y-point2.x*point1.y;return crossProduct>0?1:0;}}// path large-arc-flag값 계산
function calcLargeArcFlag(sweepFlag,center,point1,point2){const angleDeg=getCalculateRotationFromCenter(center,point1,point2);const angle=sweepFlag===1?360-angleDeg:angleDeg;return angle>180?0:1;}// 평균
function getAverage(arr){let n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;if(arr.length===0)return 0;const newArr=arr.filter(item=>item);const sum=newArr.map(item=>Number(item)).reduce((acc,curr)=>acc+curr,0);return(sum/newArr.length).toFixed(n).toString();}// 중앙값
function getMedian(arr){if(arr.length===0)return 0;const sorted=arr.filter(item=>item).sort(customSort);const middle=Math.floor(sorted.length/2);if(sorted.length%2===0){return[sorted[middle-1],sorted[middle]];}else{return sorted[middle];}}// 최빈값
function getMode(arr){let counts={};let maxCount=0;let modes=[];arr.forEach(item=>{const key=item.trim();// 앞뒤 공백 제거
counts[key]=(counts[key]||0)+1;if(counts[key]>maxCount){maxCount=counts[key];}});for(const key in counts){if(counts[key]===maxCount){modes.push(key);}}return modes;}function saveInputItem(target){if(target&&target.inputTargetClassName){saveInputEditedItem(target);}}function saveInputEditedItem(target){const container=util_getElement(target.id);const elements=container.querySelectorAll('.input-target');elements.forEach(element=>{const text=element===null||element===void 0?void 0:element.textContent.trim();const[name,parentIndex,index]=element.classList.value.split(' ')[1].split('-');if(element){element.textContent=text;if(name&&parentIndex&&index){if(!target[name][parentIndex])target[name][parentIndex]=[];target[name][parentIndex][index]=text;return;}if(name&&parentIndex&&!index){if(!isNaN(Number(parentIndex))){target[name][parentIndex]=text;}return;}if(name&&!parentIndex&&!index){target[name]=text;const str=name.substring(5);const n=str?Number(str):0;if(name.startsWith('title')){var _target$titleOriginal;target[name]=(_target$titleOriginal=target.titleOriginalText[n])!==null&&_target$titleOriginal!==void 0?_target$titleOriginal:'';}return;}}});}// type: 1 => 수정완료 아이콘
// type: 2 => 수정,복사 아이콘
// type: 3 => 수정, 계산기, 복사 아이콘
// type: 11 => 그룹 아이콘
// type: 91 => 정렬off 아이콘
// type: 92 => 정렬on 아이콘
// type: 98 => +아이콘
// type: 99 => -아이콘
function getToolbarSvg(type){let tx=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;let ty=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;if(type===1){return"\n      <mask id=\"path-1-inside-1_3653_35646\" fill=\"white\">\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\"/>\n      </mask>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\" fill=\"#040C1E\"/>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\" stroke=\"#040C1E\" stroke-width=\"8\" mask=\"url(#path-1-inside-1_3653_35646)\"/>\n      <g class=\"edited\">\n        <rect class=\"edited\" x=\"4\" y=\"4\" width=\"48\" height=\"48\" rx=\"12\" fill=\"#4E576A\" />\n        <circle class=\"edited\" cx=\"28\" cy=\"28\" r=\"13\" fill=\"#AFB5C3\" />\n        <path class=\"edited\" d=\"M22 27.8L26.5517 33L34 25\" stroke=\"#4E576A\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n      </g>\n    ";}else if(type===2){return"\n      <mask id=\"path-1-inside-1_3653_36406\" fill=\"white\">\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H92C100.837 0 108 7.16344 108 16V40C108 48.8366 100.837 56 92 56H16C7.16344 56 0 48.8366 0 40V2Z\"/>\n      </mask>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H92C100.837 0 108 7.16344 108 16V40C108 48.8366 100.837 56 92 56H16C7.16344 56 0 48.8366 0 40V2Z\" fill=\"#040C1E\"/>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H92C100.837 0 108 7.16344 108 16V40C108 48.8366 100.837 56 92 56H16C7.16344 56 0 48.8366 0 40V2Z\" stroke=\"#040C1E\" stroke-width=\"8\" mask=\"url(#path-1-inside-1_3653_36406)\"/>\n\n      <g class=\"edit\">\n        <path class=\"edit\" d=\"M4 16C4 9.37258 9.37258 4 16 4H50C51.1046 4 52 4.89543 52 6V50C52 51.1046 51.1046 52 50 52H16C9.37258 52 4 46.6274 4 40V16Z\" fill=\"#4E576A\"/>\n        <path class=\"edit\" d=\"M39.5236 21.9688L33.8667 16.3119L36.738 13.4406C37.1049 13.0737 37.6996 13.0737 38.0664 13.4406L42.3949 17.769C42.7617 18.1358 42.7617 18.7306 42.3949 19.0974L39.5236 21.9688Z\" fill=\"#AFB5C3\"/>\n        <path class=\"edit\" d=\"M14.8606 41.551C14.51 41.6466 14.1883 41.3249 14.284 40.9743L16.189 33.9891L21.8459 39.646L14.8606 41.551Z\" fill=\"#AFB5C3\"/>\n        <rect class=\"edit\" x=\"21.8458\" y=\"39.6465\" width=\"8\" height=\"22\" transform=\"rotate(-135 21.8458 39.6465)\" fill=\"#AFB5C3\"/>\n      </g>\n      <g class=\"copy\">\n        <path class=\"copy\" d=\"M56 6C56 4.89543 56.8954 4 58 4H92C98.6274 4 104 9.37258 104 16V40C104 46.6274 98.6274 52 92 52H58C56.8954 52 56 51.1046 56 50V6Z\" fill=\"#4E576A\"/>\n        <rect class=\"copy\" x=\"74\" y=\"16\" width=\"16\" height=\"20\" rx=\"1\" stroke=\"#AFB5C3\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n        <rect class=\"copy\" x=\"69\" y=\"20\" width=\"17\" height=\"21\" rx=\"2\" fill=\"#AFB5C3\"/>\n      </g>\n    ";}else if(type===3){return"\n      <mask id=\"path-1-inside-1_3661_38119\" fill=\"white\">\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H144C152.837 0 160 7.16344 160 16V40C160 48.8366 152.837 56 144 56H16C7.16345 56 0 48.8366 0 40V2Z\"/>\n      </mask>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H144C152.837 0 160 7.16344 160 16V40C160 48.8366 152.837 56 144 56H16C7.16345 56 0 48.8366 0 40V2Z\" fill=\"#040C1E\"/>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H144C152.837 0 160 7.16344 160 16V40C160 48.8366 152.837 56 144 56H16C7.16345 56 0 48.8366 0 40V2Z\" stroke=\"#040C1E\" stroke-width=\"8\" mask=\"url(#path-1-inside-1_3661_38119)\"/>\n      \n      <g class=\"edit\">\n        <path class=\"edit\" d=\"M4 16C4 9.37258 9.37258 4 16 4H50C51.1046 4 52 4.89543 52 6V50C52 51.1046 51.1046 52 50 52H16C9.37258 52 4 46.6274 4 40V16Z\" fill=\"#4E576A\"/>\n        <path class=\"edit\" d=\"M39.5236 21.9688L33.8667 16.3119L36.738 13.4406C37.1049 13.0737 37.6996 13.0737 38.0664 13.4406L42.3949 17.769C42.7617 18.1358 42.7617 18.7306 42.3949 19.0974L39.5236 21.9688Z\" fill=\"#AFB5C3\"/>\n        <path class=\"edit\" d=\"M14.8606 41.551C14.51 41.6466 14.1883 41.3249 14.284 40.9743L16.189 33.9891L21.8459 39.646L14.8606 41.551Z\" fill=\"#AFB5C3\"/>\n        <rect class=\"edit\" x=\"21.8458\" y=\"39.6455\" width=\"8\" height=\"22\" transform=\"rotate(-135 21.8458 39.6455)\" fill=\"#AFB5C3\"/>\n      </g>\n      <g class=\"calculate\">\n        <path class=\"calculate\" d=\"M56 6C56 4.89543 56.8954 4 58 4H102C103.105 4 104 4.89543 104 6V50C104 51.1046 103.105 52 102 52H58C56.8954 52 56 51.1046 56 50V6Z\" fill=\"#4E576A\"/>\n        <path class=\"calculate\" d=\"M70 18.0003C70 17.1163 70.3512 16.2684 70.9763 15.6433C71.6014 15.0182 72.4493 14.667 73.3333 14.667H86.6667C87.5507 14.667 88.3986 15.0182 89.0237 15.6433C89.6488 16.2684 90 17.1163 90 18.0003V38.0003C90 38.8844 89.6488 39.7322 89.0237 40.3573C88.3986 40.9825 87.5507 41.3337 86.6667 41.3337H73.3333C72.4493 41.3337 71.6014 40.9825 70.9763 40.3573C70.3512 39.7322 70 38.8844 70 38.0003V18.0003ZM73.3333 18.8337V22.167C73.3333 22.388 73.4211 22.6 73.5774 22.7562C73.7337 22.9125 73.9457 23.0003 74.1667 23.0003H85.8333C86.0543 23.0003 86.2663 22.9125 86.4226 22.7562C86.5789 22.6 86.6667 22.388 86.6667 22.167V18.8337C86.6667 18.6126 86.5789 18.4007 86.4226 18.2444C86.2663 18.0881 86.0543 18.0003 85.8333 18.0003H74.1667C73.9457 18.0003 73.7337 18.0881 73.5774 18.2444C73.4211 18.4007 73.3333 18.6126 73.3333 18.8337ZM73.3333 25.5003V27.167C73.3333 27.388 73.4211 27.6 73.5774 27.7562C73.7337 27.9125 73.9457 28.0003 74.1667 28.0003H75.8333C76.0543 28.0003 76.2663 27.9125 76.4226 27.7562C76.5789 27.6 76.6667 27.388 76.6667 27.167V25.5003C76.6667 25.2793 76.5789 25.0674 76.4226 24.9111C76.2663 24.7548 76.0543 24.667 75.8333 24.667H74.1667C73.9457 24.667 73.7337 24.7548 73.5774 24.9111C73.4211 25.0674 73.3333 25.2793 73.3333 25.5003ZM74.1667 29.667C73.9457 29.667 73.7337 29.7548 73.5774 29.9111C73.4211 30.0673 73.3333 30.2793 73.3333 30.5003V32.167C73.3333 32.388 73.4211 32.6 73.5774 32.7562C73.7337 32.9125 73.9457 33.0003 74.1667 33.0003H75.8333C76.0543 33.0003 76.2663 32.9125 76.4226 32.7562C76.5789 32.6 76.6667 32.388 76.6667 32.167V30.5003C76.6667 30.2793 76.5789 30.0673 76.4226 29.9111C76.2663 29.7548 76.0543 29.667 75.8333 29.667H74.1667ZM73.3333 35.5003V37.167C73.3333 37.388 73.4211 37.6 73.5774 37.7562C73.7337 37.9125 73.9457 38.0003 74.1667 38.0003H75.8333C76.0543 38.0003 76.2663 37.9125 76.4226 37.7562C76.5789 37.6 76.6667 37.388 76.6667 37.167V35.5003C76.6667 35.2793 76.5789 35.0673 76.4226 34.9111C76.2663 34.7548 76.0543 34.667 75.8333 34.667H74.1667C73.9457 34.667 73.7337 34.7548 73.5774 34.9111C73.4211 35.0673 73.3333 35.2793 73.3333 35.5003ZM79.1667 24.667C78.9457 24.667 78.7337 24.7548 78.5774 24.9111C78.4211 25.0674 78.3333 25.2793 78.3333 25.5003V27.167C78.3333 27.388 78.4211 27.6 78.5774 27.7562C78.7337 27.9125 78.9457 28.0003 79.1667 28.0003H80.8333C81.0543 28.0003 81.2663 27.9125 81.4226 27.7562C81.5789 27.6 81.6667 27.388 81.6667 27.167V25.5003C81.6667 25.2793 81.5789 25.0674 81.4226 24.9111C81.2663 24.7548 81.0543 24.667 80.8333 24.667H79.1667ZM78.3333 30.5003V32.167C78.3333 32.388 78.4211 32.6 78.5774 32.7562C78.7337 32.9125 78.9457 33.0003 79.1667 33.0003H80.8333C81.0543 33.0003 81.2663 32.9125 81.4226 32.7562C81.5789 32.6 81.6667 32.388 81.6667 32.167V30.5003C81.6667 30.2793 81.5789 30.0673 81.4226 29.9111C81.2663 29.7548 81.0543 29.667 80.8333 29.667H79.1667C78.9457 29.667 78.7337 29.7548 78.5774 29.9111C78.4211 30.0673 78.3333 30.2793 78.3333 30.5003ZM79.1667 34.667C78.9457 34.667 78.7337 34.7548 78.5774 34.9111C78.4211 35.0673 78.3333 35.2793 78.3333 35.5003V37.167C78.3333 37.388 78.4211 37.6 78.5774 37.7562C78.7337 37.9125 78.9457 38.0003 79.1667 38.0003H80.8333C81.0543 38.0003 81.2663 37.9125 81.4226 37.7562C81.5789 37.6 81.6667 37.388 81.6667 37.167V35.5003C81.6667 35.2793 81.5789 35.0673 81.4226 34.9111C81.2663 34.7548 81.0543 34.667 80.8333 34.667H79.1667ZM83.3333 25.5003V27.167C83.3333 27.388 83.4211 27.6 83.5774 27.7562C83.7337 27.9125 83.9457 28.0003 84.1667 28.0003H85.8333C86.0543 28.0003 86.2663 27.9125 86.4226 27.7562C86.5789 27.6 86.6667 27.388 86.6667 27.167V25.5003C86.6667 25.2793 86.5789 25.0674 86.4226 24.9111C86.2663 24.7548 86.0543 24.667 85.8333 24.667H84.1667C83.9457 24.667 83.7337 24.7548 83.5774 24.9111C83.4211 25.0674 83.3333 25.2793 83.3333 25.5003ZM84.1667 29.667C83.9457 29.667 83.7337 29.7548 83.5774 29.9111C83.4211 30.0673 83.3333 30.2793 83.3333 30.5003V37.167C83.3333 37.388 83.4211 37.6 83.5774 37.7562C83.7337 37.9125 83.9457 38.0003 84.1667 38.0003H85.8333C86.0543 38.0003 86.2663 37.9125 86.4226 37.7562C86.5789 37.6 86.6667 37.388 86.6667 37.167V30.5003C86.6667 30.2793 86.5789 30.0673 86.4226 29.9111C86.2663 29.7548 86.0543 29.667 85.8333 29.667H84.1667Z\" fill=\"#AFB5C3\"/>\n      </g>\n      <g class=\"copy\">\n        <path class=\"copy\" d=\"M108 6C108 4.89543 108.895 4 110 4H144C150.627 4 156 9.37258 156 16V40C156 46.6274 150.627 52 144 52H110C108.895 52 108 51.1046 108 50V6Z\" fill=\"#4E576A\"/>\n        <rect class=\"copy\" x=\"126\" y=\"16\" width=\"16\" height=\"20\" rx=\"1\" stroke=\"#AFB5C3\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n        <rect class=\"copy\" x=\"121\" y=\"20\" width=\"17\" height=\"21\" rx=\"2\" fill=\"#AFB5C3\"/>\n      </g>\n    ";}else if(type===11){return"\n    <g id=\"multi-select-group-icon\" cursor=\"pointer\" transform=\"translate(".concat(tx,", ").concat(ty,")\">\n      <mask id=\"path-1-inside-1_4665_58870\" fill=\"white\">\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\"/>\n      </mask>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\" fill=\"#040C1E\"/>\n      <path d=\"M0 2C0 0.89543 0.895431 0 2 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V2Z\" stroke=\"#040C1E\" stroke-width=\"8\" mask=\"url(#path-1-inside-1_4665_58870)\"/>\n      <rect x=\"4\" y=\"4\" width=\"48\" height=\"48\" rx=\"12\" fill=\"#4E576A\"/>\n      <rect x=\"14.7588\" y=\"14.7588\" width=\"26.4828\" height=\"26.4828\" rx=\"2.2069\" stroke=\"#AFB5C3\" stroke-width=\"2.2069\"/>\n      <rect x=\"12\" y=\"12\" width=\"5.51724\" height=\"5.51724\" rx=\"1.10345\" fill=\"#AFB5C3\"/>\n      <rect x=\"38.4824\" y=\"12\" width=\"5.51724\" height=\"5.51724\" rx=\"1.10345\" fill=\"#AFB5C3\"/>\n      <rect x=\"12\" y=\"38.4824\" width=\"5.51724\" height=\"5.51724\" rx=\"1.10345\" fill=\"#AFB5C3\"/>\n      <rect x=\"38.4824\" y=\"38.4824\" width=\"5.51724\" height=\"5.51724\" rx=\"1.10345\" fill=\"#AFB5C3\"/>\n      <circle cx=\"24.1384\" cy=\"25.2409\" r=\"4.96552\" fill=\"#AFB5C3\"/>\n      <path d=\"M32.0098 27.9999C32.4345 27.2643 33.4963 27.2643 33.921 27.9999L37.7435 34.6206C38.1682 35.3562 37.6373 36.2758 36.7879 36.2758H29.143C28.2935 36.2758 27.7626 35.3562 28.1873 34.6206L32.0098 27.9999Z\" fill=\"#AFB5C3\"/>\n    </g>\n    ");}else if(type===91){return"\n      <g class=\"sort-off\">\n        <rect class=\"sort-off\" width=\"90\" height=\"44\" rx=\"22\" fill=\"#F2F5FC\"/>\n        <rect class=\"sort-off\" x=\"1\" y=\"1\" width=\"88\" height=\"42\" rx=\"21\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <rect class=\"sort-off\" x=\"6\" y=\"6\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#4E576A\"/>\n        <path class=\"sort-off\" d=\"M13 14.5H27.25M13 19H22.75M13 23.5H22.75M27.25 19V31M27.25 31L23.5 27.25M27.25 31L31 27.25\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </g>\n    ";}else if(type===92){return"\n      <g class=\"sort-on\">\n        <rect class=\"sort-on\" width=\"86\" height=\"44\" rx=\"22\" fill=\"#2194FF\"/>\n        <rect class=\"sort-on\" x=\"1\" y=\"1\" width=\"84\" height=\"42\" rx=\"21\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <rect class=\"sort-on\" x=\"48\" y=\"6\" width=\"32\" height=\"32\" rx=\"16\" fill=\"white\"/>\n        <path class=\"sort-on\" d=\"M55 14.5H69.25M55 19H64.75M55 23.5H64.75M69.25 19V31M69.25 31L65.5 27.25M69.25 31L73 27.25\" stroke=\"#4E576A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </g>\n    ";}else if(type===98){return"\n      <g class=\"add\">\n        <circle class=\"add\" cx=\"14\" cy=\"14\" r=\"16\" transform=\"matrix(1 0 0 -1 4 32)\" fill=\"#4E576A\" stroke=\"#040C1E\" stroke-width=\"4\"/>\n        <path class=\"add\" d=\"M18 9.59961C17.2268 9.59961 16.6 10.2264 16.6 10.9996V16.5996H11C10.2268 16.5996 9.59998 17.2264 9.59998 17.9996C9.59998 18.7728 10.2268 19.3996 11 19.3996H16.6V24.9996C16.6 25.7728 17.2268 26.3996 18 26.3996C18.7732 26.3996 19.4 25.7728 19.4 24.9996V19.3996H25C25.7732 19.3996 26.4 18.7728 26.4 17.9996C26.4 17.2264 25.7732 16.5996 25 16.5996H19.4V10.9996C19.4 10.2264 18.7732 9.59961 18 9.59961Z\" fill=\"white\"/>\n        <path class=\"add\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18ZM18 4C25.732 4 32 10.268 32 18C32 25.732 25.732 32 18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4Z\" fill=\"#040C1E\"/>\n      </g>\n    ";}else if(type===99){return"\n      <g class=\"minus\">\n        <circle class=\"minus\" cx=\"14\" cy=\"14\" r=\"16\" transform=\"matrix(1 0 0 -1 4 32)\" fill=\"#4E576A\" stroke=\"#040C1E\" stroke-width=\"4\"/>\n        <path class=\"minus\" d=\"M16.6 16.5996H11C10.2268 16.5996 9.59998 17.2264 9.59998 17.9996C9.59998 18.7728 10.2268 19.3996 11 19.3996H16.6H19.4H25C25.7732 19.3996 26.4 18.7728 26.4 17.9996C26.4 17.2264 25.7732 16.5996 25 16.5996H19.4H16.6Z\" fill=\"white\"/>\n        <path class=\"minus\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18ZM18 4C25.732 4 32 10.268 32 18C32 25.732 25.732 32 18 32C10.268 32 4 25.732 4 18C4 10.268 10.268 4 18 4Z\" fill=\"#040C1E\"/>\n      </g>\n    ";}}function getResizeHandlerSvg(x,y,className){return"\n    <path\n      transform=\"translate(".concat(x,", ").concat(y,")\"\n      d=\"M2.82843 14L14 2.82843L25.1716 14L14 25.1716L2.82843 14Z\"\n      fill=\"white\" stroke=\"black\" stroke-width=\"4\"\n      class=\"").concat(className,"\"\n    />\n  ");}function customSort(a,b){// 두 값을 숫자로 변환해서 비교
let numA=Number(a);let numB=Number(b);// 둘 다 숫자인 경우 숫자로 비교
if(!isNaN(numA)&&!isNaN(numB)){return numA-numB;}// 둘 다 숫자가 아닌 경우 문자열로 비교
if(isNaN(numA)&&isNaN(numB)){// 한글과 영어를 구분하여 비교
let isKoreanA=/[가-힣]/.test(a);let isKoreanB=/[가-힣]/.test(b);// 둘 다 한글인 경우
if(isKoreanA&&isKoreanB){return a.localeCompare(b,'ko');}// 둘 다 영어인 경우
if(!isKoreanA&&!isKoreanB){return a.localeCompare(b);}// 하나는 한글이고 하나는 영어인 경우, 영어를 우선
return isKoreanA?1:-1;}// 하나는 숫자고 하나는 문자열인 경우, 숫자를 우선
return!isNaN(numA)?-1:1;}function customSortWithModes(arr){const modes=getMode(arr);// 정렬 함수
function customSort(a,b){// 최빈값들을 우선 정렬
if(modes.includes(a)&&modes.includes(b)){return modes.indexOf(a)-modes.indexOf(b);}if(modes.includes(a)){return-1;}if(modes.includes(b)){return 1;}// 둘 값을 숫자로 변환해서 비교
let numA=Number(a);let numB=Number(b);// 둘 다 숫자인 경우 숫자로 비교
if(!isNaN(numA)&&!isNaN(numB)){return numA-numB;}// 둘 다 숫자가 아닌 경우 문자열로 비교
if(isNaN(numA)&&isNaN(numB)){// 한글과 영어를 구분하여 비교
let isKoreanA=/[가-힣]/.test(a);let isKoreanB=/[가-힣]/.test(b);// 둘 다 한글인 경우
if(isKoreanA&&isKoreanB){return a.localeCompare(b,'ko');}// 둘 다 영어인 경우
if(!isKoreanA&&!isKoreanB){return a.localeCompare(b);}// 하나는 한글이고 하나는 영어인 경우, 영어를 우선
return isKoreanA?1:-1;}// 하나는 숫자고 하나는 문자열인 경우, 숫자를 우선
return!isNaN(numA)?-1:1;}// 배열 정렬
arr.sort(customSort);return arr;}function frequencyCalculate(arr){const rArr=[];// Calculate the sum of all numerical values in frequencyItems
const sum=arr.map(item=>!isNaN(item)?Number(item):0).reduce((acc,cur)=>acc+cur,0);// Calculate initial relative frequencies with higher precision
const preciseRelativeFrequencies=[];arr.forEach((item,i)=>{if(!isNaN(item)&&sum!==0){const preciseFrequency=Number(item)/sum;preciseRelativeFrequencies.push(preciseFrequency);}else{rArr[i]='';}});// Calculate rounded relative frequencies
const roundedRelativeFrequencies=preciseRelativeFrequencies.map(freq=>Math.round(freq*10000)/10000);const roundedSum=roundedRelativeFrequencies.reduce((acc,cur)=>acc+cur,0);// Adjust the frequencies to make sure the sum is 1
let difference=Math.round((1-roundedSum)*10000)/10000;if(difference!==0){for(let i=0;i<roundedRelativeFrequencies.length;i++){if(preciseRelativeFrequencies[i]!==0){roundedRelativeFrequencies[i]=Math.round((roundedRelativeFrequencies[i]+difference)*10000)/10000;break;}}}// Assign rounded relative frequencies to the table
return roundedRelativeFrequencies;}function getTextCursorSvg(x,y){let tx=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;let ty=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;return"\n    <line\n      x1=\"".concat(x,"\" y1=\"").concat(y,"\" x2=\"").concat(x,"\" y2=\"").concat(y+24,"\"\n      stroke=\"#2194FF\" stroke-width=\"2\" class=\"text-cursor hidden\" \n      transform=\"translate(").concat(tx,", ").concat(ty,")\"\n    />");}function handleTextCursorSvg(id,element){const container=util_getElement(id);if(container){const arr=container.querySelectorAll('.text-cursor');arr.forEach(item=>item.classList.add('hidden'));}if(element){if(element!==null&&element!==void 0&&element.nextElementSibling.nextElementSibling){const startX=parseFloat(element.getAttribute('x'));const textWidth=element.getComputedTextLength();const textAnchor=element.getAttribute('text-anchor');let endX=0;if(textAnchor==='middle'){endX=startX+textWidth/2;}else if(textAnchor==='end'){endX=startX;}else{endX=startX+textWidth;}if(element.textContent.trim()!=='')endX+=5;if(element!==null&&element!==void 0&&element.nextElementSibling.nextElementSibling){element===null||element===void 0?void 0:element.nextElementSibling.nextElementSibling.setAttribute('x1',endX);element===null||element===void 0?void 0:element.nextElementSibling.nextElementSibling.setAttribute('x2',endX);}element===null||element===void 0?void 0:element.nextElementSibling.nextElementSibling.classList.remove('hidden');}}}function getUnitListSvg(){let x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;let y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;let arr=arguments.length>2?arguments[2]:undefined;let size=arguments.length>3?arguments[3]:undefined;let unitIndex=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;let unitText=arguments.length>5?arguments[5]:undefined;const units=Array.from({length:Math.ceil(arr.length/size)},(_,i)=>arr.slice(i*size,i*size+size));return"\n    <g transform=\"translate(".concat(x,", ").concat(y,")\">\n      <g clip-path=\"url(#clip0_5006_23631)\">\n      <rect width=\"135\" height=\"412\" rx=\"12\" fill=\"white\"/>\n      <mask id=\"path-3-inside-1_5006_23631\" fill=\"white\">\n      <path d=\"M0 0H135V30H0V0Z\"/>\n      </mask>\n      \n      <g class=\"unit-prev-btn\">\n        <path d=\"M135 28H0V32H135V28Z\" fill=\"#E6E6E6\" mask=\"url(#path-3-inside-1_5006_23631)\"/>\n        <path\n          d=\"M66.9029 10.4063C67.5517 9.86455 68.4483 9.86455 69.0971 10.4063L76.2771 16.4026C77.6647 17.5615 76.9211 20 75.18 20H60.82C59.0789 20 58.3353 17.5615 59.7229 16.4026L66.9029 10.4063Z\"\n          fill=\"").concat(unitIndex===0?'#999':'#333',"\" />\n        <path d=\"M0 0H135V30H0V0Z\" fill=\"transparent\" class=\"unit-prev-btn\" />\n      </g>\n      <g clip-path=\"url(#clip1_5006_23631)\">\n      <rect y=\"30\" width=\"135\" height=\"352\" rx=\"12\" fill=\"white\"/>\n      <mask id=\"path-7-inside-2_5006_23631\" fill=\"white\">\n      <path d=\"M8 38H127V86H8V38Z\"/>\n      </mask>\n\n      <g>\n        <text\n          x=\"68\" y=\"66\" fill=\"#B2B2B2\" font-size=\"20\" font-weight=\"600\"\n          class=\"input unitText input-target text-unitText\"\n          data-length=\"5\" text-anchor=\"middle\"\n        >\n          \uC9C1\uC811\uC785\uB825\n        </text>\n        <rect\n          x=\"5\" y=\"32\" width=\"127\" height=\"50\" rx=\"11\"\n          fill=\"transparent\" class=\"input unitText\" \n        />\n        ").concat(getTextCursorSvg(25,44),"\n      </g>\n      \n      <path d=\"M127 84H8V88H127V84Z\" fill=\"#E6E6E6\" mask=\"url(#path-7-inside-2_5006_23631)\"/>\n      ").concat(units.find((_,index)=>index===unitIndex).map((unit,index)=>getUnitListItemSvg(unit,index)).join(''),"\n      </g>\n      <mask id=\"path-22-inside-3_5006_23631\" fill=\"white\">\n      <path d=\"M0 382H135V412H0V382Z\"/>\n      </mask>\n      <path d=\"M0 384H135V380H0V384Z\" fill=\"#E6E6E6\" mask=\"url(#path-22-inside-3_5006_23631)\"/>\n      <g class=\"unit-next-btn\">\n        <path\n          d=\"M69.0971 401.594C68.4483 402.135 67.5517 402.135 66.9029 401.594L59.7229 395.597C58.3353 394.439 59.0789 392 60.82 392H75.18C76.9211 392 77.6647 394.439 76.2771 395.597L69.0971 401.594Z\"\n          fill=\"").concat(unitIndex===units.length-1?'#999':'#333',"\" />\n        <path d=\"M0 382H135V412H0V382Z\" fill=\"transparent\" class=\"unit-next-btn\"/>\n      </g>\n      </g>\n      <rect x=\"1\" y=\"1\" width=\"133\" height=\"410\" rx=\"11\" stroke=\"#E6E6E6\" stroke-width=\"2\"/>\n    </g>\n  ");}function getUnitListItemSvg(text,index){return"\n    <g class=\"cursor-pointer unit-btn\">\n      <text x=\"68\" y=\"".concat(121+48*index,"\" class=\"text-20\" text-anchor=\"middle\">\n      ").concat(text,"\n      </text>\n      <rect\n        x=\"8\" y=\"").concat(90+48*index,"\" width=\"119\" height=\"48\" rx=\"8\"\n        fill=\"transparent\" class=\"unit-btn\" data-value=\"").concat(text,"\"\n      />\n    </g>\n  ");}function getPresetListSvg(){let x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;let y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;let arr=arguments.length>2?arguments[2]:undefined;let size=arguments.length>3?arguments[3]:undefined;let presetIndex=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;const presets=Array.from({length:Math.ceil(arr.length/size)},(_,i)=>arr.slice(i*size,i*size+size));return"\n    <g transform=\"translate(".concat(x,", ").concat(y,")\">\n      <g clip-path=\"url(#clip0_5011_12558)\">\n      <rect x=\"0.410889\" y=\"0.332031\" width=\"216\" height=\"412\" rx=\"12\" fill=\"white\"/>\n      <mask id=\"path-3-inside-1_5011_12558\" fill=\"white\">\n      <path d=\"M0.410889 0.332031L216.411 0.332031V30.332H0.410889V0.332031Z\"/>\n      </mask>\n      \n      <path d=\"M216.411 28.332H0.410889V32.332H216.411V28.332Z\" fill=\"#E6E6E6\" mask=\"url(#path-3-inside-1_5011_12558)\"/>\n      \n\n      <g class=\"preset-prev-btn\">\n        <path\n          d=\"M107.314 10.7384C107.963 10.1966 108.859 10.1966 109.508 10.7384L116.688 16.7346C118.076 17.8935 117.332 20.332 115.591 20.332H101.231C99.4898 20.332 98.7462 17.8935 100.134 16.7346L107.314 10.7384Z\"\n          fill=\"").concat(presetIndex===0?'#999':'#333',"\" />\n        <path d=\"M0.410889 0.332031L216.411 0.332031V30.332H0.410889V0.332031Z\" fill=\"transparent\" class=\"preset-prev-btn\"/>\n      </g>\n\n      <g clip-path=\"url(#clip1_5011_12558)\">\n      <rect x=\"0.410889\" y=\"30.332\" width=\"216\" height=\"352\" rx=\"12\" fill=\"white\"/>\n        ").concat(presets.find((_,index)=>index===presetIndex).map((preset,index)=>getPresetListItemSvg(preset.title,index,preset.id)).join(''),"\n      </g>\n      <mask id=\"path-21-inside-2_5011_12558\" fill=\"white\">\n      <path d=\"M0.410889 382.332H216.411V412.332H0.410889V382.332Z\"/>\n      </mask>\n      <path d=\"M0.410889 384.332H216.411V380.332H0.410889V384.332Z\" fill=\"#E6E6E6\" mask=\"url(#path-21-inside-2_5011_12558)\"/>\n\n      <g class=\"preset-next-btn\">\n        <path\n          d=\"M109.508 401.926C108.859 402.467 107.963 402.467 107.314 401.926L100.134 395.929C98.7462 394.771 99.4898 392.332 101.231 392.332H115.591C117.332 392.332 118.076 394.771 116.688 395.929L109.508 401.926Z\"\n          fill=\"").concat(presetIndex===presets.length-1?'#999':'#333',"\" />\n        />\n        <path d=\"M0.410889 382.332H216.411V412.332H0.410889V382.332Z\" fill=\"transparent\" class=\"preset-next-btn\"/>\n      </g>\n      </g>\n      <rect x=\"1.41089\" y=\"1.33203\" width=\"214\" height=\"410\" rx=\"11\" stroke=\"#E6E6E6\" stroke-width=\"2\"/>\n      <defs>\n      <clipPath id=\"clip0_5011_12558\">\n      <rect x=\"0.410889\" y=\"0.332031\" width=\"216\" height=\"412\" rx=\"12\" fill=\"white\"/>\n      </clipPath>\n      <clipPath id=\"clip1_5011_12558\">\n      <rect x=\"0.410889\" y=\"30.332\" width=\"216\" height=\"352\" rx=\"12\" fill=\"white\"/>\n      </clipPath>\n      </defs>\n    </g>\n  ");}function getPresetListItemSvg(text,index,id){return"\n    <g class=\"cursor-pointer preset-btn\">\n      <text x=\"22\" y=\"".concat(71+48*index,"\" class=\"text-20 text-title\" data-rect-width=\"160\">\n      ").concat(text,"\n      </text>\n      <rect\n        x=\"8\" y=\"").concat(40+48*index,"\" width=\"200\" height=\"48\" rx=\"8\"\n        fill=\"transparent\" class=\"preset-btn\" data-id=\"").concat(id,"\"\n      />\n    </g>\n  ");}function getAverageAndMedianAndMode(arr){var _getAverage,_getMedian,_getMode;const items=arr.filter(item=>item);const average=(_getAverage=getAverage(items))!==null&&_getAverage!==void 0?_getAverage:0;const median=(_getMedian=getMedian(items))!==null&&_getMedian!==void 0?_getMedian:0;const mode=(_getMode=getMode(items))!==null&&_getMode!==void 0?_getMode:0;const isOnlyNumber=Array.isArray(median)&&median.every(item=>!isNaN(item));const resultTmp=[average,median,mode];const result=[average,isOnlyNumber?median.map(item=>Number(item)).reduce((acc,cur)=>acc+cur,0)/median.length:median,mode];return{resultTmp,result};}function isRectangleInside(bigRect,smallRect){// 큰 사각형의 경계 좌표 계산
const bigMinX=Math.min(bigRect[0][0],bigRect[1][0],bigRect[2][0],bigRect[3][0]);const bigMaxX=Math.max(bigRect[0][0],bigRect[1][0],bigRect[2][0],bigRect[3][0]);const bigMinY=Math.min(bigRect[0][1],bigRect[1][1],bigRect[2][1],bigRect[3][1]);const bigMaxY=Math.max(bigRect[0][1],bigRect[1][1],bigRect[2][1],bigRect[3][1]);// 작은 사각형의 모든 꼭짓점이 큰 사각형의 경계 내에 있는지 확인
for(let i=0;i<smallRect.length;i++){const x=smallRect[i][0];const y=smallRect[i][1];if(x<bigMinX||x>bigMaxX||y<bigMinY||y>bigMaxY){return false;}}return true;}// 두 원이 접하는지 확인하는 함수
function areTouching(c1,c2){const distanceSq=(c2.x+c2.cx-(c1.x+c1.cx))**2+(c2.cy+c2.y-(c1.cy+c1.y))**2;const radiusSum=c1.r+c2.r;const radiusDiff=Math.abs(c2.r-c1.r);return distanceSq<=radiusSum**2&&distanceSq>=radiusDiff**2;}// 배열에 있는 원들이 접하는지 확인하는 함수
function classifyCircles(circles){let touchingCircles=[];let nonTouchingCircles=[];let assigned=new Array(circles.length).fill(false);for(const circle of circles)circle.count=0;for(let i=0;i<circles.length;i++){if(!assigned[i]){let group=[circles[i]];assigned[i]=true;for(let j=0;j<group.length;j++){for(let k=0;k<circles.length;k++){if(i===k)continue;if(!assigned[k]&&areTouching(group[j],circles[k])){group.push(circles[k]);group[j].count++;circles[k].count++;assigned[k]=true;}}}if(group.length>1){touchingCircles.push(group);}else{nonTouchingCircles.push(group[0]);}}}return{touchingCircles:touchingCircles,nonTouchingCircles:nonTouchingCircles};}function getSvgSurroundCoordinatesByTag(id,target){if(id){if(target){var _getElement;const{x,y,width,height}=(_getElement=util_getElement(id))===null||_getElement===void 0?void 0:_getElement.querySelector(".".concat(target)).getBBox();return[[x,y],[x+width,y],[x+width,y+height],[x,y+height]];}else{var _getElement2;const{x,y,width,height}=(_getElement2=util_getElement(id))===null||_getElement2===void 0?void 0:_getElement2.getBBox();return[[x,y],[x+width,y],[x+width,y+height],[x,y+height]];}}}function getCircleCenterTextSvg(transform){let text=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'O';const{x,y}=transform;if(text==='A'){return"\n        <rect width=\"120\" height=\"78\" rx=\"12\" fill=\"white\" />\n        <path\n          transform=\"translate(".concat(x,", ").concat(y,")\"\n          d=\"M47.261 68.9571C47.261 69.6871 47.9341 70.1129 49.2803 70.2346C49.807 70.2346 50.0704 70.4018 50.0704 70.7364C50.0704 70.7668 50.0412 70.9645 49.9826 71.3295C49.8948 71.7554 49.807 72.0291 49.7192 72.1508C49.6314 72.2724 49.4412 72.3333 49.1486 72.3333C49.09 72.3333 48.9144 72.3333 48.6218 72.3333C48.3291 72.3333 47.8316 72.318 47.1293 72.2876C46.4269 72.2572 45.4904 72.242 44.3198 72.242C42.242 72.242 40.9104 72.2724 40.3251 72.3333H39.9739C39.7691 72.1203 39.6667 71.9531 39.6667 71.8314C39.7252 71.0102 39.9154 70.4779 40.2373 70.2346H40.8519C42.9005 70.1433 44.393 69.3829 45.3295 67.9534C45.5051 67.7709 48.1536 63.1324 53.275 54.0381C58.3964 44.9437 61.001 40.3357 61.0887 40.2141C61.2936 39.8491 61.6448 39.6666 62.1423 39.6666H62.4935H63.2397C63.4153 39.9403 63.5031 40.0924 63.5031 40.1228L64.7323 54.8593C65.5517 64.6837 65.9907 69.6414 66.0492 69.7327C66.1955 70.0673 67.1466 70.2346 68.9025 70.2346C69.6342 70.2346 70 70.3866 70 70.6908C70 70.7516 69.9561 70.9645 69.8683 71.3295C69.7805 71.7858 69.7073 72.0595 69.6488 72.1508C69.5903 72.242 69.3854 72.3028 69.0342 72.3333C68.9464 72.3333 68.7416 72.3333 68.4197 72.3333C68.0978 72.3333 67.5271 72.318 66.7077 72.2876C65.8882 72.2572 64.8201 72.242 63.5031 72.242C60.7522 72.242 58.9524 72.2724 58.1037 72.3333H57.5769C57.4013 72.1508 57.3135 72.0139 57.3135 71.9226C57.3135 71.8314 57.3428 71.5576 57.4013 71.1014C57.5184 70.706 57.6062 70.4627 57.6647 70.3714L57.8403 70.2346H58.7183C60.2986 70.1433 61.2351 69.8848 61.5277 69.459L61.001 62.6154H50.5533L49.0608 65.2616C47.8609 67.3603 47.261 68.5921 47.261 68.9571ZM60.7815 60.4711C60.7815 60.1365 60.6059 57.764 60.2547 53.3537C59.9035 48.9434 59.6987 46.7231 59.6401 46.6927L58.4549 48.6545C57.9866 49.4757 57.0648 51.103 55.6893 53.5362L51.7385 60.4711L56.26 60.5167C59.2743 60.5167 60.7815 60.5015 60.7815 60.4711Z\"\n          fill=\"black\"\n        />\n        <rect x=\"1\" y=\"1\" width=\"118\" height=\"76\" rx=\"11\" stroke=\"#E6EBF5\" stroke-opacity=\"0.8\" stroke-width=\"2\" fill=\"transparent\" class=\"center-text-svg\"/>\n      ");}else if(text==='B'){return"\n        <rect width=\"120\" height=\"78\" rx=\"12\" fill=\"white\" />\n        <path\n          transform=\"translate(".concat(x-86,", ").concat(y+4,")\"\n          d=\"M136.547 41.7096C135.731 41.7096 135.248 41.6948 135.097 41.6652C134.946 41.6356 134.871 41.4728 134.871 41.1767C134.871 40.3773 135.037 39.8887 135.369 39.7111C135.399 39.6815 137.362 39.6667 141.259 39.6667C149.082 39.6667 153.205 39.6963 153.628 39.7555C155.531 40.0516 157.116 40.7178 158.385 41.754C159.654 42.7903 160.303 44.1523 160.333 45.8399C160.333 47.7348 159.457 49.4373 157.705 50.9473C155.954 52.4573 153.945 53.4788 151.68 54.0117L151.227 54.1449C153.16 54.4114 154.745 55.0924 155.984 56.1879C157.222 57.2834 157.857 58.6454 157.887 60.2738C157.887 62.4352 156.799 64.5225 154.625 66.5359C152.45 68.5492 149.777 69.6891 146.605 69.9556C146.394 69.9852 143.207 70 137.045 70C131.004 70 127.939 69.9704 127.848 69.9112C127.727 69.8224 127.667 69.7039 127.667 69.5559C127.667 69.3486 127.697 69.1414 127.757 68.9341C127.908 68.3716 128.059 68.0607 128.21 68.0015C128.331 67.9719 128.558 67.9571 128.89 67.9571H129.162C129.977 67.9571 130.883 67.9126 131.88 67.8238C132.303 67.735 132.59 67.5573 132.741 67.2909C132.832 67.1724 133.919 63.0569 136.003 54.9444C138.087 46.8318 139.129 42.5534 139.129 42.1093C139.129 41.9021 138.269 41.7688 136.547 41.7096ZM155.485 45.8399C155.485 44.9517 155.259 44.1227 154.806 43.3529C154.353 42.583 153.613 42.0797 152.586 41.8429C152.374 41.7836 150.985 41.7392 148.417 41.7096C147.813 41.7096 147.179 41.7096 146.515 41.7096C145.85 41.7096 145.321 41.7244 144.929 41.754H144.34C143.887 41.7836 143.6 41.9317 143.479 42.1981C143.419 42.3166 142.935 44.0931 142.029 47.5276C142.029 47.6164 142.014 47.7052 141.984 47.794L140.579 53.3899H144.249C146.696 53.3899 148.1 53.3603 148.463 53.3011C150.275 53.005 151.891 52.1464 153.311 50.7252C154.73 49.3041 155.455 47.6756 155.485 45.8399ZM153.039 59.8297C153.039 58.5269 152.691 57.4462 151.997 56.5876C151.302 55.729 150.396 55.2256 149.278 55.0776C149.097 55.048 147.844 55.0332 145.518 55.0332C141.954 55.0332 140.156 55.048 140.126 55.0776C140.126 55.1368 139.869 56.2175 139.356 58.3197C138.842 60.4218 138.314 62.5092 137.77 64.5817L136.955 67.6906C136.955 67.809 137.136 67.8682 137.498 67.8682C137.861 67.8682 139.084 67.8978 141.168 67.9571C143.857 67.9571 145.306 67.9422 145.518 67.9126C147.39 67.7054 149.112 66.8468 150.683 65.3368C152.253 63.8267 153.039 61.9911 153.039 59.8297Z\"\n          fill=\"black\"\n        />\n        <rect x=\"1\" y=\"1\" width=\"118\" height=\"76\" rx=\"11\" stroke=\"#E6EBF5\" stroke-opacity=\"0.8\" stroke-width=\"2\" fill=\"transparent\" class=\"center-text-svg\"/>\n      ");}else if(text==='C'){return"\n        <rect width=\"120\" height=\"78\" rx=\"12\" fill=\"white\" />\n        <path\n          transform=\"translate(".concat(x-176,", ").concat(y+4,")\"\n          d=\"M215.667 60.0215C215.667 56.5766 216.694 53.2665 218.749 50.0912C220.804 46.9159 223.396 44.3996 226.525 42.5423C229.654 40.6851 232.782 39.7415 235.911 39.7115C238.671 39.7115 240.864 40.4754 242.49 42.0031C242.766 42.3027 242.996 42.5573 243.18 42.767C243.364 42.9767 243.487 43.1265 243.548 43.2163L243.594 43.3511C243.686 43.3511 244.1 42.9617 244.837 42.1829C245.051 42.0031 245.281 41.7934 245.527 41.5538C245.772 41.3141 246.018 41.0745 246.263 40.8349C246.508 40.5952 246.662 40.4305 246.723 40.3406L247.413 39.6666H247.689C248.119 39.6666 248.333 39.7714 248.333 39.9811C248.333 40.1009 247.843 42.1529 246.861 46.137C245.757 50.3009 245.205 52.3978 245.205 52.4277C245.143 52.5775 245.067 52.6674 244.975 52.6973C244.883 52.7273 244.607 52.7572 244.146 52.7872H243.41C243.226 52.6074 243.134 52.4726 243.134 52.3828C243.134 52.3528 243.15 52.248 243.18 52.0682C243.211 51.8885 243.242 51.5889 243.272 51.1696C243.303 50.7502 243.318 50.2709 243.318 49.7317C243.318 47.6048 242.828 45.7476 241.846 44.1599C240.864 42.5723 239.193 41.7635 236.831 41.7335C236.033 41.7335 235.175 41.8384 234.254 42.0481C233.334 42.2578 232.23 42.6172 230.942 43.1265C229.654 43.6357 228.381 44.4745 227.123 45.6427C225.865 46.811 224.746 48.204 223.764 49.8216C222.783 51.529 222.001 53.5211 221.418 55.7977C220.835 58.0744 220.544 59.9316 220.544 61.3695C220.544 64.7844 221.709 67.2408 224.04 68.7386C225.513 69.7571 227.322 70.2663 229.469 70.2663C232.261 70.2663 234.745 69.2478 236.923 67.2108C239.101 65.1738 240.542 62.9571 241.248 60.5607C241.371 60.1712 241.463 59.9466 241.524 59.8867C241.585 59.8268 241.831 59.7968 242.26 59.7968C242.874 59.7968 243.18 59.9316 243.18 60.2012C243.18 60.351 243.165 60.4858 243.134 60.6056C242.245 63.8109 240.343 66.5668 237.429 68.8734C234.515 71.18 231.387 72.3333 228.043 72.3333C224.577 72.3333 221.648 71.2099 219.255 68.9632C216.863 66.7166 215.667 63.736 215.667 60.0215Z\"\n          fill=\"black\"\n        />\n        <rect x=\"1\" y=\"1\" width=\"118\" height=\"76\" rx=\"11\" stroke=\"#E6EBF5\" stroke-opacity=\"0.8\" stroke-width=\"2\" fill=\"transparent\" class=\"center-text-svg\"/>\n      ");}else{return"\n        <rect width=\"120\" height=\"78\" rx=\"12\" fill=\"white\"/>\n        <path\n          transform=\"translate(".concat(x-262,", ").concat(y+4,")\"\n          d=\"M308.396 41.7096C308.303 41.7096 308.18 41.7096 308.026 41.7096C307.254 41.7096 306.791 41.6948 306.637 41.6652C306.483 41.6356 306.406 41.4728 306.406 41.1767C306.406 40.3773 306.575 39.8887 306.915 39.7111C306.977 39.6815 308.473 39.6667 311.405 39.6667C313.781 39.6667 315.138 39.6667 315.478 39.6667C315.817 39.6667 316.033 39.7555 316.126 39.9331C322.636 54.6187 325.954 62.1539 326.077 62.5388L328.576 53.0791C330.212 46.8318 331.03 43.5009 331.03 43.0864C331.03 42.287 330.042 41.828 328.067 41.7096C327.327 41.7096 326.956 41.5468 326.956 41.2211C326.956 41.1619 326.987 40.9842 327.049 40.6881C327.172 40.2144 327.265 39.9331 327.327 39.8443C327.388 39.7555 327.543 39.6963 327.79 39.6667C327.882 39.6667 328.36 39.6815 329.224 39.7111C330.088 39.7407 331.369 39.7703 333.066 39.7999C334.609 39.7999 335.782 39.7851 336.584 39.7555C337.386 39.7259 337.849 39.7111 337.972 39.7111C338.435 39.7111 338.667 39.8591 338.667 40.1552C338.667 40.8066 338.543 41.2507 338.296 41.4876C338.235 41.6356 337.895 41.7096 337.278 41.7096C335.087 41.828 333.714 42.4202 333.159 43.4861L326.262 69.6891C326.2 69.8964 325.876 70 325.29 70C324.858 70 324.596 69.9704 324.503 69.9112C324.411 69.8224 322.42 65.3368 318.532 56.4544L312.654 43.1752L309.646 54.7223C307.64 62.3019 306.637 66.225 306.637 66.4915C306.791 67.4685 307.902 67.9571 309.97 67.9571H310.433C310.618 68.1051 310.71 68.2235 310.71 68.3123C310.71 68.4012 310.679 68.6824 310.618 69.1562C310.494 69.5411 310.34 69.8224 310.155 70H309.553C308.597 69.9408 306.93 69.9112 304.554 69.9112C303.69 69.9112 302.903 69.9112 302.194 69.9112C301.484 69.9112 300.913 69.9112 300.481 69.9112C300.049 69.9112 299.787 69.926 299.694 69.9556C299.231 69.9556 299 69.8224 299 69.5559C299 69.4374 299.046 69.2006 299.139 68.8453C299.231 68.49 299.309 68.2827 299.37 68.2235C299.432 68.0459 299.787 67.9571 300.435 67.9571C302.533 67.8682 303.891 67.2909 304.508 66.225C304.631 66.0473 305.727 61.9466 307.794 53.9229L310.942 41.8429C310.88 41.8132 310.031 41.7688 308.396 41.7096Z\"\n          fill=\"black\"\n        />\n        <rect x=\"1\" y=\"1\" width=\"118\" height=\"76\" rx=\"11\" stroke=\"#E6EBF5\" stroke-opacity=\"0.8\" stroke-width=\"2\" fill=\"transparent\" class=\"center-text-svg\"/>\n      ");}}function isOverlapping(rect1,rect2){// 직사각형이 겹치지 않는 조건
if(rect1.x>=rect2.x+rect2.width||rect2.x>=rect1.x+rect1.width){return false;}if(rect1.y>=rect2.y+rect2.height||rect2.y>=rect1.y+rect1.height){return false;}// 위 조건에 해당하지 않으면 겹침
return true;}function completeArithmeticSequence(array){const arr=[...new Set(array)].sort((a,b)=>a-b);const commonDifference=arr[1]-arr[0];const minValue=arr[0];const maxValue=arr[arr.length-1];const completeArray=[];for(let i=minValue;i<=maxValue;i+=commonDifference){completeArray.push(i);}return completeArray;}
;// CONCATENATED MODULE: ./src/engine/engine.js
/* 
  Codnut Engine v1.0
  written by: Jiwoong Song, Chulwhi Park, and Kyungsoo Lee

  Codnut Engine is a SVG-based math engine that can be used to create interactive math content.

  Codnut Engine has the follwing features:
  - SVG-based rendering
  - Interactive elements
  - Toolbar for selected elements
  - Customizable pre-render and after-render functions
*/var _data=/*#__PURE__*/_classPrivateFieldKey("data");class CodnutDataStorage{constructor(){Object.defineProperty(this,_data,{writable:true,value:{}});}set(key,value){_classPrivateFieldBase(this,_data)[_data][key]=value;}get(key){return _classPrivateFieldBase(this,_data)[_data][key];}clear(key){delete _classPrivateFieldBase(this,_data)[_data][key];}}// Every Math class MUST extend this class
// Override onClear() and initialize() to add custom functionality
var _version=/*#__PURE__*/_classPrivateFieldKey("version");var _gridDistance=/*#__PURE__*/_classPrivateFieldKey("gridDistance");var _snapDistanceThreshold=/*#__PURE__*/_classPrivateFieldKey("snapDistanceThreshold");var _dataStorage=/*#__PURE__*/_classPrivateFieldKey("dataStorage");var _registerKeyboardEvents=/*#__PURE__*/_classPrivateFieldKey("registerKeyboardEvents");var _registerFullscreenEvents=/*#__PURE__*/_classPrivateFieldKey("registerFullscreenEvents");class CodnutDigitalMathClass{getGridDistance(){return _classPrivateFieldBase(this,_gridDistance)[_gridDistance];}getSnapDistanceThreshold(){return _classPrivateFieldBase(this,_snapDistanceThreshold)[_snapDistanceThreshold];}constructor(_root){Object.defineProperty(this,_registerFullscreenEvents,{value:_registerFullscreenEvents2});Object.defineProperty(this,_registerKeyboardEvents,{value:_registerKeyboardEvents2});Object.defineProperty(this,_version,{writable:true,value:'1.0'});// Constants
Object.defineProperty(this,_gridDistance,{writable:true,value:40});Object.defineProperty(this,_snapDistanceThreshold,{writable:true,value:10});Object.defineProperty(this,_dataStorage,{writable:true,value:new CodnutDataStorage()});this.activeElement=null;this.createElement=null;this.elements=[];this.grabbed=null;this.grabbedCoordinates={x:0,y:0};this.selected=[];this.dragToAdd=false;this.grabbedToDND=null;this.draw=false;this.grabToMove=false;this.initialGrab={x:0,y:0};this.initialViewbox={x:0,y:0,width:1920,height:1200};/* */this.currentViewbox={};this.currentScale=1;this.toastSetTimeOut=false;this.toastIdCounter=0;this.toastCount=0;if(_root){this.root=_root;}else{this.root=document;}this.keyboardId='codnut-keypad';this.keyboardInstance=new CodnutDigitalMathKeypad(this.keyboardId);this.isComposing=false;this.isGrid=false;this.physicalKeyboardInputElement=util_getElement('codnut-math-input');this.physicalKeyboardInputElement.addEventListener('input',event=>{const element=this.selected[0];if(element){const isTitle=element.inputTargetClassName.startsWith('title');const deleteFlg=event.inputType==='deleteContentBackward';const currentValue=isTitle?event.target.value:deleteFlg?'':event.target.value.trim();this.onInputCallback(currentValue);}});this.physicalKeyboardInputElement.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();if(this.isComposing){this.isComposing=false;return;}const currentValue=event.target.value;event.target.value='';this.onKeyDownCallBack(currentValue);}});this.physicalKeyboardInputElement.addEventListener('compositionstart',()=>{this.isComposing=true;});this.physicalKeyboardInputElement.addEventListener('compositionend',()=>{this.isComposing=false;});this.isRender=true;this.isDelete=true;_classPrivateFieldBase(this,_registerKeyboardEvents)[_registerKeyboardEvents]();_classPrivateFieldBase(this,_registerFullscreenEvents)[_registerFullscreenEvents]();/* Move around the board */util_registerEvent('move-board','pointermove',e=>{if(!this.grabToMove)return;let dx=e.offsetX-this.initialGrab.x;let dy=e.offsetY-this.initialGrab.y;let reference=this.initialViewbox;let scale=2;let vBox="".concat(Number(reference[0])-dx*scale," ").concat(Number(reference[1])-dy*scale," ").concat(reference[2]," ").concat(reference[3]);util_getElement('outermost').setAttribute('viewBox',vBox);let vBoxAtt=vBox.split(' ');util_getElement('codnut-digital-math-grid').setAttribute('x',vBoxAtt[0]);util_getElement('codnut-digital-math-grid').setAttribute('y',vBoxAtt[1]);util_getElement('codnut-digital-math-grid').setAttribute('width',vBoxAtt[2]);util_getElement('codnut-digital-math-grid').setAttribute('height',vBoxAtt[3]);util_getElement('global-dnd-board').setAttribute('viewBox',vBox);util_getElement('pen-board-svg').setAttribute('viewBox',vBox);});util_registerEvent('move-board','pointerdown',e=>{this.grabToMove=true;this.initialGrab={x:e.offsetX,y:e.offsetY};this.initialViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');});util_registerEvent('move-board','pointerup',e=>{this.grabToMove=false;});/************************/function isPointerOnPath(mouseX,mouseY,path){let tolerance=arguments.length>3&&arguments[3]!==undefined?arguments[3]:10;const pathLength=path.getTotalLength();let point,dx,dy;for(let i=0;i<pathLength;i+=1){point=path.getPointAtLength(i);dx=Math.abs(point.x-mouseX);dy=Math.abs(point.y-mouseY);if(dx<tolerance&&dy<tolerance){return true;// Pointer is within tolerance of the path
}}return false;// Pointer is not on the path
}/* Use Pen */util_registerEvent('pen-board','pointermove',e=>{if(!this.draw)return;let factor=this.getScaleFactor();let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});let mode=util_getElement('pen-board-svg').getAttribute('mode');if(mode==='pen'){let d=this.currentPath.getAttribute('d');this.currentPath.setAttribute('d',"".concat(d," L ").concat(p.x,",").concat(p.y));}else if(mode==='erase'){let paths=util_getElement('pen-board-svg').querySelectorAll('path');if(paths){paths.forEach(path=>{if(isPointerOnPath(p.x,p.y,path)){path.remove();}});}}});util_registerEvent('pen-board','pointerdown',e=>{this.draw=true;let factor=this.getScaleFactor();let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});let mode=util_getElement('pen-board-svg').getAttribute('mode');if(mode==='pen'){this.currentPath=document.createElementNS('http://www.w3.org/2000/svg','path');this.currentPath.setAttribute('fill','none');this.currentPath.setAttribute('stroke','black');this.currentPath.setAttribute('stroke-width','4');this.currentPath.setAttribute('id','pen-path-'+crypto.randomUUID());// Start the path
this.currentPath.setAttribute('d',"M ".concat(p.x,",").concat(p.y));this.currentPath.classList.add('pen-stroke');util_getElement('pen-board-svg').appendChild(this.currentPath);}});util_registerEvent('pen-board','pointerup',e=>{this.draw=false;});/************************/ /* Global DND Board */util_registerEvent('global-dnd-board','pointermove',this.handleGlobalDndBoardMove.bind(this));util_registerEvent('global-dnd-board','pointerup',this.handleGlobalDndBoardPointerUp.bind(this));/***********************/util_registerEvent('codnut-toolbar-refresh','pointerup',e=>{util_getElement('codnut-toolbar-refresh').classList.remove('hover-dim');// override this function to add clear functionality
let outermost=util_getElement('outermost');outermost.setAttribute('scale','3');outermost.setAttribute('viewBox','0 0 1920 1200');let grid=util_getElement('codnut-digital-math-grid');grid.setAttribute('x',0);grid.setAttribute('y',0);grid.setAttribute('width',1920);grid.setAttribute('height',1200);grid.setAttribute('viewBox',"0 0 1920 1200");let dot=util_getElement('codnut-toolbar-zoom-pointer');dot.setAttribute('transform',"translate(0, 0)");let globaldnd=util_getElement('global-dnd-board');globaldnd.setAttribute('viewBox',"0 0 1920 1200");util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-explore').classList.remove('toolbar-selected');util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board').classList.add('hidden');util_getElement('codnut-digital-math-grid').classList.remove('invisible');util_getElement('codnut-toolbar-toggle-grid').classList.remove('toolbar-selected');util_getElement('codnut-digital-math-grid').classList.add('invisible');util_getElement('move-board').classList.remove('hidden');util_getElement('move-board').classList.add('hidden');util_getElement('pen-board-svg').innerHTML='';this.onClear();});util_registerEvent('codnut-toolbar-remove','pointerup',e=>{});util_registerEvent('codnut-math-trashcan','pointerup',e=>{util_getElement('codnut-math-trashcan').classList.remove('hover-dim');if(this.onErase){let result=this.onErase();if(result){return;}}this.selected.forEach(elem=>{util_getElement(elem.id+'-animation').classList.add('disappear-scale-down');this.removeElementById(elem.id);});const msbr=util_getElement('multi-select-bounding-rect');if(!msbr.classList.contains('hidden'))msbr.classList.add('hidden');this.grabbed=null;this.selected=[];setTimeout(()=>{this.render();},300);});util_registerEvent('outermost','pointerdown',e=>{if(this.onOuterMostPointerDown)this.onOuterMostPointerDown(e);// Pointerdown event fired on outermost / grid
if(e.srcElement.id==='outermost'||e.srcElement.id==='codnut-digital-math-grid'){this.grabbed=null;this.physicalKeyboardInputElement.blur();let factor=this.getScaleFactor();let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});_classPrivateFieldBase(this,_dataStorage)[_dataStorage].set('state','multi-select');_classPrivateFieldBase(this,_dataStorage)[_dataStorage].set('multiselect-upperleft-coordinates',{x:p.x,y:p.y});}});util_registerEvent('outermost','pointerup',e=>{if(this.onOuterMostPointerUp){let result=this.onOuterMostPointerUp(e);if(result)return;}let currentState=_classPrivateFieldBase(this,_dataStorage)[_dataStorage].get('state');if(currentState&&currentState==='multi-select'){const multiSelectArea=util_getElement('codnut-multiselect-area');if(!(multiSelectArea!==null&&multiSelectArea!==void 0&&multiSelectArea.classList.contains('hidden'))){multiSelectArea.classList.add('hidden');let x=Number(multiSelectArea.getAttribute('x'));let y=Number(multiSelectArea.getAttribute('y'));let width=Number(multiSelectArea.getAttribute('width'));let height=Number(multiSelectArea.getAttribute('height'));this.selected=[];this.elements.forEach(elem=>{if(elem.x>x&&elem.x<x+width&&elem.y>y&&elem.y<y+height){if(!this.selected.includes(elem))this.selected.push(elem);}});if(this.selected.length>1){const mbrBR=util_getElement('multi-select-bounding-rect');if(mbrBR.classList.contains('hidden')){mbrBR.classList.remove('hidden');}let leftMostX=999999;let rightMostX=-999999;let topY=999999;let bottomY=-999999;this.selected.forEach(element=>{const elem=element.getBoundingRect();if(elem){if(elem.x<leftMostX)leftMostX=elem.x;if(elem.x+elem.width>rightMostX)rightMostX=elem.x+elem.width;if(elem.y<topY)topY=elem.y;if(elem.y+elem.height>bottomY)bottomY=elem.y+elem.height;}});mbrBR.setAttribute('x',leftMostX);mbrBR.setAttribute('y',topY);mbrBR.setAttribute('width',rightMostX-leftMostX);mbrBR.setAttribute('height',bottomY-topY);_classPrivateFieldBase(this,_dataStorage)[_dataStorage].set('multi-select-bounding-rect-coords',{x:leftMostX,y:topY});}_classPrivateFieldBase(this,_dataStorage)[_dataStorage].clear('state');this.render();return;}_classPrivateFieldBase(this,_dataStorage)[_dataStorage].clear('state');}if(currentState&&currentState==='move-multi-objs'){const mbrBR=util_getElement('multi-select-bounding-rect');_classPrivateFieldBase(this,_dataStorage)[_dataStorage].set('multi-select-bounding-rect-coords',{x:mbrBR.getAttribute('x'),y:mbrBR.getAttribute('y')});_classPrivateFieldBase(this,_dataStorage)[_dataStorage].clear('state');}if(this.grabbed){if(this.selected.length>1){this.selected.forEach(elem=>{var _getElement;let transformValue=(_getElement=util_getElement(elem.id))===null||_getElement===void 0?void 0:_getElement.getAttribute('transform');const regex=/translate\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/;const matches=transformValue===null||transformValue===void 0?void 0:transformValue.match(regex);if(matches){elem.setXY(Number(matches[1])-elem.rx,Number(matches[2])-elem.ry);}});}else{var _getElement2;let transformValue=(_getElement2=util_getElement(this.grabbed.id))===null||_getElement2===void 0?void 0:_getElement2.getAttribute('transform');const regex=/translate\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/;const matches=transformValue===null||transformValue===void 0?void 0:transformValue.match(regex);if(matches){this.grabbed.setXY(Number(matches[1])-this.grabbed.rx,Number(matches[2])-this.grabbed.ry);}}this.grabbed=null;if(this.afterDrag){this.afterDrag();}}else if((e.srcElement.id==='outermost'||e.srcElement.id==='codnut-digital-math-grid')&&this.selected.length>0){this.grabbed=null;this.selected=[];const mbrBR=util_getElement('multi-select-bounding-rect');if(!mbrBR.classList.contains('hidden')){mbrBR.classList.add('hidden');}this.render();}});util_registerEvent('outermost','pointermove',e=>{if(this.onOuterMostPointerMove){let skipGlobalAction=this.onOuterMostPointerMove(e);if(skipGlobalAction)return;}// Multi-Select
const currentState=_classPrivateFieldBase(this,_dataStorage)[_dataStorage].get('state');if(currentState&&currentState==='multi-select'){let upperLeft=_classPrivateFieldBase(this,_dataStorage)[_dataStorage].get('multiselect-upperleft-coordinates');if(!upperLeft)return;let factor=this.getScaleFactor();let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});let underRight={x:p.x,y:p.y};let width=underRight.x-upperLeft.x;let height=underRight.y-upperLeft.y;let coordX=upperLeft.x;let coordY=upperLeft.y;if(width<0){coordX=coordX-Math.abs(width);width=Math.abs(width);}if(height<0){coordY=coordY-Math.abs(height);height=Math.abs(height);}let multiSelectRect=util_getElement('codnut-multiselect-area');if(multiSelectRect&&width>20&&height>20){if(multiSelectRect.classList.contains('hidden'))multiSelectRect.classList.remove('hidden');multiSelectRect.setAttribute('x',coordX);multiSelectRect.setAttribute('y',coordY);multiSelectRect.setAttribute('width',width);multiSelectRect.setAttribute('height',height);}return;}if(this.grabbed){let moveFactor=this.getMoveFactor();let xDistance=e.offsetX-this.grabbedCoordinates.x;let yDistance=e.offsetY-this.grabbedCoordinates.y;const transformX=this.grabbed.x+xDistance*moveFactor+this.grabbed.rx;const transformY=this.grabbed.y+yDistance*moveFactor+this.grabbed.ry;const currentSelected=this.selected;if(currentSelected.length>1){for(const elem of currentSelected){const tX=elem.x+xDistance*moveFactor+elem.rx;const tY=elem.y+yDistance*moveFactor+elem.ry;this.updateElementTransform(elem.id,tX,tY,elem.rotate);}const msbRectCoords=_classPrivateFieldBase(this,_dataStorage)[_dataStorage].get('multi-select-bounding-rect-coords');const msbRect=util_getElement('multi-select-bounding-rect');const tX=Number(msbRectCoords.x)+xDistance*moveFactor;const tY=Number(msbRectCoords.y)+yDistance*moveFactor;msbRect.setAttribute('x',tX);msbRect.setAttribute('y',tY);_classPrivateFieldBase(this,_dataStorage)[_dataStorage].set('state','move-multi-objs');const w=msbRect.getAttribute('width');const h=msbRect.getAttribute('height');const msgIcon=util_getElement('multi-select-group-icon');msgIcon===null||msgIcon===void 0?void 0:msgIcon.setAttribute('transform',"translate(".concat(tX+Number(w!==null&&w!==void 0?w:0),", ").concat(tY+Number(h!==null&&h!==void 0?h:0),")"));}else{if(this.onGrabbedMove)this.onGrabbedMove(this.grabbed,transformX,transformY);this.updateElementTransform(this.grabbed.id,transformX,transformY,this.grabbed.rotate);const curCoordinates=this.rotateCoordinates(this.grabbed.coordinates,transformX,transformY,this.grabbed.rotate);if(curCoordinates){const elements=this.elements.filter(element=>element.id!==this.grabbed.id);for(const element of elements){const elementCoordinates=this.rotateCoordinates(element.coordinates,element.x+element.rx,element.y+element.ry,element.rotate);if(elementCoordinates){for(const curCoordinate of curCoordinates){for(const coordinate of elementCoordinates){let a=this.getSnapCoordinateTwoPoint(curCoordinate,coordinate,_classPrivateFieldBase(this,_snapDistanceThreshold)[_snapDistanceThreshold]);if(this.getSnapCoordinateTwoPoint(curCoordinate,coordinate,_classPrivateFieldBase(this,_snapDistanceThreshold)[_snapDistanceThreshold])){let x=curCoordinate[0]-coordinate[0];let y=curCoordinate[1]-coordinate[1];this.updateElementTransform(this.grabbed.id,transformX-x,transformY-y,this.grabbed.rotate);this.isGrid=false;}}}}}// Grid스냅
if(this.isGrid){for(const coordinate of curCoordinates){const{snapX,snapY}=this.getSnapCoordinate(coordinate,_classPrivateFieldBase(this,_gridDistance)[_gridDistance],_classPrivateFieldBase(this,_snapDistanceThreshold)[_snapDistanceThreshold]);if(snapX%_classPrivateFieldBase(this,_gridDistance)[_gridDistance]===0&&snapY%_classPrivateFieldBase(this,_gridDistance)[_gridDistance]===0){const x=coordinate[0]-snapX;const y=coordinate[1]-snapY;this.updateElementTransform(this.grabbed.id,transformX-x,transformY-y,this.grabbed.rotate);return;}}}}}}});if(this.initialize)this.initialize();}handleGlobalDndBoardMove(e){if(this.grabbedToDND){let grabbed=util_getElement(this.grabbedToDND.id);if(grabbed.classList.contains('invisible')){grabbed.classList.remove('invisible');}const top=getElementsByQuerySelector('.item-toolbar').offsetTop;const left=getElementsByQuerySelector('.item-toolbar').offsetLeft;const isTouch=e.pointerType==='touch';let factor=this.getScaleFactor();let x=(e.offsetX+(isTouch?left:0))*factor;let y=(e.offsetY+(isTouch?top:0))*factor;let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let p=this.translatePointFromViewBoxToViewBox({x,y},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});grabbed.setAttribute('transform',"translate(".concat(p.x,", ").concat(p.y,")"));}}handleGlobalDndBoardPointerUp(e){if(this.grabbedToDND){var _getElement3;let transformValue=(_getElement3=util_getElement(this.createElement.id))===null||_getElement3===void 0?void 0:_getElement3.getAttribute('transform');const regex=/translate\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/;const matches=transformValue.match(regex);let elementsAtTop=document.elementsFromPoint(e.clientX,e.clientY);let has=false;elementsAtTop.forEach(elem=>{if(elem.id&&elem.id.endsWith('toolbar'))has=true;});if(matches){this.createElement.setXY(Number(matches[1]),Number(matches[2]));}if(!has)this.elements.push(this.createElement);if(!has)this.selected=[this.createElement];if(!has&&this.onElementAdd)this.onElementAdd(this.createElement);this.grabbedToDND=null;this.dragToAdd=null;util_getElement('global-dnd-board').innerHTML='';toggleHidden('global-dnd');this.activeElement=null;this.createElement=null;this.render();}else{this.addElementAtCenter(this.createElement);if(this.elementsToAnimate)this.elementsToAnimate.push({id:this.createElement.id,animation:'appear-scale-up'});this.render();if(this.onElementAdd)this.onElementAdd(this.createElement);}}listenToPhysicalKeyboard(onInputCallback,onKeyDownCallBack){if(!onInputCallback&&!onKeyDownCallBack)return;this.onInputCallback=onInputCallback;this.onKeyDownCallBack=onKeyDownCallBack;this.physicalKeyboardInputElement.focus();}getIsGridOn(){let grid=util_getElement('codnut-digital-math-grid');return!grid.classList.contains('invisible');}updateElementTransform(id,tx,ty,rotate){const element=util_getElement(id);if(element)element.setAttribute('transform',"translate(".concat(tx,", ").concat(ty,") rotate(").concat(rotate,")"));}getSurroundVertexCoordinate(arr){return arr.reduce((acc,_ref)=>{let[x,y]=_ref;return{minX:Math.min(acc.minX,x),maxX:Math.max(acc.maxX,x),minY:Math.min(acc.minY,y),maxY:Math.max(acc.maxY,y)};},{minX:arr[0][0],maxX:arr[0][0],minY:arr[0][1],maxY:arr[0][1]});}rotateCoordinates(coordinates,x,y,rotate){return coordinates===null||coordinates===void 0?void 0:coordinates.map(_ref2=>{let[pointX,pointY]=_ref2;const{x:rotatedX,y:rotatedY}=this.rotatePoint(pointX,pointY,rotate);return[rotatedX+x,rotatedY+y];});}rotatePoint(x1,y1,angleDeg){if(angleDeg===0)return{x:x1,y:y1};const deg=(angleDeg%360+360)%360;const angleRad=deg*Math.PI/180;const cosTheta=Math.cos(angleRad);const sinTheta=Math.sin(angleRad);const newX=x1*cosTheta-y1*sinTheta;const newY=x1*sinTheta+y1*cosTheta;return{x:newX,y:newY};}getSnapCoordinateTwoPoint(point1,point2,distance){return Math.abs(point1[0]-point2[0])<=distance&&Math.abs(point1[1]-point2[1])<=distance;}getSnapCoordinate(point,grid,distance){const[x,y]=point;const snapX=Math.round(x/grid)*grid;const snapY=Math.round(y/grid)*grid;if(Math.abs(snapX-x)<=distance&&Math.abs(snapY-y)<=distance){return{snapX,snapY};}else{return{snapX:x,snapY:y};}}translatePointFromViewBoxToViewBox(point,sourceViewBox,targetViewBox){const sourceWidthPercentage=(point.x-sourceViewBox.xMin)/(sourceViewBox.xMax-sourceViewBox.xMin);const sourceHeightPercentage=(point.y-sourceViewBox.yMin)/(sourceViewBox.yMax-sourceViewBox.yMin);const translatedPoint={x:targetViewBox.xMin+sourceWidthPercentage*(targetViewBox.xMax-targetViewBox.xMin),y:targetViewBox.yMin+sourceHeightPercentage*(targetViewBox.yMax-targetViewBox.yMin)};return translatedPoint;}startDragAndDropToAdd(event){if(this.createElement){this.grabbedToDND=this.createElement;util_getElement('global-dnd-board').innerHTML+=this.grabbedToDND.svg();toggleVisibility(this.grabbedToDND.id);toggleHidden('global-dnd');}}listenToKeyboard(tag,onPress,onCancel,onPressBack,onConfirm,onRefresh){this.keyboardInstance.registerListner(util_getElement(tag));util_registerEvent(tag,'codnut-keypad-pressed',e=>{if(onPress)onPress(e.detail);});util_registerEvent(tag,'codnut-keypad-cancel',e=>{if(onCancel)onCancel(e.detail);});util_registerEvent(tag,'codnut-keypad-back',e=>{if(onPressBack)onPressBack(e.detail);});util_registerEvent(tag,'codnut-keypad-confirm',e=>{if(onConfirm)onConfirm(e.detail);});util_registerEvent(tag,'codnut-keypad-refresh',e=>{if(onRefresh)onRefresh(e.detail);});}render(){this.isGrid=util_getElement('codnut-digital-math-grid').classList.value!=='invisible';this.dragToAdd=false;let playground=util_getElement('playground');playground.innerHTML='';/*const elemsWOConfig = this.elements.filter(
      (elem) =>
        elem.type && (elem.type !== 'ma1p03301-config1' || elem.type !== 'ma1p03301-config2'),
    )
    const elemsWConfig = this.elements.filter(
      (elem) =>
        elem.type && (elem.type === 'ma1p03301-config1' || elem.type === 'ma1p03301-config2'),
    )

    this.elements = elemsWOConfig.concat(elemsWConfig)
*/let curElements=this.getElements();curElements.forEach(elem=>{elem.parent=this;playground.innerHTML+=elem.svg();});playground.innerHTML+=this.getCustomSvg();curElements.forEach(elem=>{if(elem.registerEvent)elem.registerEvents();});if(this.onRender)this.onRender();}getScaleFactor(){let originalWidth=1920;let currentScreenWidth=util_getElement('codnut-parent-element').offsetWidth;//let currentScreenHeight = getElement('codnut-parent-element').offsetHeight;
let scaleFactor=originalWidth/currentScreenWidth;return scaleFactor;}getMoveFactor(){let originalWidth=1920;let currentScreenWidth=util_getElement('codnut-parent-element').offsetWidth;//let currentScreenHeight = getElement('codnut-parent-element').offsetHeight;
let moveFactor=originalWidth/currentScreenWidth;let currentScale=Number(util_getElement('outermost').getAttribute('scale'));if(currentScale===4)moveFactor*=1.2;else if(currentScale===5)moveFactor*=1.4;else if(currentScale===2)moveFactor*=0.8;else if(currentScale===1)moveFactor*=0.6;return moveFactor;}addElement(element){let focus=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(focus){this.selected=[element];}this.elements.push(element);}addElementAtCenter(element){let focus=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;let currentViewbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let center={x:(Number(currentViewbox[0])*2+Number(currentViewbox[2]))/2,y:(Number(currentViewbox[1])*2+Number(currentViewbox[3]))/2};let hasElement=false;do{hasElement=false;this.elements.forEach(elem=>{if(elem.x===center.x&&elem.y===center.y){hasElement=true;}});if(hasElement){center={x:center.x+40,y:center.y+40};}}while(hasElement);element.setXY(center.x,center.y);if(focus){this.selected=[element];}this.elements.push(element);}getElements(){return this.elements;}/* Use Id to  */getElementById(id){return this.elements.find(elem=>elem.id===id);}/* */removeElementById(id){this.elements=this.elements.filter(elem=>elem.id!==id);}setElements(elements){this.elements=elements;}newCreateElement(tag,element,params){util_registerEvent(tag,'pointerdown',e=>{this.lastClicked=new Date().getTime();this.dragToAdd=true;this.activeElement=util_getElement(tag);this.createElement=params?new element(...params):new element(0,0);this.createElement.parent=this;this.grabbedCoordinates={x:e.offsetX,y:e.offsetY};});util_registerEvent(tag,'pointermove',e=>{if(e.pointerType==='touch'&&new Date().getTime()-this.lastClicked<100)return;this.handleGlobalDndBoardMove(e);if(!this.dragToAdd)return;if(this.grabbedToDND)return;this.startDragAndDropToAdd(e);});util_registerEvent(tag,'pointerup',this.handleGlobalDndBoardPointerUp.bind(this));}popupKeyboard(x,y){let rx=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;let ry=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;let pad=util_getElement(this.keyboardId);let padWidth=pad.getAttribute('width');let padHeight=pad.getAttribute('height');let outermostVbox=util_getElement('outermost').getAttribute('viewBox').split(' ');let calculatedWidth=Number(outermostVbox[2])+Number(outermostVbox[0]);let calculatedHeight=Number(outermostVbox[3])+Number(outermostVbox[1]);let popupX=x;let popupY=y;if(x+Number(padWidth)+rx/2+40>=calculatedWidth){popupX-=Number(padWidth)+rx/2+40;}else{popupX+=rx/2+40;}if(y+Number(padHeight)-30>=calculatedHeight){popupY-=Number(padHeight)-30;}else{popupY-=30;}util_getElement(this.keyboardId).setAttribute('transform',"translate(".concat(popupX,", ").concat(popupY,")"));util_getElement(this.keyboardId).classList.remove('hidden');}dismissKeyboard(){var _this$keyboardInstanc,_this$keyboardInstanc2,_this$keyboardInstanc3;let event=new CustomEvent('codnut-keypad-confirm',{detail:''});let keypadElem=util_getElement(this.keyboardId);(_this$keyboardInstanc=this.keyboardInstance)===null||_this$keyboardInstanc===void 0?void 0:(_this$keyboardInstanc2=_this$keyboardInstanc.listner)===null||_this$keyboardInstanc2===void 0?void 0:_this$keyboardInstanc2.dispatchEvent(event);(_this$keyboardInstanc3=this.keyboardInstance)===null||_this$keyboardInstanc3===void 0?void 0:_this$keyboardInstanc3.registerListner(null);if(!keypadElem.classList.contains('hidden')){keypadElem.classList.add('hidden');}}getCustomSvg(){return"<g id=\"custom-svg\" class=\"hidden\"></g>";}toast(message,obj,callback){const{color='#E6EBF5',backgroundColor='#040C1E',ms=3000,bottom}=obj||{};const toastContainer=util_getElement('toast-container');if(toastContainer.children.length>this.toastCount)return;const toastId="toast-message-".concat(this.toastIdCounter++);const toastMessage=document.createElement('div');toastMessage.id=toastId;toastMessage.style.backgroundColor=backgroundColor;toastMessage.style.color=color;toastMessage.style.position='relative';toastMessage.style.fontSize='1em';toastMessage.style.display='flex';toastMessage.style.justifyContent='space-between';toastMessage.style.position='relative';toastMessage.style.padding='0.75em 4em';toastMessage.style.borderRadius='16px';toastMessage.style.alignItems='center';toastMessage.style.flex='1 1 auto';if(bottom){toastMessage.style.bottom=bottom;}const span=document.createElement('span');span.style.fontSize='1em';span.innerHTML=message;toastMessage.appendChild(span);const closeButton=document.createElementNS('http://www.w3.org/2000/svg','svg');closeButton.setAttribute('width','24');closeButton.setAttribute('height','24');closeButton.setAttribute('viewBox','0 0 24 24');closeButton.setAttribute('fill','none');closeButton.setAttribute('xmlns','http://www.w3.org/2000/svg');closeButton.style.cursor='pointer';closeButton.style.marginLeft='8px';closeButton.style.position='absolute';closeButton.style.right='16px';closeButton.innerHTML="\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z\" fill=\"white\"/>\n  ";closeButton.addEventListener('pointerup',()=>{if(callback)callback();if(toastContainer.contains(toastMessage)){toastContainer===null||toastContainer===void 0?void 0:toastContainer.removeChild(toastMessage);}});toastMessage.appendChild(closeButton);if(toastContainer.firstChild){toastContainer.insertBefore(toastMessage,toastContainer.firstChild);}else{toastContainer.appendChild(toastMessage);}if(ms!==Infinity){setTimeout(()=>{if(toastContainer.contains(toastMessage)){toastContainer===null||toastContainer===void 0?void 0:toastContainer.removeChild(toastMessage);}},ms);}}inputPointerUp(e){if(this.table){var _oText$trim;const container=util_getElement(this.table.id);const classList=e.target.classList.value.split(' ');const curTarget=classList[1];const element=container.querySelector(".".concat(curTarget));const oText=element.getAttribute('data-original-text');const inputTag=util_getElement('codnut-math-input');inputTag.value=curTarget.startsWith('title')?(_oText$trim=oText===null||oText===void 0?void 0:oText.trim())!==null&&_oText$trim!==void 0?_oText$trim:'':' ';if(!this.table.isEdit||!classList.includes('input'))return;this.table.inputTargetClassName=classList[1];this.table.inputTargetClassNames=container.querySelectorAll('.input-target');this.listenToPhysicalKeyboard(this.table.handleInput.bind(this.table),this.table.handleKeyDown.bind(this.table));for(let i=0;i<this.table.inputTargetClassNames.length;i++){const item=this.table.inputTargetClassNames[i];item.nextElementSibling.setAttribute('stroke','#E6EBF5');}element===null||element===void 0?void 0:element.nextElementSibling.setAttribute('stroke','#000');if(this.table.inputTargetClassName.startsWith('title')||this.table.inputTargetClassName.startsWith('unit')){var _element$nextElementS;element.textContent=oText;const textElement=document.createElementNS('http://www.w3.org/2000/svg','text');textElement.setAttribute('font-size',28);textElement.textContent=oText;container.appendChild(textElement);const titleWidth=textElement.getComputedTextLength();const titleRectWidth=Number((_element$nextElementS=element.nextElementSibling.getAttribute('width'))!==null&&_element$nextElementS!==void 0?_element$nextElementS:0)-52;if(titleWidth>=titleRectWidth){let start=0;let end=oText.length;let middle;// 이진 탐색을 통해 시작 인덱스를 찾음
while(start<end){middle=Math.floor((start+end)/2);const substring=oText.substring(middle);element.textContent=substring;const newTextWidth=element.getComputedTextLength();if(newTextWidth>titleRectWidth){start=middle+1;}else{end=middle;}}element.textContent=oText.substring(start);}}handleTextCursorSvg(this.table.id,element);saveInputItem(this.table);}}getTableTitleTextRender(){const elements=this.getElements();for(const element of elements){const container=util_getElement(element.id);const titleContainers=container.querySelectorAll('.text-title');for(const titleContainer of titleContainers){var _titleContainer$textC,_titleContainer$datas,_titleContainer$datas2;if(!((_titleContainer$textC=titleContainer.textContent)!==null&&_titleContainer$textC!==void 0&&_titleContainer$textC.trim())&&(_titleContainer$datas=titleContainer.dataset.placeHolder)!==null&&_titleContainer$datas!==void 0&&_titleContainer$datas.trim()){titleContainer.textContent=titleContainer.dataset.placeHolder.trim();continue;}const title=titleContainer.textContent;const titleWidth=titleContainer.getComputedTextLength();const titleRectWidth=Number((_titleContainer$datas2=titleContainer.dataset.rectWidth)!==null&&_titleContainer$datas2!==void 0?_titleContainer$datas2:0);titleContainer.textContent=title;if(titleWidth>titleRectWidth){let start=0;let end=title.length;let middle;while(start<end){middle=Math.floor((start+end)/2);titleContainer.textContent=title.slice(0,middle)+'...';const newTextWidth=titleContainer.getComputedTextLength();if(newTextWidth>titleRectWidth){end=middle-1;}else{start=middle+1;}}titleContainer.textContent=title.slice(0,end)+'...';}}}}}function _registerKeyboardEvents2(){document.onkeydown=e=>{if(e.code==='Delete'&&this.isDelete){if(this.onErase){let result=this.onErase();if(result){return;}}this.selected.forEach(elem=>{util_getElement(elem.id+'-animation').classList.add('disappear-scale-down');this.removeElementById(elem.id);});const msbr=util_getElement('multi-select-bounding-rect');if(!msbr.classList.contains('hidden'))msbr.classList.add('hidden');this.grabbed=null;this.selected=[];setTimeout(()=>{this.render();},300);}if(e.code==='Space'){let board=util_getElement('move-board');if(board.classList.contains('hidden'))board.classList.remove('hidden');let elem=util_getElement('codnut-toolbar-explore');if(!elem.classList.contains('toolbar-selected'))elem.classList.add('toolbar-selected');}};document.onkeyup=e=>{if(e.code==='Space'){let board=util_getElement('move-board');if(!board.classList.contains('hidden'))board.classList.add('hidden');let elem=util_getElement('codnut-toolbar-explore');if(elem.classList.contains('toolbar-selected'))elem.classList.remove('toolbar-selected');}};}function _registerFullscreenEvents2(){const onFullscreenChange=e=>{if(document.fullscreenElement){let elem=util_getElement('codnut-toolbar-toggle-expand');if(!elem.classList.contains('hidden'))elem.classList.add('hidden');let elem2=util_getElement('codnut-toolbar-toggle-shrink');if(elem2.classList.contains('hidden'))elem2.classList.remove('hidden');}else{let elem=util_getElement('codnut-toolbar-toggle-shrink');if(!elem.classList.contains('hidden'))elem.classList.add('hidden');let elem2=util_getElement('codnut-toolbar-toggle-expand');if(elem2.classList.contains('hidden'))elem2.classList.remove('hidden');}};util_registerEvent('root','fullscreenchange',onFullscreenChange);}var _registerFullscreenEvents3=/*#__PURE__*/(/* unused pure expression or super */ null && (_classPrivateFieldLooseKey("registerFullscreenEvents")));class CodnutDigital3DMathClass{constructor(){Object.defineProperty(this,_registerFullscreenEvents3,{value:_registerFullscreenEvents4});_classPrivateFieldLooseBase(this,_registerFullscreenEvents3)[_registerFullscreenEvents3]();function isPointerOnPath(mouseX,mouseY,path){let tolerance=arguments.length>3&&arguments[3]!==undefined?arguments[3]:10;const pathLength=path.getTotalLength();let point,dx,dy;for(let i=0;i<pathLength;i+=1){point=path.getPointAtLength(i);dx=Math.abs(point.x-mouseX);dy=Math.abs(point.y-mouseY);if(dx<tolerance&&dy<tolerance){return true;// Pointer is within tolerance of the path
}}return false;// Pointer is not on the path
}/* Use Pen */registerEvent('pen-board','pointermove',e=>{if(!this.draw)return;let factor=this.getScaleFactor();let currentViewbox=[0,0,1920,1200];let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});let mode=getElement('pen-board-svg-three').getAttribute('mode');if(mode==='pen'){let d=this.currentPath.getAttribute('d');this.currentPath.setAttribute('d',"".concat(d," L ").concat(p.x,",").concat(p.y));}else if(mode==='erase'){let paths=getElement('pen-board-svg-three').querySelectorAll('path');if(paths){paths.forEach(path=>{if(isPointerOnPath(p.x,p.y,path)){path.remove();}});}}});registerEvent('pen-board','pointerdown',e=>{this.draw=true;let factor=this.getScaleFactor();let currentViewbox=[0,0,1920,1200];let p=this.translatePointFromViewBoxToViewBox({x:e.offsetX*factor,y:e.offsetY*factor},{xMin:0,yMin:0,xMax:1920,yMax:1200},{xMin:Number(currentViewbox[0]),yMin:Number(currentViewbox[1]),xMax:Number(currentViewbox[0])+Number(currentViewbox[2]),yMax:Number(currentViewbox[1])+Number(currentViewbox[3])});let mode=getElement('pen-board-svg-three').getAttribute('mode');if(mode==='pen'){this.currentPath=document.createElementNS('http://www.w3.org/2000/svg','path');this.currentPath.setAttribute('fill','none');this.currentPath.setAttribute('stroke','black');this.currentPath.setAttribute('stroke-width','4');this.currentPath.setAttribute('id','pen-path-'+crypto.randomUUID());// Start the path
this.currentPath.setAttribute('d',"M ".concat(p.x,",").concat(p.y));this.currentPath.classList.add('pen-stroke');getElement('pen-board-svg-three').appendChild(this.currentPath);}});registerEvent('pen-board','pointerup',e=>{this.draw=false;});/************************/}getScaleFactor(){let originalWidth=1920;let currentScreenWidth=getElement('codnut-parent-element').offsetWidth;//let currentScreenHeight = getElement('codnut-parent-element').offsetHeight;
let scaleFactor=originalWidth/currentScreenWidth;return scaleFactor;}translatePointFromViewBoxToViewBox(point,sourceViewBox,targetViewBox){const sourceWidthPercentage=(point.x-sourceViewBox.xMin)/(sourceViewBox.xMax-sourceViewBox.xMin);const sourceHeightPercentage=(point.y-sourceViewBox.yMin)/(sourceViewBox.yMax-sourceViewBox.yMin);const translatedPoint={x:targetViewBox.xMin+sourceWidthPercentage*(targetViewBox.xMax-targetViewBox.xMin),y:targetViewBox.yMin+sourceHeightPercentage*(targetViewBox.yMax-targetViewBox.yMin)};return translatedPoint;}}function _registerFullscreenEvents4(){const onFullscreenChange=e=>{if(document.fullscreenElement){let elem=getElement('codnut-toolbar-toggle-expand');if(!elem.classList.contains('hidden'))elem.classList.add('hidden');let elem2=getElement('codnut-toolbar-toggle-shrink');if(elem2.classList.contains('hidden'))elem2.classList.remove('hidden');}else{let elem=getElement('codnut-toolbar-toggle-shrink');if(!elem.classList.contains('hidden'))elem.classList.add('hidden');let elem2=getElement('codnut-toolbar-toggle-expand');if(elem2.classList.contains('hidden'))elem2.classList.remove('hidden');}};registerEvent('root','fullscreenchange',onFullscreenChange);}class CodnutDigitalMathElement{constructor(_x,_y){let _drag=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;let _registerEvents=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;// unique id
this.id=crypto.randomUUID();// x, y coordinates
this.x=_x;this.y=_y;this.parent='';this.drag=_drag;this.registerEvent=_registerEvents;this.lastClicked=0;this.dimmed=false;this.rotate=0;this.rx=0;this.ry=0;this.inputTargetClassName='';this.inputTargetClassNames=[];this.inputLength=1;}getParent(){return this.parent;}setXY(_x,_y){this.x=_x;this.y=_y;}isFocused(){if(!this.parent)return false;let focusedList=this.parent.selected;let includes=false;focusedList.forEach(elem=>{if(elem.id===this.id)includes=true;});return includes;}svg(){let focused=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return"\n    <g\n      transform=\"translate(".concat(this.x+this.rx,", ").concat(this.y+this.ry,") rotate(").concat(this.rotate,")\"\n      cursor=").concat(this.drag?'pointer':'default',"\n      id=").concat(this.id,"\n    >\n      <g id=\"").concat(this.id+'-animation',"\">\n        ").concat(this.getSvg(),"\n        ").concat((focused||this.isFocused())&&this.getFocus&&this.getFocus(),"\n        ").concat(this.dimmed&&this.getDim(),"\n      </g>\n    </g>");}registerEvents(){if(this.onAnimation)this.onAnimation();util_registerEvent(this.id,'pointermove',e=>{if(this.onPointerMove)this.onPointerMove(e);});util_registerEvent(this.id,'pointerup',e=>{if(this.onPointerUp)this.onPointerUp(e);});util_registerEvent(this.id,'pointerdown',e=>{if(new Date().getTime()-this.lastClicked<300){if(this.onDoubleClick)this.onDoubleClick(e);return;}this.lastClicked=new Date().getTime();if(this.onPointerDown)this.onPointerDown(e);if(this.drag){this.parent.grabbed=this;this.parent.grabbedCoordinates={x:e.offsetX,y:e.offsetY};}let cur=this.parent.getElementById(this.id);if(this.parent.selected.length<=1){this.parent.removeElementById(this.id);this.parent.addElement(cur);this.parent.selected=[this];}if(this.parent.isRender)this.parent.render();});}handleInput(text){if(this.id&&this.inputTargetClassName){const curElement=util_getElement(this.id);const element=curElement===null||curElement===void 0?void 0:curElement.querySelector(".".concat(this.inputTargetClassName));if(element){const{length=1,type}=element.dataset;this.inputLength=Number(length);if(type==='number'&&isNaN(Number(text))){this.parent.toast("\uC22B\uC790\uB9CC \uC785\uB825 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");this.parent.physicalKeyboardInputElement.value=text.replace(/\D/g,'');return;}if(text.length>this.inputLength){this.parent.toast("".concat(this.inputLength," \uAE00\uC790 \uAE4C\uC9C0 \uC785\uB825 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));this.parent.physicalKeyboardInputElement.value=text.substring(0,this.inputLength);return;}this.parent.physicalKeyboardInputElement.value=text;element.setAttribute('fill','#000');element.classList.remove('text-title-gray');element.textContent=text.substring(0,Number(length));if(this.inputTargetClassName.startsWith('title')){var _element$nextElementS2;let originalText=element.getAttribute('original-text');const str=this.inputTargetClassName.substring(5);const n=str?Number(str):0;this.titleOriginalText[n]=text.substring(0,Number(length));if(originalText!==null){this.titleOriginalText[n]=originalText;let additionalText=text.substring(0,Number(length));this.titleOriginalText[n]+=additionalText;}const titleWidth=element.getComputedTextLength();const titleRectWidth=Number((_element$nextElementS2=element.nextElementSibling.getAttribute('width'))!==null&&_element$nextElementS2!==void 0?_element$nextElementS2:0)-52;if(titleWidth>=titleRectWidth){let start=0;let end=text.length;let middle;// 이진 탐색을 통해 시작 인덱스를 찾음
while(start<end){middle=Math.floor((start+end)/2);const substring=text.substring(middle);element.textContent=substring;const newTextWidth=element.getComputedTextLength();if(newTextWidth>titleRectWidth){start=middle+1;}else{end=middle;}}element.textContent=this.titleOriginalText[n].substring(start);}}handleTextCursorSvg(null,element);saveInputItem(this);}}}handleKeyDown(){saveInputItem(this);if(this.inputTargetClassName==='unitText'){this.isUnitToolbar=false;this.parent.render();return;}if(this.parent.isEnterRender){this.parent.render();}else{for(let i=0;i<this.inputTargetClassNames.length;i++){const item=this.inputTargetClassNames[i];const classList=item.classList.value.split(' ');if(classList.includes(this.inputTargetClassName)&&i<this.inputTargetClassNames.length){const element=this.inputTargetClassNames[i+1];if(element){this.parent.physicalKeyboardInputElement.value=' ';item.nextElementSibling.setAttribute('stroke','#E6EBF5');element.nextElementSibling.setAttribute('stroke','#000');this.inputTargetClassName=element.classList.value.split(' ')[1];handleTextCursorSvg(this.id,element);}break;}}}}getBoundingRect(){if(this.boundingRect)return this.boundingRect();else return null;}}class CodnutDigitalMathKeypad{constructor(){let _keyboardId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'codnut-keypad';this.keypad=util_getElement(_keyboardId);this.listner=null;Array.from(this.keypad.querySelectorAll('.keypad-item')).forEach(e=>{e.addEventListener('pointerup',e=>{const{keypad}=e.currentTarget.dataset;if(keypad){if(['confirm','refresh','cancel','back'].includes(keypad)){var _this$listner;const detail='';let event=new CustomEvent("codnut-keypad-".concat(keypad),{detail});(_this$listner=this.listner)===null||_this$listner===void 0?void 0:_this$listner.dispatchEvent(event);if(keypad!=='back')util_getElement(_keyboardId).classList.add('hidden');}else{var _this$listner2;const detail=isNaN(Number(keypad))?keypad:Number(keypad);let event=new CustomEvent('codnut-keypad-pressed',{detail});(_this$listner2=this.listner)===null||_this$listner2===void 0?void 0:_this$listner2.dispatchEvent(event);}}});});}registerListner(listner){this.listner=listner;}}
;// CONCATENATED MODULE: ./src/engine/HA1P02801.js
class HA1P02801Element extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem1';this.tx=-50;this.ty=-140;this.coordinates=[[0,30.375],[60.75,60.75],[121.5,30.375],[60.75,307.562],[0,277.188],[60.75,0],[121.5,277.188]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:121.5,height:307.562};}getSvg(){return"\n    <g width=\"122\" height=\"289\" viewBox=\"0 0 120 285\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M0 30.375L60.75 60.75V307.562L0 277.188V30.375Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M0 30.375L60.75 60.75V307.562L0 277.188V30.375Z\" fill=\"#4794EE\"/>\n      <path d=\"M60.75 60.75L121.5 30.375V277.188L60.75 307.562V60.75Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M60.75 60.75L121.5 30.375V277.188L60.75 307.562V60.75Z\" fill=\"#7FCAFF\"/>\n      <path d=\"M60.75 0L121.5 30.375L60.75 60.75L0 30.375L60.75 0Z\" fill=\"#AEE2FF\"/>\n   </g>\n    ");}getFocus(){return"\n    <path d=\"M3 32.2291L60.75 3.3541L118.5 32.2291V275.333L89.7834 289.692L60.75 304.208L31.7166 289.692L3 275.333V32.2291Z\" stroke=\"#292D35\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(32+this.tx,", ").concat(-80+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n      <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n    </g>\n    ");}}class HA1P02801ElementRotate90 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem1-1';this.tx=-50;this.ty=-140;this.coordinates=[[200.539,131.055],[261.289,100.68],[200.539,206.992],[0,30.375],[60.75,0],[261.289,176.617],[0,106.312]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:261.289,height:206.992};}getSvg(){return"\n    <g width=\"243\" height=\"198\" viewBox=\"0 0 240 195\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M261.289 100.68L200.539 131.055V206.992L261.289 176.617V100.68Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M261.289 100.68L200.539 131.055V206.992L261.289 176.617V100.68Z\" fill=\"#7FCAFF\"/>\n      <path d=\"M200.539 131.055L0.0748138 30.8018V106.739L200.539 206.992V131.055Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M200.539 131.055L0.0748138 30.8018V106.739L200.539 206.992V131.055Z\" fill=\"#4794EE\"/>\n      <path d=\"M60.84 0.432603L0.0711975 30.7991L200.539 131.056L261.289 100.681L60.84 0.432603Z\" fill=\"#AEE2FF\"/>\n    </g>\n    ");}getFocus(){return"\n    <path d=\"M258.289 174.763V102.533L60.8357 3.78756L3.06665 32.6554V104.867L200.54 203.638L258.289 174.763Z\" stroke=\"#292D35\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(110+this.tx,", ").concat(-80+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n        <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n        <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n        <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n      </g>\n    ");}}class HA1P02801ElementRotate180 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem1-2';this.tx=-50;this.ty=-140;this.coordinates=[[0,101.129],[60.75,131.504],[200.25,0],[261.829,105.125],[0,177.066],[261.829,32.251],[60.75,207.442]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:261.829,height:207.442};}getSvg(){return"\n    <g width=\"243\" height=\"198\" viewBox=\"0 0 240 195\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M0.614014 101.129L61.364 131.504V207.441L0.614014 177.066V101.129Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M0.614014 101.129L61.364 131.504V207.441L0.614014 177.066V101.129Z\" fill=\"#4794EE\"/>\n      <path d=\"M61.364 131.504L261.829 31.251V107.188L61.364 207.442V131.504Z\" fill=\"#8BD5FF\"/>\n      <path d=\"M61.364 131.504L261.829 31.251V107.188L61.364 207.442V131.504Z\" fill=\"#7FCAFF\"/>\n      <path d=\"M201.063 0.881821L261.832 31.2483L61.364 131.505L0.614014 101.13L201.063 0.881821Z\" fill=\"#AEE2FF\"/>\n    </g>\n    ");}getFocus(){return"\n    <path d=\"M258.837 33.1046V105.317L61.3638 204.087L3.61401 175.212V102.983L201.068 4.23678L258.837 33.1046Z\" stroke=\"#292D35\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(80+this.tx,", ").concat(-80+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n        <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n        <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n        <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n      </g>\n    ");}}class HA1P02801Element2 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem2';this.tx=-140;this.ty=-200;this.coordinates=[[60.76,130.632],[200.491,0],[261.241,30],[60.76,378.812],[0,100.256],[261.241,278.568],[0,348.437]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:261.241,height:378.812};}getSvg(){return"\n    <g width=\"240\" height=\"345\" viewBox=\"0 0 240 345\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M60.7601 130.632L261.241 30.373V278.568L60.7601 378.826L60.7601 130.632Z\" fill=\"#F79494\"/>\n      <path d=\"M60.7612 130.632L0.0112305 100.257V348.437L60.7612 378.812V130.632Z\" fill=\"#EB6A6A\"/>\n      <path d=\"M200.491 0.00195405L0.0101013 100.256L60.7601 130.631L261.241 30.377L200.491 0.00195405Z\" fill=\"#FFC9C9\"/>\n    </g>\n    ");}getFocus(){return"\n    <path d=\"M259.24 277.328V31.6111L200.49 2.23611L1.99997 101.499V347.217L60.7499 376.592L259.24 277.328Z\" stroke=\"black\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(80+this.tx,", ").concat(-80+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n      <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n    </g>\n    ");}}class HA1P02801Element2Rotate90 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem2-1';this.tx=-140;this.ty=-200;this.coordinates=[[0,100.229],[201.245,201.245],[401.741,100.229],[201.245,276.374],[0,170],[201.245,0],[401.741,170]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:401.741,height:276.374};}getSvg(){return"\n    <g width=\"360\" height=\"255\" viewBox=\"0 0 360 255\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M0.761719 100.229L201.245 200.437V276.374L0.761719 176.166V100.229Z\" fill=\"#EB6A6A\"/>\n      <path d=\"M201.246 200.449L401.736 100.229V176.166L201.246 276.387V200.449Z\" fill=\"#F79494\"/>\n      <path d=\"M201.246 0L383.496 91.125L183.012 191.359L0.761719 100.234L201.246 0Z\" fill=\"#FFC9C9\"/>\n      <path d=\"M219.491 9.08066L401.741 100.206L201.257 200.44L19.0072 109.315L219.491 9.08066Z\" fill=\"#FFC9C9\"/>\n    </g>\n    ");}getFocus(){return"\n    <path d=\"M399.733 101.462V174.928L201.247 274.154L2.76172 174.932V101.467L201.247 2.236L399.733 101.462Z\" stroke=\"black\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(150+this.tx,", ").concat(-90+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n      <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n    </g>\n    ");}}class HA1P02801Element2Rotate180 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.type='elem2-2';this.tx=-140;this.ty=-200;this.coordinates=[[200.487,131.07],[261.236,100.696],[200.487,379.252],[0,30],[60,0],[261.236,348.877],[0,279]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:261.236,height:379.252};}getSvg(){return"\n    <g width=\"240\" height=\"345\" viewBox=\"0 0 240 345\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M200.487 131.071L0.00683594 30.8125V279.007L200.487 379.266L200.487 131.071Z\" fill=\"#F79494\"/>\n      <path d=\"M200.486 131.071L261.236 100.696V348.877L200.486 379.252V131.071Z\" fill=\"#EB6A6A\"/>\n      <path d=\"M60.7568 0.441407L261.237 100.696L200.487 131.071L0.00683594 30.8164L60.7568 0.441407Z\" fill=\"#FFC9C9\"/>\n    </g>\n    ");}getFocus(){return"\n    <path d=\"M2.00757 277.768V32.0505L60.7575 2.67556L259.247 101.939V347.656L200.497 377.031L2.00757 277.768Z\" stroke=\"black\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    <g id=\"ha1p02801-rotate\" \n    transform=\"translate(").concat(100+this.tx,", ").concat(-80+this.ty,")\" \n    cursor=\"pointer\"\n    class=").concat(this.parent.selected.length>1?'hidden':'',">\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" fill=\"#404654\" class=\"rotate\"></rect>\n      <rect x=\"2\" y=\"2\" width=\"52\" height=\"52\" rx=\"14\" stroke=\"black\" stroke-width=\"4\" class=\"rotate\"></rect>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 28C17 21.9379 21.9523 17 28.0905 17C30.6658 17 33.035 17.8702 34.9167 19.3296L31 22L42 26.5V14.5L38.3428 16.9935C35.6507 14.5147 32.0478 13 28.0905 13C19.7693 13 13 19.7027 13 28C13 36.2973 19.7693 43 28.0905 43C35.559 43 41.7718 37.6045 42.9721 30.4998L39.0279 29.8335C38.1508 35.0256 33.5946 39 28.0905 39C21.9523 39 17 34.0621 17 28Z\" fill=\"#AFB5C3\" class=\"rotate\"></path>\n      <path d=\"M21 56H35L30.4577 62.489C29.2634 64.1952 26.7366 64.1952 25.5423 62.489L21 56Z\" fill=\"black\" class=\"rotate\"></path>\n    </g>\n    ");}}class HA1P02801Element3 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.tx=-200;this.ty=-240;this.coordinates=[[0,100.224],[200.48,200.48],[400.968,100.224],[200.48,448.677],[0,348.418],[200.48,0],[400.968,348.418]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:400.968,height:448.677};}getSvg(){return"\n    <g width=\"360\" height=\"405\" viewBox=\"0 0 360 405\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M200.481 200.482L0 100.224V348.418L200.481 448.677L200.481 200.482Z\" fill=\"#8692FD\"/>\n      <path d=\"M200.489 200.499L400.969 100.24V348.435L200.489 448.693L200.489 200.499Z\" fill=\"#9FA8FF\"/>\n      <path d=\"M200.484 0.000976562L400.968 100.212L200.484 200.446L0 100.235L200.484 0.000976562Z\" fill=\"#B9C4FF\"/>\n      <path d=\"M3.00146 346.606V102.091L200.504 3.35399L397.976 102.071V346.557L200.473 445.339L3.00146 346.606Z\" stroke=\"black\" stroke-opacity=\"0.2\" fill=\"none\" transform=\"scale(1.015) translate(-3, -3)\"/>\n   </g>\n    ");}getFocus(){return"\n    <path d=\"M3.00146 346.606V102.091L200.504 3.35399L397.976 102.071V346.557L200.473 445.339L3.00146 346.606Z\" stroke=\"#292D35\" stroke-width=\"6\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    ");}}class HA1P02801Element4 extends CodnutDigitalMathElement{constructor(_x,_y){super(_x,_y);this.tx=-60;this.ty=-60;this.coordinates=[[0,30],[60,60],[120,30],[60,135],[0,105],[60,0],[120,105]];for(let i=0;i<this.coordinates.length;i++){this.coordinates[i][0]+=this.tx;this.coordinates[i][1]+=this.ty;}}boundingRect(){return{x:this.x+this.tx,y:this.y+this.ty,width:120,height:135};}getSvg(){return"\n    <g width=\"120\" height=\"135\" viewBox=\"0 0 120 135\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\">\n      <path d=\"M0 30L60 60V135L0 105V30Z\" fill=\"#8BDE38\"/>\n      <path d=\"M0 30L60 60V135L0 105V30Z\" fill=\"#7CC731\"/>\n      <path d=\"M60 60L120 30V105L60 135V60Z\" fill=\"#8BDE38\"/>\n      <path d=\"M60 60L120 30V105L60 135V60Z\" fill=\"#8BDE38\"/>\n      <path d=\"M60 0L120 30L60 60L0 30L60 0Z\" fill=\"#BBF55C\"/>\n      <path d=\"M0.5 104.691V30.309L60 0.559017L119.5 30.309V104.691L60 134.441L0.5 104.691Z\" stroke=\"black\" stroke-opacity=\"0.2\" fill=\"none\" />\n    </g>\n    ");}getFocus(){return"\n   <path d=\"M2 104.764V30.2361L60 0.236068L119 30.2361V104.764L60 134.764L2 104.764Z\" stroke=\"black\" stroke-width=\"6\" fill=\"none\" transform=\"translate(".concat(this.tx,", ").concat(this.ty,")\"/>\n    ");}}class HA1P02801Class extends CodnutDigitalMathClass{constructor(){super();}onRender(){let curSel=this.selected[0];if(curSel){util_registerEvent('ha1p02801-rotate','pointerup',()=>{let newElem=null;if(curSel.type==='elem1'){newElem=new HA1P02801ElementRotate90(curSel.x,curSel.y);}else if(curSel.type==='elem1-1'){newElem=new HA1P02801ElementRotate180(curSel.x,curSel.y);}else if(curSel.type==='elem1-2'){newElem=new HA1P02801Element(curSel.x,curSel.y);}else if(curSel.type==='elem2'){newElem=new HA1P02801Element2Rotate90(curSel.x,curSel.y);}else if(curSel.type==='elem2-1'){newElem=new HA1P02801Element2Rotate180(curSel.x,curSel.y);}else if(curSel.type==='elem2-2'){newElem=new HA1P02801Element2(curSel.x,curSel.y);}this.selected=[newElem];this.grabbed=newElem;super.removeElementById(curSel.id);super.addElement(newElem);this.render();});}}onClear(){super.setElements([]);super.render();}initialize(){this.newCreateElement('ha1p02801-add-element-1',HA1P02801Element4,null,60,60);this.newCreateElement('ha1p02801-add-element-2',HA1P02801Element,null,60,120);this.newCreateElement('ha1p02801-add-element-3',HA1P02801Element2,null,120,160);this.newCreateElement('ha1p02801-add-element-4',HA1P02801Element3,null,160,160);}}
;// CONCATENATED MODULE: ./src/engine/objects/objects.js
class AIDTTopToolbar extends HTMLElement{constructor(){super();}disableAll(){util_getElement('move-board').classList.remove('hidden');util_getElement('move-board').classList.add('hidden');util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board').classList.add('hidden');}disableDim(e){if(e.pointerType==='touch'){util_getElement('codnut-toolbar-toggle-grid').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-pen').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-eraser').classList.remove('hover-dim');util_getElement('codnut-toolbar-explore').classList.remove('hover-dim');}}registerCallbacks(){util_registerEvent('codnut-toolbar-toggle-pen','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-explore').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-toggle-pen').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');return;}util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board-svg').setAttribute('mode','pen');util_getElement('pen-board').classList.add('cursor-pen');util_getElement('pen-board').classList.remove('cursor-eraser');util_getElement('codnut-toolbar-toggle-pen').classList.toggle('toolbar-selected');});util_registerEvent('codnut-toolbar-toggle-eraser','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-explore').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-toggle-eraser').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');return;}util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board-svg').setAttribute('mode','erase');util_getElement('pen-board').classList.remove('cursor-pen');util_getElement('pen-board').classList.add('cursor-eraser');util_getElement('codnut-toolbar-toggle-eraser').classList.toggle('toolbar-selected');});util_registerEvent('codnut-toolbar-explore','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-explore').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-explore').classList.remove('toolbar-selected');return;}util_getElement('codnut-toolbar-explore').classList.toggle('toolbar-selected');toggleHidden('move-board');});util_registerEvent('codnut-toolbar-toggle-grid','pointerup',e=>{this.disableDim(e);toggleVisibility('codnut-digital-math-grid');util_getElement('codnut-toolbar-toggle-grid').classList.toggle('toolbar-selected');});}connectedCallback(e){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 84 306\" fill=\"none\">\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"302\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"302\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g id=\"codnut-toolbar-refresh\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"16\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M29.853 29.8531C27.9267 31.7793 26.9999 34.9361 26.9999 40H24.9999C24.9999 34.7865 25.9344 30.9433 28.4388 28.4389C30.9432 25.9345 34.7864 25 39.9999 25C43.7196 25 46.7268 25.4754 49.0536 26.646C50.6146 27.4313 51.8361 28.5127 52.7532 29.9052L53.6691 25.5965L55.6254 26.0123L53.9621 33.8375L46.1369 32.1742L46.5527 30.2179L51.2127 31.2084C50.4626 29.9909 49.4579 29.0882 48.1548 28.4326C46.2332 27.4659 43.5891 27 39.9999 27C34.936 27 31.7792 27.9268 29.853 29.8531Z\" fill=\"black\"/>\n        <path d=\"M50.1468 50.1469C52.0731 48.2207 52.9999 45.0639 52.9999 40H54.9999C54.9999 45.2135 54.0654 49.0567 51.5611 51.5611C49.0567 54.0655 45.2134 55 39.9999 55C36.2802 55 33.273 54.5246 30.9462 53.354C29.3834 52.5678 28.161 51.4849 27.2435 50.0902L26.3266 54.4039L24.3703 53.988L26.0336 46.1629L33.8588 47.8262L33.443 49.7824L28.788 48.793C29.538 50.0098 30.5424 50.912 31.845 51.5674C33.7666 52.5341 36.4107 53 39.9999 53C45.0638 53 48.2206 52.0732 50.1468 50.1469Z\" fill=\"black\"/>\n      </g>\n      <g id=\"codnut-toolbar-toggle-eraser\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"184\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.288 193.207C44.1164 192.036 42.2169 192.036 41.0454 193.207L25.6213 208.631C23.6687 210.584 23.6687 213.75 25.6213 215.702L32.2978 222.379C34.2504 224.331 37.4163 224.331 39.3689 222.379L54.7929 206.955C55.9645 205.783 55.9645 203.884 54.7929 202.712L45.288 193.207ZM42.4596 194.621C42.8501 194.231 43.4833 194.231 43.8738 194.621L53.3787 204.126C53.7692 204.517 53.7692 205.15 53.3787 205.54L42.8333 216.086L31.9142 205.167L42.4596 194.621ZM30.5 206.581L27.0355 210.045C25.864 211.217 25.864 213.116 27.0355 214.288L33.712 220.964C34.8836 222.136 36.7831 222.136 37.9547 220.964L41.4191 217.5L30.5 206.581Z\" fill=\"black\"/>\n      </g>\n      <g id=\"codnut-toolbar-toggle-grid\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"72\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.6448 81.1001H40.3552C43.6857 81.0998 46.2695 81.0996 48.2336 81.3091C50.2588 81.5251 51.8314 81.9798 52.9258 83.0742C54.0202 84.1687 54.4749 85.7413 54.6909 87.7665C54.9004 89.7305 54.9002 92.3143 54.9 95.6447V96.3553C54.9002 99.6857 54.9004 102.27 54.6909 104.234C54.4749 106.259 54.0202 107.831 52.9258 108.926C51.8314 110.02 50.2588 110.475 48.2336 110.691C46.2695 110.901 43.6857 110.9 40.3553 110.9H39.6448C36.3143 110.9 33.7305 110.901 31.7664 110.691C29.7412 110.475 28.1686 110.02 27.0742 108.926C25.9797 107.831 25.5251 106.259 25.309 104.234C25.0995 102.27 25.0997 99.6857 25.1 96.3553V95.6448C25.0997 92.3144 25.0995 89.7306 25.309 87.7665C25.5251 85.7413 25.9797 84.1687 27.0742 83.0742C28.1686 81.9798 29.7412 81.5251 31.7664 81.3091C33.7305 81.0996 36.3143 81.0998 39.6448 81.1001ZM26.9 95.738V96.2621C26.9 97.7383 26.8999 99.0433 26.9159 100.2H34.2001V91.8001H26.9159C26.8999 92.9568 26.9 94.2618 26.9 95.738ZM34.2001 101.8H26.9531C26.9825 102.636 27.0281 103.379 27.0989 104.043C27.3039 105.965 27.7045 107.011 28.347 107.653C28.9894 108.295 30.0352 108.696 31.9573 108.901C32.6208 108.972 33.3641 109.018 34.2001 109.047V101.8ZM35.8001 101.8H44.2001V109.084C43.0434 109.1 41.7384 109.1 40.2622 109.1H39.7379C38.2617 109.1 36.9567 109.1 35.8001 109.084V101.8ZM44.2001 100.2H35.8001V91.8001H44.2001V100.2ZM45.8001 101.8V109.047C46.636 109.018 47.3792 108.972 48.0426 108.901C49.9648 108.696 51.0106 108.295 51.653 107.653C52.2954 107.011 52.6961 105.965 52.9011 104.043C52.9719 103.379 53.0175 102.636 53.0468 101.8H45.8001ZM53.084 100.2H45.8001V91.8001H53.084C53.1001 92.9567 53.1 94.2617 53.1 95.7379V96.2622C53.1 97.7383 53.1001 99.0434 53.084 100.2ZM35.8001 90.2001H44.2001V82.916C43.0433 82.9 41.7383 82.9 40.2621 82.9001H39.7379C38.2617 82.9 36.9568 82.9 35.8001 82.916V90.2001ZM45.8001 90.2001H53.0468C53.0175 89.3641 52.9719 88.6208 52.9011 87.9574C52.6961 86.0353 52.2954 84.9894 51.653 84.347C51.0106 83.7046 49.9648 83.304 48.0426 83.099C47.3792 83.0282 46.636 82.9826 45.8001 82.9532V90.2001ZM26.9531 90.2001H34.2001V82.9532C33.3641 82.9826 32.6208 83.0282 31.9573 83.099C30.0352 83.304 28.9894 83.7046 28.347 84.347C27.7045 84.9894 27.3039 86.0353 27.0989 87.9574C27.0281 88.6208 26.9825 89.3641 26.9531 90.2001Z\" fill=\"black\"/>\n      </g>\n      <g id=\"codnut-toolbar-toggle-pen\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"128\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M49.788 137.707C48.6164 136.536 46.7169 136.536 45.5453 137.707L25.8787 157.374C25.3161 157.936 25 158.699 25 159.495V165C25 166.105 25.8954 167 27 167H32.5049C33.3006 167 34.0636 166.684 34.6262 166.121L54.2929 146.455C55.4645 145.283 55.4645 143.384 54.2929 142.212L49.788 137.707ZM46.9596 139.121C47.3501 138.731 47.9832 138.731 48.3738 139.121L52.8787 143.626C53.2692 144.017 53.2692 144.65 52.8787 145.04L51.8333 146.086L45.9141 140.167L46.9596 139.121ZM44.4999 141.581L27.2929 158.788C27.1054 158.976 27 159.23 27 159.495V165H32.5049C32.7701 165 33.0245 164.895 33.212 164.707L50.4191 147.5L44.4999 141.581Z\" fill=\"black\"/>\n      </g>\n      <g id=\"codnut-toolbar-explore\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"240\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M40 248.586L44.7071 253.293L43.2928 254.707L41.0004 252.415V258H39.0004V252.414L36.7071 254.707L35.2928 253.293L40 248.586Z\" fill=\"black\"/>\n        <path d=\"M28.4143 265H34.0004V263H28.4142L30.7071 260.707L29.2929 259.293L24.5858 264L29.2929 268.707L30.7071 267.293L28.4143 265Z\" fill=\"black\"/>\n        <path d=\"M49.2928 260.707L51.5857 263H45.9999V265H51.5857L49.2928 267.293L50.7071 268.707L55.4142 264L50.7071 259.293L49.2928 260.707Z\" fill=\"black\"/>\n        <path d=\"M40.9999 275.586L43.2928 273.293L44.7071 274.707L40 279.414L35.2928 274.707L36.7071 273.293L38.9999 275.586V270H40.9999V275.586Z\" fill=\"black\"/>\n      </g>\n    </svg>";this.registerCallbacks();}}class AIDTTopThreeToolbar extends HTMLElement{constructor(){super();}disableAll(){util_getElement('move-board').classList.remove('hidden');util_getElement('move-board').classList.add('hidden');util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board').classList.add('hidden');}disableDim(e){if(e.pointerType==='touch'){util_getElement('codnut-toolbar-toggle-grid').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-pen').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-eraser').classList.remove('hover-dim');util_getElement('codnut-toolbar-explore').classList.remove('hover-dim');}}registerCallbacks(){util_registerEvent('codnut-toolbar-toggle-pen','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-toggle-pen').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');return;}util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board-svg-three').setAttribute('mode','pen');util_getElement('pen-board').classList.add('cursor-pen');util_getElement('pen-board').classList.remove('cursor-eraser');util_getElement('codnut-toolbar-toggle-pen').classList.toggle('toolbar-selected');});util_registerEvent('codnut-toolbar-toggle-eraser','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-toggle-eraser').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');return;}util_getElement('pen-board').classList.remove('hidden');util_getElement('pen-board-svg-three').setAttribute('mode','erase');util_getElement('pen-board').classList.remove('cursor-pen');util_getElement('pen-board').classList.add('cursor-eraser');util_getElement('codnut-toolbar-toggle-eraser').classList.toggle('toolbar-selected');});util_registerEvent('codnut-toolbar-explore','pointerup',e=>{this.disableAll();this.disableDim(e);util_getElement('codnut-toolbar-toggle-pen').classList.remove('toolbar-selected');util_getElement('codnut-toolbar-toggle-eraser').classList.remove('toolbar-selected');if(util_getElement('codnut-toolbar-explore').classList.contains('toolbar-selected')){util_getElement('codnut-toolbar-explore').classList.remove('toolbar-selected');return;}util_getElement('codnut-toolbar-explore').classList.toggle('toolbar-selected');toggleHidden('move-board');});util_registerEvent('codnut-toolbar-toggle-grid','pointerup',e=>{this.disableDim(e);toggleVisibility('codnut-digital-math-grid');util_getElement('codnut-toolbar-toggle-grid').classList.toggle('toolbar-selected');});}connectedCallback(e){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 84 306\" fill=\"none\">\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"190\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"190\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g id=\"codnut-toolbar-refresh\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"16\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M29.853 29.8531C27.9267 31.7793 26.9999 34.9361 26.9999 40H24.9999C24.9999 34.7865 25.9344 30.9433 28.4388 28.4389C30.9432 25.9345 34.7864 25 39.9999 25C43.7196 25 46.7268 25.4754 49.0536 26.646C50.6146 27.4313 51.8361 28.5127 52.7532 29.9052L53.6691 25.5965L55.6254 26.0123L53.9621 33.8375L46.1369 32.1742L46.5527 30.2179L51.2127 31.2084C50.4626 29.9909 49.4579 29.0882 48.1548 28.4326C46.2332 27.4659 43.5891 27 39.9999 27C34.936 27 31.7792 27.9268 29.853 29.8531Z\" fill=\"black\"/>\n        <path d=\"M50.1468 50.1469C52.0731 48.2207 52.9999 45.0639 52.9999 40H54.9999C54.9999 45.2135 54.0654 49.0567 51.5611 51.5611C49.0567 54.0655 45.2134 55 39.9999 55C36.2802 55 33.273 54.5246 30.9462 53.354C29.3834 52.5678 28.161 51.4849 27.2435 50.0902L26.3266 54.4039L24.3703 53.988L26.0336 46.1629L33.8588 47.8262L33.443 49.7824L28.788 48.793C29.538 50.0098 30.5424 50.912 31.845 51.5674C33.7666 52.5341 36.4107 53 39.9999 53C45.0638 53 48.2206 52.0732 50.1468 50.1469Z\" fill=\"black\"/>\n      </g>\n\n      <g id=\"codnut-toolbar-toggle-pen\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"72\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M49.788 81.7068C48.6164 80.5352 46.7169 80.5352 45.5453 81.7068L25.8787 101.373C25.3161 101.936 25 102.699 25 103.495V109C25 110.104 25.8954 111 27 111H32.5049C33.3006 111 34.0636 110.684 34.6262 110.121L54.2929 90.4544C55.4645 89.2828 55.4645 87.3833 54.2929 86.2117L49.788 81.7068ZM46.9596 83.121C47.3501 82.7305 47.9832 82.7305 48.3738 83.121L52.8787 87.6259C53.2692 88.0164 53.2692 88.6496 52.8787 89.0401L51.8333 90.0856L45.9141 84.1664L46.9596 83.121ZM44.4999 85.5806L27.2929 102.788C27.1054 102.975 27 103.23 27 103.495V109H32.5049C32.7701 109 33.0245 108.894 33.212 108.707L50.4191 91.4998L44.4999 85.5806Z\" fill=\"black\"/>\n      </g>\n\n      <g id=\"codnut-toolbar-toggle-eraser\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"128\" width=\"48\" height=\"48\" rx=\"16\" />\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.288 137.207C44.1164 136.035 42.2169 136.035 41.0454 137.207L25.6213 152.631C23.6687 154.583 23.6687 157.749 25.6213 159.702L32.2978 166.378C34.2504 168.331 37.4163 168.331 39.3689 166.378L54.7929 150.954C55.9645 149.783 55.9645 147.883 54.7929 146.712L45.288 137.207ZM42.4596 138.621C42.8501 138.23 43.4833 138.23 43.8738 138.621L53.3787 148.126C53.7692 148.516 53.7692 149.15 53.3787 149.54L42.8333 160.085L31.9142 149.166L42.4596 138.621ZM30.5 150.581L27.0355 154.045C25.864 155.217 25.864 157.116 27.0355 158.288L33.712 164.964C34.8836 166.136 36.7831 166.136 37.9547 164.964L41.4191 161.5L30.5 150.581Z\" fill=\"black\"/>\n      </g>\n    </svg>";this.registerCallbacks();}}class AIDTBottomToolbar extends HTMLElement{constructor(){super();}disableDim(e){if(e.pointerType==='touch'){util_getElement('codnut-toolbar-zoom-in').classList.remove('hover-dim');util_getElement('codnut-toolbar-zoom-out').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-expand').classList.remove('hover-dim');util_getElement('codnut-toolbar-toggle-shrink').classList.remove('hover-dim');}}zoom(type){let outermost=util_getElement('outermost');let grid=util_getElement('codnut-digital-math-grid');let globaldnd=util_getElement('global-dnd-board');let penBoard=util_getElement('pen-board-svg');let currentScale=parseFloat(outermost.getAttribute('scale'));if(currentScale===1&&type==='zoom-in')return;if(currentScale===5&&type==='zoom-out')return;let newScale=Number(currentScale+1);if(type==='zoom-in'){newScale=currentScale-1;}outermost.setAttribute('scale',newScale);let currentViewbox=outermost.getAttribute('viewBox').split(' ');let newViewboxX=Number(currentViewbox[0]);let newViewboxY=Number(currentViewbox[1]);let newViewboxW=Number(currentViewbox[2]);let newViewboxH=Number(currentViewbox[3]);if(type==='zoom-in'){newViewboxX+=192;newViewboxY+=120;newViewboxW-=192*2;newViewboxH-=120*2;}else{newViewboxX-=192;newViewboxY-=120;newViewboxW+=192*2;newViewboxH+=120*2;}outermost.setAttribute('viewBox',"".concat(newViewboxX," ").concat(newViewboxY," ").concat(newViewboxW," ").concat(newViewboxH));globaldnd.setAttribute('viewBox',"".concat(newViewboxX," ").concat(newViewboxY," ").concat(newViewboxW," ").concat(newViewboxH));penBoard.setAttribute('viewBox',"".concat(newViewboxX," ").concat(newViewboxY," ").concat(newViewboxW," ").concat(newViewboxH));grid.setAttribute('x',newViewboxX);grid.setAttribute('y',newViewboxY);grid.setAttribute('width',newViewboxW);grid.setAttribute('height',newViewboxH);grid.setAttribute('viewBox',"".concat(newViewboxX," ").concat(newViewboxY," ").concat(newViewboxW," ").concat(newViewboxH));let factor=1;if(newScale===3){factor=0;}else if(newScale===1){factor=2;}else if(newScale===2){factor=1;}else if(newScale===4){factor=-1;}else if(newScale===5){factor=-2;}let dot=util_getElement('codnut-toolbar-zoom-pointer');dot.setAttribute('transform',"translate(0, ".concat(-20*factor,")"));}connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 84 292\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"286\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"286\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g id=\"codnut-toolbar-zoom-in\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"16\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M39 39V33H41V39H47V41H41V47H39V41H33V39H39Z\" fill=\"black\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25 40C25 31.7157 31.7157 25 40 25C48.2843 25 55 31.7157 55 40C55 48.2843 48.2843 55 40 55C31.7157 55 25 48.2843 25 40ZM40 27C32.8203 27 27 32.8203 27 40C27 47.1797 32.8203 53 40 53C47.1797 53 53 47.1797 53 40C53 32.8203 47.1797 27 40 27Z\" fill=\"black\"/>\n      </g>\n      <path d=\"M36 76C36 73.7909 37.7909 72 40 72C42.2091 72 44 73.7909 44 76V156C44 158.209 42.2091 160 40 160C37.7909 160 36 158.209 36 156V76Z\" fill=\"#BCC1CC\"/>\n      <g id=\"codnut-toolbar-zoom-out\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"168\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M33 191V193H47V191H33Z\" fill=\"black\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 177C31.7157 177 25 183.716 25 192C25 200.284 31.7157 207 40 207C48.2843 207 55 200.284 55 192C55 183.716 48.2843 177 40 177ZM27 192C27 184.82 32.8203 179 40 179C47.1797 179 53 184.82 53 192C53 199.18 47.1797 205 40 205C32.8203 205 27 199.18 27 192Z\" fill=\"black\"/>\n      </g>  \n      <g id=\"codnut-toolbar-zoom-pointer\">\n        <rect x=\"26\" y=\"102\" width=\"28\" height=\"28\" rx=\"14\" fill=\"white\" stroke=\"black\" stroke-width=\"4\"/>\n      </g>\n      <g id=\"codnut-toolbar-toggle-expand\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n        <rect x=\"16\" y=\"224\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path d=\"M26.0005 234H34V236H29.4143L34.7072 241.293L33.293 242.707L28.0005 237.415V242H26.0005V234Z\" fill=\"black\"/>\n        <path d=\"M50.5859 236L45.293 241.293L46.7072 242.707L52 237.414V242H54V234H46V236H50.5859Z\" fill=\"black\"/>\n        <path d=\"M29.4143 260H34V262H26V254H28V258.586L33.293 253.293L34.7072 254.707L29.4143 260Z\" fill=\"black\"/>\n        <path d=\"M45.293 254.707L50.5859 260H46V262H54V254H52V258.586L46.7072 253.293L45.293 254.707Z\" fill=\"black\"/>\n      </g>\n      <g id=\"codnut-toolbar-toggle-shrink\" class=\"cursor-pointer hover-dim hidden\" fill=\"white\">\n        <rect x=\"16\" y=\"224\" width=\"48\" height=\"48\" rx=\"16\"/>\n        <path transform=\"translate(24, 228)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.4142 12H29.9999V14H21.9999V6.00005H23.9999V10.5859L29.2929 5.29294L30.7071 6.70715L25.4142 12ZM6.58578 28L1.29289 33.2929L2.70711 34.7072L7.99992 29.4143V34H9.99992V26H1.99992V28H6.58578ZM29.2929 34.7072L24.0004 29.4147V34H22.0004V26H29.9999V28H25.4142L30.7071 33.2929L29.2929 34.7072ZM1.29289 6.70715L6.58579 12H1.99992V14H9.99992V6.00005H7.99992V10.5858L2.70711 5.29294L1.29289 6.70715Z\" fill=\"black\"/>\n      </g>\n    </svg>    \n    ";util_registerEvent('codnut-toolbar-zoom-in','pointerup',e=>{this.disableDim(e);this.zoom('zoom-in');});util_registerEvent('codnut-toolbar-zoom-out','pointerup',e=>{this.disableDim(e);this.zoom('zoom-out');});util_registerEvent('codnut-toolbar-toggle-expand','pointerup',e=>{this.disableDim(e);let element=util_getElement('codnut-top-element');if(element.requestFullscreen)return element.requestFullscreen();if(element.webkitRequestFullscreen)return element.webkitRequestFullscreen();if(element.mozRequestFullScreen)return element.mozRequestFullScreen();if(element.msRequestFullscreen)return element.msRequestFullscreen();});util_registerEvent('codnut-toolbar-toggle-shrink','pointerup',e=>{this.disableDim(e);if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitCancelFullscreen)return document.webkitCancelFullscreen();if(document.mozCancelFullScreen)return document.mozCancelFullScreen();if(document.msExitFullscreen)return document.msExitFullscreen().exitFullscreen();});}}class InfoToolbar extends HTMLElement{constructor(){super();this.state={flg:1,preventClick:false};setTimeout(()=>{const toolbar=util_getElement('codnut-math-info-toolbar-main');const closeBar=util_getElement('codnut-math-info-toolbar-close');if(toolbar){this.state.flg=0;toolbar.classList.add('slide-up');closeBar.classList.add('slide-up');setTimeout(()=>{this.connectedCallback();},350);}},2000);}static get observedAttributes(){return['title','description1','description2','description3'];}connectedCallback(){this.preventClick=false;const title=this.getAttribute('title');const d1=JSON.parse(this.getAttribute('description1'));const d2=JSON.parse(this.getAttribute('description2'));const d3=JSON.parse(this.getAttribute('description3'));if(this.state.flg===0){this.innerHTML="\n        <div style=\"position: absolute; height: 3%; left: 47%; top: 1%;\" >\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 158 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"codnut-math-info-toolbar\" cursor=\"pointer\">\n            <rect x=\"1\" y=\"1\" width=\"156\" height=\"46\" rx=\"23\" fill=\"white\"/>\n            <rect x=\"1\" y=\"1\" width=\"156\" height=\"46\" rx=\"23\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <path d=\"M48 16L79 32L110 16\" stroke=\"#C6CCCD\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      ";util_registerEvent('codnut-math-info-toolbar','pointerup',()=>{this.handleButtonClick('codnut-math-info-toolbar');});}else if(this.state.flg===1){const titleLength=title.replace(/\s/g,'').length*24+40+(title.match(/\s/g)||[]).length*5;const w=910-titleLength;const description2=this.getArray(JSON.parse(this.getAttribute('description2')),w);this.innerHTML="\n        <div style=\"position: absolute; width: 50%; left: 25%; top: 1%;\" class=\"slide-down\" id=\"codnut-math-info-toolbar-main\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 1080 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"1\" y=\"1\" width=\"1078\" height=\"124\" rx=\"62\" fill=\"white\"/>\n            <rect x=\"1\" y=\"1\" width=\"1078\" height=\"124\" rx=\"62\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <rect x=\"24\" y=\"31\" width=\"".concat(titleLength,"\" height=\"64\" rx=\"32\" fill=\"#2194FF\"/>\n            <text x=\"44\" y=\"72\" fill=\"#E8F3FC\" font-size=\"28\" font-weight=\"600\">").concat(title,"</text>\n            <g transform=\"translate(").concat(titleLength,", ").concat(description2[0].length===2?'50':'70',")\">\n              ").concat(this.getTextSvg(description2,40,0,true),"\n            </g>\n            <g id=\"codnut-math-info-toolbar-expand\" cursor=\"pointer\">\n              <rect x=\"930\" y=\"30\" width=\"120\" height=\"65\" fill=\"transparent\" />\n              <path d=\"M961.139 59.4271V56.875H962.861V59.4271H961.139Z\" fill=\"#2194FF\"/>\n              <path d=\"M961.234 61.4688V69.125H962.766V61.4688H961.234Z\" fill=\"#2194FF\"/>\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M952.555 53.5549C954.593 51.5163 957.727 50.75 962 50.75C966.273 50.75 969.407 51.5163 971.445 53.5549C973.484 55.5935 974.25 58.7274 974.25 63C974.25 67.2726 973.484 70.4065 971.445 72.4451C969.407 74.4837 966.273 75.25 962 75.25C957.727 75.25 954.593 74.4837 952.555 72.4451C950.516 70.4065 949.75 67.2726 949.75 63C949.75 58.7274 950.516 55.5935 952.555 53.5549ZM953.638 54.6377C952.042 56.2336 951.281 58.8419 951.281 63C951.281 67.1581 952.042 69.7664 953.638 71.3623C955.234 72.9583 957.842 73.7188 962 73.7188C966.158 73.7188 968.766 72.9583 970.362 71.3623C971.958 69.7664 972.719 67.1581 972.719 63C972.719 58.8419 971.958 56.2336 970.362 54.6377C968.766 53.0417 966.158 52.2812 962 52.2812C957.842 52.2812 955.234 53.0417 953.638 54.6377Z\" fill=\"#2194FF\"/>\n              <path d=\"M994.824 63.7305H982.637V62.2363H994.824V63.7305ZM996.66 69.5215H980.645V67.9883H996.66V69.5215ZM989.521 68.5547H987.705V62.9004H989.521V68.5547ZM994.658 57.0117H984.502V62.9199H982.637V55.5273H994.658V57.0117ZM1006.81 66.0938H1004.98V63.1348H1006.81V66.0938ZM1005.91 54.4531C1007.18 54.4531 1008.29 54.5866 1009.23 54.8535C1010.17 55.1204 1010.89 55.5046 1011.39 56.0059C1011.89 56.5007 1012.15 57.0964 1012.15 57.793C1012.15 58.4701 1011.89 59.056 1011.39 59.5508C1010.89 60.0456 1010.17 60.4232 1009.23 60.6836C1008.29 60.944 1007.18 61.0742 1005.91 61.0742C1004.63 61.0742 1003.52 60.944 1002.58 60.6836C1001.64 60.4232 1000.91 60.0456 1000.4 59.5508C999.893 59.056 999.639 58.4701 999.639 57.793C999.639 57.1029 999.893 56.5072 1000.4 56.0059C1000.91 55.5046 1001.64 55.1204 1002.58 54.8535C1003.52 54.5866 1004.63 54.4531 1005.91 54.4531ZM1005.91 55.8984C1005.01 55.8984 1004.24 55.9733 1003.58 56.123C1002.93 56.2663 1002.43 56.4811 1002.08 56.7676C1001.74 57.054 1001.56 57.3958 1001.56 57.793C1001.56 58.1771 1001.74 58.5059 1002.08 58.7793C1002.43 59.0527 1002.93 59.2643 1003.57 59.4141C1004.23 59.5573 1005 59.6289 1005.91 59.6289C1006.79 59.6289 1007.56 59.5573 1008.21 59.4141C1008.87 59.2643 1009.37 59.0527 1009.72 58.7793C1010.07 58.5059 1010.24 58.1771 1010.24 57.793C1010.24 57.3958 1010.07 57.054 1009.72 56.7676C1009.37 56.4811 1008.87 56.2663 1008.21 56.123C1007.56 55.9733 1006.79 55.8984 1005.91 55.8984ZM1011.94 71.4355H999.844V65.6055H1011.94V71.4355ZM1001.68 69.9316H1010.13V67.0898H1001.68V69.9316ZM1013.89 63.7695H997.93V62.2559H1013.89V63.7695ZM1028.96 63.0078H1027.12V54.1504H1028.96V63.0078ZM1031.51 59.3555H1028.16V57.8125H1031.51V59.3555ZM1024.08 62.1777H1015.89V55.0977H1024.08V62.1777ZM1017.71 60.7031H1022.28V56.582H1017.71V60.7031ZM1028.96 68.2324H1019.51V70.7227H1017.69V66.8555H1027.12V65.2539H1017.66V63.7988H1028.96V68.2324ZM1029.57 71.4355H1017.69V69.9609H1029.57V71.4355Z\" fill=\"#2194FF\"/>\n            </g>\n          </svg>\n        </div>\n        <div style=\"position: absolute; height: 3%; left: 47%; top: 11%;\" class=\"slide-down\" id=\"codnut-math-info-toolbar-close\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 162 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" cursor=\"pointer\">\n            <rect x=\"1\" y=\"1\" width=\"156\" height=\"46\" rx=\"23\" fill=\"white\"/>\n            <rect x=\"1\" y=\"1\" width=\"156\" height=\"46\" rx=\"23\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <path d=\"M110 32L79 16L48 32\" stroke=\"#C6CCCD\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      ");util_registerEvent('codnut-math-info-toolbar-close','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-close'));util_registerEvent('codnut-math-info-toolbar-expand','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-expand'));}else if(this.state.flg===2){const svgWidth=1112;const titleWidth=252;const description1=this.getArray(d1,svgWidth-titleWidth);const description2=this.getArray(d2,svgWidth-titleWidth);const description3=this.getArray(d3,svgWidth-titleWidth);const line1Y=[].concat(...description1).length*40+58;const line2Y=line1Y+[].concat(...description2).length*40+58;const line3Y=[].concat(...description3).length*40+58;const height=line2Y+[].concat(...description3).length*40+58;this.innerHTML="\n        <div style=\"position: absolute; width: 100%; height: 100%; background-color: #000; opacity: 0.8; z-index: 1; border-radius:16px\" id=\"codnut-math-info-toolbar-close\" class=\"info-fade-on module-info-close\"></div>\n        <div style=\"position: absolute; width: 50%; left: 25%; top: 10px; z-index: 2;\" class=\"module-info-item\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 ".concat(svgWidth," ").concat(height+2,"\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <rect\n              x=\"2\"\n              y=\"2\"\n              rx=\"20\"\n              width=\"").concat(svgWidth-4,"\"\n              height=\"").concat(height-4,"\"\n              fill=\"white\"\n              stroke=\"#BCC1CC\"\n              stroke-width=\"2\"\n            />\n            <g transform=\"translate(56, 60)\">\n              <text x=\"0\" y=\"0\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uCF58\uD150\uCE20\uBA85</text>\n              ").concat(this.getTextSvg(description1,160,0),"\n            </g>\n            <g transform=\"translate(56, ").concat(line1Y+60,")\">\n              <text x=\"0\" y=\"0\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uD559\uC2B5 \uBAA9\uD45C</text>\n              ").concat(this.getTextSvg(description2,160,0),"\n            </g>\n            <g transform=\"translate(56, ").concat(line2Y+60,")\">\n              <text x=\"0\" y=\"").concat(line3Y/2-52,"\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uD559\uC2B5 \uC9C0\uB3C4\uC548</text>\n              ").concat(this.getTextSvg(description3,160,0),"\n            </g>\n\n            <line\n              x1=\"2\"\n              y1=\"").concat(line1Y,"\"\n              x2=\"").concat(svgWidth-2,"\"\n              y2=\"").concat(line1Y,"\"\n              stroke=\"#E6EBF5\"\n              stroke-width=\"1\"\n            />\n            <line\n              x1=\"2\"\n              y1=\"").concat(line2Y,"\"\n              x2=\"").concat(svgWidth-2,"\"\n              y2=\"").concat(line2Y,"\"\n              stroke=\"#E6EBF5\"\n              stroke-width=\"1\"\n            />\n          </svg>\n        </div>\n        <div style=\"position: absolute; width: 8%; height: 23.33%; right: 5%; top: 15px; z-index: 2;\" class=\"module-info-item module-info-close\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 100 253\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <g transform=\"translate(0, 45)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uCD08\uAE30\uD654</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"10\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 93)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uACA9\uC790 \uBCF4\uAE30</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 142)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD39C\uD234</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"-5\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 190)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uC9C0\uC6B0\uAC1C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"10\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 242)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uBA74 \uC774\uB3D9</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n          </svg>\n        </div>\n        <div style=\"position: absolute; width: 8%; height: 32%; right: 5%; bottom: 2%; z-index: 2;\" class=\"module-info-item module-info-close\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 100 320\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <g transform=\"translate(0, 46)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uBA74 \uD06C\uAC8C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 168)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uBA74 \uC791\uAC8C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 215)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uC804\uCCB4 \uD654\uBA74</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 296)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uC120\uD0DD \uC0AD\uC81C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n          </svg>\n        </div>\n      ");registerEventByQuerySelectorAll('.module-info-close','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-close'));}}getArray(arr,width){return arr.map(item=>[...this.getStringToArray(item,width)]);}handleButtonClick(id){if(this.preventClick)return;this.preventClick=true;if(id==='codnut-math-info-toolbar'){this.state.flg=1;this.connectedCallback();}else if(id==='codnut-math-info-toolbar-close'){if(this.state.flg===1){util_getElement(id).previousElementSibling.classList.add('slide-up');util_getElement(id).classList.add('slide-up');}else if(this.state.flg===2){util_getElement(id).classList.add('info-fade-out');const items=getElementsByQuerySelectorAll('.module-info-item');for(const item of items){item.classList.toggle('hidden');}}setTimeout(()=>{this.state.flg=0;this.connectedCallback();},350);}else if(id==='codnut-math-info-toolbar-expand'){const items=getElementsByQuerySelectorAll('.module-info-item');for(const item of items){item.classList.toggle('hidden');}this.state.flg=2;this.connectedCallback();}}getStringToArray(str,width){// const length = width / 20
// return Array.from({ length: Math.ceil(str.length / length) }, (_, index) =>
//   str.slice(index * length, (index + 1) * length),
// )
const result=[];let curChunk='';let curChunkSize=0;for(const char of str){const charSize=/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(char)||/[A-Z]/.test(char)?20:8;if(curChunkSize+charSize>width){result.push(curChunk);curChunk=char;curChunkSize=charSize;}else{curChunk+=char;curChunkSize+=charSize;}}if(curChunk){result.push(curChunk);}return result;}getTextSvg(arr,defaultX,defaultY){let flg=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;let svg='';let h=0;arr.forEach(textArr=>{textArr.forEach((text,idx)=>{svg+="\n          <text\n            x=\"".concat(defaultX,"\"\n            y=\"").concat(defaultY+idx*40,"\"\n            fill=\"#333\"\n            font-size=\"24\"\n            font-weight=\"").concat(flg?500:text.startsWith('(')?700:400,"\"\n            style=\"letter-spacing: -0.48px;\"\n          >\n            ").concat(text,"\n          </text>\n        ");h=defaultY+idx*30;});defaultY=h+40;});return svg;}}class InfoToolbarThree extends HTMLElement{constructor(){super();this.state={flg:1,preventClick:false};setTimeout(()=>{const toolbar=util_getElement('codnut-math-info-toolbar-main');const closeBar=util_getElement('codnut-math-info-toolbar-close');if(toolbar){this.state.flg=0;toolbar.classList.add('slide-right');closeBar.classList.add('slide-right');setTimeout(()=>{this.connectedCallback();},350);}},2000);}static get observedAttributes(){return['title','description1','description2','description3'];}connectedCallback(){this.preventClick=false;const title=this.getAttribute('title');const d1=JSON.parse(this.getAttribute('description1'));const d2=JSON.parse(this.getAttribute('description2'));const d3=JSON.parse(this.getAttribute('description3'));if(this.state.flg===0){this.innerHTML="\n        <div style=\"position: absolute; width: 4%; left: 2%; top: 2%;\" >\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"codnut-math-info-toolbar\" cursor=\"pointer\">          \n            <rect x=\"1\" y=\"79\" width=\"78\" height=\"78\" rx=\"39\" transform=\"rotate(-90 1 79)\" fill=\"white\"/>\n            <rect x=\"1\" y=\"79\" width=\"78\" height=\"78\" rx=\"39\" transform=\"rotate(-90 1 79)\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <path d=\"M32 64L48 40L32 16\" stroke=\"#C6CCCD\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      ";util_registerEvent('codnut-math-info-toolbar','pointerup',()=>{this.handleButtonClick('codnut-math-info-toolbar');});}else if(this.state.flg===1){const titleLength=title.replace(/\s/g,'').length*24+40+(title.match(/\s/g)||[]).length*5;const w=910-titleLength;const description2=this.getArray(JSON.parse(this.getAttribute('description2')),w);this.innerHTML="\n        <div style=\"position: absolute; width: 50%; left: 25%; top: 1%; z-index: 20;\" class=\"slide-left\" id=\"codnut-math-info-toolbar-main\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 1080 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"1\" y=\"1\" width=\"1078\" height=\"124\" rx=\"62\" fill=\"white\"/>\n            <rect x=\"1\" y=\"1\" width=\"1078\" height=\"124\" rx=\"62\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <rect x=\"24\" y=\"31\" width=\"".concat(titleLength,"\" height=\"64\" rx=\"32\" fill=\"#2194FF\"/>\n            <text x=\"44\" y=\"72\" fill=\"#E8F3FC\" font-size=\"28\" font-weight=\"600\">").concat(title,"</text>\n            <g transform=\"translate(").concat(titleLength,", ").concat(description2[0].length===2?'50':'70',")\">\n              ").concat(this.getTextSvg(description2,40,0,true),"\n            </g>\n            <g id=\"codnut-math-info-toolbar-expand\" cursor=\"pointer\">\n              <rect x=\"930\" y=\"30\" width=\"120\" height=\"65\" fill=\"transparent\" />\n              <path d=\"M961.139 59.4271V56.875H962.861V59.4271H961.139Z\" fill=\"#2194FF\"/>\n              <path d=\"M961.234 61.4688V69.125H962.766V61.4688H961.234Z\" fill=\"#2194FF\"/>\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M952.555 53.5549C954.593 51.5163 957.727 50.75 962 50.75C966.273 50.75 969.407 51.5163 971.445 53.5549C973.484 55.5935 974.25 58.7274 974.25 63C974.25 67.2726 973.484 70.4065 971.445 72.4451C969.407 74.4837 966.273 75.25 962 75.25C957.727 75.25 954.593 74.4837 952.555 72.4451C950.516 70.4065 949.75 67.2726 949.75 63C949.75 58.7274 950.516 55.5935 952.555 53.5549ZM953.638 54.6377C952.042 56.2336 951.281 58.8419 951.281 63C951.281 67.1581 952.042 69.7664 953.638 71.3623C955.234 72.9583 957.842 73.7188 962 73.7188C966.158 73.7188 968.766 72.9583 970.362 71.3623C971.958 69.7664 972.719 67.1581 972.719 63C972.719 58.8419 971.958 56.2336 970.362 54.6377C968.766 53.0417 966.158 52.2812 962 52.2812C957.842 52.2812 955.234 53.0417 953.638 54.6377Z\" fill=\"#2194FF\"/>\n              <path d=\"M994.824 63.7305H982.637V62.2363H994.824V63.7305ZM996.66 69.5215H980.645V67.9883H996.66V69.5215ZM989.521 68.5547H987.705V62.9004H989.521V68.5547ZM994.658 57.0117H984.502V62.9199H982.637V55.5273H994.658V57.0117ZM1006.81 66.0938H1004.98V63.1348H1006.81V66.0938ZM1005.91 54.4531C1007.18 54.4531 1008.29 54.5866 1009.23 54.8535C1010.17 55.1204 1010.89 55.5046 1011.39 56.0059C1011.89 56.5007 1012.15 57.0964 1012.15 57.793C1012.15 58.4701 1011.89 59.056 1011.39 59.5508C1010.89 60.0456 1010.17 60.4232 1009.23 60.6836C1008.29 60.944 1007.18 61.0742 1005.91 61.0742C1004.63 61.0742 1003.52 60.944 1002.58 60.6836C1001.64 60.4232 1000.91 60.0456 1000.4 59.5508C999.893 59.056 999.639 58.4701 999.639 57.793C999.639 57.1029 999.893 56.5072 1000.4 56.0059C1000.91 55.5046 1001.64 55.1204 1002.58 54.8535C1003.52 54.5866 1004.63 54.4531 1005.91 54.4531ZM1005.91 55.8984C1005.01 55.8984 1004.24 55.9733 1003.58 56.123C1002.93 56.2663 1002.43 56.4811 1002.08 56.7676C1001.74 57.054 1001.56 57.3958 1001.56 57.793C1001.56 58.1771 1001.74 58.5059 1002.08 58.7793C1002.43 59.0527 1002.93 59.2643 1003.57 59.4141C1004.23 59.5573 1005 59.6289 1005.91 59.6289C1006.79 59.6289 1007.56 59.5573 1008.21 59.4141C1008.87 59.2643 1009.37 59.0527 1009.72 58.7793C1010.07 58.5059 1010.24 58.1771 1010.24 57.793C1010.24 57.3958 1010.07 57.054 1009.72 56.7676C1009.37 56.4811 1008.87 56.2663 1008.21 56.123C1007.56 55.9733 1006.79 55.8984 1005.91 55.8984ZM1011.94 71.4355H999.844V65.6055H1011.94V71.4355ZM1001.68 69.9316H1010.13V67.0898H1001.68V69.9316ZM1013.89 63.7695H997.93V62.2559H1013.89V63.7695ZM1028.96 63.0078H1027.12V54.1504H1028.96V63.0078ZM1031.51 59.3555H1028.16V57.8125H1031.51V59.3555ZM1024.08 62.1777H1015.89V55.0977H1024.08V62.1777ZM1017.71 60.7031H1022.28V56.582H1017.71V60.7031ZM1028.96 68.2324H1019.51V70.7227H1017.69V66.8555H1027.12V65.2539H1017.66V63.7988H1028.96V68.2324ZM1029.57 71.4355H1017.69V69.9609H1029.57V71.4355Z\" fill=\"#2194FF\"/>\n            </g>\n          </svg>\n        </div>\n        <div style=\"position: absolute; height: 6.66%; left: 75.7%; top: 2.5%; z-index: 20;\" class=\"slide-left\" id=\"codnut-math-info-toolbar-close\">\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" cursor=\"pointer\">\n            <rect x=\"1\" y=\"1\" width=\"78\" height=\"78\" rx=\"39\" fill=\"white\"/>\n            <rect x=\"1\" y=\"1\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"#E6EBF5\" stroke-width=\"2\"/>\n            <path d=\"M48 20L32 40L48 60\" stroke=\"#C6CCCD\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      ");util_registerEvent('codnut-math-info-toolbar-close','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-close'));util_registerEvent('codnut-math-info-toolbar-expand','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-expand'));}else if(this.state.flg===2){const svgWidth=1112;const titleWidth=252;const description1=this.getArray(d1,svgWidth-titleWidth);const description2=this.getArray(d2,svgWidth-titleWidth);const description3=this.getArray(d3,svgWidth-titleWidth);const line1Y=[].concat(...description1).length*40+58;const line2Y=line1Y+[].concat(...description2).length*40+58;const line3Y=[].concat(...description3).length*40+58;const height=line2Y+[].concat(...description3).length*40+58;this.innerHTML="\n        <div style=\"position: absolute; width: 100%; height: 100%; background-color: #000; opacity: 0.8; z-index: 42; border-radius:16px\" id=\"codnut-math-info-toolbar-close\" class=\"info-fade-on module-info-close\"></div>\n        <div style=\"position: absolute; width: 50%; left: 25%; top: 10px; z-index: 43;\" class=\"module-info-item\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 ".concat(svgWidth," ").concat(height+2,"\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <rect\n              x=\"2\"\n              y=\"2\"\n              rx=\"20\"\n              width=\"").concat(svgWidth-4,"\"\n              height=\"").concat(height-4,"\"\n              fill=\"white\"\n              stroke=\"#BCC1CC\"\n              stroke-width=\"2\"\n            />\n            <g transform=\"translate(56, 60)\">\n              <text x=\"0\" y=\"0\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uCF58\uD150\uCE20\uBA85</text>\n              ").concat(this.getTextSvg(description1,160,0),"\n            </g>\n            <g transform=\"translate(56, ").concat(line1Y+60,")\">\n              <text x=\"0\" y=\"0\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uD559\uC2B5 \uBAA9\uD45C</text>\n              ").concat(this.getTextSvg(description2,160,0),"\n            </g>\n            <g transform=\"translate(56, ").concat(line2Y+60,")\">\n              <text x=\"0\" y=\"").concat(line3Y/2-52,"\" fill=\"#2194FF\" font-size=\"24\" font-weight=\"600\">\uD559\uC2B5 \uC9C0\uB3C4\uC548</text>\n              ").concat(this.getTextSvg(description3,160,0),"\n            </g>\n\n            <line\n              x1=\"2\"\n              y1=\"").concat(line1Y,"\"\n              x2=\"").concat(svgWidth-2,"\"\n              y2=\"").concat(line1Y,"\"\n              stroke=\"#E6EBF5\"\n              stroke-width=\"1\"\n            />\n            <line\n              x1=\"2\"\n              y1=\"").concat(line2Y,"\"\n              x2=\"").concat(svgWidth-2,"\"\n              y2=\"").concat(line2Y,"\"\n              stroke=\"#E6EBF5\"\n              stroke-width=\"1\"\n            />\n          </svg>\n        </div>\n        <div style=\"position: absolute; width: 8%; height: 23.33%; right: 5%; top: 15px; z-index: 43;\" class=\"module-info-item module-info-close\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 100 253\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <g transform=\"translate(0, 45)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uCD08\uAE30\uD654</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"10\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 93)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD39C\uD234</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"-5\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 142)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uC9C0\uC6B0\uAC1C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"10\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n          </svg>\n        </div>\n        <div style=\"position: absolute; width: 8%; height: 32%; right: 5%; bottom: 2%; z-index: 43;\" class=\"module-info-item module-info-close\">\n          <svg\n            width=\"100%\"\n            height=\"100%\"\n            viewBox=\"0 0 100 320\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <g transform=\"translate(0, 127)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uBA74 \uD06C\uAC8C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 249)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uBA74 \uC791\uAC8C</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n            <g transform=\"translate(0, 296)\">\n              <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"18\" font-weight=\"700\" style=\"user-select:none;\">\uC804\uCCB4 \uD654\uBA74</text>\n              <g transform=\"translate(50, -8)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n                <line x1=\"30\" y1=\"0\" x2=\"50\" y2=\"0\" />\n                <path d=\"M50,0 L44 -6\" />\n                <path d=\"M50,0 L44 6\" />\n              </g>\n            </g>\n          </svg>\n        </div>\n      ");registerEventByQuerySelectorAll('.module-info-close','pointerup',()=>this.handleButtonClick('codnut-math-info-toolbar-close'));}}getArray(arr,width){return arr.map(item=>[...this.getStringToArray(item,width)]);}handleButtonClick(id){if(this.preventClick)return;this.preventClick=true;if(id==='codnut-math-info-toolbar'){this.state.flg=1;this.connectedCallback();}else if(id==='codnut-math-info-toolbar-close'){if(this.state.flg===1){util_getElement(id).previousElementSibling.classList.add('slide-right');util_getElement(id).classList.add('slide-right');}else if(this.state.flg===2){util_getElement(id).classList.add('info-fade-out');const items=getElementsByQuerySelectorAll('.module-info-item');for(const item of items){item.classList.toggle('hidden');}}setTimeout(()=>{this.state.flg=0;this.connectedCallback();},350);}else if(id==='codnut-math-info-toolbar-expand'){const items=getElementsByQuerySelectorAll('.module-info-item');for(const item of items){item.classList.toggle('hidden');}this.state.flg=2;this.connectedCallback();}}getStringToArray(str,width){// const length = width / 20
// return Array.from({ length: Math.ceil(str.length / length) }, (_, index) =>
//   str.slice(index * length, (index + 1) * length),
// )
const result=[];let curChunk='';let curChunkSize=0;for(const char of str){const charSize=/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(char)||/[A-Z]/.test(char)?20:8;if(curChunkSize+charSize>width){result.push(curChunk);curChunk=char;curChunkSize=charSize;}else{curChunk+=char;curChunkSize+=charSize;}}if(curChunk){result.push(curChunk);}return result;}getTextSvg(arr,defaultX,defaultY){let flg=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;let svg='';let h=0;arr.forEach(textArr=>{textArr.forEach((text,idx)=>{svg+="\n          <text\n            x=\"".concat(defaultX,"\"\n            y=\"").concat(defaultY+idx*40,"\"\n            fill=\"#333\"\n            font-size=\"24\"\n            font-weight=\"").concat(flg?500:text.startsWith('(')?700:400,"\"\n            style=\"letter-spacing: -0.48px;\"\n          >\n            ").concat(text,"\n          </text>\n        ");h=defaultY+idx*30;});defaultY=h+40;});return svg;}}class MA1P01701Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 1016\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"1010\" rx=\"31\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"1010\" rx=\"31\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g id=\"ma1p01701-number-15\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"16\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"17\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M48.9919 44.375V62.75H53.3669V67H38.7419V62.75H43.6481V49.375H43.5231L38.7419 52.3125V47.6562L44.0231 44.375H48.9919ZM64.4769 67.3125C59.5394 67.3125 55.9456 64.4375 55.8831 60.4062H61.0706C61.1331 62.0938 62.6331 63.1875 64.4769 63.1875C66.6019 63.1875 68.1331 61.6875 68.1019 59.5C68.1331 57.2812 66.5706 55.7812 64.4144 55.7812C62.7894 55.7812 61.7269 56.4062 61.1019 57.625H56.3206L57.4456 44.375H71.9144V48.6875H61.8206L61.2894 54.0938H61.4456C62.2269 52.8438 63.9769 51.9688 66.1019 51.9688C70.2269 51.9688 73.2581 55.0312 73.2581 59.3438C73.2581 64 69.7269 67.3125 64.4769 67.3125Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-18\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"112\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"113\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M48.7106 140.375V158.75H53.0856V163H38.4606V158.75H43.3669V145.375H43.2419L38.4606 148.312V143.656L43.7419 140.375H48.7106ZM64.3831 163.312C59.0706 163.312 55.2269 160.562 55.2269 156.875C55.2269 154.062 57.4456 151.781 60.3206 151.344V151.188C57.8206 150.719 56.0706 148.688 56.0706 146.188C56.0706 142.656 59.5706 140.062 64.3831 140.062C69.1331 140.062 72.6644 142.656 72.6644 146.188C72.6644 148.688 70.8519 150.719 68.4144 151.188V151.344C71.2269 151.781 73.5081 154.062 73.5081 156.875C73.5081 160.562 69.6644 163.312 64.3831 163.312ZM64.3831 159.375C66.4769 159.375 67.9144 158.094 67.9144 156.312C67.9144 154.531 66.4144 153.219 64.3831 153.219C62.3206 153.219 60.7894 154.531 60.8206 156.312C60.7894 158.094 62.2581 159.375 64.3831 159.375ZM64.3831 149.562C66.1644 149.562 67.4456 148.406 67.4456 146.75C67.4456 145.156 66.1644 144 64.3831 144C62.5394 144 61.2894 145.125 61.2894 146.75C61.2894 148.375 62.5706 149.562 64.3831 149.562Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-28\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"208\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"209\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M37.6012 259V255.156L45.8512 247.906C47.7575 246.156 48.8512 245 48.8825 243.281C48.8512 241.406 47.4762 240.219 45.57 240.219C43.6325 240.219 42.3512 241.438 42.3512 243.5H37.2887C37.2887 238.938 40.6325 236.062 45.6012 236.062C50.695 236.062 54.0387 238.812 54.0387 242.875C54.0387 245.469 52.7575 247.625 47.8512 251.906L45.0075 254.531V254.688H54.32V259H37.6012ZM65.5863 259.312C60.2738 259.312 56.43 256.562 56.43 252.875C56.43 250.062 58.6488 247.781 61.5238 247.344V247.188C59.0238 246.719 57.2738 244.688 57.2738 242.188C57.2738 238.656 60.7738 236.062 65.5863 236.062C70.3363 236.062 73.8675 238.656 73.8675 242.188C73.8675 244.688 72.055 246.719 69.6175 247.188V247.344C72.43 247.781 74.7113 250.062 74.7113 252.875C74.7113 256.562 70.8675 259.312 65.5863 259.312ZM65.5863 255.375C67.68 255.375 69.1175 254.094 69.1175 252.312C69.1175 250.531 67.6175 249.219 65.5863 249.219C63.5238 249.219 61.9925 250.531 62.0238 252.312C61.9925 254.094 63.4613 255.375 65.5863 255.375ZM65.5863 245.562C67.3675 245.562 68.6488 244.406 68.6488 242.75C68.6488 241.156 67.3675 240 65.5863 240C63.7425 240 62.4925 241.125 62.4925 242.75C62.4925 244.375 63.7738 245.562 65.5863 245.562Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-32\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"304\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"305\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M46.3356 355.312C41.1794 355.312 37.5231 352.469 37.4606 348.406H42.8356C42.8669 349.906 44.3669 350.969 46.3669 350.969C48.3669 350.969 49.8044 349.812 49.7731 348.188C49.8044 346.562 48.2731 345.375 45.8981 345.375H43.7106V341.562H45.8981C47.9606 341.562 49.3981 340.469 49.3981 338.844C49.3981 337.312 48.1794 336.219 46.3669 336.219C44.5231 336.219 43.0544 337.281 43.0231 338.875H37.8981C37.9606 334.875 41.5231 332.062 46.3981 332.062C51.2419 332.062 54.5544 334.844 54.5231 338.531C54.5544 341.062 52.6794 342.844 50.0856 343.219V343.375C53.5544 343.781 55.3981 345.781 55.3669 348.594C55.3981 352.5 51.6169 355.312 46.3356 355.312ZM57.7894 355V351.156L66.0394 343.906C67.9456 342.156 69.0394 341 69.0706 339.281C69.0394 337.406 67.6644 336.219 65.7581 336.219C63.8206 336.219 62.5394 337.438 62.5394 339.5H57.4769C57.4769 334.938 60.8206 332.062 65.7894 332.062C70.8831 332.062 74.2269 334.812 74.2269 338.875C74.2269 341.469 72.9456 343.625 68.0394 347.906L65.1956 350.531V350.688H74.5081V355H57.7894Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-36\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"400\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"401\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M46.3044 451.312C41.1481 451.312 37.4919 448.469 37.4294 444.406H42.8044C42.8356 445.906 44.3356 446.969 46.3356 446.969C48.3356 446.969 49.7731 445.812 49.7419 444.188C49.7731 442.562 48.2419 441.375 45.8669 441.375H43.6794V437.562H45.8669C47.9294 437.562 49.3669 436.469 49.3669 434.844C49.3669 433.312 48.1481 432.219 46.3356 432.219C44.4919 432.219 43.0231 433.281 42.9919 434.875H37.8669C37.9294 430.875 41.4919 428.062 46.3669 428.062C51.2106 428.062 54.5231 430.844 54.4919 434.531C54.5231 437.062 52.6481 438.844 50.0544 439.219V439.375C53.5231 439.781 55.3669 441.781 55.3356 444.594C55.3669 448.5 51.5856 451.312 46.3044 451.312ZM57.4456 443.594C57.4456 441.156 58.4144 438.875 60.2894 436.188L65.6331 428.375H70.9769L65.5081 436.25C66.1019 436.125 66.6956 436.031 67.3519 436.031C71.5706 436.031 74.6019 439.031 74.6019 443.406C74.6019 448.188 71.0081 451.312 66.1331 451.312C61.4456 451.312 57.4456 448.594 57.4456 443.594ZM62.6644 443.625C62.6644 445.719 64.0706 447.219 66.1019 447.219C68.1019 447.219 69.4769 445.719 69.4769 443.625C69.4769 441.531 68.0706 440.031 66.1019 440.031C64.0706 440.031 62.6644 441.531 62.6644 443.625Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-66\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"496\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"497\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M37.82 539.594C37.82 537.156 38.7887 534.875 40.6637 532.188L46.0075 524.375H51.3512L45.8825 532.25C46.4762 532.125 47.07 532.031 47.7262 532.031C51.945 532.031 54.9762 535.031 54.9762 539.406C54.9762 544.188 51.3825 547.312 46.5075 547.312C41.82 547.312 37.82 544.594 37.82 539.594ZM43.0387 539.625C43.0387 541.719 44.445 543.219 46.4762 543.219C48.4762 543.219 49.8512 541.719 49.8512 539.625C49.8512 537.531 48.445 536.031 46.4762 536.031C44.445 536.031 43.0387 537.531 43.0387 539.625ZM57.0238 539.594C57.0238 537.156 57.9925 534.875 59.8675 532.188L65.2113 524.375H70.555L65.0863 532.25C65.68 532.125 66.2738 532.031 66.93 532.031C71.1488 532.031 74.18 535.031 74.18 539.406C74.18 544.188 70.5863 547.312 65.7113 547.312C61.0238 547.312 57.0238 544.594 57.0238 539.594ZM62.2425 539.625C62.2425 541.719 63.6488 543.219 65.68 543.219C67.68 543.219 69.055 541.719 69.055 539.625C69.055 537.531 67.6488 536.031 65.68 536.031C63.6488 536.031 62.2425 537.531 62.2425 539.625Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-84\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"592\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"593\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M45.6481 643.312C40.3356 643.312 36.4919 640.562 36.4919 636.875C36.4919 634.062 38.7106 631.781 41.5856 631.344V631.188C39.0856 630.719 37.3356 628.688 37.3356 626.188C37.3356 622.656 40.8356 620.062 45.6481 620.062C50.3981 620.062 53.9294 622.656 53.9294 626.188C53.9294 628.688 52.1169 630.719 49.6794 631.188V631.344C52.4919 631.781 54.7731 634.062 54.7731 636.875C54.7731 640.562 50.9294 643.312 45.6481 643.312ZM45.6481 639.375C47.7419 639.375 49.1794 638.094 49.1794 636.312C49.1794 634.531 47.6794 633.219 45.6481 633.219C43.5856 633.219 42.0544 634.531 42.0856 636.312C42.0544 638.094 43.5231 639.375 45.6481 639.375ZM45.6481 629.562C47.4294 629.562 48.7106 628.406 48.7106 626.75C48.7106 625.156 47.4294 624 45.6481 624C43.8044 624 42.5544 625.125 42.5544 626.75C42.5544 628.375 43.8356 629.562 45.6481 629.562ZM56.8206 639.188V635.031L65.1644 620.375H70.2894L62.1331 634.812V635H67.9769V628.844H72.8206V635H75.6644V639.188H72.8206V643H67.8206V639.188H56.8206Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p01701-number-custom\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"688\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"17\" y=\"689\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.1\" stroke-width=\"2\"/>\n        <path d=\"M52.9844 731.656C52.9844 727.875 53.9531 726.719 55.7344 725.594C57.1094 724.719 58.1719 723.844 58.1719 722.469C58.1719 721.094 57.0781 720.219 55.7344 720.219C54.4219 720.219 53.2031 721.156 53.1719 722.719H48.2031C48.2656 718.125 51.6719 716.062 55.7656 716.062C60.2969 716.062 63.5781 718.25 63.5781 722.219C63.5781 724.844 62.1719 726.469 60.0781 727.719C58.3906 728.719 57.5781 729.656 57.5781 731.656V732.094H52.9844V731.656ZM55.3594 739.312C53.7969 739.312 52.5156 738.062 52.5469 736.469C52.5156 734.938 53.7969 733.688 55.3594 733.688C56.8594 733.688 58.1719 734.938 58.2031 736.469C58.1719 738.062 56.8594 739.312 55.3594 739.312Z\" fill=\"black\"/>\n      </g>\n      <rect x=\"16\" y=\"792\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      <g id=\"ma1p01701-factorize-all\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"820\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"820.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M44.6213 845.5L47.1213 843L45 840.879L38.8787 847L45 853.121L47.1213 851L44.6213 848.5H65.3786L62.8787 851L65 853.121L71.1213 847L65 840.879L62.8787 843L65.3787 845.5H44.6213Z\" fill=\"#404654\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M57.1982 858.398C53.0391 859.609 50 863.45 50 868C50 872.55 53.0391 876.391 57.1982 877.602C55.193 879.108 52.7007 880 50 880C43.3726 880 38 874.627 38 868C38 861.373 43.3726 856 50 856C52.7007 856 55.193 856.892 57.1982 858.398Z\" fill=\"#FC9AD0\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60 880C66.6274 880 72 874.627 72 868C72 861.373 66.6274 856 60 856C57.2993 856 54.807 856.892 52.8018 858.398C56.9609 859.609 60 863.45 60 868C60 872.55 56.9609 876.391 52.8018 877.602C54.807 879.108 57.2993 880 60 880Z\" fill=\"#7BCEFD\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.8018 877.602C51.9128 877.861 50.9726 878 50 878C44.4772 878 40 873.523 40 868C40 862.477 44.4772 858 50 858C50.9726 858 51.9128 858.139 52.8018 858.398C53.4821 857.887 54.2185 857.447 55 857.088C53.4779 856.389 51.7844 856 50 856C43.3726 856 38 861.373 38 868C38 874.627 43.3726 880 50 880C51.7844 880 53.4779 879.611 55 878.912C54.2185 878.553 53.4821 878.113 52.8018 877.602Z\" fill=\"#FC6AB3\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M57.1982 877.602C56.5179 878.113 55.7816 878.553 55 878.912C56.5221 879.611 58.2156 880 60 880C66.6274 880 72 874.627 72 868C72 861.373 66.6274 856 60 856C58.2156 856 56.5221 856.389 55 857.088C55.7815 857.447 56.5179 857.887 57.1982 858.398C58.0872 858.139 59.0274 858 60 858C65.5228 858 70 862.477 70 868C70 873.523 65.5228 878 60 878C59.0274 878 58.0872 877.861 57.1982 877.602Z\" fill=\"#48AFFD\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.8017 877.602C53.482 878.113 54.2184 878.553 54.9999 878.912C59.131 877.016 62 872.843 62 868C62 863.157 59.1311 858.984 55 857.088C54.2185 857.447 53.4821 857.887 52.8018 858.398C56.9609 859.609 60 863.45 60 868C60 872.55 56.9609 876.39 52.8017 877.602Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M57.1981 858.31C53.039 859.521 50 863.362 50 867.912C50 872.462 53.0392 876.303 57.1984 877.514C56.5181 878.025 55.7817 878.465 55.0002 878.824C50.869 876.928 48 872.755 48 867.912C48 863.069 50.8689 858.896 54.9998 857C55.7814 857.359 56.5178 857.799 57.1981 858.31Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n      </g>\n      <g id=\"ma1p01701-factorize-all-reverse\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"916\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"916.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M53 964C53 969.523 48.5228 974 43 974C37.4772 974 33 969.523 33 964C33 958.477 37.4772 954 43 954C48.5228 954 53 958.477 53 964Z\" fill=\"#FC9AD0\"/>\n        <path d=\"M77 964C77 969.523 72.5228 974 67 974C61.4772 974 57 969.523 57 964C57 958.477 61.4772 954 67 954C72.5228 954 77 958.477 77 964Z\" fill=\"#7BCEFD\"/>\n        <path d=\"M47.1213 938L53.2426 944.121L50.182 947.182L47.1213 950.243L45 948.121L47.0607 946.061L49 944.121L47 942.121L45 940.121L47.1213 938Z\" fill=\"#404654\"/>\n        <path d=\"M49 944.121L47 942.121H34.5V946.061H47.0607L49 944.121Z\" fill=\"#404654\"/>\n        <path d=\"M62.6213 938L56.5 944.121L59.5607 947.182L62.6213 950.243L64.7426 948.121L62.682 946.061L60.7426 944.121L62.7426 942.121L64.7426 940.121L62.6213 938Z\" fill=\"#404654\"/>\n        <path d=\"M60.7426 944.121L62.7426 942.121H75.2426V946.061H62.682L60.7426 944.121Z\" fill=\"#404654\"/>\n      </g>\n    </svg> \n    ";}}class MA1P01701ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -220)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,610 L0,610\"  />\n          </g>\n          <g transform=\"translate(40, 305)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uC218\uB97C \uD654\uBA74\uC5D0 \uBC30\uCE58</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 485)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uC9C1\uC811\uC785\uB825</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 620)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uBAA8\uB450 \uD3B4\uAE30</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 720)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uBAA8\uB450 \uC811\uAE30</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA5P20701Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 324\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"318\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"318\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n\n        <g id=\"ma5p20701-tab-1\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M48.9704 56.0767L61.9962 47.9891L75.022 39.8987L55.9798 37.6354L36.9404 35.3721L42.9568 45.7258L48.9704 56.0767Z\" fill=\"#FFEA7E\"/>\n          <path d=\"M48.9704 93.3463V56.0767L36.9404 35.3721V72.6416L48.9704 93.3463Z\" fill=\"#FFEA7E\"/>\n          <path d=\"M48.9704 93.3463V56.0767L36.9404 35.3721V72.6416L48.9704 93.3463Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n          <path d=\"M75.0213 77.1679V39.8984L48.9697 56.0765V93.346L75.0213 77.1679Z\" fill=\"#FFEA7E\"/>\n          <path d=\"M75.0213 77.1679V39.8984L48.9697 56.0765V93.346L75.0213 77.1679Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M75.8789 76.8175C76.112 77.1929 75.9967 77.6861 75.6214 77.9192L49.353 94.2316C48.9777 94.4647 48.4844 94.3494 48.2513 93.974C48.0183 93.5987 48.1336 93.1055 48.5089 92.8724L74.7773 76.5599C75.1526 76.3269 75.6459 76.4422 75.8789 76.8175Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M75.2004 38.9648C75.6422 38.9648 76.0004 39.323 76.0004 39.7648V77.2401C76.0004 77.6819 75.6422 78.0401 75.2004 78.0401C74.7586 78.0401 74.4004 77.6819 74.4004 77.2401V39.7648C74.4004 39.323 74.7586 38.9648 75.2004 38.9648Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M48.9309 55.2773C49.3727 55.2773 49.7309 55.6355 49.7309 56.0773V93.5526C49.7309 93.9944 49.3727 94.3526 48.9309 94.3526C48.489 94.3526 48.1309 93.9944 48.1309 93.5526V56.0773C48.1309 55.6355 48.489 55.2773 48.9309 55.2773Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.3982 71.9834C36.7802 71.7614 37.2699 71.8912 37.4918 72.2732L49.6233 93.1507C49.8453 93.5327 49.7155 94.0224 49.3335 94.2443C48.9515 94.4663 48.4619 94.3366 48.2399 93.9546L36.1084 73.0771C35.8864 72.695 36.0162 72.2054 36.3982 71.9834Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.8 34.3994C37.2418 34.3994 37.6 34.7576 37.6 35.1994V72.6747C37.6 73.1165 37.2418 73.4747 36.8 73.4747C36.3582 73.4747 36 73.1165 36 72.6747V35.1994C36 34.7576 36.3582 34.3994 36.8 34.3994Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.8939 34.405C36.8941 34.405 36.8943 34.4051 36.8945 34.4051L75.2943 38.9702C75.7331 39.0223 76.0464 39.4203 75.9943 39.859C75.9786 39.9906 75.9319 40.111 75.8622 40.2135C75.8011 40.3039 75.7204 40.3831 75.6217 40.4444L49.3562 56.7551M36.8939 34.405C36.8625 34.4013 36.8308 34.3994 36.7991 34.3994C36.6217 34.3994 36.455 34.4583 36.3202 34.5594C36.2583 34.6057 36.2047 34.6597 36.1601 34.7193C36.0781 34.8283 36.0229 34.9598 36.0057 35.1051C36.0048 35.1122 36.0041 35.1194 36.0034 35.1266C36.0011 35.1511 36 35.1758 36 35.2005C36 35.3485 36.041 35.489 36.1132 35.6098L48.2291 56.4604C48.2362 56.4735 48.2438 56.4864 48.2517 56.4992C48.4841 56.8735 48.9752 56.9892 49.3501 56.7588M49.2094 54.9628L72.8383 40.2894L38.2969 36.1831L49.2094 54.9628Z\" fill=\"black\"/>\n        </g>\n        \n        <g id=\"ma5p20701-tab-2\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M78.1694 170.33L65.7102 150.873L53.2511 131.417L50.5264 160.304L47.8018 189.191L62.9856 179.76L78.1694 170.33Z\" fill=\"#8BD5FF\"/>\n          <path d=\"M47.8013 189.191L50.526 160.304L53.2506 131.417L43.5129 148.235L33.7783 165.056L40.7914 177.122L47.8013 189.191Z\" fill=\"#8BD5FF\"/>\n          <path d=\"M47.8013 189.191L50.526 160.304L53.2506 131.417L43.5129 148.235L33.7783 165.056L40.7914 177.122L47.8013 189.191Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.5011 130.439C53.5768 130.464 53.6471 130.5 53.7105 130.544C53.8071 130.612 53.8848 130.698 53.9414 130.795L79.0598 169.922C79.0665 169.932 79.073 169.942 79.0793 169.952C79.3124 170.328 79.1971 170.821 78.8218 171.054L48.1944 190.073C48.1819 190.082 48.1691 190.09 48.156 190.097C47.9625 190.21 47.7413 190.232 47.5413 190.177C47.4704 190.157 47.4038 190.128 47.3427 190.092C47.3254 190.081 47.3085 190.07 47.2919 190.059C47.2296 190.015 47.1728 189.961 47.124 189.899C47.1175 189.89 47.1111 189.882 47.1048 189.873C47.086 189.847 47.0688 189.82 47.0532 189.792L32.9136 165.461C32.9035 165.444 32.894 165.427 32.8852 165.409C32.8273 165.295 32.7997 165.172 32.7998 165.05C32.7997 164.929 32.8272 164.806 32.8851 164.691C32.8939 164.673 32.9033 164.656 32.9134 164.639L52.5426 130.827C52.6048 130.708 52.6977 130.604 52.8185 130.526C52.9231 130.459 53.0375 130.419 53.1532 130.405C53.1862 130.401 53.2194 130.399 53.2524 130.399C53.3357 130.399 53.4196 130.412 53.5011 130.439ZM52.1116 134.756L34.5251 165.05L47.1919 186.846L52.1116 134.756ZM48.7019 187.875L53.8296 133.582L77.2875 170.123L48.7019 187.875Z\" fill=\"black\"/>\n        </g>\n\n        <g id=\"ma5p20701-tab-3\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M79.7648 265.356L66.4103 230.229L50.1367 240.336L47.2148 285.569L79.7648 265.356Z\" fill=\"#FC9AD0\"/>\n          <path d=\"M79.7648 265.356L66.4103 230.229L50.1367 240.336L47.2148 285.569L79.7648 265.356Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n          <path d=\"M47.2152 285.568L50.1371 240.336L42.6209 227.401L32.1855 259.7L47.2152 285.568Z\" fill=\"#FC9AD0\"/>\n          <path d=\"M47.2152 285.568L50.1371 240.336L42.6209 227.401L32.1855 259.7L47.2152 285.568Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n          <path d=\"M50.1363 240.336L58.2717 235.282L66.4099 230.229L54.515 228.817L42.6201 227.401L46.3768 233.87L50.1363 240.336Z\" fill=\"#FC9AD0\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M41.7819 226.776C41.7436 226.837 41.7133 226.904 41.6925 226.975L31.2413 259.442C31.2332 259.466 31.2263 259.491 31.2206 259.515C31.2068 259.575 31.2001 259.636 31.2002 259.695C31.2002 259.832 31.2351 259.97 31.3086 260.096L46.4737 286.194C46.6805 286.55 47.1197 286.687 47.4876 286.525C47.525 286.508 47.5609 286.489 47.5951 286.467L80.4227 266.079C80.7623 265.868 80.889 265.445 80.7374 265.088L67.3693 229.804C67.359 229.775 67.347 229.747 67.3331 229.719C67.2873 229.625 67.225 229.544 67.1512 229.478C67.1015 229.433 67.0469 229.395 66.9889 229.364C66.9739 229.356 66.9586 229.349 66.9431 229.342C66.9254 229.334 66.9073 229.327 66.8889 229.32C66.8242 229.296 66.7564 229.281 66.6871 229.275L42.5732 226.407C42.5353 226.402 42.4974 226.399 42.4597 226.399C42.3233 226.399 42.1851 226.434 42.0586 226.508C41.9419 226.576 41.8487 226.668 41.7819 226.776ZM64.2535 230.597L43.9572 228.183L50.368 239.219L64.2535 230.597ZM32.871 259.601L42.6715 229.155L49.2765 240.525L46.5363 283.117L32.871 259.601ZM48.064 284.293L79.0188 265.068L66.2116 231.264L50.8624 240.795L48.064 284.293Z\" fill=\"black\"/>\n        </g>\n      </svg>\n    ";this.innerHTML+="\n      <div\n        style=\"position: absolute; width: 300%; height: 33%; top:0; left: 110%;\"\n        id=\"ma5p20701-item-group-1\" class=\"ma5p20701-item-group hidden\"\n      >\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 462 104\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" fill=\"white\"/>\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n\n          <g id=\"ma5p20701-item-1\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M50.9704 44.0767L63.9962 35.9891L77.022 27.8987L57.9798 25.6354L38.9404 23.3721L44.9568 33.7258L50.9704 44.0767Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M50.9704 81.3463V44.0767L38.9404 23.3721V60.6416L50.9704 81.3463Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M50.9704 81.3463V44.0767L38.9404 23.3721V60.6416L50.9704 81.3463Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M77.0213 65.168V27.8984L50.9697 44.0765V81.346L77.0213 65.168Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M77.0213 65.168V27.8984L50.9697 44.0765V81.346L77.0213 65.168Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M77.8789 64.8175C78.112 65.1929 77.9967 65.6861 77.6214 65.9192L51.353 82.2316C50.9777 82.4647 50.4844 82.3494 50.2513 81.974C50.0183 81.5987 50.1336 81.1055 50.5089 80.8724L76.7773 64.5599C77.1526 64.3269 77.6459 64.4422 77.8789 64.8175Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M77.2004 26.9648C77.6422 26.9648 78.0004 27.323 78.0004 27.7648V65.2401C78.0004 65.6819 77.6422 66.0401 77.2004 66.0401C76.7586 66.0401 76.4004 65.6819 76.4004 65.2401V27.7648C76.4004 27.323 76.7586 26.9648 77.2004 26.9648Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.9309 43.2773C51.3727 43.2773 51.7309 43.6355 51.7309 44.0773V81.5526C51.7309 81.9944 51.3727 82.3526 50.9309 82.3526C50.489 82.3526 50.1309 81.9944 50.1309 81.5526V44.0773C50.1309 43.6355 50.489 43.2773 50.9309 43.2773Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3982 59.9834C38.7802 59.7614 39.2699 59.8912 39.4918 60.2732L51.6233 81.1507C51.8453 81.5327 51.7155 82.0224 51.3335 82.2443C50.9515 82.4663 50.4619 82.3366 50.2399 81.9546L38.1084 61.0771C37.8864 60.695 38.0162 60.2054 38.3982 59.9834Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.8 22.3994C39.2418 22.3994 39.6 22.7576 39.6 23.1994V60.6747C39.6 61.1165 39.2418 61.4747 38.8 61.4747C38.3582 61.4747 38 61.1165 38 60.6747V23.1994C38 22.7576 38.3582 22.3994 38.8 22.3994Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.8939 22.405C38.8941 22.405 38.8943 22.4051 38.8945 22.4051L77.2943 26.9702C77.7331 27.0223 78.0464 27.4203 77.9943 27.859C77.9786 27.9911 77.9316 28.1118 77.8615 28.2146C77.8005 28.3045 77.72 28.3834 77.6217 28.4444L51.3562 44.7551M38.8939 22.405C38.8625 22.4013 38.8308 22.3994 38.7991 22.3994C38.6217 22.3994 38.455 22.4583 38.3202 22.5594C38.2583 22.6057 38.2047 22.6597 38.16 22.7193C38.0781 22.8284 38.0229 22.9598 38.0057 23.1051C38.0048 23.1122 38.0041 23.1194 38.0034 23.1266C38.0011 23.1511 38 23.1758 38 23.2005C38 23.3485 38.041 23.489 38.1132 23.6098L50.2291 44.4604C50.2362 44.4735 50.2438 44.4864 50.2517 44.4992C50.4841 44.8735 50.9752 44.9892 51.3501 44.7588M51.2094 42.9628L74.8383 28.2894L40.2969 24.1831L51.2094 42.9628Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-2\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M146 81.2846V45.7623L124.575 33.7803V69.3052L146 81.2846Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M146 81.2846V45.7623L124.575 33.7803V69.3052L146 81.2846Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M167.425 69.3052V33.7803L146 45.7623V81.2846L167.425 69.3052Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M167.425 69.3052V33.7803L146 45.7623V81.2846L167.425 69.3052Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M167.425 33.7802L146 21.8008L124.575 33.7802L146 45.7622L167.425 33.7802Z\" fill=\"#FFEA7E\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M167.6 32.8789C168.042 32.8789 168.4 33.2371 168.4 33.6789V69.4078C168.4 69.8497 168.042 70.2078 167.6 70.2078C167.158 70.2078 166.8 69.8497 166.8 69.4078V33.6789C166.8 33.2371 167.158 32.8789 167.6 32.8789Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M168.298 69.0171C168.513 69.4027 168.375 69.8902 167.99 70.1058L146.39 82.1846C146.004 82.4002 145.517 82.2624 145.301 81.8768C145.085 81.4911 145.223 81.0037 145.609 80.7881L167.209 68.7093C167.595 68.4937 168.082 68.6315 168.298 69.0171Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M145.999 44.958C146.441 44.958 146.799 45.3162 146.799 45.758V81.4869C146.799 81.9288 146.441 82.2869 145.999 82.2869C145.557 82.2869 145.199 81.9288 145.199 81.4869V45.758C145.199 45.3162 145.557 44.958 145.999 44.958Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M123.702 69.0171C123.917 68.6315 124.405 68.4937 124.79 68.7093L146.39 80.7881C146.776 81.0037 146.914 81.4911 146.698 81.8768C146.482 82.2624 145.995 82.4002 145.609 82.1846L124.009 70.1058C123.624 69.8902 123.486 69.4027 123.702 69.0171Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M124.4 32.8789C124.841 32.8789 125.2 33.2371 125.2 33.6789V69.4078C125.2 69.8497 124.841 70.2078 124.4 70.2078C123.958 70.2078 123.6 69.8497 123.6 69.4078V33.6789C123.6 33.2371 123.958 32.8789 124.4 32.8789Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M146 22.5165L126.039 33.6787L146 44.8408L165.961 33.6787L146 22.5165ZM123.817 34.2271C123.877 34.2911 123.947 34.3437 124.022 34.384L145.597 46.4486C145.719 46.5197 145.858 46.5574 146 46.5576C146.141 46.5574 146.281 46.5197 146.403 46.4486L167.978 34.384C168.053 34.3437 168.122 34.291 168.183 34.2269C168.243 34.1628 168.292 34.0899 168.327 34.0115C168.377 33.9042 168.4 33.7908 168.4 33.6787C168.4 33.4769 168.323 33.2794 168.182 33.13C168.122 33.0661 168.053 33.0136 167.978 32.9734L146.403 20.9088C146.281 20.8377 146.141 20.7999 146 20.7998C145.858 20.7999 145.719 20.8377 145.597 20.9088L124.022 32.9734C123.947 33.0136 123.877 33.066 123.817 33.1298C123.677 33.2792 123.6 33.4768 123.6 33.6787C123.6 33.8804 123.676 34.0778 123.817 34.2271Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-3\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M243.335 81.0803V44.7538L217.83 42.751V79.0748L243.335 81.0803Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M243.335 81.0803V44.7538L217.83 42.751V79.0748L243.335 81.0803Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M254.626 31.8118L236.1 21.8057L213.357 28.5683L217.831 42.7512L243.336 44.7541L254.626 31.8118Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M254.626 68.1353V31.8115L243.336 44.7538V81.0802L254.626 68.1353Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M254.626 68.1353V31.8115L243.336 44.7538V81.0802L254.626 68.1353Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M217.831 79.0752V42.7513L213.357 28.5684V64.8922L217.831 79.0752Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M217.831 79.0752V42.7513L213.357 28.5684V64.8922L217.831 79.0752Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M213.963 64.7178C213.83 64.2964 213.38 64.0626 212.959 64.1955C212.538 64.3284 212.304 64.7777 212.437 65.199L216.933 79.4552C217.016 79.7763 217.295 80.0242 217.645 80.0517L243.355 82.0732C243.447 82.0805 243.537 82.0718 243.622 82.0494C243.772 82.0102 243.912 81.9271 244.022 81.8014L255.402 68.7522C255.693 68.4192 255.658 67.9139 255.325 67.6235C254.992 67.3331 254.487 67.3676 254.197 67.7006L243.08 80.4467L218.309 78.499L213.963 64.7178Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M213.999 28.4162C213.999 27.9744 213.641 27.6162 213.199 27.6162C212.758 27.6162 212.399 27.9744 212.399 28.4162V64.9593C212.399 65.4011 212.758 65.7593 213.199 65.7593C213.641 65.7593 213.999 65.4011 213.999 64.9593V28.4162ZM255.599 31.6861C255.599 31.2443 255.241 30.8861 254.799 30.8861C254.358 30.8861 253.999 31.2443 253.999 31.6861V68.2265C253.999 68.6684 254.358 69.0265 254.799 69.0265C255.241 69.0265 255.599 68.6684 255.599 68.2265V31.6861ZM244.219 44.7326C244.219 44.2908 243.861 43.9326 243.419 43.9326C242.977 43.9326 242.619 44.2908 242.619 44.7326V81.2757C242.619 81.7175 242.977 82.0757 243.419 82.0757C243.861 82.0757 244.219 81.7175 244.219 81.2757V44.7326ZM217.707 41.9141C218.149 41.9141 218.507 42.2722 218.507 42.7141V79.2545C218.507 79.6963 218.149 80.0545 217.707 80.0545C217.265 80.0545 216.907 79.6963 216.907 79.2545V42.7141C216.907 42.2722 217.265 41.9141 217.707 41.9141Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M235.42 21.2198C235.63 20.831 236.116 20.6861 236.505 20.8961L255.18 30.9824C255.569 31.1924 255.714 31.6778 255.504 32.0665C255.294 32.4553 254.808 32.6002 254.42 32.3902L235.744 22.3039C235.355 22.0939 235.211 21.6085 235.42 21.2198Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M255.326 31.0829C255.659 31.3733 255.693 31.8787 255.403 32.2116L244.022 45.2582C243.732 45.5911 243.226 45.6256 242.893 45.3351C242.56 45.0447 242.526 44.5393 242.816 44.2064L254.197 31.1599C254.487 30.8269 254.993 30.7925 255.326 31.0829Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M216.91 42.6515C216.944 42.211 217.329 41.882 217.77 41.9166L243.481 43.9354C243.921 43.97 244.25 44.3551 244.215 44.7956C244.181 45.2361 243.796 45.5651 243.355 45.5305L217.645 43.5116C217.204 43.4771 216.875 43.0919 216.91 42.6515Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M212.959 27.6535C213.38 27.5206 213.83 27.7545 213.963 28.1758L218.471 42.4738C218.604 42.8952 218.37 43.3445 217.949 43.4774C217.527 43.6102 217.078 43.3763 216.945 42.955L212.437 28.657C212.304 28.2356 212.538 27.7863 212.959 27.6535Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M236.891 21.372C237.017 21.7955 236.775 22.2409 236.352 22.3668L213.428 29.1829C213.004 29.3088 212.559 29.0676 212.433 28.6441C212.307 28.2206 212.548 27.7752 212.972 27.6493L235.896 20.8332C236.319 20.7073 236.765 20.9485 236.891 21.372Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-4\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M343.429 31.9239L329.443 22.6016L308.012 24.713L300.57 36.1495L314.557 45.4692L335.987 43.3577L343.429 31.9239Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M343.429 68.0021V31.9238L335.987 43.3577V79.436L343.429 68.0021Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M343.429 68.0021V31.9238L335.987 43.3577V79.436L343.429 68.0021Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M335.987 79.4357V43.3574L314.557 45.4689V81.5499L335.987 79.4357Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M335.987 79.4357V43.3574L314.557 45.4689V81.5499L335.987 79.4357Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M314.557 81.5501V45.4691L300.57 36.1494V72.2277L314.557 81.5501Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M314.557 81.5501V45.4691L300.57 36.1494V72.2277L314.557 81.5501Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M343.599 68.0957L336.096 79.6225L314.498 81.7499L300.4 72.3558\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M343.545 31.88C343.575 31.8341 343.563 31.7726 343.517 31.7422L329.531 22.4202C329.512 22.4074 329.489 22.4016 329.466 22.4039L307.949 24.5257C307.918 24.5287 307.891 24.5453 307.875 24.5707L300.454 35.9743C300.424 36.0203 300.437 36.0817 300.483 36.1121L314.468 45.4315C314.488 45.4443 314.511 45.4501 314.534 45.4478L336.048 43.326C336.079 43.323 336.106 43.3064 336.122 43.281L343.545 31.88Z\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M343.6 31.7969V68.0956\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M336.096 43.3213V79.6227\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M314.498 45.4512V81.7499\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M300.4 36.0566V72.3554\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M343.428 31.9239L329.442 22.6016L308.011 24.713L300.569 36.1495L314.556 45.4692L335.986 43.3577L343.428 31.9239Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M343.428 68.0021V31.9238L335.986 43.3577V79.436L343.428 68.0021Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M343.428 68.0021V31.9238L335.986 43.3577V79.436L343.428 68.0021Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M335.986 79.4357V43.3574L314.556 45.4689V81.5499L335.986 79.4357Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M335.986 79.4357V43.3574L314.556 45.4689V81.5499L335.986 79.4357Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M314.556 81.5501V45.4691L300.569 36.1494V72.2277L314.556 81.5501Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M314.556 81.5501V45.4691L300.569 36.1494V72.2277L314.556 81.5501Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M329.394 21.6068C329.596 21.5868 329.799 21.6375 329.969 21.7503L343.977 31.0873C343.986 31.0935 343.995 31.0999 344.004 31.1064C344.241 31.2454 344.4 31.5025 344.4 31.7967V68.0954C344.4 68.2695 344.344 68.4305 344.25 68.5618L336.556 80.3809L314.292 82.5739L314.066 82.4236C314.058 82.4185 314.05 82.4134 314.043 82.4081L299.96 73.0244C299.955 73.0207 299.949 73.0169 299.944 73.0131C299.736 72.8686 299.6 72.628 299.6 72.3556V72.3552C299.6 72.3551 299.6 72.3549 299.6 72.3548V36.0568C299.6 35.8804 299.657 35.7173 299.753 35.5851C299.76 35.5747 299.766 35.5645 299.773 35.5543L307.209 24.1261C307.355 23.9021 307.594 23.7565 307.86 23.7303L329.394 21.6068ZM301.2 37.5512V71.9274L313.697 80.2553V45.879L301.2 37.5512ZM315.297 46.1761V80.8671L335.295 78.8974V44.2038L315.297 46.1761ZM336.895 43.5598V76.9279L342.8 67.8566V34.4906L336.895 43.5598ZM329.295 23.2243L308.361 25.2886L301.502 35.83L314.704 44.6269L335.635 42.5625L342.497 32.0236L329.295 23.2243Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397L7.99674 60C7.99674 54.6383 7.99707 49.1751 7.99707 44L7.99713 44.1603Z\" fill=\"white\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44V44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397V60H5.99713V59.8397C5.99713 58.964 5.61444 58.1319 4.94951 57.562L1.11794 54.2778C-0.278896 53.0805 -0.278896 50.9195 1.11794 49.7222L4.94951 46.438C5.61444 45.8681 5.99713 45.036 5.99713 44.1603V44H7.99713Z\" fill=\"#BCC1CC\"/>\n          </g>\n          <g id=\"ma5p20701-item-13\" cursor=\"pointer\">\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M410 81.8662C421.046 81.8662 430 76.7324 430 70.3995V33.8662H390V70.3995C390 76.7324 398.954 81.8662 410 81.8662Z\" fill=\"#FFEA7E\"/>\n            <path d=\"M410 81.8662C421.046 81.8662 430 76.7324 430 70.3995V33.8662H390V70.3995C390 76.7324 398.954 81.8662 410 81.8662Z\" fill=\"url(#paint0_linear_4657_44894)\" fill-opacity=\"0.3\"/>\n            <path d=\"M410 81.8662C421.046 81.8662 430 76.7324 430 70.3995V33.8662H390V70.3995C390 76.7324 398.954 81.8662 410 81.8662Z\" stroke=\"black\" stroke-width=\"1.6\"/>\n            <path d=\"M430 33.8661C430 40.1989 421.046 45.3327 410 45.3327C398.954 45.3327 390 40.1989 390 33.8661C390 27.5332 398.954 22.3994 410 22.3994C421.046 22.3994 430 27.5332 430 33.8661Z\" fill=\"#FFEA7E\" stroke=\"black\" stroke-width=\"1.6\"/>\n          </g>\n          <defs>\n            <linearGradient id=\"paint0_linear_4657_44894\" x1=\"430\" y1=\"57.8662\" x2=\"396\" y2=\"57.8662\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-opacity=\"0\"/>\n              <stop offset=\"1\"/>\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n      <div\n        style=\"position: absolute; width: 300%; height: 33%; top:33%; left: 110%;\"\n        id=\"ma5p20701-item-group-2\" class=\"ma5p20701-item-group hidden\"\n      >\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 462 104\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" fill=\"white\"/>\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" stroke=\"#C3CAD1\" stroke-width=\"2\"/>\n          \n          <g id=\"ma5p20701-item-5\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M80.1694 62.3296L67.7102 42.8733L55.2511 23.417L52.5264 52.304L49.8018 81.1911L64.9856 71.7603L80.1694 62.3296Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M49.8013 81.1911L52.526 52.304L55.2506 23.417L45.5129 40.235L35.7783 57.0562L42.7914 69.122L49.8013 81.1911Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M49.8013 81.1911L52.526 52.304L55.2506 23.417L45.5129 40.235L35.7783 57.0562L42.7914 69.122L49.8013 81.1911Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.5011 22.4394C55.5768 22.4642 55.6471 22.4999 55.7105 22.5444C55.8071 22.612 55.8848 22.6979 55.9414 22.7946L81.0598 61.9223C81.0665 61.9321 81.073 61.9421 81.0793 61.9523C81.3124 62.3276 81.1971 62.8209 80.8218 63.054L50.1944 82.0734C50.1819 82.0816 50.1691 82.0896 50.156 82.0972C49.9625 82.2096 49.7413 82.2318 49.5413 82.1767C49.4704 82.1572 49.4038 82.1285 49.3427 82.0918C49.3254 82.0815 49.3085 82.0704 49.2919 82.0587C49.2296 82.0147 49.1728 81.9612 49.124 81.8987C49.1175 81.8903 49.1111 81.8818 49.1048 81.8731C49.086 81.8471 49.0688 81.8199 49.0532 81.7917L34.9136 57.4611C34.9035 57.4442 34.894 57.427 34.8852 57.4094C34.8273 57.2946 34.7997 57.1716 34.7998 57.05C34.7997 56.9285 34.8272 56.8055 34.8851 56.6907C34.8939 56.6731 34.9033 56.6559 34.9134 56.6389L54.5426 22.827C54.6048 22.7084 54.6977 22.6038 54.8185 22.5263C54.9231 22.4591 55.0375 22.4194 55.1532 22.4053C55.1862 22.4013 55.2194 22.3993 55.2524 22.3994C55.3357 22.3995 55.4196 22.4125 55.5011 22.4394ZM54.1116 26.7562L36.5251 57.0497L49.1919 78.846L54.1116 26.7562ZM50.7019 79.8749L55.8296 25.5821L79.2875 62.1233L50.7019 79.8749Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-6\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M146 81.4216V52.4193V23.417L132.919 45.1041L119.84 66.7912L132.919 74.1064L146 81.4216Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M146 81.4216V52.4193V23.417L132.919 45.1041L119.84 66.7912L132.919 74.1064L146 81.4216Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M172.162 66.7912L159.083 45.1041L146.001 23.417V52.4193V81.4216L159.083 74.1064L172.162 66.7912Z\" fill=\"#8BD5FF\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M146 22.3994C146.442 22.3994 146.8 22.7576 146.8 23.1994V52.1155C146.8 52.5573 146.442 52.9155 146 52.9155C145.558 52.9155 145.2 52.5573 145.2 52.1155V23.1994C145.2 22.7576 145.558 22.3994 146 22.3994Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M173.099 66.4898C173.314 66.8754 173.176 67.3629 172.791 67.5785L146.391 82.3399C146.005 82.5555 145.518 82.4177 145.302 82.032C145.086 81.6464 145.224 81.159 145.61 80.9434L172.01 66.182C172.396 65.9663 172.883 66.1042 173.099 66.4898Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M118.902 66.4898C119.117 66.1042 119.605 65.9663 119.99 66.182L146.39 80.9434C146.776 81.159 146.914 81.6464 146.698 82.032C146.483 82.4177 145.995 82.5555 145.61 82.3399L119.21 67.5785C118.824 67.3629 118.686 66.8754 118.902 66.4898Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M145.587 22.5149C145.965 22.2863 146.456 22.4076 146.685 22.7857L173.085 66.4664C173.314 66.8445 173.192 67.3363 172.814 67.5649C172.436 67.7934 171.944 67.6721 171.716 67.294L145.316 23.6133C145.087 23.2352 145.208 22.7434 145.587 22.5149Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M146 22.3994C146.442 22.3994 146.8 22.7576 146.8 23.1994V81.6415C146.8 82.0833 146.442 82.4415 146 82.4415C145.558 82.4415 145.2 82.0833 145.2 81.6415V23.1994C145.2 22.7576 145.558 22.3994 146 22.3994Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M146.414 22.5149C146.792 22.7434 146.913 23.2352 146.685 23.6133L120.285 67.294C120.056 67.6721 119.564 67.7934 119.186 67.5649C118.808 67.3363 118.687 66.8445 118.915 66.4664L145.315 22.7857C145.544 22.4076 146.036 22.2863 146.414 22.5149Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-7\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M259.357 66.9968L245.998 45.2093L232.639 23.4219L237.432 52.5829L242.226 81.7471L250.792 74.3736L259.357 66.9968Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M242.227 81.7471L237.433 52.5829L232.639 23.4219L222.245 50.3068L211.848 77.195L227.039 79.471L242.227 81.7471Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M242.227 81.7471L237.433 52.5829L232.639 23.4219L222.245 50.3068L211.848 77.195L227.039 79.471L242.227 81.7471Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M211.848 77.195L222.245 50.3068L232.639 23.4219L221.422 41.5258L210.202 59.6331L211.025 68.414L211.848 77.195Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M211.848 77.195L222.245 50.3068L232.639 23.4219L221.422 41.5258L210.202 59.6331L211.025 68.414L211.848 77.195Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M233.062 22.5196C232.938 22.4428 232.793 22.3993 232.641 22.3994C232.575 22.3994 232.509 22.4076 232.446 22.4234C232.345 22.4485 232.253 22.492 232.173 22.5497C232.083 22.614 232.006 22.6974 231.949 22.7969L209.327 59.2211C209.254 59.3338 209.21 59.4652 209.202 59.605C209.199 59.6451 209.2 59.6859 209.204 59.7271L210.86 77.4238C210.88 77.7534 211.104 78.0406 211.422 78.1388C211.465 78.152 211.509 78.1618 211.554 78.1677L242.197 82.7603C242.32 82.7787 242.44 82.7681 242.551 82.7337C242.606 82.717 242.659 82.6943 242.709 82.6657C242.722 82.6585 242.734 82.6511 242.746 82.6434C242.781 82.6213 242.814 82.5967 242.844 82.5698L260.11 67.7017C260.413 67.4519 260.493 67.0104 260.282 66.6661L260.273 66.6525L233.334 22.8002C233.296 22.7352 233.25 22.6764 233.197 22.6251C233.155 22.5847 233.11 22.5494 233.062 22.5196ZM210.822 59.8461L212.139 73.9193L228.8 30.8984L210.822 59.8461ZM241.348 81.0152L212.766 76.7315L232.327 26.2225L241.348 81.0152ZM234.092 27.0906L242.874 80.4328L258.562 66.9231L234.092 27.0906Z\" fill=\"black\"/>\n          </g>\n          <g id=\"ma5p20701-item-8\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M344.992 60.0141L333.495 41.7154L321.998 23.4199L333.495 49.1392L344.992 74.8618V67.438V60.0141Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M344.992 60.0141L333.495 41.7154L321.998 23.4199L333.495 49.1392L344.992 74.8618V67.438V60.0141Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M344.992 74.8618L333.495 49.1392L321.998 23.4199V52.8528V82.2856L333.495 78.5721L344.992 74.8618Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M321.998 82.2856V52.8528V23.4199L310.504 49.1392L299.007 74.8618L310.504 78.5721L321.998 82.2856Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M321.998 82.2856V52.8528V23.4199L310.504 49.1392L299.007 74.8618L310.504 78.5721L321.998 82.2856Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M299.007 74.8618L310.504 49.1392L321.998 23.4199L310.504 41.7154L299.007 60.0141V67.438V74.8618Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M299.007 74.8618L310.504 49.1392L321.998 23.4199L310.504 41.7154L299.007 60.0141V67.438V74.8618Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M322.277 22.4496C322.33 22.4691 322.38 22.494 322.426 22.5235C322.489 22.5634 322.545 22.6111 322.594 22.6648C322.658 22.7367 322.708 22.8187 322.743 22.9064C322.782 23.0048 322.801 23.1109 322.798 23.2182V81.4136L344.4 74.4414V60.0434C344.4 59.6015 344.758 59.2434 345.2 59.2434C345.642 59.2434 346 59.6015 346 60.0434V75.6063L322.263 83.2676L322.243 83.2745L322.225 83.2799L321.998 83.3532L321.766 83.2783C321.757 83.2755 321.748 83.2725 321.739 83.2693L298 75.6063V75.0234V60.0434C298 60.0427 298 60.042 298 60.0414C298 59.9979 298.004 59.9543 298.011 59.911C298.029 59.7998 298.071 59.6963 298.13 59.6056L321.321 22.7733C321.324 22.7695 321.326 22.7658 321.329 22.7621C321.341 22.7428 321.354 22.7241 321.368 22.7062C321.524 22.5074 321.759 22.3994 321.999 22.3994C322.093 22.3994 322.187 22.4158 322.277 22.4496ZM316.642 33.2087L299.6 60.2743V71.2791L316.642 33.2087ZM299.895 74.5366L321.198 26.9449V81.4137L299.895 74.5366Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M321.381 22.6904C321.422 22.6411 321.469 22.5963 321.521 22.5573C321.583 22.5112 321.652 22.4739 321.726 22.4472C321.814 22.415 321.906 22.3994 321.998 22.3994C322.041 22.3994 322.083 22.4028 322.125 22.4096C322.193 22.4204 322.257 22.4396 322.318 22.4661C322.399 22.5013 322.474 22.55 322.541 22.6113C322.595 22.6612 322.643 22.7193 322.683 22.7847L345.877 59.6169C346.112 59.9908 346 60.4848 345.626 60.7202C345.252 60.9556 344.758 60.8434 344.523 60.4695L327.356 33.2086L345.93 74.697C346.111 75.1002 345.93 75.5735 345.527 75.754C345.124 75.9346 344.65 75.754 344.47 75.3507L322.798 26.9439V52.5547C322.798 52.9965 322.44 53.3547 321.998 53.3547C321.556 53.3547 321.198 52.9965 321.198 52.5547V23.2003V23.2001C321.198 23.2001 321.198 23.2001 321.198 23.2001V23.1996C321.198 23.0061 321.267 22.8287 321.381 22.6904Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397L7.99674 60C7.99674 54.6383 7.99707 49.1751 7.99707 44L7.99713 44.1603Z\" fill=\"white\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44V44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397V60H5.99713V59.8397C5.99713 58.964 5.61444 58.1319 4.94951 57.562L1.11794 54.2778C-0.278896 53.0805 -0.278896 50.9195 1.11794 49.7222L4.94951 46.438C5.61444 45.8681 5.99713 45.036 5.99713 44.1603V44H7.99713Z\" fill=\"#C3CAD1\"/>\n          </g>\n          <g id=\"ma5p20701-item-13\" cursor=\"pointer\">\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M410 78.7662C421.974 78.7662 431.811 73.4187 432.9 66.5871C433.031 65.767 432.784 64.9453 432.372 64.2239L410.517 25.9098C410.288 25.5079 409.709 25.5079 409.48 25.9098L387.628 64.224C387.216 64.9453 386.969 65.7669 387.1 66.587C388.189 73.4186 398.026 78.7662 410 78.7662Z\" fill=\"#8BD5FF\"/>\n            <path d=\"M410 78.7662C421.974 78.7662 431.811 73.4187 432.9 66.5871C433.031 65.767 432.784 64.9453 432.372 64.2239L410.517 25.9098C410.288 25.5079 409.709 25.5079 409.48 25.9098L387.628 64.224C387.216 64.9453 386.969 65.7669 387.1 66.587C388.189 73.4186 398.026 78.7662 410 78.7662Z\" fill=\"url(#paint0_linear_4657_44826)\" fill-opacity=\"0.2\"/>\n            <path d=\"M410 78.7662C421.974 78.7662 431.811 73.4187 432.9 66.5871C433.031 65.767 432.784 64.9453 432.372 64.2239L410.517 25.9098C410.288 25.5079 409.709 25.5079 409.48 25.9098L387.628 64.224C387.216 64.9453 386.969 65.7669 387.1 66.587C388.189 73.4186 398.026 78.7662 410 78.7662Z\" stroke=\"black\" stroke-width=\"1.6\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397L7.99674 60C7.99674 54.6383 7.99707 49.1751 7.99707 44L7.99713 44.1603Z\" fill=\"white\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44V44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397V60H5.99713V59.8397C5.99713 58.964 5.61444 58.1319 4.94951 57.562L1.11794 54.2778C-0.278896 53.0805 -0.278896 50.9195 1.11794 49.7222L4.94951 46.438C5.61444 45.8681 5.99713 45.036 5.99713 44.1603V44H7.99713Z\" fill=\"#C3CAD1\"/>\n            <defs>\n            <linearGradient id=\"paint0_linear_4657_44826\" x1=\"415.5\" y1=\"51.1542\" x2=\"392\" y2=\"51.1499\" gradientUnits=\"userSpaceOnUse\">\n            <stop stop-opacity=\"0\"/>\n            <stop offset=\"1\"/>\n            </linearGradient>\n            </defs>\n          </g>\n        </svg>\n      </div>\n      <div\n        style=\"position: absolute; width: 300%; height: 33%; bottom:0; left: 110%;\"\n        id=\"ma5p20701-item-group-3\" class=\"ma5p20701-item-group hidden\"\n      >\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 462 104\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" fill=\"white\"/>\n          <rect x=\"7\" y=\"1\" width=\"454\" height=\"102\" rx=\"11\" stroke=\"#C3CAD1\" stroke-width=\"2\"/>\n\n          <g id=\"ma5p20701-item-9\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"18.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M81.7648 61.3558L68.4103 26.2295L52.1367 36.3359L49.2148 81.5685L81.7648 61.3558Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M81.7648 61.3558L68.4103 26.2295L52.1367 36.3359L49.2148 81.5685L81.7648 61.3558Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M49.2152 81.5683L52.1371 36.3356L44.6209 23.4014L34.1855 55.6998L49.2152 81.5683Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M49.2152 81.5683L52.1371 36.3356L44.6209 23.4014L34.1855 55.6998L49.2152 81.5683Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M52.1363 36.3356L60.2717 31.2824L68.4099 26.2293L56.515 24.8167L44.6201 23.4014L48.3768 29.8699L52.1363 36.3356Z\" fill=\"#FC9AD0\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.7819 22.7756C43.7436 22.8367 43.7133 22.9037 43.6925 22.9752L33.2413 55.4418C33.2332 55.466 33.2263 55.4906 33.2206 55.5155C33.2068 55.5755 33.2001 55.6357 33.2002 55.6952C33.2002 55.8317 33.2351 55.9699 33.3086 56.0964L48.4737 82.1944C48.6805 82.5503 49.1197 82.6872 49.4876 82.5248C49.525 82.5084 49.5609 82.4891 49.5951 82.4674L82.4227 62.0793C82.7623 61.8684 82.889 61.4446 82.7374 61.0877L69.3693 25.8039C69.359 25.7751 69.347 25.7465 69.3331 25.7185C69.2873 25.6251 69.225 25.544 69.1512 25.4776C69.1015 25.4327 69.0469 25.3948 68.9889 25.3642C68.9739 25.3563 68.9586 25.3489 68.9431 25.3419C68.9254 25.334 68.9073 25.3266 68.8889 25.3199C68.8242 25.2964 68.7564 25.281 68.6871 25.2748L44.5732 22.4075C44.5353 22.402 44.4974 22.3994 44.4597 22.3994C44.3233 22.3994 44.1851 22.4343 44.0586 22.5078C43.9419 22.5756 43.8487 22.6685 43.7819 22.7756ZM66.2535 26.5967L45.9572 24.1833L52.368 35.2188L66.2535 26.5967ZM34.871 55.6006L44.6715 25.1554L51.2765 36.5251L48.5363 79.1175L34.871 55.6006ZM50.064 80.2927L81.0188 61.0677L68.2116 27.2642L52.8624 36.7951L50.064 80.2927Z\" fill=\"black\"/>\n          </g>\n\n          <g id=\"ma5p20701-item-10\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"106.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M146 82.3124V37.3654L132.099 29.5938L118.2 66.7664L146 82.3124Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M146 82.3124V37.3654L132.099 29.5938L118.2 66.7664L146 82.3124Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M173.8 66.7664L159.901 29.5938L146 37.3654V82.3124L173.8 66.7664Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M173.8 66.7664L159.901 29.5938L146 37.3654V82.3124L173.8 66.7664Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M159.901 29.5937L146 21.8193L132.099 29.5937L146 37.3654L159.901 29.5937Z\" fill=\"#FC9AD0\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M146.42 20.9186C146.331 20.864 146.233 20.8273 146.13 20.8105C146.087 20.8033 146.043 20.7998 146 20.7998C145.957 20.7998 145.913 20.8033 145.87 20.8105C145.768 20.8273 145.669 20.864 145.58 20.9186L131.563 28.7579C131.396 28.8464 131.259 28.9942 131.188 29.1852L117.256 66.5588C117.218 66.6545 117.2 66.7543 117.2 66.853C117.2 66.9213 117.209 66.9887 117.226 67.0537C117.264 67.2027 117.346 67.3404 117.464 67.4471C117.51 67.4893 117.563 67.5264 117.62 67.5571L145.586 83.1965C145.711 83.2722 145.856 83.3122 146.002 83.3119C146.053 83.3117 146.105 83.3067 146.156 83.2965C146.235 83.281 146.309 83.2539 146.378 83.2171C146.39 83.2106 146.402 83.2037 146.414 83.1965L174.37 67.5627C174.723 67.3789 174.892 66.9565 174.75 66.5741L160.813 29.1852C160.741 28.9938 160.604 28.8459 160.437 28.7574L146.42 20.9186ZM145.335 22.8888L146 22.5169L158.424 29.4647L146 36.4126L145.603 36.1904L145.335 22.8888ZM145.335 22.8889L145.6 36.1889L133.577 29.4647L145.335 22.8889ZM145.2 81.1477L118.99 66.4901L132.361 30.6182L145.2 37.7984V81.1477ZM146.8 37.7983V81.1474L173.011 66.4899L159.639 30.6181L146.8 37.7983Z\" fill=\"black\"/>\n          </g>\n\n          <g id=\"ma5p20701-item-11\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"194.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M245.587 29.6835L235.351 22.6152L220.166 25.8756L221.019 34.9568L236.73 37.3129L245.587 29.6835Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M259.405 66.2808L245.587 29.6836L236.729 37.313L241.687 81.5368L259.405 66.2808Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M259.405 66.2808L245.587 29.6836L236.729 37.313L241.687 81.5368L259.405 66.2808Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M241.687 81.5369L236.729 37.3131L221.018 34.957L210.265 76.8302L241.687 81.5369Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M241.687 81.5369L236.729 37.3131L221.018 34.957L210.265 76.8302L241.687 81.5369Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M210.265 76.8304L221.018 34.9572L220.166 25.876L208.562 58.6625L210.265 76.8304Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M210.265 76.8304L221.018 34.9572L220.166 25.876L208.562 58.6625L210.265 76.8304Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M235.223 23.2545L220.896 26.3287L221.635 34.1849L236.54 36.4183L244.439 29.6169L235.223 23.2545ZM219.849 24.9171C219.657 24.9626 219.496 25.0747 219.387 25.2236C219.338 25.2907 219.3 25.3655 219.273 25.4456L207.654 58.4028C207.619 58.4928 207.6 58.5903 207.6 58.6914C207.6 58.7192 207.601 58.7469 207.604 58.7743L209.313 77.0247C209.33 77.3991 209.609 77.7214 209.994 77.779L241.634 82.5176C241.643 82.5191 241.653 82.5205 241.663 82.5217C241.675 82.523 241.686 82.5241 241.698 82.525C241.708 82.5258 241.718 82.5264 241.729 82.5268C241.924 82.5342 242.122 82.4708 242.281 82.3336L260.122 66.9713C260.393 66.7376 260.47 66.3614 260.335 66.049L246.504 29.2894C246.48 29.2209 246.448 29.1549 246.405 29.0932C246.381 29.0582 246.354 29.0248 246.324 28.9936L246.312 28.9816C246.272 28.9418 246.229 28.907 246.184 28.8772L235.858 21.7487C235.829 21.728 235.798 21.7092 235.767 21.6925C235.675 21.6439 235.577 21.6147 235.478 21.6041C235.446 21.6006 235.413 21.5992 235.38 21.5997C235.322 21.6007 235.265 21.6079 235.209 21.621L219.871 24.9122C219.864 24.9137 219.857 24.9153 219.849 24.9171ZM209.213 58.7926L219.577 29.3947L220.087 34.817L210.48 72.3274L209.213 58.7926ZM211.107 76.3279L240.847 80.7819L236.057 37.9638L221.492 35.7813L211.107 76.3279ZM242.384 80.1331L237.626 37.5949L245.4 30.9005L258.654 66.124L242.384 80.1331Z\" fill=\"black\"/>\n          </g>\n\n\n          <g id=\"ma5p20701-item-12\" cursor=\"pointer\" class=\"hover-dim\">\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"282.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M345.039 73.0579L333.518 33.7676L321.999 37.4858V80.4944L345.039 73.0579Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M345.039 73.0579L333.518 33.7676L321.999 37.4858V80.4944L345.039 73.0579Z\" fill=\"black\" fill-opacity=\"0.2\"/>\n            <path d=\"M333.518 26.3312L321.999 22.6104L310.48 26.3312V33.7677L321.999 37.486L333.518 33.7677V26.3312Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M345.039 58.1823L333.518 26.3311V33.7675L345.039 73.0579V58.1823Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M345.039 58.1823L333.518 26.3311V33.7675L345.039 73.0579V58.1823Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n            <path d=\"M321.999 80.4944V37.4858L310.481 33.7676L298.962 73.0579L321.999 80.4944Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M321.999 80.4944V37.4858L310.481 33.7676L298.962 73.0579L321.999 80.4944Z\" fill=\"black\" fill-opacity=\"0.3\"/>\n            <path d=\"M298.962 73.0579L310.481 33.7675V26.3311L298.962 58.1823V73.0579Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M298.962 73.0579L310.481 33.7675V26.3311L298.962 58.1823V73.0579Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M321.731 21.6471C321.906 21.5903 322.095 21.5903 322.271 21.647L333.841 25.3813C333.851 25.3848 333.862 25.3883 333.872 25.3921C334.11 25.461 334.313 25.6389 334.403 25.8896L345.953 57.9477C345.99 58.0509 346.005 58.1567 346 58.2598V73.1588C346.001 73.186 346.001 73.2131 346 73.24V73.7813L345.469 73.9524C345.455 73.9576 345.44 73.9625 345.425 73.9669L345.423 73.9673L322.27 81.4413C322.254 81.4469 322.238 81.452 322.222 81.4567L322 81.5284L321.773 81.4551C321.765 81.4529 321.758 81.4505 321.75 81.4481C321.745 81.4465 321.74 81.4448 321.735 81.4431L298.562 73.9627L298.546 73.9576L298 73.7813V73.1995V73.1992V58.219C298 58.2189 298 58.2187 298 58.2186C298 58.1132 298.02 58.0126 298.057 57.9204L309.6 25.8895C309.691 25.6368 309.897 25.458 310.137 25.3904C310.146 25.3873 310.155 25.3842 310.164 25.3814L321.731 21.6471ZM309.554 30.7378L299.6 58.3592V67.6121L309.554 33.5631V30.7378ZM321.2 79.589L299.786 72.6767L310.89 34.6946L321.2 38.0231V79.589ZM322.8 38.0237V79.5888L344.214 72.6763L333.113 34.695L322.8 38.0237ZM344.4 58.3562V67.6073L334.451 33.5675V30.7423L344.4 58.3562ZM322.001 23.2411L311.154 26.7429V33.0985L322.001 36.6003L332.851 33.0984V26.743L322.001 23.2411Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397L7.99674 60C7.99674 54.6383 7.99707 49.1751 7.99707 44L7.99713 44.1603Z\" fill=\"white\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44V44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397V60H5.99713V59.8397C5.99713 58.964 5.61444 58.1319 4.94951 57.562L1.11794 54.2778C-0.278896 53.0805 -0.278896 50.9195 1.11794 49.7222L4.94951 46.438C5.61444 45.8681 5.99713 45.036 5.99713 44.1603V44H7.99713Z\" fill=\"#C3CAD1\"/>\n          </g>\n\n          <g id=\"ma5p20701-item-15\" cursor=\"pointer\">\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n            <rect x=\"370.5\" y=\"12.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n            <path d=\"M410 80.2024C421.557 80.2024 431.124 75.3886 432.755 69.1179C433.076 67.8833 432.809 66.5943 432.433 65.3752L422.011 31.5566C422.011 35.7908 416.634 39.2233 410 39.2233C403.366 39.2233 397.989 35.7908 397.989 31.5566L387.567 65.3752C387.191 66.5943 386.924 67.8833 387.245 69.1179C388.876 75.3886 398.443 80.2024 410 80.2024Z\" fill=\"#FC9AD0\"/>\n            <path d=\"M410 80.2024C421.557 80.2024 431.124 75.3886 432.755 69.1179C433.076 67.8833 432.809 66.5943 432.433 65.3752L422.011 31.5566C422.011 35.7908 416.634 39.2233 410 39.2233C403.366 39.2233 397.989 35.7908 397.989 31.5566L387.567 65.3752C387.191 66.5943 386.924 67.8833 387.245 69.1179C388.876 75.3886 398.443 80.2024 410 80.2024Z\" fill=\"url(#paint0_linear_4657_45011)\" fill-opacity=\"0.3\"/>\n            <path d=\"M410 80.2024C421.557 80.2024 431.124 75.3886 432.755 69.1179C433.076 67.8833 432.809 66.5943 432.433 65.3752L422.011 31.5566C422.011 35.7908 416.634 39.2233 410 39.2233C403.366 39.2233 397.989 35.7908 397.989 31.5566L387.567 65.3752C387.191 66.5943 386.924 67.8833 387.245 69.1179C388.876 75.3886 398.443 80.2024 410 80.2024Z\" stroke=\"black\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>\n            <path d=\"M422.011 31.5563C422.011 35.7905 416.634 39.223 410 39.223C403.367 39.223 397.989 35.7905 397.989 31.5563C397.989 27.3221 403.367 23.8896 410 23.8896C416.634 23.8896 422.011 27.3221 422.011 31.5563Z\" fill=\"#FC9AD0\" stroke=\"black\" stroke-width=\"1.6\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397L7.99674 60C7.99674 54.6383 7.99707 49.1751 7.99707 44L7.99713 44.1603Z\" fill=\"white\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99713 44V44.1603C7.99713 45.6199 7.35932 47.0066 6.25109 47.9565L2.41952 51.2407C1.95391 51.6398 1.95391 52.3602 2.41952 52.7593L6.25109 56.0435C7.35932 56.9934 7.99713 58.3801 7.99713 59.8397V60H5.99713V59.8397C5.99713 58.964 5.61444 58.1319 4.94951 57.562L1.11794 54.2778C-0.278896 53.0805 -0.278896 50.9195 1.11794 49.7222L4.94951 46.438C5.61444 45.8681 5.99713 45.036 5.99713 44.1603V44H7.99713Z\" fill=\"#C3CAD1\"/>\n            <defs>\n            <linearGradient id=\"paint0_linear_4657_45011\" x1=\"425.333\" y1=\"55.8795\" x2=\"395.5\" y2=\"55.8795\" gradientUnits=\"userSpaceOnUse\">\n            <stop stop-opacity=\"0\"/>\n            <stop offset=\"1\"/>\n            </linearGradient>\n            </defs>\n          </g>\n        </svg>\n      </div>\n    ";const element1=util_getElement('ma5p20701-item-group-1');const element2=util_getElement('ma5p20701-item-group-2');const element3=util_getElement('ma5p20701-item-group-3');util_registerEvent('ma5p20701-tab-1','pointerup',()=>{element1.classList.toggle('hidden');element2.classList.add('hidden');element3.classList.add('hidden');});util_registerEvent('ma5p20701-tab-2','pointerup',()=>{element2.classList.toggle('hidden');element1.classList.add('hidden');element3.classList.add('hidden');});util_registerEvent('ma5p20701-tab-3','pointerup',()=>{element3.classList.toggle('hidden');element1.classList.add('hidden');element2.classList.add('hidden');});}}class MA5P20701ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 300\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 55)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uAC01\uAE30\uB465</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 155)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uAC01\uBFD4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 255)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uAC01\uBFD4\uB300</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA5P21001Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 612\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"606\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"606\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        \n        <g id=\"ma5p21001-item-1\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"24\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M69.8182 36.3633H40V91.636H69.8182V88.7269H42.9091V39.2724H69.8182V36.3633Z\" fill=\"black\"/>\n          <path d=\"M72 32V95.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n\n        <g id=\"ma5p21001-item-2\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"120\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.8182 135.992L38.8047 184.728H69.8182V181.819H44.1041L69.8182 141.411V135.992Z\" fill=\"black\"/>\n          <path d=\"M72 129V192.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n\n        <g id=\"ma5p21001-item-3\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"216\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.8177 226.918C54.0873 227.304 41.4541 240.177 41.4541 256C41.4541 271.823 54.0873 284.696 69.8177 285.082V282.172C55.6942 281.787 44.3632 270.217 44.3632 256C44.3632 241.783 55.6942 230.213 69.8177 229.828V226.918Z\" fill=\"black\"/>\n          <path d=\"M72 224V287.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n\n        <g id=\"ma5p21001-item-4\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"312\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.8179 324.444L39.2803 352L69.8179 379.555V375.636L43.6289 352L69.8179 328.363V324.444Z\" fill=\"black\"/>\n          <path d=\"M72 320V383.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n\n        <g id=\"ma5p21001-item-5\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"408\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"408.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.8182 420.395L40 444.392V475.636H69.8182V472.727H42.9091V445.79L69.8182 424.129V420.395Z\" fill=\"black\"/>\n          <path d=\"M72 416V479.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n\n        <g id=\"ma5p21001-item-6\" cursor=\"pointer\">\n          <rect x=\"16\" y=\"504\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"504.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.7995 518.546H69.8183V521.455H54.8371L38.4404 566.546H69.8183V569.455H34.2871L52.7995 518.546Z\" fill=\"black\"/>\n          <path d=\"M72 512V575.5\" stroke=\"#BCC1CC\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/>\n        </g>\n      </svg>\n    ";}}class MA5P21001ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 10)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC6D0\uAE30\uB465</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 110)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC6D0\uBFD4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 210)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uAD6C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 310)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uD68C\uC804\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 400)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uD68C\uC804\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 500)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC6D0\uBFD4\uB300</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA5P20901Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 516\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"510\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"510\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        <g id=\"ma5p20901-item-1\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"24\" y=\"32\" width=\"64\" height=\"64\" fill=\"url(#pattern0_3570_7971)\"/>\n        </g>\n        <g id=\"ma5p20901-item-2\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"28\" y=\"132\" width=\"56\" height=\"56\" fill=\"url(#pattern1_3570_7971)\"/>\n        </g>\n        <g id=\"ma5p20901-item-3\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"24\" y=\"224.15\" width=\"64\" height=\"63.6995\" fill=\"url(#pattern2_3570_7971)\"/>\n        </g>\n        <g id=\"ma5p20901-item-4\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"25.501\" y=\"320\" width=\"60.9983\" height=\"64\" fill=\"url(#pattern3_3570_7971)\"/>\n        </g>\n        <g id=\"ma5p20901-item-5\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"408.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"408.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"28.6113\" y=\"416\" width=\"54.7765\" height=\"64\" fill=\"url(#pattern4_3570_7971)\"/>\n        </g>\n        <defs>\n        <pattern id=\"pattern0_3570_7971\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n        <use xlink:href=\"#image0_3570_7971\" transform=\"scale(0.00164474)\"/>\n        </pattern>\n        <pattern id=\"pattern1_3570_7971\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n        <use xlink:href=\"#image1_3570_7971\" transform=\"scale(0.00186916)\"/>\n        </pattern>\n        <pattern id=\"pattern2_3570_7971\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n        <use xlink:href=\"#image2_3570_7971\" transform=\"scale(0.00156495 0.00157233)\"/>\n        </pattern>\n        <pattern id=\"pattern3_3570_7971\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n        <use xlink:href=\"#image3_3570_7971\" transform=\"scale(0.00175747 0.00167504)\"/>\n        </pattern>\n        <pattern id=\"pattern4_3570_7971\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n        <use xlink:href=\"#image4_3570_7971\" transform=\"scale(0.00171821 0.00147059)\"/>\n        </pattern>\n        <image id=\"image0_3570_7971\" width=\"608\" height=\"608\" xlink:href=\"data:image/png;base64,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\"/>\n        <image id=\"image1_3570_7971\" width=\"535\" height=\"535\" xlink:href=\"data:image/png;base64,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\"/>\n        <image id=\"image2_3570_7971\" width=\"639\" height=\"636\" xlink:href=\"data:image/png;base64,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\"/>\n        <image id=\"image3_3570_7971\" width=\"569\" height=\"597\" xlink:href=\"data:image/png;base64,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\"/>\n        <image id=\"image4_3570_7971\" width=\"582\" height=\"680\" xlink:href=\"data:image/png;base64,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\"/>\n        </defs>\n      </svg>\n    ";}}class MA5P20901ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 50)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC0AC\uBA74\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 150)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC721\uBA74\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 250)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uD314\uBA74\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 350)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC2ED\uC774\uBA74\uCCB4</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 450)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC774\uC2ED\uBA74\uCCB4</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class Trashcan extends HTMLElement{constructor(){super();}connectedCallback(){this.innerHTML="\n    <svg id=\"codnut-math-trashcan\" width=\"100%\" height=\"100%\" viewBox=\"0 0 84 84\" class=\"cursor-pointer hover-dim\" fill=\"white\">\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"78\" rx=\"23\"/>\n      <rect x=\"1\" y=\"1\" width=\"78\" height=\"78\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <rect x=\"16\" y=\"16\" width=\"48\" height=\"48\" rx=\"16\"/>\n      <path d=\"M43.1002 48L43.1 35L44.9 34.9999L44.9002 47.9999L43.1002 48Z\" fill=\"black\"/>\n      <path d=\"M35.1 48V35H36.9V48H35.1Z\" fill=\"black\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.1463 24C36.9826 24 35.9239 24.673 35.4299 25.7267L34.3643 28H25V30H27.0392L27.8856 51.1599C27.9714 53.3051 29.7355 55 31.8824 55H48.1176C50.2645 55 52.0286 53.3051 52.1144 51.1599L52.9608 30H55V28H45.6357L44.5701 25.7267C44.0761 24.673 43.0174 24 41.8537 24H38.1463ZM43.4268 28L42.7591 26.5755C42.5945 26.2243 42.2416 26 41.8537 26H38.1463C37.7584 26 37.4055 26.2243 37.2409 26.5755L36.5732 28H43.4268ZM29.0408 30H50.9592L50.116 51.0799C50.0731 52.1525 49.1911 53 48.1176 53H31.8824C30.8089 53 29.9269 52.1525 29.884 51.0799L29.0408 30Z\" fill=\"black\"/>\n    </svg>\n    ";}}class MA4P18301Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 920\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"914\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"914\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        \n        <g cursor=\"pointer\" id=\"ma4p18301-polygon-regular-3\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.2833 42.9733L54.2472 43.036C54.2589 43.0149 54.2709 42.994 54.2833 42.9733ZM57.7517 43.034C57.7407 43.0142 57.7295 42.9947 57.7179 42.9753L57.7517 43.034ZM60.5537 47.9071C61.4552 46.8573 62 45.4923 62 44C62 40.6863 59.3137 38 56 38C52.6863 38 50 40.6863 50 44C50 45.4923 50.5448 46.8573 51.4463 47.9071L34.0865 78.0981C33.7341 78.0337 33.371 78 33 78C29.6863 78 27 80.6863 27 84C27 87.3137 29.6863 90 33 90C35.6125 90 37.835 88.3304 38.6586 85.9999H73.3414C74.165 88.3304 76.3875 90 79 90C82.3137 90 85 87.3137 85 84C85 80.6863 82.3137 78 79 78C78.629 78 78.2659 78.0337 77.9135 78.0981L60.5537 47.9071ZM54.9135 49.9019C55.2659 49.9663 55.629 50 56 50C56.371 50 56.7342 49.9663 57.0866 49.9019L74.4464 80.0928C73.9685 80.6493 73.5908 81.2943 73.3414 81.9999H38.6586C38.4092 81.2943 38.0315 80.6493 37.5536 80.0929L54.9135 49.9019ZM80.7517 83.034C80.7407 83.0142 80.7295 82.9947 80.7179 82.9753L80.7517 83.034ZM79 86L78.9842 85.9999H79.0158L79 86ZM31.2833 82.9733C31.2709 82.994 31.2589 83.0149 31.2472 83.036L31.2833 82.9733ZM33.0158 85.9999L33 86L32.9842 85.9999H33.0158Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56 46C57.1046 46 58 45.1046 58 44C58 42.8954 57.1046 42 56 42C54.8954 42 54 42.8954 54 44C54 45.1046 54.8954 46 56 46ZM35 84C35 85.1046 34.1046 86 33 86C31.8954 86 31 85.1046 31 84C31 82.8954 31.8954 82 33 82C34.1046 82 35 82.8954 35 84ZM81 84C81 85.1046 80.1046 86 79 86C77.8954 86 77 85.1046 77 84C77 82.8954 77.8954 82 79 82C80.1046 82 81 82.8954 81 84Z\" fill=\"#FF9999\"/>\n        </g>\n\n        <g cursor=\"pointer\" id=\"ma4p18301-polygon-regular-4\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33 144.659C30.6696 143.835 29 141.612 29 139C29 135.686 31.6863 133 35 133C37.6124 133 39.8349 134.67 40.6586 137H71.3414C72.1651 134.67 74.3876 133 77 133C80.3137 133 83 135.686 83 139C83 141.612 81.3304 143.835 79 144.659V175.341C81.3304 176.165 83 178.388 83 181C83 184.314 80.3137 187 77 187C74.3876 187 72.1651 185.33 71.3414 183H40.6586C39.8349 185.33 37.6124 187 35 187C31.6863 187 29 184.314 29 181C29 178.388 30.6696 176.165 33 175.341V144.659ZM75 175.341C73.2952 175.944 71.944 177.295 71.3414 179H40.6586C40.056 177.295 38.7048 175.944 37 175.341V144.659C38.7048 144.056 40.056 142.705 40.6586 141H71.3414C71.944 142.705 73.2952 144.056 75 144.659V175.341Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35 141C36.1046 141 37 140.105 37 139C37 137.895 36.1046 137 35 137C33.8954 137 33 137.895 33 139C33 140.105 33.8954 141 35 141ZM35 183C36.1046 183 37 182.105 37 181C37 179.895 36.1046 179 35 179C33.8954 179 33 179.895 33 181C33 182.105 33.8954 183 35 183ZM79 139C79 140.105 78.1046 141 77 141C75.8954 141 75 140.105 75 139C75 137.895 75.8954 137 77 137C78.1046 137 79 137.895 79 139ZM77 183C78.1046 183 79 182.105 79 181C79 179.895 78.1046 179 77 179C75.8954 179 75 179.895 75 181C75 182.105 75.8954 183 77 183Z\" fill=\"#FF9999\"/>\n        </g>\n\n        <g cursor=\"pointer\" id=\"ma4p18301-polygon-regular-5\">\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.8531 232.361L54.8102 232.392C54.8244 232.382 54.8387 232.371 54.8531 232.361ZM57.1949 232.396L57.1417 232.358C57.1596 232.37 57.1774 232.383 57.1949 232.396ZM59.4191 238.931C58.4491 239.605 57.2707 240 56 240C54.7293 240 53.5508 239.605 52.5808 238.931L38.6499 248.975C38.8765 249.608 39 250.29 39 251C39 252.961 38.0592 254.702 36.6044 255.797L41.335 272.009C43.8012 272.145 45.8704 273.77 46.6586 276H65.3414C66.1295 273.77 68.1986 272.145 70.6645 272.009L75.3952 255.797C73.9406 254.702 73 252.961 73 251C73 250.29 73.1234 249.608 73.35 248.976L59.4191 238.931ZM61.7595 235.687C61.916 235.152 62 234.586 62 234C62 230.686 59.3137 228 56 228C52.6863 228 50 230.686 50 234C50 234.586 50.0839 235.152 50.2405 235.687L36.1157 245.871C35.2075 245.318 34.141 245 33 245C29.6863 245 27 247.686 27 251C27 254.243 29.5722 256.884 32.7875 256.996L37.4951 273.13C35.9838 274.219 35 275.995 35 278C35 281.314 37.6863 284 41 284C43.6124 284 45.8349 282.33 46.6586 280H65.3414C66.1651 282.33 68.3876 284 71 284C74.3137 284 77 281.314 77 278C77 275.994 76.016 274.219 74.5045 273.129L79.212 256.996C82.4275 256.885 85 254.243 85 251C85 247.686 82.3137 245 79 245C77.8589 245 76.7923 245.319 75.8841 245.872L61.7595 235.687ZM80.9965 250.881L80.619 252.175C80.8586 251.845 81 251.439 81 251C81 250.96 80.9988 250.92 80.9965 250.881ZM31.0034 250.882L31.3802 252.173C31.141 251.844 31 251.438 31 251C31 250.96 31.0012 250.921 31.0034 250.882ZM72.9045 278.613C72.9154 278.579 72.9254 278.544 72.9345 278.51L72.9045 278.613ZM39.0891 278.592L39.071 278.53C39.0767 278.551 39.0828 278.572 39.0891 278.592Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56 236C57.1046 236 58 235.105 58 234C58 232.895 57.1046 232 56 232C54.8954 232 54 232.895 54 234C54 235.105 54.8954 236 56 236ZM33 253C34.1046 253 35 252.105 35 251C35 249.895 34.1046 249 33 249C31.8954 249 31 249.895 31 251C31 252.105 31.8954 253 33 253ZM43 278C43 279.105 42.1046 280 41 280C39.8954 280 39 279.105 39 278C39 276.895 39.8954 276 41 276C42.1046 276 43 276.895 43 278ZM73 278C73 279.105 72.1046 280 71 280C69.8954 280 69 279.105 69 278C69 276.895 69.8954 276 71 276C72.1046 276 73 276.895 73 278ZM81 251C81 252.105 80.1046 253 79 253C77.8954 253 77 252.105 77 251C77 249.895 77.8954 249 79 249C80.1046 249 81 249.895 81 251Z\" fill=\"#FF9999\"/>\n        </g>\n\n        <g cursor=\"pointer\" id=\"ma4p18301-polygon-regular-6\">\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.0349 326.248L54.9684 326.286C54.9903 326.273 55.0124 326.26 55.0349 326.248ZM57.0342 326.288L56.9625 326.246C56.9867 326.26 57.0106 326.274 57.0342 326.288ZM59.899 332.561C58.8503 333.458 57.4885 334 56 334C54.5115 334 53.1496 333.458 52.1009 332.561L40.9197 339.016C40.9725 339.336 41 339.665 41 340C41 342.531 39.4326 344.696 37.2153 345.578V358.422C39.4326 359.304 41 361.469 41 364C41 364.335 40.9725 364.664 40.9197 364.984L52.1008 371.44C53.1495 370.542 54.5115 370 56 370C57.4885 370 58.8504 370.542 59.8991 371.439L71.0803 364.984C71.0275 364.664 71 364.335 71 364C71 361.469 72.5674 359.304 74.7845 358.422V345.578C72.5674 344.696 71 342.531 71 340C71 339.665 71.0275 339.336 71.0803 339.016L59.899 332.561ZM78.7845 358.27V345.73C81.2268 344.97 83 342.692 83 340C83 336.686 80.3137 334 77 334C75.4705 334 74.0748 334.572 73.0151 335.514L61.8999 329.097C61.9657 328.741 62 328.375 62 328C62 324.686 59.3137 322 56 322C52.6863 322 50 324.686 50 328C50 328.375 50.0343 328.741 50.1 329.097L38.9849 335.514C37.9252 334.572 36.5294 334 35 334C31.6863 334 29 336.686 29 340C29 342.692 30.7732 344.97 33.2153 345.73V358.27C30.7732 359.03 29 361.308 29 364C29 367.314 31.6863 370 35 370C36.5294 370 37.9251 369.428 38.9848 368.486L50.1 374.903C50.0343 375.259 50 375.625 50 376C50 379.314 52.6863 382 56 382C59.3137 382 62 379.314 62 376C62 375.625 61.9657 375.259 61.9 374.903L73.0152 368.486C74.0748 369.428 75.4706 370 77 370C80.3137 370 83 367.314 83 364C83 361.308 81.2268 359.03 78.7845 358.27ZM77.3846 365.963C77.8288 365.877 78.2205 365.643 78.5069 365.315L77.3846 365.963ZM78.7845 364.904V363.096C78.9223 363.368 79 363.675 79 364C79 364.325 78.9223 364.632 78.7845 364.904ZM79 340C79 340.325 78.9223 340.632 78.7845 340.904V339.096C78.9223 339.368 79 339.675 79 340ZM78.5071 338.685C78.2206 338.357 77.8287 338.123 77.3842 338.037L78.5071 338.685ZM33.2153 363.096C33.0776 363.368 33 363.675 33 364C33 364.325 33.0776 364.632 33.2153 364.904V363.096ZM34.6153 365.963L33.4933 365.315C33.7796 365.643 34.1712 365.876 34.6153 365.963ZM34.6157 338.037C34.1713 338.123 33.7795 338.357 33.493 338.685L34.6157 338.037ZM33 340C33 339.675 33.0776 339.368 33.2153 339.096V340.904C33.0776 340.632 33 340.325 33 340ZM54.9749 377.718C54.9925 377.728 55.0103 377.738 55.0282 377.748L54.9749 377.718ZM57.0282 377.716L56.9686 377.75C56.9887 377.739 57.0085 377.728 57.0282 377.716Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56 330C57.1046 330 58 329.105 58 328C58 326.895 57.1046 326 56 326C54.8954 326 54 326.895 54 328C54 329.105 54.8954 330 56 330ZM56 378C57.1046 378 58 377.105 58 376C58 374.895 57.1046 374 56 374C54.8954 374 54 374.895 54 376C54 377.105 54.8954 378 56 378ZM37 340C37 341.105 36.1046 342 35 342C33.8954 342 33 341.105 33 340C33 338.895 33.8954 338 35 338C36.1046 338 37 338.895 37 340ZM35 366C36.1046 366 37 365.105 37 364C37 362.895 36.1046 362 35 362C33.8954 362 33 362.895 33 364C33 365.105 33.8954 366 35 366ZM79 340C79 341.105 78.1046 342 77 342C75.8954 342 75 341.105 75 340C75 338.895 75.8954 338 77 338C78.1046 338 79 338.895 79 340ZM77 366C78.1046 366 79 365.105 79 364C79 362.895 78.1046 362 77 362C75.8954 362 75 362.895 75 364C75 365.105 75.8954 366 77 366Z\" fill=\"#FF9999\"/>\n        </g>\n        \n        <rect x=\"16\" y=\"416\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-stroke-width=\"4\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"444.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"444.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 472H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n        </g>\n\n        <g data-stroke-width=\"8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"516.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"516.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 544C28 540.686 30.6863 538 34 538H78C81.3137 538 84 540.686 84 544C84 547.314 81.3137 550 78 550H34C30.6863 550 28 547.314 28 544Z\" fill=\"black\"/>\n        </g>\n\n        <g data-stroke-width=\"4\" data-stroke-dasharray=\"8 8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"588.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"588.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 616H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"8 8\"/>\n        </g>\n\n        <g data-stroke-width=\"2\" data-stroke-opacity=\"0.05\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"660.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"660.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 688H45\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M67 688H84\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M64 680L48 696M64 696L48 680\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </g>\n\n        <rect x=\"16\" y=\"740\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-fill=\"#FFEA7E\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"768\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FFEA7E\"/>\n          <rect x=\"17\" y=\"769\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#8BD5FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"768\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#8BD5FF\"/>\n          <rect x=\"61\" y=\"769\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CEE868\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"812\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CEE868\"/>\n          <rect x=\"17\" y=\"813\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#FF9999\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"812\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FF9999\"/>\n          <rect x=\"61\" y=\"813\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CFA4FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"856\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CFA4FF\"/>\n          <rect x=\"17\" y=\"857\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#fff\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"856\" width=\"36\" height=\"36\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"61\" y=\"857\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n      </svg>\n    ";}}class MA4P18301ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -155)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC0BC\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, -55)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC0AC\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 45)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC624\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 145)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">N\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 270)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,230 L0,230\"  />\n          </g>\n          <g transform=\"translate(40, 115)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC120 \uC18D\uC131</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 580)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,130 L0,130\"  />\n          </g>\n          <g transform=\"translate(40, 65)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBA74 \uC0C9\uC0C1</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA4P19301Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 632\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"626\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"626\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        <g cursor=\"pointer\" id=\"ma4p19301-polygon-regular\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.8925 39.7903C56.6238 39.9245 56.3207 40 56 40C55.6793 40 55.3763 39.9245 55.1077 39.7904L56.0002 39.2914L56.8925 39.7903ZM60.5937 41.86C59.4931 43.1685 57.8437 44 56 44C54.1564 44 52.507 43.1685 51.4064 41.8601L39.5318 48.5H72.4685L60.5937 41.86ZM61.9997 38.0632C61.9999 38.0422 62 38.0211 62 38C62 34.6863 59.3137 32 56 32C52.6863 32 50 34.6863 50 38C50 38.0212 50.0001 38.0423 50.0003 38.0634L36.8634 45.4092C35.8196 44.5299 34.4717 44 33 44C29.6863 44 27 46.6863 27 50C27 52.5186 28.5518 54.6747 30.7515 55.5645V72.4355C28.5518 73.3253 27 75.4814 27 78C27 81.3137 29.6863 84 33 84C34.4717 84 35.8197 83.4701 36.8635 82.5907L50.0003 89.9364C50.0001 89.9576 50 89.9788 50 90C50 93.3137 52.6863 96 56 96C59.3137 96 62 93.3137 62 90C62 89.9789 61.9999 89.9577 61.9997 89.9366L75.1366 82.5908C76.1804 83.4702 77.5283 84 79 84C82.3137 84 85 81.3137 85 78C85 75.4815 83.4483 73.3255 81.2489 72.4357V55.5643C83.4483 54.6745 85 52.5185 85 50C85 46.6863 82.3137 44 79 44C77.5284 44 76.1805 44.5298 75.1367 45.4091L61.9997 38.0632ZM77.2489 72.2596V56.0547L60.1962 85.7114C60.3355 85.8477 60.4681 85.9907 60.5937 86.14L73.1085 79.142C73.0373 78.7723 73 78.3905 73 78C73 75.2955 74.7894 73.0089 77.2489 72.2596ZM74.8038 54.2886C74.0338 53.5351 73.466 52.576 73.189 51.5H38.811C38.534 52.5759 37.9662 53.5351 37.1962 54.2886L54.4037 84.2147C54.912 84.0747 55.4473 84 56 84C56.5527 84 57.088 84.0747 57.5963 84.2147L74.8038 54.2886ZM38.8915 79.1418L51.4065 86.1398C51.5319 85.9907 51.6646 85.8477 51.8038 85.7114L34.7515 56.0552V72.2597C37.2108 73.0091 39 75.2956 39 78C39 78.3904 38.9627 78.7722 38.8915 79.1418Z\" fill=\"black\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56 41C57.6569 41 59 39.6569 59 38C59 36.3431 57.6569 35 56 35C54.3431 35 53 36.3431 53 38C53 39.6569 54.3431 41 56 41ZM56 93C57.6569 93 59 91.6569 59 90C59 88.3431 57.6569 87 56 87C54.3431 87 53 88.3431 53 90C53 91.6569 54.3431 93 56 93ZM36 50C36 51.6569 34.6569 53 33 53C31.3431 53 30 51.6569 30 50C30 48.3431 31.3431 47 33 47C34.6569 47 36 48.3431 36 50ZM33 81C34.6569 81 36 79.6569 36 78C36 76.3431 34.6569 75 33 75C31.3431 75 30 76.3431 30 78C30 79.6569 31.3431 81 33 81ZM82 50C82 51.6569 80.6569 53 79 53C77.3431 53 76 51.6569 76 50C76 48.3431 77.3431 47 79 47C80.6569 47 82 48.3431 82 50ZM79 81C80.6569 81 82 79.6569 82 78C82 76.3431 80.6569 75 79 75C77.3431 75 76 76.3431 76 78C76 79.6569 77.3431 81 79 81Z\" fill=\"#FF9999\"/>\n        </g>\n\n        <rect x=\"16\" y=\"128\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n        \n        <g data-stroke-width=\"4\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"156.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"156.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 184H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n        </g>\n\n        <g data-stroke-width=\"8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"228.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"228.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 256C28 252.686 30.6863 250 34 250H78C81.3137 250 84 252.686 84 256C84 259.314 81.3137 262 78 262H34C30.6863 262 28 259.314 28 256Z\" fill=\"black\"/>\n        </g>\n\n        <g data-stroke-width=\"4\" data-stroke-dasharray=\"8 8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"300.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"300.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 328H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"8 8\"/>\n        </g>\n\n        <g data-stroke-width=\"2\" data-stroke-opacity=\"0.05\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"372.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"372.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 400H45\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M67 400H84\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M64 392L48 408M64 408L48 392\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </g>\n\n        <rect x=\"16\" y=\"452\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-fill=\"#FFEA7E\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"480\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FFEA7E\"/>\n          <rect x=\"17\" y=\"481\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#8BD5FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"480\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#8BD5FF\"/>\n          <rect x=\"61\" y=\"481\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CEE868\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"524\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CEE868\"/>\n          <rect x=\"17\" y=\"525\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#FF9999\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"524\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FF9999\"/>\n          <rect x=\"61\" y=\"525\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CFA4FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"568\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CFA4FF\"/>\n          <rect x=\"17\" y=\"569\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#fff\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"568\" width=\"36\" height=\"36\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"61\" y=\"569\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n      </svg>\n    ";}}class MA4P19301ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n       <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -5)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\" transform=\"translate(0, -30)\">\uC815\uB2E4\uAC01\uD615</text>\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\" transform=\"translate(0, 0)\">(\uB2E4\uAC01\uD615 \uC120\uC758 \uC218\uB97C 3~9\uAE4C\uC9C0 \uC124\uC815</text>\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\" transform=\"translate(0, 30)\">\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.)</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 115)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,230 L0,230\"  />\n          </g>\n          <g transform=\"translate(40, 115)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC120 \uC18D\uC131</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 430)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,130 L0,130\"  />\n          </g>\n          <g transform=\"translate(40, 65)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBA74 \uC0C9\uC0C1</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class HA1P02101Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 180 512\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"178\" height=\"506\" rx=\"15\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"178\" height=\"506\" rx=\"15\" stroke=\"#CFD4E0\" stroke-width=\"2\"/>\n        <g cursor=\"pointer\" data-fill=\"#8CEA2E\" id=\"hap021-1\">\n          <rect x=\"120\" y=\"120\" width=\"40\" height=\"40\" fill=\"#8CEA2E\"/>\n          <rect x=\"120.5\" y=\"120.5\" width=\"39\" height=\"39\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M143.023 148.889H139.484V135.272H139.391L135.5 137.709V134.592L139.695 131.92H143.023V148.889Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#FF7F7E\" id=\"hap021-2\">\n          <path d=\"M20 20H116V116H20V20Z\" fill=\"#FF7F7E\"/>\n          <path d=\"M20.5 20.5H115.5V115.5H20.5V20.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <g transform=\"translate(60, 58)\">\n            <path d=\"M2.04727 14.7059C5.31758 10.3529 6.72674 9.55882 8.02954 9.55882C8.45495 9.55882 8.85377 9.85294 8.85377 10.8529C8.85377 12.6471 6.03545 20.5294 3.08419 20.5294C2.76514 20.5294 2.4195 20.2941 2.4195 19.9706C2.4195 19.1765 3.37666 19.5 3.37666 18.1765C3.37666 17.1765 2.60561 16.7647 1.9675 16.7647C0.771049 16.7647 0 17.9118 0 19.1471C0 20.7353 1.03693 22 3.03102 22C4.25406 22 5.50369 21.5294 6.91285 20.2941C7.44461 21.6471 8.58789 21.9118 9.81093 21.9118C10.7415 21.9118 11.5657 21.7059 12.4431 21.2647C14.1979 20.3529 15.9261 18.5588 17.6544 16.1176L16.7238 15.2353C13.9055 19.1176 11.6455 20.4412 10.3693 20.4412C9.94387 20.4412 9.57164 20.1765 9.57164 19.4706C9.57164 17.7647 11.8848 9.47059 14.9424 9.47059C15.2083 9.47059 15.5805 9.55882 15.5805 9.97059C15.5805 10.6471 14.6233 10.4118 14.6233 11.6765C14.6233 12.6765 15.3146 13.0882 15.9793 13.0882C17.2024 13.0882 18 11.9706 18 10.5882C18 8.91176 16.8035 8 15.0222 8C14.1713 8 12.6558 8.23529 11.3264 9.70588C10.8213 8.85294 10.0768 8.08824 8.69424 8.08824C6.32792 8.08824 4.25406 9.44118 1.03693 13.8529L2.04727 14.7059Z\" fill=\"black\"/>\n            <path d=\"M24.4481 7.09336L24.0641 6.94403C23.7441 7.41336 23.4028 7.52003 22.8268 7.52003H20.4161L22.2081 5.79203C23.5948 4.44803 24.0428 3.61603 24.0428 2.5707C24.0428 1.2267 23.0188 0.245361 21.3548 0.245361C19.5415 0.245361 18.7521 1.0347 18.1548 2.78403L18.6881 3.10403C19.1575 2.08003 19.7761 1.52536 20.5655 1.52536C21.4188 1.52536 22.0801 2.25069 22.0801 3.14669C22.0801 3.78669 21.5041 4.91736 20.4161 6.09069L18.2615 8.39469V8.9067H23.6161L24.4481 7.09336Z\" fill=\"#07090C\"/>\n          </g>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#7FCAFF\" id=\"hap021-3\">\n          <path d=\"M120 20H160V116H120V20Z\" fill=\"#7FCAFF\"/>\n          <path d=\"M120.5 20.5H159.5V115.5H120.5V20.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path transform=\"translate(130, 65)\" d=\"M2.04727 6.70588C5.31758 2.35294 6.72674 1.55882 8.02954 1.55882C8.45495 1.55882 8.85377 1.85294 8.85377 2.85294C8.85377 4.64706 6.03545 12.5294 3.08419 12.5294C2.76514 12.5294 2.4195 12.2941 2.4195 11.9706C2.4195 11.1765 3.37666 11.5 3.37666 10.1765C3.37666 9.17647 2.60561 8.76471 1.9675 8.76471C0.771049 8.76471 0 9.91176 0 11.1471C0 12.7353 1.03693 14 3.03102 14C4.25406 14 5.50369 13.5294 6.91285 12.2941C7.44461 13.6471 8.58789 13.9118 9.81093 13.9118C10.7415 13.9118 11.5657 13.7059 12.4431 13.2647C14.1979 12.3529 15.9261 10.5588 17.6544 8.11765L16.7238 7.23529C13.9055 11.1176 11.6455 12.4412 10.3693 12.4412C9.94387 12.4412 9.57164 12.1765 9.57164 11.4706C9.57164 9.76471 11.8848 1.47059 14.9424 1.47059C15.2083 1.47059 15.5805 1.55882 15.5805 1.97059C15.5805 2.64706 14.6233 2.41176 14.6233 3.67647C14.6233 4.67647 15.3146 5.08824 15.9793 5.08824C17.2024 5.08824 18 3.97059 18 2.58824C18 0.911765 16.8035 0 15.0222 0C14.1713 0 12.6558 0.235294 11.3264 1.70588C10.8213 0.852941 10.0768 0.0882353 8.69424 0.0882353C6.32792 0.0882353 4.25406 1.44118 1.03693 5.85294L2.04727 6.70588Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#7FCAFF\" id=\"hap021-4\">\n          <path d=\"M20 120H116V160H20V120Z\" fill=\"#7FCAFF\"/>\n          <path d=\"M20.5 120.5H115.5V159.5H20.5V120.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path transform=\"translate(60, 135)\" d=\"M2.04727 6.70588C5.31758 2.35294 6.72674 1.55882 8.02954 1.55882C8.45495 1.55882 8.85377 1.85294 8.85377 2.85294C8.85377 4.64706 6.03545 12.5294 3.08419 12.5294C2.76514 12.5294 2.4195 12.2941 2.4195 11.9706C2.4195 11.1765 3.37666 11.5 3.37666 10.1765C3.37666 9.17647 2.60561 8.76471 1.9675 8.76471C0.771049 8.76471 0 9.91176 0 11.1471C0 12.7353 1.03693 14 3.03102 14C4.25406 14 5.50369 13.5294 6.91285 12.2941C7.44461 13.6471 8.58789 13.9118 9.81093 13.9118C10.7415 13.9118 11.5657 13.7059 12.4431 13.2647C14.1979 12.3529 15.9261 10.5588 17.6544 8.11765L16.7238 7.23529C13.9055 11.1176 11.6455 12.4412 10.3693 12.4412C9.94387 12.4412 9.57164 12.1765 9.57164 11.4706C9.57164 9.76471 11.8848 1.47059 14.9424 1.47059C15.2083 1.47059 15.5805 1.55882 15.5805 1.97059C15.5805 2.64706 14.6233 2.41176 14.6233 3.67647C14.6233 4.67647 15.3146 5.08824 15.9793 5.08824C17.2024 5.08824 18 3.97059 18 2.58824C18 0.911765 16.8035 0 15.0222 0C14.1713 0 12.6558 0.235294 11.3264 1.70588C10.8213 0.852941 10.0768 0.0882353 8.69424 0.0882353C6.32792 0.0882353 4.25406 1.44118 1.03693 5.85294L2.04727 6.70588Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#FF9635\" id=\"hap021-5\">\n          <rect x=\"120\" y=\"284\" width=\"40\" height=\"40\" fill=\"#FF9635\"/>\n          <rect x=\"120.5\" y=\"284.5\" width=\"39\" height=\"39\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M139.484 312.889H143.023V295.92H139.695L135.5 298.592V301.709L139.391 299.272H139.484V312.889ZM131.562 304.758V302.518H124.296V304.758H131.562Z\" fill=\"black\" transform=\"translate(5, 0)\" />\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#FFEA7E\" id=\"hap021-6\">\n          <path d=\"M20 184H116V280H20V184Z\" fill=\"#FFEA7E\"/>\n          <path d=\"M20.5 184.5H115.5V279.5H20.5V184.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path transform=\"translate(58, 216)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M31.2729 6.43072L31.6415 6.57408L30.8428 8.31488H25.7023V7.82336L27.7708 5.61152C28.8153 4.48512 29.3682 3.39968 29.3682 2.78528C29.3682 1.92512 28.7333 1.2288 27.9141 1.2288C27.1564 1.2288 26.5625 1.76128 26.1119 2.74432L25.5999 2.43712C26.1733 0.75776 26.9311 0 28.6719 0C30.2693 0 31.2524 0.94208 31.2524 2.23232C31.2524 3.23584 30.8223 4.03456 29.4911 5.3248L27.7708 6.98368H30.085C30.638 6.98368 30.9657 6.88128 31.2729 6.43072ZM10.0473 15.706C13.3176 11.3531 14.7267 10.5589 16.0295 10.5589C16.4549 10.5589 16.8538 10.8531 16.8538 11.8531C16.8538 13.6472 14.0354 21.5295 11.0842 21.5295C10.7651 21.5295 10.4195 21.2942 10.4195 20.9707C10.4195 20.6241 10.6019 20.4904 10.8074 20.3397C11.0727 20.1452 11.3767 19.9224 11.3767 19.1766C11.3767 18.1766 10.6056 17.7648 9.9675 17.7648C8.77105 17.7648 8 18.9119 8 20.1472C8 21.7354 9.03693 23.0001 11.031 23.0001C12.2541 23.0001 13.5037 22.5295 14.9129 21.2942C15.4446 22.6472 16.5879 22.9119 17.8109 22.9119C18.7415 22.9119 19.5657 22.706 20.4431 22.2648C22.1979 21.3531 23.9261 19.5589 25.6544 17.1178L24.7238 16.2354C21.9055 20.1178 19.6455 21.4413 18.3693 21.4413C17.9439 21.4413 17.5716 21.1766 17.5716 20.4707C17.5716 18.7648 19.8848 10.4707 22.9424 10.4707C23.2083 10.4707 23.5805 10.5589 23.5805 10.9707C23.5805 11.2565 23.4097 11.3795 23.2124 11.5217C22.9426 11.7161 22.6233 11.9461 22.6233 12.6766C22.6233 13.6766 23.3146 14.0884 23.9793 14.0884C25.2024 14.0884 26 12.9707 26 11.5884C26 9.91189 24.8035 9.00012 23.0222 9.00012C22.1713 9.00012 20.6558 9.23542 19.3264 10.706C18.8213 9.85306 18.0768 9.08836 16.6942 9.08836C14.3279 9.08836 12.2541 10.4413 9.03693 14.8531L10.0473 15.706ZM7.56157 14.5188V16.7588H0.296387V14.5188H7.56157Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#F7C35F\" id=\"hap021-7\">\n          <path d=\"M120 184H160V280H120V184Z\" fill=\"#F7C35F\"/>\n          <path d=\"M120.5 184.5H159.5V279.5H120.5V184.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <g transform=\"translate(130, 225)\">\n            <path d=\"M6.56157 5.51855V7.75855H0.296387V5.51855H6.56157Z\" fill=\"#07090C\"/>\n            <path d=\"M9.04727 6.70588C12.3176 2.35294 13.7267 1.55882 15.0295 1.55882C15.4549 1.55882 15.8538 1.85294 15.8538 2.85294C15.8538 4.64706 13.0355 12.5294 10.0842 12.5294C9.76514 12.5294 9.4195 12.2941 9.4195 11.9706C9.4195 11.1765 10.3767 11.5 10.3767 10.1765C10.3767 9.17647 9.60561 8.76471 8.9675 8.76471C7.77105 8.76471 7 9.91176 7 11.1471C7 12.7353 8.03693 14 10.031 14C11.2541 14 12.5037 13.5294 13.9129 12.2941C14.4446 13.6471 15.5879 13.9118 16.8109 13.9118C17.7415 13.9118 18.5657 13.7059 19.4431 13.2647C21.1979 12.3529 22.9261 10.5588 24.6544 8.11765L23.7238 7.23529C20.9055 11.1176 18.6455 12.4412 17.3693 12.4412C16.9439 12.4412 16.5716 12.1765 16.5716 11.4706C16.5716 9.76471 18.8848 1.47059 21.9424 1.47059C22.2083 1.47059 22.5805 1.55882 22.5805 1.97059C22.5805 2.64706 21.6233 2.41176 21.6233 3.67647C21.6233 4.67647 22.3146 5.08824 22.9793 5.08824C24.2024 5.08824 25 3.97059 25 2.58824C25 0.911765 23.8035 0 22.0222 0C21.1713 0 19.6558 0.235294 18.3264 1.70588C17.8213 0.852941 17.0768 0.0882353 15.6942 0.0882353C13.3279 0.0882353 11.2541 1.44118 8.03693 5.85294L9.04727 6.70588Z\" fill=\"black\"/>\n          </g>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#F7C35F\" id=\"hap021-8\">\n          <path d=\"M20 284H116V324H20V284Z\" fill=\"#F7C35F\"/>\n          <path d=\"M20.5 284.5H115.5V323.5H20.5V284.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <g transform=\"translate(58, 297)\">\n            <path d=\"M6.56157 5.51855V7.75855H0.296387V5.51855H6.56157Z\" fill=\"#07090C\"/>\n            <path d=\"M9.04727 6.70588C12.3176 2.35294 13.7267 1.55882 15.0295 1.55882C15.4549 1.55882 15.8538 1.85294 15.8538 2.85294C15.8538 4.64706 13.0355 12.5294 10.0842 12.5294C9.76514 12.5294 9.4195 12.2941 9.4195 11.9706C9.4195 11.1765 10.3767 11.5 10.3767 10.1765C10.3767 9.17647 9.60561 8.76471 8.9675 8.76471C7.77105 8.76471 7 9.91176 7 11.1471C7 12.7353 8.03693 14 10.031 14C11.2541 14 12.5037 13.5294 13.9129 12.2941C14.4446 13.6471 15.5879 13.9118 16.8109 13.9118C17.7415 13.9118 18.5657 13.7059 19.4431 13.2647C21.1979 12.3529 22.9261 10.5588 24.6544 8.11765L23.7238 7.23529C20.9055 11.1176 18.6455 12.4412 17.3693 12.4412C16.9439 12.4412 16.5716 12.1765 16.5716 11.4706C16.5716 9.76471 18.8848 1.47059 21.9424 1.47059C22.2083 1.47059 22.5805 1.55882 22.5805 1.97059C22.5805 2.64706 21.6233 2.41176 21.6233 3.67647C21.6233 4.67647 22.3146 5.08824 22.9793 5.08824C24.2024 5.08824 25 3.97059 25 2.58824C25 0.911765 23.8035 0 22.0222 0C21.1713 0 19.6558 0.235294 18.3264 1.70588C17.8213 0.852941 17.0768 0.0882353 15.6942 0.0882353C13.3279 0.0882353 11.2541 1.44118 8.03693 5.85294L9.04727 6.70588Z\" fill=\"black\"/>\n          </g>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#E6EBF5\" id=\"hap021-9\">\n          <rect x=\"120\" y=\"448\" width=\"40\" height=\"40\" fill=\"#E6EBF5\"/>\n          <rect x=\"120.5\" y=\"448.5\" width=\"39\" height=\"39\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M140 477.123C138.586 477.123 137.367 476.783 136.344 476.104C135.32 475.416 134.535 474.42 133.988 473.115C133.449 471.811 133.18 470.24 133.18 468.405C133.18 466.576 133.453 465.01 134 463.705C134.547 462.393 135.332 461.397 136.355 460.717C137.379 460.03 138.594 459.686 140 459.686C141.406 459.686 142.621 460.03 143.645 460.717C144.668 461.397 145.453 462.393 146 463.705C146.547 465.01 146.82 466.576 146.82 468.405C146.82 470.248 146.547 471.823 146 473.127C145.453 474.432 144.668 475.424 143.645 476.104C142.629 476.783 141.414 477.123 140 477.123ZM136.789 468.51C136.789 470.385 137.074 471.807 137.645 472.776C138.215 473.737 139 474.217 140 474.217C141.008 474.217 141.797 473.729 142.367 472.752C142.938 471.768 143.219 470.319 143.211 468.405C143.211 467.139 143.082 466.073 142.824 465.205C142.566 464.33 142.195 463.674 141.711 463.237C141.227 462.799 140.656 462.576 140 462.569C138.992 462.576 138.203 463.084 137.633 464.092C137.07 465.1 136.789 466.573 136.789 468.51Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#828A9C\" id=\"hap021-10\">\n          <path d=\"M20 348H116V444H20V348Z\" fill=\"#828A9C\"/>\n          <path d=\"M20.5 348.5H115.5V443.5H20.5V348.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M68 405.123C66.5859 405.123 65.3672 404.783 64.3438 404.104C63.3203 403.416 62.5352 402.42 61.9883 401.115C61.4492 399.811 61.1797 398.24 61.1797 396.405C61.1797 394.576 61.4531 393.01 62 391.705C62.5469 390.393 63.332 389.397 64.3555 388.717C65.3789 388.03 66.5938 387.686 68 387.686C69.4062 387.686 70.6211 388.03 71.6445 388.717C72.668 389.397 73.4531 390.393 74 391.705C74.5469 393.01 74.8203 394.576 74.8203 396.405C74.8203 398.248 74.5469 399.823 74 401.127C73.4531 402.432 72.668 403.424 71.6445 404.104C70.6289 404.783 69.4141 405.123 68 405.123ZM64.7891 396.51C64.7891 398.385 65.0742 399.807 65.6445 400.776C66.2148 401.737 67 402.217 68 402.217C69.0078 402.217 69.7969 401.729 70.3672 400.752C70.9375 399.768 71.2188 398.319 71.2109 396.405C71.2109 395.139 71.082 394.073 70.8242 393.205C70.5664 392.33 70.1953 391.674 69.7109 391.237C69.2266 390.799 68.6562 390.576 68 390.569C66.9922 390.576 66.2031 391.084 65.6328 392.092C65.0703 393.1 64.7891 394.573 64.7891 396.51Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#BCC1CC\" id=\"hap021-11\">\n          <path d=\"M120 348H160V444H120V348Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M120.5 348.5H159.5V443.5H120.5V348.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M140 405.123C138.586 405.123 137.367 404.783 136.344 404.104C135.32 403.416 134.535 402.42 133.988 401.115C133.449 399.811 133.18 398.24 133.18 396.405C133.18 394.576 133.453 393.01 134 391.705C134.547 390.393 135.332 389.397 136.355 388.717C137.379 388.03 138.594 387.686 140 387.686C141.406 387.686 142.621 388.03 143.645 388.717C144.668 389.397 145.453 390.393 146 391.705C146.547 393.01 146.82 394.576 146.82 396.405C146.82 398.248 146.547 399.823 146 401.127C145.453 402.432 144.668 403.424 143.645 404.104C142.629 404.783 141.414 405.123 140 405.123ZM136.789 396.51C136.789 398.385 137.074 399.807 137.645 400.776C138.215 401.737 139 402.217 140 402.217C141.008 402.217 141.797 401.729 142.367 400.752C142.938 399.768 143.219 398.319 143.211 396.405C143.211 395.139 143.082 394.073 142.824 393.205C142.566 392.33 142.195 391.674 141.711 391.237C141.227 390.799 140.656 390.576 140 390.569C138.992 390.576 138.203 391.084 137.633 392.092C137.07 393.1 136.789 394.573 136.789 396.51Z\" fill=\"black\"/>\n        </g>\n        <g cursor=\"pointer\" data-fill=\"#BCC1CC\" id=\"hap021-12\">\n          <path d=\"M20 448H116V488H20V448Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M20.5 448.5H115.5V487.5H20.5V448.5Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n          <path d=\"M68 477.123C66.5859 477.123 65.3672 476.783 64.3438 476.104C63.3203 475.416 62.5352 474.42 61.9883 473.115C61.4492 471.811 61.1797 470.24 61.1797 468.405C61.1797 466.576 61.4531 465.01 62 463.705C62.5469 462.393 63.332 461.397 64.3555 460.717C65.3789 460.03 66.5938 459.686 68 459.686C69.4062 459.686 70.6211 460.03 71.6445 460.717C72.668 461.397 73.4531 462.393 74 463.705C74.5469 465.01 74.8203 466.576 74.8203 468.405C74.8203 470.248 74.5469 471.823 74 473.127C73.4531 474.432 72.668 475.424 71.6445 476.104C70.6289 476.783 69.4141 477.123 68 477.123ZM64.7891 468.51C64.7891 470.385 65.0742 471.807 65.6445 472.776C66.2148 473.737 67 474.217 68 474.217C69.0078 474.217 69.7969 473.729 70.3672 472.752C70.9375 471.768 71.2188 470.319 71.2109 468.405C71.2109 467.139 71.082 466.073 70.8242 465.205C70.5664 464.33 70.1953 463.674 69.7109 463.237C69.2266 462.799 68.6562 462.576 68 462.569C66.9922 462.576 66.2031 463.084 65.6328 464.092C65.0703 465.1 64.7891 466.573 64.7891 468.51Z\" fill=\"black\"/>\n        </g>\n      </svg>\n    ";}}class HA1P02101ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 70)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">+ \uB300\uC218 \uB9C9\uB300</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 234)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">- \uB300\uC218 \uB9C9\uB300</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 404)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">0 \uB300\uC218 \uB9C9\uB300</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA4P18801Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 564\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"558\" rx=\"15\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"558\" rx=\"15\" stroke=\"#CFD4E0\" stroke-width=\"2\"/>\n        <g transform=\"translate(-3, 0)\">\n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-4\">\n            <rect x=\"20\" y=\"20\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"20.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M74.5265 38.0564L74.4404 38.0793C74.4689 38.0711 74.4975 38.0634 74.5265 38.0564ZM76.9681 39.6425C76.9637 39.6178 76.9588 39.5932 76.9534 39.5688L76.9681 39.6425ZM81 40C81 42.1915 79.8251 44.1086 78.0708 45.1557L83.8516 74.06C86.762 74.4735 89 76.9754 89 80C89 83.3137 86.3137 86 83 86C80.3876 86 78.1651 84.3304 77.3414 82H42.6586C41.8349 84.3304 39.6124 86 37 86C33.6863 86 31 83.3137 31 80C31 76.8779 33.3846 74.3128 36.4318 74.0266L41.6876 53.0036C40.0679 51.9292 39 50.0893 39 48C39 44.6863 41.6863 42 45 42C47.0557 42 48.8699 43.0338 49.9511 44.6098L69.0185 39.5252C69.2606 36.4334 71.8461 34 75 34C78.3137 34 81 36.6863 81 40ZM45.5682 53.9734C48.4594 53.7018 50.7541 51.3787 50.9815 48.4748L70.0489 43.3902C70.9781 44.7446 72.4486 45.6985 74.1484 45.94L79.9293 74.8443C78.7363 75.5563 77.8113 76.6706 77.3414 78H42.6586C42.221 76.7619 41.3885 75.7102 40.3125 74.9965L45.5682 53.9734ZM44.5264 46.0564C44.4975 46.0634 44.4689 46.0711 44.4405 46.0793L44.5264 46.0564ZM43.0709 47.4702C43.0631 47.4988 43.0559 47.5276 43.0493 47.5567L43.0709 47.4702ZM84.9681 79.6424C84.9637 79.6178 84.9588 79.5933 84.9534 79.5689L84.9681 79.6424ZM35.0709 79.4702C35.0631 79.4988 35.0559 79.5276 35.0493 79.5567L35.0709 79.4702Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M77 40C77 41.1046 76.1046 42 75 42C73.8954 42 73 41.1046 73 40C73 38.8954 73.8954 38 75 38C76.1046 38 77 38.8954 77 40ZM37 82C38.1046 82 39 81.1046 39 80C39 78.8954 38.1046 78 37 78C35.8954 78 35 78.8954 35 80C35 81.1046 35.8954 82 37 82ZM83 82C84.1046 82 85 81.1046 85 80C85 78.8954 84.1046 78 83 78C81.8954 78 81 78.8954 81 80C81 81.1046 81.8954 82 83 82ZM45 50C46.1046 50 47 49.1046 47 48C47 46.8954 46.1046 46 45 46C43.8954 46 43 46.8954 43 48C43 49.1046 43.8954 50 45 50Z\" fill=\"#FF9999\"/>\n          </g>\n          \n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-regular-4\">\n            <rect x=\"20\" y=\"108\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"108.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37 132.659C34.6696 131.835 33 129.612 33 127C33 123.686 35.6863 121 39 121C41.6124 121 43.8349 122.67 44.6586 125H75.3414C76.1651 122.67 78.3876 121 81 121C84.3137 121 87 123.686 87 127C87 129.612 85.3304 131.835 83 132.659V163.341C85.3304 164.165 87 166.388 87 169C87 172.314 84.3137 175 81 175C78.3876 175 76.1651 173.33 75.3414 171H44.6586C43.8349 173.33 41.6124 175 39 175C35.6863 175 33 172.314 33 169C33 166.388 34.6696 164.165 37 163.341V132.659ZM79 163.341C77.2952 163.944 75.944 165.295 75.3414 167H44.6586C44.056 165.295 42.7048 163.944 41 163.341V132.659C42.7048 132.056 44.056 130.705 44.6586 129H75.3414C75.944 130.705 77.2952 132.056 79 132.659V163.341Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39 129C40.1046 129 41 128.105 41 127C41 125.895 40.1046 125 39 125C37.8954 125 37 125.895 37 127C37 128.105 37.8954 129 39 129ZM39 171C40.1046 171 41 170.105 41 169C41 167.895 40.1046 167 39 167C37.8954 167 37 167.895 37 169C37 170.105 37.8954 171 39 171ZM83 127C83 128.105 82.1046 129 81 129C79.8954 129 79 128.105 79 127C79 125.895 79.8954 125 81 125C82.1046 125 83 125.895 83 127ZM81 171C82.1046 171 83 170.105 83 169C83 167.895 82.1046 167 81 167C79.8954 167 79 167.895 79 169C79 170.105 79.8954 171 81 171Z\" fill=\"#FF9999\"/>\n          </g>\n          \n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-5\">\n            <rect x=\"20\" y=\"196\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"196.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60.2611 211.382L85.3775 237.59L75.2932 260H35V228.955L60.2611 211.382ZM39 231.045V256H72.7068L80.6225 238.41L59.7387 216.618L39 231.045Z\" fill=\"black\"/>\n            <circle cx=\"37\" cy=\"228\" r=\"4\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n            <circle cx=\"60\" cy=\"214\" r=\"4\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n            <circle cx=\"83\" cy=\"236\" r=\"4\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n            <circle cx=\"74\" cy=\"258\" r=\"4\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n            <circle cx=\"37\" cy=\"258\" r=\"4\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n          </g>\n          \n          \n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-regular-5\">\n            <rect x=\"20\" y=\"284\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"284.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.8531 300.361L58.8102 300.392C58.8244 300.382 58.8387 300.371 58.8531 300.361ZM61.1949 300.396L61.1417 300.358C61.1596 300.37 61.1774 300.383 61.1949 300.396ZM63.4191 306.931C62.4491 307.605 61.2707 308 60 308C58.7293 308 57.5508 307.605 56.5808 306.931L42.6499 316.975C42.8765 317.608 43 318.29 43 319C43 320.961 42.0592 322.702 40.6044 323.797L45.335 340.009C47.8012 340.145 49.8704 341.77 50.6586 344H69.3414C70.1295 341.77 72.1986 340.145 74.6645 340.009L79.3952 323.797C77.9406 322.702 77 320.961 77 319C77 318.29 77.1234 317.608 77.35 316.976L63.4191 306.931ZM65.7595 303.687C65.916 303.152 66 302.586 66 302C66 298.686 63.3137 296 60 296C56.6863 296 54 298.686 54 302C54 302.586 54.0839 303.152 54.2405 303.687L40.1157 313.871C39.2075 313.318 38.141 313 37 313C33.6863 313 31 315.686 31 319C31 322.243 33.5722 324.884 36.7875 324.996L41.4951 341.13C39.9838 342.219 39 343.995 39 346C39 349.314 41.6863 352 45 352C47.6124 352 49.8349 350.33 50.6586 348H69.3414C70.1651 350.33 72.3876 352 75 352C78.3137 352 81 349.314 81 346C81 343.994 80.016 342.219 78.5045 341.129L83.212 324.996C86.4275 324.885 89 322.243 89 319C89 315.686 86.3137 313 83 313C81.8589 313 80.7923 313.319 79.8841 313.872L65.7595 303.687ZM84.9965 318.881L84.619 320.175C84.8586 319.845 85 319.439 85 319C85 318.96 84.9988 318.92 84.9965 318.881ZM35.0034 318.882L35.3802 320.173C35.141 319.844 35 319.438 35 319C35 318.96 35.0012 318.921 35.0034 318.882ZM76.9045 346.613C76.9154 346.579 76.9254 346.544 76.9345 346.51L76.9045 346.613ZM43.0891 346.592L43.071 346.53C43.0767 346.551 43.0828 346.572 43.0891 346.592Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60 304C61.1046 304 62 303.105 62 302C62 300.895 61.1046 300 60 300C58.8954 300 58 300.895 58 302C58 303.105 58.8954 304 60 304ZM37 321C38.1046 321 39 320.105 39 319C39 317.895 38.1046 317 37 317C35.8954 317 35 317.895 35 319C35 320.105 35.8954 321 37 321ZM47 346C47 347.105 46.1046 348 45 348C43.8954 348 43 347.105 43 346C43 344.895 43.8954 344 45 344C46.1046 344 47 344.895 47 346ZM77 346C77 347.105 76.1046 348 75 348C73.8954 348 73 347.105 73 346C73 344.895 73.8954 344 75 344C76.1046 344 77 344.895 77 346ZM85 319C85 320.105 84.1046 321 83 321C81.8954 321 81 320.105 81 319C81 317.895 81.8954 317 83 317C84.1046 317 85 317.895 85 319Z\" fill=\"#FF9999\"/>\n          </g>\n          \n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-6\">\n            <rect x=\"20\" y=\"372\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"372.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.2432 387.148L59.3336 387.114C59.3031 387.124 59.273 387.136 59.2432 387.148ZM61.1255 387.347L61.1783 387.384C61.1609 387.371 61.1433 387.359 61.1255 387.347ZM60 395C61.2923 395 62.4891 394.591 63.4684 393.896L71.2238 399.371C71.078 399.889 71 400.435 71 401C71 403.973 73.1618 406.44 75.999 406.917L78.0601 418.768C76.2336 419.797 75 421.754 75 424C75 424.151 75.0056 424.3 75.0165 424.448L60.3724 430.891C59.278 429.727 57.7239 429 56 429C54.6208 429 53.3502 429.465 52.3368 430.248L44.837 425.395C44.9436 424.947 45 424.48 45 424C45 421.388 43.3304 419.165 41 418.341V402.659C43.3304 401.835 45 399.612 45 397C45 396.952 44.9994 396.903 44.9983 396.855L55.4256 392.883C56.5262 394.178 58.1671 395 60 395ZM37 418.341V402.659C34.6696 401.835 33 399.612 33 397C33 393.686 35.6863 391 39 391C40.8329 391 42.4739 391.822 43.5744 393.117L54.0017 389.145C54.0006 389.097 54 389.048 54 389C54 385.686 56.6863 383 60 383C63.3137 383 66 385.686 66 389C66 389.565 65.922 390.111 65.7761 390.629L73.5314 396.104C74.5108 395.409 75.7077 395 77 395C80.3137 395 83 397.686 83 401C83 403.246 81.7664 405.203 79.9399 406.232L82.001 418.083C84.8382 418.56 87 421.027 87 424C87 427.314 84.3137 430 81 430C79.2762 430 77.7221 429.273 76.6277 428.109L61.9836 434.552C61.9945 434.7 62 434.849 62 435C62 438.314 59.3137 441 56 441C52.6863 441 50 438.314 50 435C50 434.52 50.0564 434.053 50.1629 433.605L42.663 428.752C41.6497 429.535 40.3792 430 39 430C35.6863 430 33 427.314 33 424C33 421.388 34.6696 419.165 37 418.341ZM37.8929 425.666C37.9075 425.676 37.9223 425.685 37.9372 425.695L37.8929 425.666ZM54.8951 436.667C54.9083 436.676 54.9216 436.685 54.935 436.693L54.8951 436.667ZM56.8435 436.814L56.7655 436.848C56.7918 436.837 56.8178 436.826 56.8435 436.814ZM81.7665 425.848C81.7921 425.837 81.8175 425.826 81.8426 425.814L81.7665 425.848ZM82.9763 423.691C82.9726 423.667 82.9683 423.643 82.9637 423.619L82.9763 423.691ZM78.9763 400.691C78.9725 400.667 78.9683 400.643 78.9637 400.619L78.9763 400.691ZM78.1273 399.348L78.1765 399.382C78.1603 399.371 78.1439 399.359 78.1273 399.348ZM38.3344 395.113C38.3034 395.124 38.2727 395.136 38.2424 395.148L38.3344 395.113Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60 391C61.1046 391 62 390.105 62 389C62 387.895 61.1046 387 60 387C58.8954 387 58 387.895 58 389C58 390.105 58.8954 391 60 391ZM39 399C40.1046 399 41 398.105 41 397C41 395.895 40.1046 395 39 395C37.8954 395 37 395.895 37 397C37 398.105 37.8954 399 39 399ZM79 401C79 402.105 78.1046 403 77 403C75.8954 403 75 402.105 75 401C75 399.895 75.8954 399 77 399C78.1046 399 79 399.895 79 401ZM81 426C82.1046 426 83 425.105 83 424C83 422.895 82.1046 422 81 422C79.8954 422 79 422.895 79 424C79 425.105 79.8954 426 81 426ZM58 435C58 436.105 57.1046 437 56 437C54.8954 437 54 436.105 54 435C54 433.895 54.8954 433 56 433C57.1046 433 58 433.895 58 435ZM39 426C40.1046 426 41 425.105 41 424C41 422.895 40.1046 422 39 422C37.8954 422 37 422.895 37 424C37 425.105 37.8954 426 39 426Z\" fill=\"#FF9999\"/>\n          </g>\n          \n          <g cursor=\"pointer\" id=\"ma4p18801-polygon-regular-6\">\n            <rect x=\"20\" y=\"460\" width=\"80\" height=\"80\" rx=\"12\" fill=\"white\"/>\n            <rect x=\"20.5\" y=\"460.5\" width=\"79\" height=\"79\" rx=\"11.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.0349 474.248L58.9684 474.286C58.9903 474.273 59.0124 474.26 59.0349 474.248ZM61.0342 474.288L60.9625 474.246C60.9867 474.26 61.0106 474.274 61.0342 474.288ZM63.899 480.561C62.8503 481.458 61.4885 482 60 482C58.5115 482 57.1496 481.458 56.1009 480.561L44.9197 487.016C44.9725 487.336 45 487.665 45 488C45 490.531 43.4326 492.696 41.2153 493.578V506.422C43.4326 507.304 45 509.469 45 512C45 512.335 44.9725 512.664 44.9197 512.984L56.1008 519.44C57.1495 518.542 58.5115 518 60 518C61.4885 518 62.8504 518.542 63.8991 519.439L75.0803 512.984C75.0275 512.664 75 512.335 75 512C75 509.469 76.5674 507.304 78.7845 506.422V493.578C76.5674 492.696 75 490.531 75 488C75 487.665 75.0275 487.336 75.0803 487.016L63.899 480.561ZM82.7845 506.27V493.73C85.2268 492.97 87 490.692 87 488C87 484.686 84.3137 482 81 482C79.4705 482 78.0748 482.572 77.0151 483.514L65.8999 477.097C65.9657 476.741 66 476.375 66 476C66 472.686 63.3137 470 60 470C56.6863 470 54 472.686 54 476C54 476.375 54.0343 476.741 54.1 477.097L42.9849 483.514C41.9252 482.572 40.5294 482 39 482C35.6863 482 33 484.686 33 488C33 490.692 34.7732 492.97 37.2153 493.73V506.27C34.7732 507.03 33 509.308 33 512C33 515.314 35.6863 518 39 518C40.5294 518 41.9251 517.428 42.9848 516.486L54.1 522.903C54.0343 523.259 54 523.625 54 524C54 527.314 56.6863 530 60 530C63.3137 530 66 527.314 66 524C66 523.625 65.9657 523.259 65.9 522.903L77.0152 516.486C78.0748 517.428 79.4706 518 81 518C84.3137 518 87 515.314 87 512C87 509.308 85.2268 507.03 82.7845 506.27ZM81.3846 513.963C81.8288 513.877 82.2205 513.643 82.5069 513.315L81.3846 513.963ZM82.7845 512.904V511.096C82.9223 511.368 83 511.675 83 512C83 512.325 82.9223 512.632 82.7845 512.904ZM83 488C83 488.325 82.9223 488.632 82.7845 488.904V487.096C82.9223 487.368 83 487.675 83 488ZM82.5071 486.685C82.2206 486.357 81.8287 486.123 81.3842 486.037L82.5071 486.685ZM37.2153 511.096C37.0776 511.368 37 511.675 37 512C37 512.325 37.0776 512.632 37.2153 512.904V511.096ZM38.6153 513.963L37.4933 513.315C37.7796 513.643 38.1712 513.876 38.6153 513.963ZM38.6157 486.037C38.1713 486.123 37.7795 486.357 37.493 486.685L38.6157 486.037ZM37 488C37 487.675 37.0776 487.368 37.2153 487.096V488.904C37.0776 488.632 37 488.325 37 488ZM58.9749 525.718C58.9925 525.728 59.0103 525.738 59.0282 525.748L58.9749 525.718ZM61.0282 525.716L60.9686 525.75C60.9887 525.739 61.0085 525.728 61.0282 525.716Z\" fill=\"black\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60 478C61.1046 478 62 477.105 62 476C62 474.895 61.1046 474 60 474C58.8954 474 58 474.895 58 476C58 477.105 58.8954 478 60 478ZM60 526C61.1046 526 62 525.105 62 524C62 522.895 61.1046 522 60 522C58.8954 522 58 522.895 58 524C58 525.105 58.8954 526 60 526ZM41 488C41 489.105 40.1046 490 39 490C37.8954 490 37 489.105 37 488C37 486.895 37.8954 486 39 486C40.1046 486 41 486.895 41 488ZM39 514C40.1046 514 41 513.105 41 512C41 510.895 40.1046 510 39 510C37.8954 510 37 510.895 37 512C37 513.105 37.8954 514 39 514ZM83 488C83 489.105 82.1046 490 81 490C79.8954 490 79 489.105 79 488C79 486.895 79.8954 486 81 486C82.1046 486 83 486.895 83 488ZM81 514C82.1046 514 83 513.105 83 512C83 510.895 82.1046 510 81 510C79.8954 510 79 510.895 79 512C79 513.105 79.8954 514 81 514Z\" fill=\"#FF9999\"/>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA4P18801ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 30)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC0AC\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 120)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC0AC\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 210)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC624\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 300)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC624\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 390)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC721\uAC01\uD615</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 480)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uC721\uAC01\uD615</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA5P19601Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 728\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"722\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"722\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        \n        <g cursor=\"pointer\" id=\"ma5p19601-circle\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"31\" y=\"39\" width=\"50\" height=\"50\" rx=\"25\" stroke=\"black\" stroke-width=\"4\"/>\n        </g>\n\n        <g cursor=\"pointer\" id=\"ma5p19601-circle2\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"31\" y=\"135\" width=\"50\" height=\"50\" rx=\"25\" stroke=\"black\" stroke-width=\"4\"/>\n          <path d=\"M81 160H56L70 139\" stroke=\"black\" stroke-width=\"3\"/>\n          <circle cx=\"56\" cy=\"160\" r=\"4\" fill=\"black\"/>\n        </g>\n        \n        <rect x=\"16\" y=\"224\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-stroke-width=\"4\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 280H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n        </g>\n\n        <g data-stroke-width=\"8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"324.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"324.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 352C28 348.686 30.6863 346 34 346H78C81.3137 346 84 348.686 84 352C84 355.314 81.3137 358 78 358H34C30.6863 358 28 355.314 28 352Z\" fill=\"black\"/>\n        </g>\n\n        <g data-stroke-width=\"4\" data-stroke-dasharray=\"8 8\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"396.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"396.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 424H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"8 8\"/>\n        </g>\n\n        <g data-stroke-width=\"2\" data-stroke-opacity=\"0.05\" cursor=\"pointer\" class=\"custom-change-line\">\n          <rect x=\"16.5\" y=\"468.5\" width=\"79\" height=\"55\" rx=\"15.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"468.5\" width=\"79\" height=\"55\" rx=\"15.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M28 496H45\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M67 496H84\" stroke=\"#BCC1CC\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M64 488L48 504M64 504L48 488\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </g>\n\n        <rect x=\"16\" y=\"548\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-fill=\"#FFEA7E\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"576\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FFEA7E\"/>\n          <rect x=\"17\" y=\"577\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#8BD5FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"576\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#8BD5FF\"/>\n          <rect x=\"61\" y=\"577\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#CEE868\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"620\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CEE868\"/>\n          <rect x=\"17\" y=\"621\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#FF9999\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"620\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FF9999\"/>\n          <rect x=\"61\" y=\"621\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        \n        <g data-fill=\"#CFA4FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"664\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CFA4FF\"/>\n          <rect x=\"17\" y=\"665\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#fff\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"664\" width=\"36\" height=\"36\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"61\" y=\"665\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n      </svg>\n    ";}}class MA5P19601ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -55)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC6D0</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 45)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBD80\uCC44\uAF34</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 165)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,230 L0,230\"  />\n          </g>\n          <g transform=\"translate(40, 115)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC120 \uC18D\uC131</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 480)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,130 L0,130\"  />\n          </g>\n          <g transform=\"translate(40, 65)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBA74 \uC0C9\uC0C1</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA1P03901Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 588\" fill=\"none\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"582\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"582\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <path d=\"M16 64C16 41.9086 33.9086 24 56 24C78.0914 24 96 41.9086 96 64C96 86.0914 78.0914 104 56 104C33.9086 104 16 86.0914 16 64Z\" fill=\"white\"/>\n      <circle cx=\"42\" cy=\"64\" r=\"16\" fill=\"#0ACA57\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M51.0606 59.0607L39 71.1213L32.9393 65.0607L35.0607 62.9393L39 66.8787L48.9393 56.9393L51.0606 59.0607Z\" fill=\"white\"/>\n      <text id=\"ma1p03901-result\" x=\"80\" y=\"76\" text-anchor=\"middle\" fill=\"#000\" font-size=\"34\" font-weight=\"700\" style=\"user-select: none;\" >0</text>\n      <rect x=\"16\" y=\"128\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      <g cursor=\"pointer\" id=\"ma1p03901-toolbar-add\">\n        <rect x=\"16\" y=\"156\" width=\"80\" height=\"80\" rx=\"40\" fill=\"#FF7CBB\"/>\n        <rect x=\"17\" y=\"157\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M78 196C78 198.209 76.2091 200 74 200H38C35.7909 200 34 198.209 34 196C34 193.791 35.7909 192 38 192H74C76.2091 192 78 193.791 78 196Z\" fill=\"black\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56 218C53.7909 218 52 216.209 52 214L52 178C52 175.791 53.7909 174 56 174C58.2091 174 60 175.791 60 178L60 214C60 216.209 58.2091 218 56 218Z\" fill=\"black\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ma1p03901-toolbar-0\">\n        <rect x=\"16\" y=\"252\" width=\"80\" height=\"80\" rx=\"40\" fill=\"#C597FF\"/>\n        <rect x=\"17\" y=\"253\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        <path d=\"M56 313C52.4754 313 49.4376 312.181 46.8866 310.544C44.3356 308.888 42.3786 306.489 41.0155 303.347C39.6718 300.204 39 296.422 39 292C39 287.597 39.6816 283.824 41.0447 280.681C42.4078 277.52 44.3648 275.121 46.9158 273.484C49.4668 271.828 52.4948 271 56 271C59.5052 271 62.5332 271.828 65.0842 273.484C67.6352 275.121 69.5922 277.52 70.9553 280.681C72.3184 283.824 73 287.597 73 292C73 296.441 72.3184 300.233 70.9553 303.375C69.5922 306.517 67.6352 308.907 65.0842 310.544C62.5527 312.181 59.5246 313 56 313ZM47.9966 292.254C47.9966 296.77 48.7073 300.195 50.1289 302.528C51.5504 304.843 53.5074 306 56 306C58.512 306 60.4788 304.824 61.9003 302.472C63.3219 300.101 64.0229 296.61 64.0034 292C64.0034 288.952 63.6821 286.383 63.0395 284.294C62.3969 282.187 61.4719 280.606 60.2646 279.552C59.0573 278.499 57.6357 277.962 56 277.944C53.488 277.962 51.5212 279.185 50.0997 281.613C48.6976 284.04 47.9966 287.587 47.9966 292.254Z\" fill=\"black\" fill-opacity=\"0.8\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ma1p03901-toolbar-sub\">\n        <rect x=\"16\" y=\"348\" width=\"80\" height=\"80\" rx=\"40\" fill=\"#72C4FF\"/>\n        <rect x=\"17\" y=\"349\" width=\"78\" height=\"78\" rx=\"39\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        <rect x=\"34\" y=\"384\" width=\"44\" height=\"8\" rx=\"4\" fill=\"black\"/>  \n      </g>\n      <rect x=\"16\" y=\"452\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      <g cursor=\"pointer\" id=\"ma1p03901-sort\">\n        <rect x=\"16\" y=\"480\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"480.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M74.2426 508.121L68.1213 502L66 504.121L68.3787 506.5H39V509.5H68.6213L66 512.121L68.1213 514.243L74.2426 508.121Z\" fill=\"#404654\"/>\n        <circle cx=\"44\" cy=\"528\" r=\"10\" fill=\"#FC9AD0\"/>\n        <circle cx=\"68\" cy=\"528\" r=\"10\" fill=\"#7BCEFD\"/>\n      </g>\n    </svg>\n    ";}}class MA1P03901ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n\n      >\n        <g transform=\"translate(5, 20)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uACC4\uC0B0 \uACB0\uACFC</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 155)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">+1</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 254)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">0 (\uB354\uBE14\uD074\uB9AD\uD558\uBA74 +1\uACFC -1\uB85C \uCABC\uAC1C\uC9D1\uB2C8\uB2E4.)</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 355)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">-1</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 490)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\" transform=\"translate(0, -12)\">\uC815\uB82C (+\uB294 +\uB07C\uB9AC, -\uB294 -\uB07C\uB9AC \uC815\uB82C\uB418\uACE0</text>\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\" transform=\"translate(0, 12)\">0\uC740 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.)</text>\n          </g>\n      </g>\n    </svg>    \n    ";}}class MA1P03701Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 236\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"230\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"230\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g cursor=\"pointer\" id=\"ma1p03701-arrow-plus\">\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"39.5\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"#E6EBF5\"/>\n        <path d=\"M82 64L63.4286 41V50.5833H30V77.6905H63.4286V87L82 64Z\" fill=\"#FF999A\"/>\n        <path d=\"M63.4286 51.5833C63.9809 51.5833 64.4286 51.1356 64.4286 50.5833V43.8302L80.7147 64L64.4286 84.1698V77.6905C64.4286 77.1382 63.9809 76.6905 63.4286 76.6905H31V51.5833H63.4286Z\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53 55C51.8954 55 51 55.8954 51 57V62H46C44.8954 62 44 62.8954 44 64C44 65.1046 44.8954 66 46 66H51V71C51 72.1046 51.8954 73 53 73C54.1046 73 55 72.1046 55 71V66H60C61.1046 66 62 65.1046 62 64C62 62.8954 61.1046 62 60 62H55V57C55 55.8954 54.1046 55 53 55Z\" fill=\"black\"/>\n        <rect id=\"ma1p03701-arrow-plus-dim\" x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"39.5\" fill=\"black\" opacity=\"0.2\" display=\"none\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ma1p03701-arrow-minus\">\n        <rect x=\"16.5\" y=\"128.5\" width=\"79\" height=\"79\" rx=\"39.5\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"128.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"#E6EBF5\"/>\n        <path d=\"M30 168L48.5714 145V154.583H82V181.69H48.5714V191L30 168Z\" fill=\"#72C4FF\"/>\n        <path d=\"M48.0714 181.69V189.585L30.6426 168L48.0714 146.415V154.583V155.083H48.5714H81.5V181.19H48.5714H48.0714V181.69Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M54 168C54 166.895 54.8954 166 56 166H70C71.1046 166 72 166.895 72 168C72 169.105 71.1046 170 70 170H56C54.8954 170 54 169.105 54 168Z\" fill=\"black\"/>\n        <rect id=\"ma1p03701-arrow-minus-dim\" x=\"16.5\" y=\"128.5\" width=\"79\" height=\"79\" rx=\"39.5\" fill=\"black\" opacity=\"0.2\" display=\"none\"/>\n      </g>\n    </svg>\n    ";}}class MA1P03701ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n       <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 193\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 45)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC591\uC758 \uC815\uC218</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 155)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC74C\uC758 \uC815\uC218</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA1P07301Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 552\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"546\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"546\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <rect x=\"16\" y=\"24\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n      <g class=\"cursor-pointer\" id=\"ma1p07301-line-right\" fill=\"white\">\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M35 76V52H82\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M75 44L83 52L75 60\" stroke=\"black\" stroke-width=\"3\"/>\n        <circle cx=\"35\" cy=\"77\" r=\"6\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n      </g>\n      <g class=\"cursor-pointer\" id=\"ma1p07301-line-left\" fill=\"white\">\n        <rect x=\"16\" y=\"120\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M77 172V148H30\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M37 140L29 148L37 156\" stroke=\"black\" stroke-width=\"3\"/>\n        <circle cx=\"77\" cy=\"173\" r=\"6\" fill=\"#7BCEFD\" stroke=\"black\" stroke-width=\"4\"/>\n      </g>\n      <g class=\"cursor-pointer\" id=\"ma1p07301-line-closed\" fill=\"white\">\n        <rect x=\"16\" y=\"216\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M79 267V241H33V267\" stroke=\"black\" stroke-width=\"4\"/>\n        <circle cx=\"79\" cy=\"268\" r=\"6\" fill=\"#7BCEFD\" stroke=\"black\" stroke-width=\"4\"/>\n        <circle cx=\"33\" cy=\"268\" r=\"6\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n        <rect x=\"16\" y=\"312\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n      </g>\n      <g class=\"cursor-pointer\" id=\"ma1p07301-insert-mode\" fill=\"white\">\n        <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M56 326V336\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M56 368V378\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M78 336H34C31.7909 336 30 337.791 30 340V364C30 366.209 31.7909 368 34 368H78C80.2091 368 82 366.209 82 364V340C82 337.791 80.2091 336 78 336Z\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M39 344V360\" stroke=\"#2B93F3\" stroke-width=\"2.4\"/>\n        <path d=\"M42 344H39H36\" stroke=\"#2B93F3\" stroke-width=\"2.4\"/>\n        <path d=\"M42 360H39H36\" stroke=\"#2B93F3\" stroke-width=\"2.4\"/>\n      </g>\n      <rect x=\"16\" y=\"416\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\" fill=\"white\"/>\n      <g class=\"cursor-pointer\" id=\"ma1p07301-add-line\">\n        <rect x=\"16\" y=\"444\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"444.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M40 480V488\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M48 478V490\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M56 480V488\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M64 478V490\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M72 480V488\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M28 484H84\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M24 484L34 475V493L24 484Z\" fill=\"black\"/>\n        <path d=\"M88 484L78 475V493L88 484Z\" fill=\"black\"/>\n      </g>\n    </svg>\n    ";}}class MA1P07301ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n       <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 30)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,110 L0,110\"  />\n          </g>\n          <g transform=\"translate(40, 55)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC5F4\uB9B0 \uBC94\uC704</text>\n          </g>\n        </g>\n\n        <g transform=\"translate(5, 240)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB2EB\uD78C \uBC94\uC704</text>\n          </g>\n        </g>\n\n        <g transform=\"translate(5, 340)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB208\uAE08 \uCD94\uAC00</text>\n          </g>\n        </g>\n\n        <g transform=\"translate(5, 480)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBC94\uC704 \uC218\uC9C1\uC120</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA1P03301Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 748\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"742\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"742\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n      <g id=\"ma1p03301-add-line-1\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"24\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M40 60V68\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M48 58V70\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M56 60V68\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M64 58V70\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M72 60V68\" stroke=\"black\" stroke-width=\"3\"/>\n        <path d=\"M28 64H84\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M24 64L34 55V73L24 64Z\" fill=\"black\"/>\n        <path d=\"M88 64L78 55V73L88 64Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p03301-add-line-2\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"112\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"112.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M28 152H84\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M24 152L34 143V161L24 152Z\" fill=\"black\"/>\n        <path d=\"M88 152L78 143V161L88 152Z\" fill=\"black\"/>\n      </g>\n      <rect x=\"16\" y=\"216\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      <g id=\"ma1p03301-add-elem-1\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"244\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"244.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M33 288C33 288 38 272 56 272C74 272 80 289 80 289\" stroke=\"black\" stroke-width=\"4\"/>\n        <circle cx=\"33\" cy=\"288\" r=\"6\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n        <path d=\"M84 278.469L81.5714 290.963L69.0773 288.534\" stroke=\"black\" stroke-width=\"4\"/>\n      </g>\n      <g id=\"ma1p03301-add-elem-2\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"332\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"332.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M33 377C33 377 38 359 56 359C74 359 79 377 79 377\" stroke=\"black\" stroke-width=\"4\"/>\n        <circle cx=\"79\" cy=\"377\" r=\"6\" fill=\"#FF9999\" stroke=\"black\" stroke-width=\"4\"/>\n        <circle cx=\"33\" cy=\"377\" r=\"6\" fill=\"#7BCEFD\" stroke=\"black\" stroke-width=\"4\"/>\n      </g>\n      <rect x=\"16\" y=\"436\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      <g id=\"ma1p03301-change-line-1\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"464\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"464.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M28 504H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      </g>\n      <g id=\"ma1p03301-change-line-2\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"552\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"552.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M28 592C28 588.686 30.6863 586 34 586H78C81.3137 586 84 588.686 84 592C84 595.314 81.3137 598 78 598H34C30.6863 598 28 595.314 28 592Z\" fill=\"black\"/>\n      </g>\n      <g id=\"ma1p03301-change-line-3\" class=\"cursor-pointer\">\n        <rect x=\"16\" y=\"640\" width=\"80\" height=\"80\" rx=\"40\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"640.5\" width=\"79\" height=\"79\" rx=\"39.5\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M28 680H84\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"8 8\"/>\n      </g>\n    </svg>\n    ";}}class MA1P03301ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n       <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -65)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uAE30\uBCF8 \uC218\uC9C1\uC120</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 25)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB4F1\uBD84 \uC218\uC9C1\uC120</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 170)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,90 L0,90\"  />\n          </g>\n          <g transform=\"translate(40, 45)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uD654\uC0B4\uD45C \uBC0F \uD45C\uC2DC \uC120</text>\n          </g>\n        </g>\n        \n        <g transform=\"translate(5, 390)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,190 L0,190\"  />\n          </g>\n          <g transform=\"translate(40, 95)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC120 \uC124\uC815</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MultiSelectBox extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\">\n      <rect\n        x=\"0\"\n        y=\"0\"\n        width=\"100%\"\n        height=\"100%\"\n        fill=\"none\"\n        stroke=\"black\"\n        stroke-width=\"2\"\n      />\n    </svg>\n    ";}}class HA1P02801Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 608\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"182\" height=\"602\" rx=\"15\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"182\" height=\"602\" rx=\"15\" stroke=\"#CFD4E0\" stroke-width=\"2\"/>\n      <g cursor=\"pointer\" id=\"ha1p02801-add-element-1\">\n        <path d=\"M68 44L92 56V86L68 74V44Z\" fill=\"#8BDE38\"/>\n        <path d=\"M68 44L92 56V86L68 74V44Z\" fill=\"#7CC731\"/>\n        <path d=\"M92 56L116 44V74L92 86V56Z\" fill=\"#8BDE38\"/>\n        <path d=\"M92 56L116 44V74L92 86V56Z\" fill=\"#8BDE38\"/>\n        <path d=\"M92 32L116 44L92 56L68 44L92 32Z\" fill=\"#BBF55C\"/>\n        <path d=\"M68.5 73.691V44.309L92 32.559L115.5 44.309V73.691L92 85.441L68.5 73.691Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n        <path d=\"M95.0234 67.8889H91.4844V54.2717H91.3906L87.5 56.7092V53.592L91.6953 50.9202H95.0234V67.8889Z\" fill=\"black\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ha1p02801-add-element-2\">\n      <path d=\"M68 122L92 134V224L68 212V122Z\" fill=\"#FC9AD0\"/>\n      <path d=\"M68 122L92 134V224L68 212V122Z\" fill=\"#59A5FE\"/>\n      <path d=\"M92 134L116 122V212L92 224V134Z\" fill=\"#FC9AD0\"/>\n      <path d=\"M92 134L116 122V212L92 224V134Z\" fill=\"#7FC9FF\"/>\n      <path d=\"M92 110L116 122L92 134L68 122L92 110Z\" fill=\"#A8E0FF\"/>\n      <path d=\"M68.5 122.309L92 110.559L115.5 122.309V211.691L92 223.441L68.5 211.691V122.309Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n      <path d=\"M85.0473 166.706C88.3176 162.353 89.7267 161.559 91.0295 161.559C91.4549 161.559 91.8538 161.853 91.8538 162.853C91.8538 164.647 89.0355 172.529 86.0842 172.529C85.7651 172.529 85.4195 172.294 85.4195 171.971C85.4195 171.176 86.3767 171.5 86.3767 170.176C86.3767 169.176 85.6056 168.765 84.9675 168.765C83.771 168.765 83 169.912 83 171.147C83 172.735 84.0369 174 86.031 174C87.2541 174 88.5037 173.529 89.9129 172.294C90.4446 173.647 91.5879 173.912 92.8109 173.912C93.7415 173.912 94.5657 173.706 95.4431 173.265C97.1979 172.353 98.9261 170.559 100.654 168.118L99.7238 167.235C96.9055 171.118 94.6455 172.441 93.3693 172.441C92.9439 172.441 92.5716 172.176 92.5716 171.471C92.5716 169.765 94.8848 161.471 97.9424 161.471C98.2083 161.471 98.5805 161.559 98.5805 161.971C98.5805 162.647 97.6233 162.412 97.6233 163.676C97.6233 164.676 98.3146 165.088 98.9793 165.088C100.202 165.088 101 163.971 101 162.588C101 160.912 99.8035 160 98.0222 160C97.1713 160 95.6558 160.235 94.3264 161.706C93.8213 160.853 93.0768 160.088 91.6942 160.088C89.3279 160.088 87.2541 161.441 84.0369 165.853L85.0473 166.706Z\" fill=\"black\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ha1p02801-add-element-3\">\n      <path d=\"M140 260L68 296V386L140 350V260Z\" fill=\"#F79494\"/>\n      <path d=\"M68 296L44 284V374L68 386V296Z\" fill=\"#EB6A6A\"/>\n      <path d=\"M116 248L140 260L68 296L44 284L116 248Z\" fill=\"#FFC9C9\"/>\n      <path d=\"M44.5 284.309L116 248.559L139.5 260.309V349.691L68 385.441L44.5 373.691V284.309Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n      <path d=\"M85.0473 316.706C88.3176 312.353 89.7267 311.559 91.0295 311.559C91.4549 311.559 91.8538 311.853 91.8538 312.853C91.8538 314.647 89.0355 322.529 86.0842 322.529C85.7651 322.529 85.4195 322.294 85.4195 321.971C85.4195 321.176 86.3767 321.5 86.3767 320.176C86.3767 319.176 85.6056 318.765 84.9675 318.765C83.771 318.765 83 319.912 83 321.147C83 322.735 84.0369 324 86.031 324C87.2541 324 88.5037 323.529 89.9129 322.294C90.4446 323.647 91.5879 323.912 92.8109 323.912C93.7415 323.912 94.5657 323.706 95.4431 323.265C97.1979 322.353 98.9261 320.559 100.654 318.118L99.7238 317.235C96.9055 321.118 94.6455 322.441 93.3693 322.441C92.9439 322.441 92.5716 322.176 92.5716 321.471C92.5716 319.765 94.8848 311.471 97.9424 311.471C98.2083 311.471 98.5805 311.559 98.5805 311.971C98.5805 312.647 97.6233 312.412 97.6233 313.676C97.6233 314.676 98.3146 315.088 98.9793 315.088C100.202 315.088 101 313.971 101 312.588C101 310.912 99.8035 310 98.0222 310C97.1713 310 95.6558 310.235 94.3264 311.706C93.8213 310.853 93.0768 310.088 91.6942 310.088C89.3279 310.088 87.2541 311.441 84.0369 315.853L85.0473 316.706Z\" fill=\"black\"/>\n      <path d=\"M107.448 309.093L107.064 308.944C106.744 309.413 106.403 309.52 105.827 309.52H103.416L105.208 307.792C106.595 306.448 107.043 305.616 107.043 304.571C107.043 303.227 106.019 302.245 104.355 302.245C102.541 302.245 101.752 303.035 101.155 304.784L101.688 305.104C102.157 304.08 102.776 303.525 103.565 303.525C104.419 303.525 105.08 304.251 105.08 305.147C105.08 305.787 104.504 306.917 103.416 308.091L101.261 310.395V310.907H106.616L107.448 309.093Z\" fill=\"#07090C\"/>\n      </g>\n      <g cursor=\"pointer\" id=\"ha1p02801-add-element-4\">\n      <path d=\"M20 446L92 482V572L20 536V446Z\" fill=\"#A1B6FF\"/>\n      <path d=\"M20 446L92 482V572L20 536V446Z\" fill=\"#8692FD\"/>\n      <path d=\"M92 482L164 446V536L92 572V482Z\" fill=\"#A1B6FF\"/>\n      <path d=\"M92 482L164 446V536L92 572V482Z\" fill=\"#9FA8FF\"/>\n      <path d=\"M92 410L164 446L92 482L20 446L92 410Z\" fill=\"#B9C4FF\"/>\n      <path d=\"M20.5 446.309L92 410.559L163.5 446.309V536.189L92 571.443L20.5 536.189V446.309Z\" stroke=\"black\" stroke-opacity=\"0.2\"/>\n      <path d=\"M105.485 479.765C106.509 479.253 106.765 478.613 106.765 478.016C106.765 477.013 105.763 476.245 104.461 476.245C103.16 476.245 102.349 476.843 101.581 478.272L102.115 478.677C102.691 477.739 103.181 477.44 103.949 477.44C104.696 477.44 105.144 477.803 105.144 478.443C105.144 479.211 104.611 479.723 103.117 480.235V480.853C103.629 480.789 103.672 480.789 103.715 480.789C104.888 480.789 105.613 481.429 105.613 482.539C105.613 483.413 105.037 484.053 104.163 484.053C103.779 484.053 103.544 483.968 103.075 483.627C102.669 483.328 102.435 483.221 102.2 483.221C101.773 483.221 101.411 483.435 101.411 483.883C101.411 484.565 102.221 485.077 103.352 485.077C105.72 485.077 107.341 483.84 107.341 482.155C107.341 481.131 106.765 480.128 105.485 479.808V479.765Z\" fill=\"#07090C\"/>\n      <path d=\"M85.0473 490.706C88.3176 486.353 89.7267 485.559 91.0295 485.559C91.4549 485.559 91.8538 485.853 91.8538 486.853C91.8538 488.647 89.0355 496.529 86.0842 496.529C85.7651 496.529 85.4195 496.294 85.4195 495.971C85.4195 495.176 86.3767 495.5 86.3767 494.176C86.3767 493.176 85.6056 492.765 84.9675 492.765C83.771 492.765 83 493.912 83 495.147C83 496.735 84.0369 498 86.031 498C87.2541 498 88.5037 497.529 89.9129 496.294C90.4446 497.647 91.5879 497.912 92.8109 497.912C93.7415 497.912 94.5657 497.706 95.4431 497.265C97.1979 496.353 98.9261 494.559 100.654 492.118L99.7238 491.235C96.9055 495.118 94.6455 496.441 93.3693 496.441C92.9439 496.441 92.5716 496.176 92.5716 495.471C92.5716 493.765 94.8848 485.471 97.9424 485.471C98.2083 485.471 98.5805 485.559 98.5805 485.971C98.5805 486.647 97.6233 486.412 97.6233 487.676C97.6233 488.676 98.3146 489.088 98.9793 489.088C100.202 489.088 101 487.971 101 486.588C101 484.912 99.8035 484 98.0222 484C97.1713 484 95.6558 484.235 94.3264 485.706C93.8213 484.853 93.0768 484.088 91.6942 484.088C89.3279 484.088 87.2541 485.441 84.0369 489.853L85.0473 490.706Z\" fill=\"black\"/>\n      </g>\n    </svg>\n    \n    ";}}class HA1P02801ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 0)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">1 \uB300\uC218 \uBE14\uB85D</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 120)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <g transform=\"translate(-80, -173)\">\n              <path d=\"M85.0473 166.706C88.3176 162.353 89.7267 161.559 91.0295 161.559C91.4549 161.559 91.8538 161.853 91.8538 162.853C91.8538 164.647 89.0355 172.529 86.0842 172.529C85.7651 172.529 85.4195 172.294 85.4195 171.971C85.4195 171.176 86.3767 171.5 86.3767 170.176C86.3767 169.176 85.6056 168.765 84.9675 168.765C83.771 168.765 83 169.912 83 171.147C83 172.735 84.0369 174 86.031 174C87.2541 174 88.5037 173.529 89.9129 172.294C90.4446 173.647 91.5879 173.912 92.8109 173.912C93.7415 173.912 94.5657 173.706 95.4431 173.265C97.1979 172.353 98.9261 170.559 100.654 168.118L99.7238 167.235C96.9055 171.118 94.6455 172.441 93.3693 172.441C92.9439 172.441 92.5716 172.176 92.5716 171.471C92.5716 169.765 94.8848 161.471 97.9424 161.471C98.2083 161.471 98.5805 161.559 98.5805 161.971C98.5805 162.647 97.6233 162.412 97.6233 163.676C97.6233 164.676 98.3146 165.088 98.9793 165.088C100.202 165.088 101 163.971 101 162.588C101 160.912 99.8035 160 98.0222 160C97.1713 160 95.6558 160.235 94.3264 161.706C93.8213 160.853 93.0768 160.088 91.6942 160.088C89.3279 160.088 87.2541 161.441 84.0369 165.853L85.0473 166.706Z\" fill=\"#fff\"/>\n            </g>\n            <text x=\"40\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uB300\uC218 \uBE14\uB85D</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 270)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <g transform=\"translate(-80, -325)\">\n              <path d=\"M85.0473 316.706C88.3176 312.353 89.7267 311.559 91.0295 311.559C91.4549 311.559 91.8538 311.853 91.8538 312.853C91.8538 314.647 89.0355 322.529 86.0842 322.529C85.7651 322.529 85.4195 322.294 85.4195 321.971C85.4195 321.176 86.3767 321.5 86.3767 320.176C86.3767 319.176 85.6056 318.765 84.9675 318.765C83.771 318.765 83 319.912 83 321.147C83 322.735 84.0369 324 86.031 324C87.2541 324 88.5037 323.529 89.9129 322.294C90.4446 323.647 91.5879 323.912 92.8109 323.912C93.7415 323.912 94.5657 323.706 95.4431 323.265C97.1979 322.353 98.9261 320.559 100.654 318.118L99.7238 317.235C96.9055 321.118 94.6455 322.441 93.3693 322.441C92.9439 322.441 92.5716 322.176 92.5716 321.471C92.5716 319.765 94.8848 311.471 97.9424 311.471C98.2083 311.471 98.5805 311.559 98.5805 311.971C98.5805 312.647 97.6233 312.412 97.6233 313.676C97.6233 314.676 98.3146 315.088 98.9793 315.088C100.202 315.088 101 313.971 101 312.588C101 310.912 99.8035 310 98.0222 310C97.1713 310 95.6558 310.235 94.3264 311.706C93.8213 310.853 93.0768 310.088 91.6942 310.088C89.3279 310.088 87.2541 311.441 84.0369 315.853L85.0473 316.706Z\" fill=\"#fff\"/>\n              <path d=\"M107.448 309.093L107.064 308.944C106.744 309.413 106.403 309.52 105.827 309.52H103.416L105.208 307.792C106.595 306.448 107.043 305.616 107.043 304.571C107.043 303.227 106.019 302.245 104.355 302.245C102.541 302.245 101.752 303.035 101.155 304.784L101.688 305.104C102.157 304.08 102.776 303.525 103.565 303.525C104.419 303.525 105.08 304.251 105.08 305.147C105.08 305.787 104.504 306.917 103.416 308.091L101.261 310.395V310.907H106.616L107.448 309.093Z\" fill=\"#fff\"/>\n            </g>\n            <text x=\"40\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uB300\uC218 \uBE14\uB85D</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 450)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 1)\">\n            <g transform=\"translate(-80,-498)\">\n              <path d=\"M105.485 479.765C106.509 479.253 106.765 478.613 106.765 478.016C106.765 477.013 105.763 476.245 104.461 476.245C103.16 476.245 102.349 476.843 101.581 478.272L102.115 478.677C102.691 477.739 103.181 477.44 103.949 477.44C104.696 477.44 105.144 477.803 105.144 478.443C105.144 479.211 104.611 479.723 103.117 480.235V480.853C103.629 480.789 103.672 480.789 103.715 480.789C104.888 480.789 105.613 481.429 105.613 482.539C105.613 483.413 105.037 484.053 104.163 484.053C103.779 484.053 103.544 483.968 103.075 483.627C102.669 483.328 102.435 483.221 102.2 483.221C101.773 483.221 101.411 483.435 101.411 483.883C101.411 484.565 102.221 485.077 103.352 485.077C105.72 485.077 107.341 483.84 107.341 482.155C107.341 481.131 106.765 480.128 105.485 479.808V479.765Z\" fill=\"#fff\"/>\n              <path d=\"M85.0473 490.706C88.3176 486.353 89.7267 485.559 91.0295 485.559C91.4549 485.559 91.8538 485.853 91.8538 486.853C91.8538 488.647 89.0355 496.529 86.0842 496.529C85.7651 496.529 85.4195 496.294 85.4195 495.971C85.4195 495.176 86.3767 495.5 86.3767 494.176C86.3767 493.176 85.6056 492.765 84.9675 492.765C83.771 492.765 83 493.912 83 495.147C83 496.735 84.0369 498 86.031 498C87.2541 498 88.5037 497.529 89.9129 496.294C90.4446 497.647 91.5879 497.912 92.8109 497.912C93.7415 497.912 94.5657 497.706 95.4431 497.265C97.1979 496.353 98.9261 494.559 100.654 492.118L99.7238 491.235C96.9055 495.118 94.6455 496.441 93.3693 496.441C92.9439 496.441 92.5716 496.176 92.5716 495.471C92.5716 493.765 94.8848 485.471 97.9424 485.471C98.2083 485.471 98.5805 485.559 98.5805 485.971C98.5805 486.647 97.6233 486.412 97.6233 487.676C97.6233 488.676 98.3146 489.088 98.9793 489.088C100.202 489.088 101 487.971 101 486.588C101 484.912 99.8035 484 98.0222 484C97.1713 484 95.6558 484.235 94.3264 485.706C93.8213 484.853 93.0768 484.088 91.6942 484.088C89.3279 484.088 87.2541 485.441 84.0369 489.853L85.0473 490.706Z\" fill=\"#fff\"/>\n            </g>\n            <text x=\"40\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uB300\uC218 \uBE14\uB85D</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class RightBodyMA5P21001 extends (/* unused pure expression or super */ null && (HTMLElement)){connectedCallback(){this.innerHTML="\n    <style>\n      .item:hover {\n        stroke-width: 5;\n      }\n      .item:hover path:first-child {\n        stroke: #4A47EC;\n      }\n    </style>\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 790 1095\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"789\" height=\"1094\" rx=\"9.5\" stroke=\"black\"/>\n        <g transform=\"translate(380 243)\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.7918 9.22943C24.742 10.4366 25.2344 11.6468 25.2344 12.3811C25.2344 13.1154 24.742 14.3255 22.7918 15.5327C20.8953 16.7066 18.0556 17.5469 14.7344 17.5469C11.4132 17.5469 8.57342 16.7066 6.67699 15.5327C4.72675 14.3255 4.23438 13.1154 4.23438 12.3811C4.23438 11.6468 4.72675 10.4366 6.67699 9.22943C7.72387 8.58143 9.05823 8.03507 10.6023 7.6756L7.52109 4.95254C3.45438 6.46878 0.734375 9.2283 0.734375 12.3811C0.734375 17.1671 7.00239 21.0469 14.7344 21.0469C22.4664 21.0469 28.7344 17.1671 28.7344 12.3811C28.7344 9.09504 25.7796 6.23619 21.4248 4.76699L22.334 -0.00177956L10.8845 3.98687L20.0635 11.9081L20.7616 8.2459C21.5204 8.53128 22.2017 8.86421 22.7918 9.22943Z\" fill=\"black\"/>\n        </g>\n        <g transform=\"translate(392 269)\">\n            <path d=\"M2 2.04688L2 338.047\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n        </g>\n    </svg>\n    ";}}class MA2P08601Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 572\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"566\" rx=\"23\" fill=\"white\"/>\n      <rect x=\"1\" y=\"1\" width=\"110\" height=\"566\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n     \n      <g cursor=\"pointer\" id=\"ma2p08601-plate-scale\">\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n        <rect x=\"34.0494\" y=\"70.9619\" width=\"43.4978\" height=\"2.17489\" rx=\"1.08745\" fill=\"#4E4E4E\"/>\n        <rect x=\"34.0494\" y=\"62.2622\" width=\"2.17489\" height=\"10.8745\" rx=\"1.08745\" fill=\"#4E4E4E\"/>\n        <rect x=\"75.3722\" y=\"62.2622\" width=\"2.17489\" height=\"10.8745\" rx=\"1.08745\" fill=\"#4E4E4E\"/>\n        <path d=\"M50.361 67.5249C50.361 66.4203 51.2564 65.5249 52.361 65.5249H59.2354C60.34 65.5249 61.2354 66.4203 61.2354 67.5249V77.4868H50.361V67.5249Z\" fill=\"#4E4E4E\"/>\n        <path d=\"M50.3611 77.4866H61.2356L69.9351 83.4675V89.4485H41.6616V83.4675L50.3611 77.4866Z\" fill=\"#4E4E4E\"/>\n        <circle cx=\"55.7982\" cy=\"72.0494\" r=\"3.26234\" fill=\"#4E4E4E\"/>\n        <path d=\"M19 59H53V61C53 62.1046 52.1046 63 51 63H21C19.8954 63 19 62.1046 19 61V59Z\" fill=\"#6D6D6D\"/>\n        <path d=\"M58 59H93V61C93 62.1046 92.1046 63 91 63H60C58.8954 63 58 62.1046 58 61V59Z\" fill=\"#6D6D6D\"/>\n        <circle cx=\"14\" cy=\"14\" r=\"16\" transform=\"matrix(1 0 0 -1 60 60)\" fill=\"#696969\" stroke=\"white\" stroke-width=\"4\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M74 37.6001C73.2268 37.6001 72.6 38.2269 72.6 39.0001V44.6001H67C66.2268 44.6001 65.6 45.2269 65.6 46.0001C65.6 46.7733 66.2268 47.4001 67 47.4001H72.6V53.0001C72.6 53.7733 73.2268 54.4001 74 54.4001C74.7732 54.4001 75.4 53.7733 75.4 53.0001V47.4001H81C81.7732 47.4001 82.4 46.7733 82.4 46.0001C82.4 45.2269 81.7732 44.6001 81 44.6001H75.4V39.0001C75.4 38.2269 74.7732 37.6001 74 37.6001Z\" fill=\"white\"/>\n      </g>\n\n      <rect x=\"16\" y=\"128\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n      <g cursor=\"pointer\" id=\"ma2p08601-item1\" data-fill=\"#4D94FF\">\n        <circle cx=\"56\" cy=\"196\" r=\"34\" fill=\"#4D94FF\"/>\n        <circle cx=\"56\" cy=\"196\" r=\"33\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      </g>\n\n      <g cursor=\"pointer\" id=\"ma2p08601-item2\" data-fill=\"#F5473C\">\n        <path d=\"M54.2679 250C55.0377 248.667 56.9623 248.667 57.7321 250L92.3731 310C93.1429 311.333 92.1806 313 90.641 313H21.359C19.8194 313 18.8571 311.333 19.6269 310L54.2679 250Z\" fill=\"#F5473C\"/>\n        <path d=\"M56.866 250.5L91.507 310.5C91.8919 311.167 91.4108 312 90.641 312H21.359C20.5892 312 20.1081 311.167 20.493 310.5L55.134 250.5C55.5189 249.833 56.4811 249.833 56.866 250.5Z\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      </g>\n\n      <g cursor=\"pointer\" id=\"ma2p08601-item3\" data-fill=\"#FFDB20\">\n        <rect x=\"25\" y=\"341\" width=\"62\" height=\"62\" rx=\"4\" fill=\"#FFDB20\"/>\n        <rect x=\"26\" y=\"342\" width=\"60\" height=\"60\" rx=\"3\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n      </g>\n\n      <rect x=\"16\" y=\"436\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n      \n      <g cursor=\"pointer\" id=\"ma2p08601-weight\">\n        <rect x=\"16.5\" y=\"464.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n        <rect x=\"16.5\" y=\"464.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.4214 490.25V479.971C43.4214 479.435 43.8531 479 44.3856 479H67.6143C68.1469 479 68.5786 479.435 68.5786 479.971V490.25H73.4059C73.8532 490.25 74.2417 490.56 74.3444 490.998L82.9738 527.806C83.1167 528.416 82.6574 529 82.0353 529H29.9647C29.3426 529 28.8833 528.416 29.0262 527.806L37.6556 490.998C37.7583 490.56 38.1468 490.25 38.5941 490.25H43.4214ZM48.2428 490.25V483.854H63.7572V490.25H48.2428Z\" fill=\"#A0A0A0\"/>\n      </g>\n    </svg>    \n    ";}}class MA2P08601ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 30)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uC811\uC2DC\uC800\uC6B8</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 160)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,180 L0,180\"  />\n          </g>\n          <g transform=\"translate(40, 90)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uBCC0\uC218</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 480)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"20\" font-weight=\"700\" style=\"user-select:none;\">\uC22B\uC790 \uCD94</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class HB2P06201Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 596\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"590\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"590\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n\n        <g cursor=\"pointer\" id=\"hb2p06201-item-1\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M64.1366 43.0227C64.4361 42.2504 65.3076 41.8628 66.0597 42.21C70.652 44.33 74.4701 47.8538 76.9501 52.2914C79.6748 57.1666 80.6139 62.8393 79.6057 68.3325C78.5975 73.8256 75.7052 78.7952 71.4269 82.3851C67.1486 85.975 61.7523 87.9604 56.1675 87.9994C50.5828 88.0384 45.1593 86.1285 40.8313 82.5987C36.5033 79.0688 33.5418 74.1401 32.4571 68.6616C31.3723 63.1831 32.2321 57.4977 34.8884 52.585C37.3063 48.1133 41.0748 44.5365 45.6371 42.3526C46.3843 41.9949 47.261 42.3703 47.5714 43.1384C47.8817 43.9065 47.5077 44.7759 46.7636 45.1402C42.8475 47.058 39.6131 50.1544 37.5274 54.0119C35.2031 58.3105 34.4508 63.2852 35.3999 68.0789C36.3491 72.8726 38.9404 77.1852 42.7274 80.2738C46.5144 83.3624 51.2599 85.0336 56.1466 84.9995C61.0333 84.9654 65.755 83.2281 69.4985 80.0869C73.242 76.9458 75.7728 72.5974 76.655 67.7909C77.5372 62.9844 76.7154 58.0207 74.3314 53.755C72.192 49.927 68.9147 46.876 64.9721 45.0131C64.2231 44.6592 63.837 43.7951 64.1366 43.0227Z\" fill=\"black\"/>\n          <path d=\"M53.762 38.0022C53.7371 38.0022 53.7039 38.0022 53.6624 38.0022C53.455 38.0022 53.3305 37.9981 53.289 37.9898C53.2475 37.9815 53.2268 37.9359 53.2268 37.8529C53.2268 37.6288 53.2724 37.4919 53.3637 37.4421C53.3803 37.4338 53.7827 37.4297 54.571 37.4297C55.2099 37.4297 55.575 37.4297 55.6663 37.4297C55.7576 37.4297 55.8157 37.4546 55.8406 37.5044C57.5914 41.62 58.4834 43.7318 58.5166 43.8396L59.1887 41.1885C59.6285 39.4377 59.8483 38.5042 59.8483 38.3881C59.8483 38.164 59.5828 38.0354 59.0518 38.0022C58.8526 38.0022 58.753 37.9566 58.753 37.8653C58.753 37.8487 58.7613 37.7989 58.7779 37.716C58.8111 37.5832 58.836 37.5044 58.8526 37.4795C58.8692 37.4546 58.9107 37.438 58.9771 37.4297C59.002 37.4297 59.1306 37.4338 59.3629 37.4421C59.5953 37.4504 59.9396 37.4587 60.396 37.467C60.8109 37.467 61.1262 37.4629 61.3419 37.4546C61.5577 37.4463 61.6821 37.4421 61.7153 37.4421C61.8398 37.4421 61.902 37.4836 61.902 37.5666C61.902 37.7492 61.8688 37.8736 61.8024 37.94C61.7858 37.9815 61.6946 38.0022 61.5286 38.0022C60.9395 38.0354 60.5702 38.2014 60.4209 38.5001L58.5664 45.8435C58.5498 45.9016 58.4626 45.9307 58.305 45.9307C58.1888 45.9307 58.1183 45.9224 58.0934 45.9058C58.0685 45.8809 57.5333 44.6238 56.4878 42.1345L54.9071 38.413L54.0981 41.6491C53.5587 43.7733 53.289 44.8727 53.289 44.9474C53.3305 45.2212 53.6292 45.3581 54.1852 45.3581H54.3096C54.3594 45.3996 54.3843 45.4328 54.3843 45.4577C54.3843 45.4826 54.376 45.5614 54.3594 45.6942C54.3262 45.8021 54.2847 45.8809 54.235 45.9307H54.0732C53.8159 45.9141 53.3679 45.9058 52.7289 45.9058C52.4966 45.9058 52.285 45.9058 52.0942 45.9058C51.9033 45.9058 51.7498 45.9058 51.6336 45.9058C51.5175 45.9058 51.4469 45.9099 51.422 45.9182C51.2976 45.9182 51.2354 45.8809 51.2354 45.8062C51.2354 45.773 51.2478 45.7066 51.2727 45.6071C51.2976 45.5075 51.3183 45.4494 51.3349 45.4328C51.3515 45.383 51.4469 45.3581 51.6212 45.3581C52.1854 45.3332 52.5505 45.1714 52.7165 44.8727C52.7497 44.8229 53.0442 43.6737 53.6002 41.425L54.4466 38.0396C54.43 38.0313 54.2018 38.0188 53.762 38.0022Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.818845\"/>\n        </g>\n\n        <g cursor=\"pointer\" id=\"hb2p06201-item-2\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M49.8505 144.414C50.1314 143.69 50.9489 143.326 51.6517 143.657C55.4355 145.438 58.581 148.363 60.6327 152.034C62.9138 156.115 63.7 160.864 62.8559 165.463C62.0119 170.062 59.5904 174.223 56.0086 177.228C52.4267 180.234 47.9089 181.896 43.2333 181.929C38.5577 181.961 34.0171 180.362 30.3936 177.407C26.7702 174.452 24.2908 170.326 23.3827 165.739C22.4745 161.152 23.1943 156.392 25.4182 152.279C27.4185 148.58 30.5228 145.612 34.2814 143.778C34.9795 143.438 35.802 143.79 36.0929 144.51C36.3839 145.231 36.0327 146.045 35.3385 146.394C32.1855 147.977 29.5815 150.494 27.8927 153.617C25.9802 157.155 25.3611 161.248 26.1421 165.193C26.9232 169.137 29.0554 172.686 32.1715 175.227C35.2877 177.769 39.1926 179.144 43.2136 179.116C47.2347 179.088 51.12 177.658 54.2004 175.073C57.2808 172.489 59.3632 168.911 60.0891 164.956C60.815 161 60.1389 156.916 58.1771 153.406C56.4449 150.306 53.806 147.826 50.6312 146.287C49.9322 145.948 49.5696 145.139 49.8505 144.414Z\" fill=\"black\"/>\n          <path d=\"M41.2198 140.07C41.199 140.07 41.1712 140.07 41.1365 140.07C40.9628 140.07 40.8586 140.067 40.8238 140.06C40.7891 140.053 40.7717 140.015 40.7717 139.945C40.7717 139.758 40.81 139.643 40.8864 139.601C40.9003 139.594 41.2372 139.591 41.8971 139.591C42.4321 139.591 42.7377 139.591 42.8141 139.591C42.8905 139.591 42.9392 139.612 42.96 139.653C44.4258 143.099 45.1726 144.867 45.2004 144.957L45.7631 142.738C46.1313 141.272 46.3154 140.491 46.3154 140.393C46.3154 140.206 46.0931 140.098 45.6485 140.07C45.4817 140.07 45.3984 140.032 45.3984 139.956C45.3984 139.942 45.4053 139.9 45.4192 139.831C45.447 139.719 45.4678 139.653 45.4817 139.633C45.4956 139.612 45.5304 139.598 45.5859 139.591C45.6068 139.591 45.7145 139.594 45.909 139.601C46.1035 139.608 46.3918 139.615 46.7739 139.622C47.1212 139.622 47.3852 139.619 47.5658 139.612C47.7464 139.605 47.8506 139.601 47.8784 139.601C47.9826 139.601 48.0347 139.636 48.0347 139.706C48.0347 139.858 48.0069 139.963 47.9514 140.018C47.9375 140.053 47.8611 140.07 47.7221 140.07C47.2289 140.098 46.9197 140.237 46.7947 140.487L45.2421 146.635C45.2282 146.684 45.1552 146.708 45.0232 146.708C44.926 146.708 44.8669 146.701 44.8461 146.687C44.8253 146.666 44.3772 145.614 43.5019 143.53L42.1785 140.414L41.5012 143.123C41.0496 144.902 40.8238 145.822 40.8238 145.885C40.8586 146.114 41.1087 146.229 41.5741 146.229H41.6783C41.72 146.263 41.7408 146.291 41.7408 146.312C41.7408 146.333 41.7339 146.399 41.72 146.51C41.6922 146.6 41.6575 146.666 41.6158 146.708H41.4803C41.265 146.694 40.8898 146.687 40.3549 146.687C40.1604 146.687 39.9833 146.687 39.8235 146.687C39.6637 146.687 39.5352 146.687 39.4379 146.687C39.3407 146.687 39.2816 146.691 39.2608 146.698C39.1566 146.698 39.1045 146.666 39.1045 146.604C39.1045 146.576 39.1149 146.52 39.1358 146.437C39.1566 146.354 39.174 146.305 39.1879 146.291C39.2017 146.25 39.2816 146.229 39.4275 146.229C39.8999 146.208 40.2056 146.072 40.3445 145.822C40.3723 145.781 40.6189 144.818 41.0844 142.936L41.7929 140.102C41.779 140.095 41.588 140.084 41.2198 140.07Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.685544\"/>\n          <path d=\"M75.665 144.414C75.9459 143.69 76.7633 143.326 77.4662 143.657C81.25 145.438 84.3954 148.363 86.4471 152.034C88.7282 156.115 89.5145 160.864 88.6704 165.463C87.8263 170.062 85.4048 174.223 81.823 177.228C78.2412 180.234 73.7234 181.896 69.0477 181.929C64.3721 181.961 59.8315 180.362 56.2081 177.407C52.5847 174.452 50.1053 170.326 49.1971 165.739C48.2889 161.152 49.0088 156.392 51.2327 152.279C53.2329 148.58 56.3372 145.612 60.0958 143.778C60.794 143.438 61.6164 143.79 61.9074 144.51C62.1984 145.231 61.8472 146.045 61.153 146.394C57.9999 147.977 55.396 150.494 53.7072 153.617C51.7946 157.155 51.1755 161.248 51.9566 165.193C52.7376 169.137 54.8699 172.686 57.986 175.227C61.1021 177.769 65.0071 179.144 69.0281 179.116C73.0491 179.088 76.9345 177.658 80.0148 175.073C83.0952 172.489 85.1777 168.911 85.9036 164.956C86.6295 161 85.9533 156.916 83.9916 153.406C82.2593 150.306 79.6205 147.826 76.4456 146.287C75.7466 145.948 75.3841 145.139 75.665 144.414Z\" fill=\"black\"/>\n          <g clip-path=\"url(#clip0_3227_8254)\">\n          <path d=\"M67.0343 140.07C67.0134 140.07 66.9856 140.07 66.9509 140.07C66.7772 140.07 66.673 140.067 66.6383 140.06C66.6036 140.053 66.5862 140.015 66.5862 139.945C66.5862 139.758 66.6244 139.643 66.7008 139.601C66.7147 139.594 67.0516 139.591 67.7116 139.591C68.2465 139.591 68.5522 139.591 68.6286 139.591C68.705 139.591 68.7536 139.612 68.7745 139.653C70.2403 143.099 70.9871 144.867 71.0148 144.957L71.5775 142.738C71.9457 141.272 72.1298 140.491 72.1298 140.393C72.1298 140.206 71.9075 140.098 71.4629 140.07C71.2962 140.07 71.2128 140.032 71.2128 139.956C71.2128 139.942 71.2198 139.9 71.2337 139.831C71.2615 139.719 71.2823 139.653 71.2962 139.633C71.3101 139.612 71.3448 139.598 71.4004 139.591C71.4212 139.591 71.5289 139.594 71.7234 139.601C71.9179 139.608 72.2062 139.615 72.5883 139.622C72.9357 139.622 73.1996 139.619 73.3803 139.612C73.5609 139.605 73.6651 139.601 73.6929 139.601C73.7971 139.601 73.8492 139.636 73.8492 139.706C73.8492 139.858 73.8214 139.963 73.7658 140.018C73.7519 140.053 73.6755 140.07 73.5366 140.07C73.0433 140.098 72.7342 140.237 72.6092 140.487L71.0565 146.635C71.0426 146.684 70.9697 146.708 70.8377 146.708C70.7404 146.708 70.6814 146.701 70.6606 146.687C70.6397 146.666 70.1916 145.614 69.3163 143.53L67.9929 140.414L67.3156 143.123C66.8641 144.902 66.6383 145.822 66.6383 145.885C66.673 146.114 66.9231 146.229 67.3886 146.229H67.4928C67.5345 146.263 67.5553 146.291 67.5553 146.312C67.5553 146.333 67.5483 146.399 67.5345 146.51C67.5067 146.6 67.4719 146.666 67.4302 146.708H67.2948C67.0794 146.694 66.7043 146.687 66.1694 146.687C65.9749 146.687 65.7977 146.687 65.6379 146.687C65.4782 146.687 65.3497 146.687 65.2524 146.687C65.1551 146.687 65.0961 146.691 65.0753 146.698C64.971 146.698 64.9189 146.666 64.9189 146.604C64.9189 146.576 64.9294 146.52 64.9502 146.437C64.971 146.354 64.9884 146.305 65.0023 146.291C65.0162 146.25 65.0961 146.229 65.242 146.229C65.7144 146.208 66.02 146.072 66.159 145.822C66.1868 145.781 66.4334 144.818 66.8988 142.936L67.6074 140.102C67.5935 140.095 67.4025 140.084 67.0343 140.07Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.685544\"/>\n          </g>\n        </g>\n\n        <g cursor=\"pointer\" id=\"hb2p06201-item-3\">\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M62.8505 229.117C63.1314 228.393 63.9489 228.029 64.6517 228.36C68.4355 230.142 71.581 233.066 73.6327 236.737C75.9138 240.818 76.7 245.568 75.8559 250.166C75.0119 254.765 72.5904 258.926 69.0086 261.931C65.4267 264.937 60.9089 266.599 56.2333 266.632C51.5577 266.664 47.0171 265.065 43.3936 262.11C39.7702 259.155 37.2908 255.029 36.3827 250.442C35.4745 245.855 36.1943 241.096 38.4182 236.983C40.4185 233.283 43.5228 230.315 47.2814 228.481C47.9795 228.141 48.802 228.493 49.0929 229.213C49.3839 229.934 49.0327 230.748 48.3385 231.097C45.1855 232.68 42.5815 235.197 40.8927 238.321C38.9802 241.858 38.3611 245.951 39.1421 249.896C39.9232 253.84 42.0554 257.389 45.1715 259.93C48.2877 262.472 52.1926 263.847 56.2136 263.819C60.2347 263.791 64.12 262.361 67.2004 259.777C70.2808 257.192 72.3632 253.614 73.0891 249.659C73.815 245.704 73.1389 241.619 71.1771 238.109C69.4449 235.01 66.806 232.529 63.6312 230.99C62.9322 230.651 62.5696 229.842 62.8505 229.117Z\" fill=\"black\"/>\n          <path d=\"M54.2198 224.773C54.199 224.773 54.1712 224.773 54.1365 224.773C53.9628 224.773 53.8586 224.77 53.8238 224.763C53.7891 224.756 53.7717 224.718 53.7717 224.648C53.7717 224.461 53.81 224.346 53.8864 224.304C53.9003 224.298 54.2372 224.294 54.8971 224.294C55.4321 224.294 55.7377 224.294 55.8141 224.294C55.8905 224.294 55.9392 224.315 55.96 224.357C57.4258 227.802 58.1726 229.57 58.2004 229.661L58.7631 227.441C59.1313 225.975 59.3154 225.194 59.3154 225.096C59.3154 224.909 59.0931 224.801 58.6485 224.773C58.4817 224.773 58.3984 224.735 58.3984 224.659C58.3984 224.645 58.4053 224.603 58.4192 224.534C58.447 224.423 58.4678 224.357 58.4817 224.336C58.4956 224.315 58.5304 224.301 58.5859 224.294C58.6068 224.294 58.7145 224.298 58.909 224.304C59.1035 224.311 59.3918 224.318 59.7739 224.325C60.1212 224.325 60.3852 224.322 60.5658 224.315C60.7464 224.308 60.8506 224.304 60.8784 224.304C60.9826 224.304 61.0347 224.339 61.0347 224.409C61.0347 224.561 61.0069 224.666 60.9514 224.721C60.9375 224.756 60.8611 224.773 60.7221 224.773C60.2289 224.801 59.9197 224.94 59.7947 225.19L58.2421 231.338C58.2282 231.387 58.1552 231.411 58.0232 231.411C57.926 231.411 57.8669 231.404 57.8461 231.39C57.8253 231.369 57.3772 230.317 56.5019 228.233L55.1785 225.117L54.5012 227.827C54.0496 229.605 53.8238 230.525 53.8238 230.588C53.8586 230.817 54.1087 230.932 54.5741 230.932H54.6783C54.72 230.967 54.7408 230.994 54.7408 231.015C54.7408 231.036 54.7339 231.102 54.72 231.213C54.6922 231.303 54.6575 231.369 54.6158 231.411H54.4803C54.265 231.397 53.8898 231.39 53.3549 231.39C53.1604 231.39 52.9833 231.39 52.8235 231.39C52.6637 231.39 52.5352 231.39 52.4379 231.39C52.3407 231.39 52.2816 231.394 52.2608 231.401C52.1566 231.401 52.1045 231.369 52.1045 231.307C52.1045 231.279 52.1149 231.224 52.1358 231.14C52.1566 231.057 52.174 231.008 52.1879 230.994C52.2017 230.953 52.2816 230.932 52.4275 230.932C52.8999 230.911 53.2056 230.775 53.3445 230.525C53.3723 230.484 53.6189 229.522 54.0844 227.639L54.7929 224.805C54.779 224.798 54.588 224.787 54.2198 224.773Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.685544\"/>\n          <path d=\"M26.0265 270.313C25.2754 270.511 24.5006 270.064 24.3552 269.301C23.5722 265.192 24.089 260.929 25.853 257.111C27.8143 252.867 31.1944 249.439 35.4111 247.419C39.6278 245.398 44.4171 244.912 48.954 246.043C53.4908 247.174 57.4911 249.852 60.2658 253.616C63.0404 257.379 64.4157 261.992 64.1547 266.661C63.8937 271.329 62.0128 275.761 58.8359 279.191C55.659 282.622 51.3851 284.837 46.7505 285.456C42.5819 286.012 38.3563 285.245 34.6633 283.282C33.9774 282.918 33.7791 282.045 34.1907 281.386C34.6023 280.728 35.4678 280.533 36.1579 280.89C39.2921 282.51 42.8589 283.137 46.3784 282.668C50.3642 282.136 54.0398 280.23 56.7719 277.28C59.504 274.33 61.1216 270.519 61.3461 266.504C61.5705 262.489 60.3878 258.522 58.0016 255.285C55.6154 252.048 52.1751 249.745 48.2734 248.773C44.3717 247.8 40.253 248.218 36.6266 249.956C33.0002 251.693 30.0933 254.641 28.4066 258.291C26.9173 261.514 26.4617 265.107 27.0827 268.58C27.2194 269.345 26.7775 270.114 26.0265 270.313Z\" fill=\"black\"/>\n          <g clip-path=\"url(#clip1_3227_8254)\">\n          <path d=\"M27.0802 273.477C27.0593 273.477 27.0315 273.477 26.9968 273.477C26.8231 273.477 26.7189 273.473 26.6842 273.466C26.6495 273.459 26.6321 273.421 26.6321 273.351C26.6321 273.164 26.6703 273.049 26.7467 273.008C26.7606 273.001 27.0975 272.997 27.7575 272.997C28.2924 272.997 28.5981 272.997 28.6745 272.997C28.7509 272.997 28.7995 273.018 28.8204 273.06C30.2862 276.505 31.033 278.273 31.0607 278.364L31.6234 276.144C31.9916 274.678 32.1757 273.897 32.1757 273.8C32.1757 273.612 31.9534 273.504 31.5088 273.477C31.3421 273.477 31.2587 273.438 31.2587 273.362C31.2587 273.348 31.2657 273.306 31.2796 273.237C31.3074 273.126 31.3282 273.06 31.3421 273.039C31.356 273.018 31.3907 273.004 31.4463 272.997C31.4671 272.997 31.5748 273.001 31.7693 273.008C31.9638 273.015 32.2521 273.021 32.6342 273.028C32.9816 273.028 33.2455 273.025 33.4262 273.018C33.6068 273.011 33.711 273.008 33.7388 273.008C33.843 273.008 33.8951 273.042 33.8951 273.112C33.8951 273.265 33.8673 273.369 33.8117 273.424C33.7978 273.459 33.7214 273.477 33.5825 273.477C33.0892 273.504 32.7801 273.643 32.6551 273.893L31.1024 280.041C31.0885 280.09 31.0156 280.114 30.8836 280.114C30.7863 280.114 30.7273 280.107 30.7065 280.093C30.6856 280.073 30.2375 279.02 29.3622 276.936L28.0388 273.82L27.3615 276.53C26.91 278.308 26.6842 279.229 26.6842 279.291C26.7189 279.52 26.969 279.635 27.4345 279.635H27.5387C27.5803 279.67 27.6012 279.697 27.6012 279.718C27.6012 279.739 27.5942 279.805 27.5803 279.916C27.5526 280.007 27.5178 280.073 27.4761 280.114H27.3407C27.1253 280.1 26.7502 280.093 26.2153 280.093C26.0208 280.093 25.8436 280.093 25.6838 280.093C25.5241 280.093 25.3956 280.093 25.2983 280.093C25.201 280.093 25.142 280.097 25.1211 280.104C25.0169 280.104 24.9648 280.073 24.9648 280.01C24.9648 279.982 24.9753 279.927 24.9961 279.843C25.0169 279.76 25.0343 279.711 25.0482 279.697C25.0621 279.656 25.142 279.635 25.2879 279.635C25.7603 279.614 26.0659 279.479 26.2049 279.229C26.2327 279.187 26.4793 278.225 26.9447 276.342L27.6533 273.508C27.6394 273.501 27.4484 273.49 27.0802 273.477Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.685544\"/>\n          </g>\n          <path d=\"M85.9735 270.313C86.7246 270.511 87.4994 270.064 87.6448 269.301C88.4278 265.192 87.911 260.929 86.147 257.111C84.1857 252.867 80.8056 249.439 76.5889 247.419C72.3722 245.398 67.5829 244.912 63.046 246.043C58.5092 247.174 54.5089 249.852 51.7342 253.616C48.9596 257.379 47.5843 261.992 47.8453 266.661C48.1063 271.329 49.9872 275.761 53.1641 279.191C56.341 282.622 60.6149 284.837 65.2495 285.456C69.4181 286.012 73.6437 285.245 77.3367 283.282C78.0226 282.918 78.2209 282.045 77.8093 281.386C77.3977 280.728 76.5322 280.533 75.8421 280.89C72.7079 282.51 69.1411 283.137 65.6216 282.668C61.6358 282.136 57.9602 280.23 55.2281 277.28C52.496 274.33 50.8784 270.519 50.6539 266.504C50.4295 262.489 51.6122 258.522 53.9984 255.285C56.3846 252.048 59.8249 249.745 63.7266 248.773C67.6283 247.8 71.747 248.218 75.3734 249.956C78.9998 251.693 81.9067 254.641 83.5934 258.291C85.0827 261.514 85.5383 265.107 84.9173 268.58C84.7806 269.345 85.2225 270.114 85.9735 270.313Z\" fill=\"black\"/>\n          <g clip-path=\"url(#clip2_3227_8254)\">\n          <path d=\"M81.1729 273.477C81.1521 273.477 81.1243 273.477 81.0896 273.477C80.9159 273.477 80.8117 273.473 80.777 273.466C80.7422 273.459 80.7249 273.421 80.7249 273.351C80.7249 273.164 80.7631 273.049 80.8395 273.008C80.8534 273.001 81.1903 272.997 81.8503 272.997C82.3852 272.997 82.6908 272.997 82.7673 272.997C82.8437 272.997 82.8923 273.018 82.9131 273.06C84.3789 276.505 85.1257 278.273 85.1535 278.364L85.7162 276.144C86.0844 274.678 86.2685 273.897 86.2685 273.8C86.2685 273.612 86.0462 273.504 85.6016 273.477C85.4349 273.477 85.3515 273.438 85.3515 273.362C85.3515 273.348 85.3585 273.306 85.3723 273.237C85.4001 273.126 85.421 273.06 85.4349 273.039C85.4488 273.018 85.4835 273.004 85.5391 272.997C85.5599 272.997 85.6676 273.001 85.8621 273.008C86.0566 273.015 86.3449 273.021 86.727 273.028C87.0743 273.028 87.3383 273.025 87.5189 273.018C87.6996 273.011 87.8038 273.008 87.8315 273.008C87.9357 273.008 87.9879 273.042 87.9879 273.112C87.9879 273.265 87.9601 273.369 87.9045 273.424C87.8906 273.459 87.8142 273.477 87.6752 273.477C87.182 273.504 86.8729 273.643 86.7478 273.893L85.1952 280.041C85.1813 280.09 85.1084 280.114 84.9764 280.114C84.8791 280.114 84.8201 280.107 84.7992 280.093C84.7784 280.073 84.3303 279.02 83.455 276.936L82.1316 273.82L81.4543 276.53C81.0027 278.308 80.777 279.229 80.777 279.291C80.8117 279.52 81.0618 279.635 81.5272 279.635H81.6314C81.6731 279.67 81.694 279.697 81.694 279.718C81.694 279.739 81.687 279.805 81.6731 279.916C81.6453 280.007 81.6106 280.073 81.5689 280.114H81.4335C81.2181 280.1 80.843 280.093 80.3081 280.093C80.1135 280.093 79.9364 280.093 79.7766 280.093C79.6168 280.093 79.4883 280.093 79.3911 280.093C79.2938 280.093 79.2348 280.097 79.2139 280.104C79.1097 280.104 79.0576 280.073 79.0576 280.01C79.0576 279.982 79.068 279.927 79.0889 279.843C79.1097 279.76 79.1271 279.711 79.141 279.697C79.1549 279.656 79.2348 279.635 79.3806 279.635C79.853 279.614 80.1587 279.479 80.2976 279.229C80.3254 279.187 80.572 278.225 81.0375 276.342L81.7461 273.508C81.7322 273.501 81.5411 273.49 81.1729 273.477Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.685544\"/>\n          </g>\n        </g>\n\n        <g cursor=\"pointer\" id=\"hb2p06201-item-4\">\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"312.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <path d=\"M39.6477 326.35H38.4496C33.9761 326.35 30.3496 329.976 30.3496 334.45V369.55C30.3496 374.023 33.9761 377.65 38.4496 377.65H73.5496C78.0231 377.65 81.6496 374.023 81.6496 369.55V334.45C81.6496 329.976 78.0231 326.35 73.5496 326.35H57.9996\" stroke=\"black\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M45.5535 322.706C45.2328 322.706 45.0631 322.687 45.0443 322.65C45.0348 322.631 45.0301 322.593 45.0301 322.537C45.0301 322.31 45.082 322.155 45.1857 322.07C45.2046 322.06 45.2847 322.056 45.4262 322.056C45.8128 322.074 46.454 322.084 47.3498 322.084C47.6704 322.084 47.9674 322.084 48.2409 322.084C48.5143 322.084 48.7265 322.079 48.8774 322.07C49.0282 322.06 49.1225 322.06 49.1602 322.07C49.3111 322.07 49.3866 322.117 49.3866 322.211C49.3866 322.23 49.3771 322.296 49.3583 322.409C49.3111 322.57 49.264 322.664 49.2168 322.692H49.1885C49.1697 322.692 49.1461 322.692 49.1178 322.692C49.0895 322.692 49.0565 322.692 49.0188 322.692C48.9811 322.692 48.9386 322.697 48.8915 322.706C48.8444 322.716 48.8019 322.716 48.7642 322.706C48.3965 322.716 48.1607 322.73 48.057 322.749C47.9533 322.768 47.8684 322.819 47.8024 322.904C47.793 322.923 47.6609 323.418 47.4064 324.389C47.1518 325.361 46.8972 326.379 46.6426 327.445C46.388 328.51 46.2465 329.137 46.2182 329.326C46.1994 329.458 46.1899 329.595 46.1899 329.736C46.1899 330.245 46.3361 330.646 46.6284 330.938C46.9207 331.231 47.3262 331.377 47.8448 331.377C48.4766 331.377 49.1084 331.165 49.7402 330.74C50.3719 330.316 50.834 329.675 51.1263 328.817L51.8477 325.974C52.2908 324.163 52.5124 323.22 52.5124 323.145C52.5124 322.89 52.2107 322.744 51.6072 322.706C51.3809 322.706 51.2677 322.654 51.2677 322.551C51.2677 322.532 51.2772 322.475 51.296 322.381C51.3337 322.23 51.362 322.14 51.3809 322.112C51.3998 322.084 51.4469 322.065 51.5223 322.056C51.5506 322.056 51.7015 322.06 51.975 322.07C52.2484 322.079 52.6444 322.089 53.1631 322.098C53.644 322.098 54.0117 322.093 54.2663 322.084C54.5209 322.074 54.6576 322.07 54.6765 322.07C54.818 322.07 54.8887 322.117 54.8887 322.211C54.8887 322.419 54.851 322.56 54.7755 322.636C54.7472 322.683 54.6435 322.706 54.4643 322.706C53.7948 322.744 53.3752 322.933 53.2055 323.272C53.1866 323.319 52.9509 324.229 52.4983 326.002C52.1117 327.595 51.8759 328.534 51.7911 328.817C51.4799 329.76 50.9377 330.528 50.1645 331.122C49.3913 331.716 48.5898 332.018 47.76 332.027C46.8924 332.027 46.1994 331.763 45.6808 331.235C45.1621 330.707 44.8981 330.08 44.8887 329.354V329.128C44.8887 328.958 45.148 327.836 45.6666 325.761C46.1287 323.866 46.3597 322.89 46.3597 322.834C46.3597 322.768 46.0909 322.725 45.5535 322.706Z\" fill=\"black\" stroke=\"black\" stroke-width=\"0.911681\"/>\n        </g>\n        <rect x=\"16\" y=\"416\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-fill=\"#FFEA7E\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"444\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FFEA7E\"/>\n          <rect x=\"17\" y=\"445\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#8BD5FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"444\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#8BD5FF\"/>\n          <rect x=\"61\" y=\"445\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#CEE868\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"488\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CEE868\"/>\n          <rect x=\"17\" y=\"489\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#FF9999\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"488\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FF9999\"/>\n          <rect x=\"61\" y=\"489\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#CFA4FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"532\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CFA4FF\"/>\n          <rect x=\"17\" y=\"533\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n\n        <g data-fill=\"#fff\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"532\" width=\"36\" height=\"36\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"61\" y=\"533\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_3227_8254\">\n        <rect width=\"11.907\" height=\"11.907\" fill=\"white\" transform=\"translate(62.9541 137.297)\"/>\n        </clipPath>\n        <clipPath id=\"clip1_3227_8254\">\n        <rect width=\"11.907\" height=\"11.907\" fill=\"white\" transform=\"translate(23 270.703)\"/>\n        </clipPath>\n        <clipPath id=\"clip2_3227_8254\">\n        <rect width=\"11.907\" height=\"11.907\" fill=\"white\" transform=\"translate(77.0928 270.703)\"/>\n        </clipPath>\n        </defs>\n      </svg>\n    ";}}class HB2P06201ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 10)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC9D1\uD569 1\uAC1C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 110)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC9D1\uD569 2\uAC1C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 210)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC9D1\uD569 3\uAC1C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 310)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC804\uCCB4\uC9D1\uD569</text>\n          </g>\n        </g>\n          <g transform=\"translate(5, 410)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,130 L0,130\"  />\n          </g>\n          <g transform=\"translate(40, 65)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uBA74 \uC0C9\uC0C1</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA6P23601Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 228\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"222\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"222\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n\n        <g id=\"ma6p23601-item-1\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"27\" y=\"42\" width=\"58\" height=\"44\" rx=\"8\" fill=\"#EDEDED\"/>\n          <rect x=\"28\" y=\"43\" width=\"56\" height=\"42\" rx=\"7\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n          <rect x=\"33\" y=\"49\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"49.3333\" y=\"49\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"65.6667\" y=\"49\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"33\" y=\"60\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"49.3333\" y=\"60\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"65.6667\" y=\"60\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"33\" y=\"71\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"49.3333\" y=\"71\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"65.6667\" y=\"71\" width=\"13.3333\" height=\"8\" rx=\"2\" fill=\"white\"/>\n        </g>\n\n        <g id=\"ma6p23601-item-2\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip0_3729_29018)\">\n            <path d=\"M29 140C29 138.895 29.8954 138 31 138H81C82.1046 138 83 138.895 83 140V174C83 178.418 79.4183 182 75 182H37C32.5817 182 29 178.418 29 174V140Z\" fill=\"#EDEDED\"/>\n            <rect x=\"29\" y=\"138\" width=\"54\" height=\"10\" fill=\"#7BCEFD\"/>\n            <rect x=\"35\" y=\"154\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n            <rect x=\"35\" y=\"166\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n            <rect x=\"58\" y=\"154\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n            <rect x=\"58\" y=\"166\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          </g>\n          <path d=\"M30 140C30 139.448 30.4477 139 31 139H81C81.5523 139 82 139.448 82 140V174C82 177.866 78.866 181 75 181H37C33.134 181 30 177.866 30 174V140Z\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n          <defs>\n            <clipPath id=\"clip0_3729_29018\">\n            <path d=\"M29 140C29 138.895 29.8954 138 31 138H81C82.1046 138 83 138.895 83 140V174C83 178.418 79.4183 182 75 182H37C32.5817 182 29 178.418 29 174V140Z\" fill=\"white\"/>\n            </clipPath>\n          </defs>\n        </g>\n      </svg>\n    ";}}class MA6P23601ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n     <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 193\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 47)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC790\uB8CC \uB9CC\uB4E4\uAE30</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 153)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB300\uD46F\uAC12</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA6P24001Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 324\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"318\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"318\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        \n        <g id=\"ma6p24001-item-1\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip0_4003_23652)\">\n          <rect x=\"29\" y=\"40\" width=\"54\" height=\"48\" fill=\"#F2F2F2\"/>\n          <rect x=\"29\" y=\"40\" width=\"54\" height=\"14\" fill=\"#CEE868\"/>\n          <path d=\"M45 42H47V86H45V42Z\" fill=\"#CCCCCC\"/>\n          </g>\n          <rect x=\"30\" y=\"41\" width=\"52\" height=\"46\" rx=\"7\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n        </g>\n        \n        <g id=\"ma6p24001-item-2\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip1_4003_23652)\">\n          <rect x=\"29\" y=\"136\" width=\"54\" height=\"48\" fill=\"#F2F2F2\"/>\n          <rect x=\"29\" y=\"136\" width=\"54\" height=\"14\" fill=\"#CEE868\"/>\n          <path d=\"M47 138H49V182H47V138Z\" fill=\"#CCCCCC\"/>\n          <path d=\"M63 138H65V182H63V138Z\" fill=\"#CCCCCC\"/>\n          </g>\n          <rect x=\"30\" y=\"137\" width=\"52\" height=\"46\" rx=\"7\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n        </g>\n        <g id=\"ma6p24001-item-3\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"216.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip2_4003_23652)\">\n          <path d=\"M29 236C29 234.895 29.8954 234 31 234H81C82.1046 234 83 234.895 83 236V270C83 274.418 79.4183 278 75 278H37C32.5817 278 29 274.418 29 270V236Z\" fill=\"#EDEDED\"/>\n          <rect x=\"29\" y=\"234\" width=\"54\" height=\"10\" fill=\"#7BCEFD\"/>\n          <rect x=\"35\" y=\"250\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"35\" y=\"262\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"58\" y=\"250\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"58\" y=\"262\" width=\"19\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          </g>\n          <path d=\"M30 236C30 235.448 30.4477 235 31 235H81C81.5523 235 82 235.448 82 236V270C82 273.866 78.866 277 75 277H37C33.134 277 30 273.866 30 270V236Z\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_4003_23652\">\n        <rect x=\"29\" y=\"40\" width=\"54\" height=\"48\" rx=\"8\" fill=\"white\"/>\n        </clipPath>\n        <clipPath id=\"clip1_4003_23652\">\n        <rect x=\"29\" y=\"136\" width=\"54\" height=\"48\" rx=\"8\" fill=\"white\"/>\n        </clipPath>\n        <clipPath id=\"clip2_4003_23652\">\n        <path d=\"M29 236C29 234.895 29.8954 234 31 234H81C82.1046 234 83 234.895 83 236V270C83 274.418 79.4183 278 75 278H37C32.5817 278 29 274.418 29 270V236Z\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n      </svg>\n    ";}}class MA6P24001ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n       <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 300\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 55)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC904\uAE30\uC640 \uC78E</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 155)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC904\uAE30\uC640 \uC78E</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 255)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 0)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC790\uB8CC</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA6P24201Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 456\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"450\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"450\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n\n        <g id=\"ma6p24201-item-1\" cursor=\"pointer\"> \n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"26\" y=\"39\" width=\"60\" height=\"49\" rx=\"8\" fill=\"#E6EAF5\"/>\n          <rect x=\"27\" y=\"40\" width=\"58\" height=\"47\" rx=\"7\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n          <rect x=\"26\" y=\"39\" width=\"60\" height=\"10\" fill=\"#8BD5FF\"/>\n          <rect x=\"31\" y=\"52.5\" width=\"27\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"31\" y=\"63.5\" width=\"27\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"31\" y=\"74.5\" width=\"27\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <path d=\"M46.1438 58C46.4932 58 46.8236 57.9342 47.1353 57.8026C47.2576 57.751 47.3792 57.6881 47.5 57.6141L47.5 55.3037C47.5 55.3037 47.0565 55.6562 46.8271 55.7541C46.5976 55.8519 46.363 55.9008 46.1233 55.9008C45.9247 55.9008 45.7158 55.8705 45.4966 55.8097C45.2774 55.749 44.9623 55.6343 44.5514 55.4656C44.1267 55.2902 43.7825 55.1687 43.5188 55.1012C43.2551 55.0337 43.0034 55 42.7637 55C42.4144 55 42.0873 55.0725 41.7825 55.2176C41.6872 55.263 41.593 55.3158 41.5 55.3761L41.5 57.7166C41.6986 57.5007 41.9024 57.3421 42.1113 57.2409C42.3202 57.1397 42.774 57.089 42.774 57.089C42.774 57.089 43.1438 57.1194 43.3493 57.1801C43.5548 57.2409 43.8527 57.3488 44.2432 57.504C44.6815 57.6862 45.0445 57.8144 45.3322 57.8887C45.6199 57.9629 45.8904 58 46.1438 58Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M46.1438 69C46.4932 69 46.8236 68.9342 47.1353 68.8026C47.2576 68.751 47.3792 68.6881 47.5 68.6141L47.5 66.3037C47.5 66.3037 47.0565 66.6562 46.8271 66.7541C46.5976 66.8519 46.363 66.9008 46.1233 66.9008C45.9247 66.9008 45.7158 66.8705 45.4966 66.8097C45.2774 66.749 44.9623 66.6343 44.5514 66.4656C44.1267 66.2902 43.7825 66.1687 43.5188 66.1012C43.2551 66.0337 43.0034 66 42.7637 66C42.4144 66 42.0873 66.0725 41.7825 66.2176C41.6872 66.263 41.593 66.3158 41.5 66.3761L41.5 68.7166C41.6986 68.5007 41.9024 68.3421 42.1113 68.2409C42.3202 68.1397 42.774 68.089 42.774 68.089C42.774 68.089 43.1438 68.1194 43.3493 68.1801C43.5548 68.2409 43.8527 68.3488 44.2432 68.504C44.6815 68.6862 45.0445 68.8144 45.3322 68.8887C45.6199 68.9629 45.8904 69 46.1438 69Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M46.1438 80C46.4932 80 46.8236 79.9342 47.1353 79.8026C47.2576 79.751 47.3792 79.6881 47.5 79.6141L47.5 77.3037C47.5 77.3037 47.0565 77.6562 46.8271 77.7541C46.5976 77.8519 46.363 77.9008 46.1233 77.9008C45.9247 77.9008 45.7158 77.8705 45.4966 77.8097C45.2774 77.749 44.9623 77.6343 44.5514 77.4656C44.1267 77.2902 43.7825 77.1687 43.5188 77.1012C43.2551 77.0337 43.0034 77 42.7637 77C42.4144 77 42.0873 77.0725 41.7825 77.2176C41.6872 77.263 41.593 77.3158 41.5 77.3761L41.5 79.7166C41.6986 79.5007 41.9024 79.3421 42.1113 79.2409C42.3202 79.1397 42.774 79.089 42.774 79.089C42.774 79.089 43.1438 79.1194 43.3493 79.1801C43.5548 79.2409 43.8527 79.3488 44.2432 79.504C44.6815 79.6862 45.0445 79.8144 45.3322 79.8887C45.6199 79.9629 45.8904 80 46.1438 80Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M62 52.5H63V82.5H62V52.5Z\" fill=\"#BCC1CC\"/>\n          <rect x=\"67\" y=\"52.5\" width=\"14\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"67\" y=\"63.5\" width=\"14\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"67\" y=\"74.5\" width=\"14\" height=\"8\" rx=\"2\" fill=\"white\"/>\n        </g>\n        <rect id=\"ma6p24201-item-1-dim\" x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <g id=\"ma6p24201-item-2\" cursor=\"pointer\"> \n          <path d=\"M62 41H63V86H62V41Z\" fill=\"#BCC1CC\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <rect x=\"23\" y=\"136\" width=\"66\" height=\"49\" rx=\"8\" fill=\"#E6EAF5\"/>\n          <rect x=\"24\" y=\"137\" width=\"64\" height=\"47\" rx=\"7\" stroke=\"black\" stroke-opacity=\"0.2\" stroke-width=\"2\"/>\n          <rect x=\"23\" y=\"136\" width=\"66\" height=\"10\" fill=\"#8BD5FF\"/>\n          <rect x=\"28\" y=\"149.5\" width=\"22\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"28\" y=\"160.5\" width=\"22\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"28\" y=\"171.5\" width=\"22\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <path d=\"M40.6438 155C40.9932 155 41.3236 154.934 41.6353 154.803C41.7576 154.751 41.8792 154.688 42 154.614L42 152.304C42 152.304 41.5565 152.656 41.3271 152.754C41.0976 152.852 40.863 152.901 40.6233 152.901C40.4247 152.901 40.2158 152.87 39.9966 152.81C39.7774 152.749 39.4623 152.634 39.0514 152.466C38.6267 152.29 38.2825 152.169 38.0188 152.101C37.7551 152.034 37.5034 152 37.2637 152C36.9144 152 36.5873 152.073 36.2825 152.218C36.1872 152.263 36.093 152.316 36 152.376L36 154.717C36.1986 154.501 36.4024 154.342 36.6113 154.241C36.8202 154.14 37.274 154.089 37.274 154.089C37.274 154.089 37.6438 154.119 37.8493 154.18C38.0548 154.241 38.3527 154.349 38.7432 154.504C39.1815 154.686 39.5445 154.814 39.8322 154.889C40.1199 154.963 40.3904 155 40.6438 155Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M40.6438 166C40.9932 166 41.3236 165.934 41.6353 165.803C41.7576 165.751 41.8792 165.688 42 165.614L42 163.304C42 163.304 41.5565 163.656 41.3271 163.754C41.0976 163.852 40.863 163.901 40.6233 163.901C40.4247 163.901 40.2158 163.87 39.9966 163.81C39.7774 163.749 39.4623 163.634 39.0514 163.466C38.6267 163.29 38.2825 163.169 38.0188 163.101C37.7551 163.034 37.5034 163 37.2637 163C36.9144 163 36.5873 163.073 36.2825 163.218C36.1872 163.263 36.093 163.316 36 163.376L36 165.717C36.1986 165.501 36.4024 165.342 36.6113 165.241C36.8202 165.14 37.274 165.089 37.274 165.089C37.274 165.089 37.6438 165.119 37.8493 165.18C38.0548 165.241 38.3527 165.349 38.7432 165.504C39.1815 165.686 39.5445 165.814 39.8322 165.889C40.1199 165.963 40.3904 166 40.6438 166Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M40.6438 177C40.9932 177 41.3236 176.934 41.6353 176.803C41.7576 176.751 41.8792 176.688 42 176.614L42 174.304C42 174.304 41.5565 174.656 41.3271 174.754C41.0976 174.852 40.863 174.901 40.6233 174.901C40.4247 174.901 40.2158 174.87 39.9966 174.81C39.7774 174.749 39.4623 174.634 39.0514 174.466C38.6267 174.29 38.2825 174.169 38.0188 174.101C37.7551 174.034 37.5034 174 37.2637 174C36.9144 174 36.5873 174.073 36.2825 174.218C36.1872 174.263 36.093 174.316 36 174.376L36 176.717C36.1986 176.501 36.4024 176.342 36.6113 176.241C36.8202 176.14 37.274 176.089 37.274 176.089C37.274 176.089 37.6438 176.119 37.8493 176.18C38.0548 176.241 38.3527 176.349 38.7432 176.504C39.1815 176.686 39.5445 176.814 39.8322 176.889C40.1199 176.963 40.3904 177 40.6438 177Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M53 149.5H54V179.5H53V149.5Z\" fill=\"#BCC1CC\"/>\n          <rect x=\"57\" y=\"149.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"57\" y=\"160.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"57\" y=\"171.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <path d=\"M70 149.5H71V179.5H70V149.5Z\" fill=\"#BCC1CC\"/>\n          <rect x=\"74\" y=\"149.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"74\" y=\"160.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <rect x=\"74\" y=\"171.5\" width=\"10\" height=\"8\" rx=\"2\" fill=\"white\"/>\n          <path d=\"M53 138H54V183H53V138Z\" fill=\"#BCC1CC\"/>\n          <path d=\"M70 138H71V183H70V138Z\" fill=\"#BCC1CC\"/>\n        </g>\n        <rect id=\"ma6p24201-item-2-dim\" x=\"16.5\" y=\"120.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <rect x=\"16\" y=\"224\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n        \n        <g id=\"ma6p24201-item-3\" cursor=\"pointer\"> \n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip0_5219_28868)\">\n          <rect width=\"60\" height=\"42\" transform=\"translate(26 271)\" fill=\"white\"/>\n          <rect x=\"27\" y=\"288\" width=\"26\" height=\"24\" rx=\"3\" fill=\"#FC9AD0\" stroke=\"#FC6AB3\" stroke-width=\"2\"/>\n          <line x1=\"28\" y1=\"295\" x2=\"52\" y2=\"295\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"35.5\" y1=\"311\" x2=\"35.5\" y2=\"289\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"44.5\" y1=\"311\" x2=\"44.5\" y2=\"289\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <rect x=\"59\" y=\"288\" width=\"26\" height=\"24\" rx=\"3\" fill=\"#7BCEFD\" stroke=\"#48AFFD\" stroke-width=\"2\"/>\n          <line x1=\"60\" y1=\"300\" x2=\"84\" y2=\"300\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"67.5\" y1=\"311\" x2=\"67.5\" y2=\"289\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"76.5\" y1=\"311\" x2=\"76.5\" y2=\"289\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <path d=\"M47.6213 271L53.7426 277.121L50.682 280.182L47.6213 283.243L45.5 281.121L47.5607 279.061L49.5 277.121L47.5 275.121L45.5 273.121L47.6213 271Z\" fill=\"#404654\"/>\n          <path d=\"M49.5 277.121L47.5 275.121H35V279.061H47.5607L49.5 277.121Z\" fill=\"#404654\"/>\n          <path d=\"M63.8787 271L57.7574 277.121L60.818 280.182L63.8787 283.243L66 281.121L63.9393 279.061L62 277.121L64 275.121L66 273.121L63.8787 271Z\" fill=\"#404654\"/>\n          <path d=\"M62 277.121L64 275.121H76.5V279.061H63.9393L62 277.121Z\" fill=\"#404654\"/>\n          </g>\n        </g>\n        <rect id=\"ma6p24201-item-3-dim\" x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <g id=\"ma6p24201-item-4\" cursor=\"pointer\"> \n          <rect x=\"16.5\" y=\"348.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"348.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip1_5219_28868)\">\n          <rect width=\"59\" height=\"44\" transform=\"translate(26.5 366)\" fill=\"white\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.5 382C28.2909 382 26.5 383.791 26.5 386V406C26.5 408.209 28.2909 410 30.5 410H56.5C57.9806 410 59.2733 409.196 59.9649 408H55.5C54.3954 408 53.5 407.105 53.5 406V386C53.5 384.895 54.3954 384 55.5 384H59.9649C59.2733 382.804 57.9806 382 56.5 382H30.5Z\" fill=\"#FC9AD0\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0352 384H56.5C57.6046 384 58.5 384.895 58.5 386V406C58.5 407.105 57.6046 408 56.5 408H52.0352C52.7268 409.196 54.0195 410 55.5 410H81.5C83.7092 410 85.5 408.209 85.5 406V386C85.5 383.791 83.7092 382 81.5 382H55.5C54.0195 382 52.7268 382.804 52.0352 384Z\" fill=\"#7BCEFD\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0351 384H30.5C29.3954 384 28.5 384.895 28.5 386V406C28.5 407.105 29.3954 408 30.5 408H52.0351C52.7267 409.196 54.0194 410 55.5 410H30.5C28.2909 410 26.5 408.209 26.5 406V386C26.5 383.791 28.2909 382 30.5 382H55.5C54.0194 382 52.7267 382.804 52.0351 384Z\" fill=\"#FC6AB3\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.5 410H81.5C83.7091 410 85.5 408.209 85.5 406V386C85.5 383.791 83.7091 382 81.5 382H56.5C57.9806 382 59.2733 382.804 59.9649 384H81.5C82.6046 384 83.5 384.895 83.5 386V406C83.5 407.105 82.6046 408 81.5 408H59.9649C59.2733 409.196 57.9806 410 56.5 410Z\" fill=\"#48AFFD\"/>\n          <line x1=\"28.5\" y1=\"390\" x2=\"53.5\" y2=\"390\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"38\" y1=\"408\" x2=\"38\" y2=\"384\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"49\" y1=\"408\" x2=\"49\" y2=\"384\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"58.5\" y1=\"396\" x2=\"83.5\" y2=\"396\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"63\" y1=\"408\" x2=\"63\" y2=\"384\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"74\" y1=\"408\" x2=\"74\" y2=\"384\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0352 384H56.5C57.6046 384 58.5 384.895 58.5 386V406C58.5 407.105 57.6046 408 56.5 408H52.0352C52.7268 409.196 54.0195 410 55.5 410H56.5C58.7092 410 60.5 408.209 60.5 406V386C60.5 383.791 58.7092 382 56.5 382H55.5C54.0195 382 52.7268 382.804 52.0352 384Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.5 410H56.5C57.9806 410 59.2733 409.196 59.9649 408H55.5C54.3954 408 53.5 407.105 53.5 406V386C53.5 384.895 54.3954 384 55.5 384H59.9649C59.2733 382.804 57.9806 382 56.5 382H55.5C53.2909 382 51.5 383.791 51.5 386V406C51.5 408.209 53.2909 410 55.5 410Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n          <path d=\"M70.1213 366L76.2426 372.121L73.1819 375.182L70.1213 378.243L67.9999 376.121L70.0606 374.061L71.9999 372.121L69.9999 370.121L67.9999 368.121L70.1213 366Z\" fill=\"#404654\"/>\n          <path d=\"M71.9999 372.121L69.9999 370.121H57.4999V374.061H70.0606L71.9999 372.121Z\" fill=\"#404654\"/>\n          <path d=\"M41.6213 366L35.5 372.121L38.5607 375.182L41.6213 378.243L43.7426 376.121L41.682 374.061L39.7426 372.121L41.7426 370.121L43.7426 368.121L41.6213 366Z\" fill=\"#404654\"/>\n          <path d=\"M39.7426 372.121L41.7426 370.121H54.2426V374.061H41.682L39.7426 372.121Z\" fill=\"#404654\"/>\n          </g>\n        </g>\n        <rect id=\"ma6p24201-item-4-dim\" x=\"16.5\" y=\"348.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n        <defs>\n        <clipPath id=\"clip0_5219_28868\">\n        <rect width=\"60\" height=\"42\" fill=\"white\" transform=\"translate(26 271)\"/>\n        </clipPath>\n        <clipPath id=\"clip1_5219_28868\">\n        <rect width=\"59\" height=\"44\" fill=\"white\" transform=\"translate(26.5 366)\"/>\n        </clipPath>\n        </defs>\n      </svg>\n    ";}}class MA6P24201ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 300\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, -15)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB3C4\uC218\uBD84\uD3EC\uD45C 1\uAC1C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 85)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB3C4\uC218\uBD84\uD3EC\uD45C 2\uAC1C</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 225)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uD569\uCE58\uAE30</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 325)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uCABC\uAC1C\uAE30</text>\n          </g>\n        </g>\n      </svg>\n    ";}}class MA6P24501Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 112 536\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"530\" rx=\"23\" fill=\"white\"/>\n        <rect x=\"1\" y=\"1\" width=\"110\" height=\"530\" rx=\"23\" stroke=\"#BCC1CC\" stroke-width=\"2\"/>\n        \n        <g id=\"ma6p24501-item-1\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g opacity=\"0.5\">\n          <path d=\"M83 82L83 83L31 83L31 82L83 82Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 75L83 76L31 76L31 75L83 75Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 68L83 69L31 69L31 68L83 68Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 61L83 62L31 62L31 61L83 61Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 54L83 55L31 55L31 54L83 54Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 47L83 48L31 48L31 47L83 47Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M83 40L83 41L31 41L31 40L83 40Z\" fill=\"#E6EBF5\"/>\n          </g>\n          <g opacity=\"0.5\">\n          <path d=\"M79 38.5H80V90.5H79V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M72 38.5H73V90.5H72V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M65 38.5H66V90.5H65V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M58 38.5H59V90.5H58V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M51 38.5H52V90.5H51V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M44 38.5H45V90.5H44V38.5Z\" fill=\"#E6EBF5\"/>\n          <path d=\"M37 38.5H38V90.5H37V38.5Z\" fill=\"#E6EBF5\"/>\n          </g>\n          <path d=\"M83 89L83 91L29 91L29 89L83 89Z\" fill=\"#4E576A\"/>\n          <path d=\"M29 37H31V91H29V37Z\" fill=\"#4E576A\"/>\n          <path d=\"M36 58C36 56.8954 36.8954 56 38 56H42C43.1046 56 44 56.8954 44 58V89H36V58Z\" fill=\"#8BD5FF\"/>\n          <path d=\"M47 69C47 67.8954 47.8954 67 49 67H53C54.1046 67 55 67.8954 55 69V89H47V69Z\" fill=\"#FC9AD0\"/>\n          <path d=\"M58 65C58 63.8954 58.8954 63 60 63H64C65.1046 63 66 63.8954 66 65V89H58V65Z\" fill=\"#FFEA7E\"/>\n          <path d=\"M69 79C69 77.8954 69.8954 77 71 77H75C76.1046 77 77 77.8954 77 79V89H69V79Z\" fill=\"#CEE868\"/>\n          <path d=\"M40 47L51 58.5L62 54L73.5 68.5\" stroke=\"#828A9C\" stroke-width=\"2\"/>\n          <circle cx=\"40\" cy=\"47\" r=\"3\" fill=\"#FF9999\"/>\n          <circle cx=\"51\" cy=\"58\" r=\"3\" fill=\"#FF9999\"/>\n          <circle cx=\"62\" cy=\"54\" r=\"3\" fill=\"#FF9999\"/>\n          <circle cx=\"73\" cy=\"68\" r=\"3\" fill=\"#FF9999\"/>\n        </g>\n        <rect id=\"ma6p24501-item-1-dim\" x=\"16.5\" y=\"24.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <rect x=\"16\" y=\"128\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g id=\"ma6p24501-item-2\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"156.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"156.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip0_3761_8476)\">\n          <rect width=\"60\" height=\"42\" transform=\"translate(26 175)\" fill=\"white\"/>\n          <rect x=\"27\" y=\"192\" width=\"26\" height=\"24\" rx=\"3\" fill=\"#FC9AD0\" stroke=\"#FC6AB3\" stroke-width=\"2\"/>\n          <line x1=\"28\" y1=\"199\" x2=\"52\" y2=\"199\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"35.5\" y1=\"215\" x2=\"35.5\" y2=\"193\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"44.5\" y1=\"215\" x2=\"44.5\" y2=\"193\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <rect x=\"59\" y=\"192\" width=\"26\" height=\"24\" rx=\"3\" fill=\"#7BCEFD\" stroke=\"#48AFFD\" stroke-width=\"2\"/>\n          <line x1=\"60\" y1=\"204\" x2=\"84\" y2=\"204\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"67.5\" y1=\"215\" x2=\"67.5\" y2=\"193\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"76.5\" y1=\"215\" x2=\"76.5\" y2=\"193\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <path d=\"M47.6213 175L53.7426 181.121L50.682 184.182L47.6213 187.243L45.5 185.121L47.5607 183.061L49.5 181.121L47.5 179.121L45.5 177.121L47.6213 175Z\" fill=\"#404654\"/>\n          <path d=\"M49.5 181.121L47.5 179.121H35V183.061H47.5607L49.5 181.121Z\" fill=\"#404654\"/>\n          <path d=\"M63.8787 175L57.7574 181.121L60.818 184.182L63.8787 187.243L66 185.121L63.9393 183.061L62 181.121L64 179.121L66 177.121L63.8787 175Z\" fill=\"#404654\"/>\n          <path d=\"M62 181.121L64 179.121H76.5V183.061H63.9393L62 181.121Z\" fill=\"#404654\"/>\n          </g>\n        </g>\n        <rect id=\"ma6p24501-item-2-dim\" x=\"16.5\" y=\"156.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <g id=\"ma6p24501-item-3\" cursor=\"pointer\">\n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"white\"/>\n          <rect x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" stroke=\"#E6E6E6\"/>\n          <g clip-path=\"url(#clip1_3761_8476)\">\n          <rect width=\"59\" height=\"44\" transform=\"translate(26.5 270)\" fill=\"white\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.5 286C28.2909 286 26.5 287.791 26.5 290V310C26.5 312.209 28.2909 314 30.5 314H56.5C57.9806 314 59.2733 313.196 59.9649 312H55.5C54.3954 312 53.5 311.105 53.5 310V290C53.5 288.895 54.3954 288 55.5 288H59.9649C59.2733 286.804 57.9806 286 56.5 286H30.5Z\" fill=\"#FC9AD0\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0352 288H56.5C57.6046 288 58.5 288.895 58.5 290V310C58.5 311.105 57.6046 312 56.5 312H52.0352C52.7268 313.196 54.0195 314 55.5 314H81.5C83.7092 314 85.5 312.209 85.5 310V290C85.5 287.791 83.7092 286 81.5 286H55.5C54.0195 286 52.7268 286.804 52.0352 288Z\" fill=\"#7BCEFD\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0351 288H30.5C29.3954 288 28.5 288.895 28.5 290V310C28.5 311.105 29.3954 312 30.5 312H52.0351C52.7267 313.196 54.0194 314 55.5 314H30.5C28.2909 314 26.5 312.209 26.5 310V290C26.5 287.791 28.2909 286 30.5 286H55.5C54.0194 286 52.7267 286.804 52.0351 288Z\" fill=\"#FC6AB3\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.5 314H81.5C83.7091 314 85.5 312.209 85.5 310V290C85.5 287.791 83.7091 286 81.5 286H56.5C57.9806 286 59.2733 286.804 59.9649 288H81.5C82.6046 288 83.5 288.895 83.5 290V310C83.5 311.105 82.6046 312 81.5 312H59.9649C59.2733 313.196 57.9806 314 56.5 314Z\" fill=\"#48AFFD\"/>\n          <line x1=\"28.5\" y1=\"294\" x2=\"53.5\" y2=\"294\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"38\" y1=\"312\" x2=\"38\" y2=\"288\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"49\" y1=\"312\" x2=\"49\" y2=\"288\" stroke=\"#FC6AB3\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"58.5\" y1=\"300\" x2=\"83.5\" y2=\"300\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"63\" y1=\"312\" x2=\"63\" y2=\"288\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <line x1=\"74\" y1=\"312\" x2=\"74\" y2=\"288\" stroke=\"#48AFFD\" stroke-opacity=\"0.5\" stroke-width=\"2\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.0352 288H56.5C57.6046 288 58.5 288.895 58.5 290V310C58.5 311.105 57.6046 312 56.5 312H52.0352C52.7268 313.196 54.0195 314 55.5 314H56.5C58.7092 314 60.5 312.209 60.5 310V290C60.5 287.791 58.7092 286 56.5 286H55.5C54.0195 286 52.7268 286.804 52.0352 288Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.5 314H56.5C57.9806 314 59.2733 313.196 59.9649 312H55.5C54.3954 312 53.5 311.105 53.5 310V290C53.5 288.895 54.3954 288 55.5 288H59.9649C59.2733 286.804 57.9806 286 56.5 286H55.5C53.2909 286 51.5 287.791 51.5 290V310C51.5 312.209 53.2909 314 55.5 314Z\" fill=\"#7558D2\" fill-opacity=\"0.6\"/>\n          <path d=\"M70.1213 270L76.2426 276.121L73.1819 279.182L70.1213 282.243L67.9999 280.121L70.0606 278.061L71.9999 276.121L69.9999 274.121L67.9999 272.121L70.1213 270Z\" fill=\"#404654\"/>\n          <path d=\"M71.9999 276.121L69.9999 274.121H57.4999V278.061H70.0606L71.9999 276.121Z\" fill=\"#404654\"/>\n          <path d=\"M41.6213 270L35.5 276.121L38.5607 279.182L41.6213 282.243L43.7426 280.121L41.682 278.061L39.7426 276.121L41.7426 274.121L43.7426 272.121L41.6213 270Z\" fill=\"#404654\"/>\n          <path d=\"M39.7426 276.121L41.7426 274.121H54.2426V278.061H41.682L39.7426 276.121Z\" fill=\"#404654\"/>\n          </g>\n        </g>\n        <rect id=\"ma6p24501-item-3-dim\" x=\"16.5\" y=\"252.5\" width=\"79\" height=\"79\" rx=\"23.5\" fill=\"black\" opacity=\"0.2\" display=\"none\" cursor=\"pointer\"/>\n\n        <rect x=\"16\" y=\"356\" width=\"80\" height=\"4\" rx=\"2\" fill=\"#E6EBF5\"/>\n\n        <g data-fill=\"#FFEA7E\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"384\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FFEA7E\"/>\n          <rect x=\"17\" y=\"385\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#8BD5FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"384\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#8BD5FF\"/>\n          <rect x=\"61\" y=\"385\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CEE868\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"428\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CEE868\"/>\n          <rect x=\"17\" y=\"429\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#FF9999\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"428\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#FF9999\"/>\n          <rect x=\"61\" y=\"429\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#CFA4FF\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"16\" y=\"472\" width=\"36\" height=\"36\" rx=\"12\" fill=\"#CFA4FF\"/>\n          <rect x=\"17\" y=\"473\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <g data-fill=\"#fff\" cursor=\"pointer\" class=\"custom-change-color\">\n          <rect x=\"60\" y=\"472\" width=\"36\" height=\"36\" rx=\"12\" fill=\"white\"/>\n          <rect x=\"61\" y=\"473\" width=\"34\" height=\"34\" rx=\"11\" stroke=\"black\" stroke-opacity=\"0.05\" stroke-width=\"2\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_3761_8476\">\n        <rect width=\"60\" height=\"42\" fill=\"white\" transform=\"translate(26 175)\"/>\n        </clipPath>\n        <clipPath id=\"clip1_3761_8476\">\n        <rect width=\"59\" height=\"44\" fill=\"white\" transform=\"translate(26.5 270)\"/>\n        </clipPath>\n        </defs>\n      </svg>\n    ";}}class MA6P24501ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(5, 40)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB3C4\uC218\uBD84\uD3EC\uB2E4\uAC01\uD615\uACFC \uD788\uC2A4\uD1A0\uADF8\uB7A8</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 180)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uD569\uCE58\uAE30</text>\n          </g>\n        </g>\n        <g transform=\"translate(5, 280)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uB098\uB204\uAE30</text>\n          </g>\n        </g>\n        \n        <g transform=\"translate(5, 380)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <path d=\"M0,0 L20,0 L20,130 L0,130\"  />\n          </g>\n          <g transform=\"translate(40, 65)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"22\" font-weight=\"700\" style=\"user-select:none;\">\uC0C9\uC0C1</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}class MA6P24901Toolbar extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 120 239\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1.5\" y=\"1.5\" width=\"117\" height=\"137\" rx=\"8.5\" fill=\"#EFEFEF\" stroke=\"black\" stroke-width=\"3\"/>\n        <rect x=\"1.5\" y=\"148.5\" width=\"117\" height=\"85\" rx=\"8.5\" fill=\"#EFEFEF\" stroke=\"black\" stroke-width=\"3\"/>\n        <g id=\"ma6p24901-item-1\" cursor=\"pointer\">\n          <rect x=\"38\" y=\"93\" width=\"15\" height=\"15\" fill=\"#8BD5FF\"/>\n          <rect x=\"68\" y=\"63\" width=\"15\" height=\"45\" fill=\"#8BD5FF\"/>\n          <rect x=\"53\" y=\"48\" width=\"15\" height=\"60\" fill=\"#8BD5FF\"/>\n          <rect x=\"82\" y=\"93\" width=\"15\" height=\"15\" fill=\"#8BD5FF\"/>\n          <line x1=\"24\" y1=\"47.5\" x2=\"98\" y2=\"47.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"24\" y1=\"62.5\" x2=\"98\" y2=\"62.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"24\" y1=\"77.5\" x2=\"98\" y2=\"77.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"24\" y1=\"92.5\" x2=\"98\" y2=\"92.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"83\" y1=\"33.5\" x2=\"83\" y2=\"107.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"68\" y1=\"33.5\" x2=\"68\" y2=\"107.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"53\" y1=\"33.5\" x2=\"53\" y2=\"107.5\" stroke=\"#AAAAAA\"/>\n          <line x1=\"38\" y1=\"33.5\" x2=\"38\" y2=\"107.5\" stroke=\"#AAAAAA\"/>\n          <rect x=\"23\" y=\"32\" width=\"75\" height=\"76\" stroke=\"black\" stroke-width=\"4\"/>\n        </g>\n        <g id=\"ma6p24901-item-2\" cursor=\"pointer\">\n          <rect x=\"17\" y=\"174\" width=\"34\" height=\"34\" rx=\"2\" fill=\"white\" stroke=\"black\" stroke-width=\"4\"/>\n          <line x1=\"15\" y1=\"182\" x2=\"53\" y2=\"182\" stroke=\"black\" stroke-width=\"2\"/>\n          <line x1=\"38\" y1=\"173\" x2=\"38\" y2=\"210\" stroke=\"black\" stroke-width=\"2\"/>\n          <rect x=\"70\" y=\"174\" width=\"34\" height=\"34\" rx=\"2\" fill=\"white\" stroke=\"black\" stroke-width=\"4\"/>\n          <line x1=\"68\" y1=\"182\" x2=\"106\" y2=\"182\" stroke=\"black\" stroke-width=\"2\"/>\n          <line x1=\"55\" y1=\"191\" x2=\"67\" y2=\"191\" stroke=\"black\" stroke-width=\"2\"/>\n          <line x1=\"61\" y1=\"185\" x2=\"61\" y2=\"197\" stroke=\"black\" stroke-width=\"2\"/>\n        </g>\n      </svg>\n    ";}}class MA6P24901ToolbarInfo extends HTMLElement{connectedCallback(){this.innerHTML="\n      <svg\n        width=\"100%\"\n        height=\"100%\"\n        viewBox=\"0 0 400 500\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <g transform=\"translate(0, 175)\">\n          <g transform=\"translate(10, -6)\" stroke=\"#CFD4E0\" stroke-width=\"2\" stroke-linecap=\"round\">\n            <line x1=\"0\" y1=\"0\" x2=\"20\" y2=\"0\" />\n            <path d=\"M6,-6 L0,0 L6,6\" />\n          </g>\n          <g transform=\"translate(35, 2)\">\n            <text x=\"0\" y=\"0\" fill=\"#fff\" font-size=\"24\" font-weight=\"700\" style=\"user-select:none;\">\uC815\uB2E4\uAC01\uD615</text>\n          </g>\n        </g>\n      </svg>    \n    ";}}customElements.define('math-toolbar',AIDTTopToolbar);customElements.define('math-toolbar-three',AIDTTopThreeToolbar);customElements.define('math-toolbar2',AIDTBottomToolbar);customElements.define('info-toolbar',InfoToolbar);customElements.define('info-toolbar-three',InfoToolbarThree);customElements.define('ma4p18801-toolbar',MA4P18801Toolbar);customElements.define('ma4p18801-toolbar-info',MA4P18801ToolbarInfo);customElements.define('ma4p18301-toolbar',MA4P18301Toolbar);customElements.define('ma4p18301-toolbar-info',MA4P18301ToolbarInfo);customElements.define('ma1p03301-toolbar',MA1P03301Toolbar);customElements.define('ma1p03301-toolbar-info',MA1P03301ToolbarInfo);customElements.define('ma4p19301-toolbar',MA4P19301Toolbar);customElements.define('ma4p19301-toolbar-info',MA4P19301ToolbarInfo);customElements.define('ma2p08601-toolbar',MA2P08601Toolbar);customElements.define('ma2p08601-toolbar-info',MA2P08601ToolbarInfo);customElements.define('ma1p01701-toolbar',MA1P01701Toolbar);customElements.define('ma1p01701-toolbar-info',MA1P01701ToolbarInfo);customElements.define('ma5p20901-toolbar',MA5P20901Toolbar);customElements.define('ma5p20901-toolbar-info',MA5P20901ToolbarInfo);customElements.define('ma5p20701-toolbar',MA5P20701Toolbar);customElements.define('ma5p20701-toolbar-info',MA5P20701ToolbarInfo);customElements.define('ma5p21001-toolbar',MA5P21001Toolbar);customElements.define('ma5p21001-toolbar-info',MA5P21001ToolbarInfo);customElements.define('ma1p07301-toolbar',MA1P07301Toolbar);customElements.define('ma1p07301-toolbar-info',MA1P07301ToolbarInfo);customElements.define('ma1p03701-toolbar',MA1P03701Toolbar);customElements.define('ma1p03701-toolbar-info',MA1P03701ToolbarInfo);customElements.define('ha1p02101-toolbar',HA1P02101Toolbar);customElements.define('ha1p02101-toolbar-info',HA1P02101ToolbarInfo);customElements.define('ha1p02801-toolbar',HA1P02801Toolbar);customElements.define('ha1p02801-toolbar-info',HA1P02801ToolbarInfo);customElements.define('ma5p19601-toolbar',MA5P19601Toolbar);customElements.define('ma5p19601-toolbar-info',MA5P19601ToolbarInfo);customElements.define('ma1p03901-toolbar-info',MA1P03901ToolbarInfo);customElements.define('hb2p06201-toolbar',HB2P06201Toolbar);customElements.define('hb2p06201-toolbar-info',HB2P06201ToolbarInfo);customElements.define('ma6p23601-toolbar',MA6P23601Toolbar);customElements.define('ma6p23601-toolbar-info',MA6P23601ToolbarInfo);customElements.define('ma6p24001-toolbar',MA6P24001Toolbar);customElements.define('ma6p24001-toolbar-info',MA6P24001ToolbarInfo);customElements.define('ma6p24201-toolbar',MA6P24201Toolbar);customElements.define('ma6p24201-toolbar-info',MA6P24201ToolbarInfo);customElements.define('ma6p24501-toolbar',MA6P24501Toolbar);customElements.define('ma6p24501-toolbar-info',MA6P24501ToolbarInfo);customElements.define('ma6p24901-toolbar',MA6P24901Toolbar);customElements.define('ma6p24901-toolbar-info',MA6P24901ToolbarInfo);customElements.define('math-trashcan',Trashcan);customElements.define('ma1p03901-toolbar',MA1P03901Toolbar);customElements.define('multi-select-box',MultiSelectBox);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(723);
;// CONCATENATED MODULE: ./src/engine/CodnutDigitalMathClass.jsx
const CodnutDigitalMathClass_CodnutDigitalMathClass=props=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{id:"codnut-parent-element",class:"codnut-math-tool-parent container ".concat(props.three?'codnut-bg-white':''),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"text",id:"codnut-math-input",class:"physical-input",autocomplete:"off"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"global-dnd",style:{position:'absolute',width:'100%',height:'100%',zIndex:10},class:"hidden",children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{id:"global-dnd-board",width:"100%",height:"100%",viewBox:"0 0 1920 1200"})}),props.children,/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{id:"outermost",width:"100%",height:"100%",viewBox:"0 0 1920 1200",scale:"3",fill:"none",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("defs",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("pattern",{id:"grid","stroke-width":"0.5",stroke:"gray",x:"0",y:"0",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"0",y:"0",width:"50",height:"50",opacity:"0.7"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{id:"codnut-digital-math-grid",x:"0",y:"0",width:"1920",height:"1200",rx:"18",fill:"url(#grid)",class:!props.grid&&'invisible'}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"playground"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"pen-board-svg",width:"100%",height:"100%",viewBox:"0 0 1920 1200",scale:"1",fill:"none",preserveAspectRatio:"xMinYMin meet"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"codnut-keypad-venn",class:"hidden",width:"376",height:"228",viewBox:"0 0 376 228",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"226",rx:"39",fill:"#E6EBF5"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"226",rx:"39",stroke:"#C5CBDA","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"A",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M47.261 68.9571C47.261 69.6871 47.9341 70.1129 49.2803 70.2346C49.807 70.2346 50.0704 70.4018 50.0704 70.7364C50.0704 70.7668 50.0412 70.9645 49.9826 71.3295C49.8948 71.7554 49.807 72.0291 49.7192 72.1508C49.6314 72.2724 49.4412 72.3333 49.1486 72.3333C49.09 72.3333 48.9144 72.3333 48.6218 72.3333C48.3291 72.3333 47.8316 72.318 47.1293 72.2876C46.4269 72.2572 45.4904 72.242 44.3198 72.242C42.242 72.242 40.9104 72.2724 40.3251 72.3333H39.9739C39.7691 72.1203 39.6667 71.9531 39.6667 71.8314C39.7252 71.0102 39.9154 70.4779 40.2373 70.2346H40.8519C42.9005 70.1433 44.393 69.3829 45.3295 67.9534C45.5051 67.7709 48.1536 63.1324 53.275 54.0381C58.3964 44.9437 61.001 40.3357 61.0887 40.2141C61.2936 39.8491 61.6448 39.6666 62.1423 39.6666H62.4935H63.2397C63.4153 39.9403 63.5031 40.0924 63.5031 40.1228L64.7323 54.8593C65.5517 64.6837 65.9907 69.6414 66.0492 69.7327C66.1955 70.0673 67.1466 70.2346 68.9025 70.2346C69.6342 70.2346 70 70.3866 70 70.6908C70 70.7516 69.9561 70.9645 69.8683 71.3295C69.7805 71.7858 69.7073 72.0595 69.6488 72.1508C69.5903 72.242 69.3854 72.3028 69.0342 72.3333C68.9464 72.3333 68.7416 72.3333 68.4197 72.3333C68.0978 72.3333 67.5271 72.318 66.7077 72.2876C65.8882 72.2572 64.8201 72.242 63.5031 72.242C60.7522 72.242 58.9524 72.2724 58.1037 72.3333H57.5769C57.4013 72.1508 57.3135 72.0139 57.3135 71.9226C57.3135 71.8314 57.3428 71.5576 57.4013 71.1014C57.5184 70.706 57.6062 70.4627 57.6647 70.3714L57.8403 70.2346H58.7183C60.2986 70.1433 61.2351 69.8848 61.5277 69.459L61.001 62.6154H50.5533L49.0608 65.2616C47.8609 67.3603 47.261 68.5921 47.261 68.9571ZM60.7815 60.4711C60.7815 60.1365 60.6059 57.764 60.2547 53.3537C59.9035 48.9434 59.6987 46.7231 59.6401 46.6927L58.4549 48.6545C57.9866 49.4757 57.0648 51.103 55.6893 53.5362L51.7385 60.4711L56.26 60.5167C59.2743 60.5167 60.7815 60.5015 60.7815 60.4711Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"B",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M136.547 41.7096C135.731 41.7096 135.248 41.6948 135.097 41.6652C134.946 41.6356 134.871 41.4728 134.871 41.1767C134.871 40.3773 135.037 39.8887 135.369 39.7111C135.399 39.6815 137.362 39.6667 141.259 39.6667C149.082 39.6667 153.205 39.6963 153.628 39.7555C155.531 40.0516 157.116 40.7178 158.385 41.754C159.654 42.7903 160.303 44.1523 160.333 45.8399C160.333 47.7348 159.457 49.4373 157.705 50.9473C155.954 52.4573 153.945 53.4788 151.68 54.0117L151.227 54.1449C153.16 54.4114 154.745 55.0924 155.984 56.1879C157.222 57.2834 157.857 58.6454 157.887 60.2738C157.887 62.4352 156.799 64.5225 154.625 66.5359C152.45 68.5492 149.777 69.6891 146.605 69.9556C146.394 69.9852 143.207 70 137.045 70C131.004 70 127.939 69.9704 127.848 69.9112C127.727 69.8224 127.667 69.7039 127.667 69.5559C127.667 69.3486 127.697 69.1414 127.757 68.9341C127.908 68.3716 128.059 68.0607 128.21 68.0015C128.331 67.9719 128.558 67.9571 128.89 67.9571H129.162C129.977 67.9571 130.883 67.9126 131.88 67.8238C132.303 67.735 132.59 67.5573 132.741 67.2909C132.832 67.1724 133.919 63.0569 136.003 54.9444C138.087 46.8318 139.129 42.5534 139.129 42.1093C139.129 41.9021 138.269 41.7688 136.547 41.7096ZM155.485 45.8399C155.485 44.9517 155.259 44.1227 154.806 43.3529C154.353 42.583 153.613 42.0797 152.586 41.8429C152.374 41.7836 150.985 41.7392 148.417 41.7096C147.813 41.7096 147.179 41.7096 146.515 41.7096C145.85 41.7096 145.321 41.7244 144.929 41.754H144.34C143.887 41.7836 143.6 41.9317 143.479 42.1981C143.419 42.3166 142.935 44.0931 142.029 47.5276C142.029 47.6164 142.014 47.7052 141.984 47.794L140.579 53.3899H144.249C146.696 53.3899 148.1 53.3603 148.463 53.3011C150.275 53.005 151.891 52.1464 153.311 50.7252C154.73 49.3041 155.455 47.6756 155.485 45.8399ZM153.039 59.8297C153.039 58.5269 152.691 57.4462 151.997 56.5876C151.302 55.729 150.396 55.2256 149.278 55.0776C149.097 55.048 147.844 55.0332 145.518 55.0332C141.954 55.0332 140.156 55.048 140.126 55.0776C140.126 55.1368 139.869 56.2175 139.356 58.3197C138.842 60.4218 138.314 62.5092 137.77 64.5817L136.955 67.6906C136.955 67.809 137.136 67.8682 137.498 67.8682C137.861 67.8682 139.084 67.8978 141.168 67.9571C143.857 67.9571 145.306 67.9422 145.518 67.9126C147.39 67.7054 149.112 66.8468 150.683 65.3368C152.253 63.8267 153.039 61.9911 153.039 59.8297Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"C",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M215.667 60.0215C215.667 56.5766 216.694 53.2665 218.749 50.0912C220.804 46.9159 223.396 44.3996 226.525 42.5423C229.654 40.6851 232.782 39.7415 235.911 39.7115C238.671 39.7115 240.864 40.4754 242.49 42.0031C242.766 42.3027 242.996 42.5573 243.18 42.767C243.364 42.9767 243.487 43.1265 243.548 43.2163L243.594 43.3511C243.686 43.3511 244.1 42.9617 244.837 42.1829C245.051 42.0031 245.281 41.7934 245.527 41.5538C245.772 41.3141 246.018 41.0745 246.263 40.8349C246.508 40.5952 246.662 40.4305 246.723 40.3406L247.413 39.6666H247.689C248.119 39.6666 248.333 39.7714 248.333 39.9811C248.333 40.1009 247.843 42.1529 246.861 46.137C245.757 50.3009 245.205 52.3978 245.205 52.4277C245.143 52.5775 245.067 52.6674 244.975 52.6973C244.883 52.7273 244.607 52.7572 244.146 52.7872H243.41C243.226 52.6074 243.134 52.4726 243.134 52.3828C243.134 52.3528 243.15 52.248 243.18 52.0682C243.211 51.8885 243.242 51.5889 243.272 51.1696C243.303 50.7502 243.318 50.2709 243.318 49.7317C243.318 47.6048 242.828 45.7476 241.846 44.1599C240.864 42.5723 239.193 41.7635 236.831 41.7335C236.033 41.7335 235.175 41.8384 234.254 42.0481C233.334 42.2578 232.23 42.6172 230.942 43.1265C229.654 43.6357 228.381 44.4745 227.123 45.6427C225.865 46.811 224.746 48.204 223.764 49.8216C222.783 51.529 222.001 53.5211 221.418 55.7977C220.835 58.0744 220.544 59.9316 220.544 61.3695C220.544 64.7844 221.709 67.2408 224.04 68.7386C225.513 69.7571 227.322 70.2663 229.469 70.2663C232.261 70.2663 234.745 69.2478 236.923 67.2108C239.101 65.1738 240.542 62.9571 241.248 60.5607C241.371 60.1712 241.463 59.9466 241.524 59.8867C241.585 59.8268 241.831 59.7968 242.26 59.7968C242.874 59.7968 243.18 59.9316 243.18 60.2012C243.18 60.351 243.165 60.4858 243.134 60.6056C242.245 63.8109 240.343 66.5668 237.429 68.8734C234.515 71.18 231.387 72.3333 228.043 72.3333C224.577 72.3333 221.648 71.2099 219.255 68.9632C216.863 66.7166 215.667 63.736 215.667 60.0215Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"N",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M308.396 41.7096C308.303 41.7096 308.18 41.7096 308.026 41.7096C307.254 41.7096 306.791 41.6948 306.637 41.6652C306.483 41.6356 306.406 41.4728 306.406 41.1767C306.406 40.3773 306.575 39.8887 306.915 39.7111C306.977 39.6815 308.473 39.6667 311.405 39.6667C313.781 39.6667 315.138 39.6667 315.478 39.6667C315.817 39.6667 316.033 39.7555 316.126 39.9331C322.636 54.6187 325.954 62.1539 326.077 62.5388L328.576 53.0791C330.212 46.8318 331.03 43.5009 331.03 43.0864C331.03 42.287 330.042 41.828 328.067 41.7096C327.327 41.7096 326.956 41.5468 326.956 41.2211C326.956 41.1619 326.987 40.9842 327.049 40.6881C327.172 40.2144 327.265 39.9331 327.327 39.8443C327.388 39.7555 327.543 39.6963 327.79 39.6667C327.882 39.6667 328.36 39.6815 329.224 39.7111C330.088 39.7407 331.369 39.7703 333.066 39.7999C334.609 39.7999 335.782 39.7851 336.584 39.7555C337.386 39.7259 337.849 39.7111 337.972 39.7111C338.435 39.7111 338.667 39.8591 338.667 40.1552C338.667 40.8066 338.543 41.2507 338.296 41.4876C338.235 41.6356 337.895 41.7096 337.278 41.7096C335.087 41.828 333.714 42.4202 333.159 43.4861L326.262 69.6891C326.2 69.8964 325.876 70 325.29 70C324.858 70 324.596 69.9704 324.503 69.9112C324.411 69.8224 322.42 65.3368 318.532 56.4544L312.654 43.1752L309.646 54.7223C307.64 62.3019 306.637 66.225 306.637 66.4915C306.791 67.4685 307.902 67.9571 309.97 67.9571H310.433C310.618 68.1051 310.71 68.2235 310.71 68.3123C310.71 68.4012 310.679 68.6824 310.618 69.1562C310.494 69.5411 310.34 69.8224 310.155 70H309.553C308.597 69.9408 306.93 69.9112 304.554 69.9112C303.69 69.9112 302.903 69.9112 302.194 69.9112C301.484 69.9112 300.913 69.9112 300.481 69.9112C300.049 69.9112 299.787 69.926 299.694 69.9556C299.231 69.9556 299 69.8224 299 69.5559C299 69.4374 299.046 69.2006 299.139 68.8453C299.231 68.49 299.309 68.2827 299.37 68.2235C299.432 68.0459 299.787 67.9571 300.435 67.9571C302.533 67.8682 303.891 67.2909 304.508 66.225C304.631 66.0473 305.727 61.9466 307.794 53.9229L310.942 41.8429C310.88 41.8132 310.031 41.7688 308.396 41.7096Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"refresh",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"16",y:"112",width:"344",height:"4",rx:"2",fill:"#D8DEEB"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"133",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"133",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M64.9245 166.216H76V166.212M36 188.674V177.784M36 177.784L47.0755 177.784M36 177.784L43.0564 184.727C45.2538 186.892 48.0424 188.534 51.2629 189.382C61.0262 191.955 71.0616 186.258 73.6777 176.658M38.3217 167.342C40.9378 157.742 50.9732 152.045 60.7365 154.618C63.9571 155.466 66.7457 157.108 68.9431 159.273L76 166.212M76 155.326V166.212",stroke:"black","stroke-width":"4","stroke-linecap":"square"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer confirm","data-keypad":"confirm",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"133",width:"254",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"133",width:"254",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M151.804 183.5V160.168H166.983V163.681H155.993V170.062H166.177V173.574H155.993V179.955H167.047V183.5H151.804ZM189.526 160.168V183.5H185.787L174.734 167.548H174.54V183.5H170.351V160.168H174.154L185.143 176.12H185.368V160.168H189.526ZM192.153 163.681V160.168H210.748V163.681H203.561V183.5H199.372V163.681H192.153ZM213.375 183.5V160.168H228.553V163.681H217.564V170.062H227.748V173.574H217.564V179.955H228.618V183.5H213.375ZM231.922 183.5V160.168H240.687C246.037 160.168 248.905 163.165 248.905 167.612C248.905 170.787 247.455 173.139 244.716 174.251L249.743 183.5H245.07L240.494 174.96H236.111V183.5H231.922ZM236.111 171.447H240.043C243.201 171.447 244.619 170.094 244.619 167.612C244.619 165.131 243.201 163.681 240.043 163.681H236.111V171.447Z",fill:"black"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M292.977 157H306V174.423H268M268 174.423L279.667 162.846M268 174.423L279.667 186",stroke:"black","stroke-width":"4"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"codnut-keypad-en",class:"hidden",width:"376",height:"228",viewBox:"0 0 376 228",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"226",rx:"39",fill:"#E6EBF5"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"226",rx:"39",stroke:"#C5CBDA","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"A",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M49.5416 72.3333C49.0988 72.242 47.4013 72.1964 44.4491 72.1964C41.7332 72.1964 40.2423 72.242 39.9766 72.3333H39.6667V70.2346H40.3309C42.4564 70.1433 43.8144 69.5046 44.4049 68.3184C44.4344 68.2271 45.2167 65.8395 46.7518 61.1554C48.2869 56.4714 49.8073 51.7873 51.3129 47.1033C52.8185 42.4192 53.6008 40.062 53.6598 40.0316C53.7484 39.7883 54.0141 39.6666 54.4569 39.6666H54.8997C55.4902 39.697 55.8444 39.8035 55.9625 39.986C56.0216 40.0468 57.6157 44.8981 60.745 54.54L65.5718 69.2765C65.7784 69.6719 66.0589 69.9152 66.4131 70.0064C66.7674 70.0977 67.5202 70.1737 68.6715 70.2346H70V72.3333H69.6014C69.3358 72.242 67.4611 72.1964 63.9776 72.1964C60.3465 72.1964 58.2209 72.242 57.601 72.3333H57.1581V70.2346H57.7338C59.8003 70.2346 60.8336 69.9608 60.8336 69.4133C60.8336 69.3525 60.4793 68.2271 59.7708 66.0372L58.708 62.7979H48.3903L47.5046 65.4897C46.9142 67.2842 46.619 68.2727 46.619 68.4552C46.619 68.8506 46.9142 69.246 47.5046 69.6414C48.095 70.0369 48.8331 70.2346 49.7187 70.2346H49.9401V72.3333H49.5416ZM58.0438 60.6992L53.527 46.9208L49.0545 60.6536C49.0545 60.684 50.5453 60.6992 53.527 60.6992H58.0438Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"B",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M134.629 42.3758C134.419 42.1685 134.255 42.0353 134.135 41.9761C134.015 41.9169 133.775 41.8725 133.416 41.8429C133.056 41.8132 132.412 41.7688 131.483 41.7096H130V39.6667H139.034H140.742H144.292C146.599 39.6667 148.292 39.7407 149.371 39.8887C150.449 40.0368 151.528 40.4365 152.607 41.0879C153.895 41.7984 154.914 42.7015 155.663 43.797C156.412 44.8925 156.787 46.0472 156.787 47.2611C156.787 48.7711 156.172 50.1479 154.944 51.3914C153.715 52.6349 152.112 53.5084 150.135 54.0117L149.685 54.1449C151.873 54.4114 153.805 55.2256 155.483 56.5876C157.161 57.9496 158 59.652 158 61.695C158 63.7083 157.236 65.4848 155.708 67.0244C154.18 68.564 152.217 69.5115 149.82 69.8668C149.431 69.926 146.03 69.9704 139.618 70H130V67.9571H131.483C132.742 67.9274 133.506 67.883 133.775 67.8238C134.045 67.7646 134.33 67.587 134.629 67.2909V42.3758ZM151.708 47.2167C151.708 45.8251 151.318 44.626 150.539 43.6193C149.76 42.6127 148.727 41.9909 147.438 41.754C147.408 41.754 147.213 41.754 146.854 41.754C146.494 41.754 146.015 41.754 145.416 41.754C144.816 41.754 144.247 41.7392 143.708 41.7096C141.7 41.7096 140.472 41.7244 140.022 41.754C139.573 41.7836 139.288 41.9021 139.169 42.1093C139.079 42.2278 139.034 44.1375 139.034 47.8385V53.3899H142.764L146.539 53.3455L146.989 53.2567C147.109 53.2271 147.273 53.1827 147.483 53.1235C147.693 53.0643 148.067 52.8718 148.607 52.5461C149.146 52.2204 149.625 51.8651 150.045 51.4802C150.464 51.0953 150.839 50.518 151.169 49.7482C151.498 48.9784 151.678 48.1345 151.708 47.2167ZM152.876 61.6506C152.876 60.1406 152.457 58.749 151.618 57.4758C150.779 56.2027 149.596 55.4033 148.067 55.0776L143.528 55.0332H139.034V61.1176V64.8482C139.034 66.5951 139.109 67.5425 139.258 67.6906C139.438 67.8386 140.936 67.9126 143.753 67.9126H145.955C147.213 67.9126 148.112 67.8238 148.652 67.6462C149.94 67.2317 150.959 66.4767 151.708 65.3812C152.457 64.2857 152.846 63.0421 152.876 61.6506Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"C",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M218 55.9999C218 53.4202 218.505 51.0504 219.515 48.8906C220.525 46.7309 221.825 45.006 223.416 43.7162C225.008 42.4263 226.675 41.4364 228.42 40.7465C230.164 40.0565 231.816 39.6966 233.377 39.6666C233.469 39.6666 233.607 39.6666 233.79 39.6666C233.974 39.6666 234.096 39.6816 234.157 39.7116C236.942 39.7116 239.405 40.7315 241.548 42.7713L242.144 43.3112L243.521 41.5564C244.348 40.4465 244.822 39.8316 244.944 39.7116C244.975 39.7116 245.036 39.7116 245.128 39.7116C245.22 39.7116 245.311 39.6966 245.403 39.6666H245.587C245.679 39.6666 245.816 39.7566 246 39.9366V52.5353L245.725 52.8052H244.164C243.98 52.6253 243.873 52.3703 243.843 52.0403C243.567 49.5806 242.833 47.4508 241.639 45.651C240.446 43.8512 238.992 42.6663 237.279 42.0963C236.697 41.8864 235.932 41.7814 234.984 41.7814C231.801 41.7814 229.139 42.8313 226.997 44.9311C224.579 47.3008 223.37 50.9904 223.37 55.9999C223.37 59.6295 223.952 62.4943 225.115 64.594C225.757 65.7939 226.553 66.7988 227.502 67.6087C228.45 68.4187 229.445 69.0036 230.485 69.3636C231.526 69.7235 232.383 69.9635 233.056 70.0835C233.729 70.2035 234.402 70.2785 235.075 70.3085C237.799 70.3085 239.987 69.2736 241.639 67.2038C243.292 65.134 244.133 62.8692 244.164 60.4095C244.164 60.1995 244.256 60.0045 244.439 59.8245H245.725L246 60.0945V60.7694C245.847 63.8591 244.684 66.5588 242.511 68.8686C240.339 71.1784 237.478 72.3333 233.928 72.3333C229.613 72.3333 225.88 70.7734 222.728 67.6537C219.576 64.534 218 60.6494 218 55.9999Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"O",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M303.667 56.0642C303.667 53.5784 304.122 51.2722 305.033 49.1458C305.944 47.0193 307.128 45.2822 308.586 43.9345C310.043 42.5867 311.652 41.5385 313.413 40.7897C315.175 40.041 316.966 39.6666 318.788 39.6666C322.826 39.6666 326.364 41.224 329.4 44.3388C332.436 47.4536 333.97 51.3471 334 56.0193C334 58.4452 333.56 60.6915 332.679 62.758C331.799 64.8246 330.645 66.5617 329.218 67.9693C327.791 69.377 326.166 70.4402 324.344 71.159C322.523 71.8778 320.67 72.2672 318.788 72.3271C316.905 72.387 315.068 72.0126 313.277 71.2039C311.485 70.3953 309.861 69.3321 308.403 68.0143C306.946 66.6965 305.807 64.9743 304.987 62.8479C304.168 60.7214 303.727 58.4602 303.667 56.0642ZM322.386 42.2722C321.141 41.7331 319.942 41.4636 318.788 41.4636C317.938 41.4636 317.072 41.6283 316.192 41.9578C315.311 42.2872 314.37 42.7964 313.368 43.4852C312.366 44.1741 311.516 45.2373 310.817 46.6749C310.119 48.1125 309.603 49.7597 309.269 51.6166C309.117 52.4552 309.041 53.7281 309.041 55.4353C309.041 61.7248 310.605 66.1124 313.732 68.5983C315.25 69.8262 316.89 70.4402 318.651 70.4402H318.833H318.924C321.445 70.4402 323.661 69.2572 325.574 66.8911C327.578 64.2256 328.58 60.407 328.58 55.4353C328.58 53.7281 328.504 52.4552 328.352 51.6166C327.715 47.0343 325.726 43.9195 322.386 42.2722Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"refresh",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"16",y:"112",width:"344",height:"4",rx:"2",fill:"#D8DEEB"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"133",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"133",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M64.9245 166.216H76V166.212M36 188.674V177.784M36 177.784L47.0755 177.784M36 177.784L43.0564 184.727C45.2538 186.892 48.0424 188.534 51.2629 189.382C61.0262 191.955 71.0616 186.258 73.6777 176.658M38.3217 167.342C40.9378 157.742 50.9732 152.045 60.7365 154.618C63.9571 155.466 66.7457 157.108 68.9431 159.273L76 166.212M76 155.326V166.212",stroke:"black","stroke-width":"4","stroke-linecap":"square"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer confirm","data-keypad":"confirm",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"133",width:"254",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"133",width:"254",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M151.804 183.5V160.168H166.983V163.681H155.993V170.062H166.177V173.574H155.993V179.955H167.047V183.5H151.804ZM189.526 160.168V183.5H185.787L174.734 167.548H174.54V183.5H170.351V160.168H174.154L185.143 176.12H185.368V160.168H189.526ZM192.153 163.681V160.168H210.748V163.681H203.561V183.5H199.372V163.681H192.153ZM213.375 183.5V160.168H228.553V163.681H217.564V170.062H227.748V173.574H217.564V179.955H228.618V183.5H213.375ZM231.922 183.5V160.168H240.687C246.037 160.168 248.905 163.165 248.905 167.612C248.905 170.787 247.455 173.139 244.716 174.251L249.743 183.5H245.07L240.494 174.96H236.111V183.5H231.922ZM236.111 171.447H240.043C243.201 171.447 244.619 170.094 244.619 167.612C244.619 165.131 243.201 163.681 240.043 163.681H236.111V171.447Z",fill:"black"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M292.977 157H306V174.423H268M268 174.423L279.667 162.846M268 174.423L279.667 186",stroke:"black","stroke-width":"4"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"codnut-keypad",class:"hidden",width:"376",height:"492",viewBox:"0 0 376 492",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"490",rx:"39",fill:"#E6EBF5"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"1",y:"1",width:"374",height:"490",rx:"39",stroke:"#C5CBDA","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"+",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M57.9444 43.3611V54.0555H68.6389V57.9444H57.9444V68.6389H54.0556V57.9444H43.3611V54.0555H54.0556V43.3611H57.9444Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M147.594 41.7188V64.6875H153.062V70H134.781V64.6875H140.914V47.9688H140.758L134.781 51.6406V45.8203L141.383 41.7188H147.594Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M221.707 70V65.1953L232.02 56.1328C234.402 53.9453 235.77 52.5 235.809 50.3516C235.77 48.0078 234.051 46.5234 231.668 46.5234C229.246 46.5234 227.645 48.0469 227.645 50.625H221.316C221.316 44.9219 225.496 41.3281 231.707 41.3281C238.074 41.3281 242.254 44.7656 242.254 49.8438C242.254 53.0859 240.652 55.7812 234.52 61.1328L230.965 64.4141V64.6094H242.605V70H221.707Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"17",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M319.883 70.3906C313.438 70.3906 308.867 66.8359 308.789 61.7578H315.508C315.547 63.6328 317.422 64.9609 319.922 64.9609C322.422 64.9609 324.219 63.5156 324.18 61.4844C324.219 59.4531 322.305 57.9688 319.336 57.9688H316.602V53.2031H319.336C321.914 53.2031 323.711 51.8359 323.711 49.8047C323.711 47.8906 322.188 46.5234 319.922 46.5234C317.617 46.5234 315.781 47.8516 315.742 49.8438H309.336C309.414 44.8438 313.867 41.3281 319.961 41.3281C326.016 41.3281 330.156 44.8047 330.117 49.4141C330.156 52.5781 327.812 54.8047 324.57 55.2734V55.4688C328.906 55.9766 331.211 58.4766 331.172 61.9922C331.211 66.875 326.484 70.3906 319.883 70.3906Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"-",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"105",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"105",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M68.6389 142.056V145.945H43.3611V142.056H68.6389Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"105",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"105",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M132.32 153.234V148.039L142.75 129.719H149.156L138.961 147.766V148H146.266V140.305H152.32V148H155.875V153.234H152.32V158H146.07V153.234H132.32Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"5",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"105",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"105",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M232.137 158.391C225.965 158.391 221.473 154.797 221.395 149.758H227.879C227.957 151.867 229.832 153.234 232.137 153.234C234.793 153.234 236.707 151.359 236.668 148.625C236.707 145.852 234.754 143.977 232.059 143.977C230.027 143.977 228.699 144.758 227.918 146.281H221.941L223.348 129.719H241.434V135.109H228.816L228.152 141.867H228.348C229.324 140.305 231.512 139.211 234.168 139.211C239.324 139.211 243.113 143.039 243.113 148.43C243.113 154.25 238.699 158.391 232.137 158.391Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"6",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"105",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"105",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M309.277 148.742C309.277 145.695 310.488 142.844 312.832 139.484L319.512 129.719H326.191L319.355 139.562C320.098 139.406 320.84 139.289 321.66 139.289C326.934 139.289 330.723 143.039 330.723 148.508C330.723 154.484 326.23 158.391 320.137 158.391C314.277 158.391 309.277 154.992 309.277 148.742ZM315.801 148.781C315.801 151.398 317.559 153.273 320.098 153.273C322.598 153.273 324.316 151.398 324.316 148.781C324.316 146.164 322.559 144.289 320.098 144.289C317.559 144.289 315.801 146.164 315.801 148.781Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"7",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"193",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"193",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M135.562 246L147.125 223.305V223.109H133.609V217.719H154.039V223.148L142.438 246H135.562Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"8",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"193",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"193",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M232.02 246.391C225.379 246.391 220.574 242.953 220.574 238.344C220.574 234.828 223.348 231.977 226.941 231.43V231.234C223.816 230.648 221.629 228.109 221.629 224.984C221.629 220.57 226.004 217.328 232.02 217.328C237.957 217.328 242.371 220.57 242.371 224.984C242.371 228.109 240.105 230.648 237.059 231.234V231.43C240.574 231.977 243.426 234.828 243.426 238.344C243.426 242.953 238.621 246.391 232.02 246.391ZM232.02 241.469C234.637 241.469 236.434 239.867 236.434 237.641C236.434 235.414 234.559 233.773 232.02 233.773C229.441 233.773 227.527 235.414 227.566 237.641C227.527 239.867 229.363 241.469 232.02 241.469ZM232.02 229.203C234.246 229.203 235.848 227.758 235.848 225.688C235.848 223.695 234.246 222.25 232.02 222.25C229.715 222.25 228.152 223.656 228.152 225.688C228.152 227.719 229.754 229.203 232.02 229.203Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"9",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"193",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"193",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M309.277 227.172C309.277 221.195 313.691 217.328 319.863 217.328C325.684 217.328 330.723 220.688 330.723 226.938C330.723 230.023 329.473 232.875 327.168 236.234L320.488 246H313.848L320.645 236.117C319.902 236.312 319.16 236.43 318.34 236.43C312.988 236.43 309.277 232.68 309.277 227.172ZM315.684 226.938C315.684 229.555 317.402 231.43 319.902 231.43C322.402 231.43 324.199 229.555 324.199 226.938C324.199 224.32 322.402 222.445 319.902 222.445C317.402 222.445 315.684 224.32 315.684 226.938Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":".",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"281",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"281",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M143.98 334.391C142.027 334.391 140.426 332.828 140.465 330.836C140.426 328.922 142.027 327.359 143.98 327.359C145.855 327.359 147.496 328.922 147.535 330.836C147.496 332.828 145.855 334.391 143.98 334.391Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"281",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"193",y:"281",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M232 334.391C224.656 334.391 220.164 329.117 220.164 319.859C220.164 310.602 224.656 305.328 232 305.328C239.344 305.328 243.836 310.602 243.836 319.859C243.836 329.156 239.344 334.391 232 334.391ZM232 328.961C235.008 328.961 237 326.109 237 319.859C237 313.688 235.008 310.719 232 310.719C228.992 310.719 227.039 313.688 227 319.859C226.961 326.109 228.992 328.961 232 328.961Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"back",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"281",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"281",y:"281",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M334 304.5C337.038 304.5 339.5 306.962 339.5 310V330C339.5 333.038 337.038 335.5 334 335.5H312.058C310.282 335.5 308.615 334.642 307.583 333.197L300.44 323.197C299.074 321.284 299.074 318.716 300.44 316.803L307.583 306.803C308.615 305.358 310.282 304.5 312.058 304.5H334ZM334 307.5H312.058C311.251 307.5 310.493 307.89 310.024 308.547L302.881 318.547C302.26 319.416 302.26 320.584 302.881 321.453L310.024 331.453C310.493 332.11 311.251 332.5 312.058 332.5H334C335.381 332.5 336.5 331.381 336.5 330V310C336.5 308.619 335.381 307.5 334 307.5ZM327.586 311.586L330.414 314.414L324.829 320L330.414 325.586L327.586 328.414L322 322.828L316.414 328.414L313.586 325.586L319.172 320L313.586 314.414L316.414 311.586L322 317.171L327.586 311.586Z",fill:"black"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"16",y:"376",width:"344",height:"4",rx:"2",fill:"#D8DEEB"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer","data-keypad":"refresh",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"397",width:"78",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"17",y:"397",width:"78",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M64.9245 430.216H76V430.212M36 452.674V441.784M36 441.784L47.0755 441.784M36 441.784L43.0564 448.727C45.2538 450.892 48.0424 452.534 51.2629 453.382C61.0262 455.955 71.0616 450.258 73.6777 440.658M38.3217 431.342C40.9378 421.742 50.9732 416.045 60.7365 418.618C63.9571 419.466 66.7457 421.108 68.9431 423.273L76 430.212M76 419.326V430.212",stroke:"black","stroke-width":"4","stroke-linecap":"square"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{class:"keypad-item cursor-pointer confirm","data-keypad":"confirm",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"397",width:"254",height:"78",rx:"23",fill:"white"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:"105",y:"397",width:"254",height:"78",rx:"23",stroke:"#E1E5EF","stroke-width":"2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M151.804 447.5V424.168H166.983V427.681H155.993V434.062H166.177V437.574H155.993V443.955H167.047V447.5H151.804ZM189.526 424.168V447.5H185.787L174.734 431.548H174.54V447.5H170.351V424.168H174.154L185.143 440.12H185.368V424.168H189.526ZM192.153 427.681V424.168H210.748V427.681H203.561V447.5H199.372V427.681H192.153ZM213.375 447.5V424.168H228.553V427.681H217.564V434.062H227.748V437.574H217.564V443.955H228.618V447.5H213.375ZM231.922 447.5V424.168H240.687C246.037 424.168 248.905 427.165 248.905 431.612C248.905 434.787 247.455 437.139 244.716 438.251L249.743 447.5H245.07L240.494 438.96H236.111V447.5H231.922ZM236.111 435.447H240.043C243.201 435.447 244.619 434.094 244.619 431.612C244.619 429.131 243.201 427.681 240.043 427.681H236.111V435.447Z",fill:"black"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M292.977 421H306V438.423H268M268 438.423L279.667 426.846M268 438.423L279.667 450",stroke:"black","stroke-width":"4"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{id:"codnut-multiselect-area",class:"hidden",x:"0",y:"0",width:"0",height:"0",fill:"#2194FF4D",stroke:"#2194FF"}),/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{id:"multi-select-bounding-rect",class:"hidden",x:"0",y:"0",width:"0",height:"0","stroke-width":"6",stroke:"#292D35",fill:"#1A92FF",fillOpacity:0.1,rx:"4",style:{pointerEvents:'none'}})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"pen-board",style:{position:'absolute',top:0,width:'100%',height:'100%',opacity:1,zIndex:props.three?40:0},class:"hidden"}),props.three&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'absolute',top:0,width:'100%',height:'100%',pointerEvents:'none'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{id:"pen-board-svg-three",width:"100%",height:"100%",viewBox:"0 0 1920 1200",scale:"1",fill:"none",preserveAspectRatio:"xMinYMin meet"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"move-board",style:{position:'absolute',top:0,width:'100%',height:'100%',backgroundColor:'black',opacity:0},class:"hidden cursor-move"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"toast-container",style:{width:'100%',position:'absolute',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'8px',left:'50%',bottom:'2%',transform:'translateX(-50%)'},class:"hidden"}),!props.three&&props.toolbar&&/*#__PURE__*/(0,jsx_runtime.jsx)("math-toolbar",{id:"math-toolbar",style:{position:'absolute',width:'4.2%',// height: '23.33%',
right:'1.2%',top:15}}),props.three&&props.toolbar&&/*#__PURE__*/(0,jsx_runtime.jsx)("math-toolbar-three",{id:"math-toolbar",style:{position:'absolute',width:'4.2%',// height: '23.33%',
right:'1.2%',top:15,zIndex:41}}),props.toolbar&&/*#__PURE__*/(0,jsx_runtime.jsx)("math-toolbar2",{id:"math-toolbar2",style:{position:'absolute',width:'4.2%',// height: '23.38%',
bottom:"".concat(props.three?'2%':'10%'),right:'1.2%'}}),/*#__PURE__*/(0,jsx_runtime.jsx)("math-trashcan",{id:"math-trashcan",cursor:"pointer",style:{position:'absolute',width:'4.2%',// height: '6.3%',
bottom:'2%',right:'1.2%'},class:"".concat(props.three?'hidden':'')})]});};/* harmony default export */ const engine_CodnutDigitalMathClass = (CodnutDigitalMathClass_CodnutDigitalMathClass);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(483);
;// CONCATENATED MODULE: ./src/math/HA1P02801/HA1P02801.jsx
const HA1P02801=()=>{(0,react.useEffect)(()=>{let currentClass=new HA1P02801Class();currentClass.render();},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(engine_CodnutDigitalMathClass,{toolbar:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("ha1p02801-toolbar",{id:"ha1p02801-toolbar",class:"item-toolbar",style:{position:'absolute',width:'9.583%',height:'49.33%',left:'1%',top:'24%'}}),/*#__PURE__*/(0,jsx_runtime.jsx)("ha1p02801-toolbar-info",{id:"ha1p02801-toolbar-info",class:"module-info-item module-info-close hidden",style:{position:'absolute',width:'20%',height:'49.33%',left:'10.375%',top:'24%',zIndex:'2'}}),/*#__PURE__*/(0,jsx_runtime.jsx)("info-toolbar",{id:"info-toolbar",title:"\uB300\uC218\uBE14\uB85D",description1:"[\"\uB2E4\uD56D\uC2DD\uC758 \uACC4\uC0B0\"]",description2:"[\"\uC9C1\uC721\uBA74\uCCB4\uC758 \uBD80\uD53C\uC640 \uAC01 \uBE14\uB85D\uC758 \uBD80\uD53C\uC758 \uD569\uC774 \uAC19\uC74C\uC744 \uC774\uC6A9\uD558\uC5EC \uB2E4\uD56D\uC2DD\uC758 \uACC4\uC0B0\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\"]",description3:"[\n          \"(1) \uC2DD\uC758 \uC804\uAC1C \",\n          \"\uB450 \uAC1C \uC774\uC0C1\uC758 \uB2E4\uD56D\uC2DD\uC758 \uACF1\uC744 \uBD84\uBC30\uBC95\uCE59\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC804\uAC1C\uD558\uACE0 \uC815\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\",\n          \" \",\n          \"(2) \uC778\uC218\uBD84\uD574\",\n          \"\uD558\uB098\uC758 \uB2E4\uD56D\uC2DD\uC744 \uB450 \uAC1C \uC774\uC0C1\uC758 \uB2E4\uD56D\uC2DD\uC758 \uACF1\uC73C\uB85C \uB098\uD0C0\uB0B4\uB294 \uAC83\uC744 \uC778\uC218\uBD84\uD574\uB77C\uACE0 \uD569\uB2C8\uB2E4.\"\n        ]"})]});};/* harmony default export */ const HA1P02801_HA1P02801 = (HA1P02801);
;// CONCATENATED MODULE: ./src/webcomponents/ha1p02801-1.js
const root=react_dom.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"codnut-top-element",style:{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh',backgroundColor:'#08142B'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(HA1P02801_HA1P02801,{preset:"preset1"})}));

//# sourceMappingURL=codnut-math.js.map