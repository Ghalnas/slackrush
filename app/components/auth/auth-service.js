app.service('authService', ['$http', function ($http) {
    var server = "http://172.24.1.113:3000/api/auth";
    return {
        register: function(user) {
            return $http.post(server+'/register', user);
        },
        login: function(email, password) {
            return $http.post(server+'/login', {email: email, password: password});
        }
    }
}]);