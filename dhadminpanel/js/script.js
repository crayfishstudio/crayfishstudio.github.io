// When the user scrolls the page, execute myFunction 

window.onscroll = function () {
    myFunction();
    scrollFunction();
};

var bibil = $('.bibilAdd').clone();

var pubTownDiv = $(".pubtown").clone();

// Get the header
var header = document.getElementById("sticky-panel");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function bText() {

    document.body.style.fontSize = "0.975rem";
}

function nText() {

    document.body.style.fontSize = "0.875rem";
}

function sText() {

    document.body.style.fontSize = "0.775rem";
}

var autoExpand = function (field) {

    // Reset field height
    field.style.height = '1rem';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);
//$(".fa-question-circle").hover(
//    function(){
//        $(this).parent().addClass("helper");
//}, function(){
//       setTimeout(function(){
//           $(this).parent().removeClass("helper");
//       }, 3000);
//});
function addPubTownWorkPresentation(){
    $(".pubtown").last().after(pubTownDiv);
};
//$(".addCoAuth").click(function(){
//    var $coAuthTr = $(this).parent().parent().parent().html();
//    console.log($coAuthTr);
//    console.log($("co-auth").html());
//    $(this).parent().parent().parent().after($coAuthTr);
//})
$('.scroll').on('click',function(e) {
  e.preventDefault();
  var offset = 0;
  var target = $(this.getAttribute('href'));
  if ($(this).data('offset') != undefined) offset = $(this).data('offset');
  $('html, body').stop().animate({
    'scrollTop': $(target).offset().top - offset
  }, 500, 'swing', function() {
    // window.location.hash = target;
  });
});

$(document).ready(function () {
    $('body').tooltip({trigger:"click", selector:'[data-toggle="tooltip"]'});
});

$('body').on('change', function(){
    $('.table').tooltip({trigger:"click", selector:'[data-toggle="tooltip"]'});
});
function bibilAdd(){
    $('.bibilAdd').last().after("<div class='thin-line'></div>");
    $('.thin-line').last().after(bibil);
};