//2. Definir y comprobar expresiones regulares

//a. Número binario

/^[01]+$/

//Solo permite ceros y unos. El + exige al menos un carácter.

//b. Teléfono móvil

/^[6-7]\d{8}$/

//Empieza por 6 o 7 y contiene otros ocho dígitos.

//c. Teléfono 901, 902 o 903

/^90[1-3]\d{6}$/

//Empieza por 901, 902 o 903 y contiene seis dígitos más.

//d. daw1, daw2, asir1, asir2, fin1 o fin2 (mayúsculas o minúsculas)

^(daw|asir|fin)[12]$/i

//(daw|asir|fin) permite una de las tres opciones; [12] exige terminar en 1 o 2; i ignora mayúsculas.

//e. Cantidad de dinero con dos decimales y $ o €

/^\d+,\d{2}[$€]$/

//Ejemplos válidos: 15,99€ y 100,50$. Usa coma decimal y exactamente dos cifras decimales.

//f. Web www. que contiene poker, porno o juego y termina en .com, .org o .es

/^www\..*(poker|porno|juego).*\.(com|org|es)$/i

//Exige www. al principio, una de las palabras indicadas en el nombre y una de las extensiones permitidas. No valida todos los detalles posibles de una URL.

//g. Hora hh:mm:ss

/^\d{2}:\d{2}:\d{2}$/

//Comprueba el formato de dos dígitos, dos puntos y otros dos grupos de dos dígitos. No comprueba rangos reales de hora.

//h. Fecha dd/mm/aaaa

/^\d{2}\/\d{2}\/\d{4}$/

//Comprueba el formato de dos dígitos, barra, dos dígitos, barra y cuatro dígitos. No valida que el día exista en ese mes.

//i. Contraseña de exactamente 6 dígitos

/^\d{6}$/

//Exige exactamente seis números.

//j. Contraseña de 6 caracteres: dígitos y/o minúsculas

/^[a-z\d]{6}$/

//Cada uno de los seis caracteres debe ser una letra minúscula o un dígito.

//k. Contraseña de 6 a 8 caracteres con al menos una minúscula y un dígito

/^(?=.*[a-z])(?=.*\d)[a-z\d]{6,8}$/

//Los lookaheads (?=.*[a-z]) y (?=.*\d) exigen al menos una minúscula y un dígito. El resto limita los caracteres permitidos y su longitud.

//3. Opcional

a. Solo tienen 'a' o solo tienen 'b'

/^(a+|b+)$/

//Acepta una o más letras a, o una o más letras b. Ejemplos: aaa, bbbb.

//b. Solo parejas de 'a' y/o parejas de 'b'

/^(aa|bb)+$/

//Acepta una o más parejas aa o bb. Ejemplos: aa, bb, aabb, bbaa.

//c. Contienen la cadena 'aba' o la cadena 'bab'

/(aba|bab)/

//No lleva ^ ni $ porque la secuencia puede aparecer en cualquier posición de la cadena.

//d. Contienen la cadena 'ba' al menos dos veces seguidas

/(ba){2,}/

//Busca ba repetido dos o más veces seguidas. Ejemplos: baba, bababa.

//e. No tienen más de tres 'a' o tres 'b' seguidas

/^(?!.*(a{4}|b{4}))[ab]+$/

//El bloque (?!...) prohíbe que aparezcan cuatro a o cuatro b consecutivas. Solo admite a y b.

//f. Alternan la 'a' y la 'b' sin repetirse

/^(ab|ba)(ab|ba)*$/

//Acepta cadenas que empiezan por ab o ba y continúan repitiendo esos pares. Ejemplos: ab, ba, abab, baba.

//Comprobar una expresión regular en JavaScript

//Se puede utilizar el método test(), que devuelve true si la cadena cumple la expresión y false si no la cumple.

let re = /^[01]+$/;

console.log(re.test("101010")); // true
console.log(re.test("102010")); // false

Consejo: para estudiar, conviene dominar primero ^, $, [], {}, (), |, + y *. Los lookaheads (?= y ?!) son un recurso algo más avanzado. 