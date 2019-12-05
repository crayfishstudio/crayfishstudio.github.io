const divFirst = document.querySelector(".tab-1");
const divSecond = document.querySelector(".tab-2");
const divThird = document.querySelector(".tab-3");

const buttonNext = document.querySelector(".button_narrow");

buttonNext.onclick = () => {
    if(divFirst.classList.contains("active") == true) {
        divFirst.classList.remove("active");
        divThird.classList.remove("active");

        divSecond.classList.add("active");

        divFirst.classList.remove("show");
        divThird.classList.remove("show");

        divSecond.classList.add("show");
    } else if(divSecond.classList.contains("active") == true) {

        divFirst.classList.remove("active");
        divSecond.classList.remove("active");

        divThird.classList.add("active");

        divFirst.classList.remove("show");
        divSecond.classList.remove("show");

        divThird.classList.add("show");
    } else if(divThird.classList.contains("active") == true) {
        divSecond.classList.remove("active");
        divThird.classList.remove("active");

        divFirst.classList.add("active");

        divSecond.classList.remove("show");
        divThird.classList.remove("show");

        divFirst.classList.add("show");
    } else {
        
    }
}
