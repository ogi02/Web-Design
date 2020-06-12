const cmllCoAlgorithms = [
	"R U2 R' U' R U R' U' R U' R'",
	"R U2' R2 U' R2 U' R2 U2' R",
	"R2 D R' U2 R D' R' U2 R'",
	"l' U' L U R U' r' F",
	"R' F R B' R' F' R B",
	"R' U' R U' R' U2 R",
	"L U L' U L U2 L'",
]

const cmllCpAlgorithms = [
	"R U R' U' R' F R2 U' R' U' R U R' F'",
	"F R U' R' U' R U R' F' R U R' U' R' F R F'"
]

export const generateCmllCases = () => {

	let holder = document.getElementById("corner-orientation");

	for(let i = 1; i <= 7; i++) {
		// Create section
		let section = document.createElement("SECTION");
		section.classList.add("case");

		// Add section title
		let title = document.createElement("H4");
		let title_text = document.createTextNode(i);
		title.appendChild(title_text);
		section.appendChild(title);

		// Add section image
		let image = document.createElement("IMG");
		image.setAttribute("alt", "cmll-co-case-" + i);
		image.setAttribute("src", "../../assets/images/roux/cmll/cmll-co-case-" + i + ".png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(cmllCoAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}

	holder = document.getElementById("corner-permutation");

	for(let i = 1; i <= 2; i++) {
		// Create section
		let section = document.createElement("SECTION");
		section.classList.add("case");

		// Add section title
		let title = document.createElement("H4");
		let title_text = document.createTextNode(i);
		title.appendChild(title_text);
		section.appendChild(title);

		// Add section image
		let image = document.createElement("IMG");
		image.setAttribute("alt", "cmll-cp-case-" + i);
		image.setAttribute("src", "../../assets/images/roux/cmll/cmll-cp-case-" + i + ".png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(cmllCpAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}
}

window.onload = () => generateCmllCases();