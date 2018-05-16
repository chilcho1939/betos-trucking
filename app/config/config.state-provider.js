myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


    // jwtOptionsProvider.config({
    //     tokenGetter: ['options', function(options){
    //         return localStorage.getItem('token');
    //     }], whiteListedDomains: ['localhost']
    // });
    // jwtInterceptorProvider.tokenGetter = function(){
    //     return localStorage.getItem('token');
    // }

    //$httpProvider.interceptors.push('jwtInterceptor');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        controller: 'homeCtrl'
    }).state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'aboutCtrl'
    }).state('servicios', {
        url: '/servicios',
        templateUrl: 'app/components/servicios/servicios.html',
        controller: 'serviciosCtrl'
    }).state('infraestructura', {
        url: '/infraestructura',
        templateUrl: 'app/components/infraestructura/infraestructura.html',
        controller: 'infraestructuraCtrl'
    }).state('contacto', {
        url: '/contacto',
        templateUrl: 'app/components/contacto/contacto.html',
        controller: 'contactoCtrl'
    }).state('cotizacion', {
        url: '/cotizacion',
        templateUrl: 'app/components/cotizacion/cotizacion.html',
        controller: 'cotizacionCtrl'
    });
    /*
            .state('unauthorized',{
                url: '/unauthorized',
                templateUrl: 'app/components/unauthorized/unauthorizedView.html',
                rol : ['*']
            })
            .state('notFound',{
                url: '/404',
                templateUrl: 'app/components/notFound/404.html',
                authenticate: false,
                rol : ['*']
            })
            //default route*/
    $urlRouterProvider.otherwise('/');
}]);