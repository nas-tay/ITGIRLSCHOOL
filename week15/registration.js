let btnSubmit, userName, lastName, accountName, password, errorMessage1, errorMessage2, errorMessage3, errorMessage4, errorMessage5, passwordRepeat; //Объявляем переменные

function getElements() { //Присваиваем значения переменным
    btnSubmit = document.querySelector('.btn-submit');
    userName = document.querySelector('#name');
    lastName = document.querySelector('#lastName');
    accountName = document.querySelector('#accountName');
    password = document.querySelector('#exampleInputPassword1');
    passwordRepeat = document.querySelector('.passwordRepeat');
    errorMessage1 = document.querySelector(".errorMessage_1");
    errorMessage2 = document.querySelector(".errorMessage_2");
    errorMessage3 = document.querySelector(".errorMessage_3");
    errorMessage4 = document.querySelector(".errorMessage_4");
    errorMessage5 = document.querySelector(".errorMessage_5");
    return
}

function check() {
    getElements(); //Вызываем переменные
    errorMessage1.innerHTML = ""; 
    errorMessage2.innerHTML = "";
    errorMessage3.innerHTML = "";
    errorMessage4.innerHTML = "";
    errorMessage5.innerHTML = "";
    userName.classList.remove("input-border");
    lastName.classList.remove("input-border");
    accountName.classList.remove("input-border");
    password.classList.remove("input-border");
    errorMessage1.classList.remove("errorMessage");
    errorMessage2.classList.remove("errorMessage");
    errorMessage3.classList.remove("errorMessage");
    accountName.classList.remove("accountCheck");
    accountName.classList.add("accountName");
    passwordRepeat.classList.remove("input-border"); //19-32 строки - обнуляем то, что вызывается при ошибке
    let userCheck, lastNameCheck, accountNameCheck, passwordCheck;

    if (userName.value == ''){ //Проверка поля "Имя"
        userName.classList.add("input-border"); //появляется красная обводка для поля "Имя"
        errorMessage1.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите имя</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    else {
        userCheck = true;
    }

    if (lastName.value == ''){ //Проверка поля "Фамилия"
        lastName.classList.add("input-border"); //появляется красная обводка для поля "Фамилия"
        errorMessage1.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите фамилию</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    else {
        lastNameCheck = true;
    }

    if(userName.value == '' && lastName.value == '') { //Проверка если оба поля "Имя" и "Фамилия" не заполнены
        errorMessage1.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Введите имя и фамилию</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    if(accountName.value == '') { //Проверка поля "Имя пользователя"(email)
        errorMessage2.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите адрес Gmail</span>`;//Сообщение об ошибке
        accountName.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_1").innerHTML = ""; 
        errorMessage2.classList.add("errorMessage"); //Стили для сообщения об ошибке
        accountName.classList.add("accountCheck"); //Добавляется больший margin для поля email
        accountName.classList.remove("accountName"); //Убирается меньший margin для поля email
    }

    else if(accountNameTest(accountName)) { //Проверка введенного имени
        accountNameCheck = true;
    } //Если имя введено верно, ничего не выводится

    else{
        errorMessage3.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Имя пользователя может включать латинские буквы (a-z), цифры (0-9) и точку (.).</span>`;//Сообщение об ошибке
        errorMessage3.classList.add("errorMessage"); //Стили для сообщения об ошибке
        document.querySelector(".details_1").innerHTML = "";  
    }

    if(password.value == '') { //Проверка поля "Пароль"
        errorMessage4.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Введите пароль</span>`;
        password.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage4.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    else if(password.value.length < 8) {
        errorMessage4.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Пароль не может быть короче 8 символов</span>`;
        passwordRepeat.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage4.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    else if(password.value != passwordRepeat.value) {
        errorMessage5.innerHTML = 
        `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Пароли не совпадают. Повторите попытку.</span>`;
        passwordRepeat.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage5.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    else {
        passwordCheck = true;
    }

    if(userCheck == true && lastNameCheck == true && accountNameCheck == true && passwordCheck == true){
        alert(`Добро пожаловать, ${userName.value}!`);
    }

}

getElements(); //Вызываем переменные

function accountNameTest(accountName) { //Проверка введенного имени пользователя
    console.log(accountName.value);
    return new RegExp('[a-z-0-9-.]')
.test(accountName.value);
}

btnSubmit.addEventListener("click", check);