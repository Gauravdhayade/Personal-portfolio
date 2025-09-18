// Typing Effect
const texts = ["Java Full Stack Developer", "React & Spring Boot Enthusiast", "Tech Explorer 🚀"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Back to Top
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
