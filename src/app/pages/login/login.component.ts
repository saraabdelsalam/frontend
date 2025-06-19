import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false, 
  templateUrl: './login.component.html' 
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login(event: Event) {
    event.preventDefault();
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/dashboard']); // will create later
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }
}
