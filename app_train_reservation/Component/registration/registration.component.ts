import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { TrainService } from 'src/app/Service/train.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // staetid:"";
  
public selectedEmp =false;
  states: any;
  userdata: any;
  state: any;
  user_name: any;
  email: any;
  contact: any;
  gender: any;
  pwd: any;
  dob: any;
  constructor(private myservice: TrainService) { }

  ngOnInit() {
    this.selectedEmp = true; 
this.getUser();

    this.states = this.getstate();
  }
  addUser() {
    // alert(this.state);
    let user = {
      "state": this.state,
      "user": this.user_name,
      "email": this.email,
      "contact": this.contact,
      "gender": this.gender,
      "pwd": this.pwd,
      "dob": this.dob
    }
this.myservice.addUser(user).subscribe(result =>alert(result));
this.selectedEmp = true; 
this.getUser();
  }

  getstate() {
    this.myservice.getAllstate().subscribe(result => this.states = result);
  }
  getUser() {
    this.myservice.getAllUser().subscribe(result => this.userdata = result);
  }


showHide(){
  this.selectedEmp = false; 
}

}
