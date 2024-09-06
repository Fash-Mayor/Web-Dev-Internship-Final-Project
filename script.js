document.getElementById("signup").addEventListener("click", function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("form2").style.display = "block";
});

document.getElementById("login").addEventListener("click", function () {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form").style.display = "block";
});

const usern1 = document.querySelector('#username').value;
const pass1 = document.querySelector('#password').value;

// document.getElementById('first_login').addEventListener("click", function () {
//     // event.preventDefault();

//     // if (usern1 === "" && pass1 === "") {
//     //     Event.preventDefault;
//     // }
//     // else {
//     //     location.href = "Main/main.html";
//     location.href = "Main/main.html";

//     // }
// });

const loginForm = document.getElementById('form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username !== '' && password !== '') {
    window.location.href = 'Main/main.html';
  } else {
    // Event.preventDefault();
    alert('Please fill in both username and password');
  }
});