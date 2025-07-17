// fullscreen.js

// Function to request fullscreen for the whole document or a specific element
function goFullScreen() {
  const element = document.documentElement; // For whole page

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen();
  }
}

// Function to exit fullscreen mode
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// Optionally show/hide the exit button based on fullscreen state
function handleFullscreenChange() {
  var exitBtn = document.getElementById('exitFullscreenBtn');
  if (exitBtn) {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      exitBtn.style.display = 'block';
    } else {
      exitBtn.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var showBtn = document.getElementById('showNameboardBtn');
  if (showBtn) {
    showBtn.addEventListener('click', goFullScreen);
  }

  var exitBtn = document.getElementById('exitFullscreenBtn');
  if (exitBtn) {
    exitBtn.addEventListener('click', exitFullScreen);
    exitBtn.style.display = 'none'; // Hide initially
  }

  // Listen for fullscreen change events to show/hide exit button
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
});
