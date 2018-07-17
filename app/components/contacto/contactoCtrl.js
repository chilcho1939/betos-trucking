myApp.controller('contactoCtrl', ['$scope', 'cotizacionService', '$log', function($scope, cotizacionService, $log) {
    $scope.mail = {};
    var subject, message;
    var markerZamora, markerLaredo, markerUruapan, markerReynosa;
    var markerZamoraData = "<b>Zamora Michoacán,</b><br/> <b>Avenida Las Torres S/N,</b><br><b>Col. San Joaquín C.P.59610</b><br/><b> (351) 5207353</b>",
        markerLaredoData = "<b>Carretera UT 9101 Local 6.</b><br/><b>Col. Francisco Villa.</b><br/><b> C.P. 88248 Nuevo Laredo, Tamaulipas.</b>",
        markerUruapanData = "<b>Libramiento Uruapan-Lázaro Cárdenas</b><br/><b> Tel: 867 202 4878</b>",
        markerReynosaData = "<b>CARR REY PHARR 400 L 28</b><br/><b>BLVD COLOSIO PARQUE IND</b><br><b> PUENTE PHARR REYNOSA,</b><br/><b> TAMPS C.P. 88788</b>";

    function buildMap(lat, lon) {
        document.getElementById('mapaLeaft').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
            ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });
        var map = new L.Map('map');
        map.setView(new L.LatLng(20.0138764, -102.2806041), 5);
        map.addLayer(osmLayer);
        //adding markers
        markerZamora = L.marker([20.0140671, -102.2843322]).addTo(map);
        markerLaredo = L.marker([27.466960, -99.570759]).addTo(map);
        markerUruapan = L.marker([19.395188, -102.034978]).addTo(map);
        markerReynosa = L.marker([26.0370335, -98.2096113]).addTo(map);
        //adding popup text
        markerLaredo.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-laredo.png"></a></figure></div><div class="col-xs-12 text-center">' + markerLaredoData + '</div></div>').openPopup();
        markerUruapan.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-uruapan.png"></a></figure></div><div class="col-xs-12 text-center">' + markerUruapanData + '</div></div>').openPopup();
        markerReynosa.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-reynosa.png"></a></figure></div><div class="col-xs-12 text-center">' + markerReynosaData + '</div></div>').openPopup();
        markerZamora.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-zamora.png"></a></figure></div><div class="col-xs-12 text-center">' + markerZamoraData + '</div></div>').openPopup();
    }

    $scope.sendMail = function() {
        subject = $scope.mail.asunto;
        message = '<html><head><meta charset="utf-8"></head><body>';
        message += '<h1>Correo nuevo para Betos Trucking de ' + $scope.mail.nombre + ' </h1>';
        message += '<p style="font-size:18px;">Soy <strong>' + $scope.mail.nombre + '</strong> laboro para la empresa <strong>' + $scope.mail.empresa + '</strong> y me pongo en contacto con ustedes por este medio ';
        message += ', me gustaria que se comunicaran conmigo por el correo electrónico <strong>' + $scope.mail.correo + '</strong> o bien en el número <strong>' + $scope.mail.telefono + '</strong>.  </p>';
        message += '<p>Adicionalmente agrego los siguientes comentarios: <br>';
        message += $scope.mail.mensaje + '</p></body></html>';
        cotizacionService.sendEmail(subject, message).then((response) => {
            if (response.data.message == 'success') {
                $.notify('El correo se envío correctamente, en breve se pondrán en contacto con usted', {
                    type: 'success',
                    delay: 5000
                });
                cleanForm();
            } else {
                $.notify('El correo no se envío, favor de ponerse en contacto a (351) 5207353 y reportarlo', {
                    type: 'danger',
                    delay: 10000
                });
                $log.error("Error del servidor: " + response.data.obj);
            }
        }, (errorResponse) => {
            $.notify('Ocurrió un error inesperado, favor de comunicarlo con el administrador', {
                type: 'danger',
                delay: 10000
            });
            $log.error("Error en la respuesta del servicio: " + errorResponse);
        })
    }

    $scope.validateNumber = function() {
        if (!hasNumber($scope.mail.telefono)) {
            $scope.contactoForm.telefono.$error.invalidFormat = true;
            $scope.invalidFormat = "Formato inválido"
        } else {
            $scope.contactoForm.telefono.$error.invalidFormat = false;
            $scope.invalidFormat = ""
        }
    }

    function hasNumber(cadena) {
        return /\d/.test(cadena);
    }

    function cleanForm() {
        $scope.contactoForm.username.$touched = false;
        $scope.contactoForm.email.$touched = false;
        $scope.contactoForm.subject.$touched = false;
        $scope.contactoForm.empresa.$touched = false;
        $scope.contactoForm.telefono.$touched = false;
        
        $scope.mail.nombre = '';
        $scope.mail.correo = '';
        $scope.mail.asunto = '';
        $scope.mail.empresa = '';
        $scope.mail.telefono = '';
        $scope.mail.mensaje = '';
    }

    buildMap();
}]);