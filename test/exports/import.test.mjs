import assert from 'assert';
import BigIntCompat from 'jsbi-compat';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof BigIntCompat, 'object');
  });
});
