import { Router } from '@angular/router';

export abstract class BaseComponent {
  constructor(protected router: Router) {}

  redirectTo(route: string, params?: any) {
    if (params) {
      this.router.navigate([route], { queryParams: params });
    } else {
      this.router.navigate([route]);
    }
  }
}