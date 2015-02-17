// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var todoController = require('./controllers/todo');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

// Connect to the todolist MongoDB
mongoose.connect('mongodb://localhost:27017/todolist');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /todos
router.route('/todos')
  .post(authController.isAuthenticated, todoController.postTodos)
  .get(authController.isAuthenticated, todoController.getTodos);

// Create endpoint handlers for /todos/:todo_id
router.route('/todos/:todo_id')
  .get(authController.isAuthenticated, todoController.getTodo)
  .put(authController.isAuthenticated, todoController.putTodo)
  .delete(authController.isAuthenticated, todoController.deleteTodo);

  // Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);


// Register all our routes with /api
app.use('/api', router);

//Set port
app.set('port', (process.env.PORT || 5000));

//Start server
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});