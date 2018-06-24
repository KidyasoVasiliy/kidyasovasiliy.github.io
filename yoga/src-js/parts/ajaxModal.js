function ajaxModal() {

	//Модальная форма обратной связи
	let form 		= document.getElementsByClassName('main-form')[0],
		input 		= form.getElementsByTagName('input'),
		popupForm 	= document.querySelector('.popup-form'),

		loading 	= document.querySelector('.loading-modal'),
		thank 		= document.querySelector('.thank-modal'),
		failure 	= document.querySelector('.failure-modal');


		form.addEventListener('submit', function(event) {
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open('POST','server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			let formData = new FormData(form);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					loading.style.display = 'block';
					
					popupForm.style.display = 'none';
					thank.style.display = 'none';
					failure.style.display = 'none';
				} else if (request.readyState === 4) {

					if (request.status === 200 && request.status <300) {
						thank.style.display = 'block';

						popupForm.style.display = 'none';
						loading.style.display = 'none';
						failure.style.display = 'none';
					} else {
						thank.style.display = 'block';

						popupForm.style.display = 'none';
						loading.style.display = 'none';
						failure.style.display = 'none';
						}
				}
			};
			for(let i = 0; i < input.length; i++){				//Чистим поле ввода
				input[i].value = '';
			}
		});
}
export default ajaxModal;

