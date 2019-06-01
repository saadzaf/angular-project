import { Component, OnInit } from '@angular/core';
import { ZomatoService } from 'src/app/Service/zomato.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public showhide = false;
  constructor(public myservice: ZomatoService) { }

  public data: [];
  ngOnInit() {
  }

  showMenu() {
    this.myservice.getAll().subscribe(values => this.data = values);
  }
}
