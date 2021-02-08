import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit {
    
  items:any[] =[];
  
  url="https://mini-shop-9ac53-default-rtdb.europe-west1.firebasedatabase.app/items.json"

  constructor(private http:HttpClient, private router: Router,
    private productService : ProductService) { }

  ngOnInit(): void {
  // this.http.get(this.url).toPromise()
  // .then(data=>{
  //   for(let key in data){
  //     this.items.push(data[key])
  //   }
  //   console.log(this.items.length);
    
  //   this.items. this.items= items.splice(11, this.items.length-12)
  // })
 
  this.productService.getProducts();
  this.productService.products.subscribe(data=>{
    this.items.push(...data);
    this.items.splice(12, this.items.length-11);

    
    
  }
    )

   
    
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
  
}
