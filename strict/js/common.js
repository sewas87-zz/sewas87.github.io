$(document).ready(function() { 
    $("#gallery").lightGallery();

    var el = $("#hamburger");
    el.on("click", function(){
      $(this).toggleClass("active");
      $('.nav').slideToggle('250').css('display', 'flex');
    });
    $(".nav a").click(function(e) {
        e.preventDefault();
        $(".nav  a").removeClass('active');
        $(this).addClass('active');
    });
    //ajax
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
    //scroltop
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn().css('display','flex');
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    //animate
    if (window.screen.width > 800){
        new WOW().init();
    }
});

            

 


	