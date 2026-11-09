function confirmar(){
    let confirmacion = window.confirm("QUIERES ABRIR ESTA PAGINA peligrosa para ludópatas o alérgicos a determinadas publicistas ");

    if (confirmacion){
        return true;
    }else{
        return false;
    }

}

let imagen = document.getElementById("garfi");

imagen.onmouseover = function() {
    imagen.src = "garfield2.jpg";
}

imagen.onmouseout = function(){
    imagen.src = "garfield.jpg";
}

// Al pasar con el ratón por encima del botón cambiar a naranja su color, al
// salir dejarlo gris, si lo clican que desaparezca.

let boton= document.getElementById("boton")

boton.onmouseover = function() {
    boton.style.backgroundColor = "orange";
}

boton.onmouseout = function() {
    boton.style.backgroundColor = "gray";
}

function Desaparecer(){
    boton.style.display = "none";
}