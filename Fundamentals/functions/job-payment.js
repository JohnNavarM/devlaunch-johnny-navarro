/* En una empresa hay proceso donde cada trabajador debe rgistrar las horas de entrada y salida diariamente.
De esta forma, al final del día, el empleador sabrá cianto tiene que pagarles por sus horas trabajadas. 
Pero, si una person trabajó más de ocho horas, se le debe pagar un costo extra por las horas adicionales, 
que es igual a 1.5 veces el costo normal por hora.
Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida, imprima 
el monto total de dinero que ese empleado recibió ese día. 

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

Respuesta: $95
    
    */ 


const prompt = require('prompt-sync')()

const WORK_DAY_HOURS = 8
const WORK_DAY_HOURS_EXTRA_MULTIPLIER = 1.5

const calculateSalary = (hourlyRate, startTime, endTime) => {
const [startHour] = startTime.split(':') 
const [endHour] = endTime.split(':')

const workedHours = endHour - startHour
console.log (workedHours)

let salary = 0
if (workedHours <= 8) {
    salary = workedHours * hourlyRate
  
 } else {
    const extraHours = workedHours - WORK_DAY_HOURS 
    salary = (WORK_DAY_HOURS * hourlyRate) + (extraHours * hourlyRate * WORK_DAY_HOURS_EXTRA_MULTIPLIER)
 }

 return salary

} 


const main = () => {
    const hourlyRate = parseFloat(prompt ('Hourly Rate: '))
    const startTime = prompt ('START TIME: ')
    const endTime  = prompt ('END TIME: ')

    const salary = calculateSalary (hourlyRate, startTime, endTime) 

    console.log (`Total Salary: $${salary}`)

}

main ()






