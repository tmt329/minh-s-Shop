import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.class';
import { FormGroup, FormControl } from '@angular/forms';
import { ExtraOptions, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id:string;
  display:boolean = true; 
  submitDisplay:boolean= true ;
  users:any[];
  items:any[];

  sortBy: string ='name';
  sortValue: number = 1; // 1 increase

 
  url='http://localhost:1000/api/items';

  formItem :FormGroup

  constructor(private http:HttpClient,
   private router:Router,
   private productService : ProductService,
   private userService :UserService) { }

  ngOnInit(): void 
  {   
     this.createForm();

    this.productService.getProducts()
    

     this.productService.products.subscribe(
       products => this.items=products 
     )

     this.userService.getUser()
     .pipe(map(res => {
      const users: any[] = [];
      for (let key in res) {

        let user = res[key] ;
        users.push(user);
      }

      return users;
    }))
     .subscribe(
       data =>{ 
         this.users=data ;
       }
        // console.log(data);}
        
     )
  }

  createForm()
  {
    this.formItem = new FormGroup({
        
        name: new FormControl(''),
        type: new FormControl(''),
        gender: new FormControl(''),
        price: new FormControl(''),

        link1: new FormControl(''),
        link2: new FormControl(''),
        link3: new FormControl(''),
        link4: new FormControl('')

    })
   
  }
  submit()
  {
    let value= 
    {
      "gender": this.formItem.get('gender').value,
    "link": {
        "link1": this.formItem.get('link1').value,
        "link2": this.formItem.get('link2').value,
        "link3": this.formItem.get('link3').value,
        "link4": this.formItem.get('link4').value,
    },
    "name": this.formItem.get('name').value,
    "price": this.formItem.get('price').value,
    "type": this.formItem.get('type').value
    }
    
    console.log(value);
    
    this.http.post(this.url, value).subscribe(
      (data : {status:string}) => {
        if(data['status']=='200')
        {
          this.productService.getProducts();
        }

        this.formItem.reset();
        
      }
    )
   
    
    
  }

  edit(i)
  { this.submitDisplay=false;
    let item= this.items[i] ;
    
    this.id=item['id'];
    console.log(this.id);
  
    let value=
    {
      
        name: item['name'] || null,
        type: item['type'] || null,
        gender: item['gender'] || null,
        price: item['price'] || null,
        link1: item['link']['link1'] || null,
        link2: item['link']['link2'] ||null,
        link3: item['link']['link3'] || null,
        link4: item['link']['link4'] ||null

    }

    this.formItem.setValue(value)

    window.scroll(0,0)
    
  }
  
  save()
  {
    this.submitDisplay= true ;
     
     
    let value= 
    {  
      "gender": this.formItem.get('gender').value,
    "link": {
        "link1": this.formItem.get('link1').value,
        "link2": this.formItem.get('link2').value,
        "link3": this.formItem.get('link3').value,
        "link4": this.formItem.get('link4').value,
    },
    "name": this.formItem.get('name').value,
    "price": this.formItem.get('price').value,
    "type": this.formItem.get('type').value
    }
    console.log(value);
    console.log(this.url+ '/id/' + this.id);
    
    
    this.http.put(this.url+ '/id/' + this.id, value).subscribe(
      (res:{status:string})=>{
        if(res['status']=="200")
        {
          this.productService.getProducts();
        }
      this.formItem.reset() 
    } 
      
    )
    
    

    

  }
  discard()
  {
    this.submitDisplay=true;
    this.formItem.reset() ;
  }

  delete(item)
  { 
    console.log(item);
    
    let id=item['id'];
    console.log(id);
    
    

    this.http.delete(this.url+"/id/"+id ).subscribe
    (
      (res:{status:string}) => 
      {
        if(res['status']=="200")
        {
          this.productService.getProducts();
        }
      }
      
      
    )
    
    
    

  }

  change(display)
  {
    this.display=display;
  }

  onSort()
  { console.log(this.sortValue);
  
    this.sortValue= -this.sortValue;
  }
}
