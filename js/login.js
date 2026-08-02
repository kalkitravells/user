import {
auth,
provider,
signInWithPopup,
signInWithEmailAndPassword
} from "./firebase.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful!");

window.location.href="index.html";

}catch(error){

alert(error.message);

}

});

const googleBtn=document.querySelector(".btn-light");

googleBtn.addEventListener("click",async()=>{

try{

await signInWithPopup(auth,provider);

alert("Google Login Successful!");

window.location.href="index.html";

}catch(error){

alert(error.message);

}

});
