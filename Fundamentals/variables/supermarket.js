/*
Voy al supermercado GreenCenter para hacer mis compras habituales y 
planeo comprar manzanas y naranjas. 
Cuando estoy allí, veo que no hay plátanos ni uvas, asi que cambio un poco mi lista. 
Veo que 3 cajeros están trabajando, así que me prepraro para pagar.
Mis cosas cuestan 100 dólares en total. 
Entrego $150 en efectivo y recibo $50 de cambio.
*/  


const supermarketName = "GreenCenter";

const product1 = "manzanas";
const product2 = "naranjas";

const areBananasAvailable = false;
const areGrapesAvailable = false;

const numberOfActiveCashiers = 3;

const cashInWalletDollars = 150;
const totalCost = 100;
const changeDollars = cashInWalletDollars - totalCost; 

console.log(`
    Supermarket: ${supermarketName} \n
    Products: ${product1}, ${product2} \n
    Bananas available: ${areBananasAvailable} \n
    Grapes available: ${areGrapesAvailable} \n
    Cashiers: ${numberOfActiveCashiers} \n
    Total cost: $${totalCost} \n
    Cash: $${cashInWalletDollars} \n
    Change: $${changeDollars} \n 
`)