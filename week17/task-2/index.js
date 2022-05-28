function checkSpamGlobal() {
    let comment,
    arr = [];

    //Замыкание
    function checkSpam() {
        comment = document.querySelector('#comment'); // Записываем в переменную введенный коммент
        // arr = comment.value.split(" "); // Преобразуем в массив

        // Спам-фильтр
        let commentChecked = comment.value.replace(/xxx|viagra/ig, "***");

        // Выводим коммент в секции комментов
        let newComment = document.createElement("div");
        newComment.innerHTML = `
        User: ${commentChecked} <br><br>
        `;
        document.querySelector('.commentContainer').append(newComment);

        // Удаление дефолтной строки в секции комментов
        if (newComment.innerHTML == "") {
            document.querySelector('.none').style.display = "block";
        }
        else {
            document.querySelector('.none').style.display = "none";
        }

        // Очистка textarea
        comment.value = "";
    }
    checkSpam();
}

document.querySelector('#send').addEventListener('click', checkSpamGlobal);