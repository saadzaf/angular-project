import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url = 'http://localhost:1234/';
  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url);
  }
}
