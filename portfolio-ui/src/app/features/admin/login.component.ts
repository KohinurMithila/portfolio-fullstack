import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule]
})
export class LoginComponent {

    email = '';
    password = '';

    constructor(private auth: AuthService) { }

    login() {
        this.auth.login({
            email: this.email,
            password: this.password
        }).subscribe((res: any) => {
            this.auth.saveToken(res.token);
            window.location.href = '/admin/dashboard';
        });
    }
}