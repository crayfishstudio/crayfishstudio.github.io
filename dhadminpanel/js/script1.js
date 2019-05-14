// When the user scrolls the page, execute myFunction 

window.onscroll = function () {
    scrollFunction();
};

var newCoAuthRowPer = '<div class="row"><div class="col-1"><input class="form-control" data-toggle="tooltip" data-placement="right" data-offset="20" title="Вкажіть порядковий номер для відображення"></div><div class="col-4 pl-5"><div class="form-group"><input list="co-auth-p" class="form-control"><datalist  id="co-auth-p"><option>Lorem</option><option>Ipsum</option></datalist></div></div><div class="col-1 px-0"><input type="checkbox" id="customControlAutosizing" checked><a href="#" onclick="saveShow()"><i class="ml-2 far fa-lg fa-save"></i></a><a href="#"><i class="fas fa-times ml-2 fa-lg"></i></a><span class="ml-2" data-toggle="tooltip" data-html="true" data-offset="20" data-placement="right" title="Тут текст підказки"><i class="far fa-lg fa-question-circle"></i></span></div><div class="col-1 pl-0"><div class="icons no-gutters"><span class="th-name">Співавтори<br>(організації)</span><a href="#" class="addCoAuthOrg"><i class="fas ml-2 fa-lg addinput fa-plus-circle"></i></a></div></div><div class="col-4"><div class="form-group"><input list="co-auth-o" class="form-control"><datalist  id="co-auth-o"><option>Lorem</option><option>Ipsum</option></datalist></div></div><div class="col-1 px-0"><input type="checkbox" id="customControlAutosizing" checked><a href="#" onclick="saveShow()"><i class="ml-2 far fa-lg fa-save"></i></a><a href="#"><i class="fas fa-times ml-2 fa-lg"></i></a><span class="ml-2" data-toggle="tooltip" data-html="true" data-offset="20, 5" data-placement="bottom" title="Тут текст підказки"><i class="far fa-lg fa-question-circle"></i></span></div></div>';

var newCoAuthRowOrg = '<div class="row"><div class="col-1"><div class="icons no-gutters"> <span class="th-name">Співавтори (особи)</span><a href="#" class="addCoAuthPer"><i class="fas ml-2 fa-lg addinput fa-plus-circle"></i></a></div></div><div class="col-4 pl-5"><div class="form-group"><input list="co-auth-p" class="form-control"><datalist  id="co-auth-p"><option>Lorem</option><option>Ipsum</option></datalist></div></div><div class="col-1 px-0"><input type="checkbox" id="customControlAutosizing" checked><a href="#" onclick="saveShow()"><i class="ml-2 far fa-lg fa-save"></i></a><a href="#"><i class="fas fa-times ml-2 fa-lg"></i></a><span class="ml-2" data-toggle="tooltip" data-html="true" data-offset="20" data-placement="right" title="Тут текст підказки"><i class="far fa-lg fa-question-circle"></i></span></div><div class="col-1 pl-0"><input class="form-control" data-toggle="tooltip" data-placement="right" data-offset="20" title="Вкажіть порядковий номер для відображення"></div><div class="col-4"><div class="form-group"><input list="co-auth-o" class="form-control"><datalist  id="co-auth-o"><option>Lorem</option><option>Ipsum</option></datalist></div></div><div class="col-1 px-0"><input type="checkbox" id="customControlAutosizing" checked><a href="#" onclick="saveShow()"><i class="ml-2 far fa-lg fa-save"></i></a><a href="#"><i class="fas fa-times ml-2 fa-lg"></i></a><span class="ml-2" data-toggle="tooltip" data-html="true" data-offset="20, 5" data-placement="bottom" title="Тут текст підказки"><i class="far fa-lg fa-question-circle"></i></span></div></div>';

var bibil = $('.bibilAdd').clone();

var pubTownDiv = $(".pubtown").clone();

// Get the header


// Get the offset position of the navbar


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

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
$(".addCoAuthPer").click(function(){ 
   $(".addCoAuthPer").last().parent().parent().parent().after(newCoAuthRowPer);
});
$(".addCoAuthOrg").click(function(){ 
   $(".addCoAuthOrg").last().parent().parent().parent().after(newCoAuthRowOrg);
});
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
    $('body').tooltip({trigger:"click hover", selector:'[data-toggle="tooltip"]'});
});

$('body').on('change', function(){
    $('.table').tooltip({trigger:"click hover", selector:'[data-toggle="tooltip"]'});
});
function bibilAdd(){
    $('.bibilAdd').last().after("<div class='thin-line'></div>");
    $('.thin-line').last().after(bibil);
};
  $(function() {
    $('.teditor').froalaEditor()
  });