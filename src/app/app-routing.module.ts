import { LoginTutenComponent } from './components/login-tuten/login-tuten.component';
import { TimeUtcComponent } from './components/time-utc/time-utc.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [

  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  //Path root /
  //{path: '', redirectTo: 'employees', pathMatch: 'full'},

  //para el test tuten
  {path: 'time-utc', component: TimeUtcComponent},
  {path: 'login-tuten', component: LoginTutenComponent},
  {path: '', redirectTo: 'time-utc', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
