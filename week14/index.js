function sum(a, b) {
    return a + b;
}

function sumClick() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let resultBtn = document.getElementById('result');
    let sumResult = sum(Number(x.value), Number(y.value));
    resultBtn.value = sumResult;
}

function sub(a, b) {
    return a - b;
}

function subClick() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let resultBtn = document.getElementById('result');
    let subResult = sub(Number(x.value), Number(y.value));
    resultBtn.value = subResult;
}

function mul(a, b) {
    return a * b;
}

function mulClick() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let resultBtn = document.getElementById('result');
    let mulResult = mul(Number(x.value), Number(y.value));
    resultBtn.value = mulResult;
}

function div(a, b) {
    return a / b;
}

function divClick() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let resultBtn = document.getElementById('result');
    let divResult = div(Number(x.value), Number(y.value));
    resultBtn.value = divResult;
}

function select(sender) {
    sender.classList.add("selected");
}

function changeImg() {
    let catImage = document.getElementById('catImage');
    catImage.src = "assets/img/black_cat.jpeg";
}

function changeBack() {
    let catImage = document.getElementById('catImage');
    catImage.src = "assets/img/cat1.jpeg";
}

// const box = document.querySelector('.box');
// const b = 25

// const el = document.createElement('div');
// el.style.cssText = 'width: 100px; height: 20px; background-color:yellow';

// box.append(el)

// box.innerHTML = `<input type="text" placeholder="введите имя"/>
// <h1>${b}</h1>
// `

const input = document.querySelector('.input');
const list = document.querySelector('.list')

function clearInput() {
    const name = input.value;
    const li = document.createElement('li')
    li.innerHTML = name

    input.value = "";
    list.append(li)
}

function clearList() {
    list.innerHTML = "";
}