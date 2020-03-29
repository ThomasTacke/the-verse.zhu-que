import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KitchenComponent } from './rooms/kitchen/kitchen.component';
import { LivingRoomComponent } from './rooms/living-room/living-room.component';
import { FloorComponent } from './rooms/floor/floor.component';
import { BathroomComponent } from './rooms/bathroom/bathroom.component';
import { LightsComponent } from './actuators/lights/lights.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'floor', component: FloorComponent },
  { path: 'bathroom', component: BathroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
