var JSBI = {};

JSBI.BigInt = function (value) {
  // eslint-disable-next-line no-undef
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
  return a ** b;
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
  // eslint-disable-next-line eqeqeq
  return x == y;
};
JSBI.NE = function NE(x, y) {
  // eslint-disable-next-line eqeqeq
  return x != y;
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
  return typeof a === 'bigint';
};

JSBI.asIntN = function asIntN(n, x) {
  // eslint-disable-next-line no-undef
  return BigInt.asIntN(n, x);
};
JSBI.asUintN = function asUintN(n, x) {
  // eslint-disable-next-line no-undef
  return BigInt.asUintN(n, x);
};

module.exports = JSBI;
