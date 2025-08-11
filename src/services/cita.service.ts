import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private readonly STORAGE_KEY = 'citas';

  constructor(private notificationService: NotificationService) {}

  getCitas(): Cita[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  guardarCita(cita: Cita) {
    const citas = this.getCitas();
    citas.push(cita);
    this.saveAll(citas);
    this.notificationService.showSuccess('Cita creada correctamente');
  }

  actualizarCita(cita: Cita) {
    const citas = this.getCitas().map((c) => (c.id === cita.id ? cita : c));
    this.saveAll(citas);
    this.notificationService.showSuccess('Cita actualizada correctamente');
  }

  eliminarCita(id: string) {
    const citas = this.getCitas().filter((c) => c.id !== id);
    this.saveAll(citas);
    this.notificationService.showError('Cita eliminada correctamente');
  }

  private saveAll(citas: Cita[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(citas));
  }
}
