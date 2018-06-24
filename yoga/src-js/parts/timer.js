function timer() {

	//Таймер
 	let deadline = '2018-06-25';  												// устанавливаем дату окончания (срок)

 	function getTimeRemaining(endtime) {										// ф-ция остаточного времени, и создания объекта с данными
 		let t 		= Date.parse(endtime) - Date.parse(new Date()) - 10800000,	// дедлайн
			seconds = Math.floor((t/1000) % 60), 								// секуд, осталось
			minutes = Math.floor((t/1000/60) % 60),								// минут, осталось
			hours 	= Math.floor((t/(1000*60*60)));								// час, осталось

		if (seconds<10) seconds = `0${seconds}`;								// добавляем 0 если время от 1-9						
		if (minutes<10) minutes = `0${minutes}`;								// добавляем 0 если время от 1-9
		if (hours<10) 	hours 	= `0${hours}`;  								// добавляем 0 если время от 1-9

		return {																// возвращаем объект с данными
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

 	}

 	function setClock(id, endtime) {

		let timer 	= document.getElementById(id),								// берем элемент со страницы 
			hours 	= timer.querySelector('.hours'),							// берем элементы со страницы 
			minutes = timer.querySelector('.minutes'),							// берем элементы со страницы 
			seconds = timer.querySelector('.seconds');							// берем элементы со страницы 
				
				function updateClock() {										// ф-ция запуска таймера
					let t = getTimeRemaining(endtime);							// время, когда закончится таймер

					hours.innerHTML 	= t.hours;								// выводим часы на страницу
					minutes.innerHTML 	= t.minutes;							// выводим часы на страницу
					seconds.innerHTML 	= t.seconds;							// выводим часы на страницу

					if (t.total <= 0) {											// условия, если остаточное время заканчивается
						clearInterval(timeInterval);							// чистим setInterval
						hours.textContent 	= '00';								// выводим на страницу '00'
						minutes.textContent = '00';								// выводим на страницу '00'
						seconds.textContent = '00';								// выводим на страницу '00'
					}
					
				}
				let timeInterval = setInterval(updateClock, 1000);				// создаем счетчик
				updateClock();													// запускаем ф-цию с счетчиком (таймера)
		}
	 	setClock('timer', deadline);											// запускаем ф-ция с эдементом статического таймера на странице, и сроком
}
export default timer;