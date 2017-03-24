app.controller('conversationController', function ($scope, $stateParams, $localStorage, $state, conversationService) {
    var get = conversationService.getOne($stateParams.userId, $localStorage.token);
    get.then(
        function(data) {
            $state.go('channel-state', {channelId: data.conversationId});
        },
        function (data) {
            console.log(data.status);
            if (data.status == 404) {
                var promise = conversationService.insert({composedMessage: " ", target:$stateParams.target}, $localStorage.token, '/'+$stateParams.userId);
                    promise.then(
                        function(data) {
                            $state.go('channel-state', {channelId: data.conversationId});
                        },
                        function (data) {
                            console.log("error");
                        }
                    );
            } else {
                console.log("error");
            }
        }
    );
    // var promise = conversationService.insert({composedMessage: " "}, $localStorage.token, '/'+$stateParams.userId);
    // promise.then(
    //     function(data) {
    //         $state.go('channel-state', {channelId: data.conversationId});
    //     },
    //     function (data) {
    //         console.log("error");
    //     }
    // );
});