import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  
  public sort_type :string  ; 
  
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  type :string = "" ;

  onclick(_type ) {
    this.type= _type ;
    this.router.navigate(['men-collection'], {queryParams: {type : this.type}})

  }
  
    
  selectChange(event)
  {
    console.log(event);
    
    
    
  }
}
