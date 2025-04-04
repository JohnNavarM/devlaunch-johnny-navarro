/* Escribe un programa simple en JavaScritp que evalúe el valor de una variable llamda "n"
Verfifica si el número es positivo, negativo o cero, y mustra el mensaje correspondiente.
basado en la siguiente evaluación:

Si el número es mayor que cero, imprime "Positivo"
Si el número es menor que cero, imprime "Negativo"
Si el número es igual a cero, imprime "Cero"

Si la variable no es un número, imprime un mensaje de error: 'Por favor introduce un número'.

*/

const promt = require('prompt-sync')(); // Importamos el módulo prompt-sync para recibir entradas del usuario

const n = parseInt (promt('Ingresa un número: ?')); // Pedimos al usuario que ingrese un número

if (n > 0) { 
    console.log('Positivo');
} else if (n < 0) {
    console.log('Negativo');
} else if (n === 0) {
    console.log('Cero');
} else {
    console.log('Por favor introduce un número');
} 