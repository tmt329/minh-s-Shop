import { Component, OnInit } from '@angular/core';
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
  
  isAdmin:boolean ;

  
  constructor(private userService : UserService,
    private authService :AuthService) { }

  ngOnInit(): void {
    var user = JSON.parse( localStorage.getItem('user'))
   
    this.user=user ;
    
 
     this.userService.user.subscribe(user => 
      {
        if(user!=null)
        this.user=user;
      })

      this.authService.isAdmin.subscribe(
        data =>{ 
          if(data) {  
            this.isAdmin=data
            

          }
          else{
            console.log("none");
            
          }
        
            }
        
      )

      
      

    

  }
  
  change(display)
  {
    this.display= display;
  
  }
}
