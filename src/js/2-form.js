let formData = {                                                  // инициализация объекта для работы с LocalStorage
    email: "",
    message: "",
    changeField(fieldName,value) {                                  // запись поля объекта по его названию
       this[fieldName] = value                              
    },
    clearValues() {                                                 // очистка полей объекта
        this.email = "";
        this.message = "";
    },
    reloadData(evt1,evt2) {
        let obj = {
            email: "",
            message: "",
        }
        obj = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};   // чтение данных с LocalStorage
        evt1.value = obj.email || '';                              // запись данных в поля Input
        evt2.value = obj.message || '';
        this.email = obj.email;                                    // запись данных в поля объекта 
        this.message = obj.message;
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.email.value;
    const message = form.elements.message.value;
  
    if (login.trim() === "" || message.trim() === "") {         // проверка обрезанных input-ов на пустое значение с возвратом алерта 
        return alert("Fill please all fields");
    }

    console.log({email:login, message:message});                // выдача в консоли значений объекта
    form.reset();                                               // очистка формы после submit
    localStorage.removeItem(LOCAL_KEY);                         // удаление ключа локального хранилища
    formData.clearValues();                                 // сброс значений объекта до первоначального
}

function handleInputData(event) {
    formData.changeField(event.target.name,event.target.value);        // замена соответствующего поля объекта по таргету
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));    // запись объекта в локальное хранилище
}
  
const LOCAL_KEY = 'feedback-form-state';                          // инициализация ключа

const feedbackForm = document.querySelector(".feedback-form");    // инициализация объекта формы

const { email, message } = feedbackForm.elements;         // деструктуризируем элементы формы
formData.reloadData(email,message);

feedbackForm.addEventListener("submit", handleSubmit);            // добавление обработчика submit
feedbackForm.addEventListener('input', handleInputData);          // добавление обработчика input