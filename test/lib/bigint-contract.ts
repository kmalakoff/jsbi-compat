import assert from 'assert';

type Adapter<T> = {
  BigInt(value: number | string | boolean): T;
  add(a: T, b: T): T;
  subtract(a: T, b: T): T;
  multiply(a: T, b: T): T;
  divide(a: T, b: T): T;
  remainder(a: T, b: T): T;
  exponentiate(a: T, b: T): T;
  unaryMinus(a: T): T;
  bitwiseNot(a: T): T;
  leftShift(a: T, b: T): T;
  signedRightShift(a: T, b: T): T;
  bitwiseAnd(a: T, b: T): T;
  bitwiseOr(a: T, b: T): T;
  bitwiseXor(a: T, b: T): T;
  equal(a: T, b: T): boolean;
  notEqual(a: T, b: T): boolean;
  lessThan(a: T, b: T): boolean;
  lessThanOrEqual(a: T, b: T): boolean;
  greaterThan(a: T, b: T): boolean;
  greaterThanOrEqual(a: T, b: T): boolean;
  toNumber(a: T): number;
  asIntN(bits: number, value: T): T;
  asUintN(bits: number, value: T): T;
  isBigInt(value: unknown): boolean;
};

export function registerOperations<T extends { toString(): string }>(adapter: Adapter<T>) {
  it('constructs integers without losing string precision', () => {
    assert.strictEqual(adapter.BigInt('9007199254740993').toString(), '9007199254740993');
    assert.strictEqual(adapter.BigInt('-9007199254740993').toString(), '-9007199254740993');
    assert.strictEqual(adapter.BigInt('0xff').toString(), '255');
    assert.strictEqual(adapter.BigInt(-7).toString(), '-7');
    assert.strictEqual(adapter.BigInt(0).toString(), '0');
    assert.strictEqual(adapter.BigInt(false).toString(), '0');
    assert.strictEqual(adapter.BigInt(true).toString(), '1');
  });

  it('calculates signed arithmetic beyond safe-number precision', () => {
    assert.strictEqual(adapter.add(adapter.BigInt('9007199254740991'), adapter.BigInt(2)).toString(), '9007199254740993');
    assert.strictEqual(adapter.add(adapter.BigInt(-7), adapter.BigInt(3)).toString(), '-4');
    assert.strictEqual(adapter.subtract(adapter.BigInt('-9007199254740991'), adapter.BigInt(2)).toString(), '-9007199254740993');
    assert.strictEqual(adapter.subtract(adapter.BigInt(3), adapter.BigInt(-7)).toString(), '10');
    assert.strictEqual(adapter.multiply(adapter.BigInt('4294967296'), adapter.BigInt('4294967296')).toString(), '18446744073709551616');
    assert.strictEqual(adapter.multiply(adapter.BigInt(-7), adapter.BigInt(3)).toString(), '-21');
    assert.strictEqual(adapter.multiply(adapter.BigInt(-7), adapter.BigInt(-3)).toString(), '21');
    assert.strictEqual(adapter.exponentiate(adapter.BigInt(-2), adapter.BigInt(63)).toString(), '-9223372036854775808');
    assert.strictEqual(adapter.exponentiate(adapter.BigInt(-2), adapter.BigInt(4)).toString(), '16');
    assert.strictEqual(adapter.exponentiate(adapter.BigInt(7), adapter.BigInt(0)).toString(), '1');
    assert.strictEqual(adapter.unaryMinus(adapter.BigInt('-9223372036854775808')).toString(), '9223372036854775808');
    assert.strictEqual(adapter.unaryMinus(adapter.BigInt(0)).toString(), '0');
  });

  it('exponentiates zero, unit bases, and exponents beyond safe-number precision', () => {
    const cases: [string, string, string][] = [
      ['0', '0', '1'],
      ['0', '7', '0'],
      ['9007199254740993', '1', '9007199254740993'],
      ['1', '9007199254740993', '1'],
      ['-1', '9007199254740992', '1'],
      ['-1', '9007199254740993', '-1'],
    ];
    cases.forEach(([base, exponent, expected]) => {
      assert.strictEqual(adapter.exponentiate(adapter.BigInt(base), adapter.BigInt(exponent)).toString(), expected, `exponentiate(${base}, ${exponent})`);
    });
  });

  it('truncates signed division toward zero and keeps the dividend remainder sign', () => {
    assert.strictEqual(adapter.divide(adapter.BigInt(-7), adapter.BigInt(3)).toString(), '-2');
    assert.strictEqual(adapter.remainder(adapter.BigInt(-7), adapter.BigInt(3)).toString(), '-1');
    assert.strictEqual(adapter.divide(adapter.BigInt(7), adapter.BigInt(-3)).toString(), '-2');
    assert.strictEqual(adapter.remainder(adapter.BigInt(7), adapter.BigInt(-3)).toString(), '1');
    assert.strictEqual(adapter.divide(adapter.BigInt(-7), adapter.BigInt(-3)).toString(), '2');
    assert.strictEqual(adapter.remainder(adapter.BigInt(-7), adapter.BigInt(-3)).toString(), '-1');
    assert.strictEqual(adapter.divide(adapter.BigInt(1), adapter.BigInt(2)).toString(), '0');
    assert.strictEqual(adapter.remainder(adapter.BigInt(1), adapter.BigInt(2)).toString(), '1');
  });

  it('calculates signed bitwise operations and shifts', () => {
    assert.strictEqual(adapter.bitwiseNot(adapter.BigInt(0)).toString(), '-1');
    assert.strictEqual(adapter.bitwiseNot(adapter.BigInt(-1)).toString(), '0');
    assert.strictEqual(adapter.bitwiseAnd(adapter.BigInt(-5), adapter.BigInt(3)).toString(), '3');
    assert.strictEqual(adapter.bitwiseOr(adapter.BigInt(-8), adapter.BigInt(3)).toString(), '-5');
    assert.strictEqual(adapter.bitwiseXor(adapter.BigInt(-5), adapter.BigInt(3)).toString(), '-8');
    assert.strictEqual(adapter.leftShift(adapter.BigInt(1), adapter.BigInt(64)).toString(), '18446744073709551616');
    assert.strictEqual(adapter.signedRightShift(adapter.BigInt(-9), adapter.BigInt(1)).toString(), '-5');
    assert.strictEqual(adapter.leftShift(adapter.BigInt(8), adapter.BigInt(-1)).toString(), '4');
    assert.strictEqual(adapter.signedRightShift(adapter.BigInt(8), adapter.BigInt(-1)).toString(), '16');
  });

  it('compares equal, negative, and adjacent large integers', () => {
    const low = adapter.BigInt('9007199254740992');
    const high = adapter.BigInt('9007199254740993');
    const same = adapter.BigInt('9007199254740993');
    assert.strictEqual(adapter.equal(high, same), true);
    assert.strictEqual(adapter.equal(low, high), false);
    assert.strictEqual(adapter.notEqual(high, same), false);
    assert.strictEqual(adapter.notEqual(low, high), true);
    assert.strictEqual(adapter.lessThan(low, high), true);
    assert.strictEqual(adapter.lessThan(high, same), false);
    assert.strictEqual(adapter.lessThan(high, low), false);
    assert.strictEqual(adapter.lessThanOrEqual(low, high), true);
    assert.strictEqual(adapter.lessThanOrEqual(high, same), true);
    assert.strictEqual(adapter.lessThanOrEqual(high, low), false);
    assert.strictEqual(adapter.greaterThan(high, low), true);
    assert.strictEqual(adapter.greaterThan(high, same), false);
    assert.strictEqual(adapter.greaterThan(low, high), false);
    assert.strictEqual(adapter.greaterThanOrEqual(high, low), true);
    assert.strictEqual(adapter.greaterThanOrEqual(high, same), true);
    assert.strictEqual(adapter.greaterThanOrEqual(low, high), false);
    assert.strictEqual(adapter.lessThan(adapter.BigInt(-2), adapter.BigInt(-1)), true);
    assert.strictEqual(adapter.greaterThan(adapter.BigInt(-1), adapter.BigInt(-2)), true);
  });

  it('converts zero, signed integers, and a large exact power of two to numbers', () => {
    assert.strictEqual(adapter.toNumber(adapter.BigInt(0)), 0);
    assert.strictEqual(adapter.toNumber(adapter.BigInt(-7)), -7);
    assert.strictEqual(adapter.toNumber(adapter.BigInt('9007199254740991')), 9007199254740991);
    assert.strictEqual(adapter.toNumber(adapter.BigInt('9223372036854775808')), 0x8000000000000000);
  });

  it('throws for invalid construction and undefined arithmetic', () => {
    [1.5, NaN, Infinity, -Infinity].forEach((value) => {
      assert.throws(() => adapter.BigInt(value), RangeError);
    });
    ['1.5', 'not an integer'].forEach((value) => {
      assert.throws(() => adapter.BigInt(value), SyntaxError);
    });
    assert.throws(() => adapter.divide(adapter.BigInt(1), adapter.BigInt(0)), RangeError);
    assert.throws(() => adapter.remainder(adapter.BigInt(1), adapter.BigInt(0)), RangeError);
    assert.throws(() => adapter.exponentiate(adapter.BigInt(2), adapter.BigInt(-1)), RangeError);
    [0, 1, -1].forEach((base) => {
      assert.throws(() => adapter.exponentiate(adapter.BigInt(base), adapter.BigInt(-1)), RangeError);
    });
  });

  it('recognizes its integers and rejects ordinary values', () => {
    [undefined, null, false, true, 0, 1, '0', 'hello', {}, []].forEach((value) => {
      assert.strictEqual(adapter.isBigInt(value), false);
    });
    assert.strictEqual(adapter.isBigInt(adapter.BigInt(0)), true);
    assert.strictEqual(adapter.isBigInt(adapter.BigInt(-1)), true);
  });
}

export function registerAsIntN<T extends { toString(): string }>(adapter: Adapter<T>) {
  it('wraps asIntN at zero, sign bits, and signed integer boundaries', () => {
    const cases: [number, string, string][] = [
      [0, '1', '0'],
      [1, '1', '-1'],
      [1, '-2', '0'],
      [8, '127', '127'],
      [8, '128', '-128'],
      [8, '255', '-1'],
      [8, '-129', '127'],
      [8, '-128', '-128'],
      [8, '256', '0'],
      [32, '2147483648', '-2147483648'],
      [64, '9223372036854775807', '9223372036854775807'],
      [64, '9223372036854775808', '-9223372036854775808'],
      [64, '-9223372036854775809', '9223372036854775807'],
      [64, '18446744073709551615', '-1'],
    ];
    cases.forEach(([bits, input, expected]) => {
      assert.strictEqual(adapter.asIntN(bits, adapter.BigInt(input)).toString(), expected, `asIntN(${bits}, ${input})`);
    });
    assert.throws(() => adapter.asIntN(-1, adapter.BigInt(1)), RangeError);
  });
}

export function registerAsUintN<T extends { toString(): string }>(adapter: Adapter<T>) {
  it('wraps asUintN at zero and unsigned integer boundaries', () => {
    const cases: [number, string, string][] = [
      [0, '-1', '0'],
      [1, '-1', '1'],
      [8, '-1', '255'],
      [8, '-128', '128'],
      [8, '255', '255'],
      [8, '256', '0'],
      [8, '-257', '255'],
      [32, '-1', '4294967295'],
      [64, '-1', '18446744073709551615'],
      [64, '18446744073709551616', '0'],
      [64, '-18446744073709551617', '18446744073709551615'],
    ];
    cases.forEach(([bits, input, expected]) => {
      assert.strictEqual(adapter.asUintN(bits, adapter.BigInt(input)).toString(), expected, `asUintN(${bits}, ${input})`);
    });
    assert.throws(() => adapter.asUintN(-1, adapter.BigInt(1)), RangeError);
  });
}
