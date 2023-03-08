import throttle from 'lodash.throttle';

const DATA_FROM_STORAGE = 'form-field';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {};

loadData();

refs.form.addEventListener('submit', handleFormSubmit);

refs.form.addEventListener('input', throttle(handleInputChange, 500));
function handleInputChange(e) {
  const { name, value } = e.target;

  formData[name] = value;

  const dataString = JSON.stringify(formData);
  localStorage.setItem(DATA_FROM_STORAGE, dataString);
}

function loadData() {
  const loadData = JSON.parse(localStorage.getItem(DATA_FROM_STORAGE));
  if (loadData) {
    const { email, message } = refs.form.elements;
    email.value = loadData.email || '';
    message.value = loadData.message || '';
    formData = loadData;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  console.log(formData);

  localStorage.removeItem(DATA_FROM_STORAGE);

  e.target.reset();
}
