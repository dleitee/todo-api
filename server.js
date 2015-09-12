// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var todoController = require('./controllers/todo');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

mongoose.connect('mongodb://localhost:27017/todolist');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(passport.initialize());

var router = express.Router();

router.route('/todos')
  .post(authController.isAuthenticated, todoController.postTodos)
  .get(authController.isAuthenticated, todoController.getTodos);

router.route('/todos/:todo_id')
  .get(authController.isAuthenticated, todoController.getTodo)
  .put(authController.isAuthenticated, todoController.putTodo)
  .delete(authController.isAuthenticated, todoController.deleteTodo);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

app.use('/api', router);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
