'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 6000;
var cssDir = __dirname + '/css/';
var jsDir = __dirname + '/js/';
var viewsDir = __dirname + '/views/';

function filePath(request) {
  var filePath = void 0;
  if (request.url === '/') {
    filePath = 'index.html';
  } else {
    filePath = request.url.replace('/', '');
  }
  return _path2.default.join(__dirname, String(filePath));
}

function contentType(filePath) {
  var extname = String(_path2.default.extname(filePath)).toLowerCase();
  var contentType = 'text/html';
  var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
  };
  contentType = mimeTypes[extname] || 'application/octet-stream';
  return contentType;
}

function getFileData(request, response) {
  _fs2.default.readFile(filePath(request), 'utf8', function (error, data) {
    if (error) {
      if (error.code == 'ENOENT') {
        _fs2.default.readFile('./404.html', function (error, data) {
          response.writeHead(200, { 'Content-Type': contentType(filePath(request)) });
          response.end(data, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        response.end();
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType(filePath(request)) });
      response.write(data);
    }
    response.end();
  });
}

_http2.default.createServer(getFileData).listen(process.env.PORT || port);
