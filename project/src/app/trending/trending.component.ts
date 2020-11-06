import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
