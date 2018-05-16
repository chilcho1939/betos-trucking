myApp.controller('cotizacionCtrl', ['$scope', function($scope) {

    $scope.cotizacionObject = {};

    $scope.calcularCotizacion = function(isValid) {
        if(isValid) {
            alert("formulario valido")
            console.log($scope.cotizacionObject)
        } else {
            alert("formulario invalido")
            console.log($scope.cotizacionObject)
        }
    }
}]);