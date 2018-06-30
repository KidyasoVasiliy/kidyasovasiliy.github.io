function windowWithTariff() {
		// подложка
	let overlayThankYou = document.querySelector('.js-overlay-thank-you'),
		//не отмеченные inputs
		popupRadio 		= document.querySelectorAll('.popup-radio input'),
		//кнопки с прайса
		basicBtn		= document.querySelector('.pricing-block__button_basic'),
		silverBtn		= document.querySelector('.pricing-block__button_silver'),
		goldBtn			= document.querySelector('.pricing-block__button_gold'),
		//кнопка закрыть
		closeBtnForm 	= document.querySelector('.js-overlay-thank-you .popup-close');



	basicBtn.onclick = () => {							// открываем форму с отмеченным input(соот. кнопке) 
		openForm();
		popupRadio[0].checked="checked";
	};

	silverBtn.onclick = () => {							// открываем форму с отмеченным input(соот. кнопке) 
		openForm();
		popupRadio[1].checked="checked";
	};

	goldBtn.onclick = () => {							// открываем форму с отмеченным input(соот. кнопке) 
		openForm();
		popupRadio[2].checked="checked";
	};

 	closeBtnForm.addEventListener('click', () => {		// закрываем форму, если клик на крестик
 		closeForm();
 	});




// ОТКРЫТЬ - ЗАКРЫТЬ
 	function openForm() { 							// func Открываем форму, если клик на кнопки с прайсом
		overlayThankYou.style.display = 'block';
		document.body.style.overflow = 'hidden';
		eventOutside();
		zeroAjax();
	}
	function closeForm() {							// func Закрываем форму, если клик на крестик
		overlayThankYou.style.display = 'none';
 		document.body.style.overflow = '';		
	}
	function eventOutside() {   					// func Закрываем форму, если клик вне формы
		overlayThankYou.onclick = (e) => {
			if (e.path.length===5) { closeForm(); }
		};
	}


	function zeroAjax(){
		console.log('обнуляем форму заказа');
		document.querySelector('.js-overlay-popup .popup-form').style.display = 'block';
	}
}
export default windowWithTariff;