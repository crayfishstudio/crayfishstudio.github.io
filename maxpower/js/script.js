$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    $('.main-slider-class').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    $('#footer-form-phone').mask('+00 (000) 000 0000');
});


function burgerToggle() {
    document.getElementById('burger-toggler').classList.toggle('closed');
    document.getElementById('top-nav-links').classList.toggle('opened');
    document.getElementById('body').classList.toggle('burger-open');
}

function showSubs(thisID) {
    document.getElementById('shoes-subcategories').style.display = 'none';
    document.getElementById('clothes-subcategories').style.display = 'none';
    document.getElementById('equipment-subcategories').style.display = 'none';
    document.getElementById('accessories-subcategories').style.display = 'none';
    document.getElementById('sport-subcategories').style.display = 'none';
    document.getElementById('brands-subcategories').style.display = 'none';

    document.getElementById('nav-subcategories').style.display = 'block';
    document.getElementById(thisID + '-subcategories').style.display = 'flex';
}

function closeNavSubs() {
    document.getElementById('nav-subcategories').style.display = 'none';
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    $('#footer-form-phone').mask('+00 (000) 000 0000');

    $('.block').click(function() {
        $(this).find('.info').slideToggle(500);

        if ($(this).hasClass('active-block')) {
            $(this).removeClass('active-block');
        } else {
            $(this).addClass('active-block');
        }
      });

    $('.input-popup').click(function(event) {
        if (event.target.className == "input-popup-arrow") {
            if ($(this).hasClass('input-popup-active')) {
                $(this).removeClass('input-popup-active');

                $(this).parent().find('.input-popup-content').find('.label-2').each(function() {
                    if ($(this).find('input').prop("checked") == true) {
                        $(this).find('input').prop("checked", false);
                    }
                });

                $(this).find('span').text("");

                $(this).parent().find("#number_btn").removeClass("button-active");
                $(this).parent().find("#min-range-number").prop("disabled", true);
                $(this).parent().find("#max-range-number").prop("disabled", true);

            } else {
                $('.input-popup').not($(this)).each(function() {
                    if ($(this).hasClass('input-popup-open')) {
                        if (!$(this).is("#filter")) {
                            $(this).removeClass('input-popup-open');
                            $(this).parent().find('.input-popup-content').fadeToggle(300);
                        }
                    }
                });

                if ($(this).hasClass('input-popup-open')) {
                    $(this).removeClass('input-popup-open');
                } else {
                    $(this).addClass('input-popup-open');
                }

                $(this).parent().find('.input-popup-content').fadeToggle(300);
            }

        } else {
            $('.input-popup').not($(this)).each(function() {
                if ($(this).hasClass('input-popup-open')) {
                    if (!$(this).is("#filter")) {
                        $(this).removeClass('input-popup-open');
                        $(this).parent().find('.input-popup-content').fadeToggle(300);
                    }
                }
            });

            if ($(this).hasClass('input-popup-open')) {
                $(this).removeClass('input-popup-open');
            } else {
                $(this).addClass('input-popup-open');
            }

            $(this).parent().find('.input-popup-content').fadeToggle(300);
        }
    });


    $('.input-popup-content').find('p').click(function() {
        var radio = "";
        $('.input-popup-radio').find('p').text($(this).text());

        radio += $(this).attr("to");
        $(radio).prop('checked', true);     
    });

    $('.checkmark').click(function() {
        $(this).parent().find('input').prop("checked", true);
    });

    $('.label').click(function() {
        if ($(this).find('input').prop("checked") == true) {
            $(this).find('input').prop("checked", false);
        } else {
            $(this).find('input').prop("checked", true);
        }

        var n = 0;

        $(this).parent().find('.label-2').each(function() {
            if ($(this).find('input').prop("checked") == true) {
                if (n == 0) {
                    n = 1;
                }
            }
        });

        if (n == 1) {
            $(this).parent().parent().find('.input-popup').addClass('input-popup-active');
        } else {
            $(this).parent().parent().find('.input-popup').removeClass('input-popup-active');
        }        
    });

    $('.radio-popup').click(function() {
        $(this).fadeToggle(300);
        $(this).parent().find('.input-popup').removeClass('input-popup-open');
    });


    $('#filter').click(function() {
        var n = 0;
        $(this).parent().parent().find('.col-xl-2').each(function() {
            if (n == 1) {
                $(this).slideToggle(300);
            }

            n = 1;
        });
    });

    $('.remove-item').click(function() {
        $(this).parent().parent().remove();
    });

    $('#cart-img').click(function() {
        $('.cart-popup').fadeToggle(300);
    });
});