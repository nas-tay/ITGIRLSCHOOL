let mode, container;

function getElements() {
    mode = document.querySelector('#mode');
    container = document.querySelector('body');
    
    return
}

function changeMode(){
    getElements();
    container.classList.remove("bg-white");
    container.classList.remove("bg-dark");
    container.classList.remove("bg-blue");

    switch(mode.value) {
        case "white":
        container.classList.add("bg-white");
        break;

        case "dark":
        container.classList.add("bg-dark");
        break;

        case "blue":
        container.classList.add("bg-blue");
        break;
    }
    
}

getElements();
mode.addEventListener("change", changeMode);