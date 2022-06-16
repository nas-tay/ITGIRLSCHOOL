function addCommentGlobal() {
    let comment;
    let userName = document.querySelector("#userName");
    let userPic = document.querySelector("#userPicture");

    //Замыкание
    function addComment() {
        comment = document.querySelector("#comment"); // Записываем в переменную введенный коммент

        // Спам-фильтр
        let commentChecked = comment.value.replace(/xxx|viagra/gi, "***");

        localStorage.setItem("name", userName.value);
        localStorage.setItem("image", userPic.value);
        localStorage.setItem("comment", comment.value);

        // Выводим коммент в секции комментов
        let newComment = document.createElement("div");
        newComment.innerHTML = `
        ${userName.value}: ${commentChecked} <br><br>
        `;
        document.querySelector(".commentContainer").append(newComment);

        if (userPic.value) {
            newComment.innerHTML = `
            <img src="${userPic.value}" style="width: 50px; height: 50px" alt="user image"> <br>
        ${userName.value}: ${commentChecked} <br><br>
        `;
            document.querySelector(".commentContainer").append(newComment);
        }

        //Удаление дефолтной строки в секции комментов
        if (newComment.innerHTML == "") {
            document.querySelector(".none").style.display = "block";
        } else {
            document.querySelector(".none").style.display = "none";
        }

        // Очистка textarea
        comment.value = "";
    }
    addComment();
}

document.querySelector("#send").addEventListener("click", addCommentGlobal);

document.addEventListener("DOMContentLoaded", () => {
    let name = localStorage.getItem("name");
    let image = localStorage.getItem("image");
    let comment = localStorage.getItem("comment");

    //Запоминание имени и картинки
    document.querySelector("#userName").value = name;
    document.querySelector("#userPicture").value = image;

    if (name) {
        document.querySelector(".commentContainer").innerHTML = `
            <img src="${image}" style="width: 50px; height: 50px" alt="user image"> <br>
        ${name}: ${comment} <br><br>
        `;
    }
});
