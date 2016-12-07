(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    /* @ngInject */
    function todoFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(todo) {
        	return $http.post('http://localhost:63537/api/TodoItems', todo);
        }
        function getAll(){
        	return $http.get('http://localhost:63537/api/TodoItems');
        }
        function getById(id){
        	return $http.get('http://localhost:63537/api/TodoItems/' + id);
        }
        function update(id, todo){
        	return $http.put('http://localhost:63537/api/TodoItems/' + id, todo);
        }
        function remove(id){
        	return $http.delete('http://localhost:63537/api/TodoItems/'+ id);
        }
    }
})();