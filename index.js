// 1, 2

document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelector('[data-modal-open]');
    const closeModalButton = document.querySelector('[data-modal-close]');
    const backdrop = document.querySelector('.js-backdrop');
    const body = document.body;

    openModalButton.addEventListener('click', () => {
        body.classList.add('show-modal');
    });

    closeModalButton.addEventListener('click', () => {
        body.classList.remove('show-modal');
    });

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            body.classList.remove('show-modal');
        }
    });
});

// 3

const radioElements = document.querySelectorAll('input[name="color"]');
    
radioElements.forEach(radio => {
  radio.addEventListener('change', () => {
    document.body.style.backgroundColor = radio.value;
  });
});

// 4
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value === '' ? 'незнайомець' : nameInput.value;
});


const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.length;

  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

// 5

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = fontSizeControl.value + 'px';
});

text.style.fontSize = fontSizeControl.value + 'px';