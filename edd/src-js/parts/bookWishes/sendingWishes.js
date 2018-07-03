function sendingWishes(){
	let inputsWishes = document.querySelectorAll('.form-book .form-book-box input'),
		textAreaWishes = document.querySelectorAll('.form-book .form-book-box textarea'),
		buttonWishes = document.querySelectorAll('.form-book .form-book-box button');

	let bookItem1 = document.querySelectorAll('#first div')
	let bookItem2 = document.querySelectorAll('#second div')

	buttonWishes[0].addEventListener('click', function(event) {
		event.preventDefault();
		bookItem1[0].childNodes[3].textContent = inputsWishes[0].value
		bookItem1[4].textContent = inputsWishes[1].value
		bookItem1[5].textContent = textAreaWishes[0].value
		clearInput()
	});
		

	buttonWishes[1].addEventListener('click', function(event) {
		event.preventDefault();
		bookItem2[0].childNodes[3].textContent = inputsWishes[2].value
		bookItem2[4].textContent = inputsWishes[3].value
		bookItem2[5].textContent = textAreaWishes[1].value
		clearInput()
	});
		
	function clearInput(){
		inputsWishes[0].value = '';
		inputsWishes[1].value = '';
		textAreaWishes[0].value = '';
		inputsWishes[2].value = '';
		inputsWishes[3].value = '';
		textAreaWishes[1].value  = '';
	}
	//Чистим приглашения
	let clearBtn = document.querySelector('.choice__btns .choice__btn-4');
	let textarea1Default = 'Как важно, чтобы люди находили друг друга, находили свою любовь и половинку! Вы нашли! Я вас поздравляю со свадьбой, с любовью, с новой жизнью! Желаю много очень крепкой, верной, всепобеждающей любви, но и не меньше терпения и смирения! Понимайте друг друга, прощайте друг другу, учитесь быть вместе с радостью в сердце! Приятных вам долгих дней и жарких ночей! Не серых, а цветных будней, ярких выходных и праздников! Детишек вам полный дом и благополучия!';
	let textarea2Default = 'Свои судьбы вы соединили<br>Крепкою любовью, молодые,<br>Счастьем своим солнышко затмили<br> И просторы ярко-голубые!<br>Поздравляем вас с днем обручения,<br>Будьте вы друг другу вдохновением!';
	clearBtn.addEventListener('click', () => {
		bookItem1[0].childNodes[3].textContent = 'Поздравление';
		bookItem1[4].textContent = 'Поздравляю, дорогие. Хочу вам пожелать долгой и счастливой совместной жизни';
		bookItem1[5].textContent = textarea1Default;
		bookItem2[0].childNodes[3].textContent = 'Поздравление';
		bookItem2[4].textContent = 'Поздравляю, дорогие. Хочу вам пожелать долгой и счастливой совместной жизни';
		bookItem2[5].innerHTML = textarea2Default;    
		clearInput()
	});

}
export default sendingWishes;

