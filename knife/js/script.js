let socialBlock = document.querySelector(".social");
let socialLink = document.querySelectorAll(".social__link");

let anchorsArr = ['#home', '#blade-style', '#blade-finish', '#handle', '#size', '#generate', '#mail', '#info', '#devby'];

function hideSocial() {
    socialBlock.style.display = 'none';
}

function showSocial() {
    socialBlock.style.display = 'flex';
}

let dynamic = () => {
    if (window.location.hash == anchorsArr[0]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 1;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[1]) {
        setTimeout(openModal, 2000);
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[2]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[3]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[4]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[5]) {
        socialLink.forEach(el => {
            el.style.opacity = 0;
        });
        showSocial()
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[6]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[7]) {
        socialLink.forEach(el => {
            el.style.opacity = 0;
        });
        setTimeout(hideSocial, 500);
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[8]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = 1;

    } else if (window.location.hash == anchorsArr[9]) {
        showSocial()
        socialLink.forEach(el => {
            el.style.opacity = 0.5;
        });
        socialBlock.style.zIndex = '-5';
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
var span = document.getElementById("closeModal")

function openModal() {
    if (localStorage.modalWasOpened) {} else {
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

function openEmailModal() {
    emailModal.style.display = "block";
    console.log('openEmailModal');
}

window.onclick = function (event) {
    if (event.target == emailModal) {
        emailModal.style.display = "none";
    }
}

