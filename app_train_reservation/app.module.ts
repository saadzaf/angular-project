import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './Component/registration/registration.component';
import { TrainAvailabilityComponent } from './Component/train-availability/train-availability.component';
import { TicketComponent } from './Component/ticket/ticket.component';
import { StateComponent } from './Component/state/state.component';
import { CityComponent } from './Component/city/city.component';
import { StationComponent } from './Component/station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    TrainAvailabilityComponent,
    TicketComponent,
    StateComponent,
    CityComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
