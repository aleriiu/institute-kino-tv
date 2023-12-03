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