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



        let buttonAdress = document.querySelector('.form-input .form-button__add'),
	        inputAdress = document.querySelector('.form-input .form-location-box__text');
	    buttonAdress.disabled = true;
        setTimeout(() => {
    		let adress = document.querySelector('.ymaps-2-1-65-searchbox-input__input'),
    			adressBtn = document.querySelector('.ymaps-2-1-65-searchbox-button-text');
    		buttonAdress.disabled = false;
    		console.log('Готово')

    		inputAdress.onkeyup = function(){
    			adress.value = this.value;
    		}
    		buttonAdress.onclick = function(event){
    			event.preventDefault();
    			adressBtn.click();
    		}
    	}, 3000) 
        

    }

}
export default yandexAPI;