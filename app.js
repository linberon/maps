var apiKey = "AIzaSyA8lGn8J49hka - tWs2xrKPzqYuK1_vxx0w";

var map;
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 40, lng: -20 },
		zoom: 3
	});
}

/*function initMap(){

var styledMapType = new google.maps.styledMapType(
 [
	{ elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
	{ elementType: "labels", stylers: [{ visibility: "off" }] },
	{ elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
	{ elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
	{
		featureType: "administrative",
		elementType: "geometry",
		stylers: [{ visibility: "off" }]
	},
	{
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [{ color: "#c9b2a6" }]
	},
	{
		featureType: "administrative.land_parcel",
		stylers: [{ visibility: "off" }]
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "geometry.stroke",
		stylers: [{ color: "#dcd2be" }]
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels.text.fill",
		stylers: [{ color: "#ae9e90" }]
	},
	{
		featureType: "administrative.neighborhood",
		stylers: [{ visibility: "off" }]
	},
	{
		featureType: "landscape.natural",
		elementType: "geometry",
		stylers: [{ color: "#248c8c" }]
	},
	{ featureType: "poi", stylers: [{ visibility: "off" }] },
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [{ color: "#dfd2ae" }]
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [{ color: "#93817c" }]
	},
	{
		featureType: "poi.park",
		elementType: "geometry.fill",
		stylers: [{ color: "#a5b076" }]
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [{ color: "#447530" }]
	},
	{ featureType: "road", stylers: [{ visibility: "off" }] },
	{
		featureType: "road",
		elementType: "labels.icon",
		stylers: [{ visibility: "off" }]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [{ color: "#e9bc62" }]
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry",
		stylers: [{ color: "#e98d58" }]
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry.stroke",
		stylers: [{ color: "#db8555" }]
	},
	{
		featureType: "road.local",
		elementType: "labels.text.fill",
		stylers: [{ color: "#806b63" }]
	},
	{ featureType: "transit", stylers: [{ visibility: "off" }] },
	{
		featureType: "transit.line",
		elementType: "geometry",
		stylers: [{ color: "#dfd2ae" }]
	},
	{
		featureType: "transit.line",
		elementType: "labels.text.fill",
		stylers: [{ color: "#8f7d77" }]
	},
	{
		featureType: "transit.line",
		elementType: "labels.text.stroke",
		stylers: [{ color: "#ebe3cd" }]
	},
	{
		featureType: "transit.station",
		elementType: "geometry",
		stylers: [{ color: "#dfd2ae" }]
	},
	{
		featureType: "water",
		elementType: "geometry.fill",
		stylers: [{ color: "#93cbce" }]
	}
],
{name: 'Styled Map'});
});

map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
}*/
