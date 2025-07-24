/* Crea un programa en JavaScript que calcule la facura total de una persona en un hotel, 
donde cada habitación tiene un precio de $100 la noche, aprovechando una oferta promocional 
que incluye un 5% de descuento. 

El programa debe solicitar al huesped el númnero total de noches que pasó en el hotel 
para calcular la factura final.

Si el usuario ingresa que estuvo 5 noches, la salida será: $475.00

*/

const prompt = require('prompt-sync')();

const PRICE_PER_DAY = 100;
const promoDiscount = 0.05;

const days = parseInt(prompt('¿Cuántas noches pasaste en el hotel? -> '))

const subTotal = days * PRICE_PER_DAY;
const total = subTotal - (subTotal * promoDiscount);

console.log (`
    ------------
    HOTEL BILL
    ------------

    Total Nights Staying: ${days}

    Payment Details:
    Total: $${subTotal}
    Discount: $${subTotal * promoDiscount}
    Total Payment: $${total}
`)