myApp.controller('aboutCtrl', ['$scope', '$timeout', '$rootScope', function($scope, $timeout, $rootScope) {
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
        markerLaredo.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-laredo.png"></a></figure></div><div class="col-xs-12 text-center">' + markerLaredoData + '</div></div>');
        markerUruapan.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-uruapan.png"></a></figure></div><div class="col-xs-12 text-center">' + markerUruapanData + '</div></div>');
        markerReynosa.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-reynosa.png"></a></figure></div><div class="col-xs-12 text-center">' + markerReynosaData + '</div></div>');
        markerZamora.bindPopup('<div class="row"><div class="col-xs-12 text-center widget recent-gallery"><figure class="image"><a class="lightbox-image"><IMG BORDER="0" ALIGN="center" src="resources/images/images-betos/map-zamora.png"></a></figure></div><div class="col-xs-12 text-center">' + markerZamoraData + '</div></div>');
    }

    buildMap();
}]);