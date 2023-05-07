import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http: HttpClient) { }
  



  getApiresponse(endpoint:string) {
    return this.http.get(endpoint);
  }
}
