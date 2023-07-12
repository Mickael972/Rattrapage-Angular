import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'menu', component: MenuListComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'location', component: LocationComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
