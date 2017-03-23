app.directive("slackSidebar", function () {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/sidebar/sidebar-view.html',
        controller: 'sideBarController'
    }
});