
// toggle icon navbar
let menuIcon = document.querySelector("#meu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}
// toggle scroll section active link
