// ==========================================
// Kalki Pradee Tours & Travels
// signup.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const fullname = document.getElementById("fullname").value.trim();

const phone = document.getElementById("phone").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if(fullname === "" || phone === "" || email === "" || password === ""){

alert("Please fill all fields.");

return;

}

if(phone.length < 10){

alert("Enter a valid phone number.");

return;

}

if(password.length < 6){

alert("Password must be at least 6 characters.");

return;

}

if(password !== confirmPassword){

alert("Passwords do not match.");

return;

}

alert("Account created successfully!");

window.location.href = "login.html";

});

const googleBtn = document.getElementById("googleSignup");

if(googleBtn){

googleBtn.addEventListener("click", () => {

alert("Google Sign Up will be connected with Firebase in the next step.");

});

}

console.log("Signup page loaded successfully.");

});
