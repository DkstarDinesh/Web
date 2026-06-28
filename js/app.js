/*====================================
 Smart E-Service Portal
 app.js
====================================*/

/* Loader */

window.addEventListener("load", () => {
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

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/* Close menu after click */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

    });

});

/* Sticky Header */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

    } else {

        header.style.padding = "";
        header.style.boxShadow = "";

    }

});

/* Scroll Reveal */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});

/* Counter Animation */

const counters = document.querySelectorAll(".stats h2");

const runCounter = (counter) => {

    const targetText = counter.innerText;

    const target = parseInt(targetText.replace(/\D/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    const speed = Math.max(1, Math.floor(target / 100));

    const update = () => {

        count += speed;

        if (count >= target) {

            counter.innerText = targetText;

        } else {

            if (targetText.includes("+")) {

                counter.innerText = count + "+";

            } else {

                counter.innerText = count;

            }

            requestAnimationFrame(update);

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* Back To Top */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#2563eb;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.2);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* Active Navigation */

const current = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === current || (current === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/* Current Year */

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${year} Smart E-Service Portal. All Rights Reserved.`;

                                          }
