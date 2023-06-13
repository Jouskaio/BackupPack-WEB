$(document).ready(function() {
  // TODO: Several refresh are necessary to display the map
  let map;
  let marker;
  let user = { lat: 48.862725, lng: 2.287592 };
  let bag = new google.maps.LatLng(48.8566, 2.3522);
  let directionsService;
  let directionsDisplay;

  function initMap() {
    const mapElement = document.querySelector(".l-location__o-map");

    // Création de la carte
    map = new google.maps.Map(mapElement, {
      zoom: 19,
      center: user,
    });

    /*marker = new google.maps.Marker({
      position: user,
      map: map,
      //title: "Hello World!",
    });*/

    // Création de l'itinéraire
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    let request = {
      origin: user,
      destination: bag,
      travelMode: google.maps.TravelMode.DRIVING // ou google.maps.TravelMode.WALKING pour la marche
    };

    directionsService.route(request, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  // Calculate and Display Route
  function displayMapAndRoute() {
    initMap();
    calculateAndDisplayRoute();
  }
  function calculateAndDisplayRoute() {
    let request = {
      origin: user,
      destination: bag,
      travelMode: google.maps.TravelMode.DRIVING // ou google.maps.TravelMode.WALKING pour la marche
    };

    directionsService.route(request, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setPanel(document.querySelector(".l-location__a-directionPannel")); // Afficher les instructions d'itinéraire dans un élément HTML
      }
    });
  }
  // Update Map
  function updateMap(newCoordinates) {
    if (map && marker) {
      const gps = { lat: newCoordinates.latitude, lng: newCoordinates.longitude };
      map.setCenter(gps);
      marker.setPosition(gps);
    }
  }

  // Display Map
  window.initMap = initMap;
  google.maps.event.addDomListener(window, 'load', initMap);
  displayMapAndRoute();


  // Example usage: update map with new coordinates
  //let newCoordinates = { latitude: 48.8566, longitude: 2.3522 };
  //updateMap(newCoordinates);
});
