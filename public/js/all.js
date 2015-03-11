$(document).ready(function(){

  // keep the landing div centered
  $(window).on('resize', function(){
    var $window = $(window);
    var $landing = $('.page-landing .hero-content');
    var $header = $('.header');
    var $footer = $('.footer');
    var marginTop = Math.max(0, ($window.height() - $header.height() - $footer.height() - $landing.height() - 80) / 2)
    $landing.css('marginTop',  marginTop);
  });

  $(window).trigger('resize')
})

function setupFooterMap(){
  var map;

  function initialize() {
    var site3 = new google.maps.LatLng(43.661375,-79.426088);
    var mapOptions = {
        zoom: 14,
        center: site3,
        mapTypeControl: false,
        scrollwheel: false // messes up scrolling down the page
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
setupFooterMap();

function setupLocationMap(){
  var mapDivId = "map"
  var infoWindowContent = '<div style="width: 280px;"><img src="/images/site3-exterior.jpg" style="float: left; height: 90px; margin-right: 10px;" /><strong>Site 3 coLaboratory</strong><br />718R Ossington Ave<br />Toronto ON M6G&nbsp;2T7<br /><br />In the alley behind the church</div>';
  var map;

  function initialize() {
    var site3 = new google.maps.LatLng(43.661375,-79.426088);
    var mapOptions = {
        zoom: 17,
        center: site3,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById(mapDivId), mapOptions);
    var marker = new google.maps.Marker({
      position: site3,
      map: map,
      title: "Site 3",
      icon: "/images/map-marker.png"
    });

    var infoWindow = new google.maps.InfoWindow({
      position: site3,
      pixelOffset: new google.maps.Size(0, -45),
      content: infoWindowContent,
      maxWidth: 400
    });
    infoWindow.open(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}
setupLocationMap();
