
function getCookie(c_name) {
    let miCookie = document.cookie;
    let busca = c_name + "=";
    let esta = miCookie.indexOf(busca);

    if (esta != -1) {
        let ini = miCookie.indexOf("=", esta) + 1;
        let fin = miCookie.indexOf(";", esta);
        let valor;

        if (fin != -1)
            valor = miCookie.substr(ini, fin - ini);
        else
            valor = miCookie.substr(ini);

        return valor;
    }
    else
        return null;
}

function setCookie(c_name, c_value, caducidad) {
    if (caducidad != null) {
        let d = new Date();
        d.setTime(d.getTime() + caducidad);
        let expires = "expires=" + d.toGMTString();
        document.cookie = c_name + "=" + c_value + ";" + expires;
    }
    else {
        document.cookie = c_name + "=" + c_value;
    }
}

function calcular() {

    // Obtenemos el año actual del sistema
    let anioSistema = new Date().getFullYear();

    // Creamos la fecha del 31 de diciembre del año actual
    let fechaSistema = new Date(anioSistema, 11, 31);

    let nacimiento = document.getElementById("fnac").value;

    let partes = nacimiento.split("-");

    let anio = Number(partes[0]);
    let mes = Number(partes[1]);
    let dia = Number(partes[2]);

    // Restamos 1 al mes porque JavaScript empieza a contar desde 0
    let fechaNacimiento = new Date(anio, mes - 1, dia);

    let edad = fechaSistema.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaSistema.getMonth() < fechaNacimiento.getMonth() ||
        (fechaSistema.getMonth() == fechaNacimiento.getMonth() &&
            fechaSistema.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById("edad").value = edad + " años";

    let ventana = window.open("", "", "width=450,height=300");

    if (edad < 6 || edad > 25) {
        ventana.document.write("Que con esa edad no puede inscribirse en nuestras actividades");
    }
    else {
        // Guardamos la edad en una cookie durante una hora
        setCookie("edad", edad, 60 * 60 * 1000);

        ventana.document.write("Vamos a pasar al formulario de registro:");

        // Esperamos 3 segundos y abrimos la segunda página
        setTimeout(function () {
            window.open("EJ 02.html", "_self");
        }, 3000);
    }

    ventana.document.write("<button onclick='window.close()'>Cerrar</button>");
}

// Recuperamos la edad guardada en la cookie
document.getElementById("edad").value = getCookie("edad");


// Variable donde guardamos los precios de las actividades
let actividades = [];


function calcular2() {

    // Recogemos el nombre y apellido
    let NombreAp = document.getElementById("nom").value.trim();

    // Validamos el nombre y apellido
    if (NombreAp == "") {
        alert("RELLENA EL CAMPO NOMBRE Y APELLIDO");
        document.getElementById("nom").focus();
        return;
    }

    // Recogemos los DNI
    let dni = document.getElementById("dni").value.trim();
    let dniTutor = document.getElementById("dniT").value.trim();

    // Recogemos la edad
    let edad = parseInt(document.getElementById("edad").value);

    // Expresión regular DNI y NIE
    let patronDNI = /^(?:\d{8}|[XY]\d{7})[A-Z]$/;

    // DNI obligatorio si tiene 12 o más años
    if (edad >= 12 && dni == "") {
        alert("El DNI del alumno es obligatorio");
        document.getElementById("dni").focus();
        return;
    }

    // DNI tutor obligatorio si tiene menos de 18 años
    if (edad < 18 && dniTutor == "") {
        alert("El DNI del tutor es obligatorio");
        document.getElementById("dniT").focus();
        return;
    }

    // Validamos el DNI del alumno si está relleno
    if (dni != "" && !patronDNI.test(dni)) {
        alert("El DNI del alumno no es correcto");
        document.getElementById("dni").focus();
        return;
    }

    // Validamos el DNI del tutor si está relleno
    if (dniTutor != "" && !patronDNI.test(dniTutor)) {
        alert("El DNI del tutor no es correcto");
        document.getElementById("dniT").focus();
        return;
    }

    // Recogemos el teléfono
    let telefono = document.getElementById("telefono").value.trim();

    // Expresión regular del teléfono
    let patronTelf = /^[67][0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/;

    // Comprobamos si el teléfono está vacío
    if (telefono == "") {
        alert("El teléfono es obligatorio");
        document.getElementById("telefono").focus();
        return;
    }

    // Validamos el formato del teléfono
    if (!patronTelf.test(telefono)) {
        alert("El teléfono es incorrecto");
        document.getElementById("telefono").focus();
        return;
    }

    // Variable para contar los radio buttons seleccionados
    let contador = 0;

    // Recogemos los elementos con name "a"
    let Alineacion = document.getElementsByName("a");

    // Bucle para recorrer los radio buttons
    for (let i = 0; i < Alineacion.length; i++) {
        if (Alineacion[i].checked) {
            contador++;
        }
    }

    // Comprobamos que haya una opción seleccionada
    if (contador != 1) {
        alert("Debes seleccionar una opción");
        Alineacion[0].focus();
        return;
    }

    // Comprobamos si es alumno del colegio
    if (Alineacion[1].checked) {

        // Recogemos el código
        let codigo = document.getElementById("cod").value.trim();

        // Expresión regular del código
        let patronCodigo = /^\$([A-Z]{2,3}[0-9])+\$/;

        // Comprobamos si está vacío
        if (codigo == "") {
            alert("El código es obligatorio");
            document.getElementById("cod").focus();
            return;
        }

        // Validamos el formato
        if (!patronCodigo.test(codigo)) {
            alert("El código no es correcto");
            document.getElementById("cod").focus();
            return;
        }
    }

    // Comprobamos que se haya añadido alguna actividad
    if (actividades.length == 0) {
        alert("Debes añadir al menos una actividad");
        document.getElementById("sel").focus();
        return;
    }

    // Variable para guardar el total
    let total = 0;

    // Recorremos las actividades
    for (let i = 0; i < actividades.length; i++) {
        total = total + actividades[i];
    }

    // Comprobamos si es alumno del colegio y aplicamos el 50%
    if (Alineacion[1].checked) {
        total = total / 2;
    }

    // Comprobamos si es familia numerosa y aplicamos el 20%
    if (document.querySelector("input[type='checkbox']").checked) {
        total = total * 0.8;
    }

    // Mostramos el precio final
    document.getElementById("info").innerHTML += "Total : " + total + " €<br>";

    // Desactivamos los botones después de calcular
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
}


// Función para añadir actividades
function anadir() {

    // Recogemos la actividad seleccionada
    let actividad = document.getElementById("sel");

    // Recogemos el precio seleccionado
    let precio = Number(actividad.value);

    // Añadimos el precio a la lista
    actividades.push(precio);

    // Mostramos las actividades añadidas
    document.getElementById("info").innerHTML +=
        actividad.options[actividad.selectedIndex].text + "<br>";
}


// Función para agrandar el input cuando pasamos el ratón por encima
function agrandar(elemento) {
    elemento.style.backgroundColor = "green";
    elemento.style.fontSize = "20px";
}


// Función para dejar el input como estaba cuando quitamos el ratón
function anular(elemento) {
    elemento.style.backgroundColor = "white";
    elemento.style.fontSize = "14px";
}
