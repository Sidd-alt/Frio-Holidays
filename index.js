let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.025080, lng: 72.888992 },
    zoom: 8,
  });
}