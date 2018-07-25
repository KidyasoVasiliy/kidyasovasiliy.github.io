
function authorizationAjax() {


	let form	= document.querySelector('.popup-form_form'),
		inputs 	= document.querySelectorAll('.popup-form-box input'),//[1,2,3];
		popupFormForm = document.querySelector('.popup .popup-form_form'),

		loading = document.querySelector('.loading-modal'),
		thank 	= document.querySelector('.thank-modal'),
		failure = document.querySelector('.failure-modal');

		// popupFormForm.style.display = 'block';
		
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
					document.querySelector('.popup-form').style.backgroundColor = "#C6C5C5";
					loading.style.display = 'block';
				} else if (request.readyState === 4) {

					if (request.status === 200 && request.status <300) {
						setTimeout(()=>{
							thank.style.display = 'block';
							popupFormForm.style.display = 'none';
							loading.style.display = 'none';
							}, 1500)
					} else {
						setTimeout(()=>{
							failure.style.display = 'block';
							popupFormForm.style.display = 'none';
							loading.style.display = 'none';
							}, 1500)
						}
				}
			};

			for(let i = 0; i < 3; i++){			//Чистим поля ввода
				inputs[i].value = '';
			}
		}); 


}
export default authorizationAjax;
