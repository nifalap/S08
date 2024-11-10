import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Store the token in localStorage
        this.authService.storeToken(response.token);

        // Log the token to verify successful login
        console.log('Login successful, token received:', response.token);

        // Redirect to the dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
