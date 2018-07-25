// function googleAPI(){
// // 	function initMap() {
// // 	  // The location of Uluru
// // 	  var uluru = {lat: 59.8990355, lng: 30.5130513};
// // 	  // The map, centered at Uluru
// // 	  var map = new google.maps.Map(
// // 	      document.getElementById('mapGoogle'), {zoom: 4, center: uluru});
// // 	  // The marker, positioned at Uluru
// // 	  var marker = new google.maps.Marker({position: uluru, map: map});
// // 	}


// // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.9914491235431!2d30.512894715616486!3d59.899091672250876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962ef32ed30fc3%3A0x9677346206122e40!2z0YPQuy4g0KHRgtC-0LvQuNGH0L3QsNGPLCA0LCDQmtGD0LTRgNC-0LLQviwg0JvQtdC90LjQvdCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgMTg4Njkx!5e0!3m2!1sru!2sru!4v1530473934553" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>


// // AIzaSyBCWifSuhDFS2h_R6JIAkqhISsSFFSPPmA


// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665, 151.1956);

//   var map = new google.maps.Map(document.getElementById('mapGoogle'), {
//     center: pyrmont,
//     zoom: 15,
//     scrollwheel: false
//   });

//   // Specify location, radius and place types for your Places API search.
//   var request = {
//     location: pyrmont,
//     radius: '500',
//     types: ['store']
//   };

//   // Create the PlaceService and send the request.
//   // Handle the callback with an anonymous function.
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, function(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         var place = results[i];
//         // If the request succeeds, draw the place location on
//         // the map as a marker, and register an event to handle a
//         // click on the marker.
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });
//       }
//     }
//   });
// }

// // Run the initialize function when the window has finished loading.
// google.maps.event.addDomListener(window, 'load', initialize);
// }
// export default googleAPI;


// function  googleAPI(){
//       var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('mapGoogle'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
// }
// export default googleAPI;