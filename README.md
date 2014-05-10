# transformer.integer-to-ip-address

[Transformer](http://github.com/jbenet/transformer) conversion: integer to ip-address

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '2130706433' | transform number integer ip-address
'127.0.0.1'
```

### Javascript

```js
var transformer = require('dat-transformer');
var tIntegerToIpAddress = transformer('integer', 'ip-address');
tIntegerToIpAddress('2130706433'); // '127.0.0.1'
```
