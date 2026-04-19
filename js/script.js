function initMap() {
  const mapElement = document.getElementById("map");

  if (!mapElement) {
    return;
  }

  const selectedLocation = { lat: 41.9981, lng: -87.6556 };

  const map = new google.maps.Map(mapElement, {
    center: selectedLocation,
    zoom: 15,
    mapTypeId: "roadmap",
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<p>Loyola University Chicago</p>"
  });

  const marker = new google.maps.Marker({
    position: selectedLocation,
    map: map,
    title: "Selected Location"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  map.addListener("click", function (event) {
    new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const sliderImage = document.getElementById("slider-image");
  const sliderCaption = document.getElementById("slider-caption");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (!sliderImage || !sliderCaption || !prevBtn || !nextBtn) {
    return;
  }

  const slides = [
    {
      src: "media/coding.jpg",
      alt: "A person coding on a laptop",
      caption: "Building strong foundations in structured web development."
    },
    {
      src: "media/teamwork.jpg",
      alt: "A team collaborating during a professional meeting",
      caption: "Collaboration and teamwork support strong project development."
    },
    {
      src: "media/business-tech.jpg",
      alt: "Money and a computer processor representing business and technology",
      caption: "Technology and business work together to create real value."
    }
  ];

  let currentSlide = 0;

  function showSlide(index) {
    sliderImage.src = slides[index].src;
    sliderImage.alt = slides[index].alt;
    sliderCaption.textContent = slides[index].caption;
  }

  prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  });
});