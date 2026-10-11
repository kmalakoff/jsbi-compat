const JSBI = {
  BigInt(value: bigint | number | string | boolean) {
    return BigInt(value);
  },
  add(a: bigint, b: bigint) {
    return a + b;
  },
  subtract(a: bigint, b: bigint) {
    return a - b;
  },
  multiply(a: bigint, b: bigint) {
    return a * b;
  },
  divide(a: bigint, b: bigint) {
    return a / b;
  },
  remainder(a: bigint, b: bigint) {
    return a % b;
  },
  exponentiate(a: bigint, b: bigint) {
    // Keep native BigInt arithmetic without the ES5 exponentiation transform.
    const zero = BigInt(0);
    const one = BigInt(1);
    let factor = a * one;
    let exponent = b * one;
    if (exponent < zero) throw new RangeError('Exponent must be positive');
    if (exponent === zero) return one;
    if (factor === zero || factor === one) return factor;
    if (factor === -one) return (exponent & one) === zero ? one : factor;

    let result = one;
    while (exponent > zero) {
      if ((exponent & one) !== zero) result *= factor;
      exponent >>= one;
      if (exponent > zero) factor *= factor;
    }
    return result;
  },
  unaryMinus(a: bigint) {
    return -a;
  },
  bitwiseNot(a: bigint) {
    return ~a;
  },
  leftShift(a: bigint, b: bigint) {
    return a << b;
  },
  signedRightShift(a: bigint, b: bigint) {
    return a >> b;
  },
  bitwiseAnd(a: bigint, b: bigint) {
    return a & b;
  },
  bitwiseOr(a: bigint, b: bigint) {
    return a | b;
  },
  bitwiseXor(a: bigint, b: bigint) {
    return a ^ b;
  },
  equal(a: bigint, b: bigint) {
    return a === b;
  },
  notEqual(a: bigint, b: bigint) {
    return a !== b;
  },
  lessThan(a: bigint, b: bigint) {
    return a < b;
  },
  lessThanOrEqual(a: bigint, b: bigint) {
    return a <= b;
  },
  greaterThan(a: bigint, b: bigint) {
    return a > b;
  },
  greaterThanOrEqual(a: bigint, b: bigint) {
    return a >= b;
  },
  EQ(x: bigint, y: bigint) {
    return x === y;
  },
  NE(x: bigint, y: bigint) {
    return x !== y;
  },
  LT(x: bigint, y: bigint) {
    return x < y;
  },
  LE(x: bigint, y: bigint) {
    return x <= y;
  },
  GT(x: bigint, y: bigint) {
    return x > y;
  },
  GE(x: bigint, y: bigint) {
    return x >= y;
  },
  toNumber(a: bigint) {
    return Number(a);
  },
  asIntN(n: number, x: bigint) {
    return BigInt.asIntN(n, x);
  },
  asUintN(n: number, x: bigint) {
    return BigInt.asUintN(n, x);
  },
  // jsbi extension
  isBigInt(x: unknown) {
    return typeof x === 'bigint';
  },
};

export default JSBI;
