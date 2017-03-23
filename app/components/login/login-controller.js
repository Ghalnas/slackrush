app.controller('loginController', function ($scope, loginService) {
    $scope.hasErrors = false;
    $scope.email = null;
    $scope.password = null;

    $scope.login = function () {
        if(!$scope.email || $scope.password) {
            $scope.hasErrors = true;
            return;
        }
        return loginService.authenticate($scope.email);
    }
});