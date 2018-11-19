// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction();scrollFunction()};

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
function bText(){
    console.log(document.body.style.fontSize);

    document.body.style.fontSize="larger";
    console.log(document.body.style.fontSize);
}
function nText(){
    console.log(document.body.style.fontSize);

    document.body.style.fontSize="medium";
    console.log(document.body.style.fontSize);
}
function sText(){
    console.log(document.body.style.fontSize);

    document.body.style.fontSize="smaller";
    console.log(document.body.style.fontSize);
}
