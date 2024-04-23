import { Component } from '@angular/core';
import { LoginUser } from 'src/app/interfaces/login-user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correo: string = '';

  user: LoginUser = {
    email: '',
    password: ''
  }

  verCorreo(a: any){
    console.log(a);
  }
}
