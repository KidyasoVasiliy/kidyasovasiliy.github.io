function videoWidget(){
	let videoWidgetPage = document.querySelector('.builder8 .youtube'),
		frameVideoWidget = document.querySelector('.builder8 iframe'),
		inputLink = document.querySelector('.builder8 .form-location .form-input .form-location-box__text'),
		addLinkBtn = document.querySelector('.builder8 .form-location .form-input .form-button__add');

		// let link = inputLink;

		addLinkBtn.addEventListener('click', function(event) {
			event.preventDefault();
			let linkError = inputLink.value;
			let arrLink = linkError.split('');
			let link = 'https://www.youtube.com/embed/';
			let newArr = [];
			for(let i = 0; i < 11; i++){
				newArr.unshift(arrLink.pop());
				link = 'https://www.youtube.com/embed/' + newArr.join('');
			}
			frameVideoWidget.setAttribute('src', link)
		});


	videoWidgetPage.addEventListener('click', function(){
			videoWidgetPage.style.display = 'none';
			frameVideoWidget.style.display = 'block';
	})
//Это было жестко)

}
export default videoWidget;



