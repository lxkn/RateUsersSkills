angular
    .module('skills')
    .controller('panelController', function(userService){
        vm = this;
        vm.users = [];

        userService.GetAllUsers().then(function(response){
                angular.copy(response.data, vm.users);
        },function(err){
            console.log("Failed " + err);
        });
        
    });
