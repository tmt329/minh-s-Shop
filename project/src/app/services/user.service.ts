import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:BehaviorSubject<User>= new BehaviorSubject<User>(null)
  constructor(private http:HttpClient) { }
  
  setUser(user: User)
  {
    this.user.next(user);

  }

  getUser()
  {
    return  this.http.get('http://localhost:1000/api/user')
  }

}
