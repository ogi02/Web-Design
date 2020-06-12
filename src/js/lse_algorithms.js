const lseEoAlgorithms = [
	"M' U M' U2 M' U M'",
	"M' U M U' M' U M'",
	"M U2 M' U2 M' U M'",
	"M' U2 M' U2 M' U M'",
	"M' U M'",
	"M U M",
	"R U' r' U' M' U r U r'"
]

export const generateLseCases = () => {

	let holder = document.getElementById("edge-orientation");

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
		image.setAttribute("alt", "lse-eo-case-" + i);
		image.setAttribute("src", "../../assets/images/roux/lse/lse-eo-case-" + i + ".png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(lseEoAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}
}

window.onload = () => generateLseCases();