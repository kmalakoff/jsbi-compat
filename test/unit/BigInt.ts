import assert from 'assert';
import mock from 'mock-require-lazy';
import Module from 'module';
import path from 'path';

const _require = typeof require === 'undefined' ? Module.createRequire(import.meta.url) : require;

const JSBI_TESTS = path.dirname(_require.resolve('jsbi-tests'));
const METHODS = ['tests', 'as-int-n'];

describe('BigInt Exists', () => {
  if (typeof BigInt !== 'undefined') return;

  describe('BigInt', () => {
    const { JSBI } = _require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', JSBI);
        _require(`${JSBI_TESTS}/tests/${method}`);
      });
    });

    it('supports isBigInt', () => {
      assert.equal(JSBI.isBigInt(false), false);
      assert.equal(JSBI.isBigInt(true), false);
      assert.equal(JSBI.isBigInt(1), false);
      assert.equal(JSBI.isBigInt('hello'), false);
      assert.equal(JSBI.isBigInt(JSBI.BigInt(1)), true);
    });
  });

  describe('JTBI', () => {
    const { JSBI } = _require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', JSBI);
        _require(`${JSBI_TESTS}/tests/${method}`);
      });
    });

    it('supports isBigInt', () => {
      assert.equal(JSBI.isBigInt(false), false);
      assert.equal(JSBI.isBigInt(true), false);
      assert.equal(JSBI.isBigInt(1), false);
      assert.equal(JSBI.isBigInt('hello'), false);
      assert.equal(JSBI.isBigInt(JSBI.BigInt(1)), true);
    });
  });

  describe('library', () => {
    // biome-ignore lint/suspicious/noShadowRestrictedNames: Allow shadow
    const BigInt = _require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', BigInt);
        _require(`${JSBI_TESTS}/tests/${method}`);
      });
    });

    it('supports isBigInt', () => {
      assert.equal(BigInt.isBigInt(false), false);
      assert.equal(BigInt.isBigInt(true), false);
      assert.equal(BigInt.isBigInt(1), false);
      assert.equal(BigInt.isBigInt('hello'), false);
      assert.equal(BigInt.isBigInt(BigInt.BigInt(1)), true);
    });
  });
});
