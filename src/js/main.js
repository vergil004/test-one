const slider = require("./module/slider")

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__hide');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    body.classList.toggle('overflow');
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__hide--active');
})