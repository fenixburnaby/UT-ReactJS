var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  todo: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
