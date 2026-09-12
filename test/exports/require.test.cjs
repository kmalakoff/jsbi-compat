const assert = require('assert');
const BigIntCompat = require('jsbi-compat');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof BigIntCompat, 'object');
  });
});
