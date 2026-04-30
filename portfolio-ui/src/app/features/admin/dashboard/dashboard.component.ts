import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="admin-title">Dashboard</h2>
    <div class="admin-form" style="align-items: center; justify-content: center; min-height: 200px;">
        <h3 style="font-size: 24px; color: var(--accent); margin-bottom: 16px;">Welcome to the Portfolio Admin!</h3>
        <p style="color: var(--text-muted); text-align: center; max-width: 500px; line-height: 1.6;">
            Manage your content effectively using the sidebar navigation. You can update your 'About Me' info, add new projects, list skills, and showcase your experience dynamically.
        </p>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
}
