import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 5000;
let indexPath = path.join(__dirname, 'index.html');

function getIndex(response) {
   fs.readFile(indexPath, {encoding: 'utf-8'}, (error, data) => {
      if(error) {
         response.writeHead(404);
         response.write('File not found!');
      } else {
         response.write(data);
      }
      response.end();
   });
}

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  getIndex(res);
  console.log('Server is running!');
}).listen(process.env.PORT || port);
