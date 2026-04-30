import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (typeof window === 'undefined' || !window.localStorage) {
            return false;
        }

        const token = localStorage.getItem('token');

        if (!token) {
            this.router.navigate(['/admin/login']);
            return false;
        }

        return true;
    }
}