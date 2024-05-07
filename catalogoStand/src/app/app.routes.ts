import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: '',
    redirectTo: '/catalogo',
    pathMatch: 'full'
  }
];
