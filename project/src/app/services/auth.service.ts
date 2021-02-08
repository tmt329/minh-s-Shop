import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  auth:Subject<boolean> =new Subject<boolean>();

  isAdmin:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
  constructor() { }

  setAuth(auth:boolean)
  {
    this.auth.next(auth) ;
  }

  setAdmin(toi :boolean){
    
    
    this.isAdmin.next(toi) ;
    
    
  }
}
