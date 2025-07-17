// Fullscreen logic
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

document.addEventListener('DOMContentLoaded', function () {
  var showBtn = document.getElementById('showNameboardBtn');
  var exitBtn = document.getElementById('exitFullscreenBtn');
  var updateBtn = document.getElementById('updateNameboardBtn');
  var form = document.getElementById('input-form');
  var nameboard = document.getElementById('nameboard-container');
  var nameInput = document.getElementById('nameInput');
  var infoInput = document.getElementById('infoInput');
  var nameDisplay = document.getElementById('nameDisplay');
  var infoDisplay = document.getElementById('infoDisplay');

  // Show Nameboard button
  showBtn.addEventListener('click', function () {
    // Update display values
    nameDisplay.textContent = nameInput.value;
    infoDisplay.textContent = infoInput.value;
    // Hide form, show nameboard
    form.style.display = 'none';
    nameboard.style.display = 'block';
    // Go fullscreen
    goFullScreen();
  });

  // Update Nameboard button
  updateBtn.addEventListener('click', function () {
    nameDisplay.textContent = nameInput.value;
    infoDisplay.textContent = infoInput.value;
    // Hide form, show nameboard (but not fullscreen)
    form.style.display = 'none';
    nameboard.style.display = 'block';
  });

  // Exit Fullscreen button
  exitBtn.addEventListener('click', function () {
    exitFullScreen();
  });

  // Show exit button only in fullscreen
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);

  // Allow to go back to input form by clicking anywhere on the board (when not fullscreen)
  nameboard.addEventListener('click', function () {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      nameboard.style.display = 'none';
      form.style.display = 'block';
    }
  });
});
