function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const message = form.elements.message.value;
  
  if (login.trim() === "" || message.trim() === "") {             // проверка обрезанных input-ов на пустое значение с возвратом алерта 
    return alert("Fill please all fields");
  }

  console.log({email:login, message:message});                    // выдача в консоли значений объекта
  form.reset();                                                   // очистка формы после submit
  localStorage.removeItem(LOCAL_KEY);                             // удаление ключа локального хранилища
}

function handleInputData(event) {
    const form = event.target;
    formData[`${event.target.name}`] = event.target.value;      // замена соответствующего поля объекта по таргету
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));    // запись объекта в локальное хранилище
  }

function reloadData() {                                                   // первоначальная инициализация полей формы
  formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};   // чтение данных с LocalStorage
  email.value = formData.email || '';                                     // запись данных в поля Input
  message.value = formData.message || '';
}
  
const LOCAL_KEY = 'feedback-form-state';                          // инициализация ключа

let formData = {                                                  // инициализация объекта для работы с LocalStorage
    email: "",
    message: "",
}

const feedbackForm = document.querySelector(".feedback-form");    // инициализация объекта формы
feedbackForm.addEventListener("submit", handleSubmit);            // добавление обработчика submit
feedbackForm.addEventListener('input', handleInputData);          // добавление обработчика input

const { email, message } = feedbackForm.elements;                 // деструктуризируем элементы формы
reloadData();


