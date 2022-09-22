const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const msgContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Você não preencheu todos os campos';
    message.style.color = 'red';
    msgContainer.style.borderColor = 'red';
  }
}

function processFormData(e) {
  e.preventDefault();

  validateForm();

}

form.addEventListener('submit', processFormData);