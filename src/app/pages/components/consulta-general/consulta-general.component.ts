import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-general',
  imports: [CommonModule],
  templateUrl: './consulta-general.component.html',
  styleUrl: './consulta-general.component.scss'
})
export class ConsultaGeneralComponent implements OnInit {
  ngOnInit() {
    console.log('Componente ConsultaGeneral cargado');
  }
}
