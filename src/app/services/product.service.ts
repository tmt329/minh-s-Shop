import { Injectable } from '@angular/core';
import {Product} from './../models/product.class';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:  Subject<Product[]> =new Subject<Product[]>()
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
      
      this.url='http://localhost:1000/api/items'
    }
  
  ngOnInit()
  {
   this.getProducts();
                  
  }

  
  setProduct(_products : Product[])
  {
    this.products.next(_products);
  }
  
  getProducts()
  {
      this.http.get<Product[]>(this.url)
      .pipe(map(res => {
        const _items: Product[] = [];
        for (let key in res) {

          let item = new Product(res[key]['_id'], res[key]['name'], res[key]['gender'], res[key]['type'], res[key]['price'], res[key]['link']);
          _items.push(item);
        }

        return _items;
      }
      ))
      .subscribe( 
        items => {
          
         this.setProduct(items);
        }
      )
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
  

  getProductsById(id:string)
  { 
    let api="//localhost:1000/api/items/id/";
    
    return this.http.get(api+ id) ;
  }
}
