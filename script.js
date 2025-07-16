// ... (existing code) ...
const passengerNameInput = document.getElementById('passengerName'); // Update with your actual input's ID
const flightDetailsInput = document.getElementById('flightDetails'); // Update with your actual input's ID
const backgroundSelect = document.getElementById('backgroundSelect');
const passengerNameDiv = document.getElementById('passengerNameDisplay'); // Update with your actual display div's ID
const flightDetailsDiv = document.getElementById('flightDetailsDisplay'); // Update with your actual display div's ID
const nameBoardDisplay = document.getElementById('nameBoardDisplay'); // Update with your actual board div's ID
const controlsContainer = document.getElementById('controlsContainer'); // Update as needed

// ... your showNameBoard function here ...
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

        // --- IMPORTANT CHANGE HERE ---
        // Clear ALL possible existing background classes from the display div
        // You MUST list ALL the 'value' attributes from your <option> tags here
        nameBoardDisplay.classList.remove('marquee_logo', 'blacklane_logo', 'royale_logo', 'dakota_logo', 'black_blank_logo', 'tbr_logo', 'firstlight_logo', 'viator_logo', 'white_blank_logo', 'none'); // <-- Update this line!
        nameBoardDisplay.style.backgroundColor = ''; // Clear inline background color
        // Also clear any inline text styles that might have been set by the 'none' option
        passengerNameDiv.style.color = '';
        flightDetailsDiv.style.color = '';
        passengerNameDiv.style.textShadow = '';
        flightDetailsDiv.style.textShadow = '';


        // Add the selected background class or set default background
        if (selectedBackground !== 'none') {
            nameBoardDisplay.classList.add(selectedBackground);
            // Text color and shadow are now handled purely by the CSS classes (e.g., .logo-alpha, .logo-beta)
        } else {
            // This is the 'No Logo' option, explicitly set black background and white text
            nameBoardDisplay.style.backgroundColor = '#000';
            passengerNameDiv.style.color = '#fff';
            flightDetailsDiv.style.color = '#fff';
            passengerNameDiv.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
            flightDetailsDiv.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
        }

        controlsContainer.classList.add('hidden');
        nameBoardDisplay.classList.remove('hidden');

        // ... (rest of the showNameBoard function) ...
    }

// ... (rest of the script.js) ...
