import { NgBoostrapModule } from './ng-bootstrap.module';
import { MaterialModule } from './material.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { TimeUtcComponent } from './components/time-utc/time-utc.component';
import { LoginTutenComponent } from './components/login-tuten/login-tuten.component';
//import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    TimeUtcComponent,
    LoginTutenComponent,  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,     
    MaterialModule,
    NgBoostrapModule,
    NgbModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
