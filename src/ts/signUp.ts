import { Person } from './models/Person';

// function createAndAppendElement(elementToCreate: string, parent: HTMLElement) {
//   const element = document.createElement(elementToCreate);
//   parent.appendChild(element);
//   return element
// }

export function createFormHtml() {
  const savedData = JSON.parse(localStorage.getItem('savedData') || '[]') as Person[];
  const signUpSection = document.getElementById('section__signup') as HTMLElement;
  // const form: HTMLFormElement = createAndAppendElement('form', signUpSection) as HTMLFormElement;
  signUpSection.innerHTML = /*html */ `
  <form>
    <label for='name-input'>
      För- och efternamn:
        <input type='text' name='name-input' id='name-input'>
      </label>
      <label for='address'>
      Adress: 
        <input type='text' name='address' id='address-input'>
      </label>
    </form>
    <div class="btn-container">
      <input type='button' value='Anmäl' id='submit-btn'>
    </div>
    `;

  const submitBtn = document.getElementById('submit-btn');

  submitBtn?.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const addressInput = document.getElementById('address-input') as HTMLInputElement;
    const person = new Person(nameInput.value, addressInput.value);

    if (nameInput.value !== '' && addressInput.value !== '') {
      savedData.push(person);
      localStorage.setItem('savedData', JSON.stringify(savedData));
    }

    nameInput.value = '';
    addressInput.value = '';
  });
}
