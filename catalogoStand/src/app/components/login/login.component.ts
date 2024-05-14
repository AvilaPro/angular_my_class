import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginUser } from '../../interfaces/login-user';
import { HeaderComponent } from '../../header/header.component';
import { HijoLoginComponent } from '../hijo-login/hijo-login.component';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent, HijoLoginComponent],
  providers: [UsersService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginUser: LoginUser = {
    username: '',
    password: ''
  }
  user: any

  constructor(private users: UsersService, private route: Router) {
  }

  validarUsuario() {
    this.user = this.users.getUser();
    console.log(this.user);
    for (let i = 0; i < this.user.length; i++) {
      if (this.loginUser.username == this.user[i].username) {
        console.log("usuario correcto, falta validar la clave");
        if (parseInt(this.loginUser.password) == this.user[i].id) {
          console.log('Usuario correcto y clave correcta');
          this.route.navigate(['/catalogo']);
        }
      }
    }
  }



}
