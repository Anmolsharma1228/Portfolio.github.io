const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[55px]");
}

const certificate = [
  "./images/certificate2.png",
  "./images/certificate3.png",
  "./images/certificate4.png",
  "./images/certificate5.png",
  "./images/certificate6.png",
  "./images/certificate7.png",
  "./images/certificate8.png",
  "./images/certificate9.png",
  "./images/certificate10.png",
  "./images/certificate11.png",
  "./images/certificate12.png",
];

let index = 0;
const certificateElements = document.querySelector("#certificates");

setInterval(() => {
  certificateElements.style.opacity = "0";

  setTimeout(() => {
    index = (index + 1) % certificate.length;
    certificateElements.src = certificate[index];

    certificateElements.style.opacity = "1";
  }, 1000);
}, 4000);
