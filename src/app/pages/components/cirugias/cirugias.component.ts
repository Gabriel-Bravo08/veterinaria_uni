import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cirugias',
  imports: [CommonModule],
  templateUrl: './cirugias.component.html',
  styleUrl: './cirugias.component.scss'
})
export class CirugiasComponent implements OnInit {
  ngOnInit() {
    console.log('Componente Cirugias cargado');
  }
}
