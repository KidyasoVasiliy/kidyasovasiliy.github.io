function bookWishesTabs(){
	let tabs = document.querySelectorAll('.location-button button');

	tabs[0].addEventListener('click', function(event){
		let target = event.target;
		this.classList.add('book-active-tab');
		tabs[1].classList.remove('book-active-tab');
		document.querySelector('.book-block .book-block__item-2').style.display = 'none';
		document.querySelector('.book-block .book-block__item-1').style.display = 'block';
	});	
	tabs[1].addEventListener('click', function(event){
		let target = event.target;
		this.classList.add('book-active-tab');
		tabs[0].classList.remove('book-active-tab');
		document.querySelector('.book-block .book-block__item-1').style.display = 'none';
		document.querySelector('.book-block .book-block__item-2').style.display = 'block';
	});


}
export default bookWishesTabs;