// Load required packages
var Todo = require('../models/todo');

// Create endpoint /api/todos for POST
exports.postTodos = function(req, res) {
  
  // Create a new instance of the Todo model
  var todo = new Todo();

  // Set the todo properties that came from the POST data
  todo.task = req.body.task;
  todo.userId = req.user._id;

  // Save the todo and check for errors
  todo.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Task added to list!', data: todo });
  });

};

// Create endpoint /api/todos for GET
exports.getTodos = function(req, res) {
  
  // Use the Todo model to find all todo
  Todo.find({ userId: req.user._id }, function(err, todos) {
    if (err)
      res.send(err);

    res.json(todos);
  });

};

// Create endpoint /api/todos/:todo_id for GET
exports.getTodo = function(req, res) {
  
  // Use the Todo model to find a specific todo
  Todo.find({ userId: req.user._id, _id: req.params.todo_id }, function(err, todo) {
    if (err)
      res.send(err);

    res.json(todo);
  });

};

// Create endpoint /api/todos/:todo_id for PUT
exports.putTodo = function(req, res) {
  
  // Use the Todo model to find a specific beer
  Todo.update({ userId: req.user._id, _id: req.params.todo_id }, { task: req.body.task }, function(err, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: '[Todo]' + num + ' updated' });
  });

};

// Create endpoint /api/todos/:todo_id for DELETE
exports.deleteTodo = function(req, res) {
  
  // Use the Todo model to find a specific beer and remove it
  Todo.remove({ userId: req.user._id, _id: req.params.todo_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Todo removed from the list!' });
  });

};