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


const space = document.getElementById("space-container");

// Load 10 satellites
for (let i = 0; i < 20; i++) {
  const sat = document.createElement("img");
  sat.src = "satellite_image.png"; // Replace with your actual path
  sat.className = "satellite";

  // Random position (within screen bounds)
  sat.style.top = Math.random() * 90 + "%";
  sat.style.left = Math.random() * 90 + "%";

  // Random animation delay & duration
  const delay = Math.random() * 5;
  const duration = 2 + Math.random() * 5;
  sat.style.animationDelay = `${delay}s`;
  sat.style.animationDuration = `${duration}s`;

  space.appendChild(sat);
}

