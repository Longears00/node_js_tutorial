
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

var writeStream = fs.createWriteStream(__dirname + '/write.txt');

var server = http.createServer((req, res)=> {
    console.log('req was made:' + req.url);
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    readStream.pipe(res);
  });

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
