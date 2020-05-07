## jsbi-compat

Provides a jsbi interface on top of native BigInt and provides a fallback to jsbi library when BigInt is not available. Adds isBigInt function for cross-implementation type checking.

See [jsbi](https://github.com/GoogleChromeLabs/jsbi) for API details.

```
var JSBI = require('jsbi-compat');

const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
console.log(String(max));
// → '9007199254740991'
const other = JSBI.BigInt('2');
const result = JSBI.add(max, other);
console.log(String(result));
// → '9007199254740993'

// compat extended API
console.log(JSBI.isBigInt(JSBI.BigInt('2')));
// → true
```
