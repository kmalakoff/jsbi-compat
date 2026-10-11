import assert from 'assert';
import Module from 'module';
import { registerAsIntN, registerAsUintN, registerOperations } from '../lib/bigint-contract.ts';

const _require = typeof require === 'undefined' ? Module.createRequire(import.meta.url) : require;

describe('named JSBI polyfill', () => {
  const { JSBI } = _require('jsbi-compat');

  it('returns actual JSBI instances through the named export', () => {
    assert.strictEqual(JSBI.BigInt(1) instanceof JSBI, true);
    assert.strictEqual(typeof JSBI.BigInt(1), 'object');
  });

  registerOperations(JSBI);
  registerAsIntN(JSBI);
  registerAsUintN(JSBI);

  if (typeof BigInt !== 'undefined') {
    it('rejects native bigint values in the polyfill isBigInt check', () => {
      assert.strictEqual(JSBI.isBigInt(BigInt(1)), false);
    });
  }
});

describe('default JSBI fallback', () => {
  if (typeof BigInt !== 'undefined') return;

  const Fallback = _require('jsbi-compat');
  const { JSBI } = _require('jsbi-compat');

  it('returns actual JSBI instances through the default export', () => {
    assert.strictEqual(Fallback.BigInt(1) instanceof JSBI, true);
    assert.strictEqual(Fallback.isBigInt(JSBI.BigInt(-1)), true);
  });

  registerOperations(Fallback);
  registerAsIntN(Fallback);
  registerAsUintN(Fallback);
});
