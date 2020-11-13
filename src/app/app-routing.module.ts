import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightsComponent } from './actuators/lights/lights.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'room/:id', component: LightsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
