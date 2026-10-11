# jsbi-compat

`jsbi-compat` provides JSBI-style bigint operations. The default export uses native `BigInt` when available and falls back to JSBI when it is absent. The named `JSBI` export always uses the JSBI implementation.

Each implementation's `isBigInt(value)` recognizes its own values: native bigint primitives for the native adapter, or JSBI instances for the polyfill.

See [JSBI](https://github.com/GoogleChromeLabs/jsbi) for bigint operation details. For the full upstream API, including generic `ADD`, mixed-type `EQ`/`NE` equality and DataView helpers, use the named `JSBI` export.

```bash
npm install jsbi-compat
```

```js
var JSBI = require('jsbi-compat');

var max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
console.log(String(max));
// → '9007199254740991'
var other = JSBI.BigInt('2');
var result = JSBI.add(max, other);
console.log(String(result));
// → '9007199254740993'

// compat extended API
console.log(JSBI.isBigInt(JSBI.BigInt('2')));
// → true
```
