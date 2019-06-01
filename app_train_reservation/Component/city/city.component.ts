import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/Service/train.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  state: any;
  city: any;
  citydata: any;
  states: any;
  public selecteedCity = false;
  constructor(private myservice: TrainService) { }

  ngOnInit() {
    this.getstate();
    this.getCity();
    this.selecteedCity = true;
  }
  addCity() {
    let data = {
      'state': this.state,
      'city': this.city
    }
    this.myservice.addCiti(data).subscribe(result => alert(result));
    this.selecteedCity = true;
     this.getCity();
    
  }
  getCity() {
    this.myservice.getAllCity().subscribe(result => {
    this.citydata = result;
    });
  }
  getstate() {
    this.myservice.getAllstate().subscribe(result => this.states = result);
  }
  showHide() {
    this.selecteedCity = false;
  }

}
