
var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));

//controllers
todoController(app);

app.listen(3000);
