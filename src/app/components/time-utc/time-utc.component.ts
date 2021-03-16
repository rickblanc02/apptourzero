import { TimeService } from './../../services/time.service';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time/time';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-time-utc',
  templateUrl: './time-utc.component.html',
  styleUrls: ['./time-utc.component.scss']
})
export class TimeUtcComponent implements OnInit {
  form;
  time = new Time();
  //resultado!: Object;
  resultado!:number;

  
  constructor(
    private timeService: TimeService,
    private router: Router,
    //private fb: FormBuilder,
    private formBuilder: FormBuilder,
   
    ) {
      this.form = formBuilder.group({
        //time: ['', Validators.required],
        //time: ['', [Validators.pattern('(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)')]],
        time: ['', [Validators.pattern('^(?:[01]\\d|2[0123]):(?:[012345]\\d):(?:[012345]\\d)$')]],
        timeZoneInt: ['', Validators.required],
        
      });
    }
     


  ngOnInit(): void {
    this.resultado = 0;

    
   
  }


  getTime(){
    this.timeService.getTime(this.time).subscribe( data =>{
      console.log(data);
      //this.resultado = data;
      //this.goToEmployeeList();
      this.time = data;
      this.resultado = 1;
      
     
    },
    error => console.log(error));
  }

  onSubmit(){
   
    if (this.form.valid) {
      console.log(this.form.value)
      this.getTime();
    }
    else{
     
      alert("required")
      
    }

  }

  back(){
    this.router.navigate([".."]);
    console.log("back");      
  }

  result():boolean {
 
    if(this.resultado==1) {
          return true;
    }else {
      return false;
    }
  }

}
