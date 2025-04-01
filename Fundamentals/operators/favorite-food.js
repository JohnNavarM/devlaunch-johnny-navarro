/* Escribe un programa simple en Javascript que examine las 
perefencias culinarias de tres personas: María, Pepe y Malvern. El programa analiza
tres condiciones: 

¿Comparte María la misma comida favorita que tanto Pepe y Malvern?
¿La comida favorita de María coincide con la de Pepe ó la de Malvern?
¿La preferencia de María es diferente a la de Pepe y Malvern?

Recuerda pedir los valores al usuario para poder elegir diferenes combinaciones, 
ejemplo: Si la comida favorita de María es la pizza, la de Pepe es el Pollo
y el de Malvern es el pescado. 

Los resultados de estas comparaciones se muestran luego, ofreciendo información
sobre las similaridades y diferencias entre las preferencias culinarias de los tres individuos. 
    
La salida del programa será: 

Does Maria share the same favorite food as Pepe and Malvern? : false
Does Maria's favorite food match either Pepe's or Malvern's? : false
Does Maria's favorite food differ from both Pepe and Malvern? : true

    */  

const prompt = require('prompt-sync')(); // Importamos el módulo prompt-sync para recibir entradas del usuario
const mariaFood = prompt("Ingrese la comida favorita de María: "); // Pedimos la comida favorita de María   
const pepeFood = prompt("Ingrese la comida favorita de Pepe: "); // Pedimos la comida favorita de Pepe
const malvernFood = prompt("Ingrese la comida favorita de Malvern: "); // Pedimos la comida favorita de Malvern

const isMariaAndPepeSameFavFood = (mariaFood === pepeFood)  // Comprobamos si María comparte la misma comida favorita que Pepe
const isMariaAndMalvernSameFavFood = (mariaFood === malvernFood) // Comprobamos si María comparte la misma comida favorita que Malvern

const allMatch = (isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood) // Comprobamos si María comparte la misma comida favorita que Pepe y Malvern
const someMatch = (isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood) // Comprobamos si María comparte la misma comida favorita que Pepe o Malvern
const noneMatch = (!isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood) // Comprobamos si María no comparte la misma comida favorita que Pepe y Malvern 

console.log(`Does Maria share the same favorite food as Pepe and Malvern? : ${allMatch}`); // Mostramos el resultado de la comparación
console.log(`Does Maria's favorite food match either Pepe's or Malvern's? : ${someMatch}`); // Mostramos el resultado de la comparación
console.log(`Does Maria's favorite food differ from both Pepe and Malvern? : ${noneMatch}`); // Mostramos el resultado de la comparación
