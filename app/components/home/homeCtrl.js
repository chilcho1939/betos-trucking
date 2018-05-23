myApp.controller('homeCtrl', ['$scope', '$translate', function($scope, $translate) {
    var flag = JSON.parse(localStorage.getItem('firstTimeModal'));
    if (!flag) {
        $('#languageModal').modal('show');
        localStorage.setItem('firstTimeModal', true);
    }

    var carouselContainer = $('#myCarousel').carousel();
    var slideInterval = 3000;

    var winWidth = $(window).innerWidth();
    $(window).resize(function() {

        if ($(window).innerWidth() < winWidth) {
            $('.carousel-inner>.item>img').css({
                'min-width': winWidth,
                'width': winWidth
            });
        } else {
            winWidth = $(window).innerWidth();
            $('.carousel-inner>.item>img').css({
                'min-width': '',
                'width': ''
            });
        }
    });

    function toggleH() {
        $('.toggleHeading').hide()
        var caption = carouselContainer.find('.active').find('.toggleHeading').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass('animated fadeInRight')
            });
        caption.slideToggle();
    }

    function toggleC() {
        $('.toggleCaption').hide()
        var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass('animated fadeInUp')
            });
        caption.slideToggle();
    }
    carouselContainer.carousel({
            interval: slideInterval,
            cycle: true,
            pause: "hover"
        })
        .on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
        .on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');

    $scope.closeModal = function() {
        $('#languageModal').modal('hide');
    }

    $scope.changeLanguage = function(idioma) {
        if (idioma == 'es') {
            $('#languageModal').modal('hide');
            return;
        } else {
            $translate.use('en_US');
            $('#languageModal').modal('hide');
        }
    }
}]);