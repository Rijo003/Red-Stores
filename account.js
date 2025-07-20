let loginForm = document.querySelector(".cong")
let registerForm = document.querySelector(".cut")
let loginButton = document.querySelector("#login")
let registerButton = document.querySelector("#register")

loginButton.addEventListener("click",function(){
    loginForm.style.display="block"
    registerForm.style.display="none"

})

registerButton.addEventListener("click",function(){
    registerForm.style.display="block"
    loginForm.style.display="none"

})

