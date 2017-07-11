import { Component, Input, OnInit } from '@angular/core';
//import { siblingService } from '../../sibling.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { INCREMENT, DECREMENT, RESET } from '../../counter.reducer';


interface AppState {
  counter: number;
}

export interface IParentStateComponent {
}

@Component({
  selector: 'app-parent-state',
  templateUrl: './parent-state.component.html',
  styleUrls: ['./parent-state.component.css']
})
export class ParentStateComponent implements IParentStateComponent {
  counter: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }


}
