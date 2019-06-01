import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/Service/hotel.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  constructor(public myservice: HotelService) { }
  public data: [];
  ngOnInit() {
    this.showRes();
  }

  showRes() {
    this.myservice.getAll().subscribe(values => {
      this.data = values;
    });
  }
}
