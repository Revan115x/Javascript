function calcular() {
  let precio = 0;
  /*Variable para guardar el precio de patatas y refresco */
  let extra = 0;

  /*variable para guardar el tamaño de las hamburguesas del select */
  let tamaño = parseInt(document.getElementById("idtamaño").value);

  /*si el name es "cuantas" es 0 da un error, sino guardamos el valor del name que es su precio*/
  if (tamaño == 0) {
    alert("DEBES SELECCIONAR UN TAMAÑO DE HAMBURGUESA");
    return;
  }

  /*Variables para guardar los valores de los checkboxes y le decimos que son checkboxes con .checked  */
  let refresco = document.getElementById("idrefresco").checked;
  let patatas = document.getElementById("idpatatas").checked;

  /*si el checkbox es true le damos un precio y lo guardamos en extra */
  if (refresco) {
    extra += 1.5;
  }
  if (patatas) {
    extra += 1;
  }

  /*Variable para guardar la cantidad de hamburguesas */
  let cantidad = 0;
  /*variable para guardar los elementos con name "cuantas" */
  let cuantas = document.getElementsByName("cuantas");

  /*bucle para recorrer los elementos con name "cuantas" */
  for (let i = 0; i < cuantas.length; i++) {
    /*Si cuantas es true guardamos el valor en cantidad */
    if (cuantas[i].checked) {
      cantidad = parseInt(cuantas[i].value);
      break;
    }
  }
  /*Calculamos el precio total */
  precio = (tamaño + extra) * cantidad;
  
  /*Devolvemos el precio total a input */
  document.getElementById("idtotal").value = precio + "€";
  /*Mostramos el input escondido para el premio */
  document.getElementById("premio").style.display = "block";
}

function verpremio() {
  /*guardamos el valor del código postal */
  let codpostal = document.getElementById("idcodigo").value;

  /*lo comparamos con los códigos postales ganadores, si coincide entra en el if */
  if (codpostal == 28001 || codpostal == 28002) {
    alert("FELICIDADES MI LOCO");
    /*guardamos el valor del precio total para calcular la rebaja */
    let precio = parseFloat(document.getElementById("idtotal").value);
    precio = precio / 2 ;
    /*devolvemos el precio rebajado al input */
    document.getElementById("idtotal").value = precio + "€";
    /*cambiamos el color de fondo a verde */
    document.bgColor = "green";
  }else{
    /*si no coincide entra en el else y muestra un mensaje */
    alert("SUERTE LA PROXIMA VEZ :,,(")
  }
}
