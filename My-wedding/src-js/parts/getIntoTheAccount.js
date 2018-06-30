function getIntoTheAccount() {
		// подложка
	let overlay 			= document.querySelector('.overlay'),
		//кнопки "Войти"
		headerGetInThAcBtn 	= document.querySelector('.header-login__button'),
		footerGetInThAcBtn 	= document.querySelector('.footer-login__button'),
		//кнопка закрыть
		closeBtnForm 		= document.querySelector('.popup-close');

	headerGetInThAcBtn.onclick = ()=> { 	// открываем форму, если клик в header-"Войти"
		openForm();
	};
	footerGetInThAcBtn.onclick = ()=> { 	// открываем форму, если клик в footer-"Войти"
		openForm();
	};
	closeBtnForm.onclick = () => { 			// закрываем форму, если клик на крестик
		closeForm();
	};

	

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
		overlay.onclick = (e) => {
			if (e.path.length===5) {closeForm();}
		};
	}
	//AJAX
	// ...body
}

export default getIntoTheAccount;