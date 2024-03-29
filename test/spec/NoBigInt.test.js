var assert = require('assert');
var path = require('path');
var mock = require('mock-require-lazy');

var JSBI_TESTS = path.dirname(require.resolve('jsbi-tests'));
var METHODS = ['tests', 'as-int-n'];

describe('No BigInt', () => {
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
});
