"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var JSBI = {};
JSBI.BigInt = function(value) {
    return BigInt(value);
};
JSBI.add = function add(a, b) {
    return a + b;
};
JSBI.subtract = function subtract(a, b) {
    return a - b;
};
JSBI.multiply = function multiply(a, b) {
    return a * b;
};
JSBI.divide = function divide(a, b) {
    return a / b;
};
JSBI.remainder = function remainder(a, b) {
    return a % b;
};
JSBI.exponentiate = function exponentiate(a, b) {
    return Math.pow(a, b);
};
JSBI.unaryMinus = function unaryMinus(a) {
    return -a;
};
JSBI.bitwiseNot = function bitwiseNot(a) {
    return ~a;
};
JSBI.leftShift = function leftShift(a, b) {
    return a << b;
};
JSBI.signedRightShift = function signedRightShift(a, b) {
    return a >> b;
};
JSBI.bitwiseAnd = function bitwiseAnd(a, b) {
    return a & b;
};
JSBI.bitwiseOr = function bitwiseOr(a, b) {
    return a | b;
};
JSBI.bitwiseXor = function bitwiseXor(a, b) {
    return a ^ b;
};
JSBI.equal = function equal(a, b) {
    return a === b;
};
JSBI.notEqual = function notEqual(a, b) {
    return a !== b;
};
JSBI.lessThan = function lessThan(a, b) {
    return a < b;
};
JSBI.lessThanOrEqual = function lessThanOrEqual(a, b) {
    return a <= b;
};
JSBI.greaterThan = function greaterThan(a, b) {
    return a > b;
};
JSBI.greaterThanOrEqual = function greaterThanOrEqual(a, b) {
    return a >= b;
};
JSBI.EQ = function EQ(x, y) {
    return x === y;
};
JSBI.NE = function NE(x, y) {
    return x !== y;
};
JSBI.LT = function LT(x, y) {
    return x < y;
};
JSBI.LE = function LE(x, y) {
    return x <= y;
};
JSBI.GT = function GT(x, y) {
    return x > y;
};
JSBI.GE = function GE(x, y) {
    return x >= y;
};
JSBI.toNumber = function toNumber(a) {
    return Number(a);
};
JSBI.isBigInt = function isBigInt(a) {
    return (typeof a === "undefined" ? "undefined" : _type_of(a)) === "bigint";
};
JSBI.asIntN = function asIntN(n, x) {
    return BigInt.asIntN(n, x);
};
JSBI.asUintN = function asUintN(n, x) {
    return BigInt.asUintN(n, x);
};
// jsbi extension
JSBI.isBigInt = function isBigInt(x) {
    return (typeof x === "undefined" ? "undefined" : _type_of(x)) === "bigint";
};
module.exports = JSBI;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }