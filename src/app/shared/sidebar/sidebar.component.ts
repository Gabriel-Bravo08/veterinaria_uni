import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title = '';
  @Input() width = '300px';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'right';
  @Input() showFooter = false;

  closeSidebar() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
