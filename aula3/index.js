//!Importacion de Clases

import {cuentaCorriente} from './cuentaCorriente.js';

const cuentaDeNathalia = new cuentaCorriente();
 

 cuentaDeNathalia.depositoCuenta(250);
 
 let saldoCuenta = cuentaDeNathalia.verSaldo();
//  cuentaDeNathalia.retirarDeCuenta(50);
 console.log('El saldo actual es ' + saldoCuenta);