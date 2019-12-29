let socialBlock = document.querySelector(".social");
let socialLink = document.querySelectorAll(".social__link");

let anchorsArr = ['#home', '#blade-style', '#blade-finish', '#handle', '#size', '#generate', '#final', '#mail', '#devby'];

let dynamic = () => {
    if (window.location.hash == anchorsArr[0]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 1;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[1]) {
        setTimeout(openModal, 2000);
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[2]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[3]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[4]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[5]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0s linear 0s";
            el.style.opacity = 0;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[7]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0s linear 0s";
            el.style.opacity = 0;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[6]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[8]) {
        socialLink.forEach(el => {
            el.style.transition = "opacity 0.5s linear 0s";
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 0;
    }

}


/*
let dynamicMobile = () => {
    if(document.documentElement.clientWidth <= 768) {
        if(window.location.hash != anchorsArr[7]) {
            socialBlock.style.flexDirection = "column";
            socialLink.forEach(el => {
                el.style.margin = "0";
            });
        } else {
            socialBlock.style.flexDirection = "row";
            socialLink.forEach(el => {
                el.style.margin = "0 9px";
            });
        }
    }
}

let dynamicMobileWidth = () => {
    if(document.documentElement.clientWidth <= 768) {    
        if(window.location.hash == anchorsArr[5] && window.location.hash == anchorsArr[6]) {
            socialBlock.style.width = "0%";
        } else {
            socialBlock.style.width = "100%";
        }
    }

}*/

let start = () => {
    dynamic();
    /*dynamicMobile();
    dynamicMobileWidth();*/
}

let radioButton = document.querySelectorAll(".section-item__radio");

for (var i = 0; i < radioButton.length; i++) {
    radioButton[i].onclick = function () {
        setTimeout(function () {
            fullpage_api.moveSectionDown();
        }, 200);
    };
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    if (localStorage.modalWasOpened) {
    } else{
        localStorage.modalWasOpened = 1;
        modal.style.display = "block";
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}