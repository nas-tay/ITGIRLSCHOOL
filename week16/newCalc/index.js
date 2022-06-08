document.querySelector("#brand").selectedIndex = -1;
document.querySelector("#color").selectedIndex = -1;
document.querySelector("#year").selectedIndex = -1;

let arr = [],
    sum = 0,
    brand = document.querySelector("#brand"),
    year = document.querySelector("#year"),
    model = document.querySelector("#model"),
    color = document.querySelector("#color"),
    mileage = document.querySelectorAll('[name="mileage"]'),
    options = document.querySelectorAll(".option"),
    result = document.querySelector(".result"),
    resultText = document.querySelector(".resultText");

let audiModels = ["Audi 1", "Audi 2", "Audi 3", "Audi 4", "Audi 5"];

let bmwModels = ["BMW 1", "BMW 2", "BMW 3", "BMW 4", "BMW 5"];

let mercedesModels = [
    "Mercedes 1",
    "Mercedes 2",
    "Mercedes 3",
    "Mercedes 4",
    "Mercedes 5",
];

let fordModels = ["Ford 1", "Ford 2", "Ford 3", "Ford 4", "Ford 5"];

function selectBrand(sender) {
    if (sender.options[sender.selectedIndex].value == "none") {
        document.querySelector("#model").style.display = "none";
    } else {
        document.querySelector("#modelsDiv").style.display = "block";
    }

    let optionsString = "";
    if (sender.options[sender.selectedIndex].value == "Audi") {
        for (let model of audiModels) {
            optionsString += `<option value="${model}">${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "BMW") {
        for (let model of bmwModels) {
            optionsString += `<option value="${model}">${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "Mercedes") {
        for (let model of mercedesModels) {
            optionsString += `<option value="${model}">${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "Ford") {
        for (let model of fordModels) {
            optionsString += `<option value="${model}">${model}</option>`;
        }
    }
    document.querySelector("#model").innerHTML = optionsString;
    document.querySelector("#model").selectedIndex = -1;

    result.disabled = false;
    if (!year.value || !model.value || !color.value) {
        result.disabled = true;
    }
}

model.addEventListener("change", () => {
    switch (model.value) {
        case "Audi 1":
            arr[0] = 1000000;
            break;
        case "Audi 2":
            arr[0] = 1500000;
            break;
        case "Audi 3":
            arr[0] = 1800000;
            break;
        case "Audi 4":
            arr[0] = 2200000;
            break;
        case "Audi 5":
            arr[0] = 2500000;
            break;

        case "BMW 1":
            arr[0] = 1200000;
            break;
        case "BMW 2":
            arr[0] = 1600000;
            break;
        case "BMW 3":
            arr[0] = 2000000;
            break;
        case "BMW 4":
            arr[0] = 2300000;
            break;
        case "BMW 5":
            arr[0] = 2700000;
            break;

        case "Mercedes 1":
            arr[0] = 2500000;
            break;
        case "Mercedes 2":
            arr[0] = 2800000;
            break;
        case "Mercedes 3":
            arr[0] = 3000000;
            break;
        case "Mercedes 4":
            arr[0] = 3200000;
            break;
        case "Mercedes 5":
            arr[0] = 3500000;
            break;

        case "Ford 1":
            arr[0] = 2300000;
            break;
        case "Ford 2":
            arr[0] = 2500000;
            break;
        case "Ford 3":
            arr[0] = 2800000;
            break;
        case "Ford 4":
            arr[0] = 3000000;
            break;
        case "Ford 5":
            arr[0] = 3200000;
            break;
    }

    result.disabled = false;
    if (!brand.value || !color.value || !year.value) {
        result.disabled = true;
    }
});

color.addEventListener("change", () => {
    result.disabled = false;
    if (!brand.value || !model.value || !year.value) {
        result.disabled = true;
    }
});

year.addEventListener("change", () => {
    result.disabled = false;
    if (!brand.value || !model.value || !color.value) {
        result.disabled = true;
    }
});

// функция для добавления пробелов между разрядами в числе
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

result.addEventListener("click", (e) => {
    e.preventDefault();
    sum = 0;

    arr[1] = +color.value;

    arr[2] = +year.value;

    mileage.forEach((item, index) => {
        if (item.checked) {
            arr[3] = +item.value;
        }
    });

    options.forEach((item, index) => {
        if (item.checked) {
            arr.push(+item.value);
        }
    });

    for (let index = 0; index < arr.length; index++) {
        sum += Number(arr[index]);
    }

    console.log(arr);
    console.log(sum);

    resultText.innerHTML = `Стоимость автомобиля составит ${numberWithSpaces(
        sum
    )} руб.`;

    options.forEach((item, index) => {
        if (item.checked) {
            arr.pop(+item.value);
        }
    });
});
