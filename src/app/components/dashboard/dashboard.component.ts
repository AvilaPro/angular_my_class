import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Owner } from "../../interfaces/owner";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @Input() nombrePropietario: any= {
    nombre: '',
    telefono: '',
    mascotas: []
  }

  @Output() cambiarNombreDesdeDashboard = new EventEmitter<string>();

  metodoCambiarNombre(){
    this.cambiarNombreDesdeDashboard.emit(this.nombrePropietario.nombre);
  }

}
