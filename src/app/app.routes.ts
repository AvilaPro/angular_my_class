import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    //login
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'full'
    },
    //ruta por defecto a login
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
];
