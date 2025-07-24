/* 
Cuando se trqata de ventirladores, a menudo presentan caracteristicas distintivas como configuraciones
de velocidad, tamaño, potencia media en vatios o caballos e fuerza, tipo y color. 

Para manejar y modificar adecuadamente las caracteristicas de un ventilador, es útil organizarlas en 
un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las propuedades del 
ventilador, facilitando la comprensión, reutilización y mantenimiento del código. 

Para abordar esta tarea, crearemos un clase que encapsule los diferentes atributos de un ventilador. 
Esta clase inlcuirá un constructur para incializar dichos atributos y métodos como getter y setter para
acceder y modificarlos según sea necesario. 

Al imprementar esta estrucyra de clase, oidremos representar y gestionar de manera eficiente las 
características de los ventiladores en nuestro sistema. 

Esta clase está diseñada apra proporcionar todas las caracteristicas esenciales del ventilador en el momdento
de su creación

*/


type FanSize = "small" | "medium" | "large"
type FanColor = "white" | "black" | "Gray"
type FanSpeed = 0 | 1 |2 | 3
type FanType = "Pedestal" | "Wall" | "Tower"

class fan {

    constructor (
        public speed: FanSpeed,
        public size: FanSize, 
        public type: FanType, 
        public color: FanColor, 
    ) {
        this.type = type
        this.size = size
        this.color = color
        this.speed = 0
    }

  public setType(type: FanType) {
    this.type = type 
  }  

  public getType () {
    return this.type 
  }

  public setSize(size: FanSize) {
    this.size = size 
  }  

  public getSize () {
    return this.size  
  }

  public setColor(color: FanColor) {
    this.color = color
  }  

  public getColor () {
    return this.color  
  }

    public setSpeed(speed: FanSpeed) {
    this.speed = speed 
  }  

  public getSpeed () {
    return this.speed

  }

}

const fan1 = new fan( 0,"medium", "Pedestal", "Gray" )

fan1.setType ("Tower")
fan1.setSize ("large")
fan1.setColor ("black")
fan1.setSpeed (3)

console.log (fan1.type)
console.log (fan1.size)
console.log (fan1.color)
console.log (fan1.speed)


