let arr = [];
let arrName;
let fixedName;

function convert() {
    const userName = document.querySelector('#userName'); // Здесь получаем ФИО как его ввел пользователь
    const trimmedName = userName.value.trim(); //Убираем пробеллы в начале и в конце строки
    arr = trimmedName.split(" "); // Формируем массив из строки

    // Проверка на пробелы внутри строки
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != "") { // Если элемент массива не пробел, то присваеиваем имя (в нижнем регистре) переменной arrName
            arrName = arr[index].toLowerCase();
            correctName(); // Меняем первую букву на заглавную
            document.querySelector('#userLastName').value = fixedName; // Записываем корректную Фамилию в поле для фамилии
            arr[index] = ""; // Удаляем Фамилию из массива
            break;
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != "") {
            arrName = arr[index].toLowerCase();
            correctName();
            document.querySelector('#userFirstName').value = fixedName; // Записываем корректное Имя в поле для имени
            arr[index] = ""; // Удаляем Имя из массива
            break;
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != "") {
            arrName = arr[index].toLowerCase();
            correctName();
            document.querySelector('#userPatronymic').value = fixedName; // Записываем корректное Отчество в поле для отчества
            break;
        }
    }
    document.querySelector('.result').classList.remove("displayResult");
    userName.value = ""; // Очищаем поле ФИО
}

// Функция для замены первой буквы имени на заглавную
function correctName() {
    firstLetter = arrName.charAt(0)
    fixedFirstLetter = firstLetter.toUpperCase();
    fixedName = arrName.replace(firstLetter, fixedFirstLetter);
}

// Вызов функции по клику
document.querySelector('#send').addEventListener('click', convert);