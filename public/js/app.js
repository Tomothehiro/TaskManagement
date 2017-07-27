angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello Angular';

    this.people = [
        {
            name: 'Tomohiro'
        },
        {
            name: 'Tamori'
        },
        {
            name: 'Tawashi'
        }
    ];

    this.todos = todos;
}