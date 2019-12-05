(function ($) {
// Mobile swipe if more than 5 pixels moved
$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $(this).carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});

// Mouse swipe when mouse is dragged to left/right
var xClick;
var mouseDown;

$(".carousel").on("mousedown", function (event) {
    xClick = event.pageX;
    mouseDown = true;
});

$(".carousel").on("mousemove", function (event) {
    if (mouseDown) {
        var xMove = event.pageX;
        if (xClick > xMove) {
            $(this).carousel('next');
        }
        else if (xClick < xMove) {
            $(this).carousel('prev');
        }
    }
});

$(".carousel").on("mouseup", function (event) {
    mouseDown = false;
});
})(jQuery);