import { Contact } from './../models/contact/contact';
import { User } from './../models/user/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  //https://dev.tuten.cl/TutenREST/rest/user/  
  //https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true

  private baseUrl = "https://dev.tuten.cl/TutenREST/rest/user/";
  
  getLogin(user: User): Observable<User>{
    let parametros = new HttpParams();
   
    //parametros = parametros.append('app',user.app);
    //parametros = parametros.append('pass',user.pass);

    const opciones = {
      headers: new HttpHeaders({
        'App':user.app,
        'Password': user.pass
      }),
      //params: parametros
    };

    return this.httpClient.put<User>(this.baseUrl+user.user+"", user, opciones);
    //return this.httpClient.put<User>(this.baseUrl+user.user+"", opciones);
  }

  
  getBooking(contact: Contact): Observable<Contact[]>{

    /*this.contact.current = true;
    this.contact.adminemail = "testapis@tuten.cl";
    this.contact.email = "contacto@tuten.cl";
    this.contact.app = "APP_BCK";
    this.contact.token = this.token;*/

    const opciones = {
      headers: new HttpHeaders({
        'adminemail':contact.adminemail,
        'token': contact.token,
        'app': contact.app
      }),
      //params: parametros
    };
    
    return this.httpClient.get<Contact[]>(this.baseUrl+contact.email+"/bookings?current="+contact.current, opciones);
  }

}
