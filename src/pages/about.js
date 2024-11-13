import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { ScrollSpy } from 'bootstrap';

const swiperOption = {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
};

const swiper = new Swiper('.js-reviews', swiperOption);