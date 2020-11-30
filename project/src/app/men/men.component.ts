import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent  {

  constructor() { }

  ngOnInit(): void {
  }
    

  
  items  =
  [
     { link1: "./assets/item1.jpg",
       link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
        {  link1: "./assets/item1.jpg",
        link2: "./assets/item1.2.jpg",
        name: "item 1",
        type: "type",
        price: 100
     },
      {  link1: "./assets/item1.jpg",
      link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
     {  link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
    {  link1: "./assets/item1.jpg",
    link2: "./assets/item1.2.jpg",
    name: "item 1",
    type: "type",
    price: 100
   },
      {  link1: "./assets/item1.jpg",
      link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
     { link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
    { link1: "./assets/item1.jpg",
     link2: "./assets/item1.2.jpg",
       name: "item 1",
       type: "type",
       price: 100
    },
    { link1: "./assets/item1.jpg",
    link2: "./assets/item1.2.jpg",
      name: "item 1",
      type: "type",
      price: 100
   },
   { link1: "./assets/item1.jpg",
   link2: "./assets/item1.2.jpg",
     name: "item 1",
     type: "type",
     price: 100
  },
  { link1: "./assets/item1.jpg",
  link2: "./assets/item1.2.jpg",
    name: "item 1",
    type: "type",
    price: 100
 },
 { link1: "./assets/item1.jpg",
 link2: "./assets/item1.2.jpg",
   name: "item 1",
   type: "type",
   price: 100
},    
{ link1: "./assets/item1.jpg",
link2: "./assets/item1.2.jpg",
  name: "item 1",
  type: "type",
  price: 100
},  
  ]

  change(_src, link)
  {
    console.log(_src);
    
    
  }
}
