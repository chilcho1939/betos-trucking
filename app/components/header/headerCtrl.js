myApp.controller('headerCtrl', ['$scope', '$state', '$translate', function($scope, $state, $translate) {
    $scope.realTime = moment().format('LLLL');
    //Cambiar idioma
    // $scope.changeIdioma = function() {
    //     $translate.use("en_US");
    // };
}]);