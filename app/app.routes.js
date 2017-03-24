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
    var registerState = {
        url: '/register/',
        name: 'register-state',
        templateUrl: 'app/components/register/register-view.html',
        controllerAs: 'registerController as Register'
    };
    var channelState = {
        url: '/channel/:channelId',
        name: 'channel-state',
        templateUrl: 'app/components/channel/channel-view.html',
        controllerAs: 'conversationController as Channel'
    };
    var toUserState = {
        url: '/conversation/:userId/:target',
        name: 'to-user-state',
        templateUrl: 'app/components/conversation/conversation-view.html',
        controllerAs: 'conversationController as ConversationToUser'
    };
    $stateProvider
        .state(homeState)
        .state(loginState)
        .state(registerState)
        .state(toUserState)
        .state(channelState);
}]);