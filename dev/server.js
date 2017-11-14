import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 6000;
const cssDir = __dirname + '/css/';
const jsDir = __dirname + '/js/';
const viewsDir = __dirname + '/views/';

function filePath(request) {
  let filePath;
  if (request.url === '/') {
    filePath = 'index.html';
  } else {
    filePath = request.url.replace('/', '');
  }
  return path.join(__dirname, String(filePath));
}

function contentType(filePath) {
  let extname = String(path.extname(filePath)).toLowerCase();
  let contentType = 'text/html';
  const mimeTypes = {
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
  fs.readFile(filePath(request), 'utf8', (error, data) => {
    if(error) {
      if(error.code == 'ENOENT'){
        fs.readFile('./404.html', function(error, data) {
          response.writeHead(200, { 'Content-Type': contentType(filePath(request)) });
          response.end(data, 'utf-8');
        });
      }
      else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        response.end();
      }
    } else {
      response.writeHead(200, {'Content-Type': contentType(filePath(request))});
      response.write(data);
    }
    response.end();
  });
}

http.createServer(getFileData).listen(process.env.PORT || port);
