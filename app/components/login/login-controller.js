app.controller('loginController', ['$scope', '$localStorage', '$state', 'socketService', 'authService',
    function ($scope, $localStorage, $state, socketService, authService) {
    $scope.hasErrors = false;
    $scope.email = null;
    $scope.password = null;
    $scope.$storage = $localStorage.$default({
        user: null,
        token: null
    });

    $scope.login = function () {
        if(!$scope.email || !$scope.password) {
            $scope.hasErrors = true;
            return;
        }
        authService.login($scope.email, $scope.password)
            .then(
            function (response) {
                var user = response.data.user;
                var token = response.data.token;
                $scope.$storage.user = user.user;
                $scope.$storage.token = token;
                $state.go('home-state');
            },
            function(data, status) {
                console.error('Repos error', status, data);
            })
        ;
        socketService.emit("login", "lul");
    }
}]);