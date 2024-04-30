import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hijo-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hijo-login.component.html',
  styleUrl: './hijo-login.component.scss'
})
export class HijoLoginComponent {
  @Input() correoHijo: string = '';
  @Output() cambiarDatoDesdeHijo = new EventEmitter<string>();

  cambiarDatoPorHijo(){
    this.cambiarDatoDesdeHijo.emit('Eduardo');
  }
}
