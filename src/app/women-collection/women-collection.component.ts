import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-collection',
  templateUrl: './women-collection.component.html',
  styleUrls: ['./women-collection.component.css']
})
export class WomenCollectionComponent implements OnInit {
  
   goTo: string = 'women-collection';
   name:string ;
  constructor() { }
  
  ngOnInit(): void {
    this.name="Women"
  }

}
