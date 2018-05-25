myApp.controller('cotizacionCtrl', ['$scope', function ($scope) {
    var subject, message;
    $scope.estadosOrigen = [];
    $scope.estadosDestino = [];
    $scope.ciudadesOrigen = [];
    $scope.ciudadesDestino = [];
    $scope.showOtro = false;

    $scope.cotizacionObject = {};
    $scope.estadosMexico = ['Michoacán', 'Guanajuato', 'Aguascalientes', 'Estado de México', 'Ciudad de México', 'Jalisco', 'Puebla', 'Nayarit', 'Sinaloa', 'Tamaulipas', 'Nuevo León', 'Sonora', 'Baja California'];
    $scope.ciudadesUsa = ['Nogales-Arizona', 'McAllen-Texas', 'Laredo-texas', 'San Diego California'];
    $scope.estadosUsa = ['Alabama','Alaska','Arizona','Arkansas','California','Carolina del Norte', 'Carolina del Sur','Colorado','Connecticut','Dakota del Norte','Dakota del Sur','Delaware','Florida','Georgia','Hawá','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Luisiana','Maine','Maryland','Massachusetts','Míchigan','Minnesota','Misisipi','Misuri','Montana','Nebraska','Nevada','Nueva Jersey','Nueva York' ,'Nuevo Hampshire',  'Nuevo México','Ohio','Oklahoma','Oregón','Pensilvania','Rhode Island','Tennessee','Texas','Utah','Vermont','Virginia','Virginia Occidental','Washington','Wisconsin','Wyoming'];
    $scope.products = ['Otro producto', 'Aguacate', 'Arandano', 'Frambuesa', 'Fresa', 'Guacamole', 'Mango', 'Tomate', 'Zarzamora'];

    $scope.cambiarEstados = function(source) {
        if(source == 'origen') {
            if($scope.cotizacionObject.ruta.paisOrigen == 'México') {
                $scope.estadosOrigen = $scope.estadosMexico;
            } else {
                $scope.estadosOrigen = $scope.estadosUsa;
            }
        } else {
            if($scope.cotizacionObject.ruta.paisDestino == 'México') {
                $scope.estadosDestino = $scope.estadosMexico;
            } else {
                $scope.estadosDestino = $scope.estadosUsa;
            }
        }
    }

    $scope.sendMail = function () {
        subject = "Nueva solicitud de cotización"
        message = '<html><head><meta charset="utf-8"></head><body>'
        message += '<h1>Solicitud de cotización</h1>';
        message += '<p style="font-size:18px;">El ciudadano <strong>' + $scope.cotizacionObject.contacto.nombre + '</strong> que labora en la empresa <strong>' + $scope.cotizacionObject.contacto.empresa + '</strong> ha solicitado una cotización con las siguientes características: </p>';
        message += '<p style="font-size:18px;">Solicito un flete de <strong>' + verificarProducto() + '</strong> en <strong>' + $scope.cotizacionObject.detalle.tipoTransporte + transfer() + '</strong> , necesito <strong>' + $scope.cotizacionObject.detalle.numeroViajes + '</strong> viaje(s) ';
        message += 'cada <strong>' + $scope.cotizacionObject.detalle.concurrencia + '</strong>, saliendo de la ciudad de <strong>' + $scope.cotizacionObject.ruta.ciudadOrigen +'</strong>, <strong>' + $scope.cotizacionObject.ruta.estadoOrigen + '</strong>, <strong>' + $scope.cotizacionObject.ruta.paisOrigen + '</strong> con Código Postal <strong>' + $scope.cotizacionObject.ruta.cp + '</strong>, </p>';
        message += '<p style="font-size:18px;">y teniendo como destino la ciudad de <strong>' + $scope.cotizacionObject.ruta.ciudadDestino + '</strong>, <strong>' + $scope.cotizacionObject.ruta.estadoDestino + '</strong>, <strong>' + $scope.cotizacionObject.ruta.paisDestino + '</strong> con Código Postal <strong>' + $scope.cotizacionObject.ruta.cpDest + '</strong>. Me puede localizar en el correo electrónico de ';
        message += '<strong>' +$scope.cotizacionObject.contacto.correo + '</strong> o bien en el teléfono <strong>' + $scope.cotizacionObject.contacto.telefono + '</strong>.</p>';
        message += '<p style="font-size:18px;">El cliente adicionalmente agrega las siguientes notas: <br/><strong>' + $scope.cotizacionObject.contacto.mensaje + '</strong></p>';
        message += '</body></html>';
        console.log(message); 
    }

    $scope.checkProduct = function(){
        if($scope.cotizacionObject.detalle.producto == 'Otro producto') $scope.showOtro = true; 
        else $scope.showOtro = false;
    }

    function transfer() {
        if ($scope.cotizacionObject.detalle.transfer == 'Si' || $scope.cotizacionObject.detalle.transfer == 'yes') return ' con cruce internacional';
        else return 'sin cruce internacional';
    }

    function verificarProducto() {
        if($scope.cotizacionObject.detalle.producto == 'Otro producto') {
            return $scope.cotizacionObject.detalle.otroProducto != '' ? $scope.cotizacionObject.detalle.otroProducto : $scope.cotizacionObject.detalle.producto;
        }
    }
}]);