import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent  {

  constructor(public  activatedRoute : ActivatedRoute,
     
   ) { }

  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(data =>
      {
         console.log(data);
         
      })
     ;
     
  }
    

  
  items  =
  [
     { link1: "./assets/item1.jpg",
       link2: "./assets/item1.2.jpg",
      id: 1 ,  name: "item 1",
       type: "type",
       price: 100
    },
        {  link1: "./assets/item1.jpg",
        link2: "./assets/item1.2.jpg",
       id: 2 ,  name: "item 1",
        type: "type",
        price: 100
     },
      {  link1: "./assets/item1.jpg",
      link2: "./assets/item1.2.jpg",
      id: 3 ,  name: "item 1",
       type: "type",
       price: 100
    },
     {  link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
      id: 4 ,  name: "item 1",
       type: "type",
       price: 100
    },
    {  link1: "./assets/item1.jpg",
    link2: "./assets/item1.2.jpg",
   id: 5 ,  name: "item 1",
    type: "type",
    price: 100
   },
      {  link1: "./assets/item1.jpg",
      link2: "./assets/item1.2.jpg",
      id: 6 ,  name: "item 1",
       type: "type",
       price: 100
    },
     { link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
      id: 7 ,  name: "item 1",
       type: "type",
       price: 100
    },
    { link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
      id: 8 ,  name: "item 1",
       type: "type",
       price: 100
    },
    { link1: "./assets/item1.jpg",
    link2: "./assets/item1.2.jpg",
     id: 9 ,  name: "item 1",
      type: "type",
      price: 100
   },
   { link1: "./assets/item1.jpg",
   link2: "./assets/item1.2.jpg",
    id: 10 ,  name: "item 1",
     type: "type",
     price: 100
  },
  { link1: "./assets/item1.jpg",
  link2: "./assets/item1.2.jpg",
   id: 11 ,  name: "item 1",
    type: "type",
    price: 100
 },
 { link1: "./assets/item1.jpg",
 link2: "./assets/item1.2.jpg",
  id:12  ,  name: "item 1",
   type: "type",
   price: 100
},    
{ link1: "./assets/item1.jpg",
link2: "./assets/item1.2.jpg",

   id: 13 ,  name: "item 1",
  type: "type",
  price: 100
},  
  ]

  change(_src, link)
  {
    console.log(_src);
    
    
  }

  onDestroy()
  {
     
  }
}
