function ajaxFooterForm(){

	//Форма footer
	let formFotter 			= document.getElementById('form'),
		inputFotter 		= formFotter.getElementsByTagName('input'),
		contactForm 		= document.querySelector('.contact-form'),

		contactFormLoading 	= document.querySelector('.contact-form-loading'),
		contactFormThank 	= document.querySelector('.contact-form-thank'),
		contactFormFailure 	= document.querySelector('.contact-form-failure');

		formFotter.addEventListener('submit', function(event){
			event.preventDefault();

			//AJAX
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			let formData = new FormData(formFotter);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
						contactFormLoading.style.display = 'block';

						contactForm.style.display = 'none';
						contactFormThank.style.display = 'none';
						contactFormFailure.style.display = 'none';
				} else if (request.readyState === 4) {
					
						if (request.status === 200 && request.status <300) {
							contactFormThank.style.display = 'block';

							contactForm.style.display = 'none';
							contactFormLoading.style.display = 'none';
							contactFormFailure.style.display = 'none';
						} else {
							contactFormFailure.style.display = 'block';

							contactForm.style.display = 'none';
							contactFormThank.style.display = 'none';
							contactFormLoading.style.display = 'none';
						}
				}
			};

			for(let i = 0; i < inputFotter.length; i++){			//Чистим поля ввода
				inputFotter[i].value = '';
			}
		}); 
}
export default ajaxFooterForm;