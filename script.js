let btn = document.querySelector("#btn");
let btn_clear = document.querySelector("#clear");
let text = document.querySelector("#textarea");
let comments = document.querySelector(".comments");
let input_name = document.querySelector("#name");
let input_avatar = document.querySelector("#avatar");
let avatar_regexp = /(^data?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
let name_regexp = /^[a-zA-Z ]+$/;

document.addEventListener("DOMContentLoaded", function(event) {
    let login = localStorage.getItem('login');
    if(login != null) {
        document.querySelector("#name").value = login;
    }

    let image = localStorage.getItem('avatar');
    if (image != null) {
        document.querySelector("#avatar").value = image;
    }
})

function checkSpam () {
    let users_name = document.querySelector("#name").value;
    let avatar = document.querySelector("#avatar").value;

    if (localStorage.getItem('login') == null || localStorage.getItem('login') == "") {
        localStorage.setItem('login', users_name);
    }

    if (localStorage.getItem('avatar') == null || localStorage.getItem('avatar') == "") {
        localStorage.setItem('avatar', avatar);
    }

    let censored = text.value.replace(/viagra/gi, '*****').replace(/xxx/gi, '*****');
    if (censored == "") {
        censored = `<span class="empty">empty message</span>`
    }

    comments.innerHTML = `<img class="user_img" src="${avatar}"><span id="name_id">${users_name}: </span><p>${censored}</p><hr><span class="date">${getDate()}</span></div>`+ comments.innerHTML;
    text.value = "";
}

function ValidateInputs(input, format) {
    if(input.value.match(format)) {
        return true;
    }
    else {
        return false;
    }
}

function ValidateAll() {
    if(ValidateInputs(input_name, name_regexp) && ValidateInputs(input_avatar, avatar_regexp)) {
        return true;
    }
    else{
        return false;
    }
}

function clearInputs() {
    document.querySelector("#name").value = "";
    document.querySelector("#avatar").value = "";
    localStorage.removeItem('login');
    localStorage.removeItem('avatar');
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
btn_clear.addEventListener("click", clearInputs);