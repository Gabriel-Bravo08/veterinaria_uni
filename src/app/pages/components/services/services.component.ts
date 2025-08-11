import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ConsultaGeneralComponent } from '../consulta-general/consulta-general.component';
import { VacunacionComponent } from '../vacunacion/vacunacion.component';
import { CirugiasComponent } from '../cirugias/cirugias.component';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    ConsultaGeneralComponent,
    VacunacionComponent,
    CirugiasComponent,
  ],
  templateUrl: './services.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  servicioSeleccionado: string | null = null;

  seleccionarServicio(servicio: string) {
    if (this.servicioSeleccionado === servicio) {
      this.servicioSeleccionado = null;
    } else {
      this.servicioSeleccionado = servicio;
    }
  }
}
