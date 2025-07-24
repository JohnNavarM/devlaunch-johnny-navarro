/* 
Eres respondable de diseñar un sistema sencillo de gestión de vehículos para un empresa de transporte. 
El asistema debe representar tipos de vehículos y sus comportamientos utilizando una estructura de herencias. 
Todos los vehículos tienen un emoji, marca, modelo y año de fabricación. 
Los vehículos deben poder arracar y mostrar su información. 
Los coches tiene un número específico de puertas y deben poder encener el aire acondionado. 
Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).
*/

class Vehicle {
    private isOn: boolean

    constructor (
        protected emoji: string,
        protected brand: string,
        protected model: string,
        protected year: number
    ) {
    this.emoji = emoji
    this.brand = brand 
    this.model = model
    this.year = year
    this.isOn = false
    }

    toRun (): void {
       console.log (`${this.emoji} ${this.brand} ${this.model} is on`);
    }

    toString () {
        return `${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor (
        emoji: string,
        brand: string,
        model: string,
        year: number,
        public numOfDoors: number = 4 
    ) { 
        super (emoji, brand, model, year);
    }
        
        turnOnAir(): void {
        console.log (`❄️ El aire acondicionado del ${this.brand} está encendido.`);
        }

        toString (): string {
        const info = super.toString();

        return (`🚪 Número de puertas: ${this.numOfDoors}`);
  } 

    }


class Motorcicle extends Vehicle {
  constructor(
    emoji: string,
    brand: string,
    model: string,
    year: number,
    public tieneSidecar: boolean
  ) {
    super(emoji, brand, model, year);
  }

  hacerWheelie(): void {
    console.log(`🏍️ ¡${this.brand} está haciendo un wheelie!`);
  }

  toString (): string {
    const info = super.toString();
    return  `${info}`;

  }
}

const miCoche = new Car ("🚗", "Toyota", "Corolla", 2022, 4);
miCoche.toRun();
miCoche.turnOnAir();
console.log(miCoche.toString());

console.log("-----");

const miMoto = new Motorcicle("🏍️", "Harley-Davidson", "Street 750", 2021, true);
miMoto.toRun();
miMoto.hacerWheelie();
console.log(miMoto.toString());