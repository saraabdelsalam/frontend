import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = environment.apiUrl;

  async login(email: string, password: string) {
    const res = await axios.post(`${this.api}/auth/login`, { email, password });
    localStorage.setItem('token', res.data.access_token);
  }

  async register(email: string, password: string) {
    await axios.post(`${this.api}/auth/register`, { email, password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  get token() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }
}
