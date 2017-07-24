var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {
        // seed database
        var starterTodos = [
            {
                username: 'Tomohiro_Sato',
                date: '2017-01-01',
                todos: [
                    "Sing in the morning",
                    "Push myself",
                    "Think Big",
                    "Avoid time-wasters",
                    "Take time to wander and play"
                ],
                achievement: [
                    { day: 1,
                      detail: [{level: 1, comment:'Perfecto!3'},{level: 2},{level: 2},{level: 1},{level: 3}]
                    },
                    { day: 2,
                      detail: [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}]
                    },
                    { day: 3,
                      detail: [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}]
                    },
                    { day: 4,
                      detail: [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}]
                    },
                    { day: 5,
                      detail: [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}]
                    },
                    { day: 6,
                      detail: [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}]
                    },
                    { day: 7,
                      detail: [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}]
                    },
                    { day: 8,
                      detail: [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}]
                    },
                    { day: 9,
                      detail: [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}]
                    },
                    { day: 10,
                      detail: [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}]
                    },
                    { day: 11,
                      detail: [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}]
                    },
                    { day: 12,
                      detail: [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}]
                    }
                ]
            },
            {
                username: 'Tomohiro_Sato',
                date: '2017-02-01',
                todos: [
                    "Sing in the morning",
                    "Push myself",
                    "Think Big",
                    "Avoid time-wasters",
                    "Take time to wander and play"
                ],
                achievement: [
                    [{level: 1, comment:'Perfecto!3'},{level: 2},{level: 2},{level: 1},{level: 3}],
                    [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}],
                    [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}],
                    [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}],
                    [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}],
                    [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}],
                    [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}],
                    [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}],
                    [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}],
                    [{level: 1, comment:'Perfect'},{level: 2},{level: 2},{level: 1},{level: 3}],
                    [{level: 1},{level: 3},{level: 4},{level: 1},{level: 2}],
                    [{level: 3},{level: 2},{level: 3},{level: 3},{level: 1}]
                ]
            }
        ];

        // Check and remove if any seed data laready exists
        Todos.find({ username: 'Tomohiro_Sato'}, function(err, tasks) {
            if (err) throw err;
        }).remove().exec();
        // Seed Todo data
        Todos.create(starterTodos, function(err, results) {
            if(err) throw err;
        });

        res.render('..//views/index', {'name': 'Tomohiro_Sato'});
    });

}