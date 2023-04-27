//*Importación de clases

import {Cliente} from './Cliente.js'
import {Cuenta} from './Cuentas.js'

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001',0);
const cuentaDeMaria = new Cuenta(cliente2,'2','002',0);

const CuentaAhorroLeonardo = new Cuenta('Leonardo','13804050','123224',0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(30);
console.log(cuentaDeLeonardo.verSaldo());




