function initMap(){
	var test = { lat: 22.5518978, lng: 72.9239577 };
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 6,
		center: test
	});
	var marker = new google.maps.Marker({
		position: test,
		map: map
	});
};