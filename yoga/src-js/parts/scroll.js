function scroll() {

	//Плавная прокрутка
	function animate(draw, duration) { 														// ф-ция animate draw-что рисовать duranion - сколько времени это будет занимать(аргументы дефолту)
		let start = performance.now();														// получить текущее время в мс с помощью performance.now()-сколько времени прошло с начала прогрузки страницы(точнее с того момента, когда с памяти удалилась предыдущая страница и начала отрисовываться текущая)
		requestAnimationFrame( function animate(time) { 									// передаем браузеру нашу анимацию requestAnimationFrame, и в качестве callback мы будем возвращать ф-цию animate(аргумент time-сколько времени идет наша анимация)
			let timePassed = time - start; 													// time-встроенная ф-ция в reqAniFr, которая отвечает за время, которое прошло после события, в нашем случае click на header 

			if (timePassed > duration) timePassed = duration; 								// если прошедшее время > длительности анимации; // прерываем нашу анимацию

			draw(timePassed); 																// метод для нарисования анимации
				if (timePassed < duration) requestAnimationFrame(animate);  				// если прошедшее время < длительности (или анимация еще не закончилась) // вызываем reqAnFr
		});
	}

	let navigation = document.getElementsByTagName('nav')[0]; 								// получаем панель навигации

	navigation.addEventListener('click', function(event) { 									// при нажатии на навигацию
		event.preventDefault();																// отменим стандартный скрипт браузера #

		animate( function(timePassed) { 													// описываем саму ф-цию-анимацию(сайчас описываем сам параметр drow. Будет в качестве ф-ции(timePassed))
			let target 	= event.target;														// теперь надо получить элемент навигации на который мы кликнули. То есть на саму ссылку
			let section = document.getElementById(target.getAttribute('href').slice(1));	// куда таргет ссылается, надо получить все id у которых есть атрибут href, и выризаем #

			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);				// описываем плавную прокрутку. Метод scrollBy, определяем куда будет перемещаться экран. 20 - размер header, 3- на вверх -3px
		}, 1500); 																			
	});
}
export default scroll;