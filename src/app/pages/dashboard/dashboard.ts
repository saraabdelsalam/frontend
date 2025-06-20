import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GoalService } from '../../services/goal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  goals: any[] = [];
  newGoal = {
    title: '',
    description: '',
    parentId: null,
    isPublic: false,
    deadline: '' // <-- Add this line
  };

  constructor(
    private auth: AuthService,
    private goalService: GoalService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    await this.loadGoals();
  }

  async loadGoals(): Promise<void> {
    try {
      const res = await this.goalService.getAll();
      this.goals = res.data;
    } catch (err) {
      console.error('Failed to load goals:', err);
    }
  }

  async addGoal(event: Event): Promise<void> {
    event.preventDefault();
    try {
      await this.goalService.create(this.newGoal);
      this.newGoal = {
        title: '',
        description: '',
        parentId: null,
        isPublic: false,
       deadline: new Date().toISOString().split('T')[0],
      };
      await this.loadGoals();
    } catch (err) {
      console.error('Failed to create goal:', err);
    }
  }

  async deleteGoal(id: string): Promise<void> {
    if (confirm('Are you sure you want to delete this goal?')) {
      try {
        await this.goalService.delete(id);
        await this.loadGoals();
      } catch (err) {
        console.error('Failed to delete goal:', err);
      }
    }
  }
  
  getChildren(parentId: string): any[] {
  return this.goals.filter(goal => goal.parentId === parentId);
}

}
