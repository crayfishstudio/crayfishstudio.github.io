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
    
});

$(window).resize(function(){
    ($('.types').height($('.card-body').height()))
});