var assert = require('assert');
var path = require('path');
var mock = require('mock-require-lazy');

var JSBI_TESTS = path.dirname(require.resolve('jsbi-tests'));
var METHODS = ['tests', 'as-int-n'];

describe('BigInt Exists', () => {
  describe('BigInt', () => {
    var { JSBI } = require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', JSBI);
        require(`${JSBI_TESTS}/tests/${method}`);
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
    var { JSBI } = require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', JSBI);
        require(`${JSBI_TESTS}/tests/${method}`);
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
    // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
    var BigInt = require('jsbi-compat');

    METHODS.forEach((method) => {
      it(method, () => {
        mock('jsbi', BigInt);
        require(`${JSBI_TESTS}/tests/${method}`);
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
