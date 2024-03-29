
import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

updaterForm();

function updaterForm() {
  const savedData = localStorage.getItem(KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}

function onFormInput(event) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

const {
		elements : {email, message}
	 } = event.currentTarget;
	 if (email.value === "" || message.value === "") {
		 return alert("Form should`nt be empty");
	 }

	 const formDataToSend = new FormData(event.currentTarget);
	 formDataToSend.forEach((value, name) => {
		formData[name] = value;
	 });
  
	 
  
	 console.log(formData);

	 event.currentTarget.reset();
	 localStorage.removeItem(KEY);
  
  }
