//!Importacion de Clases

import {Cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js';


const cliente = new Cliente();
cliente.nombreCliente = 'Nathalia';
cliente.dniCliente = '1144166551';
cliente.rutCliente = 'P1144166551';

const cuentaDeNathalia = new cuentaCorriente();
cuentaDeNathalia.numeroCuenta = '1';
cuentaDeNathalia.agencia = '001';
cuentaDeNathalia.cliente = cliente;

console.log(cuentaDeNathalia);

 cuentaDeNathalia.depositoCuenta(350);
 cuentaDeNathalia.retirarDeCuenta(200);
 
 let saldoCuenta = cuentaDeNathalia.verSaldo();
 console.log('El saldo actual es el siguiente: ' + saldoCuenta);