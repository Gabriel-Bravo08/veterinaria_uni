import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent {
  constructor(router: Router) {
    super(router);
  }

  formCita() {
    this.redirectTo('/formulario-cita');
  }
}
