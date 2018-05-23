myApp.controller('headerCtrl', ['$scope', '$state', '$translate', function ($scope, $state, $translate) {
    $scope.realTime = moment().format('LLLL');

    if($(window).width() <= 750){ 
        $('.logo_band').fadeIn();
    } else {
        $('.logo_band').fadeOut();
    }

    $scope.changeLanguage = function (idioma) {
        if (idioma == 'es')
            $translate.use('es_MX');
        else
            $translate.use('en_US');
    }
    $(window).scroll(function () {
        if($(window).width() >= 750){
            if ($(this).scrollTop() > 0) {
                $('.betosTruckingHeader').hide();
                $('.logo_band').fadeIn();
            } else {
                $('.betosTruckingHeader').show();
                $('.logo_band').fadeOut();
            }
        }
    });
}]);