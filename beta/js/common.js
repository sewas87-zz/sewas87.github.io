$(document).ready(function() { 
    $(".gallery").lightGallery();
    $("#nav-toggle").on("click", function() {
        $(this).toggleClass("active");
        $('#nav').slideToggle();
    });
    $(".main-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
        $('#nav-toggle').toggleClass("active");
        $('#nav').slideToggle();
    });
    $("#scrol-down").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
   if (window.screen.width > 991){
        new WOW().init();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});