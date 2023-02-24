import './scss/style.scss';
import { toggleAdminModal } from './ts/admin';
import { createFormHtml } from './ts/signUp';

const adminBtn = document.querySelector('#adminButton') as HTMLButtonElement;

adminBtn.addEventListener('click', toggleAdminModal);

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
