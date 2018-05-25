myApp.controller('parentCtrl', ['$scope', '$route', '$rootScope','$transitions', function ($scope, $route, $rootScope, $transitions) {
    $transitions.onSuccess({}, function(trans) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);