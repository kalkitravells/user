import {
auth,
onAuthStateChanged,
signOut
} from "./firebase.js";

// Check Login

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In");

const name=document.getElementById("userName");

if(name){

name.innerHTML=user.displayName || user.email;

}

const photo=document.getElementById("userPhoto");

if(photo && user.photoURL){

photo.src=user.photoURL;

}

}else{

window.location.href="login.html";

}

});

// Logout

const logout=document.getElementById("logout");

if(logout){

logout.addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});

}

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
