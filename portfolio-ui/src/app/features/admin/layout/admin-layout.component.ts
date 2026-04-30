import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    standalone: true,
    imports: [RouterOutlet, RouterLink]
})
export class AdminLayoutComponent {
    logout() {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    }
}