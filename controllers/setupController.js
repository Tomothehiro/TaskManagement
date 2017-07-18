var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {
        // seed database
        var starterTodos = [
            {
                username: 'Tomohiro Sato',
                date: 2017-1-1,
                taskNumber: 0,
                achievement: 4,
                comment: "Perfect"
            }
        ];

        // check if any data exists
        Todos.find({ username: 'Tomohiro Sato'}, function(err, tasks) {
            if (err) throw err;
            if (tasks == '') {
                Todos.create(starterTodos, function(err, results) {
                    res.send(results);
                });
            } else res.send('Database is already seeded');
        });
    });

}