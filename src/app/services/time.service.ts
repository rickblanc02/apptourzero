import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Time } from '../models/time/time';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient: HttpClient) { }

  //https://app-tours.herokuapp.com/
  //private baseUrl = "http://localhost:8080/api/v1/";
  private baseUrl = "https://app-tours.herokuapp.com/api/v1/";

  //return objet time
  getTime(time: Time): Observable<Time>{
    
    return this.httpClient.post<Time>(this.baseUrl+"time", time);
  }
  
  //return object 
  getTime2(time: Time): Observable<Object>{
    
    return this.httpClient.post(this.baseUrl+"time", time);
  }

  

}
