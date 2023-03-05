import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea');
const input = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populatemessage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onmessageInput, 500));

function onmessageInput() {
  // formData[e.target.name] = e.target.value; Видаляє іньше поле після перезавантаження
  const formData = { email: input.value, message: message.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populatemessage() {
  const savedDataForm = localStorage.getItem(STORAGE_KEY);
  const parsSavedDataForm = JSON.parse(savedDataForm);

  if (savedDataForm) {
    input.value = parsSavedDataForm.email;
    message.value = parsSavedDataForm.message;
  }
}
