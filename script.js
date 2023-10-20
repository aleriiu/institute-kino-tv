'use strict'

// const btnOne = document.getElementById('btn-one');
// const btnTwo = document.getElementById('btn-two');
// const btnThree = document.getElementById('btn-three');
// const btnFour = document.getElementById('btn-four');

// btnTwo.addEventListener('click', (event) => {

//     btnTwo.classList.add("active");

// });

// btnThree.addEventListener('click', (event) => {

//     btnThree.classList.add("active");
    
// });

// btnFour.addEventListener('click', (event) => {

//     btnFour.classList.add("active");
    
// });

// btnOne.addEventListener('click', (event) => {

//     btnOne.classList.add("active");
    
// });

const imgContainer = document.querySelector('.image-container')
const dotsContainer = document.querySelector('.hero__btn')


document.getElementById('btn-one').addEventListener('click', ()=>{
    imgContainer.className = 'image-container first-active'
    dotsContainer.className = 'hero__btn first-current'
})
document.getElementById('btn-two').addEventListener('click', ()=>{
    imgContainer.className = 'image-container second-active'
    dotsContainer.className = 'hero__btn second-current'
})
document.getElementById('btn-three').addEventListener('click', ()=>{
    imgContainer.className = 'image-container third-active'
    dotsContainer.className = 'hero__btn third-current'
})

document.getElementById('btn-four').addEventListener('click', ()=>{
    imgContainer.className = 'image-container four-active'
    dotsContainer.className = 'hero__btn four-current'
})


