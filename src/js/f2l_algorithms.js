const f2lAlgorithms = [
	"U R U' R'",
	"y' U' R' U R",
	"U' R U R' U2 R U' R'",
	"d R' U' R U2' R' U R",
	"U' R U2' R' U2 R U' R'",
	"d R' U2 R U2' R' U R",
	"y' R' U R U' d' R U R'",
	"R U' R' U d R' U' R",
	"y' R' U' R",
	"R U R'",
	"d R' U' R U' R' U' R",
	"U' R U R' U R U R'",
	"U' R U2' R' d R' U' R",
	"R' U2 R2 U R2' U R",
	"d R' U R U' R' U' R",
	"U' R U' R' U R U R'",
	"R U2' R' U' R U R'",
	"y' R' U2 R U R' U' R",
	"U R U2 R' U R U' R'",
	"y' U' R' U2 R U' R' U R",
	"U2 R U R' U R U' R'",
	"y' U2 R' U' R U' R' U R",
	"y' U R' U2 R y R U2 R' U R U' R'",
	"U' R U2' R' y' R' U2 R U' R' U R",
	"U R U' R' d' L' U L",
	"y' U' R' U R r' U' R U M'",
	"y' R' U' R U R' U' R",
	"R U R' U' R U R'",
	"R U' R' U R U' R'",
	"y' R' U R U' R' U R",
	"U' R U' R' U2 R U' R'",
	"d R' U R U2 R' U R",
	"U' R U R' d R' U' R",
	"d R' U' R d' R U R'",
	"R U' R' d R' U R",
	"R U R' U' R U R' U' R U R'",
	"R U' R' U' R U R' U2 R U' R'",
	"R U R' U2 R U' R' U R U R'",
	"R U' R' d R' U' R U' R' U' R",
	"R U R' U' R U' R' U2 y' R' U' R",
	"R U' R' U y' R' U2 R U2' R' U R"
]

export const generateF2LCases = () => {

	let holder = document.getElementById("cases");

	for(let i = 1; i <= 41; i++) {
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
		image.setAttribute("alt", "f2l-case-" + i);
		image.setAttribute("src", "../../assets/images/cfop/f2l/f2l-case-" + i + ".png");
		section.appendChild(image);

		// Add section algorithm
		let algorithm = document.createElement("P");
		let algorithm_text = document.createTextNode(f2lAlgorithms[i - 1]);
		algorithm.appendChild(algorithm_text);
		section.appendChild(algorithm);

		// Add section to div
		holder.appendChild(section);
	}
}

window.onload = () => generateF2LCases();