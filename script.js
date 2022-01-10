var h3 = document.querySelector("h3");
var color_1 = document.querySelector(".color_1");
var color_2 = document.querySelector(".color_2");
var body = document.getElementById('gradient');
var button = document.querySelector(".randomColor");

function initialGradient(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	color_1.value = "#" + randomColor1;
	color_2.value = "#" + randomColor2;

	body.style.background = "linear-gradient(to right, " 
	+ color_1.value 
	+ "," 
	+ color_2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
};

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color_1.value 
	+ "," 
	+ color_2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
};

function getRandomColors() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	color_1.value = "#" + randomColor1;
	color_2.value = "#" + randomColor2;

	setGradient();
}

initialGradient();
color_1.addEventListener("input", setGradient);
color_2.addEventListener("input", setGradient);
button.addEventListener("click", getRandomColors);
