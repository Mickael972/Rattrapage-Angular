import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LocationComponent } from './location/location.component';
import { MenudetailComponent } from './menudetail/menudetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    ReservationComponent,
    LocationComponent,
    MenudetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
