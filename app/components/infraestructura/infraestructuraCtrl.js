myApp.controller('infraestructuraCtrl', ['$scope', function($scope) {
    $scope.abrirSitio = function(sitio) {
        window.open(sitio, '_blank');
    }
}]);