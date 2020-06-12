const pllNames = [
	"Ua", "Ub", "Z", "H", "Aa", "Ab", "E", "T", "F", "Ja", "Jb", "Ra", "Rb", "V", "Y", "Na", "Nb", "Ga", "Gb", "Gc", "Gd"
]

const pllAlgorithms = [
	"R U' R U R U R U' R' U' R2",
	"R2 U R U R' U' R' U' R' U R'",
	"M2 U M2 U M' U2 M2 U2 M' U2",
	"M2 U M2 U2 M2 U M2",
	"l' U R' D2 R U' R' D2 R2",
	"l U' R D2 R' U R D2 R2",
	"x' R U' R' D R U R' D' R U R' D R U' R' D'",
	"R U R' U' R' F R2 U' R' U' R U R' F'",
	"y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
	"R' U L' U2 R U' R' U2 L R U'",
	"R U R' F' R U R' U' R' F R2 U' R' U'",
	"L U2' L' U2' L F' L' U' L U L F L2' U",
	"R' U2 R U2 R' F R U R' U' R' F' R2 U'",
	"R' U R' U' x2 y' R' U R' U' l R U' R' U R U",
	"F R U' R' U' R U R' F' R U R' U' R' F R F'",
	"L U' R U2 L' U R' L U' R U2 L' U R' U",
	"R' U L' U2 R U' L R' U L' U2 R U' L U'",
	"R2 u R' U R' U' R u' R2 y' R' U R",
	"L' U' L y' R2 u R' U R U' R u' R2",
	"R2 u' R U' R U R' u R2 y R U' R'",
	"R U R' y' R2 u' R U' R' U R' u R2"
]

export const generatePllCases = () => {

	let holder = document.getElementById("cases");

	for(let i = 1; i <= 21; i++) {
		// Create section
		let section = document.createElement("SECTION");
		section.classList.add("case");

		// Add section title
		let title = document.createElement("H4");
		let title_text = document.createTextNode(pllNames[i - 1] + ' perm');
		title.appendChild(title_text);
		section.appendChild(title);

		// Add section image
		let image = document.createElement("IMG");
		image.setAttribute("alt", "pll-case-" + i);
		image.setAttribute("src", "../../assets/images/cfop/pll/" + pllNames[i - 1] + "-perm.png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(pllAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}
}

window.onload = () => generatePllCases();