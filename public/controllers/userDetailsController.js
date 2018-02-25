angular
    .module('skills')
    .controller('userDetailsController', function(userService, $routeParams){
        vm=this;

        vm.users = [];
        var param1 = $routeParams.param1;
        vm.errorMessage = "";

        userService.GetUserByName(param1).then(function(response){
            angular.copy(vm.users,response.data);

        }, function(err){
            console.log(vm.errorMessage = "User loading failed.");
        });

    });