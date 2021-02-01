import { Component, Input, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public formUser: FormGroup;
  

 
  constructor(public formBuilder : FormBuilder ,
    private http: HttpClient,
    private router: Router,
    private authService : AuthService
   
  ) { }

  ngOnInit(): void {
    this.createForm() ;
    this.checkLogin();
  }
  checkLogin()
  {
    if(localStorage.getItem('token'))
    {
      this.router.navigate(['/']);
    }
  }
  
  createForm()
  {
    this.formUser= this.formBuilder.group({
      'email':new FormControl ("", 
      [Validators.required,Validators.email
      ]
      ),
      'password': new FormControl('',
    [
      Validators.required,
      Validators.minLength(6)
    ]),
      'firstName': new FormControl('', Validators.required,  ),
      'lastName':new FormControl( '', Validators.required     ),
      'birthday': new FormControl('',     Validators.required,    ),
      'address': new FormControl( '', Validators.required )
        
    })
  }

  onSubmit()
  {
    if(this.formUser.invalid)
    {
      return ;
      
    }
   
    
    
      this.http.post("http://localhost:1000/auth/register" , this.formUser.value).subscribe(
        (res:{status: number}) =>{

          if(res.status == 200)
          { 
            this.router.navigate(['/sign-in'])
          }

        }
        
      )
    
 
  }
}
