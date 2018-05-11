myApp.config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('es_MX');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useStaticFilesLoader({
        files: [{
            prefix: 'app/i18n/',
            suffix: '.json'
        }]
    });
}]);