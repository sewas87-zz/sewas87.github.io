$(document).ready(function(){
    $('#slides').lightSlider({
        slideMargin:0,
        //slideHeight:295,
        item:3,
        loop:true,
        slideMove:1,
        //easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager: false,
        responsive : [
            {
                breakpoint:1024,
                settings: {
                    item:2,
                    slideMove:1,
                }
            },
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    });
    //burger-menu
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        $('.nav-line ul').toggle('fast');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 3) {
            $('.overlay-nav').fadeIn('slow');
            $(".nav-line").css("padding-top", "10px");
        } else{
           $('.overlay-nav').fadeOut('slow');
           $(".nav-line").css("padding-top", "55px");
        }
    });
    //якорь
    var lastId,
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight() +1,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+20;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 900);
        e.preventDefault();
    });
    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
       
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }                   
    });
    //open
     $('.ask-btn').click(function () {
        $('#overlay').fadeIn( 400, function() {
            $('#modal-form')
            .css('display','block')
            .animate({opacity: 1, top: '50%'},200);    
        });
    });
    $('#close-modal, #overlay').on('click',function () {
        $('#modal-form')
            .animate({opacity: 0, top: '45%'},200,
            function () {
                $(this).css('display','none');
                $('#overlay').fadeOut( 400);
            }); 
    });
    //form-send
    $("#form").submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "send.php", 
            data: th.serialize()
        })
        .done(function() {
            $('#modal-form').hide();
             $('#overlay').fadeIn( 400, function() {
                $('#modal-done')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#close-modal-done, #close-done, #overlay').on('click',function () {
                $('#modal-done')
                    .animate({opacity: 0, top: '45%'},200,
                    function () {
                        $(this).css('display','none');
                        $('#overlay').fadeOut( 400);
                    }); 
            });
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        })
        .fail(function() { 
             $('#modal-form').hide();
             $('#overlay').fadeIn( 400, function() {
                $('#modal-error')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#close-modal-error, #close-error, #overlay').on('click',function () {
                $('#modal-error')
                    .animate({opacity: 0, top: '45%'},200,
                    function () {
                        $(this).css('display','none');
                        $('#overlay').fadeOut( 400);
                    }); 
            });
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    // litebox
    $('.sl1-btn').on('click', function() {
        $(this).lightGallery({
            thumbnail: false,
            dynamic: true,
            dynamicEl: [{
                "src": 'img/sl1.jpg',
                'subHtml': '<h4>sctin 1</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/sl1.jpg',
                'subHtml': "<h4>scrin 2</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/sl1.jpg',
                'subHtml': "<h4>scrin 3</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.sl2-btn').on('click', function() {
        $(this).lightGallery({
            thumbnail: false,
            dynamic: true,
            dynamicEl: [{
                "src": 'img/sl3.jpg',
                'subHtml': '<h4>sctin 1</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/sl3.jpg',
                'subHtml': "<h4>scrin 2</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/sl3.jpg',
                'subHtml': "<h4>scrin 3</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.sl3-btn').on('click', function() {
        $(this).lightGallery({
            thumbnail: false,
            dynamic: true,
            dynamicEl: [{
                "src": 'img/sl2.jpg',
                'subHtml': '<h4>sctin 1</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/sl2.jpg',
                'subHtml': "<h4>scrin 2</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/sl2.jpg',
                'subHtml': "<h4>scrin 3</h4><p>Beautiful morning</p>"
            }]
        })
    });
    $('.sl4-btn').on('click', function() {
        $(this).lightGallery({
            thumbnail: false,
            dynamic: true,
            dynamicEl: [{
                "src": 'img/sl3.jpg',
                'subHtml': '<h4>sctin 1</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/sl3.jpg',
                'subHtml': "<h4>scrin 2</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/sl3.jpg',
                'subHtml': "<h4>scrin 3</h4><p>Beautiful morning</p>"
            }]
        })
    });
    // anim_wow.js
    if ($(window).width()  > 800) {
      new WOW().init();
    }
});
var map;
function initMap() {
    var uluru = {lat: 40.711593, lng: -74.007739 },
        popupContent = '<p class="content">Steven Bernson, Attorney at Law<br>1556 Broadway, suite 416<br>New York, NY, 10120, USA </p>',
        markerImage = 'img/dest.png';
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru,
      scrollwheel: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
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
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
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
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: markerImage
    });
    infowindow = new google.maps.InfoWindow({
        content: popupContent
    });
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