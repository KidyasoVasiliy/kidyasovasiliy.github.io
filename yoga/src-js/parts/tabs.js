function tabs() {
	
	//Табы
 	let infoTabs 	= document.getElementsByClassName('info-header')[0],	//header табов
		tab 		= document.getElementsByClassName('info-header-tab'),  	//сами табы
		tabContent 	= document.getElementsByClassName('info-tabcontent'); 	//tabContent с 1 таба

 			function hideTabContent(a) { 									//Ф-ция скрытия tabContent
 				for (let i = a; i < tabContent.length; i++) {				//цикл со всеми tabContent (1,2,3-скрыли) | (0-оставили)
 					tabContent[i].classList.remove('show');					//всем tabContent удаляем класс show(показать)
 					tabContent[i].classList.add('hide');					//всем tabContent присваиваем класс hide(скрыть)
 				}
 			}
 			hideTabContent(1);  												//показывать только первый tabContent на странице(при первой загрузке сайта)

 			function showTabContent(b) {									//Ф-ция показа tabContent
 				if (tabContent[b].classList.contains('hide')) { 			//проверяем на содержание класса .hide
 					hideTabContent(0);										//текущему табу(на который нажали)
	 				tabContent[b].classList.remove('hide');					//удаляем .hide(скрыть)
	 				tabContent[b].classList.add('add');						//присваиваем .add(показать)
	 			}
 			}

 			infoTabs.addEventListener('click', (event) => {					//при клике на header с табами
 				let target = event.target;									//вытягиваем тот таб, на который кликнули
 				if (target.className === 'info-header-tab') {				//проверяем, что это действительно таб который имеет этот класс
 					for (let i = 0; i < tab.length; i++) {					//создаем цикл, со всеми табами
						if (target === tab[i]) {							//если мы кликнули на один из наших табов
							showTabContent(i);								//показать его...ф-ция выше(покажет только 1 таб на странице)
							break;											//остановиться
						}
 					}
 				}
 			});
}
export default tabs;
