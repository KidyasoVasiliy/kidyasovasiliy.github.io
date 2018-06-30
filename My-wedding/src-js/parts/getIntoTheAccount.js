function getIntoTheAccount(){
	let headerGetInThAcBtn = document.querySelector('.header-login__button'),
		footerGetInThAcBtn = document.querySelector('.footer-login__button'),
		overlay = document.querySelector('.overlay'),
		closeBtnForm = document.querySelector('.popup-close');

	headerGetInThAcBtn.addEventListener('click', ()=>{
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden'
	})	
	footerGetInThAcBtn.addEventListener('click', ()=>{
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden'
	})
	closeBtnForm.onclick = function(){
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}

	//AJAX
	// ...body
}

export default getIntoTheAccount;