var transformer = require('dat-transformer');
var tInteger = transformer('integer');
var tIpAddress = transformer('ip-address');
// require any other modules you may need here.
var ip = require('ip');

module.exports = transformer.Conversion(tInteger, tIpAddress, convert);

// this is a synchronous conversion.
function convert(integer) {
  return ip.fromLong(integer);
}
