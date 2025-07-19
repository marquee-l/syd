const nameInput = document.getElementById("nameInput");
const flightInput = document.getElementById("flightInput");
const logoSelect = document.getElementById("logoSelect");
const showBtn = document.getElementById("showBtn");
const nameboard = document.getElementById("nameboard");
const displayName = document.getElementById("displayName");
const displayFlight = document.getElementById("displayFlight");
const logoBackground = document.getElementById("logoBackground");
const backBtn = document.getElementById("backBtn");
const formContainer = document.querySelector(".form-container");
const formMessages = document.getElementById("form-messages");
const displayMessage = document.getElementById("displayMessage");

logoSelect.value = "marquee_logo.png";

let lastName = "";
let lastFlight = "";
let lastLogo = "marquee_logo.png";

showBtn.addEventListener("click", function () {
  formMessages.textContent = ""; // Clear previous messages
  displayMessage.textContent = ""; // Clear previous display messages
  const name = nameInput.value.trim();
  const flight = flightInput.value.trim();
  const logo = logoSelect.value;

  // Validation with user feedback
  if (!name) {
    formMessages.textContent = "Please enter a Name.";
    formMessages.className = "error";
    return;
  }

  displayName.textContent = name;
  // Only display the flight detail if provided
  displayFlight.textContent = flight ? flight : "";

  logoBackground.style.backgroundImage = `url('Images/${logo}')`;
  logoBackground.style.backgroundSize = "contain";
  logoBackground.style.backgroundRepeat = "no-repeat";
  logoBackground.style.backgroundPosition = "center";

  formContainer.classList.add("hidden");
  nameboard.classList.remove("hidden");

  lastName = name;
  lastFlight = flight;
  lastLogo = logo;

  // Show confirmation message
  displayMessage.textContent = "Nameboard displayed successfully!";
  displayMessage.className = "success";
});

backBtn.addEventListener("click", function () {
  nameboard.classList.add("hidden");
  formContainer.classList.remove("hidden");
  nameInput.value = lastName;
  flightInput.value = lastFlight;
  logoSelect.value = lastLogo;
  formMessages.textContent = "";
});const nameInput = document.getElementById("nameInput");
const flightInput = document.getElementById("flightInput");
const logoSelect = document.getElementById("logoSelect");
const showBtn = document.getElementById("showBtn");
const nameboard = document.getElementById("nameboard");
const displayName = document.getElementById("displayName");
const displayFlight = document.getElementById("displayFlight");
const logoBackground = document.getElementById("logoBackground");
const backBtn = document.getElementById("backBtn");
const formContainer = document.querySelector(".form-container");
const formMessages = document.getElementById("form-messages");
const displayMessage = document.getElementById("displayMessage");

logoSelect.value = "marquee_logo.png";

let lastName = "";
let lastFlight = "";
let lastLogo = "marquee_logo.png";

showBtn.addEventListener("click", function () {
  formMessages.textContent = ""; // Clear previous messages
  displayMessage.textContent = ""; // Clear previous display messages
  const name = nameInput.value.trim();
  const flight = flightInput.value.trim();
  const logo = logoSelect.value;

  // Validation with user feedback
  if (!name) {
    formMessages.textContent = "Please enter a Name.";
    formMessages.className = "error";
    return;
  }

  displayName.textContent = name;
  // Only display the flight detail if provided
  displayFlight.textContent = flight ? flight : "";

  logoBackground.style.backgroundImage = `url('Images/${logo}')`;
  logoBackground.style.backgroundSize = "contain";
  logoBackground.style.backgroundRepeat = "no-repeat";
  logoBackground.style.backgroundPosition = "center";

  formContainer.classList.add("hidden");
  nameboard.classList.remove("hidden");

  lastName = name;
  lastFlight = flight;
  lastLogo = logo;

  // Show confirmation message
  displayMessage.textContent = "Nameboard displayed successfully!";
  displayMessage.className = "success";
});

backBtn.addEventListener("click", function () {
  nameboard.classList.add("hidden");
  formContainer.classList.remove("hidden");
  nameInput.value = lastName;
  flightInput.value = lastFlight;
  logoSelect.value = lastLogo;
  formMessages.textContent = "";
});
