var JSBI = {
  BigInt(value) {
    return BigInt(value);
  },
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
    return a % b;
  },
  exponentiate(a, b) {
    return a ** b;
  },
  unaryMinus(a) {
    return -a;
  },
  bitwiseNot(a) {
    return ~a;
  },
  leftShift(a, b) {
    return a << b;
  },
  signedRightShift(a, b) {
    return a >> b;
  },
  bitwiseAnd(a, b) {
    return a & b;
  },
  bitwiseOr(a, b) {
    return a | b;
  },
  bitwiseXor(a, b) {
    return a ^ b;
  },
  equal(a, b) {
    return a === b;
  },
  notEqual(a, b) {
    return a !== b;
  },
  lessThan(a, b) {
    return a < b;
  },
  lessThanOrEqual(a, b) {
    return a <= b;
  },
  greaterThan(a, b) {
    return a > b;
  },
  greaterThanOrEqual(a, b) {
    return a >= b;
  },
  EQ(x, y) {
    return x === y;
  },
  NE(x, y) {
    return x !== y;
  },
  LT(x, y) {
    return x < y;
  },
  LE(x, y) {
    return x <= y;
  },
  GT(x, y) {
    return x > y;
  },
  GE(x, y) {
    return x >= y;
  },
  toNumber(a) {
    return Number(a);
  },
  asIntN(n, x) {
    return BigInt.asIntN(n, x);
  },
  asUintN(n, x) {
    return BigInt.asUintN(n, x);
  },
  // jsbi extension
  isBigInt(x) {
    return typeof x === 'bigint';
  },
};

export default JSBI;
