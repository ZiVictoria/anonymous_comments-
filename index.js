let btn = document.querySelector("#btn");
let text = document.querySelector("#textarea");
let comments = document.querySelector(".comments");

function checkSpam () {
    let censored = text.value.replace(/viagra/gi, '*****').replace(/xxx/gi, '*****');
    if (censored == "") {
        censored = `<span>empty message</span>`
    }

    comments.innerHTML = `<div><p> Anonim: ${censored}<hr><span class="date">${getDate()}</span></p></div>`+ comments.innerHTML;
    text.value = "";
}

function getDate() {
    let date = new Date();
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    let formatDate = date.toLocaleString("ua", options);

    return formatDate;
}

btn.addEventListener("click", checkSpam);