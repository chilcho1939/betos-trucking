myApp.controller('homeCtrl', ['$scope', '$translate', '$timeout', function($scope, $translate, $timeout) {

    $(function() {
        //Detener video con botón close
        $('.close').click(function() {
            $('.youtube-video').each(function() {
                var nuevo = $(".youtube-video")[0].src.replace('?autoplay=1', '');
                $(".youtube-video")[0].src = nuevo;
                $(this).attr('src', $(this).attr('src'));
                return false;
            });
        });
        if (!flag) {
            $('#languageModal').modal('show');
            localStorage.setItem('firstTimeModal', true);
        }
    });

    var flag = JSON.parse(localStorage.getItem('firstTimeModal'));
    var flagVideo = JSON.parse(localStorage.getItem('firstTimeModalVideo'));
    if (!flagVideo) {
        $('#videoModal').modal('show');
        localStorage.setItem('firstTimeModalVideo', true);
        $(".youtube-video")[0].src += "?autoplay=1";
    }

    var carouselContainer = $('#myCarousel').carousel();
    var slideInterval = 8000;

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
    /**
     * videoModal, languageModal
     */
    $scope.closeModal = function(origen) {
        $('#' + origen).modal('hide');
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

    // JavaScript
    window.sr = ScrollReveal();
}]);