// Kalki Pradee Tours & Travels
// login.js

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){

        alert("Please fill all fields.");

        return;

    }

    alert("Login successful!");

    window.location.href = "index.html";

});

// Google Login (Temporary)

document.querySelector(".btn-light").addEventListener("click", function(){

    alert("Google Login will be connected with Firebase later.");

});

// Guest Login

console.log("Login page loaded successfully.");
