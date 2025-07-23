/* 
Un zoologico necesita un sistema para gestionar los sanimales y sus comportamientos.

Debes modelar un conjuto de clases que representen distintos tipos de animales y sus caracteristicas. 

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su informacion básica. 

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño específico, 
por ejemplo: Pequeño, mediano o grande. 

Crea una clase base Animal con las propiedades y métodos necesarios. 

Extender la clase Animal para crear clases espceficicas como Leon o Elfetante que tengan comportamientos 
y propiedades particulares. 

*/



class Animal {
    protected name: string;
    protected specie: string;
    protected age: number; 

constructor (name: string, specie: string, age: number) {
    this.name = name, 
    this.specie = specie 
    this. age = age 
}   

makeSound () {
    return ``
}

toString () {
    return `Name: ${this.name}\nSpecie: ${this.specie}\nAge: ${this.age}`
}

}   

class Lion extends Animal {

    constructor ( 
        name: string,
        specie: string,
        age: number
    ) {   
        super (name, specie, age)
    }

    makeSound () {
    return `Roar...`

}
    toString(): string {
        const info = super.toString ()
        
        return `🦁:\n${info}`
    }


}

type ElephantSize =  "small" | "medium" | "large"

class Elephant extends Animal {
constructor ( 
        name: string,
        specie: string,
        age: number,
        private size: ElephantSize
    ) {   
        super (name, specie, age,)
        this.size
    }

    makeSound () {
        return `Phrhrhr...`
    }
    
    toString(): string {
        const info = super.toString ()
        
        return `🐘:\n${info}\nSice:${this.size}`

    }

}

const L1 = new Lion ("Simba", "Felinus", 5 )
console.log (L1.makeSound ())
console.log (L1.toString())

const e1 = new Elephant ("Dumbo", "Efelante", 3, "medium" )
console.log (e1.makeSound ())
console.log (e1.toString())

