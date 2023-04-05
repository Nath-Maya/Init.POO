export class cuentaCorriente {
  cliente;
  numeroCuenta;
  agencia;
  #saldoCuenta; // Atributo privado se inicializa con # dentro de la clase.

  //inicio un constructor
  constructor() {
    this.cliente = null;
    this.numeroCuenta = "";
    this.agencia = "";
    this.#saldoCuenta = 0;
  }

  //El metodo siempre va dentro de la class eligiendo las propiedades.
  depositoCuenta(valor) {
    if (valor > 0)
      //solo recibe depositos positivos.
      this.#saldoCuenta += valor;
    return this.#saldoCuenta;
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldoCuenta)
      //no permite que la cuenta quede con saldo negativo.
      this.#saldoCuenta = this.#saldoCuenta - valor;
  }

  verSaldo() {
    return this.#saldoCuenta;
  }

  // Transferir , necesito el valor y la cuenta a donde hare la transferencia. 
  transferirCuenta(valor,cuentaDestino) {
   this.retirarDeCuenta(valor); //retiro de una cuenta
   cuentaDestino.depositoCuenta(valor); //le indico que en la cuenta destino hare un metodo de desposito de cuenta.

}
}
