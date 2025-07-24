/* Imagina desarrollar un programa para calcular el promedio de calificaciones de un estudiantes
en una escuela. Como parte de ese desafío, primero configuras el entorno para recibir entradas del usuario
permitiendo que ingresen tres notas. 
Luego, procesos esos datos para calcular el promedio de manera precisa.
Finalmente, presentas el dato formateado con máximo dos decimales, para asegurar una lectura clara.
Si el usuario ingresa las calificaciones 70 80 y 90, la salida será: 80.00. 
*/

const prompt = require ('prompt-sync')();

const gradeAmount = 3; // Número de notas a ingresar

const grade1 = parseFloat(prompt('Nota 1: '));
const grade2 = parseFloat(prompt('Nota 2: '));
const grade3 = parseFloat(prompt('Nota 3: ')); 

const average = (grade1 + grade2 + grade3) / gradeAmount; // Promedio de las notas

console.log(`
    ----------------------
    PROMEDIO DE NOTAS
    ----------------------

    Nota 1: ${grade1}
    Nota 2: ${grade2}
    Nota 3: ${grade3}

    Promedio Final: ${average.toFixed(2)}
`)