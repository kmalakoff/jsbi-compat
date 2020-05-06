if (typeof BigInt !== 'undefined') module.exports = require('./lib/BigInt');

require('./lib/patch');
var JSBI = require('jsbi/dist/jsbi-umd.js');
JSBI.isBigInt =
  JSBI.isBigInt ||
  function isBigInt(x) {
    return x instanceof JSBI;
  };

module.exports = JSBI;
