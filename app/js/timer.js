// Time of starting solve
let startTime, interval;

// Boolean is user in solve
let inSolve = 0;

// Boolean is user in process of starting a solve
let startingSolve = 0;

// Timeout variable to set timer green when user has held the space bar for long enough
let spaceBarTimeout;

// Begin timestamp and duration of the time the user has held down the space bar
let spaceBarPressedBegin, spaceBarPressedDuration;

// Start a solve
const startSolve = () => {
	inSolve = 1
	startTime = Date.now();
	interval = setInterval(() => updateDisplay(Date.now() - startTime));
}

// Cancel a solve
const cancelSolve = () => {
	setTimer("black");
	startingSolve = 0;
}

// Stop a solve
const stopSolve = () => {
	inSolve = 0;
	startingSolve = 0;
	setTimer("black");
	clearInterval(interval);
}

// Change color of timer
const setTimer = color => document.getElementById("timer").style.color = color;

// Update time of timer
const updateDisplay = currentTime => document.getElementById("timer").innerHTML = (currentTime / 1000).toFixed(2);

// When user presses down a key
document.onkeydown = (event) => {
	// Check for space bar
	if(event.code !== "Space") {
		return;
	}

	// Check if user is in solve
	if(inSolve == 1) {
		stopSolve();
		return;
	}

	// If user is already starting solve
	if(startingSolve) {
		return;
	}

	startingSolve = 1;
	document.getElementById("timer").innerHTML = "0.00";

	// Get timestamp when the user holds the space key
	spaceBarPressedBegin = event.timeStamp;

	// Set timer to red -> indicate that he has to hold
	setTimer("red");

	// Set timeout for timer to become green so that the user can begin their solve
	spaceBarTimeout = setTimeout(() => setTimer("green"), 500);
}

// When user releases a key
document.onkeyup = (event) => {
	// Check for space bar
	if(event.code !== "Space") {
		return;
	}

	// Check if user is starting their solve
	if(!startingSolve) {
		return;
	}

	// Get how long has the user held the space bar
	spaceBarPressedDuration = (event.timeStamp - spaceBarPressedBegin) / 1000;

	// Clear timeout, we don't need it anymore
	clearTimeout(spaceBarTimeout);

	// Check if user has held down long enough
	if(spaceBarPressedDuration < 0.5) {
		cancelSolve();
		return;
	}

	// Start solve because user has held long enough
	startSolve();

}