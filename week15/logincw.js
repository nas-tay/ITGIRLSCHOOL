function check() {
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    document.getElementById("errorMessage").innerHTML = "";

    if (email.value == ''){
        document.getElementById("errorMessage").innerHTML+= "Ваш email не заполнен<br>"
    }

    if (password.value == ''){
        document.getElementById("errorMessage").innerHTML+= "Ваш пароль не заполнен<br><br>"
    }

    if (password.value.length <= 5){
        document.getElementById("errorMessage").innerHTML+= "Ваш пароль слишком короткий<br><br>"
    }
}

function colorMe() {
    document.getElementById('test').style.backgroundColor = 'yellow';
}

function colorMeBack() {
    document.getElementById('test').style.backgroundColor = 'white';
}

function show() {
    // const catImg = documt.querySelector('#catImg');
    switch(document.querySelector('#breed').value){
        case "british":
        document.querySelector('#catImg').src="https://www.thesprucepets.com/thmb/ZW8v-2C7IU2c0e7OHgHee3d_J8o=/2121x1414/filters:fill(auto,1)/GettyImages-1319774380-c3da91f9259a47e0966007f8e10690ba.jpg"; break;
        case "russian blue":
        document.querySelector('#catImg').src = "https://static.boredpanda.com/blog/wp-content/uploads/2019/07/47693844_471601916702578_3635972329165176931_n-5d379b668654c__880.jpg";
    }

}