
// Seleccionamos el div donde apareceran las imagenes
let resultado = document.getElementById("resultado");

// Detectamos cuando pulsamos una tecla
document.addEventListener("keydown", function(event) {

    // Guardamos la tecla pulsada en minuscula
    let tecla = event.key.toLowerCase();

    // SI PULSAMOS UNA LETRA
    if (tecla >= "a" && tecla <= "z" || tecla == "ñ") {

        // Creamos una imagen
        let imagen = document.createElement("img");

        // Le ponemos la ruta de la imagen
        imagen.src = "abecedario/" + tecla + ".PNG";

        // Añadimos la imagen al div
        resultado.appendChild(imagen);
    }

    // SI PULSAMOS ESPACIO
    else if (tecla == " ") {

        // Evitamos que el navegador haga su accion
        event.preventDefault();

        // Creamos una imagen de espacio
        let imagen = document.createElement("img");

        imagen.src = "abecedario/espacio.PNG";

        resultado.appendChild(imagen);
    }

    // SI PULSAMOS ENTER
    else if (tecla == "enter") {

        // Creamos un salto de linea
        let salto = document.createElement("br");

        resultado.appendChild(salto);
    }

    // SI PULSAMOS RETROCESO
    else if (tecla == "backspace") {

        // Evitamos que el navegador vuelva atras
        event.preventDefault();

        // Comprobamos que haya elementos
        if (resultado.hasChildNodes()) {

            // Eliminamos el ultimo elemento
            resultado.removeChild(resultado.lastChild);
        }
    }

});
