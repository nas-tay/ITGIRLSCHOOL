document.querySelector("#brand").selectedIndex = -1;
document.querySelector("#year").selectedIndex = -1;

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
        document.querySelector("#models").style.display = "none";
    } else {
        document.querySelector("#modelsDiv").style.display = "block";
    }

    let optionsString = "";
    if (sender.options[sender.selectedIndex].value == "Audi") {
        for (let model of audiModels) {
            optionsString += `<option>${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "BMW") {
        for (let model of bmwModels) {
            optionsString += `<option>${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "Mercedes") {
        for (let model of mercedesModels) {
            optionsString += `<option>${model}</option>`;
        }
    }

    if (sender.options[sender.selectedIndex].value == "Ford") {
        for (let model of fordModels) {
            optionsString += `<option>${model}</option>`;
        }
    }
    document.querySelector("#models").innerHTML = optionsString;
    document.querySelector("#models").selectedIndex = -1;

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
}

let arr = [],
    sum = 0,
    brand = document.querySelector("#brand"),
    year = document.querySelector("#year"),
    mileage = document.querySelectorAll('[name="mileage"]'),
    options = document.querySelectorAll(".option"),
    result = document.querySelector(".result"),
    resultText = document.querySelector(".resultText");

year.addEventListener("change", () => {
    result.disabled = false;
});

result.addEventListener("click", (e) => {
    e.preventDefault();
    sum = 0;

    arr[1] = +year.value;

    mileage.forEach((item, index) => {
        if (item.checked) {
            arr[2] = +item.value;
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

    resultText.innerHTML = `Стоимость автомобиля равна ${sum} руб.`;

    options.forEach((item, index) => {
        if (item.checked) {
            arr.pop(+item.value);
        }
    });
});
