// Get average time of all solves
export const getAverage = times => {
	let result = 0;
	times.forEach(time => result += parseFloat(time));

	return (result / getAmount(times)).toFixed(2);
}

// Get amount of times
export const getAmount = times => times.length;

// Get best time
export const getBest = times => {
	let best = 100000;
	times.forEach(time => {
		if(time < best) {
			best = time;
		}
	});

	return best;
}

// Generate scramble text for the user to follow
export const generateScramble = () => {
	let sides = [`U`, `F`, `R`, `D`, `B`, `L`];
	let angles = [``, `\'`, `2`];

	let previousSides = [];
	let scramble = ``;

	for(let i = 0; i < 20; i++) {
		// Generate a random number from 0 to 5 for the side
		let side = Math.floor(Math.random() * 6);

		while(previousSides.includes(side)) {
			side = Math.floor(Math.random() * 6);
		}

		// Add sides to previous sides
		previousSides.push(side);

		if(previousSides.length == 3) {
			previousSides.splice(0, 1);
		}
		if(previousSides.length == 2) {
			// Check for opposite sides
			if(previousSides[0] + 3 != previousSides[1] && previousSides[0] - 3 != previousSides[1]) {
				previousSides.splice(0, 1);
			}
		}

		// Generate an angle
		let angle = Math.floor(Math.random() * 3);

		scramble += ` ` + sides[side] + angles[angle] + `\xa0`;
	}

	return scramble;
}