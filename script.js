const pswInput = document.getElementById("psw");
const togglePassword = document.getElementById("togglePassword");

// 1. Show/Hide Password Logic
togglePassword.addEventListener("click", function () {
    const type = pswInput.getAttribute("type") === "password" ? "text" : "password";
    pswInput.setAttribute("type", type);
    
    // Icon change karna (eye to eye-slash)
    this.classList.toggle("fa-eye-slash");
});

// 2. Validation Logic
pswInput.onkeyup = function() {
    // Check Length (12-60)
    validate(document.getElementById("length"), pswInput.value.length >= 12 && pswInput.value.length <= 60);
    
    // Check Lowercase
    validate(document.getElementById("letter"), /[a-z]/.test(pswInput.value));
    
    // Check Uppercase
    validate(document.getElementById("capital"), /[A-Z]/.test(pswInput.value));
    
    // Check Number
    validate(document.getElementById("number"), /[0-9]/.test(pswInput.value));
    
    // Check Special Character
    validate(document.getElementById("special"), /[!@#$%^&*(),.?":{}|<>]/.test(pswInput.value));
}

function validate(element, condition) {
    if(condition) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}