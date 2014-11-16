var map;
var geocoder;

function initialize() {
	geocoder = new google.maps.Geocoder();
	
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644)
	};
  map = new google.maps.Map(document.getElementById('info-map'),
      mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);