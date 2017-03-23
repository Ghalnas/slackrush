app.controller('sideBarController', function ($scope, channelService) {
    var channels = [
        {name:"yareyaredaze", id:0  },
        {name:"1212142", id:1},
        {name:"azazz", id:2},
        {name:"maisouicestclair", id:3}
    ];
    $scope.channels = channels;
    $scope.chanName = null;

    $scope.createChannel = function () {
        if (!$scope.chanName) {
            return;
        }
        var name = $scope.chanName;
        $scope.chanName = null;
        console.log(name);
        var chan = {name:name, id:34};
        // var chan = channelService.insertOrUpdate({name:name});
        $scope.channels.push(chan)
    }
    // $scope.channels = channelService.getAll();
});