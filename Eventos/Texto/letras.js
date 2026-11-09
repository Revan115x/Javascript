/*Recogemos el texto que vamos a modificar */
let texto = document.getElementById("texto");

/*Variable para el tamaño */
let tamaño = document.getElementById("tamanyo");

/*Funcion para cambiar el tamaño */
function cambiarTamaño() {
    texto.style.fontSize = tamaño.value + "px";
}

/*Cuando el select de tamaño cambia se ejecuta la función con el evento "change" */
tamaño.addEventListener("change", cambiarTamaño);

/*----------------------------------------------------------------------------*/

/*Variable para el tipo de fuente */
let fuente = document.getElementById("tipo");

/*Funcion para cambiar el tipo de fuente */
function cambiarFuente() {
    texto.style.fontFamily = fuente.value;
}

/*Cuando el select de tipo de fuente cambia se ejecuta la función con el evento "change" */
fuente.addEventListener("change", cambiarFuente);

/*----------------------------------------------------------------------------*/

/*Variable para el color */
let color = document.getElementById("color");

/*Funcion para cambiar el color del texto */
function cambiarColor() {
    texto.style.color = color.value;
}

/*Cuando el select de color cambia se ejecuta la función con el evento "change" */
color.addEventListener("change", cambiarColor);

/*----------------------------------------------------------------------------*/

/*Variable para negrita */
let negrita = document.getElementById("negrita");

/*Funcion para cambiar el estilo de la fuente */
function cambiarNegrita() {
    if (negrita.checked) {
        texto.style.fontWeight = "bold";
    } else {
        texto.style.fontWeight = "normal";
    }
}

/*Cuando el select de negrita cambia se ejecuta la función con el evento "change" */
negrita.addEventListener("change", cambiarNegrita);

/*----------------------------------------------------------------------------*/

/*Variable para cursiva */
let cursiva = document.getElementById("cursiva");

/*Funcion para cambiar el estilo de la fuente */
function cambiarCursiva() {
    if (cursiva.checked) {
        texto.style.fontStyle = "italic";
    } else {
        texto.style.fontStyle = "normal";
    }
}

/*Cuando el select de cursiva cambia se ejecuta la función con el evento "change" */
cursiva.addEventListener("change", cambiarCursiva);

/*----------------------------------------------------------------------------*/

/*Variable para subrayado */
let subrayado = document.getElementById("subrayado");

/*Funcion para cambiar el estilo de la fuente */
function cambiarSubrayado() {
    if (subrayado.checked) {
        texto.style.textDecoration = "underline";
    } else {
        texto.style.textDecoration = "none";
    }
}

/*Cuando el select de subrayado cambia se ejecuta la función con el evento "change" */
subrayado.addEventListener("change", cambiarSubrayado);

/*----------------------------------------------------------------------------*/

/*Variable para alineación */
let Alineación = document.getElementsByName("a");

/*Funcion para cambiar la alineación del texto */
function cambiarAlineación() {

    /*Bucle para recorrer los elementos con name "a" */
    for (let i = 0; i < Alineación.length; i++) {
        /*Si el elemento está seleccionado cambiamos la alineación del texto */
        if (Alineación[i].checked) {
            /*Cambiamos la alineación del texto con el valor del elemento seleccionado */
            texto.style.textAlign = Alineación[i].value;
            break;
        }
    }
}

/*Cuando el select de alineación cambia se ejecuta la función con el evento "change" */
for (let i = 0; i < Alineación.length; i++) {
    Alineación[i].addEventListener("change", cambiarAlineación);
}