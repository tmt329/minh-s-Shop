import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsInBagService {
  
  products:Product[]= [];
  constructor() { }
  
  getProducts()
  {
    return this.products;
  }
  addProduct(product:Product)
  {
    this.products.push(product);
    console.log("add successfully");
    
  }
  removeProducts(product: Product)
  {
    const index:number = this.products.indexOf(product)
    console.log(index);
    
    if(index!=-1)
    {
      console.log(this.products.splice(index,1));
      
      
      
    }
  

    
  }


}
