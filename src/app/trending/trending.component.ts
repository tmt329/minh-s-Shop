import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.class';
import {CommonModule} from'@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  
  url="https://mini-shop-9ac53-default-rtdb.europe-west1.firebasedatabase.app/items.json";
  items:any[] =[];
  
  constructor(private http: HttpClient, 

   private router : Router, private productService : ProductService) { }

  ngOnInit(): void {
    
    this.productService.getProducts();

    this.productService.products.subscribe(data=>{
      this.items.push(...data) ;

      this.items.splice(15,this.items.length-16);

        
      })
      
      
  }
  
  navigate(item)
  {  let url= '' ;
      if(item['gender']=='man')
      {
        url='men-collection/' + item['id'] ;
      }
      if(item['gender']=='woman')
      {
        url='women-collection/' + item['id'] ;
      }
      if(item['gender']=='kid')
      {
        url='kids-collection/'+ item['id']
      }
      this.router.navigateByUrl(url) ;
      
      
  }

   count : number = 0 ;
   
   moveLeft()
  { if(this.count==0) 
    {
        this.count=1066.7*2 ;
    }
    else
    {
      this.count-= 1066.7;
    }
    
    let element = document.getElementById("card-row");
    element.style.marginLeft = "-"  + this.count +  "px" ;
    
    
  }
  moveRight()
  {
       if( this.count>= 1066.7*2)
       {
         this.count=0;
       }
       else 
       {
        this.count+= 1066.7;
       }
    
    let element = document.getElementById("card-row");
    element.style.marginLeft = "-"  + this.count +  "px" ;
    
  }
}
