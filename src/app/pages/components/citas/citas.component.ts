import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../../../services/cita.service';
import { Cita } from '../../../../models/cita.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-citas',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent implements OnInit{
  citaForm: FormGroup;
  citas: any[] = [];
  editando: boolean = false;
  citaEnEdicionId: string | null = null;

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      mascota: [''],
      propietario: [''],
      telefono: [''],
      fecha: [''],
      hora: [''],
      sintomas: [''],
      archivo: ['']
    });
  }

  ngOnInit() {
    this.cargarCitas();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.citaForm.patchValue({ archivo: reader.result as string });
      };
    }
  }

  async onSubmit() {
    const formValue = this.citaForm.value;

    const archivoBase64 = formValue.archivo || '';
    const cita: Cita = {
      ...formValue,
      id: this.citaEnEdicionId ?? uuidv4(),
      archivo: archivoBase64,
    };

    if (this.editando) {
      this.citaService.actualizarCita(cita);
      this.editando = false;
      this.citaEnEdicionId = null;
    } else {
      this.citaService.guardarCita(cita);
    }

    this.citaForm.reset();
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = this.citaService.getCitas();
  }

  editarCita(cita: Cita) {
    this.editando = true;
    this.citaEnEdicionId = cita.id;
    this.citaForm.patchValue({ ...cita, archivo: null });
  }

  eliminarCita(id: string) {
    this.citaService.eliminarCita(id);
    this.cargarCitas();
  }

  async convertirArchivoBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}
