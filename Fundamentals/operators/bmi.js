/* 

Escribe un programa en JavaScript que calcule y muestre el índice de masa corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, peso (en kilogramos) y altura (en metros).

Después debe calcular el IMC, el progerama debe mostrar un mensaje con el nombre del usuario 
y el valor de su IMC. 

Calcula el IMC utilizando la formula: 

IMC = weight / height^2

Nombre: John 
Altura: 1.75 m
Peso: 70 kg

La salida dirá: Hi John, your BMI is 22.86.

*/

const prompt = require('prompt-sync')(); // Importamos el módulo prompt-sync para recibir entradas del usuario

const name = prompt("Ingrese su nombre: "); // Solicitamos el nombre del usuario
const height = parseFloat(prompt("Ingrese su altura (m): ")); // Solicitamos la altura del usuario y lo convertimos a número decimal
const weight = parseFloat(prompt("Ingrese su peso (kg): ")); // Solicitamos el peso del usuario y lo convertimos a número decimal


const IMC = weight / Math.pow(height, 2); // Calculamos el IMC utilizando la fórmula

console.log (`Hi ${name}, your IMC is ${IMC.toFixed(2)}.`); // Mostramos el resultado con dos decimalesgit