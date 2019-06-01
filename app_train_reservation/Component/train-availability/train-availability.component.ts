import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/Service/train.service';

@Component({
  selector: 'app-train-availability',
  templateUrl: './train-availability.component.html',
  styleUrls: ['./train-availability.component.css']
})
export class TrainAvailabilityComponent implements OnInit {

  trains: any;
  sources: any;
  destinations: any;
  showform = true;
  doj: any;
  src: any;
  dst: any;

  constructor(private myservice: TrainService) { }

  ngOnInit() {
    this.showStations();
  }

  showtrains() {
    let obj = {
      "doj": this.doj,
      "src": this.src,
      "dst": this.dst
    }
    this.myservice.getTrains(obj).subscribe(results => {
      alert(JSON.stringify(results))
      this.trains = results[0];
    })
    this.showform = false;
  }

  showStations() {
    this.myservice.getstation().subscribe(results => {
      this.sources = results;
      this.destinations = results;
    })
    // this.showform = false;
  }
  showHide() {
    this.showform = true;
  }

}
