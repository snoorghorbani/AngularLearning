import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { observable } from 'rxjs/symbol/observable';
import { INCREMENT, DECREMENT } from "./counter.reducer";
import { POSITIVE, NEGATIVE } from "./status.reducer";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppState } from './smartComponent/sibling/sibling.component';

@Injectable()
export class StatusEffects {
    counter : Observable<number>;
    constructor(private action$: Actions, private store$: Store<AppState>) {
       this.counter = store$.select('counter');
    }

    @Effect() Status$ = this.action$
        .ofType(INCREMENT, DECREMENT)
        .withLatestFrom( this.store$, state => this.counter)
        .switchMap(action => {
            debugger
           
            // var value = store.select('counter')
            console.log(this.store$.dispatch)
            var stateType: string;
            stateType = POSITIVE;
          console.log(this.store$)
            // if (action.payload > 0) {
            // }
            return new BehaviorSubject(<Action>{ type: stateType })
        });
    // .map(action => ({ type: POSITIVE }))

}
