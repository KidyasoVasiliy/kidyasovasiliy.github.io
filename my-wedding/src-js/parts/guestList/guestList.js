function guestList(){
	let inputName = document.querySelectorAll('.form-addguest .form-input input'),
		addGuestBtn = document.querySelector('.form-addguest .form-input button'),
		clearGuest = document.querySelector('.choice .choice__btn-4'),
		builder3Block = document.querySelectorAll('.builder3-block p'),
		arrName = [];

	addGuestBtn.setAttribute('disabled', 'disabled');
	for(let i = 0; i < inputName.length; i++){
		inputName[i].onkeyup = function() {
			chekInput();
			return this.value = this.value.replace(/[^а-я, А-Я]/g, '');
		}
	}

	//Переносим весь массив nodeList в наш массив
	for (var i = 0; i < builder3Block.length; ++i) {
		arrName.push(builder3Block[i].innerHTML); 
	}

	//Блокируем кнопку при пустых инпутах
	function chekInput(){
			if(inputName[0].value.length != 0 && inputName[1].value.length != 0) {
		        addGuestBtn.removeAttribute('disabled');
		    } else {
		        addGuestBtn.setAttribute('disabled', 'disabled');
		    }
	}


	//Пушим в наш массив новые имена
	addGuestBtn.addEventListener('click', function(event) {
		event.preventDefault();
		if(arrName.length >= 33){
			alert('Cписок гостей полон, вы можете пригласить поменьше гостей?')
		} else {
			arrName.push(`${inputName[0].value} ${inputName[1].value}`);
			for(let i = 0; i < arrName.length; i++){
				builder3Block[i].textContent = arrName[i];
			}
		}

		
	});

	//Чистка массива гостей 
	clearGuest.addEventListener('click', () => {
		for(let i = 0; i < builder3Block.length; i++){
			builder3Block[i].innerHTML = '';
			arrName.pop()
		}
	});
}
export default guestList;