import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../../services/goal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-goal.component.html'
})
export class PublicGoalComponent implements OnInit {
  goal: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'No goal ID provided.';
      this.loading = false;
      return;
    }
    try {
      const res = await this.goalService.getPublicGoal(id);
      this.goal = res.data;
    } catch (err) {
      this.error = 'Failed to load public goal.';
    } finally {
      this.loading = false;
    }
  }
}