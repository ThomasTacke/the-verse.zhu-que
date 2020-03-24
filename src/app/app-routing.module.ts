import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { FloorComponent } from './floor/floor.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'living-room', component: LivingRoomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'floor', component: FloorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
