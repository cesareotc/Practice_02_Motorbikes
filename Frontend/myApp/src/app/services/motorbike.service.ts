import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotorbikeService {

  endpoint = 'http://localhost:8080/api/motorbikes';

  constructor(private httpClient: HttpClient) { }

  getMotorbikes() {
    return this.httpClient.get(this.endpoint);
  }
}
