import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'living-room', component: RoomsComponent, data: { rooms: ['livingRoom'] } },
  { path: 'kitchen', component: RoomsComponent, data: { rooms: ['kitchen'] } },
  { path: 'floor', component: RoomsComponent, data: { rooms: ['floor'] } },
  { path: 'bathroom', component: RoomsComponent, data: { rooms: ['bathroom'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
