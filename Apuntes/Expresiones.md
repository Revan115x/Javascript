# CHULETA DE EXPRESIONES REGULARES EN JAVASCRIPT
**DAW2 — Desarrollo Web en Entorno Cliente — RA3**

## 1. ¿Qué es una expresión regular?

Una expresión regular (*RegExp*) es un patrón que permite comprobar si una cadena de texto cumple unas condiciones.

Se utiliza, por ejemplo, para validar DNI, teléfonos, contraseñas, fechas y números.

En JavaScript se puede escribir así:

```javascript
let patron = /^\d{8}[A-Z]$/;
```

Para comprobar si una cadena cumple el patrón, utilizamos `.test()`:

```javascript
let patron = /^\d{8}[A-Z]$/;

alert(patron.test("12345678A")); // true
alert(patron.test("1234567A"));  // false
```

- `true`: la cadena cumple el patrón.
- `false`: la cadena no cumple el patrón.

## 2. Símbolos básicos

| Símbolo | Significado | Ejemplo |
|---|---|---|
| `^` | Inicio de la cadena | `^Hola` |
| `$` | Final de la cadena | `Hola$` |
| `\d` | Un dígito, de 0 a 9 | `\d` |
| `\D` | Un carácter que no sea un dígito | `\D` |
| `\s` | Un espacio en blanco, tabulación o salto de línea | `\s` |
| `\S` | Un carácter que no sea espacio en blanco | `\S` |
| `[A-Z]` | Una letra mayúscula de A a Z | `[A-Z]` |
| `[a-z]` | Una letra minúscula de a a z | `[a-z]` |
| `[0-9]` | Un dígito | `[0-9]` |
| `[abc]` | Una `a`, una `b` o una `c` | `[abc]` |
| `[^abc]` | Cualquier carácter excepto `a`, `b` o `c` | `[^abc]` |
| `.` | Casi cualquier carácter, excepto normalmente los saltos de línea | `a.b` |
| `\+` | El símbolo `+` literal | `\+` |
| `\-` | El guion literal | `\-` |
| `\.` | Un punto literal | `\.` |
| `\|` | Una barra vertical literal | `\|` |
| `()` | Agrupar una expresión | `(ab)` |
| `\|` | Alternativa, significa «o» | `a\|b` |

En una expresión regular de JavaScript, la alternativa se escribe con una barra vertical sin escapar: `a|b`. Para buscar una barra vertical literal, se escribe `\|`.

### Cuantificadores

| Símbolo | Significado | Ejemplo |
|---|---|---|
| `*` | Cero o más repeticiones | `a*` |
| `+` | Una o más repeticiones | `a+` |
| `?` | Cero o una repetición | `a?` |
| `{3}` | Exactamente 3 repeticiones | `\d{3}` |
| `{2,5}` | Entre 2 y 5 repeticiones | `\d{2,5}` |
| `{2,}` | Dos o más repeticiones | `\d{2,}` |

**Truco:** `+` significa una o más repeticiones, pero `\+` busca el símbolo `+` literal.

---

## 3. Ejercicio 1: explicar las expresiones regulares

### a. `/^\s+$/`

- `^`: inicio de la cadena.
- `\s+`: uno o más espacios en blanco.
- `$`: final de la cadena.

Comprueba si la cadena contiene únicamente espacios en blanco, tabulaciones u otros caracteres reconocidos por `\s`, y al menos uno.

```javascript
/^\s+$/.test("   "); // true
/^\s+$/.test(" hola "); // false
/^\s+$/.test(""); // false
```

Sirve para detectar cadenas que contienen solo espacios en blanco.

### b. `/^\d{8}[A-Z]$/`

- `^\d{8}`: exactamente 8 dígitos al principio.
- `[A-Z]`: una letra mayúscula.
- `$`: final de la cadena.

```javascript
/^\d{8}[A-Z]$/.test("12345678A"); // true
```

Sirve para comprobar el formato de un DNI español, aunque no verifica si la letra corresponde realmente al número.

### c. `/^\d{10}[A-Z]{2}$/`

- `\d{10}`: exactamente 10 dígitos.
- `[A-Z]{2}`: exactamente 2 letras mayúsculas.

```javascript
/^\d{10}[A-Z]{2}$/.test("1234567890AB"); // true
```

Sirve para validar cadenas con el formato de 10 dígitos seguidos de 2 mayúsculas, por ejemplo un identificador con esa estructura.

### d. `/^\d{9}$/`

- `\d{9}`: exactamente 9 dígitos.
- `^` y `$`: no permite caracteres adicionales antes ni después.

```javascript
/^\d{9}$/.test("612345678"); // true
/^\d{9}$/.test("61234567"); // false
```

Sirve para validar una cadena de 9 dígitos, como el formato de un número de teléfono de nueve cifras.

### e. `/^\d{3}-\d{3}-\d{3}$/`

Exige tres dígitos, un guion, otros tres dígitos, otro guion y tres dígitos finales.

```javascript
/^\d{3}-\d{3}-\d{3}$/.test("123-456-789"); // true
```

Sirve para validar un identificador o número con el formato `123-456-789`.

### f. `/^\d{3}\s\d{2}\s\d{2}\s\d{2}$/`

Exige:
- 3 dígitos.
- Un espacio en blanco.
- 2 dígitos.
- Un espacio en blanco.
- 2 dígitos.
- Un espacio en blanco.
- 2 dígitos.

```javascript
/^\d{3}\s\d{2}\s\d{2}\s\d{2}$/.test("123 45 67 89"); // true
```

Sirve para validar números agrupados en bloques separados por espacios.

### g. `/^\+\d{2,3}\s\d{9}$/`

- `\+`: un símbolo `+` literal.
- `\d{2,3}`: entre 2 y 3 dígitos.
- `\s`: un espacio en blanco.
- `\d{9}`: exactamente 9 dígitos.

```javascript
/^\+\d{2,3}\s\d{9}$/.test("+34 612345678"); // true
```

Sirve para validar un número con prefijo internacional de 2 o 3 dígitos y un número de 9 cifras.

---

## 4. Ejercicio 2: definir y comprobar expresiones regulares

### a. Es un número binario

Un número binario contiene únicamente `0` y `1`. Para exigir al menos un dígito:

```javascript
let patron = /^[01]+$/;

patron.test("101010"); // true
patron.test("102010"); // false
patron.test("");       // false
```

`[01]` significa un cero o un uno. El `+` exige al menos uno.

### b. Es un teléfono móvil

Para un formato español de 9 cifras que comienza por 6 o 7:

```javascript
let patron = /^[67]\d{8}$/;

patron.test("612345678"); // true
patron.test("712345678"); // true
patron.test("812345678"); // false
```

`[67]` exige que el primer dígito sea un 6 o un 7; `\d{8}` exige ocho dígitos más.

Esta expresión valida un formato, no comprueba si el número está asignado o activo.

### c. Es un teléfono 901, 902 o 903

Para comprobar un número de nueve cifras que empieza por 901, 902 o 903:

```javascript
let patron = /^90[123]\d{6}$/;

patron.test("901123456"); // true
patron.test("902123456"); // true
patron.test("903123456"); // true
patron.test("904123456"); // false
```

`90[123]` permite 901, 902 o 903. Después exige seis dígitos.

### d. Es daw1, daw2, asir1, asir2, fin1 o fin2 en mayúsculas o minúsculas

```javascript
let patron = /^(daw|asir|fin)[12]$/i;

patron.test("daw1");  // true
patron.test("DAW2");  // true
patron.test("Asir1"); // true
patron.test("fin2");  // true
patron.test("dam1");  // false
```

- `(daw|asir|fin)`: permite cualquiera de esos tres textos.
- `[12]`: permite un 1 o un 2.
- `i`: ignora las diferencias entre mayúsculas y minúsculas.

### e. Cantidad de dinero con dos decimales y que acaba en $ o €

Ejemplos válidos: `12,50€`, `99,99$`, `0,25€`.

```javascript
let patron = /^\d+,\d{2}[€$]$/;

patron.test("12,50€"); // true
patron.test("99,99$"); // true
patron.test("12,5€");  // false
patron.test("12.50€"); // false
```

- `\d+`: uno o más dígitos antes de la coma.
- `,`: una coma literal.
- `\d{2}`: exactamente dos decimales.
- `[€$]`: termina en el símbolo € o $.

### f. Página web que empieza por www., acaba en .com, .org o .es y contiene poker, porno o juego

```javascript
let patron = /^www\..*(poker|porno|juego).*\.(com|org|es)$/i;

patron.test("www.poker.com"); // true
patron.test("www.juegos.es"); // true
patron.test("www.porno.org"); // true
patron.test("www.deportes.com"); // false
```

- `^www\.`: comienza por `www.`.
- `.*`: permite cualquier cantidad de caracteres.
- `(poker|porno|juego)`: debe aparecer al menos una de esas palabras.
- `\.(com|org|es)$`: termina en `.com`, `.org` o `.es`.
- `i`: no distingue entre mayúsculas y minúsculas.

Esta expresión comprueba el formato indicado por el ejercicio; no verifica que la web exista ni que sea segura.

### g. Hora con formato hh:mm:ss

Para validar horas reales entre `00:00:00` y `23:59:59`:

```javascript
let patron = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

patron.test("12:44:21"); // true
patron.test("23:59:59"); // true
patron.test("25:70:80"); // false
```

- `([01]\d|2[0-3])`: horas entre 00 y 23.
- `[0-5]\d`: minutos entre 00 y 59.
- `[0-5]\d`: segundos entre 00 y 59.
- `:` representa los dos puntos literales.

### h. Fecha dd/mm/aaaa

Para validar el formato de dos dígitos, dos dígitos y cuatro dígitos separados por `/`:

```javascript
let patron = /^\d{2}\/\d{2}\/\d{4}$/;

patron.test("26/10/2026"); // true
patron.test("1/10/2026");  // false
```

**Importante:** esta expresión comprueba el formato, pero no que la fecha exista. Por ejemplo, `45/19/2026` también pasaría la comprobación del formato.

### i. Contraseña de exactamente 6 dígitos

```javascript
let patron = /^\d{6}$/;

patron.test("123456"); // true
patron.test("12345");  // false
patron.test("12345a"); // false
```

### j. Contraseña de 6 caracteres con solo dígitos y/o letras minúsculas

```javascript
let patron = /^[a-z\d]{6}$/;

patron.test("abc123"); // true
patron.test("123456"); // true
patron.test("abcdef"); // true
patron.test("ABC123"); // false
patron.test("abc12");  // false
```

- `[a-z\d]`: permite letras minúsculas y dígitos.
- `{6}`: exige exactamente seis caracteres.

### k. Contraseña de entre 6 y 8 caracteres, con al menos una minúscula y un dígito

```javascript
let patron = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,8}$/;

patron.test("abc123");   // true
patron.test("abcdef");   // false: no hay dígitos
patron.test("123456");   // false: no hay minúsculas
patron.test("ab12");     // false: demasiado corta
patron.test("abc123456"); // false: demasiado larga
```

- `(?=.*[a-z])`: exige al menos una letra minúscula.
- `(?=.*\d)`: exige al menos un dígito.
- `[a-z\d]{6,8}`: permite solo minúsculas y dígitos, con una longitud entre 6 y 8 caracteres.

Los dos grupos `(?=...)` son comprobaciones anticipadas: exigen que exista algo en la cadena sin consumir caracteres.

---

## 5. Ejercicio 3 opcional

En este apartado suponemos que las cadenas solo pueden contener las letras `a` y `b`, salvo que el patrón permita explícitamente otra cosa.

### a. Solo tienen `a` o solo tienen `b`

Una cadena no vacía compuesta exclusivamente por `a` o exclusivamente por `b`:

```javascript
let patron = /^(a+|b+)$/;

patron.test("aaaa"); // true
patron.test("bbb");  // true
patron.test("aab");  // false
patron.test("");     // false
```

- `a+`: una o más letras `a`.
- `b+`: una o más letras `b`.
- `|`: significa «o».

### b. Solo tengan parejas de `a` y/o parejas de `b`

```javascript
let patron = /^(aa|bb)+$/;

patron.test("aa");     // true
patron.test("aabb");   // true
patron.test("bbaabb"); // true
patron.test("ab");     // false
patron.test("aaa");    // false
```

Cada bloque debe ser `aa` o `bb`, y debe existir al menos un bloque.

### c. Contienen la cadena `aba` o la cadena `bab`

```javascript
let patron = /(aba|bab)/;

patron.test("ababa"); // true
patron.test("bbab");  // true
patron.test("aaaa");  // false
```

No usamos `^` ni `$` porque la secuencia puede aparecer en cualquier posición de la cadena.

### d. Contienen la cadena `ba` al menos dos veces seguidas

Si se pide que aparezca `baba` como secuencia consecutiva, es decir, dos apariciones seguidas de `ba`:

```javascript
let patron = /(ba){2}/;

patron.test("baba");   // true
patron.test("bababa"); // true
patron.test("ba");     // false
```

Si se exigiera que toda la cadena estuviera formada por una o más repeticiones de `ba`, sería:

```javascript
let patron = /^(ba){2,}$/;

patron.test("baba");   // true
patron.test("bababa"); // true
patron.test("babb");   // false
```

### e. No tienen más de tres `a` o tres `b` seguidas

Es decir, no debe aparecer `aaaa` ni `bbbb` consecutivamente:

```javascript
let patron = /^(?!.*a{4})(?!.*b{4})[ab]*$/;

patron.test("aaabb");  // true
patron.test("ababab"); // true
patron.test("aaaa");   // false
patron.test("abbbb");  // false
```

- `(?!.*a{4})`: impide que aparezcan cuatro `a` seguidas.
- `(?!.*b{4})`: impide que aparezcan cuatro `b` seguidas.
- `[ab]*`: permite cualquier combinación de `a` y `b`, incluso la cadena vacía.

### f. Alternan la `a` y la `b` sin repetirse

Una cadena que empieza por `a` o `b` y alterna las letras sin repetir dos iguales seguidas:

```javascript
let patron = /^(?:ab)*a?$|^(?:ba)*b?$/;

patron.test("abab");  // true
patron.test("baba");  // true
patron.test("aba");   // true
patron.test("bab");   // true
patron.test("aabb");  // false
```

Este patrón permite también la cadena vacía. Si el ejercicio exige al menos un carácter, se puede utilizar:

```javascript
let patron = /^(?:ab)+a?$|^(?:ba)+b?$/;
```

---

## 6. Cómo comprobar las expresiones regulares

Puedes crear una expresión regular y probar varias cadenas con `.test()`:

```javascript
let patron = /^\d{6}$/;

let clave = prompt("Introduce una contraseña de 6 dígitos");

if (patron.test(clave)) {
    alert("Contraseña válida");
} else {
    alert("Contraseña no válida");
}
```

**Recuerda:** `prompt()` devuelve una cadena o `null` si se pulsa Cancelar. Para los patrones que validan texto, no hace falta convertir el resultado a número.

## 7. Resumen de los símbolos más importantes

| Necesidad | Símbolo |
|---|---|
| Inicio de la cadena | `^` |
| Final de la cadena | `$` |
| Un dígito | `\d` |
| Uno o más | `+` |
| Cero o más | `*` |
| Exactamente 6 | `{6}` |
| Entre 6 y 8 | `{6,8}` |
| Una letra mayúscula | `[A-Z]` |
| Una letra minúscula | `[a-z]` |
| Una alternativa u otra | `a|b` |
| Un punto literal | `\.` |
| Un símbolo `+` literal | `\+` |
| Comprobar un patrón | `patron.test(cadena)` |

**Consejo de examen:** primero identifica qué caracteres se permiten, después cuántos deben aparecer y finalmente si la cadena debe empezar o terminar de una forma concreta. Con eso puedes construir la mayoría de las expresiones regulares de este ejercicio.