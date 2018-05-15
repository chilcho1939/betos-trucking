myApp.run(["$rootScope", function($rootScope) {

    $rootScope.app = {
        name: 'Betos Trucking Page',
        author: 'Gildardo Ortiz Mercado - chilcho1939@gmail.com',
        description: 'Página promocional Betos Trucking',
        version: '1.0',
        year: new Date().getFullYear
    };
}]);