import { EmployeeService } from './../../services/employee.service';
import { Employee } from 'src/app/models/employee/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  //employee: Employee = new Employee();
  employee = new Employee();
  //constructor() { }
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  back(){
    this.router.navigate([".."]);
    console.log("back");      
  }

  //Otras alternativas back
  /*

  import { Location } from '@angular/common'

@Component({...})
export class UserDetailComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back()
  }
}

////
<a routerLink="..">Back with Relative Routing</a>

import { NavigationService } from './navigation.service'

@Component({...})
export class UserDetailComponent {
  constructor(private navigation: NavigationService) {}

  back(): void {
    this.navigation.back()
  }
}
  */

}
