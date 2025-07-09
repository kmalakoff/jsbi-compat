import BigIntPolyfill from './BigInt.ts';
import JSBI from './jsbi.ts';

export default typeof BigInt === 'undefined' ? JSBI : BigIntPolyfill;
export { default as JSBI } from './jsbi.ts';
