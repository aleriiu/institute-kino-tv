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

const accordionItemHeaders = document.querySelectorAll("#nav-item");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("mouseenter", event => {

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

const accordionItemHeadersMob = document.querySelectorAll("#nav-item-mob");

accordionItemHeadersMob.forEach(accordionItemHeader => {
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

// mouse 

let mouseDown = false;
let startX, scrollLeft;
const slider = document.getElementById('videos');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);