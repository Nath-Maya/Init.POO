//!Importacion de Clases

import {cuentaCorriente} from './cuentaCorriente.js';

const cuentaDeNathalia = new cuentaCorriente();
 

 cuentaDeNathalia.depositoCuenta(350);
 cuentaDeNathalia.retirarDeCuenta(200);
 
 let saldoCuenta = cuentaDeNathalia.verSaldo();
//  cuentaDeNathalia.retirarDeCuenta(50);
 console.log('El saldo actual es el siguiente: ' + saldoCuenta);