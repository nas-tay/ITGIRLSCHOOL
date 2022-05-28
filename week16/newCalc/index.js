let audiModels = ["Audi 1", "Audi 2", "Audi 3", "Audi 4", "Audi 5"];

let bmwModels = ["BMW 1", "BMW 2", "BMW 3", "BMW 4", "BMW 5"];

let mercedesModels = ["Mercedes 1", "Mercedes 2", "Mercedes 3", "Mercedes 4", "Mercedes 5"];

let fordModels = ["Ford 1", "Ford 2", "Ford 3", "Ford 4", "Ford 5"];

function selectBrand(sender) {
    if (sender.options[sender.selectedIndex].value == "none") {
        document.querySelector("#models").style.display = "none";
    } else {
        document.querySelector("#models").style.display = "block";
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
    document.querySelector('#models').innerHTML = optionsString;
}