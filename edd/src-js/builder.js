import backgroundSelection from './parts/siteBuilder/backgroundSelection.js';
import navigation from './parts/navigation/navigation.js';
import editingACard from './parts/editingACard/editingACard.js';
import guestList from './parts/guestList/guestList.js';
import videoWidget from './parts/videoWidget/videoWidget.js';
import bookWishesSlider from './parts/bookWishes/bookWishesSlider.js';
import bookWishesTabs from './parts/bookWishes/bookWishesTabs.js';
import sendingWishes from './parts/bookWishes/sendingWishes.js';
import guestbook from './parts/guestbook/guestbook.js';
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
			bookWishesSlider();
			bookWishesTabs();
			sendingWishes();
			break;
		case '/letter-guests.php':
			// navigationActiveTab(10)
			break;
		case '/photo-guests.php':
			guestbook();
			break;
		case '/video-widget.php':
			videoWidget();
			break;
	}




