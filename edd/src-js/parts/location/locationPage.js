function locationPage(){
	let maps = document.querySelectorAll('.location-button__map');
		

		maps[0].addEventListener('click', function(){
			this.classList.add('active-tab');
			maps[1].classList.remove('active-tab');
			document.getElementById('mapYandex').style.display = 'none';
			document.getElementById('mapGoogle').style.display = 'block';
		});
		maps[1].addEventListener('click', function(){
			this.classList.add('active-tab');
			maps[0].classList.remove('active-tab');
			document.getElementById('mapGoogle').style.display = 'none';
			document.getElementById('mapYandex').style.display = 'block';
		}); 

}
export default locationPage;

