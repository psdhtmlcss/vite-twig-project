import { header, headerNav } from "../../../variables";

const closeButton = header.querySelector('.js-close-button');

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  headerNav.classList.remove('open');
};

closeButton.addEventListener('click', onCloseButtonClick);