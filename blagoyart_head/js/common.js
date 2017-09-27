$(document).ready(function(){
    $('.b-menu').hide();
    $('.b-nav__link1').on('click', function() {
    	$('.b-menu').slideToggle(250);
        return false;
    });
    $('.b-sub-menu').hide();
    $('#man').on('click', function() {
    	$('.b-sub-menu').slideToggle(250);
        return false;
    });
    $('.b-catalog').hide();
    $('#product').on('click', function() {
    	$('.b-catalog').slideToggle(250);
        return false;
    });
    $('.b-sub-catalog').hide();
    $('#catalog-man').on('click', function() {
    	$('.b-sub-catalog').slideToggle(250);
        return false;
    });

    //navig
    $('ul:first > li > a').click(function () {
        $('ul > li').removeClass('b-nav__item_active');
        $(this).parent().addClass('b-nav__item_active');
        return true;
    });
    $('ul.b-menu > li > a').click(function () {
        $('ul.b-menu > li').removeClass('b-menu__items_active');
        $(this).parent().addClass('b-menu__items_active');
        return true;
    });
    $('ul.b-sub-menu__list > li > a').click(function () {
        $('ul.b-sub-menu__list > li').removeClass('b-sub-menu__list_active');
        $(this).parent().addClass('b-sub-menu__list_active');
        return true;
    });

    $('ul.b-catalog > li > a').click(function () {
        $('ul.b-catalog > li').removeClass('b-catalog__items_active');
        $(this).parent().addClass('b-catalog__items_active');
        return true;
    });
    $('ul.b-sub-catalog__list > li > a').click(function () {
        $('ul.b-sub-catalog__list > li').removeClass('b-sub-catalog__list_active');
        $(this).parent().addClass('b-sub-catalog__list_active');
        return true;
    });
    //slider
    $('.b-slider').slick({
    	dots: true,
    	responsive: 
    		[{
			breakpoint: 1400,
			settings: {
				dots: false,
			}
		}]
    });
});