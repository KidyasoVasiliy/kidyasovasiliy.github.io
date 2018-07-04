function navigation(){
	let navigationBorder = document.querySelectorAll('#navigation li a'); 
	let navigationImg = document.querySelectorAll('.navigation-block__img'); 
	let navigationSvg = document.querySelectorAll('.navigation-block__img svg'); 


	function navigationActiveTab(i){
		document.querySelectorAll('#navigation li')[i].classList.add('active');
	}

	switch (window.location.pathname) {
		case '/site-builder.php':
			navigationActiveTab(0)
			break;		
		case '/invitation.php':
			navigationActiveTab(1)
			break;		
		case '/guest-list.php':
			navigationActiveTab(2)
			break;		
		case '/location.php':
			navigationActiveTab(3)
			break;			
		case '/book-wishes.php':
			navigationActiveTab(8)
			break;
		case '/letter-guests.php':
			navigationActiveTab(10)
			break;
		case '/photo-guests.php':
			navigationActiveTab(13)
			break;
		case '/video-widget.php':
			navigationActiveTab(15)
			break;
		default:
			// statements_def
			break;
	}
}
export default navigation;