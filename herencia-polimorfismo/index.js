//*Importación de clases
import {Cliente} from './Cliente.js'
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaNomina} from './Cuentas/CuentaNomina.js';
import {Cuenta} from './Cuentas/Cuentas.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);
console.log(cuentaAhorroLeonardo);


const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());
 

