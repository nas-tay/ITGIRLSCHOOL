

// function sayHi() {
//     alert( "Привет" );
// }

// alert( sayHi() );

// function sayHi() {   // (1) создаём
//     alert( "Привет" );
// }

// let func = sayHi;

// func();

 // ошибка!

// let sayHi = function(name) {  // (*) магии больше нет
// alert( `Привет, ${name}` );
// };
// sayHi("Вася");

// alert(window.innerHeight);

// document.body.style.background = "red";

// setTimeout(() => document.body.style.background = "", 1000);

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Wikipedia?")) {
// 	// перенаправляет браузер на другой адрес
// location.href = "https://wikipedia.org"; 
// }

// let askName = () => {
//     let name = prompt('Как тебя зовут?');
//     alert(`Привет ${name}!`);
// }

// function clickMe() {
//     let catNameInput = document.getElementById('catName');
//     console.log(catNameInput.value);

//     let checks = document.getElementsByName('feed');
//     console.log(checks[0].checked);
//     console.log(checks[1].checked);
//     console.log(checks[2].checked);
// }

// function changeMe() {
//     let  catImage = document.getElementById('catImage');
//     catImage.src = "https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg";
// }

// function select(sender) {
//     sender.classList.add("selected");
// }

// function goTo() {
//     location.href = "https://yandex.ru";
// }

// function find() {
//     let ageTableInput = document.getElementById('age-table');
//     console.log(ageTableInput);
// }

// let a = document.getElementsByTagName('label');

// function sum1(a,b) {
//     return a+b;
// }

// let sum2 = function(a,b) {
//     return a+b;
// };
// let result = sum2(2,3);

// console.log(result);

// function test(func) {
//     func();
// }

// test(function() {
//     console.log('Hello!');
// });

// console.log((function (a,b) {
//     return(a+b);
// })(2,5));

// let sum3 = (a, b) => a + b;

// let result = sum3(12, 1);

// console.log(result);

// let y = x => x * x;
// console.log(y(8));

// let showMessage = () => {
//     let name = prompt("What's your name?");
//     console.log('Hi Yo');
// }
// showMessage();

// console.log((function(a,b) {
//     return a * b;
// })(7,8));

// let askName = () => {
//     let name = prompt('Как тебя зовут?');
//     alert(`Привет ${name}!`);
// }

// askName();
