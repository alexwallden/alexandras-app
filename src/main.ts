import './scss/style.scss';
import { createFormHtml } from './ts/signUp';
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperElement = document.querySelector('.swiper') as HTMLElement;
const swiper = new Swiper(swiperElement, {
  modules: [Navigation, Pagination],
});

const menuBtn = document.querySelector('#menu-button') as HTMLButtonElement;
menuBtn.addEventListener('click', openMenu);

function openMenu() {
  const openMenu = document.querySelector('#open-menu');
  if (openMenu?.classList.contains('display-none')) {
    openMenu?.classList.remove('display-none');
  } else if (!openMenu?.classList.contains('display-none')) {
    openMenu?.classList.add('display-none');
  }
}
createFormHtml();
