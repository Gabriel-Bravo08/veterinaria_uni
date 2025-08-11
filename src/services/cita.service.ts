import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private readonly STORAGE_KEY = 'citas';

  getCitas(): Cita[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  guardarCita(cita: Cita) {
    const citas = this.getCitas();
    citas.push(cita);
    this.saveAll(citas);
  }

  actualizarCita(cita: Cita) {
    const citas = this.getCitas().map((c) => (c.id === cita.id ? cita : c));
    this.saveAll(citas);
  }

  eliminarCita(id: string) {
    const citas = this.getCitas().filter((c) => c.id !== id);
    this.saveAll(citas);
  }

  private saveAll(citas: Cita[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(citas));
  }
}
