import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.class';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  display:boolean = true; 
  users:any[];
  items:any[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    this.http.get('http://localhost:1000/api/items')
    .pipe(map(res => 
      {const _items:Product[]= [];
        for(let key in res)
        {  
        
          let item = new Product(res[key]['id'], res[key]['name'], res[key]['gender'], res[key]['type'], res[key]['price'], res[key]['link']);
          _items.push(item);
        }
        return _items
      }
      ))
    
     .subscribe(
       data => {
         this.items =data ;
        
         
    
      }
     )
  }
  change(display)
  {
    this.display=display;
  }
}
