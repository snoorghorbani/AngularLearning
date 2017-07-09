import { Injectable } from '@angular/core';
import { ParentStateComponent } from './parent-state/parent-state.component';

@Injectable()
export class siblingService {
    state: number = 1;
    increment(): number {
        return ++this.state;
    }
    decrement(): number {
        return --this.state;
    }
}