$(document).ready(function(){
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

function bodyResize(){
    if($(window).width() > 768){
        var vh = $('.fullsize-bg').height();
        var lh = $('body').height();
        var nh = $('.navbar').height();
        var fh = lh - vh;
        $('#blestki-r').height(fh);
        $('#blestki-l').height(fh);
    }
}

setTimeout(bodyResize, 5000);