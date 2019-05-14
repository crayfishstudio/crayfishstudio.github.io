$('.countdown-p').each(function() {
    var countDownDate = new Date($(this).attr("data-time-left")).getTime();

    var now = new Date().getTime();
    var distance = countDownDate - now;
            
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (days < 10) {
        days = "0" + days;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    $(this).find('.days-left').text(days);
    $(this).find('.hours-left').text(hours);
    $(this).find('.minutes-left').text(minutes);
    $(this).find('.seconds-left').text(seconds);
});


$(window).ready(function() {
    $('.countdown-p').each(function() {
        var countDownDate = new Date($(this).attr("data-time-left")).getTime();

        var p = $(this);

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
                    
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (days < 10) {
                days = "0" + days;
            }

            if (hours < 10) {
                hours = "0" + hours;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            p.find('.days-left').text(days);
            p.find('.hours-left').text(hours);
            p.find('.minutes-left').text(minutes);
            p.find('.seconds-left').text(seconds);
              
            if (distance < 0) {
                clearInterval(x);
                p.find('.days-left').text("00");
                p.find('.hours-left').text("00");
                p.find('.minutes-left').text("00");
                p.find('.seconds-left').text("00");
            }
        }, 1000);
    });
});
