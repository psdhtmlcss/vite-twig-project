const links = Array.from(document.querySelectorAll('.js-back'));

const url = window.location.href;
const path = new URL(url).pathname;
const regexp = new RegExp(/\/\w+([-]\w+)*$/g);
const newpath = path.replace(regexp, '');
if (newpath.length) {
  links.forEach((link) => {
    link.href = newpath;
  })
} else {
  links.forEach((link) => {
    link.href = path;
  })
}