import { header, headerNav } from '../../../variables';

const mobileMenuButton = header.querySelector('.js-mobile-menu-button');

const onMobileMenuButtonClick = (evt) => {
  evt.preventDefault();
  headerNav.classList.add('open');
};

mobileMenuButton.addEventListener('click', onMobileMenuButtonClick);