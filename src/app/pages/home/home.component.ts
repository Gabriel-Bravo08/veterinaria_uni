import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { CitasComponent } from '../components/citas/citas.component';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";
import { ServicesComponent } from "../components/services/services.component";

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule,
    SidebarComponent,
    CitasComponent,
    CarruselComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sidebarVisible = false;

  contactVisible = false;

  toggleContact() {
    this.contactVisible = !this.contactVisible;
  }

  scrollToNextSection() {
    const nextSection = document.getElementById('servicios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
