var Conversion = require('transformer-conversion');
var tInteger = require('transformer.integer');
var tIpAddress = require('transformer.ip-address');
// require any other modules you may need here.
var ip = require('ip');

module.exports = Conversion(tInteger, tIpAddress, convert);

// this is a synchronous conversion.
function convert(integer) {
  return ip.fromLong(integer);
}
