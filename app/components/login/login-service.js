app.service('loginService', function ($http) {
    var server = "mon-ip";
    return {
        authenticate: function(login, password) {
            return $http.post(server+'/login/', {login: login, password: password});
        }
    }
});