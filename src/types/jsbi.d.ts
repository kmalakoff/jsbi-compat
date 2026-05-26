declare module 'jsbi/dist/jsbi-umd.js' {
  class JSBI {
    static BigInt(value: bigint | number | string | boolean): JSBI;
    static add(a: JSBI, b: JSBI): JSBI;
    static subtract(a: JSBI, b: JSBI): JSBI;
    static multiply(a: JSBI, b: JSBI): JSBI;
    static divide(a: JSBI, b: JSBI): JSBI;
    static remainder(a: JSBI, b: JSBI): JSBI;
    static exponentiate(a: JSBI, b: JSBI): JSBI;
    static unaryMinus(a: JSBI): JSBI;
    static bitwiseNot(a: JSBI): JSBI;
    static leftShift(a: JSBI, b: JSBI): JSBI;
    static signedRightShift(a: JSBI, b: JSBI): JSBI;
    static bitwiseAnd(a: JSBI, b: JSBI): JSBI;
    static bitwiseOr(a: JSBI, b: JSBI): JSBI;
    static bitwiseXor(a: JSBI, b: JSBI): JSBI;
    static equal(a: JSBI, b: JSBI): boolean;
    static notEqual(a: JSBI, b: JSBI): boolean;
    static lessThan(a: JSBI, b: JSBI): boolean;
    static lessThanOrEqual(a: JSBI, b: JSBI): boolean;
    static greaterThan(a: JSBI, b: JSBI): boolean;
    static greaterThanOrEqual(a: JSBI, b: JSBI): boolean;
    static toNumber(a: JSBI): number;
    static asIntN(n: number, x: JSBI): JSBI;
    static asUintN(n: number, x: JSBI): JSBI;
    static isBigInt: (x: unknown) => boolean;
  }
  export default JSBI;
}
