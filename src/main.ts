import './style.scss'

const menuBtn = document.querySelector('#menu-button') as HTMLButtonElement;
menuBtn.addEventListener('click', openMenu);

function openMenu() {
    const openMenu = document.querySelector('#open-menu')
    if (openMenu?.classList.contains('display-none')) {
        openMenu?.classList.remove('display-none')
    } else if (!openMenu?.classList.contains('display-none')) {
        openMenu?.classList.add('display-none')
    }


}