//?Crear Clases

//confirguran las propiedades del objeto, clase o molde.
class Cliente {
 nombreCliente;
 dniCliente;
 numeroCuenta;
 saldoCuenta;
}

const cliente1 = new Cliente(); //asignando un molde

cliente1.nombreCliente = "Nathalia";
cliente1.dniCliente = "1.144.166.551"
cliente1.numeroCuenta = "32656232";
cliente1.saldoCuenta = "$521368";

const cliente2 = new Cliente(); 

cliente2.nombreCliente = "Andrea";
cliente2.dniCliente = "1.144.567.259"
cliente2.numeroCuenta = "85456341";
cliente2.saldoCuenta = "$0";

console.log(cliente1,cliente2);



