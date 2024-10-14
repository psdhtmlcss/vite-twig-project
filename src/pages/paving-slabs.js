import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiperOption = {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazy: true
};

const photos = document.querySelectorAll('.js-photos');
for (let i = 0; i < photos.length; i++) {
  new Swiper(photos[i], swiperOption);
}