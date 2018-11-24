var lastScrollTop = 5;
document.getElementById("menuToggle").classList.remove("hided");
$(window).on('scroll', function() {
    st = $(this).scrollTop();
    if(st < lastScrollTop) {
        document.getElementById("menuToggle").classList.remove("hided");
    }
    else {
        document.getElementById("menuToggle").classList.add("hided");
    }
    lastScrollTop = st;
});


$('a').click(function(){
    $('html, body').animate({
     scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
});

function hideNav() {
    document.querySelector('.navbar-toggler').click();
}