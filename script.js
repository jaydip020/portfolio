// =========================
// Typing Effect
// =========================

const words = [
    "Web Developer",
    "Python Programmer",
    "Frontend Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1200;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// Dark / Light Mode
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

});


// =========================
// Mobile Menu
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// Scroll To Top Button
// =========================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});