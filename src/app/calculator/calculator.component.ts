import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number;
  number2: number;
  result : number =0;
  constructor() { }

  ngOnInit(): void {
  }
  addtion()
  {
    this.result= Number.parseInt(this.number1.toString()) + Number.parseFloat(this.number2.toString());
    return this.result;
  }
  subtraction()
  {
    this.result= Number.parseInt(this.number1.toString()) - Number.parseFloat(this.number2.toString());
    return this.result;
  }
  multiplication()
  {
    this.result= Number.parseInt(this.number1.toString()) *  Number.parseFloat(this.number2.toString());
    return this.result;
  }
  division()
  {
    this.result= Number.parseInt(this.number1.toString()) / Number.parseFloat(this.number2.toString());
    return this.result;
  }

}
