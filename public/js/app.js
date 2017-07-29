angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.todoList = todoList.todos;
    this.achievements = todoList.achievement;
    console.log(this.todoList);
}