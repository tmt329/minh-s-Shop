import { Component, Input, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from './../services/product.service'
import {Product} from './../models/product.class'

import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent  {
   
   items: any[] =[];
   itemsDiplay: any[] = [] ;
   url:string="https://mini-shop-9ac53-default-rtdb.europe-west1.firebasedatabase.app/items.json";
   i:any[]=[];
    @Input() goTo ;
     name:string ;

  constructor(public  activatedRoute : ActivatedRoute,
     public productService : ProductService,
     private http: HttpClient
   ) { 
     
   }

 
  ngOnInit(): void {
      
        window.scrollTo(0,0);

      this.getProducts();

     }
  
  
    

   getProducts()
  {
    if(this.goTo=="men-collection")
    { this.name="Men";

     this.productService.getManProducts()
     .pipe(map(res => 
      {const _items:Product[]= [];
        for(let key in res)
        {  
        
          let item = new Product(res[key]['_id'], res[key]['name'], res[key]['gender'], res[key]['type'], res[key]['price'], res[key]['link']);
          _items.push(item);
        }
        return _items
      }
      ))
    
     .subscribe(
       data => {
         this.items =data ;
        this.itemsDiplay=data;
         this.check();
    
      }
     )
   
    }
    if(this.goTo=="women-collection")
    { this.name="Women";
      this.productService.getWomanProducts()
      .pipe(map(res => 
        {const _items:Product[]= [];
          for(let key in res)
          {  
          
            let item = new Product(res[key]['_id'], res[key]['name'], res[key]['gender'], res[key]['type'], res[key]['price'], res[key]['link']);
            _items.push(item);
          }
          return _items
        }
        ))
      
       .subscribe(
         data => {
           this.items =data ;
          this.itemsDiplay=data;
           this.check();
      
        }
       )
      
             
    }
    if(this.goTo=="kids-collection")
    { this.name="Kids" 
      
      this.productService.getKidsProducts()
      .pipe(map(res => 
        {const _items:Product[]= [];
          for(let key in res)
          {  
          
            let item = new Product(res[key]['_id'], res[key]['name'], res[key]['gender'], res[key]['type'], res[key]['price'], res[key]['link']);
            _items.push(item);
          }
          return _items
        }
        ))
      
       .subscribe(
         data => {
           this.items =data ;
          this.itemsDiplay=data;
           this.check();
      
        }
       )
         
    }
    
    
    
    
  }
  

  
   check()
  {
     this.activatedRoute.queryParams.subscribe(data =>
      {  
        
      this.items=this.itemsDiplay;
      
       
  
          if(data["type"] && data['type']!="")
          { 
              let _type = data['type'] ;
             this.items= this.items.filter(x=> {return x.type==_type})

            }
               
            let old_item = this.items ;

            if(data["range1"]=="true" || data["range2"]=="true" || data["range3"]=="true"||data["range4"]=="true")
            {
                  this.items=[] ;
                  var item1= [], item2=[], item3=[], item4=[] ;
                 
            if(data["range1"]=="true") 
            {    
            
                  old_item.forEach(item => 
                    {
                      if(item.price < 380) 
                       item1.push(item)
    
                    })
                 
                
            }
            if(data["range2"]=="true")
            {
               item2=this.productService.getProductsByPrice(old_item,380,770)
            }
            if(data["range3"]=="true")
            {
               item3=this.productService.getProductsByPrice(old_item,770,1150)
            }
            if(data["range4"]=="true")
            {
               item4=this.productService.getProductsByPrice(old_item,1150,99999)
            }
            this.items =this.items.concat(item1,item2,item3,item4);
            }
            else
            {
              //  this.itemsToDisplay= this.productService.getAllProducts(this.items,data["type"]);
             // this.items=old_item;
            }
              
            if(data["item_sort"]=='1')
            {
              this.items= this.items.sort((a,b)=> b.price - a.price)
            }
            if(data["item_sort"]==2)
            {
               this.items=this.items.sort((a,b)=> a.price - b.price)
            }           
            console.log(this.items);
      })
     ;
  }

  onDestroy()
  {
     
  }
}
