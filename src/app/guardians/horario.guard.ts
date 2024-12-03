import { CanActivateFn } from '@angular/router';

export const horarioGuard: CanActivateFn = (route, state) => {
  //variable para guardar la hora actual
  let horaActual = new Date().getHours();
  // variable para guardar los minutos de la hora actual
  let minutosActual = new Date().getMinutes();
  //condicional para determinar accesos dependiendo de la hora
  if ((horaActual >= 8 && horaActual <= 21)) {
    //si la hora es correcta, redirige a la ruta deseada
    return true
    } else {
    //si la hora no es correcta, redirige a la ruta de inicio
    alert("Ya paso la hora de acceso");
    console.log("fuera de hora");
    return false
    }
};
