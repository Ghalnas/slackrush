app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    var homeState = {
        url: '/',
        name: 'home-state',
        templateUrl:'app/components/home/home-view.html'
    };
    var loginState = {
        url: '/login/',
        name: 'login-state',
        templateUrl: 'app/components/login/login-view.html',
        controllerAs: 'loginController as Login'
    };
    var channelState = {
        url: '/channel/:channelId',
        name: 'channel-state',
        templateUrl: 'app/components/channel/channel-view.html',
        controllerAs: 'channelController as Channel'
    };
    $stateProvider
        .state(homeState)
        .state(loginState)
        .state(channelState);
}]);