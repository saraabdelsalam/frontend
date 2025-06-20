import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private api = `${environment.apiUrl}/goals`;

  private get token() {
    return localStorage.getItem('token');
  }

  private get headers() {
    return { headers: { Authorization: `Bearer ${this.token}` } };
  }

  getAll() {
    return axios.get(this.api, this.headers);
  }

 create(goal: any) {
  return axios.post(this.api, {
    ...goal,
    deadline: goal.deadline ? new Date(goal.deadline).toISOString().split('T')[0] : undefined,
    isPublic: goal.isPublic ?? false
  }, this.headers);
}

  update(id: string, goal: any) {
    return axios.put(`${this.api}/${id}`, goal, this.headers);
  }

  delete(id: string) {
    return axios.delete(`${this.api}/${id}`, this.headers);
  }

getPublicGoals() {
  return axios.get(`${environment.apiUrl}/public-goals`);
}

getPublicGoal(Id: string) {
  return axios.get(`${environment.apiUrl}/public-goals/${Id}`);
}

}
