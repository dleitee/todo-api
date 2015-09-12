var Todo = require('../models/todo');

exports.postTodos = function(req, res) {
  
  var todo = new Todo();

  todo.task = req.body.task;
  todo.userId = req.user._id;

  todo.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Task added to list!', data: todo });
  });

};

exports.getTodos = function(req, res) {
  
  Todo.find({ userId: req.user._id }, function(err, todos) {
    if (err)
      res.send(err);

    res.json(todos);
  });

};

exports.getTodo = function(req, res) {
  
  Todo.find({ userId: req.user._id, _id: req.params.todo_id }, function(err, todo) {
    if (err)
      res.send(err);

    res.json(todo);
  });

};

exports.putTodo = function(req, res) {
  
  Todo.update({ userId: req.user._id, _id: req.params.todo_id }, { task: req.body.task }, function(err, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: '[Todo]' + num + ' updated' });
  });

};

exports.deleteTodo = function(req, res) {
  
  Todo.remove({ userId: req.user._id, _id: req.params.todo_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Todo removed from the list!' });
  });

};
