let arr = [];
let sum = 0;

for (let index = 0; index < Infinity; index++) {
  let item = Number(prompt("Введите число", ''));
  if (!item) break;
  arr.push(item);
  arr.sort(function(a,b ){
    return a - b;
  })
  sum = sum + item;
}

alert(arr);
alert('Сумма равна ' + sum);