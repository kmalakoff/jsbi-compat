if (typeof BigInt !== 'undefined') module.exports = require('./BigInt');
else module.exports = require('./jsbi');
