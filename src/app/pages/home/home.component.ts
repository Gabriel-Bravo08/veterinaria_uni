import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { CitasComponent } from '../components/citas/citas.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SidebarComponent, CitasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sidebarVisible = false;
}
