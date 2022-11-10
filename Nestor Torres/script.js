let menuVisible = false;

function mostrarOcultarMenu() {
	if (menuVisible) {
		document.getElementById("nav").classList = "";
		menuVisible = false;
	} else {
		document.getElementById("nav").classList = "responsive";
		menuVisible = true;
	}
}

function seleccionar() {

	document.getElementById("nav").classList = "";
	menuVisible = false;
}

const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});



