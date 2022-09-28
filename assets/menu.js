const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
const navLinkButton = document.querySelectorAll(".nav-link-button");
navLink.forEach(n => n.addEventListener("click", closeMenu));
navLinkButton.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
}
