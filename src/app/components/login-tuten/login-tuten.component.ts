import { Observable } from 'rxjs';
import { Contact } from './../../models/contact/contact';
import { User } from './../../models/user/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
//import { stringify } from '@angular/compiler/src/util';
//import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-login-tuten',
  templateUrl: './login-tuten.component.html',
  styleUrls: ['./login-tuten.component.scss'],
  //filter
  //providers: [DecimalPipe]
})
export class LoginTutenComponent implements OnInit {
  form;
  user = new User();
  contact = new Contact();
  resultado!:number;
  token!:string; 
  //List contact
  contacts!: Contact[];

  //filter
  //filter = new FormControl('');
  //contacts$: Observable<Contact[]>;

  constructor( 
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    //filter
    //pipe: DecimalPipe,
    )
    
    
    
    {
      this.form = formBuilder.group({
        app: ['', Validators.required],        
        user: ['', [Validators.email]],
        pass: ['', Validators.required],
        
      });

      /*this.contacts$ = this.filter.valueChanges.pipe( 
        startWith(''),
        map(text => this.search(text, pipe))
      );*/
      
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

      this.token = <string>localStorage.getItem('sessionTokenBck');
      
      //console.log(JSON.stringify(data));

      //llenamos los valores del segundor servicio
      this.contact.current = true;
      this.contact.adminemail = "testapis@tuten.cl";
      this.contact.email = "contacto@tuten.cl";
      this.contact.app = "APP_BCK";
      this.contact.token = this.token;

      //consumir segundo servicio
      this.getContact();
      
     
    },
    error => console.log(error));
    this.resultado = 0;
  }

  getContact(){
    this.userService.getBooking(this.contact).subscribe( data =>{
      console.log(data);
      //console.log(data.sessionTokenBck);
      
      //localStorage.setItem('sessionTokenBck', data.sessionTokenBck);
      //console.log(localStorage.getItem('sessionTokenBck'));
      //this.resultado = data;
      //this.goToEmployeeList();
      //this.time = data;
      this.resultado = 1;
      this.contacts = data;
      
     
    },
    error => console.log(error));
    this.resultado = 0;
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

  //filter
   /*search(text: string, pipe: PipeTransform): Contact[] { console.log("searh");
    return this.contacts.filter(contact => {
      const term = text.toLowerCase();
      return contact.bookingPrice.toLowerCase().includes(term)
          || pipe.transform(contact.bookingId).includes(term)
          ;
    });
  }*/

}
