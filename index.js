import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<h1>Ricardo Valente</h1>\n');
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');
