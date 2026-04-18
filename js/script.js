console.log("Project 3 JavaScript loaded successfully.");
async function initMap() {
  const selectedLocation = { lat: 41.9981, lng: -87.6556 };
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: selectedLocation,
    zoom: 14,
    mapTypeId: "roadmap",
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true
  });
  const infoWindow = new InfoWindow({
    content: `
      <div>
        <h3>My Selected Location</h3>
        <p>This is the featured location on my Project 3 Google Map page.</p>
      </div>
    `
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: selectedLocation,
    title: "Selected Location"
  });
  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map: map
    });
  });
}