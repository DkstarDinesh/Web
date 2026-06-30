/*==================================================
 Fine Aircon Jaipur V2
 App.js
==================================================*/

/* Loader */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},700);

}

});

/* Sticky Header */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/* Mobile Menu */

const menuBtn=document.getElementById("menuBtn");

const nav=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

menuBtn.innerHTML=nav.classList.contains("active")

?'<i class="fa-solid fa-xmark"></i>'

:'<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll("#navbar a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

};

});
document.addEventListener("click",(e)=>{

if(
!nav.contains(e.target) &&
!menuBtn.contains(e.target)
){

nav.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

/* Scroll Top */

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Counter */

const counters=document.querySelectorAll(".counter-box h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let value=0;

const speed=Math.ceil(target/80);

const update=()=>{

value+=speed;

if(value>=target){

counter.innerText=counter.innerText.includes("+")?

target+"+":target;

}else{

counter.innerText=counter.innerText.includes("+")?

value+"+":value;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(c=>counterObserver.observe(c));

/* FAQ */

document.querySelectorAll(".faq-btn").forEach(btn=>{

btn.onclick=()=>{

btn.parentElement.classList.toggle("active");

};

});
/*==================================================
SNOW PARTICLES
==================================================*/

const snow=document.createElement("div");

snow.className="snow";

document.body.appendChild(snow);

for(let i=0;i<70;i++){

const flake=document.createElement("span");

flake.style.left=Math.random()*100+"%";

flake.style.animationDuration=(6+Math.random()*8)+"s";

flake.style.animationDelay=Math.random()*8+"s";

flake.style.opacity=Math.random();

flake.style.width=(4+Math.random()*8)+"px";

flake.style.height=flake.style.width;

snow.appendChild(flake);

}

/*==================================================
CURSOR GLOW
==================================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*==================================================
SERVICE ACCORDION
==================================================*/

document.querySelectorAll(".service-toggle").forEach(btn=>{

btn.addEventListener("click",()=>{

const card=btn.closest(".service-card");

card.classList.toggle("active");

});

});

/*==================================================
SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".service-card,.product-card,.review-card,.counter-box,.gallery-grid img,.feature-box,.card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

item.classList.add("fade-up");

revealObserver.observe(item);

});

/*==================================================
ACTIVE NAV LINK
==================================================*/

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll("#navbar a").forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

});

/*==================================================
SMOOTH INTERNAL SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==================================================
IMAGE LAZY LOADING
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.decoding="async";

});
/*==================================================
 Fine Aircon Jaipur V2
 Part 3
==================================================*/

/* ==========================
 Brand Logo Auto Scroll
========================== */

const brandSlider=document.querySelector(".brand-slider");

if(brandSlider){

let speed=1;

function autoSlide(){

brandSlider.scrollLeft+=speed;

if(

brandSlider.scrollLeft>=

brandSlider.scrollWidth-

brandSlider.clientWidth

){

brandSlider.scrollLeft=0;

}

requestAnimationFrame(autoSlide);

}

autoSlide();

}

/* ==========================
 Product Search
========================== */

const productSearch=document.getElementById("productSearch");

if(productSearch){

productSearch.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?"block":"none";

});

});

}

/* ==========================
 Service Search
========================== */

const serviceSearch=document.getElementById("serviceSearch");

if(serviceSearch){

serviceSearch.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?"block":"none";

});

});

}

/* ==========================
 Booking Form
========================== */

const bookingForm=document.querySelector("form");

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=bookingForm.querySelector("input[type='text']");

const phone=bookingForm.querySelector("input[type='tel']");

if(name && name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(phone && phone.value.trim().length<10){

alert("Please enter a valid mobile number.");

phone.focus();

return;

}

alert("Thank you! Your booking request has been submitted.");

bookingForm.reset();

});

}

/* ==========================
 WhatsApp Pulse
========================== */

const whatsapp=document.querySelector(".floating-whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.12)"},

{transform:"scale(1)"}

],{

duration:900

});

},3500);

}

/* ==========================
 Gallery Lightbox
========================== */

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.cssText=`
position:fixed;
inset:0;
background:rgba(0,0,0,.9);
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
cursor:pointer;
`;

const image=document.createElement("img");

image.src=img.src;

image.alt=img.alt;

image.style.cssText=`
max-width:90%;
max-height:90%;
border-radius:18px;
box-shadow:0 20px 60px rgba(0,0,0,.5);
`;

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

});

});

/* ==========================
 Footer Year
========================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ==========================
 Console
========================== */

console.log("✅ Fine Aircon Jaipur V2 Loaded Successfully");