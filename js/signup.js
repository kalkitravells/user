import {
auth,
provider,
signInWithPopup,
createUserWithEmailAndPassword
} from "./firebase.js";

const form=document.getElementById("signupForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match!");

return;

}

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Account Created Successfully!");

window.location.href="login.html";

}catch(error){

alert(error.message);

}

});

const googleBtn=document.getElementById("googleSignup");

googleBtn.addEventListener("click",async()=>{

try{

await signInWithPopup(auth,provider);

alert("Google Account Created Successfully!");

window.location.href="index.html";

}catch(error){

alert(error.message);

}

});
