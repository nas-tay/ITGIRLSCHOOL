let numberRandom,
numbers = [],
min,
max,
sum = 0,
average,
mult = 1;

function calc() {
    // Генерируем 10 случайных чисел от -10 до 10 и записываем их в массив
    for (let index = 0; index < 10; index++) {
        numberRandom = Math.round((Math.random()*(20)) -10);
        numbers.push(numberRandom);
    }

    // Находим минимальное число
    min = Math.min.apply(Math, numbers);

    // Находим максимальное число
    max = Math.max.apply(Math, numbers);

    // Находим сумму чисел
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }

    // Находим среднее арифметическое
    average = sum / 10;

    // Находим произведение чисел
    for (let ind = 0; ind < numbers.length; ind++) {
        mult = mult * Number(numbers[ind]);
    }

    // Вывод результатов
    document.querySelector('.array').innerHTML = `
    Сгенерировали: ${numbers.join(' ')}
    `;

    document.querySelector('.min').innerHTML = `
    Минимальное: ${min}
    `;

    document.querySelector('.max').innerHTML = `
    Максимальное: ${max}
    `;

    document.querySelector('.average').innerHTML = `
    Среднее арифметическое: ${average}
    `;

    document.querySelector('.sum').innerHTML = `
    Сумма чисел: ${sum}
    `;

    document.querySelector('.mult').innerHTML = `
    Произведение чисел: ${mult}
    `;

    // Обнуление массива
    for (let index = 0; index < 10; index++) {
        numbers.pop(numbers[index]);
    }

    // Очистка значения суммы и произведения
    sum = 0;
    mult = 1;
}

// Вызов функции по клику
document.querySelector('#randomizer').addEventListener('click', calc)