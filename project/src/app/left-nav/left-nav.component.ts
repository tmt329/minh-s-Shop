import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  @Input()  goTo ;
  
  type :string = "" ;
  public sort_type :string = '' ; 
   sort_option:number ;

   price_1:boolean;
   price_2:boolean;
   price_3:boolean;
   price_4:boolean;

   sale:boolean;
   
   size:number;
  
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  

  onclick(_type ) {
    this.type= _type ;
    
    this.route();

  }
  
    
  selectChange(option)
  { 
    this.sort_option= option ;
    this.route();
  
    
  }
    
  
  activate(x1,x2,x3,x4)
  {
    
      this.price_1=x1;
      this.price_2=x2;
      this.price_3=x3;
      this.price_4=x4;
      this.route();
    
    
  }

  saleChange(val)
  {
    this.sale= val;
    this.route();
    
    
  }
  
  changeSize(number)
  {
    this.size= number ;
    this.route();

  }
  
  route()
  {
    this.router.navigate([this.goTo], {queryParams: {type : this.type, item_sort : this.sort_option,
       range1 : this.price_1, range2: this.price_2, range3:this.price_3, range4:this.price_4, sale :this.sale, size: this.size  }})
  }

  
}
