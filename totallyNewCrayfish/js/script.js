var phoneMask = IMask(
    document.getElementById('phone_us'), {
        mask: '+{38}(000)000-00-00'
    });

var phoneMask = IMask(
    document.getElementById('footer-phone'), {
        mask: '+{38}(000)000-00-00'
    });

var phoneMask = IMask(
    document.getElementById('footer-phone-survey'), {
        mask: '+{38}(000)000-00-00'
    });

var svgList = document.getElementsByClassName("logo-svg-element");    

function classToggle() {
    document.getElementById('hamburger').classList.toggle('chrested');

    for (i = 0; i < svgList.length; i++) {
        svgList[i].classList.toggle('logo-svg-element-white');
    }
}

document.querySelector('#hamburger').addEventListener('click', classToggle);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-120
    }, 900);
});