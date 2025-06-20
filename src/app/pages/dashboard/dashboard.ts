import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AuthService } from '../../services/auth.service';
import { GoalService } from '../../services/goal';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Assuming it is standalone
  templateUrl: './dashboard.html',
  imports: [FormsModule, CommonModule], // ✅ Add FormsModule here
})
export class DashboardComponent implements OnInit {
  goals: any[] = [];
  newGoal = {
    title: '',
    description: '',
    parentId: '',
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
        parentId: '',
        isPublic: false,
       deadline: new Date().toISOString().split('T')[0],
      };
      await this.loadGoals();
    } catch (err) {
      console.error('Failed to create goal:', err);
    }
    
  }
  startSubGoal(parentId: string) {
    // ✅ this will now work
    this.newGoal = {
      title: '',
      description: '',
      parentId: parentId, // <- this sets the link to parent
      isPublic: false,
      deadline: new Date().toISOString().split('T')[0]
    };

    // Optional UX improvement
    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
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
editingGoal: any = null;

editGoal(goal: any) {
  this.editingGoal = { ...goal }; // Clone to avoid direct binding
}

cancelEdit() {
  this.editingGoal = null;
}

async updateGoal(event: Event): Promise<void> {
  event.preventDefault();
  try {
    await this.goalService.update(this.editingGoal.id, this.editingGoal);
    this.editingGoal = null;
    await this.loadGoals();
  } catch (err) {
    console.error('Failed to update goal:', err);
  }
}
}
