import IMask from 'imask';
import Modal from 'bootstrap/js/dist/modal';
import '../components/header/header.js';
import '../components/products-nav/products-nav.js';

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const phoneInput = document.querySelector('.js-phone-input');
const mask = IMask(phoneInput, maskOptions);

