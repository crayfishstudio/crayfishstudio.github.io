var lastScrollTop = 0;
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