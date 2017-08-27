import {ActionReducer , Action} from '@ngrx/store';

export const POSITIVE = 'POSITIVE';
export const NEGATIVE = 'NEGATIVE';

export function statusReducer (state : boolean, action : Action){
    switch (action.type) {
        case POSITIVE : 
            return true;
        case NEGATIVE : 
            return false;
    }

}