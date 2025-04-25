/* 
La Universidad de Harvard se ha dado cuenta que manejar manualmente los criterios de
becas no es eficiente. Ahora buscan una forma mejor de evaluar las numeras solicitudes de
estudianes que reciben. 

El nuevo sistema que panean implementar decidira eficientemente quien califica para las becas. 
Normalmente, los estudiantes deben ayudar con las clases de laboratorio y aprobar cuatro materias, 
con sus calificaciones promediadas para verificar elegibilidad. 

Las reglas de elegibilidad son estrictas: 

- Los estudiantes necesitan tener un promedio de 9 o más en todas las materias, sin ninguna calificacion 
individual menor a 8, independientemente de cómo les fue como asistentes de laboratorio.

- Alternativamente, si tienen un promedio de 8.5 o más, aún pueden calificar si obtenen una calificación
de "A" o "B" como asistentes de laboratorio.

- Sin embargo, si obtuvieron una calificación de "C" o menor como asistentes de laboratorio, no calificarán para la beca, sin importar su promedio.

*/

const prompt = require('prompt-sync')();

const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MIN_GRADE = 8
const MIN_AVERAGE = 8.5
const FAST_FORWARD_GRADE = 9

function validateScholarship (grade1, grade2, grade3, grade4, assistantGrade) {
    if (assistantGrade === REJECT_ASSISTANT_GRADE) return false
   
    if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE) return false  

    const average = (grade1 + grade2 + grade3 + grade4) / AMOUNT_OF_GRADES

    if (average < MIN_AVERAGE) {
      return false
    } else { 
      if (average < FAST_FORWARD_GRADE && assistantGrade !== 'A' && assistantGrade !== 'B') {
        return false
      }
    }
     console.log (average)
    return true

    }

function main () {
    const grade1 = parseFloat(prompt('Grade #1: '))
    const grade2 = parseFloat(prompt('Grade #2: '))
    const grade3 = parseFloat(prompt('Grade #3: '))
    const grade4 = parseFloat(prompt('Grade #4: '))
    
const assistantGrade = prompt('Assistant grade (A, B, C, D): '). toUpperCase()

const isElegible = validateScholarship (grade1, grade2, grade3, grade4, assistantGrade)

if (isElegible) {
    console.log ('Congrats! You are elegible for the scholarship')
 } else {
    console.log ('Sorry, you are not elegible for the scholarship')

} 
 
    }

main()