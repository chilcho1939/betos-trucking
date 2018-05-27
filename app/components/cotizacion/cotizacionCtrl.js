myApp.controller('cotizacionCtrl', ['$scope', 'cotizacionService', '$log', function($scope, cotizacionService, $log) {
    var subject, message;
    $scope.estadosOrigen = [];
    $scope.estadosDestino = [];
    $scope.ciudadesOrigen = [];
    $scope.ciudadesDestino = [];

    $scope.cotizacionObject = {};
    $scope.estadosMexico = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];
    $scope.estadosUsa = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Carolina del Norte', 'Carolina del Sur', 'Colorado', 'Connecticut', 'Dakota del Norte', 'Dakota del Sur', 'Delaware', 'Florida', 'Georgia', 'Hawá', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Luisiana', 'Maine', 'Maryland', 'Massachusetts', 'Míchigan', 'Minnesota', 'Misisipi', 'Misuri', 'Montana', 'Nebraska', 'Nevada', 'Nueva Jersey', 'Nueva York', 'Nuevo Hampshire', 'Nuevo México', 'Ohio', 'Oklahoma', 'Oregón', 'Pensilvania', 'Rhode Island', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virginia Occidental', 'Washington', 'Wisconsin', 'Wyoming'];
    $scope.temperaturas = ['Fresca', 'Congelada', 'Seca'];
    $scope.tiposTransporte = ['Trailer', 'Thorton', 'Full'];

    $scope.cambiarEstados = function(source) {
        if (source == 'origen') {
            if ($scope.cotizacionObject.ruta.paisOrigen == 'México') {
                $scope.estadosOrigen = $scope.estadosMexico;
            } else {
                $scope.estadosOrigen = $scope.estadosUsa;
            }
        } else {
            if ($scope.cotizacionObject.ruta.paisDestino == 'México') {
                $scope.estadosDestino = $scope.estadosMexico;
            } else {
                $scope.estadosDestino = $scope.estadosUsa;
            }
        }
    }

    $scope.sendMail = function() {
        subject = "Prueba de correo (no contestar)"
        message = 'Solicitud de cotización';
        message += 'El ciudadano' + $scope.cotizacionObject.contacto.nombre + ' que labora en la empresa ' + $scope.cotizacionObject.contacto.empresa + ' ha solicitado una cotización con las siguientes características: ';
        message += 'Solicito un flete de ' + $scope.cotizacionObject.detalle.producto + ' con temperatura ' + $scope.cotizacionObject.detalle.temperatura + ' en ' + $scope.cotizacionObject.detalle.tipoTransporte + transfer() + ' , necesito ' + $scope.cotizacionObject.detalle.numeroViajes + ' viaje(s) ';
        message += 'cada ' + $scope.cotizacionObject.detalle.concurrencia + ', saliendo de la ciudad de ' + $scope.cotizacionObject.ruta.ciudadOrigen + ', ' + $scope.cotizacionObject.ruta.estadoOrigen + ', ' + $scope.cotizacionObject.ruta.paisOrigen + ' con Código Postal ' + $scope.cotizacionObject.ruta.cp + ',';
        message += 'y teniendo como destino la ciudad de ' + $scope.cotizacionObject.ruta.ciudadDestino + ', ' + $scope.cotizacionObject.ruta.estadoDestino + ', ' + $scope.cotizacionObject.ruta.paisDestino + ' con Código Postal ' + $scope.cotizacionObject.ruta.cpDest + '. Me puede localizar en el correo electrónico de ';
        message += $scope.cotizacionObject.contacto.correo + ' o bien en el teléfono ' + $scope.cotizacionObject.contacto.telefono + '.';
        message += 'El cliente adicionalmente agrega las siguientes notas: ' + $scope.cotizacionObject.contacto.mensaje;
        cotizacionService.sendEmail(subject, message).then((response) => {
            if (response.message == 'success') {
                $.notify('El correo se envío correctamente, en breve se pondrán en contacto con usted', {
                    type: 'success',
                    delay: 5000
                });
            } else {
                $.notify('El correo no se envío, favor de ponerse en contacto a (351) 5207353 y reportarlo', {
                    type: 'danger',
                    delay: 10000
                });
                $log.error("Error del servidor: " + response.obj);
            }
        }, (errorResponse) => {
            $log.erorr("Error al enviar el correo electrónico " + errorResponse)
        });
    }

    function transfer() {
        if ($scope.cotizacionObject.detalle.transfer == 'Si' || $scope.cotizacionObject.detalle.transfer == 'yes') return ' con cruce internacional';
        else return ' sin cruce internacional';
    }
}]);