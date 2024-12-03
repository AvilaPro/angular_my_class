import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router:Router){}

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

  openComponent(path: string){
    this.router.navigate([path]);
  }

}
