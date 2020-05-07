if (typeof BigInt !== 'undefined') module.exports = require('./lib/BigInt');
else module.exports = require('./lib/jsbi');
