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
  
  user:User;
  token:string;
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
    

    this.authService.login(this.logginForm.value)
    {
      this.authService.errorEmitter.subscribe(err =>
        {
          if(err)
          {
            if(err==='wrong email')
              {
                      this.emailErr=true;
              }
              else 
               this.emailErr=false;
              if(err=='wrong pass')
              {
                this.passErr=true ;
              }
              else
                this.passErr=false;
          }
        })
      

     

    }
    
    // this.http.post("http://localhost:1000/auth/login", this.logginForm.value).subscribe(
    //   (res:{status: number, description ?: string, token? :string, user? :any}) => {
    //     if(res.status == 200)
    //     {
    //       this.user=res.user;
    //       if(this.user['email']=="admin@admin")
    //       {
    //         this.authService.setAdmin(true);
            
            
    //       }
    //       this.token=res.token;
    //       localStorage.setItem('token', res.token);
    //       localStorage.setItem('user',JSON.stringify(this.user))
    //       this.userService.setUser(this.user);
    //       this.authService.setAuth(true);
         
          
          
    //        this.router.navigate(['/user'])
    //     }
    //     else{
    //       if(res.description=='wrong email')
    //       {
    //               this.emailErr=true;
    //       }
    //       else 
    //        this.emailErr=false;
    //       if(res.description=='wrong pass')
    //       {
    //         this.passErr=true ;
    //       }
    //       else
    //         this.passErr=false;
    //     } 
        // if(res.user.email=="admin@admin" )
        // this.router.navigate(['/admin']);
        // else 
        // this.router.navigate(['/user'])
      
      
      
  // } 
  //   )
    
    
  }

  
}
