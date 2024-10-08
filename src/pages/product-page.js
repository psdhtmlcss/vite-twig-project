import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import IMask from 'imask';
import Collapse from 'bootstrap/js/dist/collapse';

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

// const maskOptions = {
//   mask: '+{7}(000)000-00-00'
// };

// const phoneInput = document.querySelector('.js-phone-input');

const swiper = new Swiper('.swiper', swiperOption);
// const mask = IMask(phoneInput, maskOptions);

const tables = document.querySelectorAll('.accordion .table');
for (let i = 0; i < tables.length; i++) {
  let wrapper = document.createElement('div');
  let parent = tables[i].parentElement;
  wrapper.classList.add('table-wrapper');
  wrapper.prepend(tables[i]);
  parent.prepend(wrapper);
}

