import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginUser } from '../../interfaces/login-user';
import { HeaderComponent } from '../../header/header.component';
import { HijoLoginComponent } from '../hijo-login/hijo-login.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent, HijoLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: LoginUser = {
    email: '',
    password: ''
  }

  constructor() {
  }

}
