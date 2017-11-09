'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1>Ricardo Valente</h1>\n');
}).listen(process.env.PORT || 5000);

console.log('Server running at http://localhost:3000/');