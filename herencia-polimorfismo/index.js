//*Importación de clases
import {Cliente} from './Cliente.js'
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaNomina} from './Cuentas/CuentaNomina.js';
import {Cuenta} from './Cuentas/Cuentas.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const cliente = new Cliente('Leonardo','13804050','123224');


const cliente2 = new Cliente('María','16979808','8989');

//*Gestion empleados

const empleado = new Empleado('Juan','1144166551',15000);

//Asignar clave al empleado
empleado.asignarClave("12345");
//Verificando clave asignada
console.log(SistemaAutenticacion.login(empleado,"12345"));

//Creo usuario gerente
const gerente = new Gerente('Manuel','1144185256',15000);
//Asigno clave
gerente.asignarClave('rocky123');
//Verifico clave
console.log(SistemaAutenticacion.login(gerente,'rocky123'));

const director = new Director('Carla','1155166223',15000);


// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());






