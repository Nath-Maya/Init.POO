import { Cliente } from "../Cliente.js";
import { Cuenta } from "./Cuentas.js";

//!HERENCIA

export class CuentaCorriente extends Cuenta {
    //exporte la clase Cuenta corriente que extiende de la clase Cuenta, es decir que, cuentaCorriente es hija de Cuenta.  
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        //Llamar el constructor Padre.
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5);
    }

}