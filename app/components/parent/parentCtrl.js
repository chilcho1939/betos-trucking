myApp.controller('parentCtrl', ['$scope', '$route', '$rootScope','$transitions', function ($scope, $route, $rootScope, $transitions) {
    // $scope.$on('$stateChangeSuccess', function(newVal, oldVal) {
    //     $window.scollTo(0,0)
    // });
    // $rootScope.$on('$stateChangeStart', function() { $window.scollTo(0,0) }); 
    $transitions.onSuccess({}, function(trans) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);