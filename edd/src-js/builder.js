import backgroundSelection from './parts/siteBuilder/backgroundSelection.js';
import navigation from './parts/navigation/navigation.js';
import editingACard from './parts/editingACard/editingACard.js';
import guestList from './parts/guestList/guestList.js';
import videoWidget from './parts/videoWidget/videoWidget.js';
navigation();
	switch (window.location.pathname) {
		case '/site-builder.php':
			backgroundSelection();
			break;		
		case '/invitation.php':
			editingACard();
			break;		
		case '/guest-list.php':
			guestList();
			break;		
		case '/location.php':
			// navigationActiveTab(3)
			break;			
		case '/book-wishes.php':
			// navigationActiveTab(8)
			break;
		case '/letter-guests.php':
			// navigationActiveTab(10)
			break;
		case '/photo-guests.php':
			// navigationActiveTab(13)
			break;
		case '/video-widget.php':
			videoWidget()
			break;
		default:
			// statements_def
			break;
	}




