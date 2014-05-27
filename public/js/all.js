$(document).ready(function(){

  // keep the landing div centered
  $(window).on('resize', function(){
    var $window = $(window);
    var $landing = $('.landing');
    var $header = $('.header');
    var $footer = $('.footer');
    var marginTop = Math.max(0, ($window.height() - $header.height() - $footer.height() - $landing.height() - 80) / 2)
    $landing.css('marginTop',  marginTop);
  });

  $(window).trigger('resize')
})

function setupMap(){
  var map;

  function initialize() {
    var site3 = new google.maps.LatLng(43.661375,-79.426088);
    var mapOptions = {
        zoom: 14,
        center: site3,
        mapTypeControl: false
    };
    map = new google.maps.Map(document.getElementById('footer-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: site3,
      map: map,
      title: "Site 3",
      icon: "/images/map-marker.png"
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}
setupMap();
