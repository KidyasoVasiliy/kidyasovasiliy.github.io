function getIntoTheAccount(){
	let headerGetInThAcBtn = document.querySelector('.header-login__button'),
		footerGetInThAcBtn = document.querySelector('.footer-login__button'),
		overlay = document.querySelector('.overlay'),
		closeBtnForm = document.querySelector('.popup-close'),
		popupForm = document.querySelector('.popup');

	headerGetInThAcBtn.addEventListener('click', ()=>{ // Открываем окно, если нажали "Войти"
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden'
		eventOutside()
	})	
	footerGetInThAcBtn.addEventListener('click', ()=>{ // Открываем окно, если нажали "Войти"
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden'
		eventOutside()
	})
	closeBtnForm.onclick = function(){ // Закрываем модальное окно, если клик на крестик
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}

	function eventOutside() {   //Закрываем модальное окно, если клик вне формы
		overlay.onclick = (e) => {
			console.log('Тык')
			if (e.path.length===5) {
				overlay.style.display = 'none';
				document.body.style.overflow = '';
				console.log('Опа, закрыли модалку)')
			}
		}	
	}

	//AJAX
	// ...body
}

export default getIntoTheAccount;