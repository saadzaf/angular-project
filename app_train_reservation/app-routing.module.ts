import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
import { TrainAvailabilityComponent } from './Component/train-availability/train-availability.component';
import { TicketComponent } from './Component/ticket/ticket.component';
import { StateComponent } from './Component/state/state.component';
import { CityComponent } from './Component/city/city.component';
import { StationComponent } from './Component/station/station.component';

const routes: Routes = [
  { "path": "", component: RegistrationComponent },
  { "path": "register", component: RegistrationComponent },
  { "path": "train_availability", component: TrainAvailabilityComponent },
  { "path": "tickets", component:TicketComponent },
  { "path": "state", component:StateComponent },
  { "path": "city", component:CityComponent },
  { "path": "station", component:StationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
