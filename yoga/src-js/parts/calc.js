function calc() {
	//Калькулятор
	let persons 	= document.getElementsByClassName('counter-block-input')[0],
		restDays 	= document.getElementsByClassName('counter-block-input')[1],
		place 		= document.getElementById('select'),
		totalValue 	= document.getElementById('total'),
		personsSum 	= 0,
		daysSum 	= 0,
		total 		= 0;

	totalValue.textContent = 0;

	function checkValue(){
		return (restDays.value == ''	|| 
				persons.value == '' 	|| 
				restDays.value == null	|| 
				persons.value == null 	|| 
				restDays.value <= 0 	|| 
				persons.value <= 0 		|| 
				personsSum == '' 		|| 
				daysSum == '' 			|| 
				personsSum <= 0 		|| 
				daysSum <= 0);
	}

	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (checkValue()) {
			totalValue.textContent = 0;
			
		} else {
			randomVariable();
		}
		console.log(personsSum);
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (checkValue()) {
			totalValue.textContent = 0;

		} else {
			randomVariable()
		}
		console.log(daysSum);
	});

	place.addEventListener('change', function() {
		if(checkValue()) totalValue.textContent = 0;
		else randomVariable();
	});

		function randomVariable() {
			let a = total;
			totalValue.textContent = a * place.options[place.selectedIndex].value;
		}
		
		//Проверка на вводи чисел
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else if( /Trident|Edge/i.test(navigator.userAgent) ) {
		 		persons.addEventListener('change', function() {
					persons.value = this.value.replace(/[^\d]/g, '');
					return persons.value
				});
		 		restDays.addEventListener('change', function() {
					restDays.value = this.value.replace(/[^\d]/g, '');
					return persons.value
				});
			} else {
				persons.onkeyup = function (input) {
					return this.value = this.value.replace(/[^\d]/g, '');
				};
				restDays.onkeyup = function (input) {
					return this.value = this.value.replace(/[^\d]/g, '');
				};
			}

}
export default calc;