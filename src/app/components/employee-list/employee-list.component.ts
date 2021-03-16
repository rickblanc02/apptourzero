import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(UpdateEmployeeComponent) updateEmployeeComponent!: UpdateEmployeeComponent;
  employees!: Employee[];
  //employees: Employee[] = [];
  type = 'success';
  message = 'Operacion realizada con exito';

  //message:string;
    
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {

    this.getEmployees();
  
    /*this.employees = [
      {
        "id": 1,
        "firstName": "chris",
        "lastName": "blanco",
        "emailId": "rickblanc02@gmail"

      },
      {
        "id": 2,
        "firstName": "astrid",
        "lastName": "blanco",
        "emailId": "astridblanc@gmail"

      },
    ]*/

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    //this.message = this.updateEmployeeComponent.message
  }

  private getEmployees(){

    this.employeeService.getEmployeesList().subscribe(data =>{

      this.employees = data;

      }
    )

  }
  
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  
  updateEmployee(id: number){

    this.router.navigate(["update-employee", id]);

  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
