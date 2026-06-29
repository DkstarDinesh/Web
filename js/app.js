/* ==========================================
   Fine Aircon
   app.js
========================================== */

/* Loader */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/* Mobile Menu */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


/* Close Menu */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

    });

});


/* Sticky Header */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* Active Navigation */

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================================
   Back To Top Button
========================================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
left:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#007BFF;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.2);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   Scroll Reveal
========================================== */

const revealItems=document.querySelectorAll(

".card,.service,.service-card,.review-card,.brand"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});


/* ==========================================
   Counter Animation
========================================== */

const counters=document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

const current=+(counter.dataset.count||0);

const increment=Math.ceil(target/80);

if(current<target){

const next=Math.min(current+increment,target);

counter.dataset.count=next;

if(counter.innerText.includes("+")){

counter.innerText=next+"+";

}else{

counter.innerText=next;

}

requestAnimationFrame(update);

}

};

update();

});


/* ==========================================
   Floating Buttons
========================================== */

const whatsapp=document.querySelector(".whatsapp-btn");

if(whatsapp){

whatsapp.addEventListener("click",()=>{

console.log("WhatsApp Click");

});

}

const callBtn=document.querySelector(".call-btn");

if(callBtn){

callBtn.addEventListener("click",()=>{

console.log("Call Click");

});

}
/* ==========================================
   Fine Aircon
   app.js - Part 3
========================================== */

/* Search */

const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {

    serviceSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(value) ? "block" : "none";

        });

    });

}

const productSearch = document.getElementById("productSearch");

if (productSearch) {

    productSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(value) ? "block" : "none";

        });

    });

}

/* Category Filter */

document.querySelectorAll(".category-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        document.querySelectorAll(".category-btn")
            .forEach(b => b.classList.remove("active"));

        this.classList.add("active");

        const category = this.dataset.category;

        document.querySelectorAll(".service-card,.product-card")
            .forEach(card => {

                if (category === "all") {

                    card.style.display = "block";

                } else {

                    if (card.dataset.category === category) {

                        card.style.display = "block";

                    } else {

                        card.style.display = "none";

                    }

                }

            });

    });

});

/* Contact Form */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your request has been received.");

        form.reset();

    });

}

/* Current Year */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* Console */

console.log("Fine Aircon Website Loaded Successfully");