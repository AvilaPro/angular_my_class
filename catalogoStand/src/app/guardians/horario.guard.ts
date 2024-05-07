import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const horarioGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    let router = new Router
    let horaActual = new Date().getHours();
    console.log(horaActual);
    if(horaActual > 16){
      router.navigate(['/login']);
      console.log("solo puedes acceder hasta antes de las 4 de la tarde (16:00 hrs)- hora militar");
      return false;
    }else{
      return true;
    }
};
