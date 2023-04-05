//*Definicion de clases

class cliente {
   nombreCliente;
   dniCliente;
   edad;
 }
 
 class cuentaCorriente {
   numeroCuenta;
   #saldoCuenta;  // Atributo privado se inicializa con # dentro de la clase. 
 
   //inicio un constructor
   constructor() {
     this.#saldoCuenta = 0;
     this.numeroCuenta = "";
   }
 
 
   //El metodo siempre va dentro de la class eligiendo las propiedades.
   depositoCuenta(valor) {
     if (valor > 0) //solo recibe depositos positivos.
     this.#saldoCuenta += valor;
     return this.#saldoCuenta;
   }
 
   retirarDeCuenta(valor) {
     if (valor <= this.#saldoCuenta) //no permite que la cuenta quede con saldo negativo. 
     this.#saldoCuenta = this.#saldoCuenta - valor;
   }

   verSaldo() {
    return this.#saldoCuenta;
  }

 }
 
 cuentaDeNathalia = new cuentaCorriente();
 
let saldoCuenta = cuentaDeNathalia.verSaldo();
console.log('El saldo actual es ' + saldoCuenta);
 cuentaDeNathalia.depositoCuenta(100)

 cuentaDeNathalia.retirarDeCuenta(100)
