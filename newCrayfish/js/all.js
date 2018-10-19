$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

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

$(document).ready(function(){
  $('.first-lane').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      cssEase: "cubic-bezier(0.77,0.2,0.05,1.0)",
      speed: 1000,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true
  });
    $('.second-lane').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      cssEase: "cubic-bezier(0.77,0.2,0.05,1.0)",
      speed: 1000,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true
  });
    
    $('.third-lane').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      cssEase: "cubic-bezier(0.77,0.2,0.05,1.0)",
      speed: 1000,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true
  });
});

/*$(document).ready(setTimeout(
    function(){
    $('.second-lane').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      cssEase: "cubic-bezier(0.77,0.2,0.05,1.0)",
      speed: 1000,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true
  });
}, 5000 ));*/