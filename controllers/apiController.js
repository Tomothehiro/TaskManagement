var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    // parse out json and urlencoded data from HTML body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/tasks/:uname', function(req, res) {

        Todos.find({ username: req.params.uname}, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    // get single todo
    app.get('/api/todo/:id', function(req, res) {
        Todos.findById({ _id: req.params.id }, function(err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res) {

        // if id exists as POST param, update the task
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                achievement: req.body.achievement,
                comment: req.body.comment 
            }, function(err, todo) {
                if(err) throw err;
                res.send('Success');
            });
        } 
        // if id does not exist, create new Todo
        else {
            var newTodo = Todos({
                username: 'Tomohiro Sato',
                date: req.body.date,
                taskNumber: req.body.taskNumber,
                achievement: req.body.achievement,
                comment: req.body.comment
            });
            newTodo.save(function(err) {
                if(err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Sucessfully deleted');
        });
    });
}