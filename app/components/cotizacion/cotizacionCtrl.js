myApp.controller('cotizacionCtrl', ['$scope', function($scope) {
    $scope.estados = ['Michoacán', 'Guanajuato', 'Aguascalientes', 'Estado de México', 'Ciudad de México', 'Jalisco', 'Puebla', 'Nayarit', 'Sinaloa', 'Tamaulipas', 'Nuevo León', 'Sonora', 'Baja California']
    $scope.products = ['Aguacate', 'Arandano', 'Frambuesa', 'Fresa', 'Guacamole', 'Mango', 'Tomate', 'Zarzamora']
    $scope.cotizacionObject = {};

    $scope.calcularCotizacion = function() {}
}]);