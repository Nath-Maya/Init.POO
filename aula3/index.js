//!Importacion de Clases

import {Cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js';

//? CLIENTE #1
const cliente = new Cliente('Nathalia','1144166551','P1144166551');
const cuentaDeNathalia = new cuentaCorriente(cliente, '1', '001');

//*Movimientos en la cuenta
 cuentaDeNathalia.depositoCuenta(350);
 cuentaDeNathalia.retirarDeCuenta(200);
 

 //*Reflejar el saldo
 let saldoCuenta = cuentaDeNathalia.verSaldo();


//? CLIENTE #2
 const cliente2 = new Cliente('Andrea', '1144167825', 'P1144167825');
 const cuentaAndrea = new cuentaCorriente(cliente, '2','002');


console.log(cuentaCorriente.cantidadCuentas)



