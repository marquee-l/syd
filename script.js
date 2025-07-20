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
const brandName = document.getElementById("brandName");

// Map logo filenames to display name
const logoMap = {
  "marquee_logo.png": "Marquee Limousines",
  "blacklane_logo.png": "Blacklane",
  "dakota_logo.png": "Dakota",
  "firstlight_logo.png": "Firstlight",
  "royale_logo.png": "Royale",
  "tbr_logo.png": "TBR",
  "viator_logo.png": "Viator",
  "white_blank_logo.png": "",
  "black_blank_logo.png": ""
};

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

  // Set logo image and name
  brandLogo.src = "Images/" + logo;
  brandLogo.style.display = logoMap[logo] ? "block" : "none";
  brandLogo.alt = logoMap[logo];
  brandName.textContent = logoMap[logo];

  // Set name and flight
  displayName.textContent = name;
  displayFlight.textContent = flight ? `Flight: ${flight}` : "";

  // Show board
  nameboard.style.display = "flex";
  formContainer.style.display = "none";
});

backBtn.addEventListener("click", function () {
  nameboard.style.display = "none";
  formContainer.style.display = "block";
  brandLogo.src = "";
  brandName.textContent = "";
  displayName.textContent = "";
  displayFlight.textContent = "";
});
