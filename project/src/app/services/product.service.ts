import { Injectable } from '@angular/core';
import {Product} from './../models/product.class';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] ;
  manProducts: Product[];
  womanProducts: Product[];
  kidsProducts:Product[];
  url: string;
  _manUrl="http://localhost:1000/api/items/man" ;
  _womanUrl="http://localhost:1000/api/items/Woman";
  _kidUrl="http://localhost:1000/api/items/Kid";

  constructor(private http: HttpClient,
    ) { 
      this.http=http;
      
      this.url='https://mini-shop-9ac53-default-rtdb.europe-west1.firebasedatabase.app/items.json'
    }
  
  ngOnInit()
  {
   
                  
  }
  
  getProducts(url: string):Observable<Product[]>
  {
    return this.http.get<Product[]>(url)
  }
  
  getManProducts():Observable<Product[]>
  {  
  
    return this.http.get<Product[]>(this._manUrl)
  }
  getWomanProducts()
  {
     return this.http.get<Product[]>(this._womanUrl)
  }
  getKidsProducts()
  {
    return this.http.get<Product[]>(this._kidUrl)
  }

  getProductsByType(_products: Product[] ,_type  : string)
  {
   
    let result: Product[]= _products.filter(x=> {
      return x.type==_type ;
    });
     
     
    return result ;
          
      
  }
  getProductsByPrice(_products:Product[], price1:number, price2:number )
  { 
    
   return  _products= _products.filter(x=>{return x.price>price1 && x.price<=price2})
     
      
  }
  

  getProductsById(id:number)
  { 
    let api="//localhost:1000/api/items/id/";
    
    return this.http.get(api+ id) ;
  }
}
