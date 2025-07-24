/* 
Se solicita al usuario que ingrese su fecha de nacimiento con el fformato 'YYYY-MM-DD'. 

Cálculo de la edad: se crea un objeto date para la fecham de nacimento y se calcula la edad restando 
el año de nacimiento al año actual. También se verifica si ya ha pasado el 
cumpleaños del año actual, para ajustar la edad si es necesario.

Verifcación de la edad:
Se utiliza un if-else para determinar si la persona cumple la edad legal para beber (18 o más) y se imprime el mensaje correspondiente.  
Este programa permite que el proceso de verificación de edad sea automático y preciso, 
asegurando que solo mayores de edad puedan acceder a bebidas alcohólicas.

Puedes guiarte con esto: 

const prompt = require('prompt-sync')(); // Importamos el módulo prompt-sync para recibir entradas del usuario

const birdhdate = prompt('Enter your birthdate (YYYY-MM-DD): '); // Solicita al usuario su fecha de nacimiento

const birthday = new Date(birdhdate); // Crea un objeto Date a partir de la fecha de nacimiento ingresada
const today = new Date(); // Crea un objeto Date con la fecha actual

const age = today.getFullYear() - birthday.getFullYear(); // Calcula la edad restando el año de nacimiento al año actual

*/

const prompt = require('prompt-sync')(); // Importamos el módulo prompt-sync para recibir entradas del usuario

const birthdate = prompt('Enter your birthdate (YYYY-MM-DD): '); // Solicita al usuario su fecha de nacimiento

const today = new Date(); // Crea un objeto Date con la fecha actual
const birthday = new Date(birthdate); // Crea un objeto Date a partir de la fecha de nacimiento ingresada 

let age = today.getFullYear() - birthday.getFullYear(); // Calcula la edad restando el año de nacimiento al año actual

const birthdayPassed = (
    today.getMonth() > birthday.getMonth() || // Verifica si el mes actual es mayor que el mes de nacimiento
(
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate() 
)
)

if (!birthdayPassed) { // Verifica si ya ha pasado el cumpleaños del año actual
  age--; // Si ya ha pasado, resta 1 a la edad calculada    
}

if (age >= 18) { // Verifica si la edad es mayor o igual a 18   
    
    console.log('Bienvenido a el bar de Moe'); // Mensaje si es mayor de edad
    }else { // Si no es mayor de edad
    console.log('Solo ingresan mayores de endad'); // Mensaje si es menor de edad    

    }
console.log (age); // Muestra la edad calculada en la consola
