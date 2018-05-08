myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider) {


    // jwtOptionsProvider.config({
    //     tokenGetter: ['options', function(options){
    //         return localStorage.getItem('token');
    //     }], whiteListedDomains: ['localhost']
    // });
    // jwtInterceptorProvider.tokenGetter = function(){
    //     return localStorage.getItem('token');
    // }

    //$httpProvider.interceptors.push('jwtInterceptor');

    $stateProvider.state('login', {
            url: '/',
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl'
        }).state('about', {
            url: '/about',
            templateUrl: '/app/components/about/about.html'
        })
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