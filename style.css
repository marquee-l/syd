function goFullScreen() {
  const element = document.documentElement;
  if (element.requestFullscreen) element.requestFullscreen();
  else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
  else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
  else if (element.msRequestFullscreen) element.msRequestFullscreen();
}
function exitFullScreen() {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
}
function handleFullscreenChange() {
  var exitBtn = document.getElementById('exitFullscreenBtn');
  if (exitBtn) {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      exitBtn.style.display = 'block';
    } else {
      exitBtn.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var showBtn = document.getElementById('showNameboardBtn');
  var exitBtn = document.getElementById('exitFullscreenBtn');
  var form = document.getElementById('input-form');
  var nameboard = document.getElementById('nameboard-container');
  var nameInput = document.getElementById('nameInput');
  var infoInput = document.getElementById('infoInput');
  var nameDisplay = document.getElementById('nameDisplay');
  var infoDisplay = document.getElementById('infoDisplay');
  var logoSelect = document.getElementById('logoSelect');

  showBtn.addEventListener('click', function () {
    nameDisplay.textContent = nameInput.value;
    infoDisplay.textContent = infoInput.value;
    var selectedLogo = logoSelect.value;

    // Set background image
    if (selectedLogo !== "none") {
      nameboard.style.backgroundImage = 'url(' + selectedLogo + ')';
      nameboard.style.backgroundSize = 'cover';
      nameboard.style.backgroundPosition = 'center';
      nameboard.style.backgroundRepeat = 'no-repeat';
    } else {
      nameboard.style.backgroundImage = '';
      nameboard.style.backgroundColor = '#fff';
    }

    // Set text color based on background logo
    let blackLogos = [
      "Images/marquee_logo.png",
      "Images/royale_logo.png",
      "Images/dakota_logo.png"
    ];
    let whiteLogos = [
      "Images/firstlight_logo.png",
      "Images/tbr_logo.png",
      "Images/viator_logo.png"
    ];
    if (blackLogos.includes(selectedLogo)) {
      nameDisplay.style.color = "#fff";
      infoDisplay.style.color = "#fff";
    } else if (whiteLogos.includes(selectedLogo)) {
      nameDisplay.style.color = "#000";
      infoDisplay.style.color = "#000";
    } else {
      // Default for blank/no logo, fallback to black text
      nameDisplay.style.color = "#000";
      infoDisplay.style.color = "#000";
    }

    // Hide form, show nameboard
    form.style.display = 'none';
    nameboard.style.display = 'flex';

    // Go fullscreen
    goFullScreen();
  });

  exitBtn.addEventListener('click', function () {
    exitFullScreen();
  });

  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);

  // Clicking nameboard returns to form if not in fullscreen
  nameboard.addEventListener('click', function () {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      nameboard.style.display = 'none';
      form.style.display = 'block';
      // Clear background image and reset color for next time
      nameboard.style.backgroundImage = '';
      nameboard.style.backgroundColor = '#fff';
      nameDisplay.style.color = "#000";
      infoDisplay.style.color = "#000";
    }
  });
});
