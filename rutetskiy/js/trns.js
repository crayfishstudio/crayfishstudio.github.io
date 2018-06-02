function goToPage(a) {
    document.body.style.opacity = 0;
    setTimeout(function(){window.location.href = a;}, 500); 
}

function loadAnim() {

    document.getElementById("layer-1").style.width = 0;
    document.getElementById("layer-2").style.width = 0;
    document.getElementById("layer-3").style.width = 0;
    setTimeout('zindexToNull()', 4500);  
}

function zindexToNull() {
    document.getElementById("loader").style.zIndex = 0;
}