
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

var server = http.createServer((req, res)=> {
    console.log('req was made:' + req.url);
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    readStream.pipe(res);
  });

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
