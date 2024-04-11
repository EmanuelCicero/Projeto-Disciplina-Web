let userName;
let lastName;
let email;
let password;

const nameElement = document.getElementById("nome");
const lastNameElement = document.getElementById("sobrenome");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("senha");

nameElement.addEventListener("input", function(event) {
    userName = event.target.value;
});

lastNameElement.addEventListener("input", function(event) {
    lastName = event.target.value;
});

emailElement.addEventListener("input", function(event) {
    email = event.target.value;
});

passwordElement.addEventListener("input", function(event) {
    password = event.target.value;
});

const registerButton = document.getElementById("botao-cadastro")
registerButton.addEventListener("click", function(event) {

    event.preventDefault();

    let registerData = JSON.parse(localStorage.getItem("registerData")) || [];

    const register = {
        userName,
        lastName,
        email,
        password
    };

    registerData.push(register);

    localStorage.setItem('registerData', JSON.stringify(registerData));

    window.location.href = "./login.html"

});
