/* Escribe un programa de Javascript que solicite al usuiario ingresar un número de días y calcule 
el número esquivalente de meses y dias restantes, considerando que un mes tiene 30 días.

Este programa utiliza el modulo 'prompt-sync' para recibir interactivamente la entrada del usuario.
Después debe calcular la cantidad de meses y dias restantes segun la entrada, el programa 
presenta un mensaje al usuario indicando el equivalente en meses y dias restantes. 

Como pista puedes usar el Math.floor() para redondear el resultado a un número entero. 

Si el usario ingresa 100 días, la salida dirá: 100 días are 3 meses y 10 días.
    
    */  


const DAYSPER_MONTH = 30; // Definimos la cantidad de días por mes
const prompt = require('prompt-sync')();

let days = parseInt(prompt("Ingrese el número de días: "));       
let months = Math.floor(days / DAYSPER_MONTH); // Calculamos los meses
let daysLeft = days % DAYSPER_MONTH; // Calculamos los días restantes

console.log(`${days} días son ${months} meses y ${daysLeft} días.`); // Mostramos el resultado