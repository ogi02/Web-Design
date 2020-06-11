// Imports from times.js
import { getAmount, getAverage, getBest, generateScramble } from './times.js';

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

// Array with all solves
let solves = [];

// Prepare a solve
const prepareSolve = () => document.getElementById(`scramble`).innerText = generateScramble()
window.prepareSolve = prepareSolve;

// Process a solve
const processSolve = () => {
	// Get solve time
	let solveTime = document.getElementById(`timer`).innerHTML;

	// Add solve time to array
	solves.push(solveTime);

	// Prepare and add paragraph with solve id and solve time
	let paragraph = document.createElement(`P`);
	paragraph.innerHTML = `<p>Solve ` + solves.length + `: <strong>` + solveTime + `</strong></p>`;
	document.getElementById(`times`).appendChild(paragraph);

	// Update best solve if needed
	document.getElementById(`best`).innerHTML = `Best of ` + solves.length + `: <strong>` + getBest(solves) + `</strong>`;

	// Update average time of solves
	document.getElementById(`average`).innerHTML = `Average of ` + solves.length + `: <strong>` + getAverage(solves) + `</strong>`;

}

// Start a solve
const startSolve = () => {
	inSolve = 1;
	startTime = Date.now();
	interval = setInterval(() => updateDisplay(Date.now() - startTime));
}

// Cancel a solve
const cancelSolve = () => {
	setTimer(`black`);
	startingSolve = 0;
}

// Stop a solve
const stopSolve = () => {
	// User is not in solve and is not starting one
	inSolve = 0;
	startingSolve = 0;

	// Change timer color
	setTimer(`black`);

	// Stop timer and display solve time
	clearInterval(interval);
	displayFinalTime(Date.now() - startTime);

	// Process solve -> add solve to screen, change best and average
	processSolve();

	// Prepare next solve -> generate scramble for next solve
	prepareSolve();
}

// Change color of timer
const setTimer = color => document.getElementById(`timer`).style.color = color;

// Update time of timer
const updateDisplay = currentTime => document.getElementById(`timer`).innerHTML = Math.floor((currentTime / 1000))

// Display final time
const displayFinalTime = currentTime => document.getElementById(`timer`).innerHTML = (currentTime / 1000).toFixed(2)

// When user presses down a key
document.onkeydown = (event) => {
	// Check for space bar
	if(event.code !== `Space`) {
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
	document.getElementById(`timer`).innerHTML = `0`;

	// Get timestamp when the user holds the space key
	spaceBarPressedBegin = event.timeStamp;

	// Set timer to red -> indicate that he has to hold
	setTimer(`red`);

	// Set timeout for timer to become green so that the user can begin their solve
	spaceBarTimeout = setTimeout(() => setTimer(`green`), 500);
}

// When user releases a key
document.onkeyup = (event) => {
	// Check for space bar
	if(event.code !== `Space`) {
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

// When user presses screen (on phone)
document.getElementById(`timer`).ontouchstart = (event) => {
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
	document.getElementById(`timer`).innerHTML = `0`;

	// Get timestamp when the user holds the space key
	spaceBarPressedBegin = event.timeStamp;

	// Set timer to red -> indicate that he has to hold
	setTimer(`red`);

	// Set timeout for timer to become green so that the user can begin their solve
	spaceBarTimeout = setTimeout(() => setTimer(`green`), 500);
}

// When user releases screen (on phone)
document.getElementById(`timer`).ontouchend = (event) => {
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