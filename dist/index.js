'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 5000;
var indexPath = _path2.default.join(__dirname, 'index.html');

function getIndex(response) {
   _fs2.default.readFile(indexPath, { encoding: 'utf-8' }, function (error, data) {
      if (error) {
         response.writeHead(404);
         response.write('File not found!');
      } else {
         response.write(data);
      }
      response.end();
   });
}

_http2.default.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   getIndex(res);
   console.log('Server is running!');
}).listen(process.env.PORT || port);