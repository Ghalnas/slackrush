app.controller('channelController',
    function ($scope, $stateParams, $localStorage, socketService, conversationService) {
        $scope.chanId = $stateParams.channelId;
        $scope.msg = null;
        $scope.conversation = null;
        var messagesPromise = conversationService.getOne($stateParams.channelId, $localStorage.token);
        messagesPromise.then(
            function (data) {
                $scope.conversation = data;
            },
            function (data, code) {
                console.log(code, data);
            }
        );

        $scope.send = function () {
            if($scope.msg) {
                // $scope.conversation.messages.push({body: $scope.msg});
                conversationService.insert({composedMessage:$scope.msg},$localStorage.token, '/add/'+$stateParams.channelId);
                socketService.emit("new message", $stateParams.channelId);
                $scope.msg = null;
            }
        };

        socketService.on("refresh messages", function (ev, data) {
            var messagesPromise = conversationService.getOne($stateParams.channelId, $localStorage.token);
            messagesPromise.then(
                function (data) {
                    $scope.conversation = data;
                },
                function (data, code) {
                    console.log(code, data);
                }
            );
        })
    });