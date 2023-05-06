export class SistemaAutenticacion {
   static login(empleado,clave) {
      return empleado.clave == clave;
   }

}