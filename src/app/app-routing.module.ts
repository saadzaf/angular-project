import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './Component/restaurant/restaurant.component';
import { AboutComponent } from './Component/about/about.component';

const routes: Routes = [
  { "path": "", component: RestaurantComponent },
  { "path": "restaurant", component: RestaurantComponent },
  { "path": "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
