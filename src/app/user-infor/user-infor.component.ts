import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
  
  user:User;
  display:boolean= true;
  
  isAdmin:boolean=false ;

  formPassword :FormGroup;

  passwordErr:boolean=false;

  rePassErr:boolean=false;

  successful:boolean=false;
  
  constructor(private userService : UserService,
    private authService :AuthService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
     var user = JSON.parse( localStorage.getItem('user'))
    
     this.user=user;
     
     this.createForm()
     
     this.userService.user.subscribe(user => 
      {
        if(user!=null)
        this.user=user;
      })

      // this.authService.isAdmin.subscribe(
      //   data =>{ 
      //     if(data) {  
      //       this.isAdmin=data
            

      //     }
      //     else{
      //       console.log("none");
            
      //     }
        
      //       }
        
      // )

      // if(this.authService.getUser() && this.authService.getUser().level==2)
      // {
      //   this.isAdmin=true ;
      // }
      
      this.authService.whoAmI()
      .subscribe((res:{ status: number, user?: User}) =>
      { 
        console.log(res);
        
          if(res.status==200)
          {
           
            

            if(this.authService.getUser().level==2)
            {
              this.isAdmin=true ;
            }
            
          }
          else
          {
            console.log("o day");
            
            
          }
      }, 
      (err) => {
      console.log(err.error) ;
      
      if(err.error.message=="wrong token")
      { this.authService.logOut();
        
        
      }
      }
      )
    

  }
  
  change(display)
  {
    this.display= display;
  
  }

  createForm()
  {
    this.formPassword = new FormGroup({
        
        password: new FormControl(''),
        newPass: new FormControl(''),
        reNewPass: new FormControl('')

    })
   
  }

  checkFormValid()
  {
    if (this.formPassword.value['newPass'] != this.formPassword.value['reNewPass'] || !this.formPassword.value['newPass'] )
    {
      return false; 
    }
    else
    return true 
  }

  changePass()
  { 
    
    if(!this.checkFormValid())
    {   
      console.log("have err");
      
      this.rePassErr=true; 
      return ;
    }
    else{


      var id= this.user['_id'] ;
    
    

    this.http.put('http://localhost:1000/api/user/password/'+ id , 
    
      this.formPassword.value     )
      .subscribe((data:{status:number, message?: string})=>   
      {
        if(data.status==100)
        {
            this.passwordErr=true ;
        }

        if(data.status==200)
        {
          this.successful=true;
          this.rePassErr=false;
          this.passwordErr=false;
          this.formPassword.reset() ;
        }

      }
      )

    }
    
   

    
  
     
  }
}
