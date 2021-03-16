import { User } from './../../models/user/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-tuten',
  templateUrl: './login-tuten.component.html',
  styleUrls: ['./login-tuten.component.scss']
})
export class LoginTutenComponent implements OnInit {
  form;
  user = new User();
  resultado!:number;

  constructor( 
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
      this.form = formBuilder.group({
        app: ['', Validators.required],        
        user: ['', [Validators.email]],
        pass: ['', Validators.required],
        
      });
     }

  ngOnInit(): void {
    this.resultado = 0;
    console.log(localStorage.getItem('sessionTokenBck'));
  }

  getLogin(){
    this.userService.getLogin(this.user).subscribe( data =>{
      console.log(data);
      console.log(data.sessionTokenBck);
      
      localStorage.setItem('sessionTokenBck', data.sessionTokenBck);
      console.log(localStorage.getItem('sessionTokenBck'));
      //this.resultado = data;
      //this.goToEmployeeList();
      //this.time = data;
      this.resultado = 1;
      
      //console.log(JSON.stringify(data));
      
     
    },
    error => console.log(error));
  }

  onSubmit(){
   
    if (this.form.valid) {
      console.log(this.form.value)
      this.getLogin();
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
