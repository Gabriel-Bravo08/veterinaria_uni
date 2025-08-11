import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public messageSource = new Subject<{ text: string; type: 'success' | 'error' }>();
  public message$ = this.messageSource.asObservable();

  showSuccess(message: string) {
    this.messageSource.next({ text: message, type: 'success' });
  }

  showError(message: string) {
    this.messageSource.next({ text: message, type: 'error' });
  }
}
