var gMap;

function initMap() {
  gMap = new google.maps.Map(document.getElementById("myMapID"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

function initApplication(){
  console.log('Map Mania Lite - Starting!');
}