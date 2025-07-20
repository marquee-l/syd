// Get elements
const nameInput = document.getElementById("nameInput");
const flightInput = document.getElementById("flightInput");
const logoSelect = document.getElementById("logoSelect");
const showBtn = document.getElementById("showBtn");
const formContainer = document.querySelector(".form-container");
const formMessages = document.getElementById("form-messages");
const nameboard = document.getElementById("nameboard");
const displayName = document.getElementById("displayName");
const displayFlight = document.getElementById("displayFlight");
const logoBackground = document.getElementById("logoBackground");
const backBtn = document.getElementById("backBtn");
const displayMessage = document.getElementById("displayMessage");

// Set default logo
logoSelect.value = "marquee_logo.png";

// Show Nameboard button event
showBtn.addEventListener("click", function () {
  formMessages.textContent = "";
  displayMessage.textContent = "";

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
  logoBackground.src = "Images/" + logo;
  logoBackground.alt = logo.replace("_logo.png", "").replace("_blank", " Blank");

  formContainer.style.display = "none";
  nameboard.style.display = "block";
});

// Back button event
backBtn.addEventListener("click", function () {
  nameboard.style.display = "none";
  formContainer.style.display = "block";
});
