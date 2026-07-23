const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "🙈";
    }else{
        password.type = "password";
        togglePassword.textContent = "👁️";
    }

});
const form = document.getElementById("loginForm");
const username = document.getElementById("username");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(username.value.trim() === ""){
        alert("❌ Please enter Username");
        return;
    }

    if(password.value.trim() === ""){
        alert("❌ Please enter Password");
        return;
    }

    const loginButton = document.querySelector("button[type='submit']");

loginButton.innerHTML = "Logging in...";
loginButton.disabled = true;

localStorage.setItem("username", username.value);

setTimeout(() => {
    window.location.href = "welcome.html";
}, 2000);

});