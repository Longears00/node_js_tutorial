
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    item: String,
  });
var Todo = mongoose.model('Todo', todoSchema);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{
    item: 'get milk',
  }, {
    item: 'walk dog',
  },
{
    item: 'kick some coding ass',
  },
];

module.exports = function (app) {
  app.get('/todo', (req, res)=> {
      Todo.find({}, (err, data)=> {
        if (err)throw err;
        res.render('todo', { todo: data });
      });
    });
  app.post('/todo', urlencodedParser, (req, res)=> {
    var newTodo = Todo(req.body).save((err, data)=> {
        if (err)throw err;
        res.json(data);
      });
  });
  app.delete('/todo/:item', (req, res)=> {
      Todo.find({ item: req.params.item.replace(/-/g, ' ') }).remove((err, data)=> {
          if (err)throw err;
          res.json(data);
        });
    });
};
