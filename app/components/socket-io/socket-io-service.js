app.factory('socketService', function (socketFactory) {
    var customSocket = io.connect('172.24.1.113:3000');
    return socketFactory({
        ioSocket: customSocket
    });
});