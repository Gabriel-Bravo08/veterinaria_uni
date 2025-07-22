import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioCitaComponent } from './pages/components/formulario-cita/formulario-cita.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formulario-cita',
    component: FormularioCitaComponent
  }
];
