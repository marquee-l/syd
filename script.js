const nameInput = document.getElementById("nameInput");
const flightInput = document.getElementById("flightInput");
const logoSelect = document.getElementById("logoSelect");
const showBtn = document.getElementById("showBtn");
const formContainer = document.querySelector(".form-container");
const formMessages = document.getElementById("form-messages");
const nameboard = document.getElementById("nameboard");
const displayName = document.getElementById("displayName");
const displayFlight = document.getElementById("displayFlight");
const backBtn = document.getElementById("backBtn");
const overlay = document.getElementById("overlay");

// List of logos that need a "light" overlay (text should be black)
const lightLogos = [
  "white_blank_logo.png",
  "viator_logo.png", // Add any other logos that are mostly white/bright
  "firstlight_logo.png"
];

// Set default logo
logoSelect.value = "marquee_logo.png";

showBtn.addEventListener("click", function () {
  formMessages.textContent = "";

  const name = nameInput.value.trim();
  const flight = flightInput.value.trim();
  const logo = logoSelect.value;

  if (!name) {
    formMessages.textContent = "Please enter a Name.";
    formMessages.className = "error";
    return;
  }

  displayName.textContent = name;
  displayFlight.textContent = flight ? "Flight: " + flight : "";

  // Set nameboard background image
  nameboard.style.backgroundImage = `url("Images/${logo}")`;
  nameboard.style.display = "flex";
  formContainer.style.display = "none";

  // Set overlay and text color for contrast
  if (lightLogos.includes(logo)) {
    overlay.classList.add("light-bg");
  } else {
    overlay.classList.remove("light-bg");
  }
});

backBtn.addEventListener("click", function () {
  nameboard.style.display = "none";
  formContainer.style.display = "block";
  nameboard.style.backgroundImage = "";
});
