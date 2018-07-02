function yandexAPI(){
    ymaps.ready(init);

    function init(){ 
        var myMap = new ymaps.Map("mapYandex", {
            center: [59.900519, 30.516385],
            zoom: 12
        }); 
        
        var myPlacemark = new ymaps.Placemark([59.900519, 30.516385], {
            hintContent: 'Разработчик этого сайта находится здесь',
            balloonContent: 'деревня Кудрово, Заневское городское поселение, <br> Всеволожский район, Ленинградская область, Россия'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }
}
export default yandexAPI;