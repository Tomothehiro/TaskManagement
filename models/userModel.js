var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
    task: String,
    reportUser: String,
    respondUser: String,
    relateUser: String,
    progress: String,
    milestone: String,
    team: String,
    priority: String,
    type: String,
    deadline: Date,
    hasAttachment: Boolean
})

var Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;