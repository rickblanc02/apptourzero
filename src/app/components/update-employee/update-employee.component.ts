import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee/employee';
//import {  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  type = '';
  //message = '';
  message = "Hola Mundo!"

  id!: number;
  employee = new Employee();
  //employee: Employee = new Employee(); // como en el curso

  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee =data;
    }, error => console.log(error));

  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  back(){

    this.router.navigate([".."]);
    console.log("back");
      
  }

}
