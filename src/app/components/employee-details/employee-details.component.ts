import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee';
import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = 0;
  //employee: Employee
  employee = new Employee();
  constructor(private route: ActivatedRoute,private router: Router, private employeService: EmployeeService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
   

  }

  back(){

    this.router.navigate([".."]);
    console.log("back");
      
  }

}
