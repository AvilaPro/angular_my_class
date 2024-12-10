import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { ProductsComponent } from './components/products/products.component';
import { horarioGuard } from './guardians/horario.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    //login
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'full'
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
      canActivate: [horarioGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    //ruta por defecto a login
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
];
