/* 
El objetivo es crear una clase Airport que modele las caractirísticas y operaciones de un aeropuerto de forma más avanzada. 
Cada aeropuerto tiene: 

un nombre 
una ubicacion
una pista de aterrizaje (runway)
un nivel de trafico aereo (bajo, medio, alto)

La clase debe incluir: 
Un metodo changeTrafficLevel que permita cambiar el nivel de trafico aereo. 
Un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto. 
Un metodo displayInfo que muestre el nombre del aeropuerto, la Ubicacion, y el estado actual de la pista y 
el nivel de trafico.

crea una instancia de la clase Aiport y demuestra el usu de metodos con distintas operaciones.

*/

class Airport {
    private name: string;
    private location: string; 
    private runwayOpen: boolean; 
    private trafficLevel: "Bajo"|"Medio"|"Alto";

    constructor (name: string, location: string) {
        this.name = name; 
        this.location = location;
        this.runwayOpen = true;
        this.trafficLevel = "Bajo";
    }

public changeTrafficLevel (newLevel: "Bajo" | "Medio" | "Alto"): void {
    this.trafficLevel = newLevel; 
    console.log (`El nivel de tráfico ha sido cambiado a ${newLevel}`)
}

public emergencyLanding (): void {
    this.runwayOpen = false
    this.trafficLevel = "Alto"
    console.log ('¡Emergencia! Pista cerrada y tráfico aéreo establecido a ALTO.')
 }
 
 public displayInfo (): void {
    console.log('=== Información del Aeropuerto ===');
    console.log(`Nombre: ${this.name}`);
    console.log(`Ubicación: ${this.location}`);
    console.log(`Pista: ${this.runwayOpen ? 'Abierta' : 'Cerrada'}`);
    console.log(`Nivel de tráfico: ${this.trafficLevel.toUpperCase()}`);
    console.log('=================================');

 }
 
}

const myAirport = new Airport ("Juan Santa María", "San José" )
console.log (myAirport)
console.log ("Ha cambiado el trafico a medio");
myAirport.changeTrafficLevel("Medio");
myAirport.displayInfo();