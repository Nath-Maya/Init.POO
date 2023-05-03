import { Cuenta } from "./Cuentas.js";

export class CuentaAhorro extends Cuenta{

    constructor(cliente, numero, agencia,saldo) {
        //Llamar el constructor Padre.
        super(cliente,numero,agencia,saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,3);
    }
}


