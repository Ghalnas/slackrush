app.service('authService', ['$http', function ($http) {
    var server = "http://127.0.0.1:3000/api/auth";
    return {
        register: function(user) {
            return $http.post(server+'/register', user);
        },
        login: function(email, password) {
            return $http.post(server+'/login', {email: email, password: password});
        }
    }
}]);
