console.log("Project 3 JavaScript loaded successfully.");

function initMap() {
  const selectedLocation = { lat: 41.9981, lng: -87.6556 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: selectedLocation,
    zoom: 15,
    mapTypeId: "roadmap",
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div>
        <h3>Loyola University Chicago</h3>
        <p>This is my selected location for Project 3.</p>
      </div>
    `
  });

  const marker = new google.maps.Marker({
    position: selectedLocation,
    map: map,
    title: "Selected Location"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  // FEATURE 3: click anywhere to drop marker
  map.addListener("click", function (event) {
    new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  });
}