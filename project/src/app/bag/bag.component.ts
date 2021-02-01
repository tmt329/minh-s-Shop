import { Component, OnInit } from '@angular/core';
import { ProductInBag } from '../models/product-in-bag';
import { Product } from '../models/product.class';
import { ProductsInBagService } from '../services/products-in-bag.service';
import {CommonModule} from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  
  size:number=6;
  quantity:number=1 ;
  products:Product[];
  items: ProductInBag[]= [];
  isEmpty ;
  total: number=0 ;
  constructor(
    public productBagService: ProductsInBagService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.products= this.productBagService.getProducts()
    this.isEmpty=this.products.length ;
 
    for(let i=0;i<this.isEmpty; i++)
    { let _product= new ProductInBag(this.products[i]);
      this.items.push(_product)
    }
    
    this.items.forEach(x =>{
      this.total += x.quantity*x.product.price;
    })
    
  }
  ngOnChanges(changes) 
  {
      console.log(changes);
      
  }
  remove(item:ProductInBag)
  {
    let index= this.items.indexOf(item);
    let product=this.items[index].product;
    this.total-= product.price* item.quantity;
    this.productBagService.removeProducts(product);
    this.items.splice(index,1)

  }
  
  changeSize(item, size)
  {
    
    console.log("hi");
    
  }
  checkOut()
  {
    localStorage.setItem('cart', JSON.stringify(this.items))
    this.router.navigate(['/check-out']);
  }
  update()
  {  this.total=0;
    this.items.forEach(x =>{
      this.total += x.quantity*x.product.price;
    })
  }
}
