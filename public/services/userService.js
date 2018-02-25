angular
    .module('skills')
    .service('userService', function($http){
        user = {};
        vm = this;

        vm.PostUser = function(data){
            return $http.post('api/newuser', data);
        }
        vm.GetAllUsers = function(user){
            return $http.get('api/getUsers');
        }
        vm.GetUserByName = function(name){
            return $http.get('/api/getUser/'+name);
        }
    });