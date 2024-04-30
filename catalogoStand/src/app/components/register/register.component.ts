import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = new FormBuilder();
  registerForm: any;

  constructor() {
    this.registerForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-z ]*')]],
      phone: '',
      email: '',
      password: '',
      preferencias: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  // registerForm = new FormGroup({
  //   name: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  get name() {
    return this.registerForm.get('name');
  }

  get preferencias() {
    return this.registerForm.get('preferencias') as FormArray;
  }

  addPreference() {
    this.preferencias.push(this.fb.control(''));
  }

  // deletePreference(){
  //   this.preferencias.pop()
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerForm.value);
  }

}
