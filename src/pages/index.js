import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const swiperOption = {
  modules: [Pagination, Autoplay],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      speed: 400,
    },
    768: {
      speed: 600,
    },
    1024: {
      speed: 1000
    }
  }
};

const swiper = new Swiper('.js-main-slider', swiperOption);