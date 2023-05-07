export class Empleado {
  #nombre;
  #dni;
  #salario;
  #clave;

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = "";
  }

  //Gestion de la clave de usuario
  asignarClave(clave) {
    this.#clave = clave;
  }

  autenticable (clave) {
    return clave == this.#clave;
  }
  //Metodo abstracto
  verBonificacion() {
   return this.#salario;
}

  _verBonificacion(bono) {
    return this.#salario + this.#salario*bono/100;
  }
}
