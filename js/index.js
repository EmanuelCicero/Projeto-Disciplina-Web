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
    
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var emailValidate = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if (nome.trim() === ""){
        alert("O nome não podem ser vazio.");
        return false;
    }
    
    if (sobrenome.trim() === ""){
        alert("O sobrenome não pode ser vazio")
        return false;
    }
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValidate.trim() === "" || !emailPattern.test(emailValidate)) {
        alert("Email não pode ser vazio e deve estar em um formato válido.");
        return false;
    }
    
    if (senha.trim() === "" || senha.length < 8) {
        alert("A senha não pode ser vazia e deve ter pelo menos 8 caracteres.");
        return false;
    }
    
    window.location.href = "./login.html"
    return true; 
    
});

function clickMenu(){
    if (menu.style.display == "block"){
        menu.style.display = "none"
    }else{
        menu.style.display = "block"
    }
}

function clickSair(event){
    if (sair.style.display == "flex"){
        sair.style.display = "none"
    }else{
        sair.style.display = "flex"
    }
    event.preventDefault();
}