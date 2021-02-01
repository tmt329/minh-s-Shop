import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
  
  user:User;
  display:boolean= true;
  

  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    var user = JSON.parse( localStorage.getItem('user'))
   
    this.user=user ;
    
 
     this.userService.user.subscribe(user => 
      {
        if(user!=null)
        this.user=user;
      })
    

  }
  
  change(display)
  {
    this.display= display;
  
  }
}
