let arr = [],
sum = 0,
brand = document.querySelector('#brand');
body = document.querySelector('#body'),
year = document.querySelector('#year'),
mileage = document.querySelectorAll('[name="mileage"]'),
options = document.querySelectorAll('.option'),
result = document.querySelector('.result'),
resultText = document.querySelector('.resultText');

brand.addEventListener("change", () => {
    switch (brand.value) {
        case "Audi":
            arr[0] = 1500000;
            break;
        case "BMW":
            arr[0] = 2000000;
            break;
        case "Mercedes":
            arr[0] = 2500000;
            break;
        case "Ford":
            arr[0] = 1000000;
            break;
    }
    body.disabled = false;
})

body.addEventListener("change", () => {
    switch (body.value) {
        case "sedan":
            arr[1] = 500000;
            break;
        case "coupe":
            arr[1] = 250000;
            break;
        case "wagon":
            arr[1] = 350000;
            break;
        case "hatchback":
            arr[1] = 400000;
            break;
    }
    year.disabled = false;
})

year.addEventListener("change", () => {
    switch (year.value) {
        case "2022":
            arr[2] = 5000000;
            break;
        case "2021":
            arr[2] = 4000000;
            break;
        case "2020":
            arr[2] = 3000000;
            break;
        case "2019":
            arr[2] = 2000000;
            break;
        case "old":
            arr[2] = 1000000;
            break;
    }

    mileage.forEach ((item,index) => {
        item.disabled = false;
    })

    options.forEach((item, index) => {
        item.disabled = false;
    })
    
    result.disabled = false;
})

result.addEventListener("click", (e) => {
    e.preventDefault();

    mileage.forEach((item, index) => {
        if(item.checked) {
            arr[3] = +item.value;
        }
    })

    options.forEach((item, index) => {
        if(item.checked) {
            arr.push(+item.value);
        }
    })

    for (let index = 0; index < arr.length; index++) {
        sum += Number(arr[index]); 
    }

    resultText.innerHTML = `Стоимость автомобиля равна ${sum} руб.`;

    options.forEach((item, index) => {
        if(item.checked) {
            arr.pop(+item.value);
        }
    })

    sum = 0;
})
