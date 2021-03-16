import { Employee } from './../models/employee/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{

    //return this.httpClient.get<Employee[]>('$(this.baseUrl)');
    return this.httpClient.get<Employee[]>(this.baseUrl+"employees");

  }

  createEmployee(employee: Employee): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}`, employee);
    return this.httpClient.post(this.baseUrl+"employees", employee);
  }

  getEmployeeById(id: number): Observable<Employee>{

    return this.httpClient.get<Employee>(this.baseUrl+"employees/"+id)


  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    //return this.httpClient.put(`${this.baseURL}/${id}`, employee);
    return this.httpClient.put(this.baseUrl+"employees/"+id, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    //return this.httpClient.delete(`${this.baseURL}/${id}`);
    return this.httpClient.delete(this.baseUrl+"employees/"+id);
  }

  

}
