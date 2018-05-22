myApp.controller('headerCtrl', ['$scope', '$state', '$translate', function($scope, $state, $translate) {
    $scope.realTime = moment().format('LLLL');
    $scope.changeLanguage = function(idioma) {
        if (idioma == 'es')
            $translate.use('es_MX');
        else
            $translate.use('en_US');
    }
}]);