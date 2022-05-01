function askName() {
    let name = prompt('Как тебя зовут?');
    alert(`Привет ${name}!`);
}

function sum() {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    let sumResult = Number(a) + Number(b);
    alert('Сумма равна: ' + sumResult);
}

function sub() {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    let subResult = a - b;
    alert('Разница равна: ' + subResult);
}

function mul() {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    let mulResult = a * b;
    alert('Произведение равно: ' + mulResult);
}

function division() {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    let divisionResult = a / b;
    alert('Частное равно: ' + divisionResult);
}