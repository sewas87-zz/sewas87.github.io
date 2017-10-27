$(document).ready(function() {
    //Слайдер та налаштування
    $('#slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
        infinite: true,
        cssEase: "ease",
    });
    //для випадаючого меню по ховеру
    $('.head-nav li').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ul',this).stop(true,true).slideDown(100);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).slideUp(100);
        }, this), 200));
    });
    $("#nav-toggle").on("click", function() {
        $(this).toggleClass("active");
        $('.head-nav').slideToggle();
    });
    //Прелоадер
    /*$(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.preload-juggle');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });*/
});
