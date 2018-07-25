function mainFormAjax() {

	let form	= document.querySelector('.form-group'),
		formGroupOff = form.querySelectorAll('.form-group-box'),
		mainFormBox = formGroupOff[0].querySelectorAll('.form-box input'),
		mainFormBoxText = formGroupOff[0].querySelector('.form-box textarea');
		
		function newEl(){
			form.insertAdjacentHTML(
				'afterbegin', 
				`<div style=
					"display: none;
					 padding-top: 50px; 
					 margin: 0 auto;
					 width:1110px; 
					 height: 290px; 
					 font-family: Amsdamcyr;
					 text-align: center; 
					 font-size: 24px;"
				></div>`
				);	
		}
		newEl();
		let newElDiv = document.querySelectorAll('.form-group div')[0];
		
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
					formGroupOff[0].classList.add('bounceOut');
					document.querySelectorAll('.form-box-button button')[0].classList.add('flipOutX')
					setTimeout(()=>{
						formGroupOff[0].style.display = 'none';
						document.querySelectorAll('.form-box-button button')[0].style.display = 'none';
						newElDiv.style.display = 'block';
						newElDiv.textContent = 'Пожалуйста, подождите...';
					}, 600);
					
				} else if (request.readyState === 4) {

					if (request.status === 200 && request.status <300) {
						setTimeout(()=>{
							newElDiv.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течении 5 минут.';
						}, 1000);
					} else {
						setTimeout(()=>{
						newElDiv.innerHTML = 'Ошибка! <br> Что-то пошло не так...';
						}, 1000);
						}
				}
			};

			mainFormBoxText.value = '';						//Чистим поля ввода
			for(let i = 0; i < mainFormBox.length; i++){	//Чистим поля ввода		
				 mainFormBox[i].value = '';
			}
		}); 


}
export default mainFormAjax;
