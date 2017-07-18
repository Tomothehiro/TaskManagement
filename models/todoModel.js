var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    date: Date,
    todoId: Number,
    achievement: Number,
    comment: String
})

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;