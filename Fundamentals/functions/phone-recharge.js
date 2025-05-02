/* El proveedor principal de servicios de telefonía en la ciudad está introduciendo una oferta 
promocional basada tanto en el monto de recarga realizado por sus clientes como en la duranción de
su suscripción con la compañía. Para ser elegible para la promción los clientes deben recargar un 
mínimo de $20 y un máximo de $80 y haber estado suscritos al menos un año.

En la promoción SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga
es inferior a $38 y han estado afiliados al servicio por tres años o más. 

¨Por otro lado, la promoción MegaRecharge está dirigida a los clientes que han estado suscritos
por más de tres años, ofreciendoles un monto de recarga triplicado indenpendientemente del monto de recarga.

Tu tarea es desarrollar un programa que tome como entrada el nombr del cliente, el monto de la recarga,
y la duración de su suscripción y determinar si la promoción les aplica y calcule el monto total de recarga incluyendo
la promoción.

*/

const prompt = require('prompt-sync')();

const MIN_MONTHS_DURATION = 12
const MIN_RECHARGE = 20
const MAX_RECHARGE = 80

const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3

const MAX_RECHARGE_SUPER_SAVER = 38 
const SUPER_SAVER_PROMO_MULTIPLIER = 2
const SUPER_SAVER_MIN_DURATION = 36


function calculateRecharge (rechargeAmount,contractDuration ) {

  if (contractDuration < MIN_MONTHS_DURATION) return rechargeAmount


  let multiplier = 1

  if (rechargeAmount < MIN_RECHARGE) {
    if (contractDuration >= MEGA_PROMO_MIN_DURATION) 
    multiplier = MEGA_PROMO_MULTIPLIER
  } else if (
    rechargeAmount <= MAX_RECHARGE_SUPER_SAVER && 
    rechargeAmount >= MIN_RECHARGE &&
    contractDuration >= MIN_MONTHS_DURATION && 
    contractDuration <= SUPER_SAVER_MIN_DURATION ) {

    multiplier = SUPER_SAVER_PROMO_MULTIPLIER 

  }

  return rechargeAmount * multiplier


}

function main () { 
  const customerName = prompt('Client Name: ')
  const rechargeAmount = parseInt(prompt('Amount $: '))
  const contractDuration  = parseInt(prompt('Duration (Months): '))

  const recharge = calculateRecharge (rechargeAmount, contractDuration)
  const promo = recharge - rechargeAmount 

  console.log (`
    Thanks for your purchase, ${customerName}
    Your recharge amount is: $${rechargeAmount} 
    PROMO: $${promo}`)
}


main()

