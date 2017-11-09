$(document).ready(function() { 
   $('#fullpage').fullpage({
        anchors:['Page1', 'Page2','Page3','Page4'],
        menu: '#nav',
        scrollOverflow:true,
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $('#nav').delay(100).animate({opacity: 1},1000);
                $('.slogan-b0').delay(500).animate({opacity: 1, top: '50%'},1000);
                $('.social').delay(700).animate({opacity: 1},1000);
                $('.logo').css('background-position-x','0px');
            }
            if(index == 2){
                if (window.screen.width > 768){
                    $('.box').delay(100).animate({opacity: 1},1000);
                    $('.text-box').delay(600).show(800).animate({opacity: 1},1000);
                    $('.logo').css('background-position-x','0px');
                }
            }
            if(index == 3){
                $('#nav').css({display:'flex'});
                $('.slogan-b2').delay(100).animate({opacity: 1, top: '50%'},1000);
                $('.logo').css('background-position-x','0px');
            }
            if(index == 4){
                if (window.screen.width > 768){
                    $('.forma').delay(200).animate({width: '100%'},1000);
                    $('#form').delay(1000).fadeIn(1000);
                    $('#nav a').css('color', '#1a171b');
                    $('#nav a').delay(200).animate({color: '#fff'},500);
                    $('.logo').css('background-position-x','-140px');
                }
            }
        },
    });
    $(".btn").on("click", function() {
        $(this).toggleClass("active-btn");
        $('#menu').slideToggle().css('display', 'flex');
    });
    if (window.screen.width < 768){
        $("#menu").on("click","a", function (event) {
            $('.btn').toggleClass("active-btn");
            $('#menu').hide();
        });
    }
});