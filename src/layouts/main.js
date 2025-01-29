import IMask from 'imask';
import Modal from 'bootstrap/js/dist/modal';
import '../components/header/header.js';
import '../components/products-nav/products-nav.js';

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

// Envybox
 const Envy = {
  CSS: '<link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css">',
  SCRIPT: '<script type="text/javascript" src="https://cdn.envybox.io/widget/cbk.js?wcb_code=1ea8163ad43792f2a6f7d35027feee07" charset="UTF-8" async></script>',
  LINK: '<a href="#callbackwidget">Заказать звонок</a>'
}

const phoneInput = document.querySelector('.js-phone-input');
const feedbackModalElement = document.getElementById('feedbackModal');

let mask;

if (phoneInput) {
  mask = IMask(phoneInput, maskOptions);
}

if (screen.width > 1024) {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', Envy.CSS);
  body.insertAdjacentHTML('beforeend', Envy.SCRIPT);
}

feedbackModalElement.addEventListener('show.bs.modal', evt => {
  let heading = feedbackModalElement.querySelector('.modal-title');
  heading.textContent = evt.relatedTarget.innerText;
})

feedbackModalElement.addEventListener('shown.bs.modal', evt => {
  phoneInput.focus();
})


