import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextInput()

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextInput() {
  const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   if(userData && Object.values(userData) !== [ ] ) {
    refs.email.value = userData.email;
    refs.message.value = userData.message;
    formData.email = userData.email;
    formData.message = userData.message;
   }
}