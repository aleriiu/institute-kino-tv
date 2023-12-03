'use strict'

// modal window 

const closeBtn = document.querySelector('#close');
const modalMenu = document.querySelector('#modal_menu__wrapper');
const mobMenu = document.querySelector('#mob-menu');

mobMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalMenu.style.display = 'none';
})

const closeBtnNav = document.querySelector('#close-btn');
const modalMenuMain = document.querySelector('#main-modal_menu__wrapper');
const mobMenuMain = document.querySelector('#main-mob-menu');

mobMenuMain.addEventListener('click', () => {
    modalMenuMain.style.display = 'flex';
});

closeBtnNav.addEventListener('click', () => {
    modalMenuMain.style.display = 'none';
})