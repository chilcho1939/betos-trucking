myApp.controller('contactoCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.mail = {};
    var modal = document.getElementById('imageModal');

    var markerZamora, markerLaredo, markerUruapan, markerReynosa;
    var markerZamoraData = "<b>Zamora Michoacán,</b><br/> <b>Avenida Las Torres S/N,</b><br><b>Col. San Joaquín C.P.59610</b><br/><b> (351) 5207353</b>",
        markerLaredoData = "<b>Carretera UT 9101 Local 6.</b><br/><b>Col. Francisco Villa.</b><br/><b> C.P. 88248 Nuevo Laredo, Tamaulipas.</b>",
        markerUruapanData = "<b>Libramiento oriente número 10,</b><br/><b> Uruapan Michoacan</b>",
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
        markerZamora.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a href="resources/images/resource/author-thumb-2.jpg" class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/resource/author-thumb-2.jpg"></a></figure></div><div class="col-xs-12 text-center">' + markerZamoraData + '</div></div>').openPopup();
        markerLaredo.bindPopup(markerLaredoData).openPopup();
        markerUruapan.bindPopup(markerUruapanData).openPopup();
        markerReynosa.bindPopup(markerReynosaData).openPopup();
    }

    $scope.showImage = function() {
        alert('href="resources/images/resource/author-thumb-2.jpg"')
    }

    $scope.sendMail = function(isFormValid) {
        console.log($scope.contactoForm)
        if (isFormValid)
            alert('Correo enviado')
        else
            alert('Fromulario invalido');
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

    buildMap();
}]);