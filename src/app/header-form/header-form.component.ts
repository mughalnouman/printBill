import { Component } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrl: './header-form.component.css',
})
export class HeaderFormComponent {
  showForm = false; // Corrected variable name

  toggleForm(): void {
    this.showForm = !this.showForm; // Corrected variable name
  }
}
