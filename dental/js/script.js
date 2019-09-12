$('.faq__wrapper').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    console.log(i);
    $('.faq-page__current').text('0' + i);
    /*$('.faq-page__slides').text('0' + slick.slideCount);*/
});


function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $('.slick-slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css('opacity', 1);
    });
    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0);
    $(visibleSlides).last().next().css('opacity', 0);
}
  
  $(setSlideVisibility());
  
$('.adr__slider').on('beforeChange', function() {
    $('.slick-slide').each(function() {
        $(this).css('opacity', 1);
    });
});
  
$('.adr__slider').on('afterChange', function() {
    setSlideVisibility();
});