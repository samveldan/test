import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./scss/styles.scss";

// Swiper
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    // If we need pagination
    pagination: {
      el: '.slider__controlls-dots',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
        1040: {
            slidesPerView: 4,
        },
        550: {
            slidesPerView: 3,
        },
        380: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
  });

// Burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
});