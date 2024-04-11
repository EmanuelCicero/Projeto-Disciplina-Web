let email;
let password;

const emailElement = document.getElementById("email");

emailElement.addEventListener("input", function(event) {
    email = event.target.value;
});

const passwordElement = document.getElementById("senha");
passwordElement.addEventListener("input", GetPassword);

function GetPassword (event){
    password = event.target.value;
};


const loginButton = document.getElementById("botao-login");
loginButton.addEventListener("click", function(event){
    event.preventDefault();
    const registerData = JSON.parse(localStorage.getItem("registerData")) || [];

    const user = registerData.some(user => user.email === email
        && user.password === password);

    if (user) {
        window.location.href = "./home.html"
    }else{
        alert("Email ou Senha incorreto!")
    }
})