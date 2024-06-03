import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isSidebarCollapsed = false;
  isOverlayActive = false;

  constructor() {
    this.checkScreenWidth();
  }

  toggleSidebar() {
    if (window.innerWidth <= 1320) {
      this.isOverlayActive = !this.isOverlayActive;
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1320) {
      this.isSidebarCollapsed = true;
    } else {
      this.isSidebarCollapsed = false;
      this.isOverlayActive = false;
    }
  }

}
