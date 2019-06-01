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
  public menudata: [];
  ngOnInit() {
    this.showRes();
  }

  showMenu(id) {
    this.showhide = true;
    this.myservice.getAllMenu(id).subscribe(values => {
    this.menudata = values;
      //alert(this.menudata)
    });

  }

  showRes() {
    this.myservice.getAll().subscribe(values => {
    this.data = values;
    });
  }
  toggle(){
    this.showhide=false;
  }
}
