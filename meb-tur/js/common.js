jQuery(document).ready(function($){
    $('#Slider1').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMargin: 10,
        speed: 1000,
        pause: 4000,
        adaptiveHeight: true,
        controls: false
    });
    $('#Slider2').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        speed: 1000,
        pause: 4000,
    });
    $("#form1, #form2, #form3, #callback").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", 
            data: th.serialize()
        })
        .done(function() {
            //alert("Спасибо за отправку вашего сообщения!");
            $('#modal-callback').hide();
            $('#overlay').fadeIn( 400, function() {
                $('#modal-form')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#modal-form__close-modal, #mod-close').on('click',function () {
                $('#modal-form')
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
             $('#modal-callback').hide();
             $('#overlay').fadeIn( 400, function() {
                $('#modal-error')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#modal-error__close-modaler, #mod-closeer').on('click',function () {
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
    //dynamik down anim
    if (window.screen.width > 800){
      $('.text-right').addClass('zoomInRight wow');
      $('.text-left').addClass('zoomInLeft wow');
      $('.graycircle-right, .graycircle-left').addClass('zoomIn wow');
      $('ul.econ-list li').addClass('zoomIn wow');
      $('h2').addClass('zoomIn wow');
      $('.boximgright_boxtext').addClass('zoomInLeft wow');
      $('.boximgleft_boxtext').addClass('zoomInRight wow');
      $('.graycircle').addClass('zoomIn wow');
      var wow = new WOW({
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
      });
      wow.init();
    }
    

    //certific
    $('.certificate_certimg').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
        
    });
    //modal
     $('.butt, .econ-btn, #popup__toggle').on('click',function (event) {
        event.preventDefault();
        $('#overlay').fadeIn( 400, function() {
            $('#modal-callback')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
        }); 
    });
    //close
    $('#modal-callback__close-modalcb, #overlay').on('click',function () {
        $('#modal-callback')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display','none');
                    $('#overlay').fadeOut( 400);
           
                }
            );  
    });  
    //circle-button
    var element = $('#popup__toggle, #scrollUp');
    $(window).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 500 ? 'In': 'Out')](500);           
    });
    $('#scrollUp').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2500);
        return false;
    });
    //maskedinp
    $('#tel1, #tel2, #tel3').mask("(999) 999-9999")
});
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('contact_map'), {
        center: {lat: 22.278593, lng: 114.177125},
        zoom: 10,
        scrollwheel:  false
    });
}