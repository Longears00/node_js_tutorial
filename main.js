
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res)=> {
  res.render('index');
});

app.get('/contact', (req, res)=> {
  res.render('contact');
});

app.post('/contact', urlencodedParser, (req, res)=> {
    if (!req.body) return res.sendStatus(400);
    res.render('contact');
  });

app.get('/profile/:id', (req, res)=> {
    res.render('profile', {
        person: 'name',
      });
  });

app.listen(3000);
