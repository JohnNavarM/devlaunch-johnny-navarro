/* Estas diseñando un sistema básico para gestionar cuentas bancarias de clientes. 
Cada cuenta bancaria tendrá un idenficador único, un nombre de titular y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y métodos deben estar definidos 
dentro de la funcion usando this.

Propiedades de la cuenta bancaria: (dentro de la funcion usando this)
id: identificador único de la cuenta (número entero)
holderName: nombre del titular de la cuenta (string)
balance: saldo de la cuenta (número decimal)
Metodos de la cuenta bancaria: (dentro de la funcion usando this)

deposits (amount): incrementa el saldo de la cuenta 
withdraw (amount): decrementa el saldo de la cuenta si hay suficientes fondos
tranfer (toAccount, amount): transfiere una cantidad de dinero a otra cuenta bancaria 
si hay suficientes disponibles. 

*/

function Account (id, holderName, balance =0)  {
   this.id = id  
   this.holderName = holderName
   this.balance = balance

    this.deposit = (amount) => {
      this.balance += amount 
    }

    this.withdraw = (amount) => { 
      if (this.balance >= amount) {  
        this.balance -= amount
        return amount
      }
        return null
 }
  this.tranfer = (toAccount, amount) => { 
const money =this.withdraw(amount);
if (money) {
toAccount.deposit(money);
console.log ("Deposito realizado con éxito")
 }
else {
console.log ("Fondos insuficientes, intenté otra transacción")
}
return this
}
    }

 const acc1 = new Account (1, "Johnny", 10000)

 const acc2 = new Account (2, "Luis", 100)

 acc1.tranfer (acc2,5000)

 console.log(acc1)
 console.log(acc2)




