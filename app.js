let apiKey = "AIzaSyAquboIKJ3aiX3H2jKQ2u7KPP2Zi0BOEK8";
let infoWindow;
let map;

function initMap() {
  // Create a new object, and passing it an array of styles
  let styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#78b3a0" }] },
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
        stylers: [{ color: "#2d7f82" }]
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

// Adding markers to the map
function setMarkers(map) {
  for (let i = 0; i < markers.length; i++) {
    let animal = markers[i];

    let marker = new google.maps.Marker({
      position: { lat: animal.lat, lng: animal.lng },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: "#f02139",
        strokeOpacity: 0,
        strokeWeight: 1,
        fillColor: "#f02139",
        fillOpacity: 0
      },
      map: map,
      draggable: false,
      clickable: true,
      infoWindow: infoWindow,
      content: setInfoWindowContent(animal)
    });

    google.maps.event.addListener(marker, "click", function() {
      marker.infoWindow.open(map, marker);
      marker.infoWindow.setContent(marker.content);
      marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 20,
        strokeColor: "#f02139",
        strokeOpacity: 0,
        strokeWeight: 1,
        fillColor: "#f02139",
        fillOpacity: 0.8
      });
    });
  }
}

function setInfoWindowContent(animal) {
  return `<div id="content">
        <img class="thumbnail" src="${animal.image}"></img>
        <h1 id="infoTitle">${animal.name}</h1>
        <p id="animalInfo">${animal.description}</p>
        <a href="#">Link</a>
        <p>${animal.phrase}</p>
      </div>`;
}

function toggleSidenav() {
  $("#sidenav").toggleClass("sidenav-open");
  $(".menu").toggleClass("hidden");
}

function hideCoverPage() {
  $("#cover-page").hide();
  $("#sidenav").addClass("sidenav-open");
}

function showCoverPage() {
  $("#cover-page").show();
}
