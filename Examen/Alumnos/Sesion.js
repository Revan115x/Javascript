function getCookie(c_name) {
    let miCookie = document.cookie;
    let busca = c_name + "=";
    let esta = miCookie.indexOf(busca);
    if (esta != -1) {
        ini = miCookie.indexOf("=", esta) + 1;
        fin = miCookie.indexOf(";", esta);
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
        d.setTime(d.getTime() + (caducidad));
        let expires = "expires=" + d.toGMTString();
        document.cookie = c_name + "=" + c_value + ";" + expires;
    }
    else {
        document.cookie = c_name + "=" + c_value;
    }
}

function loginCookie(c_name, c_value, caducidad) {
    if (caducidad != null) {
        let d = new Date();
        d.setTime(d.getTime() + (caducidad));
        let expires = "expires=" + d.toGMTString();
        document.cookie = c_name + "=" + c_value + ";" + expires;
    }
    else {
        document.cookie = c_name + "=" + c_value;
    }
}

let ventana;
let user

function validar1() {
    user = document.getElementById("usuario").value;
    let pasw = document.getElementById("contrasena").value;

    if (user == "") {
        alert("RELLENA USUARIO")
        document.getElementById("usuario").focus();
        return;
    }


    if (pasw == "") {
        alert("RELLENA CONTRASEÑA")
        document.getElementById("contrasena").focus();
        return;
    }

    let iniciales = user.substring(0, 3);


    let inicialesPass = pasw.substring(0, 3);

    if (iniciales != inicialesPass) {
        alert("CONTRASEÑA NO COINCIDE")
        return;
    }

    alert("ACCESO PERMITIDO")

    setCookie("user", user, 1200000);
    loginCookie("sesion", "yes", null);

    window.open("reserva.html", "_self");
}


function saltarValidacion() {
    alert("ACCESO SIN CREDENCIALES");
    loginCookie("sesion", "no", null)
    window.open("reserva.html", "_self");
}

let hoy = new Date();

function iniciar() {
    if (getCookie("sesion") == "yes") {
        document.getElementById("idlogin").innerHTML = "Bienvenido " + getCookie("user");
        //document.getElementById("idlogin").write('<input type="button" value="Desconectar" onclick="window.close()">');
    } else {
        //document.getElementById("idlogin").write('<input type="button" value="Iniciar Sesion" onclick="window.close()">');
    }

    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let año = hoy.getFullYear();

    document.getElementById("fhoy").innerHTML = dia + "/" + mes + "/" + año;

}

function validar() {
    let fechaEntradaTxt = document.getElementById("fent").value;
    let fechaSalidaTxt = document.getElementById("fsal").value;

    if (fechaEntradaTxt == "") {
        alert("RELLENA fechaEntrada")
        document.getElementById("fent").focus();
        return;
    }

    if (fechaSalidaTxt == "") {
        alert("RELLENA fechaSalida")
        document.getElementById("fsal").focus();
        return;
    }

    let fechEntrada = new Date(fechaEntradaTxt);
    let fechSalida = new Date(fechaSalidaTxt);

    if (fechEntrada < hoy) {
        alert("TU ENTRADA DEBE SER MAYOR AL DIA DE HOY")
        document.getElementById("fent").focus();
    }

    if (fechSalida < fechEntrada) {
        alert("TU SALIDA TIENE QUE SER MAYOR AL DIA DE ENTRADA")
    }

    let diferencia = fechSalida - fechEntrada;
    let diasDiferencia = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (diasDiferencia > 6) {
        alert("NO SE PUEDE ALQUILAR MAS DE 6 DIAS")
    }

    document.getElementById("dias").value = diasDiferencia;

    document.getElementById("masinfo").style.display = "block";

    /*NO ME DA TIEMPO A LOS CALCULOS POR DIAS */

    let Dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    precio = 0

    document.getElementById("mensaje").innerHTML = precio;

}


function pedir() {
    let correo = document.getElementById("correo").value;

    if (correo.indexOf("@") == -1) {
        alert("TU CORREO ES INCORRECTO");
    }

    confirmacion = confirm("QUIERES QUE NOS PONGAMOS EN CONTACTO CONTIGO")

    if (confirmacion) {
        web = window.open("", "CORREO", "width=400,height=200,left=700,top=100");
        web.document.write("<p>NOS PONDREMOS EN CONTACTO CON USTED</p>");
        setTimeout(function () {
            web.close();
        }, 5000);
    } else {
        alert("SE ANULA LA RESERVA")
        document.getElementById("masinfo").style.display = "none";
        document.getElementById("fent").value = "";
        document.getElementById("fsal").value = "";
    }
}