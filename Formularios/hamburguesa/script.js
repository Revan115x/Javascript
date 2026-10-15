/* Al pulsar el botón CALCULAR PRECIO se calcula el precio del pedido y éste aparece en el
campo PRECIO TOTAL. */

function calcular() {
  let precio = 0;
  let extra = 0;
  let tamaño = parseInt(document.getElementById("idtamaño").value);
  if (tamaño == 0) {
    alert("DEBES SELECCIONAR UN TAMAÑO DE HAMBURGUESA");
    return;
  }
  let refresco=document.getElementById("idrefresco").checked;
  let patatas=document.getElementById("idpatatas").checked;

  if(refresco == true){
    extra+=1.5;
  }
  if(patatas == true){
    extra+=1;
  }

  let cantidad=0;
  let cuantas=document.getElementsByName("cuantas");
  for (let i = 0; i < cuantas.length; i++) {
    if(cuantas[i].checked){
      cantidad=parseInt(cuantas[i].value);
      break;
    }
  }

  precio=(tamaño+extra)*cantidad;

  document.getElementById("idtotal").value = precio + "€";
  document.getElementById("premio").style.display = "block";

}

function verpremio() {

  let codpostal=document.getElementById("idcodigo").value;

  if( codpostal == 28001 || codpostal == 28002)
    alert("FELICIDADES MI LOCO")
}

