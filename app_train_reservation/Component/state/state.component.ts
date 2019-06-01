import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/Service/train.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  state_name: any;
  states: any;
  public selectionState = false;
  constructor(private myservice:TrainService) { }

  ngOnInit() {
    this.selectionState = true;
    this.getstate();
  }
  addStates() {
    this.myservice.addState(this.state_name).subscribe(result => alert(result));
    this.selectionState = true;
    this.getstate();
  }
  getstate() {
    this.myservice.getAllstate().subscribe(result => this.states = result);
  }
  showHide() {
    this.selectionState = false;
  }
  

}
