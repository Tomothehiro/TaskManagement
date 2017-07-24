var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    date: String,
    todos: [String],
    achievement: [{
        day: Number,
        detail: [{
            level: Number,
            comment: String
    }]}]
})

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;