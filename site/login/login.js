login_button = document.getElementById("login_button");
email_input = document.getElementById("email_input");
email_input_container = document.getElementById("email_input_container");
password_input = document.getElementById("password_input");
password_input_container = document.getElementById("password_input_container");
remember_me_checkbox = document.getElementById("remember_me_checkbox");

function login() {
    const email = email_input.value.trim();
    const password = password_input.value.trim();
    const rememberMe = remember_me_checkbox.checked;
    const loginData = { email, password, rememberMe };
    if (!emailIsValid(email)) {
        email_input_container.style.borderColor = "#E9190F";
        email_input_container.style.backgroundColor = "rgba(73, 54, 54, 0.5)";
        return;
    }
    else{
        console.log("Login data:", loginData);
    }
    
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

login_button.addEventListener("click", login);