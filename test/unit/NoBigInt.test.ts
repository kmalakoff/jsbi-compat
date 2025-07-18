import assert from 'assert';
import mock from 'mock-require-lazy';
import Module from 'module';
import path from 'path';

const _require = typeof require === 'undefined' ? Module.createRequire(import.meta.url) : require;

const JSBI_TESTS = path.dirname(_require.resolve('jsbi-tests'));
const METHODS = ['tests', 'as-int-n'];

describe('No BigInt', () => {
  describe('JTBI', () => {
    var { JSBI } = _require('jsbi-compat');

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
    var { JSBI } = _require('jsbi-compat');

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
});
