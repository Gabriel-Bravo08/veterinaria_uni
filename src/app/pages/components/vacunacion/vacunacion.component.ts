import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacunacion',
  imports: [CommonModule],
  templateUrl: './vacunacion.component.html',
  styleUrl: './vacunacion.component.scss'
})
export class VacunacionComponent implements OnInit {
  ngOnInit() {
    console.log('Componente Vacunacion cargado');
  }
}
