myApp.controller('parentCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.$on('$stateChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
            // $scope.routeClassName = $route.current.className;
        }
    })
}]);