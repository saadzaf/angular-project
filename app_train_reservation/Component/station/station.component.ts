import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/Service/train.service';
import { platform } from 'os';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  states: any;
  citydata: any;
  state: any;
  city: any;
  pf: any;
  station_name: any;
  st_data:any;
  s_name:any;
  pfs:any;
  citi:any;
  statee:any;
  public selectStation = false;
  constructor(private myService: TrainService) { }

  ngOnInit() {
    this.getCity();
    this.getstate();
    this.getStation();
    this.selectStation=true;
  }
  getCity() {
    this.myService.getAllCity().subscribe(result => {
      this.citydata = result;
    });
  }
  getstate() {
    this.myService.getAllstate().subscribe(result => this.states = result);
  }
  addStation() {
    let data = {
      's_name': this.station_name,
      'city': this.city,
      'p_no':this.pf,
      'state': this.state
    }
    this.myService.addStations(data).subscribe(result => alert(result));
    this.selectStation = true;
    this.getCity();
    this.getstate();
  }
  getStation(){
    this.myService.getstationall().subscribe(result=>this.st_data=result);
  }

  showHide(){
    this.selectStation=false;
  }
}
