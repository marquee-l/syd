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
const brandLogo = document.getElementById("brandLogo");
const logoArea = document.getElementById("logoArea");

// Logos which should use a white background and black text
const whiteBgLogos = [
  "Images/tbr_logo.png",
  "Images/viator_logo.png",
  "Images/firstlight_logo.png",
  "Images/rozlo_logo.png",      // Added
  "Images/teleport_logo.png"    // Added
];

logoSelect.value = "Images/marquee_logo.png";

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

  // Set logo image and adjust layout for logo/no-logo
  if (logo && logo !== "none") {
    brandLogo.src = logo;
    brandLogo.style.display = "block";
    nameboard.classList.remove("no-logo");
  } else {
    brandLogo.src = "";
    brandLogo.style.display = "none";
    nameboard.classList.add("no-logo");
  }

  displayName.textContent](#)

