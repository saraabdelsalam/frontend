import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false, 
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register(event: Event) {
    event.preventDefault();
    try {
      await this.authService.register(this.email, this.password);
      alert('Registration successful! You can now log in.');
      this.router.navigate(['/login']);
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  }
}
