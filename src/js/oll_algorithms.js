const ollAlgorithms = [
	"R U2 R2' F R F' U2' R' F R F'",
	"F R U R' U' F' f R U R' U' f'",
	"f R U R' U' f' U' F R U R' U' F'",
	"f R U R' U' f' U F R U R' U' F'",
	"l' U2 L U L' U l",
	"r U2' R' U' R U' r'",
	"r U R' U R U2' r'",
	"R U2' R' U2 R' F R F'",
	"R U R' U' R' F R2 U R' U' F'",
	"R U R' U R' F R F' R U2 R'",
	"F' L' U' L U F y F R U R' U' F'",
	"F R U R' U' F' U F R U R' U' F'",
	"r U' r' U' r U r' y' R' U R",
	"R' F R U R' F' R y' R U' R'",
	"l' U' l L' U' L U l' U l",
	"r U r' R U R' U' r U' r'",
	"R U R' U R' F R F' U2 R' F R F'",
	"F R U R' U y' R' U2 R' F R F'",
	"r' R U R U R' U' r R2' F R F'",
	"M U R U R' U' M2 U R U' r'",
	"R U2 R' U' R U R' U' R U' R'",
	"R U2' R2 U' R2 U' R2 U2' R",
	"R2 D R' U2 R D' R' U2 R'",
	"l' U' L U R U' r' F",
	"R' F R B' R' F' R B",
	"R' U' R U' R' U2 R",
	"L U L' U L U2 L'",
	"M' U M U2 M' U M",
	"M U R U R' U' R' F R F' M'",
	"R2 U R' B' R U' R2 U R B R'",
	"R' U' F U R U' R' F' R",
	"R U B' U' R' U R B R'",
	"R U R' U' R' F R F'",
	"R U R2 U' R' F R U R U' F'",
	"R U2' R2 F R F' R U2 R'",
	"L' U' L U' L' U L U L F' L' F",
	"F R U' R' U' R U R' F'",
	"R U R' U R U' R' U' R' F R F'",
	"L F' L' U' L U F U' L'",
	"R' F R U R' U' F' U R",
	"R U' R' U2 R U y R U' R' U' F'",
	"R' U2 R U R' U R y F R U R' U' F'",
	"f' L' U' L U f",
	"f R U R' U' f'",
	"F R U R' U' F'",
	"R' U' R' F R F' U R",
	"R' U' R' F R F' R' F R F' U R",
	"F R U R' U' R U R' U' F'",
	"R' F R' F' R2 U2' y R' F R F'",
	"R' F R2 B' R2' F' R2 B R'",
	"f R U R' U' R U R' U' f'",
	"R U R' U R d' R U' R' F'",
	"l' U' L U' L' U L U' L' U2 l",
	"r U R' U R U' R' U R U2' r'",
	"R U2 R2 U' R U' R' U2 F R F'",
	"F R U R' U' R F' r U R' U' r'",
	"R U R' U' M' U R U' r'"
]

export const generateOllCases = () => {

	let holder = document.getElementById("cases");

	for(let i = 1; i <= 57; i++) {
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
		image.setAttribute("alt", "oll-case-" + i);
		image.setAttribute("src", "../../assets/images/cfop/oll/oll-case-" + i + ".png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(ollAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}
}

window.onload = () => generateOllCases();