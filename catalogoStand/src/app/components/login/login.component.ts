import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginUser } from '../../interfaces/login-user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
