import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incre-decre',
  templateUrl: './incre-decre.component.html',
  styleUrls: ['./incre-decre.component.css']
})
export class IncreDecreComponent implements OnInit {

  number : number;
  result : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  decrement()
  {
    
    this.number = Number.parseInt(this.number.toString()) - 1;
    return this.number;
  }
  increment()
  {
    this.number = Number.parseInt(this.number.toString()) + 1;
    return this.number;
  }
}
