import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ctrlBtnRegister: boolean = true
  constructor(private router: Router){
    this.ctrlBtnRegister = this.router.isActive('register', true);
  }

}
