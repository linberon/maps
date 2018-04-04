var apiKey = "AIzaSyA8lGn8J49hka - tWs2xrKPzqYuK1_vxx0w";

function initMap() {
	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
		[
			{ elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
			{ elementType: "labels", stylers: [{ visibility: "off" }] },
			{
				featureType: "administrative",
				elementType: "geometry",
				stylers: [{ visibility: "off" }]
			},
			{
				featureType: "administrative.land_parcel",
				stylers: [{ visibility: "off" }]
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

			{ featureType: "road", stylers: [{ visibility: "off" }] },
			{
				featureType: "road",
				elementType: "labels.icon",
				stylers: [{ visibility: "off" }]
			},
			{ featureType: "transit", stylers: [{ visibility: "off" }] },

			{
				featureType: "water",
				elementType: "geometry.fill",
				stylers: [{ color: "#93cbce" }]
			}
		],
		{ name: "Styled Map" }
	);

	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 40, lng: -20 },
		zoom: 3
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");
}
