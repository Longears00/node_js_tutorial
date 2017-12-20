
var http = require('http');

var server = http.createServer((req, res)=> {
    console.log('req was made:' + req.url);
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    let obj = {
        name: 'ryu',
        job: 'ninja',
        age: 29,
      };
    res.end(JSON.stringify(obj));
  });

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
