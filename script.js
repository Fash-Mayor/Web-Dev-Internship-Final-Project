document.getElementById("signup").addEventListener("click", function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("form2").style.display = "block";
});

document.getElementById("login").addEventListener("click", function () {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form").style.display = "block";
});

let usern1 = document.getElementById('username1');
let pass1 = document.getElementById('password1');

document.getElementById('first_login').addEventListener("click", function () {
    // event.preventDefault();

    if (usern1.value.trim() == '' && pass1.value.trim() == '') {
        Event.preventDefault;
    }
    else {
        document.location.href = 'Main/main.html';
    }

});