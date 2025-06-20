import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-goals',
  imports: [CommonModule, RouterModule],
  templateUrl: './public-goals.html',
  styleUrl: './public-goals.scss'
})
export class PublicGoalsComponent implements OnInit {
  publicGoals: any[] = [];

  constructor(private goalService: GoalService) {}

  async ngOnInit() {
    const res = await this.goalService.getPublicGoals();
    this.publicGoals = res.data;
  }
}