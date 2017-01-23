var map;
ymaps.ready(function() {
    map = new ymaps.Map("map", {
            center: [52.525739, 39.472737],
            zoom: 16
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [52.525739, 39.472737] // координаты точки
            }
        });
    map.geoObjects.add(myGeoObject);
    map.behaviors.disable('scrollZoom');
});
