function addCommentGlobal() {
    let comment;
    let userName = document.querySelector("#userName");

    //Замыкание
    function addComment() {
        comment = document.querySelector("#comment"); // Записываем в переменную введенный коммент

        // Спам-фильтр
        let commentChecked = comment.value.replace(/xxx|viagra/gi, "***");

        localStorage.setItem(userName.value, commentChecked);

        // // Выводим коммент в секции комментов
        // let newComment = document.createElement("div");
        // newComment.innerHTML = `
        // User: ${commentChecked} <br><br>
        // `;
        // document.querySelector(".commentContainer").append(newComment);

        // Удаление дефолтной строки в секции комментов
        // if (newComment.innerHTML == "") {
        //     document.querySelector(".none").style.display = "block";
        // } else {
        //     document.querySelector(".none").style.display = "none";
        // }

        // Очистка textarea
        comment.value = "";
    }
    addComment();
}

document.querySelector("#send").addEventListener("click", addCommentGlobal);
