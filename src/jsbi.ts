// patch missing methods
if (typeof Math.clz32 === 'undefined') Math.clz32 = require('clz32');
if (typeof Math.imul === 'undefined') Math.imul = require('imul');
if (typeof Number.MAX_SAFE_INTEGER === 'undefined')
  // @ts-expect-error
  Number.MAX_SAFE_INTEGER = require('max-safe-integer');
if (typeof String.prototype.charCodeAt === 'undefined') String.prototype.charCodeAt = require('char-code-at');
if (typeof Object.setPrototypeOf === 'undefined') Object.setPrototypeOf = require('setprototypeof');

import JSBI from 'jsbi/dist/jsbi-umd.js';

// jsbi extension
JSBI.isBigInt = function isBigInt(x) {
  return x instanceof JSBI;
};

export default JSBI;
