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
/*var bh = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
) - Math.min(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
 
var h = screen.height;
//bh=bh-h;
alert(bh);
if (window.innerWidth > 1000) {
    document.getElementById("blestki-l").style.height = bh + "px";
    document.getElementById("vline2").style.height = bh + "px";
} else {
    document.getElementById("blestki-l").style.height = 0;
    document.getElementById("vline2").style.height = 0;
}*/

alert(document.body.offsetHeight);
alert(document.body.scrollHeight);

var bh = (document.body.offsetHeight - document.body.scrollHeight);
alert(bh);
document.getElementById("blestki-l").style.height = bh + "px";
