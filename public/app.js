angular.module("skills", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            controller: "loginController",
            controllerAs: "vm",
            templateUrl: "/views/loginView.html"
        });
        $routeProvider.when("/login",{
            controller: "loginController",
            controllerAs: "vm",
            templateUrl: "/views/loginView.html"
        });
        $routeProvider.when("/panel",{
            controller: "panelController",
            controllerAs: "vm",
            templateUrl: "/views/panelView.html"
        });
        $routeProvider.when("/usersList",{
            controller: "panelController",
            controllerAs: "vm",
            templateUrl: "/views/usersListView.html"
        });
        $routeProvider.when("/user/:param1",{
            controller: "userDetailsController",
            controllerAs: "vm",
            templateUrl: "/views/usersListView.html"
        });
        $routeProvider.when("/register",{
            controller: "registerController",
            controllerAs: "vm",
            templateUrl: "/views/registerView.html"
        })

        $routeProvider.otherwise({ redirectTo: "/" });
    });