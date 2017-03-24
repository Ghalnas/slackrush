app.controller('registerController', function ($scope, authService) {
    $scope.hasErrors = false;
    $scope.email = null;
    $scope.firstName = null;
    $scope.lastName = null;
    $scope.password = null;

    $scope.register = function () {
        if(!$scope.email || !$scope.password || !$scope.firstName || !$scope.lastName) {
            $scope.hasErrors = true;
            return;
        }
        var user = {
            email: $scope.email,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };
        return authService.register(user);
    }
});