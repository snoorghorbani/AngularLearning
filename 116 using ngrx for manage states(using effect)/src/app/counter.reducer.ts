import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
    debugger
    switch (action.type) {
        case INCREMENT:
            return ++state;
        case DECREMENT:
            return --state;
        case RESET:
            return 0;
        default:
            return state;
    }
}