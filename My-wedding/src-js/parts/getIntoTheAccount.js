function getIntoTheAccount(){
	let gInThAcBtn = document.querySelector('.header-login__button'),
		overlay = document.querySelector('.overlay'),
		closeBtnForm = document.querySelector('.popup-close');
	gInThAcBtn.addEventListener('click', ()=>{
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden'
	})
	closeBtnForm.addEventListener('click', ()=>{
		overlay.style.display = 'none';
		document.body.style.overflow = ''
	})



	//AJAX
	// ...body
}

export default getIntoTheAccount;