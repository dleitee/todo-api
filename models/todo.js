var mongoose = require('mongoose');

var TodoSchema   = new mongoose.Schema({
  task: String,
  userId: String
});

module.exports = mongoose.model('Todo', TodoSchema);
