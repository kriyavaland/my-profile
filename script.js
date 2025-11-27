// Show body immediately to avoid black screen
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// Typing animation for header
const text = "Heyy, I'm Kriyaa";
const speed = 120;
let index = 0;

function typeEffect() {
    document.querySelector(".typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;

// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('.section-animate');

function reveal() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();
