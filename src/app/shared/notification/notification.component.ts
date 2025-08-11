import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  message: string | null = null;
  type: 'success' | 'error' = 'success';
  timeoutId: any;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.message$.subscribe(({ text, type }) => {
      this.message = text;
      this.type = type;

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.message = null;
      }, 3000);
    });
  }
}
