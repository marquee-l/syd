const passengerNameInput = document.getElementById('passengerName');
const flightDetailsInput = document.getElementById('flightDetails');
const backgroundSelect = document.getElementById('backgroundSelect');
const passengerNameDiv = document.getElementById('passengerNameDisplay');
const flightDetailsDiv = document.getElementById('flightDetailsDisplay');
const nameBoardDisplay = document.getElementById('nameBoardDisplay');
const controlsContainer = document.getElementById('controlsContainer');
const showBoardBtn = document.getElementById('showBoardBtn');
const backBtn = document.getElementById('backBtn'); // If you keep the back button

function showNameBoard() {
    const name = passengerNameInput.value.trim();
    const flight = flightDetailsInput.value.trim();
    const selectedBackground = backgroundSelect.value;

    if (name === '') {
        alert('Please enter a passenger name.');
        return;
    }

    passengerNameDiv.textContent = name.toUpperCase();
    flightDetailsDiv.textContent = flight;

    // Remove all possible logo classes
    nameBoardDisplay.classList.remove(
        'marquee_logo',
        'blacklane_logo',
        'royale_logo',
        'dakota_logo',
        'black_blank_logo',
        'tbr_logo',
        'firstlight_logo',
        'viator_logo',
        'white_blank_logo',
        'none'
    );
    // Clear inline background and text styles
    nameBoardDisplay.style.backgroundColor = '';
    passengerNameDiv.style.color = '';
    flightDetailsDiv.style.color = '';
    passengerNameDiv.style.textShadow = '';
    flightDetailsDiv.style.textShadow = '';

    // Add the selected background class or set default background
    if (selectedBackground !== 'none') {
        nameBoardDisplay.classList.add(selectedBackground);
    } else {
        nameBoardDisplay.style.backgroundColor = '#000';
        passengerNameDiv.style.color = '#fff';
        flightDetailsDiv.style.color = '#fff';
        passengerNameDiv.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
        flightDetailsDiv.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
    }

    controlsContainer.classList.add('hidden');
    nameBoardDisplay.classList.remove('hidden');
}

function resetBoard() {
    passengerNameInput.value = '';
    flightDetailsInput.value = '';
    backgroundSelect.value = 'none';
    nameBoardDisplay.classList.add('hidden');
    controlsContainer.classList.remove('hidden');
}

// Add event listeners for buttons
showBoardBtn.addEventListener('click', showNameBoard);
if (backBtn) {
    backBtn.addEventListener('click', resetBoard);
}
