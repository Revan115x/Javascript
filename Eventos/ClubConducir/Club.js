function validar() {

}
function cambiarColor(e) {
	e.style.background = "#dd8e12";
}

function validarNomApel(e) {
	let patron = /^[a-zA-Z]{2}[a-zA-Z ]*$/;

	let texto = e.value.trim();

	if (!patron.test(texto)) {
		e.style.background = "#dd1212";
	} else {
		e.style.background = "white";
	}
}

function validarFecha(e) {
	
	if (e.value == "") {
		e.style.background = "#dd1212";
		return false;
	}

	let fechaActual = new Date();
	let fechaIntroducida = new Date(e.value);

	if (fechaIntroducida >= fechaActual) {
		e.style.background = "#dd1212";
		return false;
	} else {
		e.style.background = "white";
		return true;
	}
}

function calcularEdad(e) {

	let fechaNacimiento = new Date(e.value);
	let fechaActual = new Date();

	let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

	// Comprobamos si todavía no ha cumplido años
	if (fechaActual.getMonth() < fechaNacimiento.getMonth() ||
		(fechaActual.getMonth() == fechaNacimiento.getMonth() &&
			fechaActual.getDate() < fechaNacimiento.getDate())) {

		edad--;
	}

	if (edad < 18 || edad > 65) {

		e.style.background = "#dd1212";
		document.getElementById("edad").value = "";
		alert("La edad debe estar entre 18 y 65 años");

	} else {

		e.style.background = "white";
		document.getElementById("edad").value = edad;


	}
}
function validarDNI(e) {
	let patronDNI = /^\d{6,8}[A-Z]{1}$/

	if (!patronDNI.test(e.value)) {
		e.style.background = "#dd1212";
	} else {
		e.style.background = "white";
	}
}

/**Si la validación de Fecha Desde Carnet es correcta se calcula la fecha de
renovación (suponemos que el carnet se renueva cada 10 años) y se rellena el
campo correspondiente. */

function calcularRenovar(e) {
	let fechaCarnet = new Date(e.value);

	fechaCarnet.setFullYear(fechaCarnet.getFullYear() + 10);

	e.style.background = "white";
	
	let dia = fechaCarnet.getDate();
    let mes = fechaCarnet.getMonth() + 1;
    let año = fechaCarnet.getFullYear();

    document.getElementById("renovar").value = dia + "/" + mes + "/" + año;
}