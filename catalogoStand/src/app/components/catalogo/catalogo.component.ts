import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: Math.round(Math.random()*200),
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: Math.round(Math.random()*200),
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: Math.round(Math.random()*200),
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    },
    {
      id: 5,
      nombre: 'Producto 5',
      precio: Math.round(Math.random()*200),
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    },
    {
      id: 6,
      nombre: 'Producto 6',
      precio: Math.round(Math.random()*200),
      descripcion: 'Id id laboris nulla mollit incididunt id ad amet tempor nulla deserunt aute duis tempor.',
      img: `https://picsum.photos/id/${Math.round(Math.random()*400)}/100/100`
    }
  ]

}
