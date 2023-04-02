//confirguran las propiedades del objeto, clase o molde.
class cliente {
  nombreCliente;
  dniCliente;
  edad;
}

class cuentaCorriente {
  numeroCuenta;
  saldoCuenta;
  //El metodo siempre va dentro de la class eligiendo las propiedades.
  depositoCuenta(valor) {
    this.saldoCuenta += valor;
  }
}

//! Cliente 1

const cliente1 = new cliente(); //asignando un molde

cliente1.nombreCliente = "Nathalia";
cliente1.dniCliente = "1.144.166.551";
cliente1.edad = "30";

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numeroCuenta = "32656232";
cuentaCorriente1.saldoCuenta = 521368;

//! Cliente 2

const cliente2 = new cliente();
cliente2.nombreCliente = "Andrea";
cliente2.dniCliente = "1.144.567.259";
cliente2.edad = "31";

const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numeroCuenta = "85456341";
cuentaCorriente2.saldoCuenta = 200;

console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoCuenta(100);
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoCuenta(300);
console.log(cuentaCorriente2.saldoCuenta);