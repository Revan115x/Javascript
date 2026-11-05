# JAVASCRIPT – RA5: EVENTOS Y FORMULARIOS III

## 1. CONCEPTOS BÁSICOS

**¿Qué es un evento?**

Es una acción que realiza el usuario en una página web y que JavaScript puede detectar para ejecutar una función.

Ejemplos: hacer clic, mover el ratón, pulsar una tecla, cambiar un campo o enviar un formulario.

**Manejador de eventos (event handler):** función que se ejecuta cuando ocurre un evento. Se escribe con el prefijo `on` + nombre del evento.

Ejemplo:
```html
<input type="text" onclick="alert('Has entrado en la caja');">
```

También podemos llamar a una función:
```html
<input type="text" onclick="contarClicks()">
```

## 2. VARIABLES ESPECIALES: THIS Y EVENT

- `this`: hace referencia al elemento HTML que ha provocado el evento.
- `event`: objeto que contiene información sobre el evento.
- `event.type`: indica el tipo de evento que ha ocurrido.

Ejemplo con `this`:
```html
<div onclick="cambiar(this)">Pulsa aquí</div>
```

```javascript
function cambiar(elemento) {
    elemento.style.color = "red";
}
```

Ejemplo con `event`:
```javascript
function mostrar(evento) {
    alert(evento.type);
}
```

## 3. MÉTODOS addEventListener() Y removeEventListener()

- `addEventListener()`: permite asignar uno o varios manejadores de eventos a un elemento.
- `removeEventListener()`: permite eliminar un manejador de eventos.

Ejemplo:
```javascript
function saludar() {
    alert("Hola");
}

document.getElementById("boton").addEventListener("click", saludar);
```

Eliminar el evento:
```javascript
document.getElementById("boton").removeEventListener("click", saludar);
```

IMPORTANTE: para eliminarlo debemos utilizar la misma función que añadimos.

## 4. EVENTOS DEL RATÓN

Son eventos que se producen cuando el usuario interactúa con los elementos utilizando el ratón.

| Evento | Descripción y funcionamiento |
|---|---|
| `onclick` | Se ejecuta al hacer clic con el botón izquierdo del ratón sobre un elemento. |
| `ondblclick` | Se ejecuta al hacer doble clic. |
| `onmousedown` | Se ejecuta al pulsar un botón del ratón, antes de soltarlo. |
| `onmouseup` | Se ejecuta cuando soltamos un botón del ratón. |
| `onmousemove` | Se ejecuta mientras movemos el puntero dentro de un elemento. |
| `onmouseenter` | Se ejecuta cuando el puntero entra en un elemento. |
| `onmouseleave` | Se ejecuta cuando el puntero sale de un elemento. |
| `onmouseout` | Se ejecuta cuando el ratón sale de un elemento o de alguno de sus hijos. |
| `onmouseover` | Se ejecuta cuando el ratón entra en un elemento o en alguno de sus hijos. |

**Diferencias importantes:**
- `mousedown` = pulsar / `mouseup` = soltar.
- `mouseenter` = entrar / `mouseleave` = salir.
- `mouseover` y `mouseout` también detectan movimientos relacionados con elementos hijos.
- `click` = clic / `dblclick` = doble clic.

### Ejemplo: cambiar el fondo al pasar el ratón

```html
<div style="width:150px; height:60px; background:#b0c4de"
     onmouseover="this.style.background='silver'"
     onmouseout="this.style.background='#b0c4de'">
    Pasa por encima...
</div>
```

- `onmouseover`: cambia el fondo a gris al entrar.
- `onmouseout`: devuelve el fondo al color original al salir.
- `this`: hace referencia al propio DIV.

### Ejemplo: cambiar el borde

```javascript
function resalta(elemento) {
    switch(elemento.style.borderColor) {
        case 'silver':
            elemento.style.borderColor = 'black';
            break;
        case 'black':
            elemento.style.borderColor = 'silver';
            break;
    }
}
```

```html
<div style="border:thin solid silver"
     onmouseover="resalta(this)"
     onmouseout="resalta(this)">
    Sección de contenidos...
</div>
```

## 5. USO ESPECIAL DE onclick Y return false

`onclick` puede recibir un valor `true` o `false` después de ejecutar una función.

- `true`: permite continuar con la acción predeterminada.
- `false`: cancela la acción predeterminada.

Ejemplo:
```html
<a href="https://google.com" onclick="return false">
    Ir a Google
</a>
```

No abrirá Google porque se cancela la navegación.

### window.confirm()

Permite mostrar una pregunta de confirmación al usuario.

```html
<a href="https://google.com"
   onclick="return window.confirm('¿Seguro?')">
    Ir a Google
</a>
```

- Aceptar = `true` → continúa y abre Google.
- Cancelar = `false` → cancela la navegación.

También se puede utilizar para cancelar el envío de un formulario.

## 6. ACCEDER A ELEMENTOS HTML DESDE JAVASCRIPT

Para acceder a un elemento mediante su ID utilizamos:

```javascript
var e = document.getElementById("id");
```

Después podemos consultar o modificar sus propiedades:

| Propiedad | ¿Qué hace? |
|---|---|
| `.value` | Obtiene o modifica el valor de un input. |
| `.innerHTML` | Obtiene o modifica el contenido HTML de un elemento. |
| `.style` | Permite consultar o modificar los estilos CSS. |

Ejemplo:
```javascript
var e = document.getElementById("nombre");

e.value = "Jose";
e.innerHTML = "Hola";
e.style.color = "red";
```

## 7. MODIFICAR CSS DESDE JAVASCRIPT

Las propiedades CSS que llevan guiones se escriben en camelCase en JavaScript.

| CSS | JavaScript |
|---|---|
| `background` | `background` |
| `background-color` | `backgroundColor` |
| `background-image` | `backgroundImage` |
| `border-color` | `borderColor` |
| `border-style` | `borderStyle` |
| `font-family` | `fontFamily` |
| `font-size` | `fontSize` |
| `font-weight` | `fontWeight` |
| `height` | `height` |
| `margin-top` | `marginTop` |
| `margin-left` | `marginLeft` |
| `padding-left` | `paddingLeft` |
| `position` | `position` |
| `text-align` | `textAlign` |
| `text-decoration` | `textDecoration` |
| `text-transform` | `textTransform` |
| `width` | `width` |
| `z-index` | `zIndex` |

Ejemplo:
```javascript
elemento.style.backgroundColor = "red";
elemento.style.fontSize = "20px";
elemento.style.borderColor = "black";
```

**visibility:**
- `visible`: muestra el elemento.
- `hidden`: oculta el elemento, pero mantiene su espacio.

## 8. EVENTOS HTML DE FORMULARIOS Y VENTANAS

| Evento | Descripción y funcionamiento |
|---|---|
| `onblur` | Se ejecuta cuando un elemento pierde el foco. Por ejemplo, cuando salimos de una caja de texto. |
| `onchange` | Se ejecuta cuando modificamos el valor de un campo y después pierde el foco. También funciona al seleccionar una opción de una lista. |
| `onfocus` | Se ejecuta cuando un elemento obtiene el foco. Por ejemplo, cuando entramos en una caja de texto. |
| `onload` | Se ejecuta cuando la página o una imagen se ha cargado completamente. |
| `onreset` | Se ejecuta cuando intentamos reiniciar un formulario. |
| `onresize` | Se ejecuta cuando modificamos el tamaño de la ventana del navegador. |
| `onselect` | Se ejecuta cuando seleccionamos texto en un input o textarea. |
| `onsubmit` | Se ejecuta cuando intentamos enviar un formulario. |
| `onunload` | Se ejecuta cuando abandonamos una página. |

**Diferencias importantes:**
- `focus` = entrar en un campo.
- `blur` = salir de un campo.
- `change` = cambiar un valor y perder el foco.
- `load` = página cargada.
- `submit` = enviar formulario.
- `reset` = reiniciar formulario.

### Ejemplo: onload

```html
<body onload="iniciar()">
```

Ejecuta la función `iniciar()` cuando la página termina de cargarse.

### Ejemplo: onchange

```html
<input type="text" onchange="alert('Has cambiado el texto')">
```

Muestra un mensaje cuando modificamos el texto y salimos del campo.

### Ejemplo: onsubmit

```html
<form onsubmit="return validar()">
    <input type="text">
    <input type="submit" value="Enviar">
</form>
```

Ejecuta `validar()` antes de enviar el formulario. Si devuelve `false`, cancela el envío.

### Ejemplo: onreset

```html
<form onreset="return confirm('¿Quieres borrar los datos?')">
    <input type="text">
    <input type="reset" value="Borrar">
</form>
```

Pregunta si queremos reiniciar el formulario. Si cancelamos, no se borran los datos.

## 9. EVENTOS DEL TECLADO

Son eventos que detectan las acciones que realizamos utilizando el teclado.

| Evento | Descripción y funcionamiento |
|---|---|
| `onkeydown` | Se ejecuta cuando pulsamos una tecla, mientras la mantenemos pulsada. |
| `onkeypress` | Se ejecuta al pulsar una tecla que representa un carácter alfanumérico. Está en desuso. |
| `onkeyup` | Se ejecuta cuando soltamos una tecla. Es útil para comprobar campos después de escribir. |

**Diferencias importantes:**
- `keydown` = pulsar una tecla.
- `keypress` = pulsar un carácter (en desuso).
- `keyup` = soltar una tecla.

**Propiedades del objeto event:**

| Propiedad | ¿Qué devuelve? |
|---|---|
| `event.key` | El nombre o carácter de la tecla pulsada. |
| `event.keyCode` | El código numérico de la tecla. |

IMPORTANTE: INTRO = código `13`.

### Ejemplo: detectar INTRO

```html
<input type="text" onkeydown="comprobar(event)">
```

```javascript
function comprobar(evento) {
    if (evento.keyCode == 13) {
        alert("Has pulsado INTRO");
    }
}
```

### Ejemplo: ejecutar una acción al salir del campo o pulsar INTRO

```html
<input type="text"
       onblur="realizarAccion()"
       onkeypress="if(event.keyCode==13) realizarAccion()">
```

- `onblur`: ejecuta la función cuando salimos del campo.
- `onkeypress`: ejecuta la función al pulsar INTRO.

## 10. COORDENADAS DEL RATÓN

Permiten conocer la posición del puntero del ratón cuando ocurre un evento.

El origen de las coordenadas está siempre en la esquina superior izquierda.

| Propiedad | Descripción |
|---|---|
| `clientX` | Posición horizontal respecto a la ventana del navegador. |
| `clientY` | Posición vertical respecto a la ventana del navegador. |
| `screenX` | Posición horizontal respecto a la pantalla del ordenador. |
| `screenY` | Posición vertical respecto a la pantalla del ordenador. |
| `pageX` | Posición horizontal respecto a toda la página HTML, incluyendo el desplazamiento. |
| `pageY` | Posición vertical respecto a toda la página HTML, incluyendo el desplazamiento. |

**Diferencias:**
- `client` = ventana del navegador.
- `screen` = pantalla completa.
- `page` = página HTML completa, incluyendo el scroll.

### Ejemplo: mostrar coordenadas

```javascript
function coordenadas(evento) {

    alert("Navegador: " +
        evento.clientX + "," + evento.clientY);

    alert("Pantalla: " +
        evento.screenX + "," + evento.screenY);

    alert("Página: " +
        evento.pageX + "," + evento.pageY);
}
```

```html
<body onclick="coordenadas(event)">
```

Al hacer clic en cualquier parte del BODY, muestra las coordenadas del ratón.

## 11. RESUMEN RÁPIDO PARA EL EXAMEN

| Concepto | Recuerda |
|---|---|
| Evento | Acción del usuario. |
| Handler | Función que responde al evento. |
| `this` | Elemento HTML que provoca el evento. |
| `event` | Información del evento. |
| `event.type` | Tipo de evento producido. |
| `addEventListener()` | Añade eventos. |
| `removeEventListener()` | Elimina eventos. |
| `onclick` | Hacer clic. |
| `onmousedown` | Pulsar ratón. |
| `onmouseup` | Soltar ratón. |
| `onmouseenter` | Entrar con el ratón. |
| `onmouseleave` | Salir con el ratón. |
| `onfocus` | Obtener el foco. |
| `onblur` | Perder el foco. |
| `onchange` | Cambiar el valor. |
| `onload` | Cargar página. |
| `onsubmit` | Enviar formulario. |
| `onreset` | Reiniciar formulario. |
| `onkeydown` | Pulsar tecla. |
| `onkeyup` | Soltar tecla. |
| `return false` | Cancelar acción predeterminada. |
| `value` | Valor de un input. |
| `innerHTML` | Contenido HTML. |
| `style` | Estilos CSS. |
| `clientX/clientY` | Coordenadas de la ventana. |
| `screenX/screenY` | Coordenadas de la pantalla. |
| `pageX/pageY` | Coordenadas de la página. |