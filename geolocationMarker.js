				


							/* EXAMPLE ONE */


function initMap() {
    var cphbusiness = {lat: 55.770088, lng: 12.511919};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: cphbusiness
    });
    var marker = new google.maps.Marker({
      position: cphbusiness,
      map: map
    });
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
