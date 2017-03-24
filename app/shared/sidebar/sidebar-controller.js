app.controller('sideBarController',  ['$scope', '$localStorage', 'conversationService', 'userService',
    function ($scope, $localStorage, conversationService, userService) {
        $scope.channels = [];
        $scope.chanName = null;

        $scope.users = [];

        var promiseUsers = userService.getAll($localStorage.token);
        promiseUsers.then(
            function (data) {
                for (var user in data) {
                    var current = data[user];
                    if (current._id && current._id !== $localStorage.user._id) {
                        $scope.users.push(current);
                    }
                }
            },
            function () {
                console.log("error");
            });


        var promiseConversations = conversationService.getAll($localStorage.token);
        promiseConversations.then(
            function (data) {
                for (var chan in data) {
                    var current = data[chan];
                    $scope.channels.push(current);
                }
            },
            function (data) {
            }
        );
        $scope.createChannel = function () {
            if (!$scope.chanName) {
                return;
            }
            var name = $scope.chanName;
            $scope.chanName = null;
            var chan =  {name:name, id:34};
            // var chan = channelService.insertOrUpdate({name:name});
            $scope.channels.push(chan)
        }
        // $scope.channels = channelService.getAll();
    }]);