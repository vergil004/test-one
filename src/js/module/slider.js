const Swiper = require('../vendor/swiper');
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView:2,
  spaceBetween:42,
  breakpoints:{
    320:{
      slidesPerView:1
    },
    767:{
      slidesPerView:2
    }
  },

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

module.exports = swiper