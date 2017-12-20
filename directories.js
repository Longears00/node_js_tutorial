
var fs = require('fs');

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff');

fs.mkdir('stuff', ()=> {
    fs.readFile('read.txt', 'utf8', (err, data)=> {
      fs.writeFile('./stuff/write2.txt', data);
    });
  });
fs.unlink('./stuff/write2.txt', ()=> {
  fs.rmdir('stuff');
});
