/*GUARDAMOS EL DATO QUE TENEMOS EN INPUT */
let input = document.getElementById("password");

/*FUNCION PARA VALIDAR LA CONTRASEÑA */
function validar() {
    /*Cogemos el dato del input */
    let contraseña = input.value.trim();

    /*Patron para preguntar si tiene dígitos,Mayus,Minuscula y Especial */
    let tieneDigito = /\d/.test(contraseña);

    let tieneMinuscula = /[a-z]/.test(contraseña);

    let tieneMayuscula = /[A-Z]/.test(contraseña);

    let tieneEspecial = /[^a-zA-Z0-9]/.test(contraseña);

    /*Cogemos el elemento span para el indicador de dígitos */
    let digito = document.getElementById("digit");
    let lower = document.getElementById("lower");
    let upper = document.getElementById("upper");
    let special = document.getElementById("special");

    /*Validamos si tiene dígitos */
    if (tieneDigito) {
        /*Si tiene digito cambiamos la clase del span con los estilos css */
        digito.classList.add("valid");
        digito.classList.remove("invalid");
    } else {
        digito.classList.add("invalid");
        digito.classList.remove("valid");
    }


    if (tieneMinuscula) {
        /*Si tiene digito cambiamos la clase del span con los estilos css */
        lower.classList.add("valid");
        lower.classList.remove("invalid");
    } else {
        lower.classList.add("invalid");
        lower.classList.remove("valid");
    }

    if (tieneMayuscula) {
        /*Si tiene digito cambiamos la clase del span con los estilos css */
        upper.classList.add("valid");
        upper.classList.remove("invalid");
    } else {
        upper.classList.add("invalid");
        upper.classList.remove("valid");
    }


    if (tieneEspecial) {
        /*Si tiene digito cambiamos la clase del span con los estilos css */
        special.classList.add("valid");
        special.classList.remove("invalid");
    } else {
        special.classList.add("invalid");
        special.classList.remove("valid");
    }
}

input.addEventListener("input", validar);