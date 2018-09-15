$(document).ready(function(){
    $('.slickCarousel').slick({
        accessibility: true,
        autoplay: true,
        adaptiveHeight: true,
        arrows: true,
        nextArrow: $('#right-arrow'),
        prevArrow: $('#left-arrow'),
        autoplaySpeed: 30000
    });
    ($('.types').height($('.card-body').height()));


    if ($(window).width() > 768) {
		$('.drop-phone').each(function() {
			$(this).parent().hover(function() {
				$('.phone-numbers-dropdown').css('display', 'block');
			}, function() {
				$('.phone-numbers-dropdown').css('display', 'none');
			});
		});
	}	
});

$(window).resize(function(){
    ($('.types').height($('.card-body').height()));

    if ($(window).width() > 768) {
		$('.drop-phone').each(function() {
			$(this).parent().hover(function() {
				$('.phone-numbers-dropdown').css('display', 'block');
			}, function() {
				$('.phone-numbers-dropdown').css('display', 'none');
			});
		});
	}	
});

//$(document).ready($('#blestki-l').height($(document).height()-$(window).height()));
//$(document).ready($('#blestki-r').height($('body').height()-$(window).height()));
