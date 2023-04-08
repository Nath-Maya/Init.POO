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




//*Movimientos en la cuenta
 cuentaDeNathalia.depositoCuenta(350);
 cuentaDeNathalia.retirarDeCuenta(200);
 

 //*Reflejar el saldo
 let saldoCuenta = cuentaDeNathalia.verSaldo();
 console.log('El saldo actual (cuentaNathalia) ' + saldoCuenta);


//?Creo un nuevo cliente
 const cliente2 = new Cliente();
 cliente2.nombreCliente = 'Andrea';
 cliente2.dniCliente = '1144167825';
 cliente2.rutCliente = 'P1144167825';

//?Creo una cuenta destino
 const cuentaAndrea = new cuentaCorriente();
cuentaAndrea.numeroCuenta = '2';
cuentaAndrea.agencia = '002';
cuentaAndrea.setCliente = cliente2;


// //* Movimientos en cuenta

// cuentaDeNathalia.transferirCuenta(100,cuentaAndrea);

// const saldoAndrea = cuentaAndrea.verSaldo();
// console.log('El saldo actual (cuentaAndrea) ' + saldoAndrea);

// const saldoNathalia = cuentaDeNathalia.verSaldo();
// console.log("El saldo actual (cuentaNathalia) "+ saldoNathalia);

console.log(cuentaAndrea.cliente);

cuentaAndrea.cliente = 0;

console.log(cuentaAndrea.cliente);

let parametroValor = 100;