import { Component, OnInit } from '@angular/core';
//import { siblingService } from '../../sibling.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { INCREMENT, DECREMENT, RESET } from '../../counter.reducer';


interface AppState {
  counter: number;
}

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']

})
export class SiblingComponent {
  // constructor(private SiblingService: siblingService) {
  //   this.SiblingService.increment();
  // }
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
