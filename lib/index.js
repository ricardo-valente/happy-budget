import https from 'https';

https.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<h1>Ricardo Valente</h1>\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://localhost:3000/');
