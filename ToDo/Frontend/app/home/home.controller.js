(function() {
    'use strict';
    angular
        .module('app')
        .controller('TodoController', TodoController);
    TodoController.$inject = ['todoFactory'];

    function TodoController(todoFactory) {
        var vm = this;
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;
        vm.getClass = getClass;
        vm.editTodo = editTodo;
        activate();

        ////////////////////

        function activate() {
            todoFactory
                .getAll()
                .then(function(response) {
                    vm.todos = response.data
                });
        }

        function addTodo() {
            todoFactory
                .create(vm.newTodo)
                .then(function(response) {
                    vm.todos.push(response.data);

                    vm.newTodo = {};
                })
                .catch(function(error) {});
        }

        function deleteTodo(todo) {
            todoFactory
                .remove(todo.todoItemId)
                .then(function(response) {
                    var index = vm.todos.indexOf(todo);

                    vm.todos.splice(index, 1);
                })
        }

        function editTodo(todo) {            
            todoFactory
                .update(todo.todoItemId, todo);

        }

        function getClass(todo) {
            switch (todo.priority) {
                case 1:
                    return 'list-group-item-danger';
                case 2:
                    return 'list-group-item-warning';
                case 3:
                    return 'list-group-item-success';
            }


        };
    }
})()
