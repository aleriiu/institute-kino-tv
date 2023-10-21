'use strict';

// banner

let imgs = document.querySelectorAll('.banner-link');
let dots = document.querySelectorAll('.hero__btn-click');

let totalImgs = imgs.length;
let imgPosition = 0;

// Update Position
function updatePosition() {
    //Images
    for (let i = 0; i < totalImgs; i++) {
        if (i === imgPosition) {
            imgs[i].classList.remove('img-hidden');
        } else {
            imgs[i].classList.add('img-hidden');
        }

    }
    //Dots
    for (let i = 0; i < dots.length; i++) {
        if (i === imgPosition) {
            dots[i].classList.add("btn-active");
        } else {
            dots[i].classList.remove('btn-active');
        }

    }

}


// Dot Position
dots.forEach((dot, dotPosition) => {
    dot.addEventListener("click", () => {
        imgPosition = dotPosition
        updatePosition()
    })
})

setInterval(function () {
    if (imgPosition === totalImgs - 1) {
        imgPosition = 0;
    } else {
        imgPosition++;
    }
    updatePosition();
}, 5000)



// accordion

const accordionItemHeaders = document.querySelectorAll(".header__nav-item");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.querySelector(".menu-wrapper");
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = "50vh";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});
