app.factory('socketService', function (socketFactory) {
    var customSocket = io.connect('127.0.0.1:3000');
    return socketFactory({
        ioSocket: customSocket
    });
});
