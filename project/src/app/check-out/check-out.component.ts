import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common'
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
    formCheckOut:FormGroup;
    user:User ;
  constructor(private formBuilder : FormBuilder,
    private userService:UserService,
    private router:Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();

    let _user=JSON.parse(localStorage.getItem('user'));
    this.user=_user;
    console.log(this.user);
    
    this.userService.user.subscribe(user =>
     {
      if(user!=null)
      this.user=user;
     } 
      )
      if(this.user)
      {
        this.update()
      }

  }
  createForm()
  {
    this.formCheckOut= this.formBuilder.group({
      'firstName': new FormControl("", Validators.required),
      'lastName' :new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'email': new FormControl('',Validators.required),
       
    })
    
  }
  onSubmit()
  {
    if(this.formCheckOut.invalid)
    {
      alert("The form is invalid") 
    }
    else
    {    var items= JSON.parse(localStorage.getItem('cart'));
       for(let item of items)
       {
        item['product'] = item['product']['id']
       }
      
       console.log(items);
       
    
      this.http.post('http://localhost:1000/api/check-out', {
        "client" : this.formCheckOut.value ,
        "cart" : items 
      }).subscribe(
        (res:{status:number}) => 
        { 
          (res.status==200)
          {
              localStorage.removeItem('cart');
              this.router.navigate['/']
          }
        }

      )
    }

  }  
  update()
  {
    this.formCheckOut.patchValue(
      {
         firstName: this.user.firstName,
         lastName: this.user.lastName,
         address: this.user.address,
         email:this.user.email,
      }
    )
  }

}
