/* ==========================================
   KALKI PRADEE TOURS & TRAVELS
   app.js
========================================== */

// Loading Screen

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1500);

});

// Navbar Background

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="#000";

}else{

navbar.style.background="rgba(0,0,0,.55)";

}

});

// Counter Animation

const counters=document.querySelectorAll("h2");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.innerText.replace("+","");

if(isNaN(target)) return;

let count=+counter.getAttribute("data-count")||0;

let increment=target/80;

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

counter.innerText=Math.ceil(count)+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

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

// Welcome Message

const hour=new Date().getHours();

let greeting="Welcome";

if(hour<12){

greeting="🌅 Good Morning";

}

else if(hour<17){

greeting="☀️ Good Afternoon";

}

else{

greeting="🌙 Good Evening";

}

console.log(greeting);

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".feature-card,.package-card,.vehicle-card,.gallery-img").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s";

observer.observe(el);

});

// Current Year

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Kalki Pradee Tours & Travels. All Rights Reserved.";

}

// Floating Buttons Effect

document.querySelectorAll(".floating-call,.floating-whatsapp").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.15)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Package Search (Future Ready)

function searchPackages(){

alert("Package search feature coming soon!");

}

// Book Now Button

document.querySelectorAll(".btn-warning").forEach(btn=>{

btn.addEventListener("click",()=>{

console.log("Button Clicked");

});

});

console.log("Kalki Pradee Tours & Travels Loaded Successfully");
