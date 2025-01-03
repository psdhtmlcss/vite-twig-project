import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Collapse from 'bootstrap/js/dist/collapse';
import '@/utils/back-catalog';

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

const swiper = new Swiper('.swiper', swiperOption);

const table = document.querySelector('.table');
if (table) {
  let wrapper = document.createElement('div');
  let parent = table.parentElement;
  wrapper.classList.add('table-wrapper');
  wrapper.prepend(table);
  parent.prepend(wrapper);
}


