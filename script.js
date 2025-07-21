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

// List of logos which should use a white background and black text
const whiteBgLogos = [
  "Images/tbr_logo.png",
  "Images/white_blank_logo.png",
  "Images/viator_logo.png",
  "Images/firstlight_logo.png"
  // Add more white-background logos here as you add them!
];

// Set default logo
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

  // Set name and flight (no prefix)
  displayName.textContent = name;
  displayFlight.textContent = flight;

  // Switch to white or black background mode
  if (whiteBgLogos.includes(logo)) {
    nameboard.classList.add("white-bg");
  } else {
    nameboard.classList.remove("white-bg");
  }

  // Show board
  nameboard.style.display = "flex";
  formContainer.style.display = "none";

  // Fullscreen
  if (nameboard.requestFullscreen) {
    nameboard.requestFullscreen();
  } else if (nameboard.webkitRequestFullscreen) { /* Safari */
    nameboard.webkitRequestFullscreen();
  } else if (nameboard.msRequestFullscreen) { /* IE11 */
    nameboard.msRequestFullscreen();
  }
});

// Listen for accidental ESC or fullscreen exit
document.addEventListener('fullscreenchange', function() {
  if (!document.fullscreenElement && nameboard.style.display === "flex") {
    backBtn.click();
  }
});

backBtn.addEventListener("click", function () {
  nameboard.style.display = "none";
  formContainer.style.display = "block";
  brandLogo.src = "";
  displayName.textContent = "";
  displayFlight.textContent = "";

  // Exit fullscreen if active
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
});
