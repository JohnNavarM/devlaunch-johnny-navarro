/*
El Elite Center Fitness es un gimnasio boutique ubicado en Palo Alto, California, 
que ofrece membresías por $150 al mes. 
Opera de 6:00 a. m. a 10:00 p. m. Emplea a 10 entrenadores certificados 
y cuenta con comidades como sauna, piscina y clases grupales.
*/  

const gymName = "Elite Center Fitness";

const gymType = "boutique";
const gymLocation = "Palo Alto, California";

const gymMembership = 150;
const currency = "$";
const duration = "mes";

const openingTime = 6  
const closingTime = 22

const numberTrainers = 10;
const amenity1 = "sauna"
const amenity2 = "piscina"
const amenity3 = "clases grupales"

console.log (`
    Gym: ${gymName} ${gymType} \n
    Location: ${gymLocation} \n  
    Price: ${currency}${gymMembership} - ${duration} \n 
    Time: ${openingTime}:00AM - ${closingTime-12}:00PM \n
    Team: ${numberTrainers} certified trainers \n
    Amenities: ${amenity1}, ${amenity2}, ${amenity3} \n   
`)
 