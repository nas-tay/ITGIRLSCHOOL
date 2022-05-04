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

function changeMe() {
    let  catImage = document.getElementById('catImage');
    catImage.src = "https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg";
}