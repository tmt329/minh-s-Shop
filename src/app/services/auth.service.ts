import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  auth:Subject<boolean> =new Subject<boolean>();

  isAdmin:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);



  user:User;
  token:string;

  errorEmitter: Subject<string> = new Subject<string>();
  
  constructor(private router : Router,private http: HttpClient) { }

  setAuth(auth:boolean)
  {
    this.auth.next(auth) ;
  }

  setAdmin(toi :boolean){
    
    
    this.isAdmin.next(toi) ;
    
    
  }

  login(credential:{email:string, password:string})
  {
    this.http.post("http://localhost:1000/auth/login", credential).subscribe(
    (res:{status: number, description ?: string, token? :string, user? :any}) => {
      if(res.status == 200)
      {
        this.user=res.user;
        if(this.user['email']=="admin@admin")
        {
          this.setAdmin(true);
          
          
        }
        this.token=res.token;
        localStorage.setItem('token', res.token);
        localStorage.setItem('user',JSON.stringify(this.user))
        
        this.setAuth(true);
 
         this.router.navigate(['/user'])
      }
      else
      {
        this.errorEmitter.next(res.description)
        console.log(res.description);
        
      }
    }
    )
  }

  logOut()
  {
    this.user=null;
    this.token=null;
    localStorage.removeItem('token') ;
    localStorage.removeItem('user')
    this.setAuth(false);
  }


  getUser()
  {
    if(this.user)
    {
      return this.user ;

    }
    else
    return null ;
  }

  getToken()
  {
    if(this.token)
    return this.token ;
    else
    {
      if(localStorage.getItem('token'))
      this.token= localStorage.getItem('token');
      return this.token ;

      
    }
  }

  isAuthenticated()
  {
    return this.user!=null ;
  }

  whoAmI()
  {
    if(this.getToken())
    {  console.log(this.getToken());
    
      return this.http.get("http://localhost:1000/api/user/me")
        .pipe(map((response : {status:Number, user?:User})=>
        { 

          if(response.status ==200)
         { this.user = response.user;
          this.auth.next(true);
         }
         
         if(response.status==403)
         {
           console.log("sha");
           
         }
          

          return response ;
        }))
    }
    else 
    { 
        
        
      return new Observable( observer =>
        {
          observer.next({status:100})
        })
    }
  }
  
}
