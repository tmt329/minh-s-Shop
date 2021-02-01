import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  auth:Subject<boolean> =new Subject<boolean>();
  constructor() { }

  setAuth(auth:boolean)
  {
    this.auth.next(auth) ;
  }
}
