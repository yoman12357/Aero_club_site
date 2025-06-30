function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
const text = "Welcome to Aero NITK | Wings of Teamwork";
let index = 0;
const speed = 100; // typing speed in ms

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

