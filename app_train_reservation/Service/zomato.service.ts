import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {
  private url = 'http://192.168.43.148:1234/';
  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url);
  }
obj : [];
  update(): any {
    return this.http.put(this.url, {'body': this.obj});
  }

getAllstate(): any{
  return this.http.get(this.url +"state");
}
getAllUser(): any{
  return this.http.get(this.url +"user");
}
addUser(user): any{
  return this.http.post(this.url +"regUser", user);
}

getstation(): any {
  // alert("");
  return this.http.get(this.url +"station");

}

getTrains(obj): any {
  alert(JSON.stringify(obj));
  return this.http.post(this.url +"trains", obj);

}



}
