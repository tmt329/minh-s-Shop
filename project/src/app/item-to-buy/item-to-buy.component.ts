import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Product } from '../models/product.class';
import { ProductService } from '../services/product.service';
import { ProductsInBagService } from '../services/products-in-bag.service';

@Component({
  selector: 'app-item-to-buy',
  templateUrl: './item-to-buy.component.html',
  styleUrls: ['./item-to-buy.component.css']
})
export class ItemToBuyComponent implements OnInit {
  
  
  product :Product;
  id: string ;
  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService,
    public productBag: ProductsInBagService,
    
    ) { }

  ngOnInit(): void {
  
  
    
     this.id= this.activatedRoute.snapshot.paramMap.get('id');
     
     
     this.productService.getProductsById(this.id).subscribe(res=> {
      this.product = new Product(res['id'], res['name'], res['gender'], res['type'], res['price'], res['link'])
    }) 
    
     
     
     
  }
  onClick()
  {  
    this.productBag.addProduct(this.product)
    
    
  }

}
