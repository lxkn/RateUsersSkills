angular
    .module('skills')
    .controller('loginController', function(userService, $location){
        vm=this;

        vm.username;
        vm.password;
        vm.errorMessage = "";

        vm.login = function(){
            userService.GetAllUsers().then(function (response){
                for(var i=0;i<response.data.length;i++){
                    if(response.data[i].username === vm.username && response.data[i].password === vm.password){
                        $location.path("/panel/");
                    }
                }
            },function(err){ // Fail
                vm.errorMessage = "Failed to login. Please try again.";
            });
        }
        
    });