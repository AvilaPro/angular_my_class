import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  iniciarSesion(){
    console.log(this.username, this.password);
  }
  sendForm(){
    console.log(this.username, this.password);
  }
  verInfoForm(form: any, input: any){
    console.log(form);
    console.log(input);
  }

}
