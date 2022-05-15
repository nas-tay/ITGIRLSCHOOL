let func, firstNum, secondNum, result;

function getElements() {
    func = document.querySelector('#func');
    firstNum = document.querySelector('#firstNumber').value;
    secondNum = document.querySelector('#secondNumber').value;
    result = document.querySelector('.result');
    return
}

function count(){
    getElements();

    switch(func.value) {
        case "plus":
        result.value = Number(firstNum) + Number(secondNum);
        break;

        case "minus":
        result.value = firstNum - secondNum;
        break;

        case "multiply":
        result.value = firstNum * secondNum;
        break;
        
        case "divide":
            if (secondNum == 0) {
                result.value = "";
                alert("На ноль делить нельзя!")
                break;
            }
        result.value = firstNum / secondNum;
        break; 
    }
    
}

getElements();
func.addEventListener("change", count);
