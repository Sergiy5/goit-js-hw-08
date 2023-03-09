import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea');
const input = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};



form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onmessageInput, 500));

function onmessageInput() {
  // formData[e.target.name] = e.target.value; Видаляє значення іньшого поля після перезавантаження сторінки
  const formData = { email: input.value, message: message.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Перевірка чи валідний JSON
const chekKey = key => {
  try {
    const savedDataForm = localStorage.getItem(key);
    return savedDataForm === null ? undefined : JSON.parse(savedDataForm);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

// Запис у форму якщо є у Lokal Storage данні
  const chekedDataForm = chekKey(STORAGE_KEY)
  if (chekedDataForm) {
    input.value = chekedDataForm.email;
    message.value = chekedDataForm.message;
};

