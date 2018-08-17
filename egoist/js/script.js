$(document).ready(function(){
    $('.slickCarousel').slick({
        accessibility: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 30000
    });
    ($('.types').height($('.card-body').height()));
    
});

$(window).resize(function(){
    ($('.types').height($('.card-body').height()))
});