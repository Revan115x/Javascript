# JAVASCRIPT – RA5: EVENTOS Y FORMULARIOS III

## 1. ¿Qué son los eventos?

Son acciones que realiza el usuario en una página web y que JavaScript puede detectar para ejecutar una función.

Ejemplos:
- Hacer clic en un botón.
- Mover el ratón.
- Pulsar una tecla.
- Cambiar el tamaño de la ventana.
- Modificar un formulario.

**Manejador de eventos (event handler):** función que se ejecuta cuando sucede un evento.

Ejemplo:
```html
<input type="button" value="Pulsar" onclick="saludar()">
```

Cuando hacemos clic, se ejecuta `saludar()`.

## 2. Modelo básico de eventos

Los eventos utilizan el prefijo `on` seguido del nombre del evento.

| Evento | Manejador |
|---|---|
| click | onclick |
| dblclick | ondblclick |
| mouseover | onmouseover |
| mouseout | onmouseout |
| keydown | onkeydown |
| keyup | onkeyup |
| focus | onfocus |
| blur | onblur |
| change | onchange |
| load | onload |
| submit | onsubmit |

Podemos ejecutar JavaScript directamente:

```html
<input onclick="alert('Hola')">
```

O llamar a una función:

```html
<input onclick="saludar()">
```

## 3. Variables especiales: this y event

**this:** hace referencia al elemento HTML que ha provocado el evento.

```html
<div onclick="cambiar(this)">
    Pulsa aquí
</div>
```

```javascript
function cambiar(elemento) {
    elemento.style.color = "red";
}
```

**event:** representa el evento que ha ocurrido y permite consultar información sobre él.

```javascript
function mostrar(evento) {
    alert(evento.type);
}
```

`type` indica el tipo de evento que se ha producido.

## 4. addEventListener() y removeEventListener()

| Método | Función |
|---|---|
| addEventListener() | Añade un manejador de eventos. |
| removeEventListener() | Elimina un manejador de eventos. |

Ejemplo:

```javascript
function saludar() {
    alert("Hola");
}

document.getElementById("boton").addEventListener("click", saludar);
```

Para eliminarlo:

```javascript
document.getElementById("boton").removeEventListener("click", saludar);
```

Importante: para eliminarlo debemos indicar el mismo nombre de función que utilizamos al añadirlo.

## 5. Eventos del ratón

| Evento | ¿Qué hace? |
|---|---|
| onclick | Pulsar el botón izquierdo. |
| ondblclick | Hacer doble clic. |
| onmousedown | Pulsar un botón del ratón sin soltarlo. |
| onmouseup | Soltar el botón del ratón. |
| onmousemove | Mover el ratón dentro de un elemento. |
| onmouseenter | El ratón entra en un elemento. |
| onmouseleave | El ratón sale de un elemento. |
| onmouseover | El ratón entra en un elemento o alguno de sus hijos. |
| onmouseout | El ratón sale de un elemento o alguno de sus hijos. |

**Diferencia importante:**
- mouseenter: detecta la entrada en el elemento.
- mouseover: también puede producirse al entrar en sus elementos hijos.
- mouseleave: detecta la salida del elemento.
- mouseout: también puede producirse al pasar a uno de sus elementos hijos.

### Ejemplo: cambiar el fondo

```html
<div
    onmouseover="this.style.background='silver'"
    onmouseout="this.style.background='blue'">
    Pasa por encima
</div>
```

Al entrar el ratón cambia a gris y al salir vuelve a azul.

## 6. Uso especial de onclick y return false

`onclick` puede devolver `true` o `false` después de ejecutar una función.

Si devuelve `false`, se cancela la acción predeterminada.

Ejemplo con un enlace:

```html
<a href="https://google.com" onclick="return false">
    Ir a Google
</a>
```

No se abrirá Google.

### Confirmar una acción con window.confirm()

```html
<a href="https://google.com"
   onclick="return confirm('¿Estás seguro?')">
    Ir a Google
</a>
```

- Aceptar: devuelve `true` y continúa.
- Cancelar: devuelve `false` y no continúa.

También sirve para cancelar el envío de un formulario.

## 7. Acceder a elementos HTML desde JavaScript

Primero obtenemos el elemento mediante su ID:

```javascript
var e = document.getElementById("nombre");
```

Después podemos consultar o modificar sus propiedades:

| Propiedad | Utilidad |
|---|---|
| value | Obtener o cambiar el valor de un input. |
| innerHTML | Obtener o cambiar el contenido HTML de un elemento. |
| style | Modificar los estilos CSS. |

Ejemplos:

```javascript
var e = document.getElementById("nombre");

e.value = "Jose";

e.innerHTML = "Hola";

e.style.color = "red";
```

### Modificar CSS desde JavaScript

En JavaScript, las propiedades CSS con guiones se escriben usando camelCase.

| CSS | JavaScript |
|---|---|
| background-color | backgroundColor |
| border-color | borderColor |
| font-size | fontSize |
| font-family | fontFamily |
| font-weight | fontWeight |
| margin-top | marginTop |
| padding-left | paddingLeft |
| text-decoration | textDecoration |
| text-align | textAlign |
| z-index | zIndex |

Ejemplo:

```javascript
elemento.style.backgroundColor = "red";
elemento.style.fontSize = "20px";
elemento.style.borderColor = "black";
```

También podemos modificar:
- `display`
- `visibility`
- `width`
- `height`
- `color`
- `position`

## 8. Eventos HTML de formularios y ventanas

| Evento | Manejador | ¿Cuándo ocurre? |
|---|---|---|
| blur | onblur | El elemento pierde el foco. |
| change | onchange | Se modifica un valor y se pierde el foco. |
| focus | onfocus | El elemento obtiene el foco. |
| load | onload | La página o imagen termina de cargarse. |
| reset | onreset | Se reinicia el formulario. |
| resize | onresize | Cambia el tamaño de la ventana. |
| select | onselect | Se selecciona texto. |
| submit | onsubmit | Se envía el formulario. |
| unload | onunload | Se abandona la página. |

### Diferencias importantes

**focus y blur**
- focus: entramos en un campo.
- blur: salimos de un campo.

**change**
Se produce cuando cambiamos el valor de un campo y después pierde el foco.

**load**
Se utiliza para ejecutar código cuando la página se ha cargado completamente.

```html
<body onload="iniciar()">
```

**submit**
Se ejecuta cuando se envía un formulario.

```html
<form onsubmit="return validar()">
```

**reset**
Permite controlar el reinicio del formulario. Si devuelve `false`, no se reinicia.

## 9. Eventos del teclado

| Evento | Manejador | ¿Qué hace? |
|---|---|---|
| keydown | onkeydown | Pulsamos una tecla sin soltarla. |
| keypress | onkeypress | Pulsamos una tecla alfanumérica. Está en desuso. |
| keyup | onkeyup | Soltamos una tecla. |

**Propiedades del objeto event:**

| Propiedad | Utilidad |
|---|---|
| keyCode | Código numérico de la tecla. |
| key | Valor o nombre de la tecla. |

Ejemplo:

```javascript
function comprobar(evento) {
    if (evento.keyCode == 13) {
        alert("Has pulsado INTRO");
    }
}
```

El código `13` corresponde a la tecla INTRO.

### Detectar INTRO o salir de un input

```html
<input type="text"
       onblur="realizarAccion()"
       onkeypress="if(event.keyCode==13) realizarAccion()">
```

- onblur: ejecuta la función cuando salimos del campo.
- onkeypress: ejecuta la función cuando pulsamos INTRO.

## 10. Coordenadas del ratón

JavaScript permite conocer la posición del ratón mediante las propiedades del objeto event.

| Propiedad | Coordenadas respecto a... |
|---|---|
| clientX | Ventana del navegador (horizontal). |
| clientY | Ventana del navegador (vertical). |
| screenX | Pantalla del ordenador (horizontal). |
| screenY | Pantalla del ordenador (vertical). |
| pageX | Página HTML (horizontal). |
| pageY | Página HTML (vertical). |

**Importante:** el origen de las coordenadas está en la esquina superior izquierda.

### Diferencias

- clientX / clientY: posición dentro de la ventana del navegador.
- screenX / screenY: posición respecto a toda la pantalla.
- pageX / pageY: posición respecto a toda la página, incluyendo el desplazamiento (scroll).

### Ejemplo

```javascript
function coordenadas(evento) {

    alert("Navegador: " + evento.clientX + "," + evento.clientY);

    alert("Pantalla: " + evento.screenX + "," + evento.screenY);

    alert("Página: " + evento.pageX + "," + evento.pageY);
}
```

Se puede asociar al clic de la página:

```html
<body onclick="coordenadas(event)">
```

---

# RESUMEN RÁPIDO PARA EL EXAMEN

| Si te preguntan... | Recuerda... |
|---|---|
| ¿Qué es un evento? | Acción del usuario detectada por JavaScript. |
| ¿Qué es un manejador? | Función que responde a un evento. |
| ¿Qué hace this? | Hace referencia al elemento que provoca el evento. |
| ¿Qué hace event? | Contiene información del evento. |
| ¿Qué hace addEventListener()? | Añade manejadores. |
| ¿Qué hace removeEventListener()? | Elimina manejadores. |
| ¿Qué hace onclick? | Detecta un clic. |
| ¿Qué hace onmouseover? | Detecta la entrada del ratón. |
| ¿Qué hace onmouseout? | Detecta la salida del ratón. |
| ¿Qué hace onfocus? | Detecta que un elemento obtiene el foco. |
| ¿Qué hace onblur? | Detecta que un elemento pierde el foco. |
| ¿Qué hace onchange? | Detecta un cambio cuando se pierde el foco. |
| ¿Qué hace onload? | Detecta que la página se ha cargado. |
| ¿Qué hace onsubmit? | Detecta el envío del formulario. |
| ¿Qué hace keydown? | Detecta la pulsación de una tecla. |
| ¿Qué hace keyup? | Detecta que soltamos una tecla. |
| ¿Qué hace return false? | Cancela la acción predeterminada. |
| ¿Qué hace value? | Accede al valor de un input. |
| ¿Qué hace innerHTML? | Accede al contenido HTML. |
| ¿Qué hace style? | Modifica los estilos CSS. |

## LOS 5 CONCEPTOS QUE NO DEBES CONFUNDIR

1. `this` = elemento HTML que provoca el evento.
2. `event` = información del evento.
3. `focus` = entrar en un campo.
4. `blur` = salir de un campo.
5. `return false` = cancelar la acción predeterminada.
