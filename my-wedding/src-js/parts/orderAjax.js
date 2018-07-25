function orderAjax() {


	let form	= document.querySelector('.js-overlay-popup .popup-form form'),
		inputs 	= document.querySelectorAll('.popup-form-box input'),//[4,5];
		popupFormForm = document.querySelector('.js-overlay-popup .popup-form'),

		jsOverlayOrder = document.querySelector('.js-overlay-order'),
		thankOrderModal = jsOverlayOrder.querySelector('div .popup-form-header');

		

		form.addEventListener('submit', function(event){
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			let formData = new FormData(form);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					popupFormForm.style.display = 'none';
					jsOverlayOrder.style.display = 'block';
					thankOrderModal.textContent = `Мы думаем...`;
				} else if (request.readyState === 4) {
					if (request.status === 200 && request.status <300) {
							setTimeout(()=>{
								popupFormForm.style.display = 'none';
								jsOverlayOrder.style.display = 'block';
								thankOrderModal.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течении 5 минут.';
							}, 1000)
							console.log('Успех')
					} else {
							setTimeout(()=>{
								popupFormForm.style.display = 'none';
								jsOverlayOrder.style.display = 'block';
								thankOrderModal.textContent = `Ошибка! Простите, что-то пошло не так...`;
							}, 1000)
							console.log('Ошибка')
						}
					}
			};

			for(let i = 3; i <= 4; i++){				//Чистим поля ввода
				inputs[i].value = '';
			}
		}); 


		let thankOrderModalClose = document.querySelectorAll('.js-order div')[0]; 	
		thankOrderModalClose.onclick = function(){
			jsOverlayOrder.style.display = 'none';
			document.querySelector('.js-overlay-thank-you').style.display = 'none';
			document.body.style.overflow = '';
		}

}
export default orderAjax;


