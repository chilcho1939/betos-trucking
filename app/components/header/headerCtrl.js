myApp.controller('headerCtrl', ['$scope', '$state', '$translate', function($scope, $state, $translate) {
    $scope.realTime = moment().format('LLLL');
    $scope.displaySize = $(window).width() <= 500;

    $('.nav a').on('click', function(){
        $('.navbar-toggle').click();
    });

    if ($(window).width() <= 500) {
        $('.logo_band').fadeIn();
        $('.betosTruckingHeader').hide();
    } else {
        $('.logo_band').fadeOut();
        $('.betosTruckingHeader').show();
    }

    $scope.changeLanguage = function(idioma) {
        if (idioma == 'es')
            $translate.use('es_MX');
        else
            $translate.use('en_US');
    }
    $(window).scroll(function() {
        if ($(window).width() >= 750) {
            if ($(this).scrollTop() > 0) {
                $('.betosTruckingHeader').hide();
            } else {
                $('.betosTruckingHeader').show();
            }
        }
    });
}]);