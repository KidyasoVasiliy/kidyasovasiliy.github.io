function getIntoTheAccount() {
		// подложка
	const overlay 			= document.querySelector('.overlay'),
		//кнопки "Войти"
		headerGetInThAcBtn 	= document.querySelector('.header-login__button'),
		footerGetInThAcBtn 	= document.querySelector('.footer-login__button'),
		//кнопка закрыть
		closeBtnForm 		= document.querySelector('.popup-close');


	headerGetInThAcBtn.addEventListener('click', function() { 	// открываем форму, если клик в header-"Войти"
		openForm();
	});
	footerGetInThAcBtn.addEventListener('click', function() { 	// открываем форму, если клик в footer-"Войти"
		openForm();
	});
	closeBtnForm.addEventListener('click', function() { 			// закрываем форму, если клик на крестик
		closeForm();
	});

	

	function openForm() { 		// func Открываем форму, если клик на кнопку "Войти"
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		eventOutside();
	}
	function closeForm() {		// func Закрываем форму, если клик на крестик
		overlay.style.display = 'none';
		document.body.style.overflow = '';	
	}
	function eventOutside() {   // func Закрываем форму, если клик вне формы
		document.body.addEventListener('click', function(e) {
			if (e.target.classList.contains('overlay')){
				closeForm();
			}
		});
	}

	// проверка оверлея
	// document.body.addEventListener('click', function(e) {
	// 	console.log(e)
	// 	console.log(e.target)
	// });




}

export default getIntoTheAccount;





		// loading = document.querySelector('.loading-modal'),
		// thank = document.querySelector('.thank-modal'),
		// failure = document.querySelector('.failure-modal');

// zeroAjax();
// zeroAjax();




	// function zeroAjax(){
	// 	console.log('обнуляем форму входа/регистрации');
	// 	document.querySelector('.popup-form').style.backgroundColor = "#fff"
	// 	document.querySelector('.popup .popup-form_form').style.display = 'block';
	// 	loading.style.display = 'none';
	// 	thank.style.display = 'none';
	// 	failure.style.display = 'none';
	// }