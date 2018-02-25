angular
    .module('skills')
    .controller('registerController', function(userService){
        vm = this;
        vm.newUser = {};
        vm.username;
        vm.password;
        vm.email;
        vm.confirmPassword;
        vm.confirmEmail;
        vm.successMessage = "";
        vm.errorMessage = "";

        vm.register = function(){
            vm.newUser.username = vm.username;
            vm.newUser.password = vm.password;
            vm.newUser.email = vm.email;

            if(vm.password === vm.confirmPassword && vm.email === vm.confirmEmail){
                userService.PostUser(vm.newUser).then(function(response){
                    vm.errorMessage = "";
                    vm.successMessage = "User has been created!";
                },function(err){
                    vm.errorMessage = "Something went wrong! Please try again.";
                });
            }
            if(vm.password !== vm.confirmPassword){
                vm.errorMessage = "Password is not equals to confirm password.";
            }
            else{
                vm.errorMessage = "Email is not equals to confirm email.";
            }
        }
    });