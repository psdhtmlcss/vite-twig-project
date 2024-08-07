import { header, productsNav } from '../../../variables';

const productsMenuButton = header.querySelector('.js-products-menu-button');

const onProductsMenuButtonClick = (evt) => {
  evt.preventDefault();
  if (productsNav) {
    productsNav.classList.add('open');
  }
};

productsMenuButton.addEventListener('click', onProductsMenuButtonClick);

