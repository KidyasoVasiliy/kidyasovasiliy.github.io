function letterToGuests(){
	
	let form = document.querySelector('.form-album'),
		formDiv = document.querySelectorAll('.form-album .form-album-input input'),
		formText = document.querySelectorAll('.form-album textarea');
	let formBox = document.querySelector('.form-album-box');

	formDiv[0].disabled = true;
	formDiv[1].disabled = true;

	console.log(form)


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
					formOff('Почтальон отправляется... Ждем')
				} else if (request.readyState === 4) {

					if (request.status === 200 && request.status <300) {
						formOff('Письмо отправленно!')
					} else {
							formOff('Что-то пошло не так.. Ошибка')
						}
				}
			};

			for(let i = 0; i < formText.length; i++){			//Чистим поля ввода
				formText[i].value = '';
			}
		}); 

		function formOff(text){
			form.innerHTML = text;
			form.classList.add('form-album-box');
			form.style.color = 'green';
			form.style.fontWeight  = '700';
			formBox.style.display = 'none';
		}

}
export default letterToGuests;