var assert = require('assert');
var path = require('path');
var mock = require('mock-require-lazy');

var JSBI_TESTS = path.dirname(require.resolve('jsbi-tests'));
var METHODS = ['tests', 'as-int-n'];

describe('BigInt Exists', function () {
  describe('BigInt', function () {
    var JSBI = require('../../lib/BigInt');

    METHODS.forEach(function (method) {
      it(method, function () {
        mock('jsbi', JSBI);
        require(JSBI_TESTS + '/tests/' + method);
      });
    });

    it('supports isBigInt', function () {
      assert.equal(JSBI.isBigInt(false), false);
      assert.equal(JSBI.isBigInt(true), false);
      assert.equal(JSBI.isBigInt(1), false);
      assert.equal(JSBI.isBigInt('hello'), false);
      assert.equal(JSBI.isBigInt(JSBI.BigInt(1)), true);
    });
  });

  describe('JTBI', function () {
    var JSBI = require('../../lib/jsbi');

    METHODS.forEach(function (method) {
      it(method, function () {
        mock('jsbi', JSBI);
        require(JSBI_TESTS + '/tests/' + method);
      });
    });

    it('supports isBigInt', function () {
      assert.equal(JSBI.isBigInt(false), false);
      assert.equal(JSBI.isBigInt(true), false);
      assert.equal(JSBI.isBigInt(1), false);
      assert.equal(JSBI.isBigInt('hello'), false);
      assert.equal(JSBI.isBigInt(JSBI.BigInt(1)), true);
    });
  });

  describe('library', function () {
    var JSBI = require('../..');

    METHODS.forEach(function (method) {
      it(method, function () {
        mock('jsbi', JSBI);
        require(JSBI_TESTS + '/tests/' + method);
      });
    });

    it('supports isBigInt', function () {
      assert.equal(JSBI.isBigInt(false), false);
      assert.equal(JSBI.isBigInt(true), false);
      assert.equal(JSBI.isBigInt(1), false);
      assert.equal(JSBI.isBigInt('hello'), false);
      assert.equal(JSBI.isBigInt(JSBI.BigInt(1)), true);
    });
  });
});
