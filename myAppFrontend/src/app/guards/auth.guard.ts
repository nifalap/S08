// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard: Checking token...');
    const token = this.authService.getToken();
    console.log('AuthGuard: Token found:', !!token);

    if (token) {
      return true;
    }

    console.log('AuthGuard: No token found, redirecting to login');
    this.router.navigate(['/login']);
    return false;
  }
}
