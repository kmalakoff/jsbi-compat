// patch missing methods
"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
if (typeof Math.clz32 === "undefined") Math.clz32 = require("clz32");
if (typeof Math.imul === "undefined") Math.imul = require("imul");
if (typeof Number.MAX_SAFE_INTEGER === "undefined") Number.MAX_SAFE_INTEGER = require("max-safe-integer");
if (typeof String.prototype.charCodeAt === "undefined") String.prototype.charCodeAt = require("char-code-at");
if (typeof Object.setPrototypeOf === "undefined") Object.setPrototypeOf = require("setprototypeof");
var JSBI = require("jsbi/dist/jsbi-umd.js");
// jsbi extension
JSBI.isBigInt = function isBigInt(x) {
    return _instanceof(x, JSBI);
};
module.exports = JSBI;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }