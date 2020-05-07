// patch missing methods
if (typeof Math.clz32 === 'undefined') Math.clz32 = require('clz32');
if (typeof Math.imul === 'undefined') Math.imul = require('imul');
if (typeof Number.MAX_SAFE_INTEGER === 'undefined') Number.MAX_SAFE_INTEGER = require('max-safe-integer');
// eslint-disable-next-line no-extend-native
if (typeof String.prototype.charCodeAt === 'undefined') String.prototype.charCodeAt = require('char-code-at');

var JSBI = require('jsbi/dist/jsbi-umd.js');

// jsbi extension
JSBI.isBigInt = function isBigInt(x) {
  return x instanceof JSBI;
};

module.exports = JSBI;
