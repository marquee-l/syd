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
const logoTitle = document.getElementById("logoTitle");

// For overlay/text contrast, you can adjust this array as needed
const lightLogos = [
  "white_blank_logo.png",
  "viator_logo.png",
  "firstlight_logo.png"
];

// Helper: get logo display name from value
function getLogoDisplayName(filename) {
  const map = {
    "marquee_logo.png": "MARQUEE",
    "blacklane_logo.png": "BLACKLANE",
    "dakota_logo.png": "DAKOTA",
    "firstlight_logo.png": "FIRSTLIGHT",
    "royale_logo.png": "ROYALE",
    "tbr_logo.png": "TBR",
    "viator_logo.png": "VIATOR",
    "white_blank_logo.png": "",
    "black_blank_logo.png": ""
  };
  return map[filename] || "";
}

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

  // Set the title (logo brand) at the top
  logoTitle.textContent = getLogoDisplayName(logo);

  // Set name and flight
  displayName.textContent = name;
  displayFlight.textContent = flight ? `Flight: ${flight}` : "";

  // Set background image for the nameboard
  nameboard.style.backgroundImage = `url("Images/${logo}")`;
  nameboard.style.display = "flex";
  formContainer.style.display = "none";
});

backBtn.addEventListener("click", function () {
  nameboard.style.display = "none";
  formContainer.style.display = "block";
  nameboard.style.backgroundImage = "";
});
