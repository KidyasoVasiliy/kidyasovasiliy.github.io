function scrollHeader() {

	let navigation = document.querySelectorAll('.header-nav-menu ul')[0],					// получаем панель навигации header
		headerButtonMouse = document.querySelector('.header-button-mouse'),					// получаем нашу mouse
		startPos = 0,																		// стартовая позиция (для mouse)
		move = null;																		// движение анимации
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

									

	navigation.addEventListener('click', function(event) { 									// при нажатии на навигацию
		event.preventDefault();																// отменим стандартный скрипт браузера #

		animate( function(timePassed) { 													// описываем саму ф-цию-анимацию(сайчас описываем сам параметр drow. Будет в качестве ф-ции(timePassed))
			let target 	= event.target;														// теперь надо получить элемент навигации на который мы кликнули. То есть на саму ссылку
			let section = document.getElementById(target.getAttribute('href').slice(1));	// куда таргет ссылается, надо получить все id у которых есть атрибут href, и выризаем #

			window.scrollBy(0, section.getBoundingClientRect().top / 20 + 3);				// описываем плавную прокрутку. Метод scrollBy, определяем куда будет перемещаться экран. 20(18) - размер header, 3- вниз +3px
		}, 1500); 																			
	});



	headerButtonMouse.onclick =  () =>{			// клик на mouse 
		event.preventDefault();					// снимает стандартное событие браузера
		requestAnimationFrame(myAnimated);		// запускаем анимацию
		startPos = 0;							// обнуляем стартовую позицию, чтобы не накапливалось
	};

	function myAnimated(){								// funс нашей анимации на mouse
		startPos += 0.5;								// накапливаем стартовую поцизию по 0.5
		window.scrollTo(0,window.scrollY+startPos); 	// прибавляем к нашей позиции startPos
		move = requestAnimationFrame(myAnimated);		// запускаем снова анимацию
		if(window.scrollY>900){							// работает до тех пор, пока мы не оказались на 900px вниз от начала документа
			cancelAnimationFrame(move);					// как только дошли до 900px останавливаем нашу анимацию
		}
	}
}
export default scrollHeader;