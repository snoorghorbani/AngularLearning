import { Component, Input, OnInit } from '@angular/core';


interface IParentStateComponent {
  state: number;
  increment(): this;
  decrement(): this;
}

@Component({
  selector: 'app-parent-state',
  templateUrl: './parent-state.component.html',
  styleUrls: ['./parent-state.component.css']
})
export class ParentStateComponent implements IParentStateComponent {

  state: number = 1;

  increment() {
    this.state++;
    return this;
  }

  decrement() {
    this.state--;
    return this;
  }

}
