/*
Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados,
está desarrollando un sistema de seguimiento en los salarios que busca mantener registros
precisos de las remunaraciones de los empleados, incluyendo actualizaciones y modificaciones salariales

Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos en un sistema 
de clases. Este enfoque proporciona una estrucutura clara y organizada para manejar las operaciones relacionadas
con los salarios, asegurando la modularidad y la mantenibilidad del código. 

Para implementar esto, crearemos una clase Employee con una variable principal llamada _salary,
que servirá como la base para el calculo de los salarios en el sistema.

Esta clase inluirá dos metodos clave: un "getter" para recuperar el salario actual y un "setter" para modifircarlo. Es importante que 
el setter valide que el nuevo valor del salario sea positivo ya que no se permiten salarios negativos. 

Adicionalmente, se incluirá un metodo giveRaise para aumentar el slario en una cantidad especifica. 

*/

class Employee {
   
   constructor( 
    public _firstName: string,
    public _lastName: string,
    private _salary: number
   ) {
    this._firstName = _firstName
    this._lastName = _lastName
    this._salary = _salary
   }
set salary(salary:number) {  
   if (salary > 0) {
    this._salary= salary
    }
 } 

get salary () {

    return this._salary
}

   }
   
  const e1 = new Employee( "Johnny", "Navarro", 150000) 
  console.log(e1.salary)
