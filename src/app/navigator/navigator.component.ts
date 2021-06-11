import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  // auth:boolean=false;
  auth:boolean=(localStorage.getItem('token')!=undefined) || false; 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
    
    this.authService.auth.subscribe(
      auth => {this.auth = auth}
    )
    
    
    
    console.log(this.auth);
    

  }
  onLogOut()
  {
  
    // localStorage.clear();
    
    // this.authService.setAuth(false);
    // this.authService.setAdmin(false);
    this.authService.logOut();
    
  }

}
