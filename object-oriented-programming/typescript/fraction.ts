/* 
En este esecenario, se te proporcionarán varias fracciones. Tu tarea será realizar
diversas operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es optener el numerador y denomidador de estas operaciones. 

Para logtarlo, deberas definir dos atributos, el númerador y el denominador. 

Además, implementaras metodos correspondientes para cada operación, devolviendo un objeto resultante 
con el numerador y el denominador calculados. 

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte del objeto,
como incluidas como parte de su funcional dentro del objeto mismo. 

const fraction1 = createFraction (3, 4)
const fraction2 = createFraction (2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunctions (3, 4)
const fraction4 = fraction (2, 3)

fractional3.add(fraction4)
*/

interface Fraction {  
numerator: number;
denomidator: number;
}

interface fractionWithOperator implements Fraction {

      add: (f2: Fraction) => Fraction
     subtract: (f2: Fraction) => Fraction
     multiply: (f2: Fraction) => Fraction
     divide: (f2: Fraction) => Fraction   
    }
}


const createFraction = (numerator: number, denomidator: number) : Fraction => { 
    return {
        numerator,
        denomidator
    }
}


const add = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denomidator) + (f1.denomidator * f2.numerator)  
    const denominador = f1.denomidator * f2.denomidator

    return createFraction(numerator, denominador)
}

const subtract = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denomidator) - (f1.denomidator * f2.numerator)  
    const denominador = f1.denomidator * f2.denomidator

    return createFraction(numerator, denominador)
}

const multiply = (f1: Fraction, f2: Fraction) => {
    const numerator = f1.numerator * f2.numerator
    const denominador = f1.denomidator * f2.denomidator

    return createFraction(numerator, denominador)
}

const divide = (f1: Fraction, f2: Fraction) => {
    const numerator = f1.numerator * f2.denomidator
    const denominador = f1.denomidator * f2.numerator

    return createFraction(numerator, denominador)
}

const createFractionWithFunctions = (numerator: number, denomidator: number): fractionWithOperator =>  {
    const fraction = createFraction (numerator, denomidator)

    return {
     ...f1,
     add: (f2: Fraction) => add (f1, f2),
     subtract: (f2: Fraction) => subtract (f1, f2),
     multiply: (f2: Fraction) => multiply (f1, f2),
     divide: (f2: Fraction) => divide (f1, f2),   
    }
 }

const f1 = createFraction (3, 4)
const f2 = createFraction (2, 3) 

console.log (add(f1,f2))
console.log (subtract(f1,f2))
console.log (multiply(f1,f2))
console.log (divide(f1,f2))

const f3 = createFractionWithFunctions (3, 4)
const f4 = createFraction (2, 3)

console.log (f3.add (f4))
console.log (f3.subtract (f4))
console.log (f3.multiply (f4))
console.log (f3.divide (f4))
