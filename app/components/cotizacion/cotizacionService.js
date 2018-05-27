myApp.factory('cotizacionService', ['$http', 'Constants', function($http, Constants) {
    return {
        sendEmail: function(subject, message) {
            var request = {
                subject: subject,
                message: message
            };
            return $http.post(Constants.EMAIL_ENDPOINT, request).then((response) => {
                return response;
            })
        }
    }
}]);