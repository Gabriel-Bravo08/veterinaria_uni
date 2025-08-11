import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { NotificationComponent } from "./shared/notification/notification.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    SpinnerComponent,
    NotificationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'veterinaria';
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.show();

    setTimeout(() => {
      this.loadingService.hide();
    }, 2000);
  }
}
