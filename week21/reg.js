function check() {
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    document.getElementById("errorMessage").innerHTML = "";

    if (email.value == "") {
        document.getElementById("errorMessage").innerHTML += "Ваш email не заполнен<br>";
    }

    if (password.value == "") {
        document.getElementById("errorMessage").innerHTML += "Ваш пароль не заполнен<br><br>";
    }

    if (password.value.length <= 5) {
        document.getElementById("errorMessage").innerHTML += "Ваш пароль слишком короткий<br><br>";
    }
}

let posButton = document.getElementById("posButton");

posButton.onclick = function (event) {
    event.preventDefault();
    let user = {
        emai: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    console.log(user);
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application / json; charset=utf-8",
        },
    })
        .then((response) => response.json())
        .then((user) => {
            console.log(user);
        })
        .catch((error) => console.log(error));
};
