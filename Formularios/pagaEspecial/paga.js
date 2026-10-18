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

    if (!Number.isInteger(nacimiento)) {
        alert("El año de nacimiento debe ser un número entero");
        document.getElementById("anoNacimiento").focus();
        return;
    }

    let nacimiento = Number(nacimientoTexto);
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

    if (!Number.isInteger(añoEntradaTexto)) {
        alert("El año de Entrada a la Empresa debe ser un número entero");
        document.getElementById("anoEntrada").focus();
        return;
    }

    let añoEntrda = Number(añoEntradaTexto);
    let añoEmpresa = new Date().getFullYear();

    if (añoEntrda < añoEmpresa) {
        alert("No puedes haber entrado antes de crearse la empresa");
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

    salario = Number(salariotxt);

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

    let porcentaje= 0;
    let IRPF = document.getElementsByName("irpf");

    for (let i = 0; i < IRPF.length; i++) {

        if (IRPF[i].checked) {
            porcentaje=Number(IRPF[i].value);
            break;
        }
    }

    if(porcentaje==0){
        alert("DEBES SELECIONAR UNA OPCION DE IRPF");
        document.getElementsByName("irpf").focus();
        return;
    }

}

/* Tipo de IRPF
 Ha de seleccionarse un IRPF
Si todo ha ido bien se calcula la paga especial del siguiente modo:
 Se calculan los trienios que se han trabajado
 Se calcula la paga especial:

Paga especial = 10% del salario base * número de trienios
 Se le añade una bonificación especial según la sucursal en que trabaja
 Se calcula el IRPF de la paga especial y se le resta 

Se carga un mensaje en el div de id “resultado” con los cálculos efectuados y el
importe de la paga especial.
Si se ha clicado el check del correo electrónico mostrar una alerta indicando que esta
información se le enviará al correo.*/
