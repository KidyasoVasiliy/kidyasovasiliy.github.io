function modalWindow() {

	//Модальное окно
	let decrBtn 	= document.querySelectorAll('.description-btn'), // получаем элементы со страницы (кнопки с табов)
		moreBtn 	= document.querySelector('.more'),				 // получаем элементы со страницы (главная кнопка)
		overlay 	= document.querySelector('.overlay'),			 // получаем элементы со страницы (затемнение с модальным окном)
		closeBtn 	= document.querySelector('.popup-close');		 // получаем элементы со страницы (кнопка закрыть)
		
		for(let i = 0; i < 4; i++) {								 // цикл, для 4 кнопок с табов
			decrBtn[i].addEventListener('click', function() {		 // при клике на кнопку с табов
			this.classList.add('more-splash');						 // добавляем класс плавной анимации
				modalWindowOpen ();									 // запускаем функцию (показать модальное окно)
			});
		}

			moreBtn.addEventListener('click', function() { 			 // при клике на главную кнопку
				this.classList.add('more-splash');					 // добавляем класс плавной анимации
				modalWindowOpen ();									 // запускаем функцию (показать модальное окно)
			});
			closeBtn.addEventListener('click', function() {			 // при клике на кнопку 'закрыть'
				this.classList.remove('more-splash');				 // добавляем класс плавной анимации
				modalWindowClose();									 // запускаем функцию (показать модальное окно)
			});

					// ф-ции открыть/закрыть модальное окно
					function modalWindowOpen () {					 // ф-ция показа модального окна
						overlay.style.display = 'block';			 // стиля display: block для overlay
						document.body.style.overflow = 'hidden';	 // прячем скролл
					}
					function modalWindowClose() {					 // ф-ция закрытия модального окна
						overlay.style.display = 'none';				 // стиля display: none для overlay
						document.body.style.overflow = '';			 // показываем скролл
					}
}
export default modalWindow;