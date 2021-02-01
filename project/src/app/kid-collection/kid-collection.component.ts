import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kid-collection',
  templateUrl: './kid-collection.component.html',
  styleUrls: ['./kid-collection.component.css']
})
export class KidCollectionComponent implements OnInit {
  goTo="kids-collection";
  name="Kids";
  constructor() { }

  ngOnInit(): void {
  }

}
