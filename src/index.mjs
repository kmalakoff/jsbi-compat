import JSBI from './jsbi.cjs'
import BigIntPolyfill from './BigInt.cjs'

export default typeof BigInt === 'undefined' ? JSBI : BigIntPolyfill;
export { default as JSBI } from './jsbi.cjs'
