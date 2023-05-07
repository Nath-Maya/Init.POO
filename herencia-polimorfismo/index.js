//*Importación de clases
import { Cliente } from './Cliente.js'
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Cuenta } from './Cuentas/Cuentas.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//* Cliente
const cliente = new Cliente('Leonardo','13804050','123224');


//*Gestion empleados

//? Empleado
const empleado = new Empleado('Juan','1144166551',15000);

//? Gerente
const gerente = new Gerente('Manuel','1144185256',15000);

//? Director
const director = new Director('Carla','1155166223',15000);

//!Asignar claves
//Cliente
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'01112'));
//Gerente
gerente.asignarClave('rocky123');
console.log(SistemaAutenticacion.login(gerente,'rocky123'));
//Empleado
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado,"12345"));

//!Bonificaciones
console.log('Salario + bonificacion empleado ' + empleado.verBonificacion());
console.log('Salario + bonificacion gerente ' + gerente.verBonificacion());
console.log('Salario + bonificacion director ' + director.verBonificacion());






