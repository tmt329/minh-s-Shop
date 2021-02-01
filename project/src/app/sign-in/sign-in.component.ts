import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  logginForm: FormGroup ;
  errorEmitter: Subject<string> = new Subject<string>();
  user:User;
  emailErr: boolean= false;
  passErr:boolean = false;
  constructor(public formBuilder : FormBuilder, private http : HttpClient,
    private router : Router,
    private authService : AuthService,
    private userService : UserService
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
    this.logginForm= this.formBuilder.group({
        email: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl(null,[
          Validators.required,
          Validators.minLength(6)
        ])
      }
    )
      
  }
  onSubmit()
  {
    if (this.logginForm.invalid)
    {
      return ;
    }
    
    
    this.http.post("http://localhost:1000/auth/login", this.logginForm.value).subscribe(
      (res:{status: number, description ?: string, token? :string, user? :any}) => {
        if(res.status == 200)
        {
          this.user=res.user
          
          localStorage.setItem('token', res.token);
          localStorage.setItem('user',JSON.stringify(this.user))
          this.userService.setUser(this.user);
          this.authService.setAuth(true);
          
           this.router.navigate(['/'])
        }
        else{
          if(res.description=='wrong email')
          {
                  this.emailErr=true;
          }
          else 
           this.emailErr=false;
          if(res.description=='wrong pass')
          {
            this.passErr=true ;
          }
          else
            this.passErr=false;
        } 
        // if(res.user.email=="admin@admin" )
        // this.router.navigate(['/admin']);
        // else 
        // this.router.navigate(['/user'])
      }
      
      
    )
    
    
  }
}
