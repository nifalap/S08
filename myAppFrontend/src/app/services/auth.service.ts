import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  // Login function
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Store the token in local storage
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Get the token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Clear the token (for logout)
  clearToken(): void {
    localStorage.removeItem('token');
  }
}
