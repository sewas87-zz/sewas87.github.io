$(document).ready(function() {


    /*---fullpage_plugin--*/
    $('#fullpage').fullpage({
        scrollOverflow:true,
    });
    /*---fullpage_plugin--*/


    /*---grid systems of portfolio---*/
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.grid-item, .grid-item3x2',
            columnWidth: '.grid-sizer, .grid-sizerr',
        }); 
    });
    /*---grid systems of portfolio---*/



    /*---navigation---*/
    if (window.screen.width > 991){
        $('#nav-icon3').toggle(function() {
            $('#nav').css('background','#000') .animate({width: '97%', }, 300);
            $('.menu').delay(800).css('display','flex').animate({opacity: "1",top: '50%'},500);
            $('.menu-global').css('border-color','#fff');
            $(this).toggleClass('open');
            $('#nav-icon3 span').css('background','#fff');
            $('.social-link').animate({opacity: "1"}, 100);
            $('.lable').delay(400).css('display','flex').animate({opacity: "1"},300);
        }, function() {
            $('#nav').animate({width: '141px',backgroundColor: 'transparent'}, 300);
            $('.menu').fadeOut();
            $('#nav-icon3 span').css('background','#000');
            $(this).toggleClass('open');
            $('.social-link').animate({opacity: "0"}, 100);
            $('.lable').fadeOut();
        });
    }
        // sm-screean navigat
    if (window.screen.width < 991){
        $('#nav-icon3').toggle(function() {
            $('#nav').animate({height: '100%', backgroundColor: '#000', }, 300);
            $('.menu').css({
                opacity: '1',
                display: 'flex'
            });
            $('.lable').delay(400).css('display','flex').animate({opacity: "1"},300);
            $(this).toggleClass('open');
            $('#nav-icon3 span').css('background','#fff');
            $('.lable').css({
                opacity: '1',
                display: 'flex'
            });
        }, function() {
            $('#nav').animate({height: '87px',backgroundColor: '#fff'}, 200);
            $('.menu').hide();
            $(this).toggleClass('open');
            $('#nav-icon3 span').css('background','#000');
            $('.lable').fadeOut();
        });
    }
    /*---navigation---*/


    /*---accordion---*/
    $(".accordion content:not(:first)").hide();
    $(".accordion a").click(function(){
        $(this).next(".content").slideToggle(300).siblings(".content:visible").slideUp(300);
        $(this).toggleClass("active-s");
        $(this).siblings("a").removeClass("active-s");
        $(this).children('.cursor').toggle();
        $(this).siblings().children('.cursor').hide(); 
    });
    $(".open").toggle(function() {
        $(this).css('border','none');
        $(this).siblings('a').css('border-bottom','2px dashed #000');
    }, function() {
        $(this).css('border-bottom','2px dashed #000');
    });
    $("input").toggle(function() {
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active');
    }, function() {
    });
    /*---accordion---*/


    //form-btn
    $("#form-btn").hover(function() {
        $(this).animate({backgroundColor: '#cb1212'}, 200);
    }, function() {
        $(this).animate({backgroundColor: 'transport'}, 200);
    });


    /*---open slide map desctop---*/
    $('#map-btn').toggle(function() {
        $('.location').animate({right: '0%', }, 300);
        $('.ball').hide();
        $('.ball-close').css('display','block');
    }, function() {
        $('.location').animate({right: '-80%', }, 300);
        $('.ball').show();
        $('.ball-close').hide();
    });
    if (window.screen.width < 991){
        $('#map-btn').toggle(function() {
            $('.location').animate({right: '0%'}, 300);
            $('#map-btn').css('left','10px');
        }, function() {
            $('.location').animate({right: '-100%', }, 300);
            $('#map-btn').css('left','-70px');
        });
    }
    /*---open slide map desctop---*/
});


/*---init google maps---*/
function initMap() {
    var coordinates = {lat: 49.851378, lng: 24.028419},
        markerImage = '../img/maps-icon.png',
        zoom = 16,

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: zoom,
            disableDefaultUI: false,
            scrollwheel: false
        }),

        infowindow = new google.maps.InfoWindow({
            content: '<div class="marker-content js-marker-content"<div class="marker-info__text"><h4 class="title-map">Ми в оффлайні:</h4><p>вул. Замарстинівська, 40<br>Львів, Україна, 79019</p><br><a href="#">Перейти на Google Maps</a><br><a href="#">Копіювати GPS координати</a></div></div></div>'
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: markerImage
        });
        var styles = [
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#b7c0de"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#d5daec"
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
/*---init google maps---*/


/*---custonFORM---*/
( function( window ) {
'use strict';
function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}
function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}
var classie = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};
if ( typeof define === 'function' && define.amd ) {
  define( classie );
} else {
  window.classie = classie;
}
})( window );
(function() {
    if (!String.prototype.trim) {
        (function() {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );
    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }
    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
})();
/*---custonFORM---*/
