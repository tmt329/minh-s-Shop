import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counting-animation',
  templateUrl: './counting-animation.component.html',
  styleUrls: ['./counting-animation.component.css']
})
export class CountingAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   counters  = document.querySelectorAll(".counter") ;
}
