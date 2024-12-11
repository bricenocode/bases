import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  standalone: false,
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public title:string = 'First Angular App';
  public counter: number = 20;

  increseBy():void{
    this.counter += 1;
  }
  reset():void{
    this.counter = 20;
  }
  decreaseBy():void{
    this.counter -= 1;
  }
}
