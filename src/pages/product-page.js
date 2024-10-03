import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import IMask from 'imask';

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

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const phoneInput = document.querySelector('.js-phone-input');

const swiper = new Swiper('.swiper', swiperOption);
const mask = IMask(phoneInput, maskOptions);