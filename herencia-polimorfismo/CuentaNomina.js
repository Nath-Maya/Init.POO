import { Cuenta } from './Cuentas.js';

export class CuentaNomina extends Cuenta {
   constructor(cliente, numero, agencia, saldo){
      super(cliente, numero, agencia, saldo);
   }

   retirarDeCuenta(valor) {
      //Metodo abstracto
      super._retirarDeCuenta(valor,1);
   }
}