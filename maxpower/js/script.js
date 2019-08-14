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
});