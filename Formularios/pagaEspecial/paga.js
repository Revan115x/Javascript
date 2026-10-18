function validarFormulario() {
    /******VALIDACIONES DE NOMBRE *********/
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre.length == 0) {
        alert("Rellena el campo Nombre");
        document.getElementById("nombre").focus();
        return;
    }
    if (nombre.length < 3) {
        alert("Nombre debe tener 3 caracteres");
        document.getElementById("nombre").focus();
        return;
    }

    /******VALIDACIONES DE APELLIDO *********/

    let apellido = document.getElementById("apellidos").value.trim();
    if (apellido.length == 0) {
        alert("Rellena el campo apellido");
        document.getElementById("apellidos").focus();
        return;
    }
    if (apellido.length < 3) {
        alert("apellido debe tener 3 caracteres");
        document.getElementById("apellidos").focus();
        return;
    }

    /******VALIDACIONES DE Año de Nacimiento *********/

    let nacimientoTexto = document.getElementById("anoNacimiento").value.trim();

    if (nacimientoTexto == "") {
        alert("Rellena el campo Año de Nacimiento");
        document.getElementById("anoNacimiento").focus();
        return;
    }

    let nacimiento = Number(nacimientoTexto);

    if (!Number.isInteger(nacimiento)) {
        alert("El año de nacimiento debe ser un número entero");
        document.getElementById("anoNacimiento").focus();
        return;
    }
    let añoActual = new Date().getFullYear();

    if (nacimiento >= añoActual) {
        alert("El año de nacimiento debe ser menor que el año actual");
        document.getElementById("anoNacimiento").focus();
        return;
    }

    let edad = Number(añoActual) - nacimiento;

    if (edad < 18 || edad > 65) {
        alert("Tu edad no es apta para el trabajo");
        document.getElementById("anoNacimiento").focus();
        return;
    }

    /******VALIDACIONES DE Año de Entrada a la Empresa  *********/

    let añoEntradaTexto = document.getElementById("anoEntrada").value.trim();

    if (añoEntradaTexto == "") {
        alert("Rellena el campo Año de Entrada a la Empresa");
        document.getElementById("anoEntrada").focus();
        return;
    }

    let añoEntrda = Number(añoEntradaTexto);

    if (!Number.isInteger(añoEntrda)) {
        alert("El año de entrada debe ser un número entero");
        document.getElementById("anoEntrada").focus();
        return;
    }

    let añoEmpresa = new Date().getFullYear();

    if (añoEntrda < 2000 || añoEntrda > añoActual) {
        alert("El año de entrada debe estar entre 2000 y el año actual");
        document.getElementById("anoEntrada").focus();
        return;
    }

    let edadEntrda = añoEntrda - nacimiento;

    if (edadEntrda < 18) {
        alert("NO TENIAS 18 AÑOS CUANDO INGRESASTE A LA EMPRESA");
        document.getElementById("anoEntrada").focus();
        return;
    }

    /******VALIDACIONES DE Salario Base  *********/

    let salariotxt = document.getElementById("salarioBase").value.trim();

    if (salariotxt == "") {
        alert("Rellena el campo salario Base");
        document.getElementById("salarioBase").focus();
        return;
    }

    if (isNaN(Number(salariotxt))) {
        alert("EL SALARIO DEBE SER UN NUMERO");
        document.getElementById("salarioBase").focus();
        return;
    }

    let salario = Number(salariotxt);

    if (salario < 1100) {
        alert("NO HAS PODIDO COBRAR MENOS DE 1100€");
        document.getElementById("salarioBase").focus();
        return;
    }

    /******VALIDACIONES DE sucursal *********/

    let Sucursal = Number(document.getElementById("sucursal").value);

    if (Sucursal == 0) {
        alert("DEBES DE SELECCIONAR UNA SUCURSAL");
        document.getElementById("sucursal").focus();
        return;
    }

    /******VALIDACIONES DE IRPF*********/

    let porcentaje = 0;
    let IRPF = document.getElementsByName("irpf");

    for (let i = 0; i < IRPF.length; i++) {

        if (IRPF[i].checked) {
            porcentaje = Number(IRPF[i].value);
            break;
        }
    }

    if (porcentaje == 0) {
        alert("DEBES SELECIONAR UNA OPCION DE IRPF");
        IRPF[0].focus();
        return;
    }

    let añosTrabajados = añoActual - añoEntrda;
    let trienios = Math.floor(añosTrabajados / 3);
    let pagaTrienios = salario * 0.10 * trienios;
    let pagaConBonificacion = pagaTrienios + Sucursal;
    let importeIRPF = pagaConBonificacion * porcentaje / 100;
    let pagaFinal = pagaConBonificacion - importeIRPF;

    let correo = document.getElementById("correo");

    if (correo.checked) {
        alert("La información se enviará a tu correo electrónico");
    }

    document.getElementById("resultado").innerHTML =
        "Nombre: " + nombre +
        "<br>Años trabajados: " + añosTrabajados +
        "<br>Trienios: " + trienios +
        "<br>Paga por trienios: " + pagaTrienios + " €" +
        "<br>Bonificación: " + Sucursal + " €" +
        "<br>IRPF: " + porcentaje + "%" +
        "<br>Importe del IRPF: " + importeIRPF + " €" +
        "<br><strong>Paga especial final: " + pagaFinal + " €</strong>";

}