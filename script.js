const hamburger = document.getElementById("hamburger-icon");
const nav = document.getElementById("navbar-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("isActive");
});
