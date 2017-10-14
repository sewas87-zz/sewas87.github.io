$(document).ready(function() { 
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
        infinite: true,
    });
     $('.slide').slick({
        arrows: true,
        speed: 1000,
        touchMove: true
    });
    //wow anim
    if (window.screen.width > 991){
        new WOW().init();
    }
    //open popup
    $('.nav-btn').click(function () {
        $('#overlay').fadeIn( 400, function() {
            $('.form')
            .show()
            .animate({opacity: 1, top: '50%'},200);    
        });
    });
    $('#close-popup, #overlay').on('click',function () {
        $('.form')
            .animate({opacity: 0, top: '45%'},200,
            function () {
                $(this).hide();
                $('#overlay').fadeOut( 400);
            }); 
    });
    //tabs-popup
    $('.popup').find('input, textarea').on('keyup blur focus', function (e) {
      var $this = $(this),
          label = $this.prev('label');
          if (e.type === 'keyup') {
                if ($this.val() === '') {
              label.removeClass('active-tab highlight');
            } else {
              label.addClass('active-tab highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active-tab highlight'); 
                } else {
                label.removeClass('highlight');   
                }   
        } else if (e.type === 'focus') {
          if( $this.val() === '' ) {
                label.removeClass('highlight'); 
                } 
          else if( $this.val() !== '' ) {
                label.addClass('highlight');
                }
        }
    });
    $('.tab a').on('click', function (e) {
      e.preventDefault();
      $(this).parent().addClass('active-tab');
      $(this).parent().siblings().removeClass('active-tab');
      target = $(this).attr('href');
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    });
    $(window).scroll(function(){
             var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-150;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');
                $('a[href="#home"]').removeClass('active');
            }
        })
    });
    $("nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    //gallery
    $('.dynamic1').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": 'img/g1-lg.jpg',
                'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/g1-lg.jpg',
                'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/g1-lg.jpg',          
                'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.dynamic2').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": 'img/g2-lg.jpg',
                'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/g2-lg.jpg',
                'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/g2-lg.jpg',          
                'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.dynamic3').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": 'img/g3-lg.jpg',
                'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/g3-lg.jpg',
                'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/g3-lg.jpg',          
                'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.dynamic4').on('click', function() {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": 'img/g4-lg.jpg',
                'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/g4-lg.jpg',
                'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/g4-lg.jpg',          
                'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });
    // Activate menu
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('#main-nav').addClass('active-nav');
        }
        else {
            $('#main-nav').removeClass('active-nav');
        };
    });
    //burgr-mnu
    $('.burgWrapper').bind('click', function(){
        $('.burg').toggleClass('activeBurg');
    });
    var el = $(".burgWrapper");
    el.on("click", function(){
        $('.nav-link').slideToggle('250').css('display', 'flex');
    });
});
//google map
function initMap() {
    var coordinates = {lat: 25.748946, lng: -80.279584},
        markerImage = './img/marker.png',
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 13,
        }),
        infowindow = new google.maps.InfoWindow({
            content: '<p><strong>1201 Coral Way</strong><br> Coral Gables, FL 33134<br> USA</p>'
        }),
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: markerImage
        });
    var styles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
    map.setOptions({styles: styles});
    google.maps.event.addListener(infowindow,'closeclick',function(){
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });
    marker.addListener('click', function () {
        marker.setAnimation(null);
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}

            

 


	