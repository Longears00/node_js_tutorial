
var fs = require('fs');

var reads = fs.readFileSync('read.txt', 'utf8');
fs.writeFileSync('write.txt', reads);

//no blocking
fs.readFile('read.txt', 'utf8', (err, data)=> {
  fs.writeFile('write2.txt', data);
});

//delete
fs.unlink('write2.txt');
