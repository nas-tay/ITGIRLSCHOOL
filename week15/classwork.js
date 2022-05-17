// function greet() {
//     let name = prompt("What's your name?");
//     if(name) {
//         alert(`Hello ${name}!`)
//     }
//     else {
//         alert('Hello guest!')
//     }
// }

// function confAge() {
//     let age = prompt(`What's your age?`);
//     if(age >= 18) {
//         alert("Можно посмотреть этот фильм");
//     }
//     else if (age >= 14) {
//         alert("Посмотрите ужастик");
//     }
//     else {
//         alert("Посмотрите лучше мультики");
//     }
// }

// // function confAge() {
// //     let age = prompt("What's your age?");
// //     let accessAlowed = age >= 18 ? true : false ;
// // }

// let userName = document.querySelector('.name');
// let block = document.querySelector('.block');

// function clearInput() {
//     // let output = userName.value;
//     let newEl = document.createElement('div');
//     newEl.innerHTML = userName.value;
//     userName.value = "";
//     block.append(newEl);
// }

// let date = new Date();
// let time = date.getHours();

// // if (time < 10) {
// //     alert( "Доброе утро!" );
// // } else {
// //     alert( "Добрый день!" );
// // }

// // (time < 10) ? alert( "Доброе утро!" ) : alert( "Добрый день!" );

// // if (!(6 == 3)) {
// //     alert( 'Привет' )
// //     }
// //     else {
// //         console.log("false");
// //     }

let date = new Date();
let time = date.getHours();

(time < 10) ? alert( "Доброе утро!" ) : alert( "Добрый день!" );

