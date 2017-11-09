'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_https2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1>Ricardo Valente</h1>\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://localhost:3000/');