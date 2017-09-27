$(document).ready(function() {
    $("#form1, #form2, #form3, #form4").submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "send.php", 
            data: th.serialize()
        })
        .done(function() {
            $('#call-back').hide();
            $('#overlay').fadeIn( 400, function() {
                $('#modal-done')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#modal-done__close-modal, #close-done, #overlav').on('click',function () {
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
            //alert('error');
            $('#call-back').hide();
             $('#overlay').fadeIn( 400, function() {
                $('#modal-error')
                .css('display','block')
                .animate({opacity: 1, top: '50%'},200);    
            });
            $('#modal-error__close-modal, #close-error, #overlay').on('click',function () {
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
    //maskinp
    $("#tel1, #tel2, #tel3, #tel4").mask("(999) 999-9999");
    //you tube
    $(".rvs-container").rvslider();
    // modal visible
    $('.button, .step-butt, #popup__toggle').on('click', function () {
        $('#overlay').fadeIn( 400, function() {
            $('#call-back')
            .css('display','block')
            .animate({opacity: 1, top: '50%'},200);    
        });
    });
    $('#close-modal, #overlay').on('click',function () {
        $('#call-back')
            .animate({opacity: 0, top: '45%'},200,
            function () {
                $(this).css('display','none');
                $('#overlay').fadeOut( 400);
            }); 
    });
    // dynamic downl
    if (window.screen.width > 860){
        new WOW().init();
    }
    // circle-button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollTop, #popup__toggle').fadeIn();
        } else {
            $('.scrollTop, #popup__toggle').fadeOut();
        }
    });
    $('.scrollTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true,
    });

}); 
