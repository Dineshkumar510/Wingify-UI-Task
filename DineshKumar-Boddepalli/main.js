const form = document.querySelector(".form"),
    emailInput = document.getElementById("email"),
    passwordInput = document.getElementById("password"),
    DateValue = document.getElementById("Date");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    isValidEmail(email) ? removeError(emailInput) : showError(emailInput, "Please add valid email address");
    
    const password = passwordInput.value.trim();
    isValidPassword(password) ? removeError(passwordInput) : showError(passwordInput, "Password must have a numeric number");

    const date = DateValue.value.trim();
    isValidDate(date) ? removeError(DateValue) : showError(DateValue, "Please enter valid date");

    isValidEmail(email) && isValidPassword(password) && isValidDate(date) && form.submit();
    
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    for (var i = 0; i < password.length; i++) if (!isNaN(parseInt(password[i]))) return !0;
    return !1;
}

function isValidDate(dateString) {
    const dateRegex = /^\d{1,2}$/;
    if (!dateRegex.test(dateString)) return !1;
    const day = parseInt(dateString, 10);
    return day < 1 || day > 31 ? !1 : !0;
}

function showError(input, message) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message"), (errorElement.textContent = message), input.parentNode.appendChild(errorElement), (input.style.borderColor = "red");
}

function removeError(input) {
    const errorElement = input.parentNode.querySelector(".error-message");
    errorElement && errorElement.remove(), (input.style.borderColor = "");
}
