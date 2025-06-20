import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { PublicGoalsComponent } from './pages/public-goals/public-goals';
import { PublicGoalComponent } from './pages/public-goal/public-goal.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'public/:Id', component: PublicGoalComponent },
  {path: 'public-goals', component: PublicGoalsComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
