function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const message = form.elements.message.value;
  
  if (login === "" || message === "") {
    return alert("All form fields must be filled in");
  }

  console.log({email:login, message:message});
  form.reset();
}

function handleInputData(event) {
    const form = event.target;
    formData = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
  }

function reloadData() {
    if (formData) {
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
}
  
const LOCAL_KEY = 'feedback-form-state';

let formData = {
    email: "",
    message: "",
}

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("submit", handleSubmit);
feedbackForm.addEventListener('input', handleInputData);

formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = feedbackForm.elements;
reloadData();


