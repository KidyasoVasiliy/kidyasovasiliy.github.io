function backgroundSelection(){



	let bodySiteBuilder = document.querySelectorAll('body'),
		minimized = document.querySelectorAll('.minimized'),
		newEl;

		newEl = document.createElement('div');
		newEl.style.cssText = `margin: 0 auto;
								position: relative;`
	for(let i = 0; i < minimized.length; i++){
		minimized[i].onclick = function(event){
			let target 	= event.target,
				i_path = target.getAttribute('src');

			newEl.innerHTML = ('<div id="overlay" class="overlay-select"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
			bodySiteBuilder[0].insertBefore(newEl,bodySiteBuilder[0].children[0]);

			let magnify = document.querySelectorAll('#magnify'),
				overlay = document.querySelectorAll('#overlay'),
				closePopup = document.querySelector('#magnify #close-popup i');
				
			bodySiteBuilder[0].style.overflow = 'hidden';
			magnify[0].style.display = 'block';
			overlay[0].style.display = 'block';
			
			function closePopupFunc(){
					bodySiteBuilder[0].style.overflow = '';
					magnify[0].style.display = 'none';
					overlay[0].style.display = 'none';
			}

			closePopup.onclick = () => {
				closePopupFunc();
			}
			
			document.body.addEventListener('click', function(event) {

				if (event.target.classList.contains('overlay-select')){
					closePopupFunc();
				}
			});

		}
	}
	// проверка оверлея
	// document.body.addEventListener('click', function(e) {
	// 	console.log(e)
	// });



	

}
export default backgroundSelection;


// insertBefore
// bodySiteBuilder[0].appendChild('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
// minimizedBtn = document.getElementsByClassName('main-block__button');  //Кнопки


