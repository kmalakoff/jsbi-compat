"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    JSBI: function() {
        return _jsbicjs.default;
    },
    default: function() {
        return _default;
    }
});
var _jsbicjs = /*#__PURE__*/ _interop_require_default(require("./jsbi.js"));
var _BigIntcjs = /*#__PURE__*/ _interop_require_default(require("./BigInt.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = typeof BigInt === "undefined" ? _jsbicjs.default : _BigIntcjs.default;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }