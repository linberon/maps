let apiKey = "AIzaSyA8lGn8J49hka - tWs2xrKPzqYuK1_vxx0w";
let infoWindow;
let map;

function initMap() {
  // Create a new object, and passing it an array of styles
  let styledMapType = new google.maps.StyledMapType(
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
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -20 },
    zoom: 3,
    minZoom: 3,
    maxZoom: 4,
    disableDefaultUI: true
  });
  infoWindow = new google.maps.InfoWindow({
    content: "HI!"
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
let markers = [
  ["Fish", -1.878, -78.178, 4, "this is the content for the Fish"],
  ["Monkey", 41, 8, 5, "this is the content for the Monkey"],
  ["Bird", 43, -76, 3, "this is the content for the Bird"],
  ["Bear", -3, 14, 2, "this is the content for the Bear"],
  ["Turtle", 47.567, 19.169, 1, "this is the content for the Turtle"]
];

// Adding markers to the map
function setMarkers(map) {
  for (let i = 0; i < markers.length; i++) {
    let location = markers[i];

    let marker = new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: "#ffdb5b",
        strokeOpacity: 0,
        strokeWeight: 1,
        fillColor: "#ffdb5b",
        fillOpacity: 0
      },
      map: map,
      draggable: false,
      clickable: true,
      infoWindow: infoWindow,
      content: setInfoWindowContent(location[0], location[3])
    });

    google.maps.event.addListener(marker, "mouseover", function() {
      marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: "#ffdb5b",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: "#ffdb5b",
        fillOpacity: 0.8
      });
    });

    google.maps.event.addListener(marker, "mouseout", function() {
      marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: "#ffdb5b",
        strokeOpacity: 0,
        strokeWeight: 1,
        fillColor: "#ffdb5b",
        fillOpacity: 0
      });
    });

    google.maps.event.addListener(marker, "click", function() {
      marker.infoWindow.open(map, marker);
      marker.infoWindow.setContent(marker.content);
    });
  }
}

function setInfoWindowContent(title, description) {
  return `<div id="content">
						 <img src="#"></img>
					   <h1 id="infoTitle">${title}</h1>
					   <p>${description}</p>
						 <a href="#">Link</a>
				   </div>`;
}
