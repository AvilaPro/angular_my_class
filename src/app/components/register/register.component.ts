import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, Validators, FormArray, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgFor } from '@angular/common';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, FormsModule, DashboardComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterComponent {

  nombre: string = '';

  constructor(private fb: FormBuilder) {
    console.log(this.mascotas.controls);
  }

  registro = this.fb.group({
    nombre: ['', Validators.required],
    telefono: ['', Validators.required],
    mascotas: this.fb.array([
      this.fb.group({
        nombre: ['', Validators.required],
        especie: ['', Validators.required],
      })
    ])
  })

  get mascotas(){
    return this.registro.get('mascotas') as FormArray;
  }

  cambiarNombreEnRegister(){
    this.nombre = "Nombre en Registro";
  }

  agregarMascota(){
    this.mascotas.push(this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
    }))
  }

  eliminarMascota(){
    this.mascotas.removeAt(this.mascotas.length - 1);
  }

  //Manejador de envio de formulario
  onSubmit(){
    console.log(this.registro.value);
  }
}
