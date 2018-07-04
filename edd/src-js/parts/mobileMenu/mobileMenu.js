function mobileMenu(){

	//gamburger
	let mGamb = document.querySelector('.header-main__link'),
		mMainMenu = document.querySelector('.header-main-menu');
	let toolSelectionBtn = document.querySelector('.navigation__link'),
		navigationBar = document.querySelector('.navigation');

		mGamb.addEventListener('touchstart', function(event){
			event.preventDefault();
			gambBrn()
		});

		toolSelectionBtn.addEventListener('touchstart', function(event){
			event.preventDefault();
			mainBtn()
		});

	


		// tap out space
		function gambBrn(){
			mGamb.classList.contains('header-main__link_active') ? mGamb.classList.remove('header-main__link_active') : mGamb.classList.add('header-main__link_active')
			navigationBar.style.left = '-100vw'
			toggle(mMainMenu)
		}

		function mainBtn(){
			mGamb.classList.remove('header-main__link_active')
			mMainMenu.style.left = '-100vw'
			toggle(navigationBar);
			setTimeout(()=>{
  				toolSelectionBtn.style.left = (toolSelectionBtn.style.left == '0px') ? '50%' : '0px';
				toolSelectionBtn.style.marginLeft = (toolSelectionBtn.style.marginLeft == '0px') ? '-75px' : '0px';
				toolSelectionBtn.style.color = (toolSelectionBtn.style.color == 'rgb(250, 122, 149)') ? '' : 'rgb(250, 122, 149)';
			}, 100)
		}

		function toggle(el) {
			el.style.left = (el.style.left == '0vw') ? '-100vw' : '0vw'
		}
}
export default mobileMenu; 