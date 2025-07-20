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

  // Set logo image
  brandLogo.src = "Images/" + logo;
  brandLogo.style.display = "block";

  // Set name and flight (no prefix)
  displayName.textContent = name;
  displayFlight.textContent = flight;

  // Show board
  nameboard.style.display = "flex";
  formContainer.style.display = "none";

  // Go fullscreen!
  if (nameboard.requestFullscreen) {
    nameboard.requestFullscreen();
  } else if (nameboard.webkitRequestFullscreen) { /* Safari */
    nameboard.webkitRequestFullscreen();
  } else if (nameboard.msRequestFullscreen) { /* IE11 */
    nameboard.msRequestFullscreen();
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
