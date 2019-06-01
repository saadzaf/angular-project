import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private url = 'http://192.168.43.148:1234/';
  constructor(private http: HttpClient) { }

  getAllstate(): any {
    return this.http.get(this.url + "state");
  }
  getAllCity(): any {
    return this.http.get(this.url + "city");
  }
  getAllUser(): any {
    return this.http.get(this.url + "user");
  }
  addUser(user): any {
    return this.http.post(this.url + "regUser", user);
  }

  getstationall(): any {
    return this.http.get(this.url + "stationall");

  }

  addState(state): any {
    // alert(state);
    return this.http.post(this.url + "state", { 'state': state }, { responseType: "text" });
  }

  addCiti(arg): any {
    alert(JSON.stringify(arg))
    return this.http.post(this.url + "city", arg, { responseType: "text" });
  }

  addStations(station): any {

    alert(JSON.stringify(station))
    return this.http.post(this.url + "station", station, { responseType: "text" });
  }

  getTrains(obj): any {
    alert(JSON.stringify(obj));
    return this.http.post(this.url + "trains", obj);

  }

}
