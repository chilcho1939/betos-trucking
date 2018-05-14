myApp.controller('aboutCtrl', ['$scope', function ($scope) {
    var markerZamora, markerLaredo;
    var markerZamoraData = "<b>Zamora Michoacán,</b><br/> <b>Avenida Las Torres S/N,</b><br><b>Col. San Joaquín C.P.59610</b><br/><b> Tel./Fax (351) 5207353</b>"
    var markerLaredoData = "<b>Carretera UT 9101 Local 6.</b><br/><b>Col. Francisco Villa.</b><br/><b> C.P. 88248 Nuevo Laredo, Tamaulipas.</b>";
    var locationsData = [];
    function buildMap(lat,lon)  {
        document.getElementById('mapaLeaft').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
                            ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        osmLayer = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
        var map = new L.Map('map');
        map.setView(new L.LatLng(20.0138764,-102.2806041), 5 );
        map.addLayer(osmLayer);
        //adding markers
        markerZamora = L.marker([20.0140671, -102.2843322]).addTo(map);
        markerLaredo = L.marker([27.4675544, -99.5711235]).addTo(map);
        //adding popup text
        markerZamora.bindPopup(markerZamoraData).openPopup();
        markerLaredo.bindPopup(markerLaredoData).openPopup();
    }

    buildMap();
}]);