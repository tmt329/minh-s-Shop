import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men-collection',
  templateUrl: './men-collection.component.html',
  styleUrls: ['./men-collection.component.css']
})
export class MenCollectionComponent implements OnInit {
    

  goTo: string ="men-collection";
  
  constructor() { }
  

  ngOnInit(): void {

    
  }

}
