import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-item-to-buy',
  templateUrl: './item-to-buy.component.html',
  styleUrls: ['./item-to-buy.component.css']
})
export class ItemToBuyComponent implements OnInit {
  
  

  constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activatedRoute.snapshot.params['name']);
    
  }

}
