$(document).ready(function(){
    $('.slickCarousel').slick({
        accessibility: true,
        autoplay: true,
        arrows: true,
        nextArrow: $('#right-arrow'),
        prevArrow: $('#left-arrow'),
        autoplaySpeed: 30000,
        adaptiveHeight: true
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
$(document).ready(function() {
  var maxHeight = -1;

  $('.card').each(function() {
    maxHeight = maxHeight > $(this).height() ? maxHeight :     $(this).height();
 });

 $('.card').each(function() {
   $(this).height(maxHeight);
 });
});
//$(document).ready($('#blestki-l').height($('body').height()-$(window).height()));
//$(document).ready($('#blestki-r').height($('body').height()-$(window).height()));
//$('#blestki-l').height($('body').height()-$(window).height());
//$('#blestki-r').height($('body').height()-$(window).height());
$(document).ready(function(){
<<<<<<< HEAD
    if ($(window).width() > 768){
=======
    if($(window).width() > 768){
>>>>>>> 409e168eb31f59a82dc34285a1edf5386752faf5
        var vh = $('.fullsize-bg').height();
        var lh = $('body').height();
        var nh = $('.navbar').height();
        var fh = lh - vh + nh;
        $('#blestki-r').height(fh);
        $('#blestki-l').height(fh);
    }
});

function bodyResize(){
    if($(window).width() > 768){
        var vh = $('.fullsize-bg').height();
        var lh = $('body').height();
        var nh = $('.navbar').height();
        var fh = lh - vh + nh;
        $('#blestki-r').height(fh);
        $('#blestki-l').height(fh);
    }
};


