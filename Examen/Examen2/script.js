
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

function delcookie(c_name) {
    document.cookie =
        c_name + "=; max-age=0; path=/";
}

let img = document.getElementById("imagenSpa");
let horario = document.getElementById("textoHorarios")
function horarioSi(a) {
    img.style.display = "none";
    horario.style.display = "block"
}

function horarioNo(a) {
    img.style.display = "block";
    horario.style.visibility = "none"
}

let sexo = 0;
let edad = 0;

function comprobar() {
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

    if (contador == 0) {
        alert("Debes seleccionar una opción");
        return;
    }

    sexo = parseInt(document.getElementById("genero").value);

    if (sexo == 0) {
        alert("Debes seleccionar un sexo");
        return;
    }

    edad = parseInt(document.getElementById("edad").value);

    if (edad == 0) {
        alert("Debes seleccionar una edad");
        return;
    }



    let Estetica = parseInt(document.getElementById("est").value);

    let Masajes = parseInt(document.getElementById("mas").value);

    let termal = 40;

    let suma = 0

    if (Alineacion[1].checked)
        suma = Estetica;
    else if (Alineacion[0].checked)
        suma = termal
    else
        suma = Masajes

    let total = 0
    let vale = 0
    let descuento = 0

    if (edad == 60) {
        descuento = 0.8
    } else if (edad == 25) {
        descuento = 0.1
    } else
        descuento = 0

    if (sexo == 2) {
        vale = 5
    } else
        vale = 0

    /* EL TOTAL HACE COSAS RARAS */

    total = suma - vale * descuento


    let factura = document.getElementById("desc")


    if (descuento != 0) {
        factura.style.backgroundColor = "#BDBDBD"
    } else {
        factura.style.backgroundColor = "#fffafa"
    }

    factura.innerHTML += "Servicios"
    factura.innerHTML += "Descuento = " + descuento + "<br>";
    factura.innerHTML += "Vale  = " + vale + "<br>";
    factura.innerHTML += "edad  = " + edad + "<br>";
    factura.innerHTML += "sexo  = " + sexo + "<br>";
    factura.innerHTML += "Precio Total = " + total + "<br>";

    fecha = document.getElementById("divFecha")

    fecha.style.display = "block"

}

function comprobar2() {

    patronSocio = /^[0-9]{4}[0-9]{6}$/;

    socio = parseInt(document.getElementById("numSocio").value);

    let ventana = window.open("", "", "width=400,height=200");

    if (patronSocio.test(socio)) {
        ventana.document.write("NO OLVIDES TRAER TU TARJETA DE SOCIO, TENDRAS UN OBSEQUIO QUE TE ENCANTARA");
    } else {
        ventana.document.write("NUMERO DE SOCIO SIN OBSEQUIO");
    }

}

function comprobar3() {

    PatronRegalo = /^[A-B]{3}\/\/[0-9]{4,5}\*$/

    let ventana = window.open("", "", "width=400,height=200");

    regalo = parseInt(document.getElementById("codigoRegalo").value);

    if (PatronRegalo.test(regalo)) {
        ventana.document.write("GRATIS!!")
    } else {
        ventana.document.write("CODGIO REGALO NO VALIDO");
    }
}

function comprobarFecha() {
    let fechaActual = new Date();

    let fecha = document.getElementById("fecha").value;

    let partes = fecha.split("/");

    let anio = Number(partes[0]);
    let mes = Number(partes[1]);
    let dia = Number(partes[2]);

    let fechaNueva = new Date(anio, mes - 1, dia);

    let Dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    if (fechaNueva.getMonth() < fechaActual.getMonth()) {
        alert("error");
        return;
    }

    if (sexo == 1) {
        genero = "hombre"
    } else if (sexo == 2)
        genero = "mujer"
    else
        genero = "nada"

    setCookie("sexo", genero, 60 * 60 * 1000)
    setCookie("edad", edad, 60 * 60 * 1000)

    window.open("otro.html", "_self");

}

document.getElementById("resultado").innerHTML += "Edad : " + getCookie("edad") + "<br>";
document.getElementById("resultado").innerHTML += "sexo : " + getCookie("sexo") + "<br>";

function olvidarDatos() {
    delcookie("edad")
    delcookie("sexo")
}

/* pobre no puedo mas :,,,,(  */