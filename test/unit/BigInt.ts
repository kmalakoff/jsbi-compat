import assert from 'assert';
import Module from 'module';
import { registerAsIntN, registerAsUintN, registerOperations } from '../lib/bigint-contract.ts';

const _require = typeof require === 'undefined' ? Module.createRequire(import.meta.url) : require;

describe('default native adapter', () => {
  if (typeof BigInt === 'undefined') return;

  const Native = _require('jsbi-compat');
  const { JSBI } = _require('jsbi-compat');

  it('returns actual native bigint values through the default export', () => {
    assert.strictEqual(typeof Native.BigInt(1), 'bigint');
    assert.strictEqual(Native.BigInt('9007199254740993'), BigInt('9007199254740993'));
  });

  registerOperations(Native);
  if (typeof BigInt.asIntN === 'function') registerAsIntN(Native);
  if (typeof BigInt.asUintN === 'function') registerAsUintN(Native);

  it('rejects mixed exponentiation operands before zero and unit shortcuts', () => {
    assert.throws(() => Native.exponentiate(BigInt(1), 0), TypeError);
    assert.throws(() => Native.exponentiate(BigInt(1), -1), TypeError);
    assert.throws(() => Native.exponentiate(0, BigInt(0)), TypeError);
  });

  it('accepts an existing native bigint', () => {
    const value = BigInt('-9223372036854775808');
    assert.strictEqual(Native.BigInt(value), value);
  });

  it('compares bigint operands through its uppercase aliases', () => {
    const low = Native.BigInt(-2);
    const high = Native.BigInt(-1);
    const same = Native.BigInt(-1);
    assert.strictEqual(Native.EQ(high, same), true);
    assert.strictEqual(Native.EQ(low, high), false);
    assert.strictEqual(Native.NE(high, same), false);
    assert.strictEqual(Native.NE(low, high), true);
    assert.strictEqual(Native.LT(low, high), true);
    assert.strictEqual(Native.LT(high, same), false);
    assert.strictEqual(Native.LT(high, low), false);
    assert.strictEqual(Native.LE(low, high), true);
    assert.strictEqual(Native.LE(high, same), true);
    assert.strictEqual(Native.LE(high, low), false);
    assert.strictEqual(Native.GT(high, low), true);
    assert.strictEqual(Native.GT(high, same), false);
    assert.strictEqual(Native.GT(low, high), false);
    assert.strictEqual(Native.GE(high, low), true);
    assert.strictEqual(Native.GE(high, same), true);
    assert.strictEqual(Native.GE(low, high), false);
  });

  it('rejects JSBI objects in the native isBigInt check', () => {
    assert.strictEqual(Native.isBigInt(JSBI.BigInt(1)), false);
  });
});
