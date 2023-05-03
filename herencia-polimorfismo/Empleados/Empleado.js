export class Empleado {
  #nombre;
  #dni;
  #salario;

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
  }

  //Metodo abstracto
  verBonificacion() {
   return this.#salario;
}

  _verBonificacion(bono) {
    return this.#salario + (this.#salario * bono) / 100;
  }
}
