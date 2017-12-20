
var http = require('http');

var server = http.createServer((req, res)=> {
    console.log('req was made:' + req.url);
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('hey text');
  });

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
