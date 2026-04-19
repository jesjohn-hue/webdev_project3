function initMap() {
  const selectedLocation = { lat: 41.9981, lng: -87.6556 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: selectedLocation,
    zoom: 14
  });

  const marker = new google.maps.Marker({
    position: selectedLocation,
    map: map
  });
}