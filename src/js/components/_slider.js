import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

let options = {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  pagination: {
    el: '.slider__pagination',
  },
  navigation: {
    prevEl: '.slider__arrow--prev',
    nextEl: '.slider__arrow--next',
  },
};

const swiperDiscover = new Swiper('.slider', options);