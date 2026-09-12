import assert from 'assert';
import BigIntCompat from 'jsbi-compat';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof BigIntCompat, 'object');
  });
});
