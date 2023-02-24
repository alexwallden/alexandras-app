import { Person } from './models/Person';

const adminModal = document.querySelector('#section__admin') as HTMLElement;

const closeButton = document.querySelector('#section__admin_controls button') as HTMLButtonElement;

let adminModalOpen = true;

export const toggleAdminModal = () => {
  adminModalOpen = !adminModalOpen;

  if (!adminModalOpen) {
    adminModal.classList.add('section__admin-slide');
  } else {
    adminModal.classList.remove('section__admin-slide');
  }

  const adminInner = document.querySelector('#section__admin_stuff') as HTMLElement;

  const savedData = JSON.parse(localStorage.getItem('savedData') || '[]') as Person[];

  adminInner.innerHTML = '';

  if (savedData.length > 0) {
    savedData.map((item) => {
      const createdItem = document.createElement('div');
      const createdName = document.createElement('p');
      const createdAdres = document.createElement('p');

      createdName.innerHTML = `Namn: ${item.name}`;
      createdAdres.innerHTML = `Adress: ${item.address}`;

      createdItem.appendChild(createdName);
      createdItem.appendChild(createdAdres);
      adminInner.appendChild(createdItem);
    });
  }
};

closeButton.addEventListener('click', toggleAdminModal);
