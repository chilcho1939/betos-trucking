myApp.controller('headerCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.navigateTo = function(page) {
        $state.go(page);
    }
}]);